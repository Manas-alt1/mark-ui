export interface SpinnerProps {
  /** Spinner diameter */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** Stroke color */
  color?: 'accent' | 'white' | 'muted'
  /** Optional text below spinner */
  label?: string
  /** Additional CSS class */
  className?: string
}
