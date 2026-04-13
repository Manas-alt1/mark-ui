import type { DividerProps } from './Divider.types'

const lineStyle: React.CSSProperties = {
  flex: 1,
  height: '1px',
  background: 'var(--mark-border)',
}

export default function Divider({
  orientation = 'horizontal',
  label,
  labelAlign = 'center',
  className = '',
}: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        className={className}
        role="separator"
        aria-orientation="vertical"
        style={{
          display: 'inline-block',
          width: '1px',
          height: '100%',
          background: 'var(--mark-border)',
          flexShrink: 0,
        }}
      />
    )
  }

  if (!label) {
    return (
      <div
        className={className}
        role="separator"
        aria-orientation="horizontal"
        style={{
          width: '100%',
          height: '1px',
          background: 'var(--mark-border)',
        }}
      />
    )
  }

  return (
    <div
      className={className}
      role="separator"
      aria-orientation="horizontal"
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        gap: 0,
      }}
    >
      <div
        style={{
          ...lineStyle,
          flex: labelAlign === 'left' ? '0 0 24px' : 1,
        }}
      />
      <span
        style={{
          padding: '0 var(--mark-space-3)',
          fontFamily: 'var(--mark-font-body)',
          fontSize: 'var(--mark-text-xs)',
          color: 'var(--mark-fg-subtle)',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        {label}
      </span>
      <div
        style={{
          ...lineStyle,
          flex: labelAlign === 'right' ? '0 0 24px' : 1,
        }}
      />
    </div>
  )
}
