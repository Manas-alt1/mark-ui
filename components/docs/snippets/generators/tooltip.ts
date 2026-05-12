import type { SnippetContext } from '../types'

export function generateSnippet(ctx: SnippetContext): string {
  const { theme } = ctx

  return `'use client'

import { Tooltip, Button } from '@markui/core'
import '@markui/core/styles'

// Theme: ${theme.name} (${theme.collection} collection)
// --mark-accent-primary: ${theme.tokens.accentPrimary}
// --mark-accent-glow:    ${theme.tokens.accentGlow}
// No animation trigger for Tooltip

export default function TooltipExample() {
  return (
    <div style={{
      background: 'var(--mark-bg)',
      padding: 'var(--mark-space-8)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--mark-space-4)',
      alignItems: 'center',
    }}>
      {/* Default tooltip */}
      <Tooltip content="Save your changes">
        <Button variant="primary">Hover me</Button>
      </Tooltip>

      {/* Different positions */}
      <Tooltip content="Appears on top" placement="top">
        <Button variant="secondary">Top</Button>
      </Tooltip>

      <Tooltip content="Appears on bottom" placement="bottom">
        <Button variant="secondary">Bottom</Button>
      </Tooltip>

      <Tooltip content="Appears on left" placement="left">
        <Button variant="ghost">Left</Button>
      </Tooltip>

      <Tooltip content="Appears on right" placement="right">
        <Button variant="ghost">Right</Button>
      </Tooltip>
    </div>
  )
}`
}
