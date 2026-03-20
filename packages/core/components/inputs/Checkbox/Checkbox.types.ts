export interface CheckboxProps {
  /** Controlled checked state */
  checked?: boolean
  /** Initial checked state (uncontrolled) */
  defaultChecked?: boolean
  /** Change handler */
  onChange?: (checked: boolean) => void
  /** Disable the checkbox */
  isDisabled?: boolean
  /** Show dash instead of check */
  isIndeterminate?: boolean
  /** Label text */
  label?: string
  /** Description below label */
  description?: string
  /** Checkbox size */
  size?: 'sm' | 'md' | 'lg'
  /** Additional CSS class */
  className?: string
}
