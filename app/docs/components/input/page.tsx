'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Input from '@mark-ui/components/inputs/Input/Input'

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }
const itemVariants = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } } }
function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return <motion.div variants={itemVariants} style={{ marginBottom: '48px' }}><h2 style={{ fontFamily: 'var(--mark-font-display)', fontSize: 'var(--mark-text-sm)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--mark-fg)', opacity: 0.4, marginBottom: '24px' }}>{label}</h2>{children}</motion.div>
}
function PropsTable({ rows }: { rows: [string, string, string, string][] }) {
  return <div style={{ overflowX: 'auto' }}><table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-sm)' }}><thead><tr style={{ borderBottom: '1px solid var(--mark-border-strong)' }}>{['Prop','Type','Default','Description'].map(h=><th key={h} style={{ textAlign:'left', padding:'8px 12px', color:'var(--mark-fg-muted)', fontWeight:600 }}>{h}</th>)}</tr></thead><tbody>{rows.map(([p,t,d,desc])=><tr key={p} style={{ borderBottom:'1px solid var(--mark-border)' }}><td style={{ padding:'8px 12px', color:'var(--mark-accent-primary)', fontFamily:'var(--mark-font-code)' }}>{p}</td><td style={{ padding:'8px 12px', color:'var(--mark-fg-muted)', fontFamily:'var(--mark-font-code)' }}>{t}</td><td style={{ padding:'8px 12px', color:'var(--mark-fg-subtle)', fontFamily:'var(--mark-font-code)' }}>{d}</td><td style={{ padding:'8px 12px', color:'var(--mark-fg)' }}>{desc}</td></tr>)}</tbody></table></div>
}

export default function InputDoc() {
  const [val, setVal] = useState('')
  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '64px 24px' }}>
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        <motion.div variants={itemVariants} style={{ marginBottom: '48px' }}>
          <span style={{ display: 'inline-flex', fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: 'var(--mark-radius-pill)', background: 'var(--mark-accent-glow)', color: 'var(--mark-accent-primary)', fontFamily: 'var(--mark-font-display)', marginBottom: '16px' }}>Component</span>
          <h1 style={{ fontFamily: 'var(--mark-font-display)', fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 800, color: 'var(--mark-fg)', margin: '0 0 12px' }}>Input</h1>
          <p style={{ fontFamily: 'var(--mark-font-body)', fontSize: 'var(--mark-text-lg)', color: 'var(--mark-fg-muted)', lineHeight: 1.6, maxWidth: '640px', margin: 0 }}>Text input field with a signature focus animation. The border and label feel alive when the user clicks in.</p>
        </motion.div>

        <Section label="Default + Focus">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
            <Input label="Username" placeholder="Enter username" />
            <Input label="Email" placeholder="you@example.com" type="email" value={val} onChange={e => setVal(e.target.value)} />
          </div>
        </Section>

        <Section label="All Sizes">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
            <Input size="sm" placeholder="Small" />
            <Input size="md" placeholder="Medium" />
            <Input size="lg" placeholder="Large" />
          </div>
        </Section>

        <Section label="Error + Success + Disabled">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
            <Input label="Email" isError errorMessage="Invalid email address" placeholder="bad@" />
            <Input label="Name" isSuccess placeholder="Valid!" value="John Doe" />
            <Input label="Locked" isDisabled placeholder="Cannot edit" />
          </div>
        </Section>

        <Section label="With Icons">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
            <Input leftIcon="🔍" placeholder="Search..." />
            <Input rightIcon="✓" placeholder="Verified" isSuccess />
          </div>
        </Section>

        <Section label="With Helper Text">
          <div style={{ maxWidth: '400px' }}>
            <Input label="Password" type="password" placeholder="••••••••" helperText="Must be at least 8 characters" />
          </div>
        </Section>

        <Section label="Props"><PropsTable rows={[
          ['label','string','—','Label above input'],
          ['placeholder','string','—','Placeholder text'],
          ['value','string','—','Controlled value'],
          ['onChange','(e) => void','—','Change handler'],
          ['type',"'text'|'email'|'password'|'search'|'number'","'text'",'Input type'],
          ['size',"'sm'|'md'|'lg'","'md'",'Input size'],
          ['isDisabled','boolean','false','Disable input'],
          ['isError','boolean','false','Show error state'],
          ['isSuccess','boolean','false','Show success state'],
          ['errorMessage','string','—','Error text below input'],
          ['helperText','string','—','Helper text below input'],
          ['leftIcon','ReactNode','—','Icon before text'],
          ['rightIcon','ReactNode','—','Icon after text'],
          ['className','string',"''",'Additional CSS class'],
        ]} /></Section>

        <Section label="Animation Details">
          <div style={{ background: 'var(--mark-bg-elevated)', border: '1px solid var(--mark-border)', borderRadius: 'var(--mark-radius-md)', padding: '16px', fontFamily: 'var(--mark-font-code)', fontSize: '13px', color: 'var(--mark-fg)', lineHeight: 1.7 }}>
            <p style={{ margin: '0 0 8px' }}>Focus ring: scale(0.95→1) + opacity(0→1) · --mark-duration-fast · --mark-ease-smooth</p>
            <p style={{ margin: 0 }}>Error shake: x[0,-4,4,-4,4,0] · 0.4s · once on error</p>
          </div>
        </Section>
      </motion.div>
    </div>
  )
}
