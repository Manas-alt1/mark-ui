import type { SnippetContext } from '../types'

export function generateSnippet(ctx: SnippetContext): string {
  const { theme } = ctx

  return `'use client'

import { useState } from 'react'
import { Drawer, Button } from '@markui/core'
import '@markui/core/styles'

// Theme: ${theme.name} (${theme.collection} collection)
// --mark-accent-primary: ${theme.tokens.accentPrimary}
// --mark-accent-glow:    ${theme.tokens.accentGlow}
// No animation trigger — Drawer uses built-in slide animation based on placement

export default function DrawerExample() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{
      background: 'var(--mark-bg)',
      padding: 'var(--mark-space-8)',
    }}>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Drawer
      </Button>

      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        placement="right"
        size="md"
        showBackdrop
        closeOnBackdrop
        closeOnEscape
      >
        <div style={{
          padding: 'var(--mark-space-6)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--mark-space-4)',
        }}>
          <h3 style={{
            margin: 0,
            fontFamily: 'var(--mark-font-display)',
            color: 'var(--mark-fg)',
          }}>
            Settings
          </h3>
          <p style={{
            margin: 0,
            color: 'var(--mark-fg)',
            opacity: 0.7,
            fontSize: 14,
          }}>
            Manage your account preferences.
          </p>
          <Button
            variant="ghost"
            onClick={() => setIsOpen(false)}
          >
            Close
          </Button>
        </div>
      </Drawer>
    </div>
  )
}`
}
