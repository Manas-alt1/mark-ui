import type { SnippetContext } from '../types'

export function generateSnippet(ctx: SnippetContext): string {
  const { theme } = ctx

  return `'use client'

import { Spinner } from '@markui/core'
import '@markui/core/styles'

// Theme: ${theme.name} (${theme.collection} collection)
// --mark-accent-primary: ${theme.tokens.accentPrimary}
// --mark-accent-glow:    ${theme.tokens.accentGlow}
// No animation trigger for Spinner

export default function SpinnerExample() {
  return (
    <div style={{
      background: 'var(--mark-bg)',
      padding: 'var(--mark-space-8)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--mark-space-6)',
      alignItems: 'center',
    }}>
      {/* All sizes */}
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />

      {/* Color variants */}
      <Spinner size="md" color="accent" />
      <Spinner size="md" color="white" />
      <Spinner size="md" color="muted" />

      {/* With label */}
      <Spinner size="md" label="Loading data..." />
    </div>
  )
}`
}
