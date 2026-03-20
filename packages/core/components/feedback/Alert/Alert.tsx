'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { AlertProps } from './Alert.types'

const VARIANT_STYLES = {
  info: {
    bg: 'rgba(59, 130, 246, 0.08)',
    borderColor: '#3B82F6',
    iconColor: '#3B82F6',
    defaultIcon: 'ℹ',
  },
  success: {
    bg: 'rgba(34, 197, 94, 0.08)',
    borderColor: '#22C55E',
    iconColor: '#22C55E',
    defaultIcon: '✓',
  },
  warning: {
    bg: 'rgba(234, 179, 8, 0.08)',
    borderColor: '#EAB308',
    iconColor: '#EAB308',
    defaultIcon: '⚠',
  },
  error: {
    bg: 'rgba(239, 68, 68, 0.08)',
    borderColor: '#EF4444',
    iconColor: '#EF4444',
    defaultIcon: '✕',
  },
  accent: {
    bg: 'var(--mark-accent-subtle)',
    borderColor: 'var(--mark-accent-primary)',
    iconColor: 'var(--mark-accent-primary)',
    defaultIcon: '★',
  },
} as const

export default function Alert({
  variant = 'info',
  title,
  isDismissible = false,
  onDismiss,
  icon,
  showIcon = true,
  children,
  className = '',
}: AlertProps) {
  const [visible, setVisible] = useState(true)
  const v = VARIANT_STYLES[variant]

  const handleDismiss = () => {
    setVisible(false)
    onDismiss?.()
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={className}
          role="alert"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{
            duration: 0.24,
            ease: [0.25, 0, 0, 1], // mark-ease-snappy
          }}
          style={{
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              background: v.bg,
              borderLeft: `3px solid ${v.borderColor}`,
              borderRadius: 'var(--mark-radius-md)',
              padding: 'var(--mark-space-4)',
              position: 'relative',
            }}
          >
            {/* Icon */}
            {showIcon && (
              <span
                style={{
                  fontSize: '20px',
                  flexShrink: 0,
                  color: v.iconColor,
                  lineHeight: 1,
                }}
              >
                {icon ?? v.defaultIcon}
              </span>
            )}

            {/* Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {title && (
                <div
                  style={{
                    fontFamily: 'var(--mark-font-display)',
                    fontWeight: 600,
                    fontSize: 'var(--mark-text-sm)',
                    color: v.iconColor,
                    marginBottom: '4px',
                  }}
                >
                  {title}
                </div>
              )}
              <div
                style={{
                  fontFamily: 'var(--mark-font-body)',
                  fontSize: 'var(--mark-text-sm)',
                  color: 'var(--mark-fg-muted)',
                  lineHeight: 'var(--mark-leading-normal)',
                }}
              >
                {children}
              </div>
            </div>

            {/* Dismiss button */}
            {isDismissible && (
              <button
                onClick={handleDismiss}
                aria-label="Dismiss"
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'none',
                  border: 'none',
                  color: 'var(--mark-fg-subtle)',
                  cursor: 'pointer',
                  fontSize: '16px',
                  lineHeight: 1,
                  display: 'flex',
                  padding: '2px',
                  transition: `color var(--mark-duration-fast) var(--mark-ease-smooth)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--mark-fg)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--mark-fg-subtle)'
                }}
              >
                ✕
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
