'use client'

import { motion } from 'framer-motion'
import type { BadgeProps } from './Badge.types'

const VARIANT_STYLES = {
  default: {
    bg: 'var(--mark-bg-elevated)',
    color: 'var(--mark-fg)',
    border: '1px solid var(--mark-border-strong)',
    dotColor: 'var(--mark-fg)',
  },
  success: {
    bg: 'rgba(34, 197, 94, 0.12)',
    color: '#22C55E',
    border: '1px solid rgba(34, 197, 94, 0.25)',
    dotColor: '#22C55E',
  },
  warning: {
    bg: 'rgba(234, 179, 8, 0.12)',
    color: '#EAB308',
    border: '1px solid rgba(234, 179, 8, 0.25)',
    dotColor: '#EAB308',
  },
  error: {
    bg: 'rgba(239, 68, 68, 0.12)',
    color: '#EF4444',
    border: '1px solid rgba(239, 68, 68, 0.25)',
    dotColor: '#EF4444',
  },
  info: {
    bg: 'rgba(59, 130, 246, 0.12)',
    color: '#3B82F6',
    border: '1px solid rgba(59, 130, 246, 0.25)',
    dotColor: '#3B82F6',
  },
  accent: {
    bg: 'var(--mark-accent-subtle)',
    color: 'var(--mark-accent-primary)',
    border: '1px solid color-mix(in srgb, var(--mark-accent-primary) 25%, transparent)',
    dotColor: 'var(--mark-accent-primary)',
  },
} as const

const SIZE_STYLES = {
  sm: {
    fontSize: 'var(--mark-text-xs)',
    padding: '2px 6px',
    dotSize: 6,
  },
  md: {
    fontSize: 'var(--mark-text-sm)',
    padding: '4px 10px',
    dotSize: 7,
  },
} as const

export default function Badge({
  variant = 'default',
  size = 'md',
  dot = false,
  children,
  className = '',
}: BadgeProps) {
  const v = VARIANT_STYLES[variant]
  const s = SIZE_STYLES[size]

  return (
    <motion.span
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.12,
        ease: [0.34, 1.56, 0.64, 1], // mark-ease-bounce
      }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontFamily: 'var(--mark-font-display)',
        fontWeight: 600,
        fontSize: s.fontSize,
        padding: s.padding,
        borderRadius: 'var(--mark-radius-pill)',
        background: v.bg,
        color: v.color,
        border: v.border,
        lineHeight: 1,
        whiteSpace: 'nowrap',
      }}
    >
      {dot && (
        <motion.span
          animate={{ scale: [1, 1.4, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            width: s.dotSize,
            height: s.dotSize,
            borderRadius: '50%',
            backgroundColor: v.dotColor,
            flexShrink: 0,
          }}
        />
      )}
      {children}
    </motion.span>
  )
}
