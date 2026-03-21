"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimationInstance } from '../useFunAnimation';

export default function AkiraAnimations({ instance, onComplete }: { instance: AnimationInstance, onComplete: () => void }) {
  const { trigger, rect } = instance;

  switch (trigger) {
    case 'click':
      return <AkiraClick rect={rect} onComplete={onComplete} />;
    case 'toggle-on':
      return <AkiraToggleOn rect={rect} onComplete={onComplete} />;
    case 'check':
      return <AkiraCheck rect={rect} onComplete={onComplete} />;
    case 'mount':
      return <AkiraMount rect={rect} onComplete={onComplete} />;
    case 'dismiss':
      return <AkiraDismiss rect={rect} onComplete={onComplete} />;
    default:
      return <Fallback onComplete={onComplete} />;
  }
}

function AkiraClick({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  const lines = React.useState(() => Array.from({ length: 8 }).map(() => ({
    width: 20 + Math.random() * 30,
    yOffset: (Math.random() - 0.5) * 30
  })))[0];
  
  return (
    <>
      {lines.map((line, i) => {
        const isLeft = i % 2 === 0;
        return (
          <motion.div
            key={i}
            initial={{ x: 0, opacity: 1 }}
            animate={{ x: isLeft ? -80 : 80, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.175, 0.885, 0.32, 1.275] /* snappy */ }}
            onAnimationComplete={i === lines.length - 1 ? onComplete : undefined}
            style={{
              position: 'absolute',
              top: rect.top + rect.height / 2 + line.yOffset,
              left: isLeft ? rect.left : rect.right,
              width: line.width,
              height: 1,
              backgroundColor: 'var(--mark-accent-primary, #FF4500)',
            }}
          />
        );
      })}
    </>
  );
}

function AkiraToggleOn({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <>
      <motion.div
        initial={{ filter: 'blur(4px)' }}
        animate={{ filter: 'blur(0px)' }}
        transition={{ duration: 0.1 }}
        style={{
          position: 'absolute',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          borderRadius: 'inherit',
          backgroundColor: 'transparent', // applies an overlay effect but we just do the trailing lines
        }}
      />
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ x: 0, opacity: 0.4 }}
          animate={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          onAnimationComplete={i === 2 ? onComplete : undefined}
          style={{
            position: 'absolute',
            top: rect.top + (rect.height / 4) * (i + 1),
            left: rect.left,
            width: rect.width,
            height: 1,
            backgroundColor: '#FF4500',
          }}
        />
      ))}
    </>
  );
}

function AkiraCheck({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 0.8 }}
        animate={{ scale: 3, opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: rect.top + rect.height / 2 - 10,
          left: rect.left + rect.width / 2 - 10,
          width: 20,
          height: 20,
          borderRadius: '50%',
          border: '2px solid var(--mark-accent-primary, #FF4500)',
        }}
      />
      <motion.div
        initial={{ scale: 0, opacity: 0.8 }}
        animate={{ scale: 3, opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
        onAnimationComplete={onComplete}
        style={{
          position: 'absolute',
          top: rect.top + rect.height / 2 - 10,
          left: rect.left + rect.width / 2 - 10,
          width: 20,
          height: 20,
          borderRadius: '50%',
          border: '2px solid var(--mark-accent-secondary, #0A0AFF)',
        }}
      />
    </>
  );
}

function AkiraMount({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 800, damping: 25 }}
        onAnimationComplete={onComplete}
        style={{
          position: 'absolute',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          backgroundColor: 'rgba(255, 69, 0, 0.1)', // subtle trail/mount effect
          borderRadius: 'inherit',
          zIndex: -1,
        }}
      />
    </>
  );
}

function AkiraDismiss({ rect, onComplete }: { rect: DOMRect, onComplete: () => void }) {
  return (
    <motion.div
      initial={{ x: 0, opacity: 1 }}
      animate={{ 
        x: [0, -4, 4, -3, 3, -2, 2, 0, -window.innerWidth * 1.2], 
        opacity: [1, 1, 1, 1, 1, 1, 1, 1, 0] 
      }}
      transition={{ 
        x: { times: [0, 0.06, 0.12, 0.18, 0.24, 0.3, 0.36, 0.6, 1], duration: 0.5 }
      }}
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
