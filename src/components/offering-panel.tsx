"use client";

import Image from "next/image";
import {
  Apple,
  Brain,
  CalendarDays,
  Check,
  ChevronRight,
  Clock,
  Dumbbell,
  Heart,
  Music,
  Sparkles,
  Users,
  Wind,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

import type { Offering } from "@/data/offerings";
import { cn } from "@/components/ui/utils";

const PANEL_TRANSITION =
  "duration-[400ms] ease-[cubic-bezier(0.32,0.72,0,1)] transition-transform";

const offeringIcons: Record<string, LucideIcon> = {
  Dumbbell,
  Users,
  Brain,
  Wind,
  Heart,
  Apple,
  Sparkles,
  Music,
};

const WELLNESS_IDS = new Set([
  "stillness-program",
  "sound-healing",
  "breathwork-nervous-system",
]);

function categoryBadge(offering: Offering): string {
  return WELLNESS_IDS.has(offering.id) ? "Wellness Program" : "Studio Offering";
}

function OfferingPanelIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = offeringIcons[name] ?? Dumbbell;
  return <Icon className={className} />;
}

export interface OfferingPanelProps {
  offering: Offering | null;
  isOpen: boolean;
  onClose: () => void;
}

function subscribeNoop() {
  return () => {};
}

const FOCUSABLE =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function OfferingPanel({
  offering,
  isOpen,
  onClose,
}: OfferingPanelProps) {
  const isClient = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !offering) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen, offering]);

  useEffect(() => {
    if (!isOpen || !offering) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, offering, onClose]);

  useEffect(() => {
    if (isOpen && offering) {
      closeBtnRef.current?.focus();
    }
  }, [isOpen, offering]);

  useEffect(() => {
    if (!isOpen || !offering) return;
    const panel = panelRef.current;
    if (!panel) return;

    const onTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const nodes = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((el) => !el.hasAttribute("data-backdrop"));
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey) {
        if (active === first || !panel.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    panel.addEventListener("keydown", onTab);
    return () => panel.removeEventListener("keydown", onTab);
  }, [isOpen, offering]);

  if (!isClient || !offering) {
    return null;
  }

  const handleCta = () => {
    onClose();
    window.setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 420);
  };

  const easePanel = [0.22, 1, 0.36, 1] as const;

  return createPortal(
    <div className="pointer-events-none fixed inset-0 z-[100]">
      <button
        type="button"
        data-backdrop
        tabIndex={-1}
        aria-label="Close panel"
        className={cn(
          "pointer-events-auto fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={offering.title}
        aria-labelledby="offering-panel-title"
        className={cn(
          "pointer-events-auto fixed flex flex-col overflow-hidden border-l border-white/10 bg-[#0f172a] shadow-2xl",
          "max-md:inset-x-0 max-md:bottom-0 max-md:h-[85vh] max-md:rounded-t-3xl max-md:border-l-0 max-md:border-t",
          "md:right-0 md:top-0 md:h-screen md:w-[480px]",
          PANEL_TRANSITION,
          isOpen
            ? "translate-y-0 md:translate-x-0"
            : "translate-y-full md:translate-y-0 md:translate-x-full",
        )}
      >
        <div
          className="flex shrink-0 flex-col items-center justify-center pt-3 pb-1 md:hidden"
          aria-hidden
        >
          <div className="h-1 w-10 rounded-full bg-white/30" />
        </div>

        <div className="sticky top-0 z-30 flex shrink-0 justify-end border-b border-white/10 bg-[#0f172a]/95 px-3 py-2.5 backdrop-blur-md md:relative md:z-10 md:border-0 md:bg-transparent md:px-4 md:py-3 md:backdrop-blur-none">
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none md:absolute md:right-4 md:top-4 md:z-20 md:bg-black/45 md:backdrop-blur-sm md:hover:bg-black/60"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            <motion.div
              key={`hero-${offering.id}-${isOpen}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={
                isOpen
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 1.05 }
              }
              transition={{ duration: 0.4, ease: easePanel }}
              className="relative h-[220px] w-full shrink-0 overflow-hidden"
            >
              <Image
                src={offering.heroImage}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 767px) 100vw, 480px"
                priority={isOpen}
              />
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-90",
                  offering.accentColor,
                )}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
            </motion.div>

            <div className="px-5 pb-6 pt-5 md:px-6">
              <motion.div
                key={`head-${offering.id}-${isOpen}`}
                initial={{ opacity: 0, y: 12 }}
                animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{
                  duration: 0.35,
                  delay: 0.1,
                  ease: easePanel,
                }}
                className="mb-4"
              >
                <span className="mb-3 inline-block rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/90">
                  {categoryBadge(offering)}
                </span>
                <div className="flex items-start gap-3">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md">
                    <OfferingPanelIcon
                      name={offering.icon}
                      className="size-6 text-white"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2
                      id="offering-panel-title"
                      className="text-2xl font-bold leading-tight text-white"
                    >
                      {offering.title}
                    </h2>
                    <p className="mt-1 text-sm text-gray-400">
                      {offering.subtitle}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-base italic leading-snug text-gray-400">
                  {offering.tagline}
                </p>
              </motion.div>

              <motion.div
                key={`div-${offering.id}`}
                initial={{ scaleX: 0 }}
                animate={isOpen ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.35, delay: 0.15, ease: easePanel }}
                className="mb-6 h-px origin-left bg-gradient-to-r from-white/25 to-transparent"
              />

              <motion.p
                key={`desc-${offering.id}-${isOpen}`}
                initial={{ opacity: 0 }}
                animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.35, delay: 0.2, ease: easePanel }}
                className="mb-8 text-sm leading-relaxed text-gray-300"
              >
                {offering.description}
              </motion.p>

              <motion.h3
                initial={{ opacity: 0 }}
                animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.28 }}
                className="mb-3 text-sm font-semibold uppercase tracking-wide text-white"
              >
                What You&apos;ll Gain
              </motion.h3>
              <ul className="mb-8 space-y-2.5">
                {offering.benefits.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{
                      duration: 0.3,
                      delay: 0.3 + i * 0.06,
                      ease: easePanel,
                    }}
                    className="flex gap-2.5 text-sm text-gray-300"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.h3
                initial={{ opacity: 0 }}
                animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.48 }}
                className="mb-3 text-sm font-semibold uppercase tracking-wide text-white"
              >
                Who Is This For?
              </motion.h3>
              <ul className="mb-8 space-y-2.5">
                {offering.whoIsItFor.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{
                      duration: 0.3,
                      delay: 0.5 + i * 0.06,
                      ease: easePanel,
                    }}
                    className="flex gap-2.5 text-sm text-gray-300"
                  >
                    <ChevronRight
                      className="mt-0.5 size-4 shrink-0 text-secondary"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.h3
                initial={{ opacity: 0 }}
                animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.58 }}
                className="mb-3 text-sm font-semibold uppercase tracking-wide text-white"
              >
                Session info
              </motion.h3>
              <dl className="mb-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {(
                  [
                    {
                      label: "Duration",
                      value: offering.sessionInfo.duration,
                      Icon: Clock,
                    },
                    {
                      label: "Frequency",
                      value: offering.sessionInfo.frequency,
                      Icon: CalendarDays,
                    },
                    {
                      label: "Level",
                      value: offering.sessionInfo.level,
                      Icon: Users,
                    },
                    {
                      label: "Format",
                      value: offering.sessionInfo.format,
                      Icon: Brain,
                    },
                  ] as const
                ).map(({ label, value, Icon: SIcon }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={
                      isOpen
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.95 }
                    }
                    transition={{
                      duration: 0.3,
                      delay: 0.6 + i * 0.08,
                      ease: easePanel,
                    }}
                    className={cn(
                      "rounded-xl border border-white/10 bg-white/5 p-4",
                      label === "Format" && "sm:col-span-2",
                    )}
                  >
                    <dt className="flex items-center gap-2 text-xs text-gray-400">
                      <SIcon className="size-3.5 shrink-0 text-primary" />
                      {label}
                    </dt>
                    <dd className="mt-2 text-sm font-medium text-white">
                      {value}
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>

          <motion.div
            key={`cta-${offering.id}-${isOpen}`}
            initial={{ opacity: 0, y: 16 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.4, delay: 0.8, ease: easePanel }}
            className="shrink-0 border-t border-white/10 bg-[#0f172a] p-4 md:px-6"
          >
            <button
              type="button"
              onClick={handleCta}
              className={cn(
                "w-full rounded-full px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a] focus-visible:outline-none",
                "bg-gradient-to-r",
                offering.accentColor,
              )}
            >
              {offering.ctaText}
            </button>
          </motion.div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
