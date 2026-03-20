'use client'

import { motion } from 'framer-motion'
import Checkbox from '@mark-ui/components/inputs/Checkbox/Checkbox'

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }
const itemVariants = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } } }
function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return <motion.div variants={itemVariants} style={{ marginBottom: '48px' }}><h2 style={{ fontFamily: 'var(--mark-font-display)', fontSize: 'var(--mark-text-sm)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--mark-fg)', opacity: 0.4, marginBottom: '24px' }}>{label}</h2>{children}</motion.div>
}
function PropsTable({ rows }: { rows: [string, string, string, string][] }) {
  return <div style={{ overflowX: 'auto' }}><table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)' }}><thead><tr style={{ borderBottom: '1px solid var(--mark-border-strong)' }}>{['Prop','Type','Default','Description'].map(h=><th key={h} style={{ textAlign:'left', padding:'8px 12px', color:'var(--mark-fg-muted)', fontWeight:600 }}>{h}</th>)}</tr></thead><tbody>{rows.map(([p,t,d,desc])=><tr key={p} style={{ borderBottom:'1px solid var(--mark-border)' }}><td style={{ padding:'8px 12px', color:'var(--mark-accent-primary)', fontFamily:'var(--mark-font-code)' }}>{p}</td><td style={{ padding:'8px 12px', color:'var(--mark-fg-muted)', fontFamily:'var(--mark-font-code)' }}>{t}</td><td style={{ padding:'8px 12px', color:'var(--mark-fg-subtle)', fontFamily:'var(--mark-font-code)' }}>{d}</td><td style={{ padding:'8px 12px', color:'var(--mark-fg)' }}>{desc}</td></tr>)}</tbody></table></div>
}

export default function CheckboxDoc() {
  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '64px 24px' }}>
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        <motion.div variants={itemVariants} style={{ marginBottom: '48px' }}>
          <span style={{ display: 'inline-flex', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: 'var(--mark-radius-pill)', background: 'var(--mark-accent-glow)', color: 'var(--mark-accent-primary)', fontFamily: 'var(--mark-font-display)', marginBottom: '16px' }}>Component</span>
          <h1 style={{ fontFamily: 'var(--mark-font-display)', fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 800, color: 'var(--mark-fg)', margin: '0 0 12px' }}>Checkbox</h1>
          <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-lg)', color: 'var(--mark-fg-muted)', lineHeight: 1.6, maxWidth: '640px', margin: 0 }}>Selection input. The checkmark snaps into place with a satisfying bounce animation.</p>
        </motion.div>

        <Section label="States">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Checkbox label="Unchecked" />
            <Checkbox label="Checked" defaultChecked />
            <Checkbox label="Indeterminate" isIndeterminate checked />
          </div>
        </Section>

        <Section label="With Label + Description">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Checkbox label="Terms and Conditions" description="I agree to the terms of service and privacy policy" />
            <Checkbox label="Newsletter" description="Receive weekly updates about new components" defaultChecked />
          </div>
        </Section>

        <Section label="All Sizes">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Checkbox size="sm" label="Small" />
            <Checkbox size="md" label="Medium (default)" />
            <Checkbox size="lg" label="Large" />
          </div>
        </Section>

        <Section label="Disabled">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Checkbox label="Disabled unchecked" isDisabled />
            <Checkbox label="Disabled checked" isDisabled defaultChecked />
          </div>
        </Section>

        <Section label="Props"><PropsTable rows={[
          ['checked','boolean','—','Controlled checked state'],
          ['defaultChecked','boolean','false','Initial state (uncontrolled)'],
          ['onChange','(checked: boolean) => void','—','Change handler'],
          ['isDisabled','boolean','false','Disable checkbox'],
          ['isIndeterminate','boolean','false','Show dash instead of check'],
          ['label','string','—','Label text'],
          ['description','string','—','Description below label'],
          ['size',"'sm'|'md'|'lg'","'md'",'Checkbox size'],
          ['className','string',"''",'Additional CSS class'],
        ]} /></Section>

        <Section label="Animation Details">
          <div style={{ background: 'var(--mark-bg-elevated)', border: '1px solid var(--mark-border)', borderRadius: 'var(--mark-radius-md)', padding: '16px', fontFamily: 'var(--mark-font-code)', fontSize: '13px', color: 'var(--mark-fg)', lineHeight: 1.7 }}>
            <p style={{ margin: '0 0 8px' }}>Check on: box scale(0.85→1) · --mark-ease-bounce · --mark-duration-fast</p>
            <p style={{ margin: '0 0 8px' }}>Checkmark: SVG pathLength draw-in · --mark-duration-normal</p>
            <p style={{ margin: 0 }}>Background: CSS transition · --mark-duration-fast</p>
          </div>
        </Section>
      </motion.div>
    </div>
  )
}
