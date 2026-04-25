"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/components/theme/ThemeProvider";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const glowColors: Record<string, string> = {
  monochrome: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)",
  arctic: "radial-gradient(circle, rgba(147,210,255,0.10) 0%, transparent 70%)",
  obsidian: "radial-gradient(circle, rgba(180,160,255,0.09) 0%, transparent 70%)",
  cyberpunk: "radial-gradient(circle, rgba(255,230,0,0.08) 0%, transparent 70%)",
  matrixx: "radial-gradient(circle, rgba(0,255,120,0.08) 0%, transparent 70%)",
  gotham: "radial-gradient(circle, rgba(255,100,60,0.09) 0%, transparent 70%)",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export default function HeroSection() {
  const { theme } = useTheme();
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const { scrollY } = useScroll();

  const glowColor = glowColors[theme] || "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)";

  // Map scrollY to 1..0 (erased by 300px down)
  const scrollProgress = useTransform(scrollY, [0, 300], [1, 0]);

  // Transform for clipPath: inset(-10% X% -10% -10%)
  // When scrollProgress is 1, X is 0 (fully visible)
  // When scrollProgress is 0, X is 100 (fully hidden)
  const clipPathPercent = useTransform(scrollProgress, (p) => `${100 - p * 100}%`);
  const clipPath = useTransform(clipPathPercent, (v) => `inset(-10% ${v} -10% -10%)`);

  // Show scroll indicator only at the top
  const showScroll = useTransform(scrollY, (y) => y < 20);

  useEffect(() => {
    // After initial load animations finish (approx 3s)
    const timer = setTimeout(() => setIsInitialLoad(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero">
      {/* Theme Reactive Glow */}
      <div
        className="hero-glow"
        style={{
          background: glowColor,
        }}
      />

      <motion.div
        className="hero-content"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* Pill badge */}
        <motion.div variants={fadeUp}>
          <span className="hero-pill">
            Crafted for React · TypeScript Native · Zero Lock-in
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 className="hero-heading" variants={fadeUp}>
          Your components,<br /> Your rules,
          <br />
          <span className="hero-heading-accent">Our motion.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p className="hero-sub" variants={fadeUp}>
          Not another UI kit. MARK UI is a creative system — opinionated enough to ship fast, flexible enough to make it entirely yours.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="hero-cta-row" variants={fadeUp}>
          <Link href="/docs" className="btn-primary active-press">
            GET STARTED →
          </Link>
          <Link href="/components" className="btn-secondary active-press">
            EXPLORE COMPONENTS
          </Link>
        </motion.div>
      </motion.div>

      {/* Arrow pointing to the Theme sidebar */}
      <div className="sidebar-arrow-hint">
        <motion.span
          className="sidebar-arrow-label"
          style={{ paddingRight: "4px", clipPath }}
          initial={{ clipPath: "inset(-10% 100% -10% -10%)" }}
          animate={isInitialLoad ? { clipPath: "inset(-10% 0% -10% -10%)" } : undefined}
          transition={{
            duration: 1.5,
            delay: 1.5,
            ease: "easeOut"
          }}
        >
          Try switching themes!
        </motion.span>
        <svg
          width="64"
          height="32"
          viewBox="0 0 64 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sidebar-arrow-svg"
        >
          <motion.path
            d="M2 18C12 22 28 26 46 16C50 14 54 10 56 8"
            stroke="var(--mark-accent-primary)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInitialLoad ? { pathLength: 1 } : undefined}
            style={{ pathLength: isInitialLoad ? undefined : scrollProgress }}
            transition={{
              duration: 1.5,
              delay: 1.5,
              ease: "easeOut"
            }}
          />
          <motion.path
            d="M50 4L58 8L52 14"
            stroke="var(--mark-accent-primary)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInitialLoad ? { pathLength: 1 } : undefined}
            style={{ pathLength: isInitialLoad ? undefined : scrollProgress }}
            transition={{
              duration: 0.5,
              delay: 2.8,
              ease: "easeOut"
            }}
          />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <AnimatePresence>
        <motion.div
          className="scroll-indicator"
          style={{ opacity: showScroll }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          ↓ scroll
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
