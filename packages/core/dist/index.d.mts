import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import react__default from 'react';

interface ButtonProps {
    /** Visual style */
    variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
    /** Button size */
    size?: 'sm' | 'md' | 'lg';
    /** Show spinner and disable interaction */
    isLoading?: boolean;
    /** Disable the button */
    isDisabled?: boolean;
    /** Icon before label */
    leftIcon?: React.ReactNode;
    /** Icon after label */
    rightIcon?: React.ReactNode;
    /** Stretch to fill container */
    fullWidth?: boolean;
    /** Click handler */
    onClick?: () => void;
    /** Button content */
    children: React.ReactNode;
    /** Additional CSS class */
    className?: string;
}

declare function Button({ variant, size, isLoading, isDisabled, leftIcon, rightIcon, fullWidth, onClick, children, className, }: ButtonProps): react_jsx_runtime.JSX.Element;

interface InputProps {
    /** Field label displayed above input */
    label?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Controlled value */
    value?: string;
    /** Change handler */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /** Input type */
    type?: 'text' | 'email' | 'password' | 'search' | 'number';
    /** Input size */
    size?: 'sm' | 'md' | 'lg';
    /** Disable the input */
    isDisabled?: boolean;
    /** Show error state */
    isError?: boolean;
    /** Show success state */
    isSuccess?: boolean;
    /** Error message shown below input when isError */
    errorMessage?: string;
    /** Helper text shown below input */
    helperText?: string;
    /** Icon before input text */
    leftIcon?: React.ReactNode;
    /** Icon after input text */
    rightIcon?: React.ReactNode;
    /** Additional CSS class */
    className?: string;
}

declare function Input({ label, placeholder, value, onChange, type, size, isDisabled, isError, isSuccess, errorMessage, helperText, leftIcon, rightIcon, className, }: InputProps): react_jsx_runtime.JSX.Element;

interface CheckboxProps {
    /** Controlled checked state */
    checked?: boolean;
    /** Initial checked state (uncontrolled) */
    defaultChecked?: boolean;
    /** Change handler */
    onChange?: (checked: boolean) => void;
    /** Disable the checkbox */
    isDisabled?: boolean;
    /** Show dash instead of check */
    isIndeterminate?: boolean;
    /** Label text */
    label?: string;
    /** Description below label */
    description?: string;
    /** Checkbox size */
    size?: 'sm' | 'md' | 'lg';
    /** Additional CSS class */
    className?: string;
}

declare function Checkbox({ checked: controlledChecked, defaultChecked, onChange, isDisabled, isIndeterminate, label, description, size, className, }: CheckboxProps): react_jsx_runtime.JSX.Element;

interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface SelectProps {
    /** Available options */
    options: SelectOption[];
    /** Current selected value */
    value?: string;
    /** Default selected value */
    defaultValue?: string;
    /** Placeholder text when no selection */
    placeholder?: string;
    /** Selection change handler */
    onChange?: (value: string) => void;
    /** Component size */
    size?: 'sm' | 'md' | 'lg';
    /** Disabled state */
    disabled?: boolean;
    /** Error state */
    error?: boolean;
    /** Additional CSS class */
    className?: string;
}

declare function Select({ options, value, defaultValue, placeholder, onChange, size, disabled, error, className, }: SelectProps): react_jsx_runtime.JSX.Element;

interface ToggleProps {
    /** Controlled checked state */
    checked?: boolean;
    /** Initial checked state (uncontrolled) */
    defaultChecked?: boolean;
    /** Change handler */
    onChange?: (checked: boolean) => void;
    /** Disable the toggle */
    isDisabled?: boolean;
    /** Label text */
    label?: string;
    /** Description below label */
    description?: string;
    /** Toggle size */
    size?: 'sm' | 'md' | 'lg';
    /** Additional CSS class */
    className?: string;
}

declare function Toggle({ checked: controlledChecked, defaultChecked, onChange, isDisabled, label, description, size, className, }: ToggleProps): react_jsx_runtime.JSX.Element;

interface AvatarProps {
    /** Image source URL */
    src?: string;
    /** Alt text for image */
    alt?: string;
    /** Fallback initials */
    initials?: string;
    /** Avatar size */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Shape variant */
    shape?: 'circle' | 'square';
    /** Status indicator */
    status?: 'online' | 'offline' | 'away' | 'busy';
    /** Click handler */
    onClick?: () => void;
    /** Additional CSS class */
    className?: string;
}

declare function Avatar({ src, alt, initials, size, shape, status, onClick, className, }: AvatarProps): react_jsx_runtime.JSX.Element;

interface BadgeProps {
    /** Visual style */
    variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'accent';
    /** Badge size */
    size?: 'sm' | 'md';
    /** Show pulsing status dot before text */
    dot?: boolean;
    /** Badge content */
    children: React.ReactNode;
    /** Additional CSS class */
    className?: string;
}

declare function Badge({ variant, size, dot, children, className, }: BadgeProps): react_jsx_runtime.JSX.Element;

interface CardProps {
    /** Visual style */
    variant?: 'default' | 'bordered' | 'elevated' | 'ghost';
    /** Internal padding */
    padding?: 'none' | 'sm' | 'md' | 'lg';
    /** Show hover lift effect */
    isHoverable?: boolean;
    /** Make card clickable with pointer cursor */
    isClickable?: boolean;
    /** Click handler */
    onClick?: () => void;
    /** Card content (can include Card.Header, Card.Body, Card.Footer) */
    children: React.ReactNode;
    /** Additional CSS class */
    className?: string;
}
interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}
interface CardBodyProps {
    children: React.ReactNode;
    className?: string;
}
interface CardFooterProps {
    children: React.ReactNode;
    className?: string;
}

declare function Card({ variant, padding, isHoverable, isClickable, onClick, children, className, }: CardProps): react_jsx_runtime.JSX.Element;
declare function CardHeader({ children, className }: CardHeaderProps): react_jsx_runtime.JSX.Element;
declare function CardBody({ children, className }: CardBodyProps): react_jsx_runtime.JSX.Element;
declare function CardFooter({ children, className }: CardFooterProps): react_jsx_runtime.JSX.Element;

interface TagProps {
    /** Tag content */
    children: React.ReactNode;
    /** Visual variant */
    variant?: 'default' | 'primary' | 'accent' | 'success' | 'warning' | 'danger';
    /** Tag size */
    size?: 'xs' | 'sm' | 'md';
    /** Removable with close button */
    removable?: boolean;
    /** Remove handler */
    onRemove?: () => void;
    /** Disabled state */
    disabled?: boolean;
    /** Additional CSS class */
    className?: string;
}

declare function Tag({ children, variant, size, removable, onRemove, disabled, className, }: TagProps): react_jsx_runtime.JSX.Element;

interface AlertProps {
    /** Visual style */
    variant?: 'info' | 'success' | 'warning' | 'error' | 'accent';
    /** Bold title line */
    title?: string;
    /** Show dismiss button */
    isDismissible?: boolean;
    /** Dismiss callback */
    onDismiss?: () => void;
    /** Custom icon override */
    icon?: React.ReactNode;
    /** Show default icon (default: true) */
    showIcon?: boolean;
    /** Alert body content */
    children: React.ReactNode;
    /** Additional CSS class */
    className?: string;
}

declare function Alert({ variant, title, isDismissible, onDismiss, icon, showIcon, children, className, }: AlertProps): react_jsx_runtime.JSX.Element;

interface SkeletonProps {
    /** Skeleton shape */
    variant?: 'text' | 'circle' | 'rectangle';
    /** Width (CSS value or number for px) */
    width?: string | number;
    /** Height (CSS value or number for px) */
    height?: string | number;
    /** Number of text lines */
    lines?: number;
    /** Animation type */
    animation?: 'pulse' | 'wave' | 'none';
    /** Additional CSS class */
    className?: string;
}

declare function Skeleton({ variant, width, height, lines, animation, className, }: SkeletonProps): react_jsx_runtime.JSX.Element;

interface SpinnerProps {
    /** Spinner diameter */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /** Stroke color */
    color?: 'accent' | 'white' | 'muted';
    /** Optional text below spinner */
    label?: string;
    /** Additional CSS class */
    className?: string;
}

declare function Spinner({ size, color, label, className, }: SpinnerProps): react_jsx_runtime.JSX.Element;

interface ModalProps {
    /** Modal visibility */
    open: boolean;
    /** Close handler */
    onClose: () => void;
    /** Modal size */
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    /** Close on backdrop click */
    closeOnBackdrop?: boolean;
    /** Close on Escape key */
    closeOnEscape?: boolean;
    /** Modal content */
    children: React.ReactNode;
    /** Additional CSS class */
    className?: string;
}
interface ModalHeaderProps {
    /** Header title */
    title?: string;
    /** Show close button */
    showClose?: boolean;
    /** Close handler */
    onClose?: () => void;
    /** Additional content */
    children?: React.ReactNode;
}
interface ModalBodyProps {
    /** Body content */
    children: React.ReactNode;
    /** Padding variant */
    padding?: 'none' | 'sm' | 'md' | 'lg';
}
interface ModalFooterProps {
    /** Footer content */
    children: React.ReactNode;
    /** Alignment */
    align?: 'left' | 'center' | 'right';
}

declare function Modal({ open, onClose, size, closeOnBackdrop, closeOnEscape, children, className, }: ModalProps): react.ReactPortal | null;
declare function ModalHeader({ title, showClose, onClose, children }: ModalHeaderProps): react_jsx_runtime.JSX.Element;
declare function ModalBody({ children, padding }: ModalBodyProps): react_jsx_runtime.JSX.Element;
declare function ModalFooter({ children, align }: ModalFooterProps): react_jsx_runtime.JSX.Element;

interface DrawerProps {
    /** Drawer visibility */
    open: boolean;
    /** Close handler */
    onClose: () => void;
    /** Slide direction */
    placement?: 'left' | 'right' | 'top' | 'bottom';
    /** Drawer size */
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    /** Show backdrop overlay */
    showBackdrop?: boolean;
    /** Close on backdrop click */
    closeOnBackdrop?: boolean;
    /** Close on Escape key */
    closeOnEscape?: boolean;
    /** Drawer content */
    children: React.ReactNode;
    /** Additional CSS class */
    className?: string;
}

declare function Drawer({ open, onClose, placement, size, showBackdrop, closeOnBackdrop, closeOnEscape, children, className, }: DrawerProps): react.ReactPortal | null;

interface ToastProps {
    /** Toast title */
    title?: string;
    /** Toast description */
    description?: string;
    /** Visual variant */
    variant?: 'success' | 'error' | 'warning' | 'info';
    /** Auto-dismiss duration (0 = no auto-dismiss) */
    duration?: number;
    /** Manual dismiss handler */
    onDismiss?: () => void;
    /** Action button */
    action?: {
        label: string;
        onClick: () => void;
    };
    /** Additional CSS class */
    className?: string;
}
interface ToastContextValue {
    toast: (props: Omit<ToastProps, 'onDismiss'>) => string;
    dismiss: (id: string) => void;
    dismissAll: () => void;
}

declare function Toast({ title, description, variant, duration, onDismiss, action, className, }: ToastProps): react_jsx_runtime.JSX.Element;

declare function useToast(): ToastContextValue;
interface ToastProviderProps {
    children: react__default.ReactNode;
    /** Maximum number of toasts to show at once */
    maxToasts?: number;
    /** Position of toast container */
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
}
declare function ToastProvider({ children, maxToasts, position }: ToastProviderProps): react_jsx_runtime.JSX.Element;

interface ContainerProps {
    /** Maximum width */
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    /** Center horizontally with auto margins */
    centered?: boolean;
    /** Add horizontal padding */
    padding?: boolean;
    /** Container content */
    children: React.ReactNode;
    /** Additional CSS class */
    className?: string;
}

declare function Container({ size, centered, padding, children, className, }: ContainerProps): react_jsx_runtime.JSX.Element;

interface DividerProps {
    /** Line direction */
    orientation?: 'horizontal' | 'vertical';
    /** Optional text label */
    label?: string;
    /** Label position when label is provided */
    labelAlign?: 'left' | 'center' | 'right';
    /** Additional CSS class */
    className?: string;
}

declare function Divider({ orientation, label, labelAlign, className, }: DividerProps): react_jsx_runtime.JSX.Element;

interface TooltipProps {
    /** Tooltip content */
    content: React.ReactNode;
    /** Trigger element */
    children: React.ReactNode;
    /** Positioning */
    placement?: 'top' | 'bottom' | 'left' | 'right';
    /** Show delay in milliseconds */
    showDelay?: number;
    /** Hide delay in milliseconds */
    hideDelay?: number;
    /** Disabled state */
    disabled?: boolean;
    /** Additional CSS class */
    className?: string;
}

declare function Tooltip({ content, children, placement, showDelay, hideDelay, disabled, className, }: TooltipProps): react_jsx_runtime.JSX.Element;

type ThemeId = 'monochrome' | 'arctic' | 'obsidian' | 'ivory' | 'slate' | 'sage' | 'carbon' | 'cyberpunk' | 'shinigami' | 'titan' | 'nebula' | 'matrixx' | 'gotham' | 'akira' | 'hobbit';
type ThemeCollection = 'professional' | 'fun';
type ThemeStatus = 'live' | 'planned';
interface ThemeTokens {
    accentPrimary: string;
    accentSecondary: string;
    accentGlow: string;
    accentSubtle: string;
}
interface Theme {
    id: ThemeId;
    name: string;
    collection: ThemeCollection;
    status: ThemeStatus;
    personality: string;
    tokens: ThemeTokens;
}

export { Alert, type AlertProps, Avatar, type AvatarProps, Badge, type BadgeProps, Button, type ButtonProps, Card, CardBody, type CardBodyProps, CardFooter, type CardFooterProps, CardHeader, type CardHeaderProps, type CardProps, Checkbox, type CheckboxProps, Container, type ContainerProps, Divider, type DividerProps, Drawer, type DrawerProps, Input, type InputProps, Modal, ModalBody, type ModalBodyProps, ModalFooter, type ModalFooterProps, ModalHeader, type ModalHeaderProps, type ModalProps, Select, type SelectOption, type SelectProps, Skeleton, type SkeletonProps, Spinner, type SpinnerProps, Tag, type TagProps, type Theme, type ThemeCollection, type ThemeId, type ThemeStatus, type ThemeTokens, Toast, type ToastContextValue, type ToastProps, ToastProvider, Toggle, type ToggleProps, Tooltip, type TooltipProps, useToast };
