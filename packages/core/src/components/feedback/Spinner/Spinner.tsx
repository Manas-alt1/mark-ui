import type { SpinnerProps } from './Spinner.types'

const SIZE_MAP = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
} as const

const COLOR_MAP = {
  accent: 'var(--mark-accent-primary)',
  white: 'var(--mark-fg)',
  muted: 'var(--mark-fg-muted)',
} as const

export default function Spinner({
  size = 'md',
  color = 'accent',
  label,
  className = '',
}: SpinnerProps) {
  const px = SIZE_MAP[size]
  const stroke = COLOR_MAP[color]
  const strokeWidth = size === 'sm' ? 3 : size === 'xl' ? 4 : 3.5
  const radius = (px - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const dashLength = circumference * 0.7

  return (
    <div
      className={className}
      role="status"
      aria-label={label ?? 'Loading'}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: label ? 'var(--mark-space-2)' : undefined,
      }}
    >
      <svg
        width={px}
        height={px}
        viewBox={`0 0 ${px} ${px}`}
        fill="none"
        style={{ animation: 'mark-spin 0.75s linear infinite' }}
      >
        {/* Track */}
        <circle
          cx={px / 2}
          cy={px / 2}
          r={radius}
          stroke={stroke}
          strokeWidth={strokeWidth}
          opacity={0.2}
        />
        {/* Indicator */}
        <circle
          cx={px / 2}
          cy={px / 2}
          r={radius}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${dashLength} ${circumference - dashLength}`}
          transform={`rotate(-90 ${px / 2} ${px / 2})`}
        />
      </svg>

      {label && (
        <span
          style={{
            fontFamily: 'var(--mark-font-body)',
            fontSize: 'var(--mark-text-sm)',
            color: 'var(--mark-fg-muted)',
          }}
        >
          {label}
        </span>
      )}

      {/* Keyframes injected once */}
      <style>{`
        @keyframes mark-spin {
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes mark-spin {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
        }
      `}</style>
    </div>
  )
}
