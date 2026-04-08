import Image from "next/image";
import { Heart, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Memberships", href: "#plans" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Personal Training",
    "Group Classes",
    "Mental Wellness",
    "Women's Guidance",
    "Nutrition Support",
  ];

  return (
    <footer className="bg-[#111827] border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpg"
                alt="A360 - Align 360 Fitness & Wellness"
                width={108}
                height={101}
                className="h-9 w-auto object-contain"
              />
              <div>
                <div className="font-bold text-xl text-white">Align 360</div>
                <div className="text-xs text-gray-400 -mt-1">Fitness & Wellness</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Where strength meets stillness. Transform your body, master your mind, thrive in every aspect of life.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>123 Wellness Avenue, Jubilee Hills, Hyderabad 500033</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+917066951515" className="hover:text-primary transition-colors">
                  +91 7066951515
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:hello@align360.fit" className="hover:text-primary transition-colors">
                  hello@align360.fit
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2026 Align 360 Fitness. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for your wellness
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
