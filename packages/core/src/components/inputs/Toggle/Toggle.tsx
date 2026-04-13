'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import type { ToggleProps } from './Toggle.types'
import { useFunAnimation } from '../../../animations/useFunAnimation'

const SIZE_MAP = {
  sm: { trackW: 28, trackH: 16, thumb: 12 },
  md: { trackW: 40, trackH: 22, thumb: 16 },
  lg: { trackW: 52, trackH: 28, thumb: 22 },
} as const

export default function Toggle({
  checked: controlledChecked,
  defaultChecked = false,
  onChange,
  isDisabled = false,
  label,
  description,
  size = 'md',
  className = '',
}: ToggleProps) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked)
  const isControlled = controlledChecked !== undefined
  const checked = isControlled ? controlledChecked : internalChecked
  const s = SIZE_MAP[size]
  const thumbRef = useRef<HTMLDivElement>(null)
  const { triggerAnimation } = useFunAnimation()

  const toggle = () => {
    if (isDisabled) return
    const next = !checked
    if (!isControlled) setInternalChecked(next)
    
    // trigger fun animation ON STATE CHANGE
    triggerAnimation({
      trigger: next ? 'toggle-on' : 'toggle-off',
      originRef: thumbRef
    })

    onChange?.(next)
  }

  const thumbOffset = 2
  const thumbTravel = s.trackW - s.thumb - thumbOffset * 2

  return (
    <label
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'flex-start',
        gap: 'var(--mark-space-3)',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.4 : 1,
      }}
    >
      {/* Hidden input for accessibility */}
      <input
        type="checkbox"
        role="switch"
        checked={checked}
        onChange={toggle}
        disabled={isDisabled}
        aria-checked={checked}
        style={{
          position: 'absolute',
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: 'hidden',
          clip: 'rect(0,0,0,0)',
          border: 0,
        }}
      />

      {/* Track */}
      <div
        style={{
          position: 'relative',
          width: s.trackW,
          height: s.trackH,
          borderRadius: 'var(--mark-radius-pill)',
          background: checked
            ? 'var(--mark-accent-primary)'
            : 'var(--mark-bg-overlay)',
          border: checked
            ? 'none'
            : '1px solid var(--mark-border-strong)',
          flexShrink: 0,
          marginTop: 2,
          transition: `background var(--mark-duration-normal) var(--mark-ease-smooth)`,
        }}
      >
        {/* Thumb */}
        <motion.div
          ref={thumbRef}
          animate={{
            x: checked ? thumbTravel : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
          style={{
            position: 'absolute',
            top: thumbOffset,
            left: thumbOffset,
            width: s.thumb,
            height: s.thumb,
            borderRadius: '50%',
            background: 'var(--mark-fg)',
            boxShadow: 'var(--mark-shadow-sm)',
          }}
        />
      </div>

      {/* Label + Description */}
      {(label || description) && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {label && (
            <span
              style={{
                fontFamily: 'var(--mark-font-body)',
                fontSize: 'var(--mark-text-md)',
                color: 'var(--mark-fg)',
                lineHeight: 1.4,
              }}
            >
              {label}
            </span>
          )}
          {description && (
            <span
              style={{
                fontFamily: 'var(--mark-font-body)',
                fontSize: 'var(--mark-text-sm)',
                color: 'var(--mark-fg-muted)',
                lineHeight: 1.4,
                marginTop: 2,
              }}
            >
              {description}
            </span>
          )}
        </div>
      )}
    </label>
  )
}
