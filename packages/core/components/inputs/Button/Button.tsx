'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import type { ButtonProps } from './Button.types'
import Spinner from '../../feedback/Spinner/Spinner'
import { useFunAnimation } from '../../../animations/useFunAnimation'

const VARIANT_STYLES = {
  primary: {
    background: 'var(--mark-accent-primary)',
    color: 'var(--mark-bg)',
    border: 'none',
    hoverShadow: 'var(--mark-shadow-accent)',
  },
  secondary: {
    background: 'var(--mark-bg-elevated)',
    color: 'var(--mark-fg)',
    border: '1px solid var(--mark-border-strong)',
    hoverShadow: 'none',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--mark-fg)',
    border: '1px solid transparent',
    hoverShadow: 'none',
  },
  destructive: {
    background: '#EF4444',
    color: '#FAFAFA',
    border: 'none',
    hoverShadow: '0 0 24px rgba(239, 68, 68, 0.25)',
  },
} as const

const SIZE_STYLES = {
  sm: {
    height: 'var(--mark-size-sm)',
    padding: '0 var(--mark-px-sm)',
    fontSize: 'var(--mark-text-sm)',
    iconSize: 'var(--mark-icon-sm)',
  },
  md: {
    height: 'var(--mark-size-md)',
    padding: '0 var(--mark-px-md)',
    fontSize: 'var(--mark-text-md)',
    iconSize: 'var(--mark-icon-md)',
  },
  lg: {
    height: 'var(--mark-size-lg)',
    padding: '0 var(--mark-px-lg)',
    fontSize: 'var(--mark-text-lg)',
    iconSize: 'var(--mark-icon-lg)',
  },
} as const

const SPINNER_COLOR_MAP: Record<string, 'accent' | 'white' | 'muted'> = {
  primary: 'muted',
  secondary: 'accent',
  ghost: 'accent',
  destructive: 'white',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  isDisabled = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  onClick,
  children,
  className = '',
}: ButtonProps) {
  const v = VARIANT_STYLES[variant]
  const s = SIZE_STYLES[size]
  const disabled = isDisabled || isLoading
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { triggerAnimation } = useFunAnimation()

  const handleClick = () => {
    if (disabled) return
    triggerAnimation({ trigger: 'click', originRef: buttonRef })
    onClick?.()
  }

  return (
    <motion.button
      ref={buttonRef}
      className={className}
      onClick={handleClick}
      disabled={disabled}
      whileHover={disabled ? {} : { y: -1 }}
      whileTap={disabled ? {} : { scale: 0.97, y: 0 }}
      transition={{
        duration: 0.12,
        ease: [0.34, 1.56, 0.64, 1], // mark-ease-bounce
      }}
      style={{
        // Layout
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--mark-space-2)',
        height: s.height,
        padding: s.padding,
        width: fullWidth ? '100%' : undefined,
        // Visual
        background: v.background,
        color: v.color,
        border: v.border,
        borderRadius: 'var(--mark-radius-md)',
        // Typography
        fontFamily: 'var(--mark-font-display)',
        fontWeight: 600,
        fontSize: s.fontSize,
        lineHeight: 1,
        // Interaction
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.4 : 1,
        outline: 'none',
        position: 'relative',
        // Transition for non-motion properties
        transition: `background var(--mark-duration-fast) var(--mark-ease-smooth),
                     box-shadow var(--mark-duration-fast) var(--mark-ease-smooth),
                     opacity var(--mark-duration-fast) var(--mark-ease-smooth)`,
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          const el = e.currentTarget
          if (variant === 'ghost') {
            el.style.background = 'var(--mark-bg-elevated)'
          }
          el.style.boxShadow = v.hoverShadow
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.background = v.background
        el.style.boxShadow = 'none'
      }}
      onFocus={(e) => {
        e.currentTarget.style.outline = '2px solid var(--mark-accent-primary)'
        e.currentTarget.style.outlineOffset = '2px'
      }}
      onBlur={(e) => {
        e.currentTarget.style.outline = 'none'
      }}
    >
      {isLoading ? (
        <Spinner size="sm" color={SPINNER_COLOR_MAP[variant]} />
      ) : (
        <>
          {leftIcon && (
            <span style={{ display: 'flex', fontSize: s.iconSize }}>
              {leftIcon}
            </span>
          )}
          {children}
          {rightIcon && (
            <span style={{ display: 'flex', fontSize: s.iconSize }}>
              {rightIcon}
            </span>
          )}
        </>
      )}
    </motion.button>
  )
}
