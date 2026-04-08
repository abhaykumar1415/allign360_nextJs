import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Heart, Activity, Baby, Apple, UserCheck } from "lucide-react";

export function WomensGuidance() {
  const features = [
    {
      icon: Heart,
      title: "PCOS/PCOD Support",
      description: "Safe, effective training protocols designed for hormonal balance",
    },
    {
      icon: Activity,
      title: "Hormone-Friendly Weight Management",
      description: "No extreme measures - sustainable approaches that work with your body",
    },
    {
      icon: Baby,
      title: "Pre & Postnatal Programs",
      description: "Intelligent training through every stage of motherhood",
    },
    {
      icon: Apple,
      title: "Cycle-Based Nutrition",
      description: "Support that works with your menstrual cycle, not against it",
    },
    {
      icon: UserCheck,
      title: "Expert Guidance",
      description: "One-on-one support from trainers who truly understand",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-[#111827]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Fitness That Understands a{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    Woman&apos;s Body
                  </span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
              </div>

              <p className="text-lg text-gray-300">
                Your body is unique, complex, and powerful. Our women&apos;s guidance program honors that with specialized support for every stage of your journey.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl backdrop-blur-lg bg-white/5 border border-white/10 hover:border-pink-500/30 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-white">{feature.title}</h3>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-6 text-lg rounded-full shadow-xl shadow-pink-500/20"
              >
                Book a Private Consultation
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-pink-500/10">
              <Image
                src="https://images.unsplash.com/photo-1657584905470-ac4ef76ee2b4?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Women's fitness training"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Floating badge */}
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20">
                <p className="text-sm font-medium text-gray-300 mb-2">Specialized Support For</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-pink-500/20 text-pink-300 border border-pink-500/30">
                    PCOS/PCOD
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    Pregnancy
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-pink-500/20 text-pink-300 border border-pink-500/30">
                    Hormonal Health
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    Postnatal
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
