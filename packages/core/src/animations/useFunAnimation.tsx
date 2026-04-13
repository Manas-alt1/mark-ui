import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { useTheme } from '../theme/ThemeContext';
import { FunAnimationOverlay } from './FunAnimationOverlay';

export type AnimationTrigger =
  | 'click'
  | 'toggle-on'
  | 'toggle-off'
  | 'check'
  | 'uncheck'
  | 'mount'
  | 'dismiss'
  | 'focus';

export interface FunAnimationOptions {
  trigger: AnimationTrigger;
  originRef: React.RefObject<HTMLElement | null>;
}

export interface AnimationInstance extends FunAnimationOptions {
  id: string;
  theme: string;
  rect: DOMRect;
}

const FUN_THEMES = [
  'cyberpunk', 'shinigami', 'titan',
  'nebula', 'matrixx', 'gotham', 'akira', 'hobbit'
];

interface FunAnimationContextValue {
  triggerAnimation: (options: FunAnimationOptions) => void;
  instances: AnimationInstance[];
  removeInstance: (id: string) => void;
}

const FunAnimationContext = createContext<FunAnimationContextValue | undefined>(undefined);

export const FunAnimationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { theme } = useTheme();
  const [instances, setInstances] = useState<AnimationInstance[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const triggerAnimation = useCallback((options: FunAnimationOptions) => {
    if (prefersReducedMotion) return;
    if (!FUN_THEMES.includes(theme)) return;
    if (!options.originRef.current) return;

    const id = Math.random().toString(36).substring(2, 9);
    const rect = options.originRef.current.getBoundingClientRect();
    
    setInstances((prev) => [...prev, { ...options, id, theme, rect }]);
  }, [theme, prefersReducedMotion]);

  const removeInstance = useCallback((id: string) => {
    setInstances((prev) => prev.filter((inst) => inst.id !== id));
  }, []);

  return (
    <FunAnimationContext.Provider value={{ triggerAnimation, instances, removeInstance }}>
      {children}
      <FunAnimationOverlay />
    </FunAnimationContext.Provider>
  );
};

export function useFunAnimation() {
  const context = useContext(FunAnimationContext);
  if (context === undefined) {
    // If not wrapped in provider, just return a no-op fallback gracefully
    return {
      triggerAnimation: () => {},
      instances: [],
      removeInstance: () => {}
    };
  }
  return context;
}
