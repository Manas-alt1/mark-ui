"use client";

import {
  useState,
  useEffect,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { applyTheme, defaultTheme, getSafeThemeId, isThemeLive, type ThemeId } from "./themes";
import { ThemeContext, type ThemeContextValue } from "@markui/core/theme/ThemeContext";
import { FunAnimationProvider } from "@markui/core/animations/useFunAnimation";

const STORAGE_KEY = "mark-ui-theme";

const emptySubscribe = () => () => {};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const [theme, setThemeState] = useState<ThemeId>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY) as ThemeId | null;
      if (stored) {
        // Validate that the stored theme is live, fallback to default if not
        return getSafeThemeId(stored);
      }
    }
    return defaultTheme;
  });

  // Define setTheme first so it can be used in effects
  const setTheme = useCallback((newTheme: ThemeId) => {
    // Validate theme is live before applying
      const safeTheme = getSafeThemeId(newTheme);
      
      // Update state immediately
      setThemeState(safeTheme);

      // Apply to document immediately
      applyTheme(safeTheme);
      
      // Save to storage
      try {
        localStorage.setItem(STORAGE_KEY, safeTheme);
      } catch {
        // Ignore quota errors
      }
    },
    []
  );

  // Sync state if localStorage changes from another tab
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        const stored = e.newValue as ThemeId;
        if (!isThemeLive(stored)) {
          const fallback = getSafeThemeId(stored);
          setTheme(fallback);
        } else {
          setTheme(stored);
        }
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [setTheme]);

  // Validate current theme when page becomes visible (user returns to tab)
  useEffect(() => {
    const validateCurrentTheme = () => {
      if (!isThemeLive(theme)) {
        const safeTheme = getSafeThemeId(theme);
        applyTheme(safeTheme);
      }
    };

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        validateCurrentTheme();
      }
    };

    const handleFocus = () => {
      validateCurrentTheme();
    };

    // Check immediately
    validateCurrentTheme();

    // Listen for visibility changes and focus events
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);

    // Also check periodically (every 5 seconds) as a fallback
    const interval = setInterval(validateCurrentTheme, 5000);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
      clearInterval(interval);
    };
  }, [theme, setTheme]);

  // Prevent flash of wrong theme on SSR
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <FunAnimationProvider>
        {children}
      </FunAnimationProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
