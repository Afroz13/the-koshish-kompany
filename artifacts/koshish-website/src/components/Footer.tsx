import { Link } from "wouter";
import { Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d1a4a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.png"
                alt="The Koshish Kompany"
                className="h-12 w-12 object-contain"
              />
              <div>
                <div className="font-bold text-lg leading-tight text-white font-poppins">
                  The Koshish
                </div>
                <div className="font-bold text-lg leading-tight text-[#D4AF37] font-poppins">
                  Kompany
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Empowering individuals through education, guidance, and strategic consulting. "Koshish" — every effort counts.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/thekoshishkompany"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-colors duration-200 group"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-white group-hover:text-[#1E3A8A]" />
              </a>
              <a
                href="https://wa.me/916204077451"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-colors duration-200 group"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4 text-white group-hover:text-[#1E3A8A]" />
              </a>
              <a
                href="mailto:thekoshishkompany@gmail.com"
                className="w-9 h-9 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-colors duration-200 group"
                aria-label="Email"
              >
                <Mail className="h-4 w-4 text-white group-hover:text-[#1E3A8A]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#D4AF37] font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#D4AF37] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#D4AF37] font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                "College Project Guidance",
                "Career Training & Interview Prep",
                "ITR & GST Filing",
                "Business/Startup Consulting",
                "Event Anchoring",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/70 hover:text-[#D4AF37] text-sm transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#D4AF37] font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/70">
                <Phone className="h-4 w-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <a href="tel:+916204077451" className="hover:text-[#D4AF37] transition-colors">
                  +91 6204077451
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <Mail className="h-4 w-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <a href="mailto:thekoshishkompany@gmail.com" className="hover:text-[#D4AF37] transition-colors break-all">
                  thekoshishkompany@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span>Virtual Offices in Mumbai &amp; Bangalore, India</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <Instagram className="h-4 w-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.instagram.com/thekoshishkompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  @thekoshishkompany
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} The Koshish Kompany. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Crafted with dedication &mdash; Every Koshish Counts
          </p>
        </div>
      </div>
    </footer>
  );
}
