import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1E3A8A] shadow-lg"
          : "bg-[#1E3A8A]/95 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 lg:h-40">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/images/logo.png"
              alt="The Koshish Kompany Logo"
              className="h-36 w-36 lg:h-48 lg:w-48 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm lg:text-base leading-tight font-poppins">
                The Koshish
              </span>
              <span className="text-[#D4AF37] font-bold text-sm lg:text-base leading-tight font-poppins">
                Kompany
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location === link.href
                    ? "text-[#D4AF37] bg-white/10"
                    : "text-white/90 hover:text-[#D4AF37] hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/916204077451?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-4 py-2 bg-[#D4AF37] text-[#1E3A8A] rounded-md text-sm font-semibold hover:bg-yellow-400 transition-colors duration-200"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 py-3 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  location === link.href
                    ? "text-[#D4AF37] bg-white/10"
                    : "text-white/90 hover:text-[#D4AF37] hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-3">
              <a
                href="https://wa.me/916204077451?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 bg-[#D4AF37] text-[#1E3A8A] rounded-md text-sm font-semibold hover:bg-yellow-400 transition-colors duration-200"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
