'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@mark-ui/components/inputs/Button/Button'
import Spinner from '@mark-ui/components/feedback/Spinner/Spinner'

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }
const itemVariants = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } } }

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <motion.div variants={itemVariants} style={{ marginBottom: '48px' }}>
      <h2 style={{ fontFamily: 'var(--mark-font-display)', fontSize: 'var(--mark-text-sm)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--mark-fg)', opacity: 0.4, marginBottom: '24px' }}>{label}</h2>
      {children}
    </motion.div>
  )
}

function ShowcaseRow({ children }: { children: React.ReactNode }) {
  return <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>{children}</div>
}

function PropsTable({ rows }: { rows: [string, string, string, string][] }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--mark-border-strong)' }}>
            {['Prop', 'Type', 'Default', 'Description'].map(h => (
              <th key={h} style={{ textAlign: 'left', padding: '8px 12px', color: 'var(--mark-fg-muted)', fontWeight: 600 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([prop, type, def, desc]) => (
            <tr key={prop} style={{ borderBottom: '1px solid var(--mark-border)' }}>
              <td style={{ padding: '8px 12px', color: 'var(--mark-accent-primary)', fontFamily: 'var(--mark-font-code)' }}>{prop}</td>
              <td style={{ padding: '8px 12px', color: 'var(--mark-fg-muted)', fontFamily: 'var(--mark-font-code)' }}>{type}</td>
              <td style={{ padding: '8px 12px', color: 'var(--mark-fg-subtle)', fontFamily: 'var(--mark-font-code)' }}>{def}</td>
              <td style={{ padding: '8px 12px', color: 'var(--mark-fg)' }}>{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function ButtonDoc() {
  const [loading, setLoading] = useState(false)

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '64px 24px' }}>
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        {/* Header */}
        <motion.div variants={itemVariants} style={{ marginBottom: '48px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: 'var(--mark-radius-pill)', background: 'var(--mark-accent-glow)', color: 'var(--mark-accent-primary)', fontFamily: 'var(--mark-font-display)', marginBottom: '16px' }}>Component</span>
          <h1 style={{ fontFamily: 'var(--mark-font-display)', fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 800, color: 'var(--mark-fg)', margin: '0 0 12px' }}>Button</h1>
          <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-lg)', color: 'var(--mark-fg-muted)', lineHeight: 1.6, maxWidth: '640px', margin: 0 }}>
            The primary action element. Available in four variants, three sizes, and a loading state that locks dimensions.
          </p>
        </motion.div>

        {/* All variants × sizes */}
        <Section label="Variants × Sizes">
          {(['primary', 'secondary', 'ghost', 'destructive'] as const).map(v => (
            <div key={v} style={{ marginBottom: '16px' }}>
              <p style={{ fontFamily: 'var(--mark-font-code)', fontSize: '12px', color: 'var(--mark-fg-subtle)', marginBottom: '8px' }}>{v}</p>
              <ShowcaseRow>
                <Button variant={v} size="sm">Small</Button>
                <Button variant={v} size="md">Medium</Button>
                <Button variant={v} size="lg">Large</Button>
              </ShowcaseRow>
            </div>
          ))}
        </Section>

        {/* Loading state */}
        <Section label="Loading State">
          <ShowcaseRow>
            <Button variant="primary" isLoading>Submit</Button>
            <Button variant="secondary" isLoading>Loading</Button>
            <Button
              variant="primary"
              isLoading={loading}
              onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 2000) }}
            >
              Click to load
            </Button>
          </ShowcaseRow>
        </Section>

        {/* Disabled */}
        <Section label="Disabled">
          <ShowcaseRow>
            <Button variant="primary" isDisabled>Primary</Button>
            <Button variant="secondary" isDisabled>Secondary</Button>
            <Button variant="ghost" isDisabled>Ghost</Button>
            <Button variant="destructive" isDisabled>Destructive</Button>
          </ShowcaseRow>
        </Section>

        {/* With icons */}
        <Section label="With Icons">
          <ShowcaseRow>
            <Button variant="primary" leftIcon="→">Navigate</Button>
            <Button variant="secondary" rightIcon="↗">External</Button>
            <Button variant="ghost" leftIcon="+" rightIcon="→">Add Item</Button>
          </ShowcaseRow>
        </Section>

        {/* Full width */}
        <Section label="Full Width">
          <Button variant="primary" fullWidth>Full Width Button</Button>
        </Section>

        {/* Props table */}
        <Section label="Props">
          <PropsTable rows={[
            ['variant', "'primary' | 'secondary' | 'ghost' | 'destructive'", "'primary'", 'Visual style'],
            ['size', "'sm' | 'md' | 'lg'", "'md'", 'Button size'],
            ['isLoading', 'boolean', 'false', 'Show spinner, disable interaction'],
            ['isDisabled', 'boolean', 'false', 'Disable the button'],
            ['leftIcon', 'ReactNode', '—', 'Icon before label'],
            ['rightIcon', 'ReactNode', '—', 'Icon after label'],
            ['fullWidth', 'boolean', 'false', 'Stretch to fill container'],
            ['onClick', '() => void', '—', 'Click handler'],
            ['children', 'ReactNode', '—', 'Button content'],
            ['className', 'string', "''", 'Additional CSS class'],
          ]} />
        </Section>

        {/* Animation details */}
        <Section label="Animation Details">
          <div style={{ background: 'var(--mark-bg-elevated)', border: '1px solid var(--mark-border)', borderRadius: 'var(--mark-radius-md)', padding: '16px', fontFamily: 'var(--mark-font-code)', fontSize: '13px', color: 'var(--mark-fg)', lineHeight: 1.7 }}>
            <p style={{ margin: '0 0 8px' }}>Hover: translateY(-1px) · duration: --mark-duration-fast · ease: --mark-ease-smooth</p>
            <p style={{ margin: '0 0 8px' }}>Click: scale(0.97) · duration: --mark-duration-fast · ease: --mark-ease-bounce</p>
            <p style={{ margin: 0 }}>Loading spinner fades in with --mark-duration-normal</p>
          </div>
        </Section>
      </motion.div>
    </div>
  )
}
