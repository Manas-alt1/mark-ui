"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimationInstance } from '../useFunAnimation';

export default function ShinigamiAnimations({ instance, onComplete }: { instance: AnimationInstance, onComplete: () => void }) {
  const { trigger, rect } = instance;

  switch (trigger) {
    case 'click':
      return <ShinigamiClick rect={rect} onComplete={onComplete} />;
    case 'toggle-on':
      return <ShinigamiToggleOn rect={rect} onComplete={onComplete} />;
    case 'check':
      return <ShinigamiCheck rect={rect} onComplete={onComplete} />;
    case 'mount':
      return <ShinigamiMount rect={rect} onComplete={onComplete} />;
    case 'dismiss':
      return <ShinigamiDismiss rect={rect} onComplete={onComplete} />;
    default:
      return <Fallback onComplete={onComplete} />;
  }
}

function ShinigamiClick({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <motion.svg
      initial={{ y: 0, x: 0, rotate: 0, opacity: 1 }}
      animate={{ y: 60, x: 10, rotate: 25, opacity: [1, 1, 0] }}
      transition={{ duration: 0.8, times: [0, 0.7, 1], ease: 'easeOut' }}
      onAnimationComplete={onComplete}
      style={{
        position: 'absolute',
        top: rect.top + rect.height / 2,
        left: rect.left + rect.width / 2,
        width: 20,
        height: 8,
        color: 'var(--mark-accent-primary, #C9A84C)',
      }}
      viewBox="0 0 20 8"
    >
      <path d="M0,4 C5,0 15,0 20,4 C15,8 5,8 0,4 Z M5,4 L15,4" fill="currentColor" stroke="currentColor" strokeWidth="0.5"/>
    </motion.svg>
  );
}

function ShinigamiToggleOn({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <>
      {[0, 0.1].map((delay, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.6, delay, ease: 'easeOut' }}
          onAnimationComplete={i === 1 ? onComplete : undefined}
          style={{
            position: 'absolute',
            top: rect.top + rect.height / 2 - 10,
            left: rect.left + rect.width / 2 - 10,
            width: 20,
            height: 20,
            borderRadius: '50%',
            border: '1.5px solid var(--mark-accent-primary, #C9A84C)',
          }}
        />
      ))}
    </>
  );
}

function ShinigamiCheck({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  // Calligraphy Stroke + Ink Splatters
  const dots = React.useState(() => Array.from({ length: 3 }).map(() => ({
    x: (Math.random() - 0.5) * 16,
    y: (Math.random() - 0.5) * 16
  })))[0];

  return (
    <div style={{ position: 'absolute', top: rect.top, left: rect.left, width: rect.width, height: rect.height }}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="var(--mark-accent-primary, #C9A84C)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <motion.polyline
          points="20 6 9 17 4 12"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.0, 1.0] }}
        />
      </svg>
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.2 }}
          onAnimationComplete={i === dots.length - 1 ? () => setTimeout(onComplete, 400) : undefined}
          style={{
            position: 'absolute',
            top: '25%', // approximate end of checkmark
            left: '80%',
            width: 2,
            height: 2,
            borderRadius: '50%',
            backgroundColor: 'var(--mark-accent-primary, #C9A84C)',
            transform: `translate(${dot.x}px, ${dot.y}px)`,
          }}
        />
      ))}
    </div>
  );
}

function ShinigamiMount({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <motion.div
      initial={{ filter: 'brightness(0)', scale: 0.9 }}
      animate={{ filter: 'brightness(1)', scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      onAnimationComplete={onComplete}
      style={{
        position: 'absolute',
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 'inherit',
        mixBlendMode: 'overlay',
      }}
    />
  );
}

function ShinigamiDismiss({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const orbs = React.useState(() => Array.from({ length: 5 }).map(() => ({
    opacity: Math.random() * 0.5 + 0.3,
    y: -40 - Math.random() * 20,
    top: Math.random(),
    left: Math.random()
  })))[0];
  
  return (
    <>
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
        }}
      />
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, opacity: orb.opacity }}
          animate={{ y: orb.y, opacity: 0 }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          onAnimationComplete={i === orbs.length - 1 ? onComplete : undefined}
          style={{
            position: 'absolute',
            top: rect.top + (orb.top * rect.height),
            left: rect.left + (orb.left * rect.width),
            width: 4,
            height: 4,
            borderRadius: '50%',
            backgroundColor: 'var(--mark-accent-primary, #C9A84C)',
          }}
        />
      ))}
    </>
  );
}


function Fallback({ onComplete }: { onComplete: () => void }) {
  useEffect(() => { onComplete() }, [onComplete]);
  return null;
}
