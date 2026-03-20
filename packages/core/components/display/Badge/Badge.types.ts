export interface BadgeProps {
  /** Visual style */
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'accent'
  /** Badge size */
  size?: 'sm' | 'md'
  /** Show pulsing status dot before text */
  dot?: boolean
  /** Badge content */
  children: React.ReactNode
  /** Additional CSS class */
  className?: string
}
