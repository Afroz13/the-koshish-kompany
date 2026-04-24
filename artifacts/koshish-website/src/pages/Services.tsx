import { Link } from "wouter";
import { BookOpen, Briefcase, FileText, Building2, Mic2, ChevronRight, CheckCircle, IndianRupee } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "College Student Project Guidance",
    slug: "projects",
    color: "border-blue-200 bg-blue-50",
    iconBg: "bg-blue-600",
    tagline: "Your academic success, our priority",
    description:
      "We help college students from any background complete their academic projects with expert mentorship. Whether it's a final year dissertation, mini project, or business plan, our team provides end-to-end support.",
    features: [
      "Topic selection and research guidance",
      "Project structuring and report writing",
      "Presentation and viva preparation",
      "Available for all streams — Commerce, Arts, Science, Engineering, Management",
      "Quick turnaround with quality assurance",
    ],
    pricing: [
      { label: "Bachelor's Degree Projects", price: "₹1,500 onwards" },
      { label: "Master's / Postgraduate Projects", price: "₹2,000 onwards" },
    ],
  },
  {
    icon: Briefcase,
    title: "Career Training & Interview Preparation",
    slug: "career",
    color: "border-yellow-200 bg-yellow-50",
    iconBg: "bg-yellow-500",
    tagline: "Land your dream job with confidence",
    description:
      "Our career coaching program is designed to prepare you for the real world. From crafting a standout resume to acing interview rounds, we guide you every step of the way.",
    features: [
      "Resume building and LinkedIn optimization",
      "Mock interview sessions with feedback",
      "Group discussion and communication skills",
      "Industry-specific career planning",
      "HR round & technical round preparation",
    ],
    pricing: [
      { label: "Consulting & Career Guidance", price: "₹100 onwards" },
    ],
  },
  {
    icon: FileText,
    title: "ITR & GST Filing",
    slug: "tax",
    color: "border-green-200 bg-green-50",
    iconBg: "bg-green-600",
    tagline: "Hassle-free tax compliance for everyone",
    description:
      "Professional Income Tax Return and GST filing assistance for individuals, freelancers, and small businesses. We ensure accuracy, compliance, and timely submissions.",
    features: [
      "Individual and business ITR filing",
      "GST registration and monthly/quarterly filing",
      "Tax planning and advisory",
      "Documentation support",
      "Notices and queries handling",
    ],
    pricing: [
      { label: "ITR & GST Filing", price: "₹1,000 onwards" },
    ],
  },
  {
    icon: Building2,
    title: "Business & Startup Consulting",
    slug: "consulting",
    color: "border-purple-200 bg-purple-50",
    iconBg: "bg-purple-600",
    tagline: "From idea to execution — we've got you covered",
    description:
      "Whether you're launching a startup or scaling an existing business, our consultants provide strategic advisory on business development, compliance, and growth strategy.",
    features: [
      "Business plan and documentation",
      "Loan application and financial advisory",
      "Company registration and compliance",
      "Branding and go-to-market strategy",
      "Operational setup and mentorship",
    ],
    pricing: [
      { label: "Business Consulting", price: "₹100 onwards" },
    ],
  },
  {
    icon: Mic2,
    title: "Event Anchoring",
    slug: "anchoring",
    color: "border-red-200 bg-red-50",
    iconBg: "bg-red-500",
    tagline: "Make your events unforgettable",
    description:
      "Professional event anchoring services for corporate events, Shaadi Event, conferences, parties, Birthdays and Reception Events. Available both virtually and physically in Mumbai.",
    features: [
      "Corporate events, seminars and Parties",
      "Birthday or any kind of Celebrations",
      "Virtual events and webinars",
      "Shaadi or Receptions Events Celebrations",
      "Bilingual anchoring (English & Hindi)",
    ],
    pricing: [
      { label: "Event Anchoring ( Mumbai and Virtual)", price: "₹2,000 onwards" },
    ],
  },
];

const pricingTable = [
  { service: "Business Consulting", price: "₹100 onwards" },
  { service: "ITR & GST Filing", price: "₹1,000 onwards" },
  { service: "Bachelor's Degree Projects", price: "₹1,500 onwards" },
  { service: "Master's / PG Projects", price: "₹2,000 onwards" },
  { service: "Event Anchoring", price: "₹2,000 onwards" },
];

export default function Services() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section
        className="relative py-24 lg:py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services.jpeg')" }}
      >
        <div className="absolute inset-0 bg-[#1E3A8A]/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#D4AF37] text-sm font-medium">What We Offer</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-poppins">
            Our <span className="text-[#D4AF37]">Services</span>
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
            From academic support to business advisory, we provide comprehensive services tailored to your needs.
          </p>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-12 bg-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A8A] font-poppins flex items-center justify-center gap-2">
              <IndianRupee className="h-6 w-6" />
              Starting Prices at a Glance
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {pricingTable.map((item) => (
              <div key={item.service} className="bg-white rounded-xl p-4 text-center shadow-md">
                <div className="text-[#1E3A8A] font-bold text-sm mb-1">{item.price}</div>
                <div className="text-gray-600 text-xs">{item.service}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  id={service.slug}
                  className={`rounded-2xl border overflow-hidden ${service.color}`}
                >
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                    <div className={`p-8 lg:p-10 ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${service.iconBg} mb-6 shadow-md`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#1E3A8A] mb-2 font-poppins">{service.title}</h2>
                      <p className="text-[#D4AF37] font-semibold text-sm mb-4 italic">{service.tagline}</p>
                      <p className="text-gray-600 leading-relaxed mb-6 text-sm">{service.description}</p>

                      <ul className="space-y-2 mb-8">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <a
                        href="https://wa.me/916204077451?text=Hello%20I%20would%20like%20to%20enquire%20about%20your%20services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1E3A8A] text-white rounded-lg font-semibold text-sm hover:bg-[#1a3070] transition-colors"
                      >
                        Enquire Now <ChevronRight className="h-4 w-4" />
                      </a>
                    </div>

                    <div className={`bg-white/60 p-8 lg:p-10 flex flex-col justify-center ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                      <h3 className="text-lg font-semibold text-[#1E3A8A] mb-6 flex items-center gap-2">
                        <IndianRupee className="h-5 w-5 text-[#D4AF37]" />
                        Pricing
                      </h3>
                      <div className="space-y-3">
                        {service.pricing.map((p) => (
                          <div key={p.label} className="flex items-center justify-between bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm">
                            <span className="text-gray-700 text-sm font-medium">{p.label}</span>
                            <span className="text-[#1E3A8A] font-bold text-sm whitespace-nowrap ml-4">{p.price}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 bg-[#1E3A8A]/5 rounded-xl p-5 border border-[#1E3A8A]/10">
                        <p className="text-[#1E3A8A] font-semibold text-sm mb-2">Need a custom quote?</p>
                        <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                          Every project is unique. Reach out and we'll provide a tailored quote based on your specific requirements.
                        </p>
                        <div className="flex gap-3">
                          <a
                            href="https://wa.me/916204077451?text=Hello%20I%20need%20a%20custom%20quote"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center px-3 py-2 bg-[#25D366] text-white rounded-lg text-xs font-semibold hover:bg-green-500 transition-colors"
                          >
                            WhatsApp
                          </a>
                          <Link
                            href="/contact"
                            className="flex-1 text-center px-3 py-2 bg-[#1E3A8A] text-white rounded-lg text-xs font-semibold hover:bg-[#1a3070] transition-colors"
                          >
                            Contact Form
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-poppins">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 mb-8">
            Contact us today for a free consultation. Every Koshish (effort) is worth it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/916204077451?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-green-500 transition-colors"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#1E3A8A] rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Send Enquiry <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
