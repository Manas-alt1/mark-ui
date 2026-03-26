"use client";

import "@/styles/about.css";
import AboutHero from "@/components/about/HeroSection";
import PhilosophySection from "@/components/about/PhilosophySection";
import BuilderSection from "@/components/about/BuilderSection";
import StackSection from "@/components/about/StackSection";
import RoadmapSection from "@/components/about/RoadmapSection";
import ClosingCTA from "@/components/about/ClosingCTA";

export default function AboutPage() {
  return (
    <>
      <div className="about-bg-elements">
        <div className="about-bg-mesh-1" />
        <div className="about-bg-mesh-2" />
        <div className="about-bg-mesh-3" />
      </div>
      <div className="about-page">
        <AboutHero />
        <div className="about-divider" />
        <PhilosophySection />
        <div className="about-divider" />
        <BuilderSection />
        <div className="about-divider" />
        <StackSection />
        <div className="about-divider" />
        <RoadmapSection />
        <ClosingCTA />
      </div>
    </>
  );
}
