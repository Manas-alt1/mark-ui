'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { CheckboxProps } from './Checkbox.types'

const SIZE_MAP = {
  sm: { box: 14, labelSize: 'var(--mark-text-sm)', stroke: 2 },
  md: { box: 18, labelSize: 'var(--mark-text-md)', stroke: 2.5 },
  lg: { box: 22, labelSize: 'var(--mark-text-lg)', stroke: 2.5 },
} as const

export default function Checkbox({
  checked: controlledChecked,
  defaultChecked = false,
  onChange,
  isDisabled = false,
  isIndeterminate = false,
  label,
  description,
  size = 'md',
  className = '',
}: CheckboxProps) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked)
  const isControlled = controlledChecked !== undefined
  const checked = isControlled ? controlledChecked : internalChecked
  const s = SIZE_MAP[size]

  const toggle = () => {
    if (isDisabled) return
    const next = !checked
    if (!isControlled) setInternalChecked(next)
    onChange?.(next)
  }

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
      {/* Hidden native input for accessibility */}
      <input
        type="checkbox"
        checked={checked}
        onChange={toggle}
        disabled={isDisabled}
        aria-checked={isIndeterminate ? 'mixed' : checked}
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

      {/* Custom box */}
      <motion.div
        animate={{ scale: checked ? [0.85, 1] : 1 }}
        transition={{
          duration: 0.12,
          ease: [0.34, 1.56, 0.64, 1], // mark-ease-bounce
        }}
        style={{
          width: s.box,
          height: s.box,
          flexShrink: 0,
          borderRadius: 'var(--mark-radius-sm)',
          border: checked
            ? '1.5px solid var(--mark-accent-primary)'
            : '1.5px solid var(--mark-border-strong)',
          background: checked
            ? 'var(--mark-accent-primary)'
            : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 2,
          transition: `background var(--mark-duration-fast) var(--mark-ease-smooth),
                       border-color var(--mark-duration-fast) var(--mark-ease-smooth)`,
        }}
      >
        {/* Checkmark or indeterminate dash */}
        {checked && !isIndeterminate && (
          <motion.svg
            width={s.box - 4}
            height={s.box - 4}
            viewBox="0 0 17 17"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.path
              d="M 3 8 L 7 12 L 14 5"
              stroke="var(--mark-bg)"
              strokeWidth={s.stroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
            />
          </motion.svg>
        )}
        {isIndeterminate && (
          <div
            style={{
              width: s.box - 8,
              height: s.stroke,
              borderRadius: 1,
              background: checked ? 'var(--mark-bg)' : 'var(--mark-fg)',
            }}
          />
        )}
      </motion.div>

      {/* Label + Description */}
      {(label || description) && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {label && (
            <span
              style={{
                fontFamily: 'var(--mark-font-body)',
                fontSize: s.labelSize,
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
