export interface DividerProps {
  /** Line direction */
  orientation?: 'horizontal' | 'vertical'
  /** Optional text label */
  label?: string
  /** Label position when label is provided */
  labelAlign?: 'left' | 'center' | 'right'
  /** Additional CSS class */
  className?: string
}
