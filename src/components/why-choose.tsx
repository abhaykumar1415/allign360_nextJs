import { motion } from "motion/react";
import { Heart, Users, Sparkles, TrendingUp, ShieldCheck, UserCheck } from "lucide-react";

export function WhyChoose() {
  const benefits = [
    {
      icon: Heart,
      title: "Holistic Transformation",
      description: "Train your body while healing your mind. Complete wellness, not just fitness.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: UserCheck,
      title: "Truly Personalized",
      description: "No cookie-cutter plans. Reassessed every 45 days to match your journey.",
      gradient: "from-primary to-emerald-400",
    },
    {
      icon: Sparkles,
      title: "Science + Soul",
      description: "Functional training meets breathwork and stillness practices.",
      gradient: "from-secondary to-purple-400",
    },
    {
      icon: Users,
      title: "Real Community",
      description: "Not just members - a supportive tribe that celebrates every win.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Sustainable Habits",
      description: "No extreme diets or burnout routines. Progress, not perfection.",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      icon: ShieldCheck,
      title: "Judgment-Free Zone",
      description: "Progress is celebrated, struggles are supported, every body is welcome.",
      gradient: "from-indigo-500 to-violet-500",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-[#111827]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Align 360?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
