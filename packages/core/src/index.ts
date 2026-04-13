'use client';

// MARK UI — Core Package Barrel Export

// --- Inputs ---
export { Button } from './components/inputs/Button'
export type { ButtonProps } from './components/inputs/Button'

export { Input } from './components/inputs/Input'
export type { InputProps } from './components/inputs/Input'

export { Checkbox } from './components/inputs/Checkbox'
export type { CheckboxProps } from './components/inputs/Checkbox'

export { Select } from './components/inputs/Select'
export type { SelectProps, SelectOption } from './components/inputs/Select'

export { Toggle } from './components/inputs/Toggle'
export type { ToggleProps } from './components/inputs/Toggle'

// --- Display ---
export { Avatar } from './components/display/Avatar'
export type { AvatarProps } from './components/display/Avatar'

export { Badge } from './components/display/Badge'
export type { BadgeProps } from './components/display/Badge'

export { Card, CardHeader, CardBody, CardFooter } from './components/display/Card'
export type { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps } from './components/display/Card'

export { Tag } from './components/display/Tag'
export type { TagProps } from './components/display/Tag'

// --- Feedback & Overlay ---
export { Alert } from './components/feedback/Alert'
export type { AlertProps } from './components/feedback/Alert'

export { Skeleton } from './components/feedback/Skeleton'
export type { SkeletonProps } from './components/feedback/Skeleton'

export { Spinner } from './components/feedback/Spinner'
export type { SpinnerProps } from './components/feedback/Spinner'

export { Modal, ModalHeader, ModalBody, ModalFooter } from './components/overlay/Modal'
export type { ModalProps, ModalHeaderProps, ModalBodyProps, ModalFooterProps } from './components/overlay/Modal'

export { Drawer } from './components/overlay/Drawer'
export type { DrawerProps } from './components/overlay/Drawer'

export { Toast, ToastProvider, useToast } from './components/overlay/Toast'
export type { ToastProps, ToastContextValue } from './components/overlay/Toast'

// --- Layout ---
export { Container } from './components/layout/Container'
export type { ContainerProps } from './components/layout/Container'

export { Divider } from './components/layout/Divider'
export type { DividerProps } from './components/layout/Divider'

export { Tooltip } from './components/layout/Tooltip'
export type { TooltipProps } from './components/layout/Tooltip'

// --- Shared Types ---
export * from './types'
