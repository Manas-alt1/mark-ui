"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const changelog = [
  {
    version: "v0.1.0",
    date: "April 13, 2026",
    title: "Initial Release — The Beginning",
    content: (
      <>
        <p className="docs-body-text">
          MARK UI is officially live. After months of development, we are 
          releasing our core package with 18 high-performance, motion-first components.
        </p>
        <ul className="docs-body-text" style={{ paddingLeft: "20px" }}>
          <li>
            <strong>18 components shipped:</strong> Button, Input, Checkbox, Select, 
            Toggle, Avatar, Badge, Card, Tag, Alert, Toast, Tooltip, Modal, Drawer, 
            Skeleton, Spinner, Divider, Container.
          </li>
          <li>
            <strong>6 initial launch themes:</strong> Monochrome, Arctic, Obsidian, Cyberpunk, 
            Matrixx, Gotham.
          </li>
          <li>Full TypeScript support with comprehensive prop types.</li>
          <li>Pre-built CSS — zero Tailwind configuration required.</li>
          <li>Powered by <strong>Framer Motion v12</strong>.</li>
          <li>Interactive documentation site with playgrounds.</li>
        </ul>
      </>
    ),
  },
];

export default function ChangelogPage() {
  return (
    <>
      <div className="doc-breadcrumbs">
        <Link href="/docs">Docs</Link>
        <span className="doc-breadcrumb-sep">/</span>
        <span style={{ color: "var(--mark-fg)", fontWeight: 500 }}>Changelog</span>
      </div>

      <h1>Changelog</h1>

      <p className="docs-description-line">
        Track the evolution of MARK UI. We ship fast and move things.
      </p>

      <div style={{ position: "relative", paddingLeft: "32px", marginTop: "64px" }}>
        {/* Timeline vertical line */}
        <div style={{ 
          position: "absolute", 
          left: "0", 
          top: "0", 
          bottom: "0", 
          width: "2px", 
          background: "linear-gradient(to bottom, var(--mark-accent-primary), var(--mark-border))" 
        }} />

        {changelog.map((entry, idx) => (
          <motion.div 
            key={entry.version}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            style={{ marginBottom: "80px", position: "relative" }}
          >
            {/* Timeline dot */}
            <div style={{ 
              position: "absolute", 
              left: "-38px", 
              top: "0", 
              width: "14px", 
              height: "14px", 
              borderRadius: "50%", 
              background: "var(--mark-bg)", 
              border: "3px solid var(--mark-accent-primary)",
              boxShadow: "0 0 10px var(--mark-accent-glow)"
            }} />

            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <span style={{ 
                fontFamily: "var(--mark-font-code)", 
                fontSize: "14px", 
                color: "var(--mark-accent-primary)",
                fontWeight: 600
              }}>
                {entry.version}
              </span>
              <span style={{ 
                fontSize: "14px", 
                opacity: 0.5 
              }}>
                • {entry.date}
              </span>
            </div>

            <h2 style={{ margin: "0 0 24px", border: "none", padding: "0" }}>{entry.title}</h2>
            
            <div style={{ 
              background: "var(--mark-bg-surface)", 
              border: "1px solid var(--mark-border)", 
              borderRadius: "var(--mark-radius-lg)",
              padding: "32px"
            }}>
              {entry.content}
            </div>
          </motion.div>
        ))}

        {/* Future entry placeholder */}
        <div style={{ opacity: 0.3, position: "relative" }}>
          <div style={{ 
            position: "absolute", 
            left: "-38px", 
            top: "0", 
            width: "14px", 
            height: "14px", 
            borderRadius: "50%", 
            background: "var(--mark-bg)", 
            border: "3px solid var(--mark-border-strong)"
          }} />
          <h3 style={{ margin: 0 }}>v0.2.0 is brewing...</h3>
          <p className="docs-body-text">Follow our progress on GitHub for the latest updates.</p>
        </div>
      </div>

      <div style={{ 
        marginTop: "100px", 
        paddingTop: "48px", 
        borderTop: "1px solid var(--mark-border-strong)", 
        textAlign: "center" 
      }}>
        <p className="docs-body-text">
          Want to see every commit? <br />
          <a 
            href="https://github.com/markui/core/releases" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: "var(--mark-accent-primary)", 
              textDecoration: "underline",
              fontFamily: "var(--mark-font-display)",
              fontWeight: 600,
              fontSize: "18px"
            }}
          >
            Follow releases on GitHub
          </a>
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "100px", paddingTop: "32px", borderTop: "1px solid var(--mark-border-strong)" }}>
        <Link href="/docs/accessibility" style={{ textDecoration: "none", color: "var(--mark-fg)" }}>
          <div style={{ fontSize: "12px", opacity: 0.5, fontFamily: "var(--mark-font-display)" }}>← PREVIOUS</div>
          <div style={{ fontSize: "18px", fontWeight: 600, marginTop: "4px" }}>Accessibility</div>
        </Link>
      </div>
    </>
  );
}
