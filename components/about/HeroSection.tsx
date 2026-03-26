"use client";

import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export default function AboutHero() {
  return (
    <section className="about-section">
      <motion.div
        className="about-hero-grid"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <div className="about-hero-content">
          {/* Pill */}
          <motion.div variants={fadeUp}>
            <span className="about-hero-pill">
              The story behind the library
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 className="about-hero-heading" variants={fadeUp}>
            Built to stand out.
          </motion.h1>

          {/* Body */}
          <motion.div className="about-hero-body" variants={fadeUp}>
            <p>
              Mark UI was built by someone who got tired of interfaces that look
              the same. Tired of picking from the same five component libraries,
              the same color palettes, the same boring interactions.
            </p>
            <p>
              So instead of complaining — we built something better.
            </p>
          </motion.div>
        </div>

        {/* Abstract Hero Graphic */}
        <motion.div className="about-hero-graphic" variants={fadeUp}>
          <div className="graphic-circle graphic-circle-1" />
          <div className="graphic-circle graphic-circle-2" />
          <div className="graphic-circle graphic-circle-3" />
          <div className="graphic-circle graphic-circle-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
