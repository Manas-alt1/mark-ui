import type { SnippetContext } from '../types'

export function generateSnippet(ctx: SnippetContext): string {
  const { theme, isFun, trigger, animDescription } = ctx

  const animImport = isFun
    ? `\nimport { useFunAnimation } from '@markui/core/animations'`
    : ''
  const animHook = isFun
    ? `\n  const { triggerAnimation } = useFunAnimation()`
    : ''
  const animCallback = isFun && trigger
    ? `\n      triggerAnimation({ trigger: '${trigger}' })`
    : ''
  const animComment = isFun && animDescription
    ? `\n// Animation trigger: '${trigger}' → ${animDescription}`
    : ''

  return `'use client'

import { useState } from 'react'
import { Alert } from '@markui/core'${animImport}
import '@markui/core/styles'

// Theme: ${theme.name} (${theme.collection} collection)
// --mark-accent-primary: ${theme.tokens.accentPrimary}
// --mark-accent-glow:    ${theme.tokens.accentGlow}${animComment}

export default function AlertExample() {
  const [visible, setVisible] = useState(true)${animHook}

  return (
    <div style={{
      background: 'var(--mark-bg)',
      padding: 'var(--mark-space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--mark-space-4)',
      maxWidth: 520,
    }}>
      {/* Info variant */}
      <Alert variant="info" title="New update available">
        Version 2.1.0 includes performance improvements and bug fixes.
      </Alert>

      {/* Success variant */}
      <Alert variant="success" title="Deployment complete">
        Your changes are now live in production.
      </Alert>

      {/* Warning variant */}
      <Alert variant="warning" title="Rate limit approaching">
        You have used 90% of your API quota this month.
      </Alert>

      {/* Error variant */}
      <Alert variant="error" title="Build failed">
        TypeScript compilation error in src/index.ts:42.
      </Alert>

      {/* Accent variant */}
      <Alert variant="accent" title="Pro tip">
        Use keyboard shortcuts for faster navigation.
      </Alert>

      {/* Dismissible */}
      {visible && (
        <Alert
          variant="info"
          title="Dismissible alert"
          isDismissible
          onDismiss={() => {${animCallback}
            setVisible(false)
          }}
        >
          Click the close button to dismiss this alert.
        </Alert>
      )}
    </div>
  )
}`
}
