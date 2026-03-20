'use client'

import { motion } from 'framer-motion'
import Badge from '@mark-ui/components/display/Badge/Badge'

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
        <thead><tr style={{ borderBottom: '1px solid var(--mark-border-strong)' }}>{['Prop', 'Type', 'Default', 'Description'].map(h => <th key={h} style={{ textAlign: 'left', padding: '8px 12px', color: 'var(--mark-fg-muted)', fontWeight: 600 }}>{h}</th>)}</tr></thead>
        <tbody>{rows.map(([p, t, d, desc]) => <tr key={p} style={{ borderBottom: '1px solid var(--mark-border)' }}><td style={{ padding: '8px 12px', color: 'var(--mark-accent-primary)', fontFamily: 'var(--mark-font-code)' }}>{p}</td><td style={{ padding: '8px 12px', color: 'var(--mark-fg-muted)', fontFamily: 'var(--mark-font-code)' }}>{t}</td><td style={{ padding: '8px 12px', color: 'var(--mark-fg-subtle)', fontFamily: 'var(--mark-font-code)' }}>{d}</td><td style={{ padding: '8px 12px', color: 'var(--mark-fg)' }}>{desc}</td></tr>)}</tbody>
      </table>
    </div>
  )
}

export default function BadgeDoc() {
  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '64px 24px' }}>
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        <motion.div variants={itemVariants} style={{ marginBottom: '48px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: 'var(--mark-radius-pill)', background: 'var(--mark-accent-glow)', color: 'var(--mark-accent-primary)', fontFamily: 'var(--mark-font-display)', marginBottom: '16px' }}>Component</span>
          <h1 style={{ fontFamily: 'var(--mark-font-display)', fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 800, color: 'var(--mark-fg)', margin: '0 0 12px' }}>Badge</h1>
          <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-lg)', color: 'var(--mark-fg-muted)', lineHeight: 1.6, maxWidth: '640px', margin: 0 }}>Small status and label indicators. Crisp and readable at small sizes.</p>
        </motion.div>

        <Section label="All Variants">
          <ShowcaseRow>
            <Badge variant="default">Default</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="accent">Accent</Badge>
          </ShowcaseRow>
        </Section>

        <Section label="Sizes">
          <ShowcaseRow>
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
          </ShowcaseRow>
        </Section>

        <Section label="With Dot">
          <ShowcaseRow>
            <Badge variant="success" dot>Online</Badge>
            <Badge variant="error" dot>Offline</Badge>
            <Badge variant="accent" dot>Live</Badge>
            <Badge variant="info" dot>Active</Badge>
          </ShowcaseRow>
        </Section>

        <Section label="Props">
          <PropsTable rows={[
            ['variant', "'default' | 'success' | 'warning' | 'error' | 'info' | 'accent'", "'default'", 'Visual style'],
            ['size', "'sm' | 'md'", "'md'", 'Badge size'],
            ['dot', 'boolean', 'false', 'Show pulsing status dot'],
            ['children', 'ReactNode', '—', 'Badge content'],
            ['className', 'string', "''", 'Additional CSS class'],
          ]} />
        </Section>

        <Section label="Animation Details">
          <div style={{ background: 'var(--mark-bg-elevated)', border: '1px solid var(--mark-border)', borderRadius: 'var(--mark-radius-md)', padding: '16px', fontFamily: 'var(--mark-font-code)', fontSize: '13px', color: 'var(--mark-fg)', lineHeight: 1.7 }}>
            <p style={{ margin: '0 0 8px' }}>Mount: scale(0.8→1) + opacity(0→1) · --mark-duration-fast · --mark-ease-bounce</p>
            <p style={{ margin: 0 }}>Dot pulse: scale(1→1.4→1) · 2s infinite · ease-in-out</p>
          </div>
        </Section>
      </motion.div>
    </div>
  )
}
