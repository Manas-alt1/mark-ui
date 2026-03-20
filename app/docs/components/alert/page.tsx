'use client'

import { motion } from 'framer-motion'
import Alert from '@mark-ui/components/feedback/Alert/Alert'

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }
const itemVariants = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } } }
function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return <motion.div variants={itemVariants} style={{ marginBottom: '48px' }}><h2 style={{ fontFamily: 'var(--mark-font-display)', fontSize: 'var(--mark-text-sm)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--mark-fg)', opacity: 0.4, marginBottom: '24px' }}>{label}</h2>{children}</motion.div>
}
function PropsTable({ rows }: { rows: [string, string, string, string][] }) {
  return <div style={{ overflowX: 'auto' }}><table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)' }}><thead><tr style={{ borderBottom: '1px solid var(--mark-border-strong)' }}>{['Prop','Type','Default','Description'].map(h=><th key={h} style={{ textAlign:'left', padding:'8px 12px', color:'var(--mark-fg-muted)', fontWeight:600 }}>{h}</th>)}</tr></thead><tbody>{rows.map(([p,t,d,desc])=><tr key={p} style={{ borderBottom:'1px solid var(--mark-border)' }}><td style={{ padding:'8px 12px', color:'var(--mark-accent-primary)', fontFamily:'var(--mark-font-code)' }}>{p}</td><td style={{ padding:'8px 12px', color:'var(--mark-fg-muted)', fontFamily:'var(--mark-font-code)' }}>{t}</td><td style={{ padding:'8px 12px', color:'var(--mark-fg-subtle)', fontFamily:'var(--mark-font-code)' }}>{d}</td><td style={{ padding:'8px 12px', color:'var(--mark-fg)' }}>{desc}</td></tr>)}</tbody></table></div>
}

export default function AlertDoc() {
  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '64px 24px' }}>
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        <motion.div variants={itemVariants} style={{ marginBottom: '48px' }}>
          <span style={{ display: 'inline-flex', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: 'var(--mark-radius-pill)', background: 'var(--mark-accent-glow)', color: 'var(--mark-accent-primary)', fontFamily: 'var(--mark-font-display)', marginBottom: '16px' }}>Component</span>
          <h1 style={{ fontFamily: 'var(--mark-font-display)', fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 800, color: 'var(--mark-fg)', margin: '0 0 12px' }}>Alert</h1>
          <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-lg)', color: 'var(--mark-fg-muted)', lineHeight: 1.6, maxWidth: '640px', margin: 0 }}>Inline feedback messages for info, warning, and tip callout boxes.</p>
        </motion.div>

        <Section label="All Variants">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Alert variant="info" title="Information">This is an informational alert message.</Alert>
            <Alert variant="success" title="Success">Operation completed successfully.</Alert>
            <Alert variant="warning" title="Warning">Please review before proceeding.</Alert>
            <Alert variant="error" title="Error">Something went wrong.</Alert>
            <Alert variant="accent" title="Accent">This uses theme accent colors.</Alert>
          </div>
        </Section>

        <Section label="Without Title">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Alert variant="info">A simple informational message without a title.</Alert>
            <Alert variant="success">Your changes have been saved.</Alert>
          </div>
        </Section>

        <Section label="Dismissible (click ✕)">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Alert variant="info" title="Dismissible" isDismissible>Click the ✕ to dismiss this alert.</Alert>
            <Alert variant="warning" isDismissible>This warning can be dismissed.</Alert>
          </div>
        </Section>

        <Section label="Custom Icon">
          <Alert variant="accent" title="Custom" icon="🚀">Using a custom icon instead of the default.</Alert>
        </Section>

        <Section label="Props"><PropsTable rows={[
          ['variant',"'info'|'success'|'warning'|'error'|'accent'","'info'",'Visual style'],
          ['title','string','—','Bold title line'],
          ['isDismissible','boolean','false','Show dismiss button'],
          ['onDismiss','() => void','—','Dismiss callback'],
          ['icon','ReactNode','—','Custom icon override'],
          ['showIcon','boolean','true','Show default icon'],
          ['children','ReactNode','—','Alert body content'],
          ['className','string',"''",'Additional CSS class'],
        ]} /></Section>

        <Section label="Animation Details">
          <div style={{ background: 'var(--mark-bg-elevated)', border: '1px solid var(--mark-border)', borderRadius: 'var(--mark-radius-md)', padding: '16px', fontFamily: 'var(--mark-font-code)', fontSize: '13px', color: 'var(--mark-fg)', lineHeight: 1.7 }}>
            <p style={{ margin: '0 0 8px' }}>Mount: height(0→auto) + opacity(0→1) · --mark-duration-normal · --mark-ease-smooth</p>
            <p style={{ margin: 0 }}>Dismiss: height(auto→0) + opacity(1→0) · --mark-duration-normal · --mark-ease-snappy · AnimatePresence</p>
          </div>
        </Section>
      </motion.div>
    </div>
  )
}
