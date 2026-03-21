"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimationInstance } from '../useFunAnimation';

export default function TitanAnimations({ instance, onComplete }: { instance: AnimationInstance, onComplete: () => void }) {
  const { trigger, rect } = instance;

  switch (trigger) {
    case 'click':
      return <TitanClick rect={rect} onComplete={onComplete} />;
    case 'toggle-on':
      return <TitanToggleOn rect={rect} onComplete={onComplete} />;
    case 'check':
      return <TitanCheck rect={rect} onComplete={onComplete} />;
    case 'mount':
      return <TitanMount rect={rect} onComplete={onComplete} />;
    case 'dismiss':
      return <TitanDismiss rect={rect} onComplete={onComplete} />;
    default:
      return <Fallback onComplete={onComplete} />;
  }
}

function TitanClick({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <div style={{ position: 'absolute', top: rect.top + rect.height / 2 - 20, left: rect.left + rect.width / 2 - 20, width: 40, height: 40 }}>
      <svg width="40" height="40" viewBox="0 0 40 40" stroke="var(--mark-accent-primary, #8B6914)" strokeWidth="2" strokeLinecap="round">
        <motion.line
          x1="0" y1="0" x2="40" y2="40"
          initial={{ pathLength: 0, opacity: 1 }}
          animate={{ pathLength: 1, opacity: [1, 1, 0] }}
          transition={{ 
            pathLength: { duration: 0.15, ease: [0.175, 0.885, 0.32, 1.275] },
            opacity: { duration: 0.2, delay: 0.15 }
          }}
        />
        <motion.line
          x1="40" y1="0" x2="0" y2="40"
          initial={{ pathLength: 0, opacity: 1 }}
          animate={{ pathLength: 1, opacity: [1, 1, 0] }}
          transition={{ 
            pathLength: { duration: 0.15, ease: [0.175, 0.885, 0.32, 1.275] },
            opacity: { duration: 0.2, delay: 0.15 }
          }}
          onAnimationComplete={onComplete}
        />
      </svg>
    </div>
  );
}

function TitanToggleOn({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  useEffect(() => {
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  }, []);

  const dusts = React.useState(() => Array.from({ length: 3 }).map(() => ({
    x: (Math.random() - 0.5) * 10,
    y: (Math.random() - 0.5) * 10
  })))[0];
  
  return (
    <>
      {dusts.map((dust, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0.4 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.4 }}
          onAnimationComplete={i === dusts.length - 1 ? onComplete : undefined}
          style={{
            position: 'absolute',
            top: rect.top + rect.height / 2 - 4,
            left: rect.left + rect.width / 2 - 4,
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: '#8B6914',
            transformOrigin: 'center',
            transform: `translate(${dust.x}px, ${dust.y}px)`,
          }}
        />
      ))}
    </>
  );
}

function TitanCheck({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <motion.div
      initial={{ scale: 1, borderColor: 'transparent' }}
      animate={{ scale: [1, 1.2, 1], borderColor: ['transparent', 'var(--mark-accent-primary, #8B6914)', 'transparent'] }}
      transition={{ duration: 0.15 }}
      onAnimationComplete={onComplete}
      style={{
        position: 'absolute',
        top: rect.top - 2,
        left: rect.left - 2,
        width: rect.width + 4,
        height: rect.height + 4,
        borderRadius: 'inherit',
        border: 'solid',
        borderWidth: 2,
      }}
    />
  );
}

function TitanMount({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 600, damping: 20 }}
      onAnimationComplete={onComplete}
      style={{
        position: 'absolute',
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        backgroundColor: 'rgba(139, 105, 20, 0.1)',
        borderRadius: 'inherit',
      }}
    />
  );
}

function TitanDismiss({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <motion.div
      initial={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
      animate={{ x: -rect.width, opacity: 0, filter: 'blur(4px)' }}
      transition={{ duration: 0.3, ease: [0.175, 0.885, 0.32, 1.275] }}
      onAnimationComplete={onComplete}
      style={{
        position: 'absolute',
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        backgroundColor: 'rgba(255,255,255,0.05)',
      }}
    />
  );
}


function Fallback({ onComplete }: { onComplete: () => void }) {
  useEffect(() => { onComplete() }, [onComplete]);
  return null;
}
