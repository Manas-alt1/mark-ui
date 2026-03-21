'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import type { InputProps } from './Input.types'
import { useFunAnimation } from '../../../animations/useFunAnimation'

const SIZE_STYLES = {
  sm: {
    height: 'var(--mark-size-sm)',
    fontSize: 'var(--mark-text-sm)',
  },
  md: {
    height: 'var(--mark-size-md)',
    fontSize: 'var(--mark-text-md)',
  },
  lg: {
    height: 'var(--mark-size-lg)',
    fontSize: 'var(--mark-text-lg)',
  },
} as const

export default function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  size = 'md',
  isDisabled = false,
  isError = false,
  isSuccess = false,
  errorMessage,
  helperText,
  leftIcon,
  rightIcon,
  className = '',
}: InputProps) {
  const [focused, setFocused] = useState(false)
  const [hasErrorShake, setHasErrorShake] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const s = SIZE_STYLES[size]
  const { triggerAnimation } = useFunAnimation()

  const handleFocus = () => {
    setFocused(true)
    triggerAnimation({ trigger: 'focus', originRef: wrapperRef })
  }

  // Determine border/shadow based on state
  let borderColor = 'var(--mark-border-strong)'
  let boxShadow = 'none'

  if (focused && !isError && !isSuccess) {
    borderColor = 'var(--mark-accent-primary)'
    boxShadow = '0 0 0 3px var(--mark-accent-subtle)'
  } else if (isError) {
    borderColor = '#EF4444'
    boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.12)'
  } else if (isSuccess) {
    borderColor = '#22C55E'
    boxShadow = '0 0 0 3px rgba(34, 197, 94, 0.12)'
  }

  const labelColor = focused
    ? 'var(--mark-accent-primary)'
    : 'var(--mark-fg-muted)'

  // Trigger error shake
  const triggerShake = () => {
    if (isError && !hasErrorShake) {
      setHasErrorShake(true)
      setTimeout(() => setHasErrorShake(false), 500)
    }
  }

  // Message below input
  const message = isError && errorMessage ? errorMessage : helperText
  const messageColor = isError && errorMessage ? '#EF4444' : 'var(--mark-fg-muted)'

  return (
    <div className={className} style={{ width: '100%' }}>
      {/* Label */}
      {label && (
        <label
          style={{
            display: 'block',
            fontFamily: 'var(--mark-font-body)',
            fontSize: 'var(--mark-text-sm)',
            color: labelColor,
            marginBottom: 'var(--mark-space-2)',
            transition: 'color var(--mark-duration-fast) var(--mark-ease-smooth)',
            cursor: isDisabled ? 'not-allowed' : 'pointer',
          }}
          onClick={() => inputRef.current?.focus()}
        >
          {label}
        </label>
      )}

      {/* Input wrapper */}
      <motion.div
        ref={wrapperRef}
        animate={hasErrorShake ? { x: [0, -4, 4, -4, 4, 0] } : {}}
        transition={{ duration: 0.4 }}
        onAnimationComplete={triggerShake}
        style={{ position: 'relative' }}
      >
        {/* Left icon */}
        {leftIcon && (
          <span
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              color: 'var(--mark-fg-muted)',
              fontSize: 'var(--mark-icon-md)',
              pointerEvents: 'none',
            }}
          >
            {leftIcon}
          </span>
        )}

        <input
          ref={inputRef}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={isDisabled}
          onFocus={handleFocus}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%',
            height: s.height,
            background: isDisabled ? 'var(--mark-bg)' : 'var(--mark-bg-elevated)',
            border: `1px solid ${borderColor}`,
            borderRadius: 'var(--mark-radius-md)',
            color: 'var(--mark-fg)',
            fontFamily: 'var(--mark-font-body)',
            fontSize: s.fontSize,
            paddingLeft: leftIcon ? '40px' : 'var(--mark-px-md)',
            paddingRight: rightIcon ? '40px' : 'var(--mark-px-md)',
            outline: 'none',
            opacity: isDisabled ? 0.4 : 1,
            cursor: isDisabled ? 'not-allowed' : 'text',
            boxShadow,
            transition: `border-color var(--mark-duration-fast) var(--mark-ease-smooth),
                         box-shadow var(--mark-duration-fast) var(--mark-ease-smooth)`,
          }}
        />

        {/* Right icon */}
        {rightIcon && (
          <span
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              color: 'var(--mark-fg-muted)',
              fontSize: 'var(--mark-icon-md)',
              pointerEvents: 'none',
            }}
          >
            {rightIcon}
          </span>
        )}
      </motion.div>

      {/* Helper / Error message */}
      {message && (
        <p
          style={{
            fontFamily: 'var(--mark-font-body)',
            fontSize: 'var(--mark-text-sm)',
            color: messageColor,
            marginTop: 'var(--mark-space-2)',
            marginBottom: 0,
          }}
        >
          {message}
        </p>
      )}
    </div>
  )
}
