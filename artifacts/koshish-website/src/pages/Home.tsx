import { Link } from "wouter";
import { BookOpen, Briefcase, FileText, Building2, Mic2, Star, ChevronRight, Award, Users, TrendingUp } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "College Project Guidance",
    desc: "Expert support for students from all backgrounds to complete academic projects with confidence.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Briefcase,
    title: "Career Training & Interview Prep",
    desc: "Workshops and coaching to sharpen interview skills, craft standout resumes, and plan your career path.",
    color: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    icon: FileText,
    title: "ITR & GST Filing",
    desc: "Professional tax filing assistance for individuals and small businesses — fast, accurate, affordable.",
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Building2,
    title: "Business/Startup Consulting",
    desc: "Strategic advisory for new businesses on loans, documentation, compliance, and growth.",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Mic2,
    title: "Event Anchoring",
    desc: "Professional anchoring for events — virtual and physically at Bangalore & Mumbai.",
    color: "bg-red-50",
    iconColor: "text-red-600",
  },
];

const achievements = [
  "Helping 100+ students since 2025",
  "Trusted by 50+ businesses for consulting",
  "Expert ITR & GST assistance for individuals",
  "Career training workshops across India",
  "Celebrating 1 Year of Empowering Success — April 2025",
  "Award-winning team with certifications in AI, Analytics & Business",
];

export default function Home() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#D4AF37] blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-6">
              <Star className="h-4 w-4 text-[#D4AF37]" fill="currentColor" />
              <span className="text-[#D4AF37] text-sm font-medium">Edutech &amp; Consultancy Firm</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-poppins">
              Empowering Success Through{" "}
              <span className="text-[#D4AF37]">Education &amp; Consulting</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-xl">
              We guide students, professionals, and businesses with expert mentorship, career training, tax filing, and strategic consulting. Your success is our Koshish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#1E3A8A] rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 text-base"
              >
                Contact Us <ChevronRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/916204077451?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-green-500 transition-colors duration-200 text-base"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 2.124.556 4.122 1.528 5.858L0 24l6.336-1.633C7.952 23.397 9.924 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.661-.516-5.173-1.413l-.369-.218-3.817.984 1.024-3.688-.241-.382A9.944 9.944 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { value: "100+", label: "Students Helped" },
                { value: "50+", label: "Businesses Served" },
                { value: "1 Year", label: "Of Excellence" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-[#D4AF37] font-poppins">{stat.value}</div>
                  <div className="text-white/60 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image - Anniversary Banner */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-2xl blur-xl scale-110" />
              <img
                src="/images/anniversary.jpeg"
                alt="The Koshish Kompany 1st Anniversary - Gaurav Goswami Founder & CEO"
                className="relative z-10 rounded-2xl shadow-2xl max-w-sm w-full object-cover border-2 border-[#D4AF37]/30"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#D4AF37] text-[#1E3A8A] rounded-xl px-4 py-2 font-bold text-sm shadow-lg z-20">
                🎉 1 Year Anniversary — April 2025
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Ticker */}
      <div className="bg-[#D4AF37] py-3 overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...achievements, ...achievements].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-[#1E3A8A] font-semibold text-sm mx-8">
              <Star className="h-3 w-3 flex-shrink-0" fill="currentColor" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#1E3A8A] text-sm font-medium">What We Offer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4 font-poppins">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">
              From academic project guidance to business consulting, we provide comprehensive support to help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href="/services"
                  className={`card-hover rounded-xl p-6 border border-gray-100 text-center group cursor-pointer ${service.color}`}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm mb-4 ${service.iconColor}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-[#1E3A8A] text-sm mb-2 leading-snug">{service.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{service.desc}</p>
                  <div className="mt-4 text-xs font-medium text-[#1E3A8A] flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ChevronRight className="h-3 w-3" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1E3A8A] text-[#1E3A8A] rounded-lg font-semibold hover:bg-[#1E3A8A] hover:text-white transition-colors duration-200"
            >
              View All Services <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-100 rounded-full px-4 py-1.5 mb-4">
              <Star className="h-3 w-3 text-[#D4AF37]" fill="currentColor" />
              <span className="text-[#D4AF37] text-sm font-medium">Founder Spotlight</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] font-poppins">Meet Our Founder</h2>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src="/images/gaurav-founder.png"
                  alt="Gaurav Goswami - Founder & CEO of The Koshish Kompany"
                  className="w-full h-full object-cover min-h-[400px]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1E3A8A] to-transparent p-6 md:hidden">
                  <h3 className="text-white text-xl font-bold">Gaurav Goswami</h3>
                  <p className="text-[#D4AF37] text-sm">Founder &amp; CEO</p>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="hidden md:block mb-4">
                  <h3 className="text-2xl font-bold text-[#1E3A8A] font-poppins">Gaurav Goswami</h3>
                  <p className="text-[#D4AF37] font-semibold mt-1">Founder &amp; CEO</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["MBA - Marketing", "Six Sigma Certified", "Business Analytics", "Digital Marketing"].map((cert) => (
                    <span key={cert} className="px-3 py-1 bg-blue-50 text-[#1E3A8A] rounded-full text-xs font-medium border border-blue-100">
                      {cert}
                    </span>
                  ))}
                </div>
                <blockquote className="text-gray-600 text-sm leading-relaxed italic border-l-4 border-[#D4AF37] pl-4 mb-6">
                  "The right direction and opportunities can transform lives. I built The Koshish Kompany with a mission to create real, positive change by empowering people through knowledge and guidance."
                </blockquote>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Mr. Gaurav Goswami is a dynamic professional with over five years of experience across education and consulting. As Founder &amp; CEO, he leads a purpose-driven startup committed to creating meaningful impact — empowering individuals through guidance, skill development, and career support.
                </p>
                <Link
                  href="/about"
                  className="mt-6 inline-flex items-center gap-2 text-[#1E3A8A] font-semibold text-sm hover:text-[#D4AF37] transition-colors"
                >
                  Read Full Bio <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Koshish */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
                <span className="text-[#1E3A8A] text-sm font-medium">Why Choose Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-6 font-poppins">
                Why The Koshish Kompany?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                "Koshish" means effort or attempt. We believe every honest effort deserves the right support. We bridge the gap between academic life and professional success for first-generation students and emerging professionals.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Users, title: "100+ Students Guided", desc: "From project help to career launch" },
                  { icon: Award, title: "Certified Experts", desc: "AI, Data Analytics, Six Sigma, and more" },
                  { icon: TrendingUp, title: "Result-Oriented", desc: "Practical, hands-on guidance that works" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#1E3A8A] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1E3A8A] text-sm">{item.title}</h4>
                        <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#1E3A8A] rounded-2xl p-8 text-white">
                <img
                  src="/images/logo.png"
                  alt="TKK Logo"
                  className="h-20 w-20 object-contain mb-6 mx-auto"
                />
                <h3 className="text-2xl font-bold text-center mb-4 font-poppins">
                  1st Anniversary Celebration
                </h3>
                <p className="text-white/80 text-center text-sm leading-relaxed mb-6">
                  On 2nd April 2025, The Koshish Kompany proudly completed its first year of empowering students and professionals across India. Thank you for your love and support!
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "April 2025", label: "Founded" },
                    { value: "3", label: "Board Members" },
                    { value: "Virtual", label: "Offices: Mumbai & Bangalore" },
                    { value: "India", label: "Serving Nationwide" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-[#D4AF37] font-bold text-sm">{item.value}</div>
                      <div className="text-white/60 text-xs mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-[#D4AF37] blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-poppins">
            Ready to Grow? Let's Connect.
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Reach us via WhatsApp for instant support or fill out our contact form to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/916204077451?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-green-500 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.374 0 0 5.373 0 12c0 2.124.556 4.122 1.528 5.858L0 24l6.336-1.633C7.952 23.397 9.924 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.661-.516-5.173-1.413l-.369-.218-3.817.984 1.024-3.688-.241-.382A9.944 9.944 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#1E3A8A] rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Contact Form <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
