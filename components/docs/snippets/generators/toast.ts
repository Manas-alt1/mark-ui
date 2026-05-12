import type { SnippetContext } from '../types'

export function generateSnippet(ctx: SnippetContext): string {
  const { theme } = ctx

  return `'use client'

import { Button, useToast, ToastProvider } from '@markui/core'
import '@markui/core/styles'

// Theme: ${theme.name} (${theme.collection} collection)
// --mark-accent-primary: ${theme.tokens.accentPrimary}
// --mark-accent-glow:    ${theme.tokens.accentGlow}
// No animation trigger — ToastProvider handles animations internally

// Wrap your app with ToastProvider at the root level
function App() {
  return (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  )
}

function ToastDemo() {
  const { toast, dismissAll } = useToast()

  return (
    <div style={{
      background: 'var(--mark-bg)',
      padding: 'var(--mark-space-8)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--mark-space-3)',
    }}>
      <Button
        variant="primary"
        onClick={() => toast({
          title: 'Changes saved',
          description: 'Your profile has been updated.',
          variant: 'success',
        })}
      >
        Success Toast
      </Button>

      <Button
        variant="secondary"
        onClick={() => toast({
          title: 'Build failed',
          description: 'Check the console for errors.',
          variant: 'error',
        })}
      >
        Error Toast
      </Button>

      <Button
        variant="ghost"
        onClick={() => toast({
          title: 'Rate limit warning',
          variant: 'warning',
          duration: 5000,
        })}
      >
        Warning Toast
      </Button>

      <Button
        variant="ghost"
        onClick={() => toast({
          title: 'New version available',
          description: 'v2.1.0 is ready to install.',
          variant: 'info',
          action: {
            label: 'Update',
            onClick: () => console.log('Updating...'),
          },
        })}
      >
        Info with Action
      </Button>

      <Button variant="ghost" onClick={dismissAll}>
        Dismiss All
      </Button>
    </div>
  )
}

export default App`
}
