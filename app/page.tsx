"use client";

import "@/styles/home.css";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ThemeCollections from "@/components/home/ThemeCollections";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ThemeCollections />
    </>
  );
}
