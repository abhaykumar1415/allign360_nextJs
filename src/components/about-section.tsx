import Image from "next/image";
import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src="https://images.unsplash.com/photo-1594333475589-d9165752cb4a?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Happy fitness community"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                About Align 360
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </div>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              At Align 360 Fitness, we believe real health happens when body and mind work in harmony - not against each other.
            </p>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                <p>
                  <span className="font-semibold text-white">Holistic Transformation:</span> We don&apos;t just train muscles; we nurture your complete well-being
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0" />
                <p>
                  <span className="font-semibold text-white">Truly Personalized:</span> No cookie-cutter plans. Every program is reassessed every 45 days to match your evolving goals
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                <p>
                  <span className="font-semibold text-white">Real Community:</span> Not just members - a supportive tribe that celebrates every win and supports every struggle
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0" />
                <p>
                  <span className="font-semibold text-white">Sustainable Approach:</span> We don&apos;t support extreme diets or burnout routines. Progress over perfection, always.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
