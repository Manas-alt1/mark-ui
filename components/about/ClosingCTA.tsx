"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ClosingCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install @markui/core");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="about-section" style={{ textAlign: "center" }}>
      <div className="about-cta-card">

      <motion.h2
        className="about-cta-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Ready to leave a mark?
      </motion.h2>

      <motion.p
        className="about-cta-body"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 }}
      >
        Start building with Mark UI today.
        <br />
        Five minutes to set up. A lifetime to explore.
      </motion.p>

      {/* Install Block */}
      <motion.div
        className="about-install-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.16 }}
      >
        <code className="about-install-code">npm install @markui/core</code>
        <button
          className="about-copy-btn"
          onClick={handleCopy}
          type="button"
          aria-label="Copy install command"
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="about-cta-buttons"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.24 }}
      >
        <Link href="/docs" className="about-btn-primary">
          Get Started →
        </Link>
        <a
          href="https://github.com/Manas-bhavsar/mark-ui"
          target="_blank"
          rel="noopener noreferrer"
          className="about-btn-ghost"
        >
          View on GitHub
        </a>
      </motion.div>
      </div>
    </section>
  );
}
