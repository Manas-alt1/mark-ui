export interface CardProps {
  /** Visual style */
  variant?: 'default' | 'bordered' | 'elevated' | 'ghost'
  /** Internal padding */
  padding?: 'none' | 'sm' | 'md' | 'lg'
  /** Show hover lift effect */
  isHoverable?: boolean
  /** Make card clickable with pointer cursor */
  isClickable?: boolean
  /** Click handler */
  onClick?: () => void
  /** Card content (can include Card.Header, Card.Body, Card.Footer) */
  children: React.ReactNode
  /** Additional CSS class */
  className?: string
}

export interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export interface CardBodyProps {
  children: React.ReactNode
  className?: string
}

export interface CardFooterProps {
  children: React.ReactNode
  className?: string
}
