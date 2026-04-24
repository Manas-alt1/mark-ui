"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "architecture",
    title: "Technical Accuracy",
    body: "Built on a strict 4px grid system with mathematical precision. No guesswork, just geometry.",
  },
  {
    icon: "palette",
    title: "Live theme switching",
    body: "Two collections. Fifteen themes. Switch the entire personality of your product in one click — no reload, no flash.",
  },
  {
    icon: "draw",
    title: "Organic Overlays",
    body: "Doodles and sketches are baked into the core primitives, allowing for expressive and creative documentation.",
  },
  {
    icon: "terminal",
    title: "Developer First",
    body: "Every component is fully typed. Consistent prop APIs across the board. Ready to ship with React and TypeScript.",
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
              <span className="section-heading-accent">Features</span>
            </motion.h2>
          </div>

          <motion.div
            className="section-quote hidden md:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            &quot;Every component is a canvas,
            <br />not just a container.&quot;
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
