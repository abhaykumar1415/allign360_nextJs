import Image from "next/image";
import { motion } from "motion/react";
import { Sparkles, Shield, Users } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export function FacilitiesSection() {
  const highlights = [
    {
      icon: Sparkles,
      title: "Spacious Zones",
      description: "Dedicated areas for strength, cardio, functional training, and mindfulness",
    },
    {
      icon: Shield,
      title: "Hygiene Focus",
      description: "Premium cleanliness standards maintained throughout the facility",
    },
    {
      icon: Users,
      title: "Women-Friendly",
      description: "Private changing areas and exclusive women's training spaces",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            World-Class Facilities
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A premium space designed for your transformation
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6" />
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div
            variants={itemVariants}
            className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 group"
          >
            <Image
              src="https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwc3R1ZGlvJTIwbW9kZXJuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcxMTYyNDcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Modern fitness studio interior"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-secondary/10 group"
          >
            <Image
              src="https://images.unsplash.com/photo-1761971976282-b2bb051a5474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGZhY2lsaXR5JTIwY2xlYW4lMjBtb2Rlcm58ZW58MXx8fHwxNzcxMjQ1OTgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Clean wellness facility"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {highlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                variants={itemVariants}
                className="p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 text-center hover:border-primary/30 hover:bg-white/8 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{highlight.title}</h3>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
