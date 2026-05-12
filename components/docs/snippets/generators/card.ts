import type { SnippetContext } from '../types'

export function generateSnippet(ctx: SnippetContext): string {
  const { theme } = ctx

  return `'use client'

import { Card, Button } from '@markui/core'
import '@markui/core/styles'

// Theme: ${theme.name} (${theme.collection} collection)
// --mark-accent-primary: ${theme.tokens.accentPrimary}
// --mark-accent-glow:    ${theme.tokens.accentGlow}
// No animation trigger — Card uses built-in whileHover y:-4 via isHoverable

export default function CardExample() {
  return (
    <div style={{
      background: 'var(--mark-bg)',
      padding: 'var(--mark-space-8)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'var(--mark-space-6)',
    }}>
      {/* Default variant with compound components */}
      <Card variant="default" padding="md">
        <Card.Header>
          <h4 style={{ margin: 0, color: 'var(--mark-fg)' }}>
            Project Update
          </h4>
          <p style={{ margin: '4px 0 0', fontSize: 13, color: 'var(--mark-fg)', opacity: 0.5 }}>
            Just now
          </p>
        </Card.Header>
        <Card.Body>
          <p style={{ margin: 0, color: 'var(--mark-fg)', opacity: 0.8, fontSize: 14, lineHeight: 1.6 }}>
            All 42 tests passed. Deployment pipeline completed successfully.
          </p>
        </Card.Body>
        <Card.Footer>
          <Button variant="ghost" size="sm">Dismiss</Button>
          <Button variant="secondary" size="sm">View Logs</Button>
        </Card.Footer>
      </Card>

      {/* Bordered variant — hoverable */}
      <Card variant="bordered" isHoverable>
        <Card.Body>
          <p style={{ margin: 0, color: 'var(--mark-fg)', opacity: 0.8 }}>
            Hover over this card to see the lift effect.
          </p>
        </Card.Body>
      </Card>

      {/* Elevated variant — clickable */}
      <Card variant="elevated" isClickable onClick={() => alert('Card clicked!')}>
        <Card.Body>
          <p style={{ margin: 0, color: 'var(--mark-fg)', opacity: 0.8 }}>
            Click this elevated card to trigger an action.
          </p>
        </Card.Body>
      </Card>

      {/* Ghost variant */}
      <Card variant="ghost" padding="lg">
        <Card.Body>
          <p style={{ margin: 0, color: 'var(--mark-fg)', opacity: 0.6 }}>
            Ghost cards blend with the background.
          </p>
        </Card.Body>
      </Card>
    </div>
  )
}`
}
