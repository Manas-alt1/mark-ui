"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimationInstance } from '../useFunAnimation';

export default function HobbitAnimations({ instance, onComplete }: { instance: AnimationInstance, onComplete: () => void }) {
  const { trigger, rect } = instance;

  switch (trigger) {
    case 'click':
      return <HobbitClick rect={rect} onComplete={onComplete} />;
    case 'toggle-on':
      return <HobbitToggleOn rect={rect} onComplete={onComplete} />;
    case 'check':
      return <HobbitCheck rect={rect} onComplete={onComplete} />;
    case 'mount':
      return <HobbitMount rect={rect} onComplete={onComplete} />;
    case 'dismiss':
      return <HobbitDismiss rect={rect} onComplete={onComplete} />;
    default:
      return <Fallback onComplete={onComplete} />;
  }
}

function HobbitClick({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <motion.svg
      initial={{ y: 0, x: 0, rotate: 0, opacity: 1 }}
      animate={{ y: 70, x: [0, -8, 8, -6, 6, -4, 0], rotate: 45, opacity: [1, 1, 0] }}
      transition={{ duration: 1.2, ease: 'easeOut', x: { duration: 1.2, ease: 'easeInOut' } }}
      onAnimationComplete={onComplete}
      style={{
        position: 'absolute',
        top: rect.top + rect.height / 2,
        left: rect.left + rect.width / 2,
        width: 16,
        height: 10,
        color: 'var(--mark-accent-secondary, #4A7C59)',
      }}
      viewBox="0 0 16 10"
    >
      <path d="M0 5 Q 8 0 16 5 Q 8 10 0 5 Z M 0 5 L 16 5" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
    </motion.svg>
  );
}

function HobbitToggleOn({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <motion.svg
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: 0.8 }}
      onAnimationComplete={onComplete}
      style={{
        position: 'absolute',
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        color: 'var(--mark-accent-secondary, #4A7C59)',
      }}
      viewBox={`0 0 ${rect.width} ${rect.height}`}
      fill="none"
    >
      <motion.path
        d={`M 0 ${rect.height/2} Q ${rect.width/4} ${rect.height/4} ${rect.width/2} ${rect.height/2} T ${rect.width} ${rect.height/2}`}
        stroke="currentColor"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.svg>
  );
}

function HobbitCheck({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <div style={{ position: 'absolute', top: rect.top, left: rect.left, width: rect.width, height: rect.height }}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="var(--mark-accent-secondary, #4A7C59)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <motion.line
          x1="9" y1="17" x2="4" y2="12"
          initial={{ rotate: -90, transformOrigin: '9px 17px' }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.4, type: 'spring', bounce: 0.4 }}
        />
        <motion.line
          x1="9" y1="17" x2="20" y2="6"
          initial={{ rotate: 90, transformOrigin: '9px 17px' }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.4, type: 'spring', bounce: 0.4 }}
          onAnimationComplete={onComplete}
        />
      </svg>
    </div>
  );
}

function HobbitMount({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <motion.div
      initial={{ scale: 0.1, filter: 'blur(3px) brightness(0.5)', borderRadius: '50%' }}
      animate={{ scale: 1, filter: 'blur(0px) brightness(1)', borderRadius: 'inherit' }}
      transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
      onAnimationComplete={onComplete}
      style={{
        position: 'absolute',
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        backgroundColor: 'rgba(74, 124, 89, 0.1)',
      }}
    />
  );
}

function HobbitDismiss({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const leaves = React.useState(() => Array.from({ length: 3 }).map(() => ({
    y: 20 + Math.random() * 30,
    x: (Math.random() - 0.5) * 60
  })))[0];
  
  return (
    <>
      <motion.div
        initial={{ x: 0, opacity: 1 }}
        animate={{ x: 30, opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          backgroundColor: 'rgba(255,255,255,0.05)',
        }}
      />
      {leaves.map((leaf, i) => (
        <motion.svg
          key={i}
          initial={{ y: 0, x: 0, rotate: 0, opacity: 1 }}
          animate={{ y: leaf.y, x: leaf.x, rotate: 180, opacity: 0 }}
          transition={{ duration: 0.4 }}
          onAnimationComplete={i === leaves.length - 1 ? onComplete : undefined}
          style={{
            position: 'absolute',
            top: rect.top + rect.height / 2,
            left: rect.left + rect.width / 2,
            width: 8,
            height: 5,
            color: 'var(--mark-accent-secondary, #4A7C59)',
          }}
          viewBox="0 0 16 10"
        >
          <path d="M0 5 Q 8 0 16 5 Q 8 10 0 5 Z" fill="currentColor" />
        </motion.svg>
      ))}
    </>
  );
}


function Fallback({ onComplete }: { onComplete: () => void }) {
  useEffect(() => { onComplete() }, [onComplete]);
  return null;
}
