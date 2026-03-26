"use client";

import { motion } from "framer-motion";

type RoadmapStatus = "shipped" | "in-progress" | "coming-soon" | "future";

interface RoadmapEntry {
  status: RoadmapStatus;
  label: string;
  title: string;
  description: string;
}

const roadmapItems: RoadmapEntry[] = [
  {
    status: "shipped",
    label: "SHIPPED",
    title: "Core component library",
    description: "18 components. Fully animated, fully typed, themeable.",
  },
  {
    status: "shipped",
    label: "SHIPPED",
    title: "Theme system",
    description: "CSS variable engine, ThemeProvider, persistence.",
  },
  {
    status: "shipped",
    label: "SHIPPED",
    title: "Launch themes",
    description: "Monochrome, Arctic, Obsidian. Cyberpunk, Matrixx, Gotham.",
  },
  {
    status: "shipped",
    label: "SHIPPED",
    title: "Fun theme animations",
    description: "8 unique animation systems matching component themes.",
  },
  {
    status: "in-progress",
    label: "IN PROGRESS",
    title: "Full documentation site",
    description: "Playground, props tables, animation details per component.",
  },
  {
    status: "coming-soon",
    label: "COMING SOON",
    title: "More themes",
    description: "Shinigami, Titan, Nebula, Akira, Hobbit, Carbon, Ivory...",
  },
  {
    status: "coming-soon",
    label: "COMING SOON",
    title: "Examples page",
    description: "Real product UIs built entirely with Mark UI components.",
  },
  {
    status: "future",
    label: "FUTURE",
    title: "Mark UI CLI",
    description: "npx markui add [component] — drop any component directly.",
  },
  {
    status: "future",
    label: "FUTURE",
    title: "Figma Kit",
    description: "Every component matching the library's design tokens.",
  },
];

export default function RoadmapSection() {
  return (
    <section className="about-section">
      <div className="roadmap-header">
        <motion.h2
          className="about-h2"
          style={{ marginBottom: 0 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Where this is going
        </motion.h2>

        <motion.p
          className="roadmap-intro"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Mark UI is actively growing. Here&apos;s what has shipped and what is
          coming next.
        </motion.p>
      </div>

      <div className="roadmap-grid">
        {roadmapItems.map((item, i) => (
          <motion.div
            key={item.title}
            className="roadmap-item"
            data-status={item.status}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="roadmap-status-bar">
              <div className="roadmap-dot-inner" />
              <div className="roadmap-status">{item.label}</div>
            </div>
            <h3 className="roadmap-title">{item.title}</h3>
            <p className="roadmap-desc">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
