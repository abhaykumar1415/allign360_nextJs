"use client";

import { motion } from "motion/react";
import {
  Apple,
  Brain,
  Dumbbell,
  Heart,
  Sparkles,
  Users,
  Wind,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useCallback, useState } from "react";

import {
  signatureHighlightOfferings,
} from "@/data/offerings";
import type { Offering } from "@/data/offerings";
import { OfferingPanel } from "@/components/offering-panel";

const offeringIcons: Record<string, LucideIcon> = {
  Dumbbell,
  Users,
  Brain,
  Wind,
  Heart,
  Apple,
};

const cardStyleById: Record<
  string,
  { gradient: string; iconColor: string }
> = {
  "strength-training": {
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
  "group-classes": {
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
  },
  "mental-wellness": {
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  breathwork: {
    gradient: "from-teal-500/20 to-emerald-500/20",
    iconColor: "text-teal-400",
  },
  "womens-guidance": {
    gradient: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400",
  },
  "nutrition-tracking": {
    gradient: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-400",
  },
};

export function SignatureHighlights() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [panelOffering, setPanelOffering] = useState<Offering | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);

  const handleCardClick = useCallback((offeringId: string) => {
    const found = signatureHighlightOfferings.find((o) => o.id === offeringId);
    if (found) {
      setPanelOffering(found);
      requestAnimationFrame(() => setPanelOpen(true));
    }
  }, []);

  const closePanel = useCallback(() => {
    setPanelOpen(false);
    window.setTimeout(() => setPanelOffering(null), 400);
  }, []);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-l from-secondary/20 to-primary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Offerings
            </span>
            <Sparkles className="w-6 h-6 text-secondary" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Signature Highlights
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need for complete transformation
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {signatureHighlightOfferings.map((offering, index) => {
            const Icon =
              offeringIcons[offering.icon] ?? Dumbbell;
            const cardStyle =
              cardStyleById[offering.id] ?? {
                gradient: "from-white/10 to-white/5",
                iconColor: "text-gray-300",
              };
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={offering.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group h-full cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`${offering.title} — click to learn more`}
                onClick={() => handleCardClick(offering.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardClick(offering.id);
                  }
                }}
              >
                <motion.div
                  className="relative h-full"
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: 1000,
                  }}
                >
                  {/* Card Background with Gradient */}
                  <div
                    className={`relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br p-8 ring-1 ring-white/0 backdrop-blur-lg transition-all duration-300 ${cardStyle.gradient} group-hover:scale-[1.02] group-hover:ring-white/20`}
                  >
                    {/* Animated Glow Effect on Hover */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        scale: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl"
                    />

                    {/* Floating Particles on Hover */}
                    {isHovered && (
                      <>
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{
                              opacity: 0,
                              x: 0,
                              y: 0,
                            }}
                            animate={{
                              opacity: [0, 1, 0],
                              x: Math.random() * 100 - 50,
                              y: Math.random() * -100 - 50,
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                            className="absolute bottom-1/2 left-1/2 w-1 h-1 bg-white rounded-full"
                          />
                        ))}
                      </>
                    )}

                    {/* Icon Container with Animation */}
                    <motion.div
                      animate={{
                        rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
                        scale: isHovered ? 1.1 : 1,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cardStyle.gradient} border border-white/20 flex items-center justify-center mb-6 relative z-10`}
                    >
                      <Icon
                        className={`w-8 h-8 ${cardStyle.iconColor} transition-all duration-300`}
                      />
                      
                      {/* Pulse Effect */}
                      <motion.div
                        animate={{
                          scale: isHovered ? [1, 1.5, 1] : 1,
                          opacity: isHovered ? [0.5, 0, 0.5] : 0,
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: isHovered ? Infinity : 0,
                        }}
                        className={`absolute inset-0 rounded-xl border-2 ${cardStyle.iconColor.replace("text", "border")}`}
                      />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <motion.h3
                        animate={{
                          x: isHovered ? 5 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-xl font-semibold mb-3 text-white"
                      >
                        {offering.title}
                      </motion.h3>
                      <motion.p
                        animate={{
                          x: isHovered ? 5 : 0,
                        }}
                        transition={{ duration: 0.3, delay: 0.05 }}
                        className="text-gray-300 text-sm leading-relaxed"
                      >
                        {offering.subtitle}
                      </motion.p>
                    </div>

                    {/* Bottom Accent Line */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: isHovered ? "100%" : "0%",
                      }}
                      transition={{ duration: 0.4 }}
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${cardStyle.iconColor.replace("text", "from")} to-transparent`}
                    />

                    {/* Corner Glow */}
                    <motion.div
                      animate={{
                        opacity: isHovered ? 0.6 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${cardStyle.iconColor.replace("text", "from")}/30 to-transparent blur-2xl rounded-full`}
                    />

                    <span className="pointer-events-none absolute bottom-4 right-4 translate-y-2 text-sm font-medium tracking-wide text-white/0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-white/80">
                      Learn More →
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <OfferingPanel
        offering={panelOffering}
        isOpen={panelOpen}
        onClose={closePanel}
      />
    </section>
  );
}