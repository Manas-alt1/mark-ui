'use client'

import { motion } from 'framer-motion'
import Card from '@mark-ui/components/display/Card/Card'
import Button from '@mark-ui/components/inputs/Button/Button'
import Badge from '@mark-ui/components/display/Badge/Badge'

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }
const itemVariants = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } } }
function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return <motion.div variants={itemVariants} style={{ marginBottom: '48px' }}><h2 style={{ fontFamily: 'var(--mark-font-display)', fontSize: 'var(--mark-text-sm)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--mark-fg)', opacity: 0.4, marginBottom: '24px' }}>{label}</h2>{children}</motion.div>
}
function PropsTable({ rows }: { rows: [string, string, string, string][] }) {
  return <div style={{ overflowX: 'auto' }}><table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)' }}><thead><tr style={{ borderBottom: '1px solid var(--mark-border-strong)' }}>{['Prop','Type','Default','Description'].map(h=><th key={h} style={{ textAlign:'left', padding:'8px 12px', color:'var(--mark-fg-muted)', fontWeight:600 }}>{h}</th>)}</tr></thead><tbody>{rows.map(([p,t,d,desc])=><tr key={p} style={{ borderBottom:'1px solid var(--mark-border)' }}><td style={{ padding:'8px 12px', color:'var(--mark-accent-primary)', fontFamily:'var(--mark-font-code)' }}>{p}</td><td style={{ padding:'8px 12px', color:'var(--mark-fg-muted)', fontFamily:'var(--mark-font-code)' }}>{t}</td><td style={{ padding:'8px 12px', color:'var(--mark-fg-subtle)', fontFamily:'var(--mark-font-code)' }}>{d}</td><td style={{ padding:'8px 12px', color:'var(--mark-fg)' }}>{desc}</td></tr>)}</tbody></table></div>
}

export default function CardDoc() {
  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '64px 24px' }}>
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        <motion.div variants={itemVariants} style={{ marginBottom: '48px' }}>
          <span style={{ display: 'inline-flex', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: 'var(--mark-radius-pill)', background: 'var(--mark-accent-glow)', color: 'var(--mark-accent-primary)', fontFamily: 'var(--mark-font-display)', marginBottom: '16px' }}>Component</span>
          <h1 style={{ fontFamily: 'var(--mark-font-display)', fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 800, color: 'var(--mark-fg)', margin: '0 0 12px' }}>Card</h1>
          <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-lg)', color: 'var(--mark-fg-muted)', lineHeight: 1.6, maxWidth: '640px', margin: 0 }}>The primary content container. Compound component with Header, Body, and Footer slots.</p>
        </motion.div>

        <Section label="All Variants">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {(['default', 'bordered', 'elevated', 'ghost'] as const).map(v => (
              <Card key={v} variant={v} padding="md">
                <p style={{ fontFamily: 'var(--mark-font-display)', fontWeight: 600, color: 'var(--mark-fg)', marginBottom: '4px' }}>{v}</p>
                <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: '13px', color: 'var(--mark-fg-muted)', margin: 0 }}>Card content</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section label="With Header + Body + Footer">
          <Card variant="default" padding="none">
            <Card.Header>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--mark-font-display)', fontWeight: 600, color: 'var(--mark-fg)' }}>Card Title</span>
                <Badge variant="accent" size="sm">New</Badge>
              </div>
            </Card.Header>
            <Card.Body>
              <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: '14px', color: 'var(--mark-fg-muted)', margin: 0 }}>This is the card body content. It supports any React children.</p>
            </Card.Body>
            <Card.Footer>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                <Button variant="ghost" size="sm">Cancel</Button>
                <Button variant="primary" size="sm">Save</Button>
              </div>
            </Card.Footer>
          </Card>
        </Section>

        <Section label="Hoverable + Clickable">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            <Card isHoverable padding="md">
              <p style={{ fontFamily: 'var(--mark-font-display)', fontWeight: 600, color: 'var(--mark-fg)', marginBottom: '4px' }}>Hoverable</p>
              <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: '13px', color: 'var(--mark-fg-muted)', margin: 0 }}>Hover to lift</p>
            </Card>
            <Card isClickable onClick={() => {}} padding="md">
              <p style={{ fontFamily: 'var(--mark-font-display)', fontWeight: 600, color: 'var(--mark-fg)', marginBottom: '4px' }}>Clickable</p>
              <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: '13px', color: 'var(--mark-fg-muted)', margin: 0 }}>Click to interact</p>
            </Card>
          </div>
        </Section>

        <Section label="Padding Sizes">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px' }}>
            {(['none', 'sm', 'md', 'lg'] as const).map(p => (
              <Card key={p} padding={p}>
                <span style={{ fontFamily: 'var(--mark-font-code)', fontSize: '12px', color: 'var(--mark-fg-muted)' }}>padding=&quot;{p}&quot;</span>
              </Card>
            ))}
          </div>
        </Section>

        <Section label="Props"><PropsTable rows={[
          ['variant',"'default'|'bordered'|'elevated'|'ghost'","'default'",'Visual style'],
          ['padding',"'none'|'sm'|'md'|'lg'","'md'",'Internal padding'],
          ['isHoverable','boolean','false','Show hover lift effect'],
          ['isClickable','boolean','false','Make card clickable'],
          ['onClick','() => void','—','Click handler'],
          ['children','ReactNode','—','Card content'],
          ['className','string',"''",'Additional CSS class'],
        ]} /></Section>

        <Section label="Animation Details">
          <div style={{ background: 'var(--mark-bg-elevated)', border: '1px solid var(--mark-border)', borderRadius: 'var(--mark-radius-md)', padding: '16px', fontFamily: 'var(--mark-font-code)', fontSize: '13px', color: 'var(--mark-fg)', lineHeight: 1.7 }}>
            <p style={{ margin: '0 0 8px' }}>Hover lift: y(0→-4) · --mark-duration-normal · --mark-ease-smooth</p>
            <p style={{ margin: 0 }}>Shadow: CSS transition · --mark-duration-normal</p>
          </div>
        </Section>
      </motion.div>
    </div>
  )
}
