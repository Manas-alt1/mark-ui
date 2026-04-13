"use client";

import React from 'react';
import { createPortal } from 'react-dom';
import { useFunAnimation, AnimationInstance } from './useFunAnimation';
import dynamic from 'next/dynamic';

const CyberpunkAnimations = dynamic(() => import('./themes/cyberpunk'));
const ShinigamiAnimations = dynamic(() => import('./themes/shinigami'));
const TitanAnimations = dynamic(() => import('./themes/titan'));
const NebulaAnimations = dynamic(() => import('./themes/nebula'));
const MatrixxAnimations = dynamic(() => import('./themes/matrixx'));
const GothamAnimations = dynamic(() => import('./themes/gotham'));
const AkiraAnimations = dynamic(() => import('./themes/akira'));
const HobbitAnimations = dynamic(() => import('./themes/hobbit'));

function ThemeAnimationRouter({ instance, onComplete }: { instance: AnimationInstance, onComplete: () => void }) {
  const props = { instance, onComplete };
  switch (instance.theme) {
    case 'cyberpunk': return <CyberpunkAnimations {...props} />;
    case 'shinigami': return <ShinigamiAnimations {...props} />;
    case 'titan': return <TitanAnimations {...props} />;
    case 'nebula': return <NebulaAnimations {...props} />;
    case 'matrixx': return <MatrixxAnimations {...props} />;
    case 'gotham': return <GothamAnimations {...props} />;
    case 'akira': return <AkiraAnimations {...props} />;
    case 'hobbit': return <HobbitAnimations {...props} />;
    default:
      onComplete();
      return null;
  }
}

export function FunAnimationOverlay() {
  const { instances, removeInstance } = useFunAnimation();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof document === 'undefined') return null;

  return createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 600, // var(--mark-z-toast)
        overflow: 'hidden',
      }}
    >
      {instances.map((instance) => (
        <ThemeAnimationRouter
          key={instance.id}
          instance={instance}
          onComplete={() => removeInstance(instance.id)}
        />
      ))}
    </div>,
    document.body
  );
}
