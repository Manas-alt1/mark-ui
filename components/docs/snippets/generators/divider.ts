import type { SnippetContext } from '../types'

export function generateSnippet(ctx: SnippetContext): string {
  const { theme } = ctx

  return `'use client'

import { Divider } from '@markui/core'
import '@markui/core/styles'

// Theme: ${theme.name} (${theme.collection} collection)
// --mark-accent-primary: ${theme.tokens.accentPrimary}
// --mark-accent-glow:    ${theme.tokens.accentGlow}
// No animation trigger for Divider

export default function DividerExample() {
  return (
    <div style={{
      background: 'var(--mark-bg)',
      padding: 'var(--mark-space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--mark-space-4)',
      color: 'var(--mark-fg)',
      fontFamily: 'var(--mark-font-body)',
    }}>
      <p style={{ margin: 0 }}>Content above</p>

      {/* Horizontal divider (default) */}
      <Divider />

      <p style={{ margin: 0 }}>Content below</p>

      {/* Vertical divider — use inside a flex row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--mark-space-4)',
        height: 40,
      }}>
        <span>Left</span>
        <Divider orientation="vertical" />
        <span>Right</span>
      </div>
    </div>
  )
}`
}
