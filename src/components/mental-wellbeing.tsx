"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { useCallback, useState } from "react";

import { OfferingPanel } from "@/components/offering-panel";
import type { Offering } from "@/data/offerings";
import { wellnessProgramOfferings } from "@/data/offerings";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function MentalWellbeing() {
  const benefits = [
    "Noticeably lower stress and anxiety within weeks",
    "Deeper, more restorative sleep",
    "Sharper focus and mental clarity",
    "Greater emotional balance and resilience",
    "Tools that travel with you - not just in the gym",
  ];

  const [panelOffering, setPanelOffering] = useState<Offering | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);

  const openPanel = useCallback((offering: Offering) => {
    setPanelOffering(offering);
    requestAnimationFrame(() => setPanelOpen(true));
  }, []);

  const closePanel = useCallback(() => {
    setPanelOpen(false);
    window.setTimeout(() => setPanelOffering(null), 400);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0d1117] py-20 md:py-32">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="text-white">Strong Body. Calm Mind. </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Unstoppable You.
            </span>
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-secondary" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {wellnessProgramOfferings.map((offering) => (
            <motion.div key={offering.id} variants={cardVariants}>
              <div
                role="button"
                tabIndex={0}
                aria-label={`${offering.title} — click to learn more`}
                onClick={() => openPanel(offering)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openPanel(offering);
                  }
                }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl ring-1 ring-white/0 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none group-hover:ring-white/20"
              >
                <div className="relative min-h-[280px] w-full md:min-h-[320px]">
                  <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                    <Image
                      src={offering.heroImage}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      alt={`${offering.title} at Align 360`}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-70" />
                  <div className="relative z-10 flex min-h-[280px] flex-col justify-end p-6 md:min-h-[320px]">
                    <h3 className="mb-2 text-left text-xl font-semibold text-white">
                      {offering.title}
                    </h3>
                    <p className="text-left text-gray-300">
                      {offering.subtitle}
                    </p>
                  </div>
                  <span className="pointer-events-none absolute bottom-4 right-4 translate-y-2 text-sm font-medium tracking-wide text-white/0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-white/80">
                    Explore →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-lg md:p-12">
            <h3 className="mb-6 text-center text-2xl font-semibold text-white">
              Results You&apos;ll Feel
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
                    <Check className="size-4 text-white" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <OfferingPanel
        offering={panelOffering}
        isOpen={panelOpen}
        onClose={closePanel}
      />
    </section>
  );
}
