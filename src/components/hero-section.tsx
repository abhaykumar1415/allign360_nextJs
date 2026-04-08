"use client";

import {
  Fragment,
  startTransition,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { cn } from "./ui/utils";
import { ChevronDown } from "lucide-react";

const HERO_SUBHEADLINE =
  "Where strength meets stillness. Fitness for your body. Peace for your mind. Results for life.";

/** Picked randomly on each page load (after mount) so SSR and hydration stay aligned. */
const HERO_BACKGROUND_IMAGES = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1637430308606-86576d8fef3c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1722925541142-5db2668ca492?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1722925541311-2117dfa21fe3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1683889843003-a4ea8bb8204a?q=80&w=967&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
] as const;

const SUBHEADLINE_WORDS = HERO_SUBHEADLINE.split(/\s+/);
const MS_PER_WORD = 105;
const TYPING_START_DELAY_MS = 520;

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
}

export function HeroSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [heroImageSrc, setHeroImageSrc] = useState<string | null>(null);
  const [heroImageVisible, setHeroImageVisible] = useState(false);
  const [visibleWordCount, setVisibleWordCount] = useState(0);
  const [animationTypingComplete, setAnimationTypingComplete] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const doneTimeoutRef = useRef<number | null>(null);

  // Parallax: hero background drifts upward at 40% of scroll speed
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], prefersReducedMotion ? [0, 0] : [0, 160]);

  // Pick random URL before first paint (client only). Avoids next/image + preload
  // fighting over different URLs (`/_next/image?...` vs raw Unsplash), which caused
  // a flash of a previously cached optimized image (e.g. photo-1558611848).
  useLayoutEffect(() => {
    const i = Math.floor(Math.random() * HERO_BACKGROUND_IMAGES.length);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-shot random hero URL before first paint (client-only)
    setHeroImageSrc(HERO_BACKGROUND_IMAGES[i]!);
  }, []);

  const displayedWordCount = prefersReducedMotion
    ? SUBHEADLINE_WORDS.length
    : visibleWordCount;
  const typingComplete =
    prefersReducedMotion || animationTypingComplete;

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    startTransition(() => {
      setVisibleWordCount(0);
      setAnimationTypingComplete(false);
    });

    const startTimer = window.setTimeout(() => {
      intervalRef.current = window.setInterval(() => {
        setVisibleWordCount((prev) => {
          const next = prev + 1;
          if (next >= SUBHEADLINE_WORDS.length) {
            if (intervalRef.current !== null) {
              window.clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
            doneTimeoutRef.current = window.setTimeout(() => {
              setAnimationTypingComplete(true);
              doneTimeoutRef.current = null;
            }, 320);
            return SUBHEADLINE_WORDS.length;
          }
          return next;
        });
      }, MS_PER_WORD);
    }, TYPING_START_DELAY_MS);

    return () => {
      window.clearTimeout(startTimer);
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (doneTimeoutRef.current !== null) {
        window.clearTimeout(doneTimeoutRef.current);
        doneTimeoutRef.current = null;
      }
    };
  }, [prefersReducedMotion]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background: slate base (no wrong photo), then photo after preload + decode */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#0F172A] to-[#0F172A]"
          aria-hidden
        />
        {heroImageSrc ? (
          <Fragment key={heroImageSrc}>
            {/* Native img avoids next/image `/_next/image` vs raw URL cache mismatch (flash of wrong photo). */}
            {/* Wrapped in motion.div for parallax scroll drift without re-requesting the image. */}
            <motion.div
              style={{ y: bgY }}
              className="absolute inset-x-0 -top-10 bottom-0 will-change-transform"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroImageSrc}
                alt="Fitness studio and gym training environment"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className={cn(
                  "absolute inset-0 h-[115%] w-full object-cover transition-opacity duration-500 ease-out",
                  heroImageVisible
                    ? "opacity-100"
                    : "pointer-events-none opacity-0 invisible",
                )}
                onLoad={() => setHeroImageVisible(true)}
                onError={() => setHeroImageVisible(true)}
              />
            </motion.div>
          </Fragment>
        ) : null}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/70 to-[#0F172A]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-purple-100 bg-clip-text text-transparent leading-tight">
              Align Body. Master Mind. Thrive 360°
            </h1>
          </motion.div>

          {/* Outside the headline motion.div so Motion SSR does not attach opacity to this <p> */}
          <p
            className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto text-balance min-h-[4.5rem] md:min-h-[5.5rem]"
            suppressHydrationWarning
          >
            <span className="sr-only">{HERO_SUBHEADLINE}</span>
            <span aria-hidden className="inline">
              {SUBHEADLINE_WORDS.slice(0, displayedWordCount).map((word, i) => (
                <Fragment key={`${i}-${word}`}>
                  {i > 0 ? " " : null}
                  {prefersReducedMotion ? (
                    <span className="inline">{word}</span>
                  ) : (
                    <motion.span
                      className="inline"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.24,
                        ease: [0.22, 1, 0.36, 1] as const,
                      }}
                    >
                      {word}
                    </motion.span>
                  )}
                </Fragment>
              ))}
              {!prefersReducedMotion && displayedWordCount < SUBHEADLINE_WORDS.length ? (
                <motion.span
                  aria-hidden
                  className="inline-block w-0.5 h-[0.85em] bg-gray-200 ml-1.5 rounded-[1px] align-middle"
                  animate={{ opacity: [1, 1, 0, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                    times: [0, 0.52, 0.52, 1],
                  }}
                />
              ) : null}
            </span>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              typingComplete
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-xl shadow-primary/20"
            >
              Start Your Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('plans')}
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-6 text-lg rounded-full backdrop-blur-sm bg-white/5"
            >
              See Memberships & Plans
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={typingComplete ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}