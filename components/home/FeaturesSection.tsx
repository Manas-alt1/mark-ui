"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "architecture",
    title: "Precision by default",
    body: "A strict 4px grid runs through every component. Spacing, radius, line-height — all derived from one base. Your layouts align without you thinking about it.",
  },
  {
    icon: "palette",
    title: "Themes with personality",
    body: "Not just color swaps. Every live theme has its own character and interaction feel. Switch instantly with no flash and no reload.",
  },
  {
    icon: "draw",
    title: "Motion that means something",
    body: "Animations aren't sprinkled in — they're part of the component's DNA. Every interaction has intention, every transition has weight.",
  },
  {
    icon: "terminal",
    title: "Type it, ship it",
    body: "Full TypeScript coverage. Consistent prop APIs. Autocomplete that actually helps. Drop in a component and it just works.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  }),
};

export default function FeaturesSection() {
  return (
    <section className="home-section">
      <div className="home-section-inner">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
          <div>
            <motion.p
              className="section-label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              MODULE_PREVIEW_001.TSX
            </motion.p>

            <motion.h2
              className="section-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-heading-accent">The craft behind every component.</span>
            </motion.h2>
          </div>

          <motion.div
            className="section-quote hidden md:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            &quot;We obsess over the details, so you don&apos;t have to.&quot;
          </motion.div>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="feature-card"
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span
                className="material-symbols-outlined feature-icon"
                style={{ color: "var(--mark-accent-primary)", fontSize: 36 }}
              >
                {f.icon}
              </span>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-body">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
