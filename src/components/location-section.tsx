import { motion } from "motion/react";
import { MapPin, Clock, ParkingCircle } from "lucide-react";

export function LocationSection() {
  const timings = [
    { day: "Daily", time: "6:00 AM - 10:00 PM" },
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
            Visit Us
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Come experience Align 360 for yourself
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10"
          >
            <div className="relative h-[400px] bg-gradient-to-br from-primary/20 to-secondary/20">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.260720827534!2d73.9156447!3d18.5679783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70b95%3A0x2d19689e09e2dfd8!2sTown%20Square%20Building%2C%20Shopping%20Center%2C%20Viman%20Nagar%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Align 360 Location"
              />
            </div>
            
            {/* Location badge */}
            <div className="p-6 backdrop-blur-lg bg-white/10 border-t border-white/10">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium mb-1">Align 360 Fitness Center</p>
                  <p className="text-gray-300 text-sm">Second Floor, Town Square Building</p>
                  <p className="text-gray-300 text-sm">Shopping Center, 204, above Dorabjee&apos;s</p>
                  <p className="text-gray-300 text-sm">Viman Nagar, Pune, Maharashtra 411014</p>
                  <a 
                    href="https://maps.app.goo.gl/d5k2w9Ma4kNy4ssC8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline mt-2 inline-block"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/10">
                <ParkingCircle className="w-5 h-5 text-primary" />
                <p className="text-sm text-gray-300">Ample secure parking available</p>
              </div>
            </div>
          </motion.div>

          {/* Timings */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-3xl backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Opening Hours</h3>
              </div>
              
              <div className="space-y-4">
                {timings.map((timing, index) => (
                  <motion.div
                    key={timing.day}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <span className="text-gray-300 font-medium">{timing.day}</span>
                    <span className="text-primary font-semibold">{timing.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 text-center">
                <div className="text-3xl font-bold text-primary mb-1">400+</div>
                <div className="text-sm text-gray-400">Active Members</div>
              </div>
              <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 text-center">
                <div className="text-3xl font-bold text-secondary mb-1">50+</div>
                <div className="text-sm text-gray-400">Classes/Week</div>
              </div>
              <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 text-center">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-gray-400">Expert Trainers</div>
              </div>
              <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 text-center">
                <div className="text-3xl font-bold text-secondary mb-1">5 Years</div>
                <div className="text-sm text-gray-400">Of Excellence</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}