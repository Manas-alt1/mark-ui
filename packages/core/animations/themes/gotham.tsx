"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimationInstance } from '../useFunAnimation';

export default function GothamAnimations({ instance, onComplete }: { instance: AnimationInstance, onComplete: () => void }) {
  const { trigger, rect } = instance;

  switch (trigger) {
    case 'click':
      return <GothamClick rect={rect} onComplete={onComplete} />;
    case 'toggle-on':
      return <GothamToggleOn rect={rect} onComplete={onComplete} />;
    case 'check':
      return <GothamCheck rect={rect} onComplete={onComplete} />;
    case 'mount':
      return <GothamMount rect={rect} onComplete={onComplete} />;
    case 'dismiss':
      return <GothamDismiss rect={rect} onComplete={onComplete} />;
    default:
      return <Fallback onComplete={onComplete} />;
  }
}

function GothamClick({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <motion.svg
      initial={{ y: 0, x: 0, rotate: 0, opacity: 1, scaleX: 1 }}
      animate={{ y: -40, x: 15, rotate: -15, opacity: [1, 1, 0], scaleX: [1, 0.6, 1, 0.6, 1, 0.6, 1] }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      onAnimationComplete={onComplete}
      style={{
        position: 'absolute',
        top: rect.top + rect.height / 2 - 10,
        left: rect.left + rect.width / 2 - 6,
        width: 20,
        height: 12,
        color: 'var(--mark-accent-primary, #FFD700)',
      }}
      viewBox="0 0 20 12"
    >
      <path d="M10 12 L8 8 C3 7 0 3 0 0 C4 2 8 4 10 5 C12 4 16 2 20 0 C20 3 17 7 12 8 Z" fill="currentColor"/>
    </motion.svg>
  );
}

function GothamToggleOn({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.2, 1] }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      onAnimationComplete={onComplete}
      style={{
        position: 'absolute',
        top: rect.top + rect.height / 2 - 30,
        left: rect.left + rect.width / 2 - 40,
        width: 80,
        height: 60,
        background: 'radial-gradient(ellipse at center, rgba(255,215,0,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
        borderRadius: '50%',
      }}
    />
  );
}

function GothamCheck({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <>
      <motion.div
        initial={{ boxShadow: '0 0 0 0px rgba(255,215,0,0)' }}
        animate={{ boxShadow: ['0 0 0 0px rgba(255,215,0,0)', '0 0 0 6px rgba(255,215,0,0.4)', '0 0 0 0px rgba(255,215,0,0)'] }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'absolute',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          borderRadius: 'inherit',
        }}
        onAnimationComplete={onComplete}
      />
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'absolute',
          top: rect.top + rect.height / 2 - 5,
          left: rect.left + rect.width / 2 - 5,
          width: 10,
          height: 10,
          color: 'var(--mark-accent-primary, #FFD700)',
        }}
        viewBox="0 0 20 12"
      >
        <path d="M10 12 L8 8 C3 7 0 3 0 0 C4 2 8 4 10 5 C12 4 16 2 20 0 C20 3 17 7 12 8 Z" fill="currentColor"/>
      </motion.svg>
    </>
  );
}

function GothamMount({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <motion.div
      initial={{ y: -20, filter: 'brightness(0)' }}
      animate={{ y: [ -20, -5, 0 ], filter: [ 'brightness(0)', 'brightness(0.3)', 'brightness(1)' ] }}
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

function GothamDismiss({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <motion.div
      initial={{ filter: 'brightness(1)', backgroundColor: 'transparent' }}
      animate={{ filter: 'brightness(0)', backgroundColor: '#000' }}
      transition={{ duration: 0.2 }}
      onAnimationComplete={onComplete}
      style={{
        position: 'absolute',
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        borderRadius: 'inherit',
      }}
    />
  );
}


function Fallback({ onComplete }: { onComplete: () => void }) {
  useEffect(() => { onComplete() }, [onComplete]);
  return null;
}
