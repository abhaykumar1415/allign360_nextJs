"use client";

import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import { Toaster } from "./ui/sonner";
import { Navigation } from "./navigation";
import { HeroSection } from "./hero-section";
import { SocialProof } from "./social-proof";
import { AboutSection } from "./about-section";
import { WhyChoose } from "./why-choose";
import { SignatureHighlights } from "./signature-highlights";
import { ProgramsSection } from "./programs-section";
import { MentalWellbeing } from "./mental-wellbeing";
import { WomensGuidance } from "./womens-guidance";
import { MembershipPlans } from "./membership-plans";
import { FacilitiesSection } from "./facilities-section";
import { TestimonialsSection } from "./testimonials-section";
import { LocationSection } from "./location-section";
import { ContactSection } from "./contact-section";
import { FAQSection } from "./faq-section";
import { Footer } from "./footer";
import { WhatsAppButton } from "./whatsapp-button";

/**
 * Background colour palette keyed to scroll progress (0 → 1).
 * Motion interpolates between these stops at the animation-frame layer —
 * no React setState, no CSS transition, no jank.
 *
 * Colours are deliberately subtle shifts so the gradient feels organic
 * rather than abrupt.
 */
const BG_STOPS = [0, 0.08, 0.16, 0.24, 0.32, 0.40, 0.50, 0.60, 0.70, 0.80, 0.88, 1.0];
const BG_COLOURS = [
  "rgb(15,  23,  42)",   // Hero          — deep navy
  "rgb(10,  20,  30)",   // SocialProof   — midnight
  "rgb(8,   24,  20)",   // About         — emerald undertone
  "rgb(10,  18,  28)",   // WhyChoose     — neutral dark
  "rgb(14,  10,  26)",   // Highlights    — deep violet
  "rgb(8,   22,  22)",   // Programs      — teal-dark
  "rgb(10,  14,  28)",   // Wellness      — indigo depth
  "rgb(20,  10,  20)",   // Women's       — rose-dark
  "rgb(10,  16,  28)",   // Plans         — cool navy
  "rgb(8,   18,  22)",   // Facilities    — teal-dark
  "rgb(14,  10,  24)",   // Testimonials  — violet accent
  "rgb(10,  12,  18)",   // Footer        — pure dark
];

export function HomePage() {
  // Track window scroll — no containerRef needed; this is the standard Next.js scroll model.
  const { scrollYProgress, scrollY } = useScroll();

  /**
   * `useTransform` drives the motion value at animation-frame rate.
   * Motion interpolates between the colour stops natively — no React
   * re-renders, no setState, no CSS transition delay.
   */
  const backgroundColor = useTransform(scrollYProgress, BG_STOPS, BG_COLOURS);

  // Orb parallax — driven by raw scrollY so they drift independently of page height.
  const orb1Y = useTransform(scrollY, [0, 3000], [0, -200]);
  const orb2Y = useTransform(scrollY, [0, 3000], [0, -130]);
  const orb3Y = useTransform(scrollY, [0, 3000], [0, -300]);

  return (
    <motion.div
      className="min-h-screen text-foreground overflow-x-hidden"
      style={{ backgroundColor }}
    >
      {/* Page-level aurora orbs — fixed behind all content */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ y: orb1Y }}
          className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-emerald-600/10 blur-[130px]"
        />
        <motion.div
          style={{ y: orb2Y }}
          className="absolute top-1/3 -right-40 h-[620px] w-[620px] rounded-full bg-purple-700/10 blur-[150px]"
        />
        <motion.div
          style={{ y: orb3Y }}
          className="absolute bottom-1/4 left-1/4 h-[420px] w-[420px] rounded-full bg-teal-500/8 blur-[110px]"
        />
        {/* Autonomous ambient drift orbs */}
        <motion.div
          animate={{ x: [0, 45, 0], y: [0, -70, 0], scale: [1, 1.18, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-2/3 right-1/3 h-[320px] w-[320px] rounded-full bg-indigo-600/8 blur-[95px]"
        />
        <motion.div
          animate={{ x: [0, -55, 0], y: [0, 90, 0], scale: [1, 1.22, 1] }}
          transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/3 h-[370px] w-[370px] rounded-full bg-rose-600/6 blur-[115px]"
        />
      </div>

      <div className="relative z-10">
        <Navigation />

        <main>
          <HeroSection />

          <SocialProof />

          <div id="about">
            <AboutSection />
          </div>

          <WhyChoose />

          <SignatureHighlights />

          <div id="programs">
            <ProgramsSection />
          </div>

          <div id="wellness">
            <MentalWellbeing />
          </div>

          <WomensGuidance />

          <div id="plans">
            <MembershipPlans />
          </div>

          <FacilitiesSection />

          <TestimonialsSection />

          <LocationSection />

          <div id="contact">
            <ContactSection />
          </div>

          <FAQSection />

          <Footer />

          <WhatsAppButton />

          <Toaster />
        </main>
      </div>
    </motion.div>
  );
}
