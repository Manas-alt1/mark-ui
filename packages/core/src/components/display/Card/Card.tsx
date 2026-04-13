'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type {
  CardProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
} from './Card.types'

const VARIANT_STYLES = {
  default: {
    background: 'var(--mark-bg-elevated)',
    border: '1px solid var(--mark-border)',
    boxShadow: 'none',
  },
  bordered: {
    background: 'transparent',
    border: '1px solid var(--mark-border-strong)',
    boxShadow: 'none',
  },
  elevated: {
    background: 'var(--mark-bg-elevated)',
    border: 'none',
    boxShadow: 'var(--mark-shadow-lg)',
  },
  ghost: {
    background: 'transparent',
    border: 'none',
    boxShadow: 'none',
  },
} as const

const PADDING_MAP = {
  none: '0',
  sm: 'var(--mark-space-4)',
  md: 'var(--mark-space-6)',
  lg: 'var(--mark-space-8)',
} as const

export const Card: React.FC<CardProps> & {
  Header: typeof CardHeader
  Body: typeof CardBody
  Footer: typeof CardFooter
} = ({
  variant = 'default',
  padding = 'md',
  isHoverable = false,
  isClickable = false,
  onClick,
  children,
  className = '',
}) => {
  const v = VARIANT_STYLES[variant]
  const interactive = isHoverable || isClickable

  return (
    <motion.div
      className={className}
      onClick={isClickable ? onClick : undefined}
      whileHover={
        interactive
          ? { y: -4 }
          : {}
      }
      whileTap={
        isClickable
          ? { y: -2 }
          : {}
      }
      transition={{
        duration: 0.24,
        ease: [0.4, 0, 0.2, 1], // mark-ease-smooth
      }}
      style={{
        background: v.background,
        border: v.border,
        boxShadow: v.boxShadow,
        borderRadius: 'var(--mark-radius-lg)',
        padding: PADDING_MAP[padding],
        cursor: isClickable ? 'pointer' : 'default',
        overflow: 'hidden',
        transition: `box-shadow var(--mark-duration-normal) var(--mark-ease-smooth)`,
      }}
      onMouseEnter={(e) => {
        if (interactive) {
          e.currentTarget.style.boxShadow = 'var(--mark-shadow-lg)'
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = v.boxShadow
      }}
    >
      {children}
    </motion.div>
  )
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div
      className={className}
      style={{
        borderBottom: '1px solid var(--mark-border)',
        padding: 'var(--mark-space-4) var(--mark-space-6)',
      }}
    >
      {children}
    </div>
  )
}

export function CardBody({ children, className = '' }: CardBodyProps) {
  return (
    <div
      className={className}
      style={{ padding: 'var(--mark-space-4) var(--mark-space-6)' }}
    >
      {children}
    </div>
  )
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div
      className={className}
      style={{
        borderTop: '1px solid var(--mark-border)',
        padding: 'var(--mark-space-4) var(--mark-space-6)',
      }}
    >
      {children}
    </div>
  )
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter

export default Card
