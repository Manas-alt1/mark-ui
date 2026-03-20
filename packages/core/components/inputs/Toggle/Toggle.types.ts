export interface ToggleProps {
  /** Controlled checked state */
  checked?: boolean
  /** Initial checked state (uncontrolled) */
  defaultChecked?: boolean
  /** Change handler */
  onChange?: (checked: boolean) => void
  /** Disable the toggle */
  isDisabled?: boolean
  /** Label text */
  label?: string
  /** Description below label */
  description?: string
  /** Toggle size */
  size?: 'sm' | 'md' | 'lg'
  /** Additional CSS class */
  className?: string
}
