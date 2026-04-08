import { motion } from "motion/react";
import { Star } from "lucide-react";

export function SocialProof() {
  const members = [
    { id: 1, name: "Sarah M." },
    { id: 2, name: "Priya K." },
    { id: 3, name: "Jessica L." },
    { id: 4, name: "Ananya R." },
  ];

  return (
    <section className="py-8 border-y border-white/10 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 text-center"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-medium ring-2 ring-background"
                >
                  {member.name.charAt(0)}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white text-xs font-medium ring-2 ring-background">
                +400
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-300 font-medium">
              Join 400+ members on the journey
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
