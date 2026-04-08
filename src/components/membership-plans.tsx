import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Check, Star, Crown, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};
const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const listItemVariants = {
  hidden: { opacity: 0, x: -18 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

export function MembershipPlans() {
  const plans = [
    {
      name: "Core Membership",
      icon: Sparkles,
      description: "Perfect for group class enthusiasts",
      features: [
        "Unlimited group classes",
        "App-based workout plans",
        "Initial fitness test + InBody scan",
        "45-day reassessment",
        "Community event access",
        "Free mental wellness intro session",
      ],
      gradient: "from-emerald-500 to-teal-500",
      popular: false,
    },
    {
      name: "Align Exclusive",
      icon: Star,
      description: "For those who want more personalized attention",
      features: [
        "Everything in Core",
        "Monthly 1:1 check-in with trainer",
        "Priority class booking",
        "Personalized nutrition guidance",
        "Advanced progress tracking",
        "Exclusive workshops access",
      ],
      gradient: "from-purple-500 to-pink-500",
      popular: true,
    },
    {
      name: "Personal Training",
      icon: Crown,
      description: "Fully personalized transformation journey",
      features: [
        "Everything in Align Exclusive",
        "12 one-on-one training sessions",
        "Fully customized workout plans",
        "Weekly progress reviews",
        "Direct trainer access via WhatsApp",
        "Customized meal planning",
      ],
      gradient: "from-amber-500 to-orange-500",
      popular: false,
    },
  ];

  const allPlansInclude = [
    "Initial Fitness Test + InBody Scan",
    "45-day Reassessment & Plan Update",
    "Workout and progress tracking app",
    "Free mental wellness intro session",
    "Community event access",
    "Women-friendly facilities",
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111827] to-background" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Memberships & Plans
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the plan that fits your goals and lifestyle
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Plans Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`h-full p-8 rounded-3xl backdrop-blur-xl bg-white/5 border-2 ${
                  plan.popular ? 'border-purple-500/50' : 'border-white/10'
                } hover:border-white/30 transition-all duration-300 shadow-xl`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Plan name */}
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <p className="text-sm text-gray-400 mb-6">{plan.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white py-6 rounded-full shadow-lg`}
                  >
                    Get Started
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Every Plan Includes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-12 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
            <h3 className="text-2xl font-bold mb-8 text-center">Every Plan Includes</h3>
            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {allPlansInclude.map((item) => (
                <motion.div
                  key={item}
                  variants={listItemVariants}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Additional CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 rounded-full backdrop-blur-sm bg-white/5"
          >
            Compare Plans
          </Button>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full shadow-xl shadow-primary/20"
          >
            Get a Call Back
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
