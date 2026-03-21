"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimationInstance } from '../useFunAnimation';

export default function NebulaAnimations({ instance, onComplete }: { instance: AnimationInstance, onComplete: () => void }) {
  const { trigger, rect } = instance;

  switch (trigger) {
    case 'click':
      return <NebulaClick rect={rect} onComplete={onComplete} />;
    case 'toggle-on':
      return <NebulaToggleOn rect={rect} onComplete={onComplete} />;
    case 'check':
      return <NebulaCheck rect={rect} onComplete={onComplete} />;
    case 'mount':
      return <NebulaMount rect={rect} onComplete={onComplete} />;
    case 'dismiss':
      return <NebulaDismiss rect={rect} onComplete={onComplete} />;
    default:
      return <Fallback onComplete={onComplete} />;
  }
}

function NebulaClick({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const colors = ['#9B59B6', '#E74C3C', '#FAFAFA'];
  const dots = React.useState(() => Array.from({ length: 10 }).map(() => ({
    dist: 30 + Math.random() * 30,
    size: 2 + Math.random() * 3
  })))[0];

  return (
    <>
      {dots.map((dot, i) => {
        const color = colors[i % colors.length];
        const angle = (i / dots.length) * Math.PI * 2;
        const x = Math.cos(angle) * dot.dist;
        const y = Math.sin(angle) * dot.dist;

        return (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{ x, y, opacity: 0, scale: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            onAnimationComplete={i === dots.length - 1 ? onComplete : undefined}
            style={{
              position: 'absolute',
              top: rect.top + rect.height / 2 - dot.size / 2,
              left: rect.left + rect.width / 2 - dot.size / 2,
              width: dot.size,
              height: dot.size,
              borderRadius: '50%',
              backgroundColor: color,
              boxShadow: `0 0 4px ${color}`,
            }}
          />
        );
      })}
    </>
  );
}

function NebulaToggleOn({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const dots = Array.from({ length: 6 });
  return (
    <>
      {dots.map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3, delay: i * 0.03 }}
          onAnimationComplete={i === dots.length - 1 ? onComplete : undefined}
          style={{
            position: 'absolute',
            top: rect.top + rect.height / 2 - 2,
            left: rect.left + rect.width / 2 - 2 - (i * 4), // Trail behind
            width: 4,
            height: 4,
            borderRadius: '50%',
            background: `linear-gradient(90deg, #E74C3C, #9B59B6)`,
          }}
        />
      ))}
    </>
  );
}

function NebulaCheck({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const stars = Array.from({ length: 4 });
  const colors = ['#9B59B6', '#E74C3C'];
  
  return (
    <>
      {stars.map((_, i) => (
        <motion.svg
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          onAnimationComplete={i === stars.length - 1 ? onComplete : undefined}
          style={{
            position: 'absolute',
            top: rect.top + (rect.height * (0.8 - i * 0.15)),
            left: rect.left + (rect.width * (0.2 + i * 0.2)),
            width: 8,
            height: 8,
            color: colors[i % 2],
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5L12 0z"/>
        </motion.svg>
      ))}
    </>
  );
}

function NebulaMount({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 1, filter: 'brightness(10) blur(4px)' }}
      animate={{ scale: 1, opacity: 0, filter: 'brightness(1) blur(0px)' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      onAnimationComplete={onComplete}
      style={{
        position: 'absolute',
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        backgroundColor: '#FAFAFA',
        borderRadius: 'inherit',
      }}
    />
  );
}

function NebulaDismiss({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <motion.div
      initial={{ y: 0, x: 0, opacity: 1, rotate: 0 }}
      animate={{ y: -30, x: 15, opacity: 0, rotate: 5 }}
      transition={{ duration: 0.6, ease: [0.0, 0.0, 0.2, 1] }}
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
