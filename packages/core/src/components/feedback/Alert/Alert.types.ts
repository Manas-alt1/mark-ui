export interface AlertProps {
  /** Visual style */
  variant?: 'info' | 'success' | 'warning' | 'error' | 'accent'
  /** Bold title line */
  title?: string
  /** Show dismiss button */
  isDismissible?: boolean
  /** Dismiss callback */
  onDismiss?: () => void
  /** Custom icon override */
  icon?: React.ReactNode
  /** Show default icon (default: true) */
  showIcon?: boolean
  /** Alert body content */
  children: React.ReactNode
  /** Additional CSS class */
  className?: string
}
