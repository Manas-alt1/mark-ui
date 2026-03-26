"use client";

import { motion } from "framer-motion";

const principles = [
  {
    letter: "M",
    title: "Make it move",
    body: "Interfaces that breathe feel alive. Motion is not decoration — it is communication. Every component in Mark UI has a reason to move and a precise way of doing it.",
  },
  {
    letter: "A",
    title: "Accessible always",
    body: "Bold design should never come at the cost of usability. Every component is keyboard navigable, screen reader friendly, and respects user motion preferences.",
  },
  {
    letter: "R",
    title: "Real customization",
    body: "Not just swapping accent colors. Mark UI lets you change the entire personality of your product — from sharp and corporate to electric and wild — without touching a single component.",
  },
  {
    letter: "K",
    title: "Keen on every detail",
    body: "The difference between good and unforgettable is in the details nobody notices consciously but everybody feels. Every pixel, every millisecond, every easing curve is intentional.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export default function PhilosophySection() {
  return (
    <section className="about-section">
      <motion.h2
        className="about-h2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        The philosophy
      </motion.h2>

      <div className="philosophy-grid">
        {principles.map((p, i) => (
          <motion.div
            key={p.letter}
            className="philosophy-block"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="philosophy-letter">{p.letter}</div>
            <h3 className="philosophy-title">{p.title}</h3>
            <p className="philosophy-body">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
