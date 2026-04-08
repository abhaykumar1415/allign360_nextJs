export interface Offering {
  id: string;
  title: string;
  subtitle: string;
  /** lucide-react icon name */
  icon: string;
  /** tailwind gradient classes (e.g. hero overlay) */
  accentColor: string;
  heroImage: string;
  tagline: string;
  description: string;
  benefits: string[];
  whoIsItFor: string[];
  sessionInfo: {
    duration: string;
    frequency: string;
    level: string;
    format: string;
  };
  ctaText: string;
}

export const offerings: Offering[] = [
  {
    id: "strength-training",
    title: "Functional & Strength Training",
    subtitle: "Build real-world strength and resilience",
    icon: "Dumbbell",
    accentColor: "from-purple-600 to-indigo-700",
    heroImage:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    tagline: "Train for life, not just the gym floor.",
    description:
      "Our Functional & Strength Training program is built around movements your body was designed to do — push, pull, hinge, squat, and carry. Every session is programmed to build real-world strength, improve posture, and develop the resilience that carries over into everyday life. Whether you're a beginner picking up your first barbell or an athlete looking to optimize performance, our coaches tailor the intensity to where you are today.",
    benefits: [
      "Increased lean muscle mass and metabolism",
      "Improved joint stability and injury prevention",
      "Better posture and spinal health",
      "Enhanced athletic performance",
      "Sustainable fat loss through strength",
      "Measurable progress tracked every session",
    ],
    whoIsItFor: [
      "Beginners wanting a structured start",
      "Office workers with posture issues",
      "Athletes seeking performance gains",
      "Anyone who has tried cardio and hit a plateau",
    ],
    sessionInfo: {
      duration: "50 minutes",
      frequency: "3–5x per week",
      level: "All levels",
      format: "Group & Personal Training",
    },
    ctaText: "Book a Strength Session",
  },
  {
    id: "group-classes",
    title: "Dynamic Group Classes",
    subtitle: "Zumba, Yoga, and more high-energy sessions",
    icon: "Users",
    accentColor: "from-teal-500 to-emerald-700",
    heroImage:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    tagline: "Move together. Grow together.",
    description:
      "There's something electric about working out with a group. Our Dynamic Group Classes span the full energy spectrum — from the explosive beats of Zumba to the grounding flow of Yoga, and everything in between. Led by certified instructors who read the room and push you beyond what you'd do alone, these sessions are the heartbeat of Align 360's community. No two classes are the same.",
    benefits: [
      "Community accountability and motivation",
      "Variety prevents workout boredom",
      "Expert instruction in every session",
      "Cardiovascular fitness improvement",
      "Stress relief through group energy",
      "Social connection and belonging",
    ],
    whoIsItFor: [
      "Those who thrive in social environments",
      "People who get bored of solo workouts",
      "Dancers and rhythm lovers (Zumba)",
      "Those seeking balance and flexibility (Yoga)",
    ],
    sessionInfo: {
      duration: "45–60 minutes",
      frequency: "Daily classes available",
      level: "Beginner to Intermediate",
      format: "Group (max 20 participants)",
    },
    ctaText: "View Class Schedule",
  },
  {
    id: "mental-wellness",
    title: "Stillness & Mental Wellness",
    subtitle: "Programs for a calm, focused mind",
    icon: "Brain",
    accentColor: "from-blue-500 to-cyan-700",
    heroImage:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    tagline: "The strongest muscle is your mind.",
    description:
      "In a city that never slows down, Align 360's Stillness & Mental Wellness program is your sanctuary. Drawing from evidence-based mindfulness, meditation, and breathwork practices, this program is designed to reduce cortisol, sharpen focus, and build the emotional resilience that modern life demands. We don't just train bodies — we build whole, balanced humans.",
    benefits: [
      "Reduced anxiety and cortisol levels",
      "Improved sleep quality",
      "Sharper daily focus and clarity",
      "Emotional regulation skills",
      "Lower blood pressure",
      "Greater sense of purpose and calm",
    ],
    whoIsItFor: [
      "Professionals under high stress",
      "Those experiencing burnout or anxiety",
      "Anyone struggling with sleep",
      "People starting their mindfulness journey",
    ],
    sessionInfo: {
      duration: "30–45 minutes",
      frequency: "2–3x per week recommended",
      level: "All levels, no experience needed",
      format: "Group sessions & 1-on-1 guided",
    },
    ctaText: "Begin Your Stillness Journey",
  },
  {
    id: "breathwork",
    title: "Breathwork & Sound Healing",
    subtitle: "Mindfulness practices for deeper wellness",
    icon: "Wind",
    accentColor: "from-teal-600 to-green-800",
    heroImage:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
    tagline: "Your breath is the most powerful tool you own.",
    description:
      "Breathwork is one of the most underutilized performance tools available to us — free, always accessible, and profoundly transformative. Combined with sound healing using Tibetan bowls, crystal singing bowls, and guided frequencies, our sessions take you into deep states of rest and recovery that no amount of sleep can replicate. Each session is a full-body reset.",
    benefits: [
      "Activates the parasympathetic nervous system",
      "Releases stored emotional tension",
      "Improves lung capacity and oxygen efficiency",
      "Deepens body awareness",
      "Powerful recovery tool for athletes",
      "Access to meditative states without years of practice",
    ],
    whoIsItFor: [
      "High-performers seeking deeper recovery",
      "Those carrying chronic stress or trauma",
      "Athletes wanting nervous system regulation",
      "Curious beginners open to holistic healing",
    ],
    sessionInfo: {
      duration: "60–90 minutes",
      frequency: "Weekly sessions",
      level: "All levels",
      format: "Group immersive & private sessions",
    },
    ctaText: "Reserve Your Spot",
  },
  {
    id: "womens-guidance",
    title: "Women's Special Guidance",
    subtitle: "PCOS, pregnancy, hormonal health support",
    icon: "Heart",
    accentColor: "from-pink-500 to-rose-700",
    heroImage:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
    tagline: "Fitness that understands your body.",
    description:
      "Women's physiology is unique — and finally, fitness is catching up. Our Women's Special Guidance program is built with deep respect for hormonal cycles, life stages, and health conditions that are uniquely female. Whether you're managing PCOS, navigating pregnancy or postpartum recovery, approaching perimenopause, or simply wanting a program that works with your body instead of against it — this is where you belong.",
    benefits: [
      "Hormone-aware training programming",
      "Safe exercise during pregnancy & postpartum",
      "PCOS symptom management through movement",
      "Cycle syncing for optimal performance",
      "Body image and confidence rebuilding",
      "Community of women who understand",
    ],
    whoIsItFor: [
      "Women with PCOS or hormonal imbalances",
      "Pregnant or postpartum mothers",
      "Women in perimenopause or menopause",
      "Anyone who feels let down by generic fitness programs",
    ],
    sessionInfo: {
      duration: "50 minutes",
      frequency: "2–4x per week",
      level: "All levels, condition-aware",
      format: "Small group & 1-on-1 specialist coaching",
    },
    ctaText: "Start Your Personalized Journey",
  },
  {
    id: "nutrition-tracking",
    title: "Nutrition & InBody Tracking",
    subtitle: "Personalized roadmap to your goals",
    icon: "Apple",
    accentColor: "from-orange-500 to-amber-700",
    heroImage:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    tagline: "You can't out-train a bad diet — let's fix that.",
    description:
      "Transformation starts in the kitchen and ends on the InBody scale. Our Nutrition & InBody Tracking program pairs evidence-based dietary guidance with quarterly body composition scans to give you the clearest possible picture of what's actually changing in your body. No fad diets. No starvation. Just sustainable nutrition built around your lifestyle, culture, and goals — designed by certified nutritionists.",
    benefits: [
      "Personalized macronutrient targets",
      "Indian diet-friendly meal planning",
      "InBody scans tracking muscle vs fat (not just weight)",
      "Gut health and digestion optimization",
      "Supplement guidance when needed",
      "Monthly check-ins and plan adjustments",
    ],
    whoIsItFor: [
      "People stuck despite regular exercise",
      "Those who want data-driven progress",
      "Athletes optimizing body composition",
      "Anyone who has tried diets that didn't last",
    ],
    sessionInfo: {
      duration: "Initial consult: 60 min",
      frequency: "Monthly follow-ups",
      level: "All goals and lifestyles",
      format: "1-on-1 nutritionist sessions",
    },
    ctaText: "Book a Nutrition Consult",
  },
  {
    id: "stillness-program",
    title: "Stillness Program",
    subtitle: "Guided sessions to quiet the mind and find inner peace",
    icon: "Sparkles",
    accentColor: "from-indigo-500 to-violet-700",
    heroImage:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    tagline: "In stillness, you will find everything you've been searching for.",
    description:
      "The Stillness Program at Align 360 is a structured journey inward. Through guided meditation, body scan practices, and mindful movement, each session is designed to progressively quiet the noise of daily life and bring you into genuine presence. Unlike general meditation apps, our instructors hold space for you in real time — adjusting guidance based on the energy of the room. Over weeks, practitioners report not just feeling calmer, but thinking more clearly, sleeping more deeply, and responding to life rather than reacting to it.",
    benefits: [
      "Clinically backed stress and anxiety reduction",
      "Deeper, more restorative sleep cycles",
      "Improved attention span and mental clarity",
      "Reduced physical symptoms of stress (tension, headaches)",
      "Emotional resilience in high-pressure situations",
      "A personal meditation practice you can carry anywhere",
    ],
    whoIsItFor: [
      "Professionals with high cognitive load",
      "Anyone who has tried meditation apps but can't stay consistent",
      "Those going through major life transitions",
      "People with chronic stress, insomnia, or anxiety",
    ],
    sessionInfo: {
      duration: "40 minutes",
      frequency: "2–3x per week",
      level: "Absolute beginners welcome",
      format: "Group guided sessions",
    },
    ctaText: "Start Your Stillness Practice",
  },
  {
    id: "sound-healing",
    title: "Sound Healing Journeys",
    subtitle: "Vibrational reset with gongs and singing bowls",
    icon: "Music",
    accentColor: "from-amber-500 to-orange-700",
    heroImage:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    tagline: "Let sound do what words cannot.",
    description:
      "Sound Healing Journeys are immersive experiences where therapeutic sound frequencies — produced by Tibetan singing bowls, crystal bowls, gongs, and chimes — wash over the body and nervous system in waves. The vibrational resonance of these instruments interacts directly with your body's own frequency, inducing a state of deep relaxation that bypasses the analytical mind entirely. Each journey is unique, crafted by our certified sound healers to guide you through a full cycle of release, restoration, and renewal. Many participants describe the experience as the deepest rest they have ever felt.",
    benefits: [
      "Immediate shift from sympathetic to parasympathetic state",
      "Deep cellular-level relaxation",
      "Release of emotional and physical blockages",
      "Reduced inflammation markers (linked to chronic stress)",
      "Heightened creativity and mental openness post-session",
      "No prior experience or effort required — just receive",
    ],
    whoIsItFor: [
      "Those who find traditional meditation difficult",
      "Anyone carrying emotional weight or grief",
      "Athletes and high performers seeking deep recovery",
      "The simply curious — first-timers always welcome",
    ],
    sessionInfo: {
      duration: "75–90 minutes",
      frequency: "Weekly or bi-weekly",
      level: "No experience needed",
      format: "Group immersive (lying down)",
    },
    ctaText: "Reserve Your Sound Journey",
  },
  {
    id: "breathwork-nervous-system",
    title: "Breathwork & Nervous System",
    subtitle: "Evidence-based tools to manage stress and anxiety",
    icon: "Wind",
    accentColor: "from-teal-400 to-cyan-700",
    heroImage:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
    tagline: "Master your breath. Master your state.",
    description:
      "This program goes deeper than relaxation — it is nervous system education and retraining. Drawing from Wim Hof Method, box breathing, coherent breathing, and somatic release techniques, our certified breathwork facilitators guide you through structured protocols that give you direct access to your autonomic nervous system. You will learn to consciously shift out of fight-or-flight, process stored stress from the body, and build a toolkit of techniques you can deploy in any moment — before a presentation, after a difficult conversation, or at 3am when your mind won't stop.",
    benefits: [
      "Direct control over stress response (no medication required)",
      "Increased oxygen efficiency and lung capacity",
      "Somatic release of long-held emotional tension",
      "Improved heart rate variability (HRV) — a key health marker",
      "Portable tools: usable anywhere, anytime",
      "Significant reduction in panic and anxiety episodes",
    ],
    whoIsItFor: [
      "People with anxiety, panic attacks, or chronic stress",
      "High performers wanting an edge in pressure situations",
      "Those curious about somatic and body-based healing",
      "Anyone who has tried therapy and wants a body-first complement",
    ],
    sessionInfo: {
      duration: "60 minutes",
      frequency: "Weekly sessions + daily home practice",
      level: "All levels (medical screening for some protocols)",
      format: "Small group & private 1-on-1",
    },
    ctaText: "Book a Breathwork Session",
  },
];

const WELLNESS_PROGRAM_IDS = new Set([
  "stillness-program",
  "sound-healing",
  "breathwork-nervous-system",
]);

const WELLNESS_ORDER = [
  "stillness-program",
  "sound-healing",
  "breathwork-nervous-system",
] as const;

/** Icon cards (Signature Highlights) — excludes wellness image-card programs */
export const signatureHighlightOfferings: Offering[] = offerings.filter(
  (o) => !WELLNESS_PROGRAM_IDS.has(o.id),
);

/** Full-bleed wellness cards (Mental Wellbeing section), stable order */
export const wellnessProgramOfferings: Offering[] = WELLNESS_ORDER.map(
  (id) => offerings.find((o) => o.id === id)!,
);
