import type { SnippetContext } from '../types'

export function generateSnippet(ctx: SnippetContext): string {
  const { theme } = ctx

  return `'use client'

import { useState } from 'react'
import { Modal, Button, Input } from '@markui/core'
import '@markui/core/styles'

// Theme: ${theme.name} (${theme.collection} collection)
// --mark-accent-primary: ${theme.tokens.accentPrimary}
// --mark-accent-glow:    ${theme.tokens.accentGlow}
// No animation trigger — Modal uses built-in spring: type:'spring', damping:25, stiffness:300

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{
      background: 'var(--mark-bg)',
      padding: 'var(--mark-space-8)',
    }}>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        size="md"
        closeOnBackdrop
        closeOnEscape
      >
        <Modal.Header
          title="Edit Profile"
          showClose
          onClose={() => setIsOpen(false)}
        >
          <p style={{
            margin: '4px 0 0',
            fontSize: 13,
            color: 'var(--mark-fg)',
            opacity: 0.6,
          }}>
            Make changes to your public profile.
          </p>
        </Modal.Header>

        <Modal.Body>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--mark-space-4)',
          }}>
            <Input label="Name" placeholder="Jane Doe" />
            <Input label="Email" placeholder="jane@example.com" />
          </div>
        </Modal.Body>

        <Modal.Footer align="right">
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setIsOpen(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}`
}
