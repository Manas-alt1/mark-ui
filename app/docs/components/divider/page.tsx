'use client'

import { motion } from 'framer-motion'
import Divider from '@mark-ui/components/layout/Divider/Divider'

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }
const itemVariants = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } } }
function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return <motion.div variants={itemVariants} style={{ marginBottom: '48px' }}><h2 style={{ fontFamily: 'var(--mark-font-display)', fontSize: 'var(--mark-text-sm)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--mark-fg)', opacity: 0.4, marginBottom: '24px' }}>{label}</h2>{children}</motion.div>
}
function PropsTable({ rows }: { rows: [string, string, string, string][] }) {
  return <div style={{ overflowX: 'auto' }}><table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)' }}><thead><tr style={{ borderBottom: '1px solid var(--mark-border-strong)' }}>{['Prop','Type','Default','Description'].map(h=><th key={h} style={{ textAlign:'left', padding:'8px 12px', color:'var(--mark-fg-muted)', fontWeight:600 }}>{h}</th>)}</tr></thead><tbody>{rows.map(([p,t,d,desc])=><tr key={p} style={{ borderBottom:'1px solid var(--mark-border)' }}><td style={{ padding:'8px 12px', color:'var(--mark-accent-primary)', fontFamily:'var(--mark-font-code)' }}>{p}</td><td style={{ padding:'8px 12px', color:'var(--mark-fg-muted)', fontFamily:'var(--mark-font-code)' }}>{t}</td><td style={{ padding:'8px 12px', color:'var(--mark-fg-subtle)', fontFamily:'var(--mark-font-code)' }}>{d}</td><td style={{ padding:'8px 12px', color:'var(--mark-fg)' }}>{desc}</td></tr>)}</tbody></table></div>
}

export default function DividerDoc() {
  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '64px 24px' }}>
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        <motion.div variants={itemVariants} style={{ marginBottom: '48px' }}>
          <span style={{ display: 'inline-flex', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: 'var(--mark-radius-pill)', background: 'var(--mark-accent-glow)', color: 'var(--mark-accent-primary)', fontFamily: 'var(--mark-font-display)', marginBottom: '16px' }}>Component</span>
          <h1 style={{ fontFamily: 'var(--mark-font-display)', fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 800, color: 'var(--mark-fg)', margin: '0 0 12px' }}>Divider</h1>
          <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-lg)', color: 'var(--mark-fg-muted)', lineHeight: 1.6, maxWidth: '640px', margin: 0 }}>Separates sections, sidebar items, and content areas.</p>
        </motion.div>

        <Section label="Horizontal Default"><Divider /></Section>
        <Section label="With Centered Label"><Divider label="Section" /></Section>
        <Section label="Label Alignments">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Divider label="Left" labelAlign="left" />
            <Divider label="Center" labelAlign="center" />
            <Divider label="Right" labelAlign="right" />
          </div>
        </Section>
        <Section label="Vertical">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', height: '48px' }}>
            <span style={{ color: 'var(--mark-fg)', fontFamily: 'var(--mark-font-body)' }}>Item A</span>
            <Divider orientation="vertical" />
            <span style={{ color: 'var(--mark-fg)', fontFamily: 'var(--mark-font-body)' }}>Item B</span>
            <Divider orientation="vertical" />
            <span style={{ color: 'var(--mark-fg)', fontFamily: 'var(--mark-font-body)' }}>Item C</span>
          </div>
        </Section>
        <Section label="Props"><PropsTable rows={[
          ['orientation',"'horizontal'|'vertical'","'horizontal'",'Line direction'],
          ['label','string','—','Optional text label'],
          ['labelAlign',"'left'|'center'|'right'","'center'",'Label position'],
          ['className','string',"''",'Additional CSS class'],
        ]} /></Section>
      </motion.div>
    </div>
  )
}
