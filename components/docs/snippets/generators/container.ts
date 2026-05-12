import type { SnippetContext } from '../types'

export function generateSnippet(ctx: SnippetContext): string {
  const { theme } = ctx

  return `'use client'

import { Container } from '@markui/core'
import '@markui/core/styles'

// Theme: ${theme.name} (${theme.collection} collection)
// --mark-accent-primary: ${theme.tokens.accentPrimary}
// --mark-accent-glow:    ${theme.tokens.accentGlow}
// No animation trigger for Container

export default function ContainerExample() {
  return (
    <div style={{ background: 'var(--mark-bg)' }}>
      <Container>
        <div style={{
          padding: 'var(--mark-space-8)',
          border: '1px dashed var(--mark-border-strong)',
          borderRadius: 'var(--mark-radius-md)',
          textAlign: 'center',
          color: 'var(--mark-fg)',
          fontFamily: 'var(--mark-font-body)',
        }}>
          Content is constrained to max-width within the Container.
        </div>
      </Container>
    </div>
  )
}`
}
