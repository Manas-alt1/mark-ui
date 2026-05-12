import type { SnippetContext } from '../types'

export function generateSnippet(ctx: SnippetContext): string {
  const { theme } = ctx

  return `'use client'

import { Skeleton } from '@markui/core'
import '@markui/core/styles'

// Theme: ${theme.name} (${theme.collection} collection)
// --mark-accent-primary: ${theme.tokens.accentPrimary}
// --mark-accent-glow:    ${theme.tokens.accentGlow}
// No animation trigger for Skeleton

export default function SkeletonExample() {
  return (
    <div style={{
      background: 'var(--mark-bg)',
      padding: 'var(--mark-space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--mark-space-6)',
      maxWidth: 400,
    }}>
      {/* Text skeleton — multi-line */}
      <Skeleton variant="text" lines={3} animation="pulse" />

      {/* Circle skeleton — avatar placeholder */}
      <div style={{ display: 'flex', gap: 'var(--mark-space-3)', alignItems: 'center' }}>
        <Skeleton variant="circle" width={48} height={48} />
        <div style={{ flex: 1 }}>
          <Skeleton variant="text" lines={2} />
        </div>
      </div>

      {/* Rectangle skeleton — card placeholder */}
      <Skeleton
        variant="rectangle"
        width="100%"
        height={160}
        animation="wave"
      />

      {/* No animation */}
      <Skeleton variant="text" lines={1} animation="none" />
    </div>
  )
}`
}
