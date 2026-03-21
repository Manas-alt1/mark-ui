"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimationInstance } from '../useFunAnimation';

export default function MatrixxAnimations({ instance, onComplete }: { instance: AnimationInstance, onComplete: () => void }) {
  const { trigger, rect } = instance;

  switch (trigger) {
    case 'click':
      return <MatrixxClick rect={rect} onComplete={onComplete} />;
    case 'toggle-on':
      return <MatrixxToggleOn rect={rect} onComplete={onComplete} />;
    case 'check':
      return <MatrixxCheck rect={rect} onComplete={onComplete} />;
    case 'mount':
      return <MatrixxMount rect={rect} onComplete={onComplete} />;
    case 'dismiss':
      return <MatrixxDismiss rect={rect} onComplete={onComplete} />;
    case 'focus':
      return <MatrixxFocus rect={rect} onComplete={onComplete} />;
    default:
      return <Fallback onComplete={onComplete} />;
  }
}

function MatrixxClick({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const chars = ['0', '1', 'ﾊ', 'ﾐ', 'ﾋ', 'ｳ', 'ｼ', 'ﾅ', 'ﾓ'];
  const column = React.useState(() => Array.from({ length: 8 }).map(() => chars[Math.floor(Math.random() * chars.length)]))[0];

  return (
    <>
      {column.map((char, i) => {
        return (
          <motion.div
            key={i}
            initial={{ y: -60 + (i * 10), opacity: i === 0 ? 1 : 1 - (i * 0.1), filter: i === 0 ? 'brightness(200%)' : 'none' }}
            animate={{ y: 20 + (i * 10), opacity: 0 }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: 'linear' }}
            onAnimationComplete={i === column.length - 1 ? onComplete : undefined}
            style={{
              position: 'absolute',
              top: rect.top - 20,
              left: rect.left + rect.width / 2 - 4,
              color: 'var(--mark-accent-primary, #00FF41)',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              textShadow: i === 0 ? '0 0 8px #00FF41' : 'none',
              pointerEvents: 'none',
            }}
          >
            {char}
          </motion.div>
        );
      })}
    </>
  );
}

function MatrixxToggleOn({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <motion.div
      initial={{ x: 0, opacity: 0.6 }}
      animate={{ x: rect.width, opacity: 0 }}
      transition={{ duration: 0.6, ease: 'linear' }}
      onAnimationComplete={onComplete}
      style={{
        position: 'absolute',
        top: rect.top + rect.height / 2 - 5,
        left: rect.left,
        color: '#00FF41',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '8px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        width: rect.width,
        pointerEvents: 'none',
      }}
    >
      01010101
    </motion.div>
  );
}

function MatrixxCheck({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <div style={{ position: 'absolute', top: rect.top, left: rect.left, width: rect.width, height: rect.height }}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="var(--mark-accent-primary, #00FF41)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <motion.polyline
          points="20 6 9 17 4 12"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 0, 0.4, 0.4, 1, 1] }} // Segment typing
          transition={{ duration: 0.45, times: [0, 0.22, 0.23, 0.55, 0.56, 1] }} 
          onAnimationComplete={onComplete}
        />
      </svg>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [1, 0, 1, 0] }}
        transition={{ duration: 0.45, delay: 0.45 }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '75%',
          width: 2,
          height: 10,
          backgroundColor: '#00FF41',
        }}
      />
    </div>
  );
}

function MatrixxMount({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <motion.div
      initial={{ filter: 'brightness(0)' }}
      animate={{ filter: 'brightness(1)' }}
      transition={{ duration: 0.5, ease: 'linear' }}
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

function MatrixxDismiss({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  // Static Pixel Dissolve
  const rows = Math.ceil(rect.height / 8);
  const cols = Math.ceil(rect.width / 8);
  const pixels = React.useState(() => Array.from({ length: rows * cols }).map(() => ({
    opacityPeak: Math.random(),
    delay: Math.random() * 0.2
  })))[0];

  return (
    <div style={{ position: 'absolute', top: rect.top, left: rect.left, width: rect.width, height: rect.height, display: 'grid', gridTemplateColumns: `repeat(${cols}, 8px)`, gridTemplateRows: `repeat(${rows}, 8px)` }}>
      {pixels.map((pixel, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, pixel.opacityPeak, 0] }}
          transition={{ duration: 0.4, delay: pixel.delay }}
          onAnimationComplete={i === pixels.length - 1 ? onComplete : undefined}
          style={{ width: 8, height: 8, backgroundColor: '#00FF41' }}
        />
      ))}
    </div>
  );
}

function MatrixxFocus({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <motion.div
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.3, ease: 'linear' }}
      onAnimationComplete={onComplete}
      style={{
        position: 'absolute',
        top: rect.top - 2,
        left: rect.left - 2,
        width: rect.width + 4,
        height: rect.height + 4,
      }}
    >
      <svg width="100%" height="100%" style={{ overflow: 'visible' }}>
        <motion.rect
          x="0" y="0" width="100%" height="100%"
          fill="none"
          stroke="#00FF41"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, ease: 'linear' }}
        />
      </svg>
    </motion.div>
  );
}


function Fallback({ onComplete }: { onComplete: () => void }) {
  useEffect(() => { onComplete() }, [onComplete]);
  return null;
}
