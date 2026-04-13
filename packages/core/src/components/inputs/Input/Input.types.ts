export interface InputProps {
  /** Field label displayed above input */
  label?: string
  /** Placeholder text */
  placeholder?: string
  /** Controlled value */
  value?: string
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'search' | 'number'
  /** Input size */
  size?: 'sm' | 'md' | 'lg'
  /** Disable the input */
  isDisabled?: boolean
  /** Show error state */
  isError?: boolean
  /** Show success state */
  isSuccess?: boolean
  /** Error message shown below input when isError */
  errorMessage?: string
  /** Helper text shown below input */
  helperText?: string
  /** Icon before input text */
  leftIcon?: React.ReactNode
  /** Icon after input text */
  rightIcon?: React.ReactNode
  /** Additional CSS class */
  className?: string
}
