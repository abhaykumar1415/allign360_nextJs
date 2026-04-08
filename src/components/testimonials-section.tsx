import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Marketing Professional",
      image: "PS",
      rating: 5,
      text: "Align 360 changed my relationship with fitness. It's not just about losing weight anymore - it's about feeling strong, calm, and confident. The mental wellness sessions are a game-changer!",
      achievement: "Lost 12kg, improved PCOS symptoms",
    },
    {
      name: "Sarah Matthews",
      role: "Software Engineer",
      image: "SM",
      rating: 5,
      text: "Finally found a gym that understands women's health! The trainers are knowledgeable about hormonal balance and pregnancy fitness. I trained safely throughout my pregnancy here.",
      achievement: "Pre & postnatal fitness journey",
    },
    {
      name: "Ananya Reddy",
      role: "Entrepreneur",
      image: "AR",
      rating: 5,
      text: "The 45-day reassessment keeps me accountable and the plans evolve with me. Love the combination of strength training and breathwork. Best investment in myself!",
      achievement: "Gained strength, reduced stress",
    },
    {
      name: "Jessica Wong",
      role: "Teacher",
      image: "JW",
      rating: 5,
      text: "The community here is incredible! From Saturday cricket to the monthly challenges, there's always something to look forward to. It's become my second family.",
      achievement: "Completed first marathon with the group",
    },
  ];

  const communityEvents = [
    {
      title: "Cricket Saturdays",
      description: "Fun, friendly matches every Saturday morning",
      image: "🏏",
    },
    {
      title: "Monthly Challenges",
      description: "Compete with the community, celebrate progress",
      image: "🏆",
    },
    {
      title: "Marathon Group",
      description: "Train together for running events",
      image: "🏃‍♀️",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-b from-background to-[#111827]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Community
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real stories from real members
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Community Events */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {communityEvents.map((event) => (
            <motion.div
              key={event.title}
              variants={cardVariants}
              className="p-6 rounded-2xl backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-center hover:border-primary/30 transition-colors duration-300 hover:scale-[1.03] transition-transform"
            >
              <div className="text-5xl mb-4">{event.image}</div>
              <h3 className="text-lg font-semibold mb-2 text-white">{event.title}</h3>
              <p className="text-gray-400 text-sm">{event.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              className="p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 hover:border-primary/30 transition-colors duration-300"
            >
              <Quote className="w-10 h-10 text-primary/40 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {`"${testimonial.text}"`}
              </p>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-primary font-medium">{testimonial.achievement}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}