"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimationInstance } from '../useFunAnimation';

export default function CyberpunkAnimations({ instance, onComplete }: { instance: AnimationInstance, onComplete: () => void }) {
  const { trigger, rect } = instance;

  useEffect(() => {
    // Only mount animations if trigger matches
    // Wait for animation to finish, then call onComplete
    const timer = setTimeout(onComplete, 1000); // fallback max duration
    return () => clearTimeout(timer);
  }, [trigger, onComplete]);

  switch (trigger) {
    case 'click':
      return <CyberpunkClick rect={rect} onComplete={onComplete} />;
    case 'toggle-on':
      return <CyberpunkToggleOn rect={rect} onComplete={onComplete} />;
    case 'check':
      return <CyberpunkCheck rect={rect} onComplete={onComplete} />;
    case 'mount':
      return <CyberpunkMount rect={rect} onComplete={onComplete} />;
    case 'dismiss':
      return <CyberpunkDismiss rect={rect} onComplete={onComplete} />;
    case 'focus':
      return <CyberpunkFocus rect={rect} onComplete={onComplete} />;
    default:
      return <Fallback onComplete={onComplete} />;
  }
}

function CyberpunkClick({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <motion.div
      initial={{ x: 0, opacity: 1, filter: 'blur(2px)' }}
      animate={{ x: 200, opacity: 0, filter: 'blur(8px)' }}
      transition={{ duration: 0.3, ease: [0.175, 0.885, 0.32, 1.275] /* snappy */ }}
      onAnimationComplete={onComplete}
      style={{
        position: 'absolute',
        top: rect.top + rect.height / 2 - 3,
        left: rect.right,
        width: 20,
        height: 6,
        borderRadius: 9999,
        backgroundColor: 'var(--mark-accent-secondary, #00F5FF)',
        boxShadow: '0 0 10px var(--mark-accent-secondary, #00F5FF)',
      }}
    />
  );
}

function CyberpunkToggleOn({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const sparks = React.useState(() => Array.from({ length: 4 }).map(() => ({
    angle: (Math.random() - 0.5) * Math.PI * 2,
    dist: 20 * Math.random() + 10
  })))[0];

  return (
    <>
      {sparks.map(({ angle, dist }, i) => {
        const color = i % 2 === 0 ? '#FF2D9B' : 'var(--mark-accent-secondary, #00F5FF)';
        const x = Math.cos(angle) * dist;
        const y = Math.sin(angle) * dist;
        
        return (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            animate={{ x, y, scale: 0, opacity: 0 }}
            transition={{ duration: 0.4, delay: i * 0.03, ease: 'easeOut' }}
            onAnimationComplete={i === sparks.length - 1 ? onComplete : undefined}
            style={{
              position: 'absolute',
              top: rect.top + rect.height / 2 - 1.5,
              left: rect.left + rect.width / 2 - 1.5,
              width: 3,
              height: 3,
              borderRadius: 9999,
              backgroundColor: color,
              boxShadow: `0 0 4px ${color}`,
            }}
          />
        );
      })}
    </>
  );
}

function CyberpunkCheck({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 80);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <>
      <motion.div
        initial={{ x: 2, opacity: 0.6 }}
        animate={{ x: -2 }}
        transition={{ duration: 0.04 }}
        style={{
          position: 'absolute',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          backgroundColor: '#FF0000',
          mixBlendMode: 'screen',
        }}
      />
      <motion.div
        initial={{ x: -2, opacity: 0.6 }}
        animate={{ x: 2 }}
        transition={{ duration: 0.04 }}
        style={{
          position: 'absolute',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          backgroundColor: '#00FFFF',
          mixBlendMode: 'screen',
        }}
      />
    </>
  );
}

function CyberpunkMount({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  // We simulate flickering a neon overlay
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0.3, 1, 0] }}
      transition={{ duration: 0.2, times: [0, 0.2, 0.5, 0.8, 1] }}
      onAnimationComplete={onComplete}
      style={{
        position: 'absolute',
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        backgroundColor: 'var(--mark-accent-secondary, #00F5FF)',
        mixBlendMode: 'screen',
        borderRadius: 'inherit',
      }}
    />
  );
}

function CyberpunkDismiss({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <div style={{ position: 'absolute', top: rect.top, left: rect.left, width: rect.width, height: rect.height, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div
        initial={{ scaleX: 1, scaleY: 0.05, opacity: 1 }}
        animate={{ scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeIn' }}
        onAnimationComplete={onComplete}
        style={{
          width: '100%',
          height: 2,
          backgroundColor: 'var(--mark-accent-secondary, #00F5FF)',
          boxShadow: '0 0 10px var(--mark-accent-secondary, #00F5FF)',
        }}
      />
    </div>
  );
}

function CyberpunkFocus({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const chars = ['0', '1', '¥', '$', '#', '@', '!'];
  const cols = React.useState(() => Array.from({ length: 6 }).map(() => chars[Math.floor(Math.random() * chars.length)]))[0];
  
  return (
    <>
      {cols.map((char, i) => {
        return (
          <motion.div
            key={i}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: [0, 1, 1, 0] }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            onAnimationComplete={i === cols.length - 1 ? onComplete : undefined}
            style={{
              position: 'absolute',
              top: rect.top - 20,
              left: rect.left + 5 + i * 12,
              color: 'var(--mark-accent-secondary, #00F5FF)',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              textShadow: '0 0 5px var(--mark-accent-secondary, #00F5FF)',
            }}
          >
            {char}
          </motion.div>
        );
      })}
    </>
  );
}


function Fallback({ onComplete }: { onComplete: () => void }) {
  useEffect(() => { onComplete() }, [onComplete]);
  return null;
}
