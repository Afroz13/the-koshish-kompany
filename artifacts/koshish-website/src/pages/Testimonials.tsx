import { Link } from "wouter";
import { Star, Quote, ChevronRight, MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "Suchitra Sharma",
    role: "MBA Student,Bangalore",
    content:
      "The Koshish Kompany helped me complete my MBA thesis on time. Gaurav sir's guidance on the research methodology and presentation was exceptional. I scored a distinction!",
    rating: 5,
    service: "Project Guidance",
    avatar: null,
    initials: "SS",
    color: "bg-blue-600",
  },
  {
    name: "Rohan Mehta",
    role: "Software Engineer, Bangalore",
    content:
      "I was struggling with ITR filing for my freelance income. The team made it so easy — explained everything clearly, filed everything on time, and saved me a significant amount. Highly recommended!",
    rating: 5,
    service: "ITR Filing",
    avatar: null,
    initials: "RM",
    color: "bg-green-600",
  },
  {
    name: "Anshu Patel",
    role: "BBA Student, Vizag",
    content:
      "I had my placement interviews coming up and had no idea how to prepare. The mock interviews and resume review sessions by The Koshish Kompany transformed my confidence. Got placed at my dream company!",
    rating: 4,
    service: "Career Training",
    avatar: null,
    initials: "AP",
    color: "bg-purple-600",
  },
  {
    name: "Vikram Agarwal",
    role: "Startup Founder, Noida",
    content:
      "Excellent consulting support for my e-commerce startup. They helped with business plan documentation, GST registration, and even loan application guidance. The team is knowledgeable and genuinely invested in your success.",
    rating: 5,
    service: "Startup Consulting",
    avatar: null,
    initials: "VA",
    color: "bg-yellow-600",
  },
  {
    name: "Ananya Krishnan",
    role: "HR Manager, TechCorp Chennai",
    content:
      "We hired The Koshish Kompany for anchoring our annual corporate event in Bangalore. Gaurav's professionalism and stage presence was outstanding. Our team loved every moment!",
    rating: 5,
    service: "Event Anchoring",
    avatar: null,
    initials: "AK",
    color: "bg-rose-600",
  },
  {
    name: "Vivian Kumar",
    role: "MBA, Bangalore",
    content:
      "Getting my MBA final year project done with their help was a game changer. They guided me through the literature review, implementation, and even helped with the abstract. Truly professional service!",
    rating: 4.5,
    service: "Project Guidance",
    avatar: null,
    initials: "VK",
    color: "bg-indigo-600",
  },
];

export default function Testimonials() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section
        className="relative py-24 lg:py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Testimony_01.jpeg')" }}
      >
        <div className="absolute inset-0 bg-[#1E3A8A]/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-6">
            <Star className="h-3 w-3 text-[#D4AF37]" fill="currentColor" />
            <span className="text-[#D4AF37] text-sm font-medium">Client Reviews</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-poppins">
            What Our <span className="text-[#D4AF37]">Clients Say</span>
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Real stories from real people whose lives we've helped transform. Your success is our greatest achievement.
          </p>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {[
              { value: "100+", label: "Happy Clients" },
              { value: "5.0", label: "Average Rating" },
              { value: "100%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-[#D4AF37] font-poppins">{stat.value}</div>
                <div className="text-white/70 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="card-hover bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col"
              >
                {/* Quote icon */}
                <Quote className="h-8 w-8 text-[#D4AF37]/40 mb-4" fill="currentColor" />

                {/* Rating */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-[#D4AF37]" fill="currentColor" />
                  ))}
                </div>

                {/* Service tag */}
                <span className="inline-block px-3 py-1 bg-blue-50 text-[#1E3A8A] rounded-full text-xs font-medium mb-4 self-start border border-blue-100">
                  {testimonial.service}
                </span>

                {/* Content */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white text-xs font-bold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#1E3A8A] text-sm">{testimonial.name}</div>
                    <div className="text-gray-500 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Space for more reviews coming soon */}
          <div className="mt-10 bg-white border-2 border-dashed border-[#D4AF37]/40 rounded-2xl p-8 text-center">
            <MessageSquare className="h-12 w-12 text-[#D4AF37]/50 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">More Reviews Coming Soon</h3>
            <p className="text-gray-500 text-sm">
              We're growing! More client stories will appear here as we continue to empower more individuals and businesses across India.
            </p>
          </div>
        </div>
      </section>

      {/* Submit a Review */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#f8f9fa] rounded-2xl p-8 border border-gray-100">
            <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="h-8 w-8 text-[#D4AF37]" />
            </div>
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-3 font-poppins">Worked With Us?</h2>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              We'd love to hear about your experience. Share your feedback to help others discover The Koshish Kompany and to help us serve you better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/916204077451?text=Hi%2C%20I%20would%20like%20to%20share%20my%20feedback%20about%20The%20Koshish%20Kompany"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-green-500 transition-colors text-sm"
              >
                Share via WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1E3A8A] text-white rounded-lg font-semibold hover:bg-[#1a3070] transition-colors text-sm"
              >
                Contact Form <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 hero-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-poppins">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-white/80 mb-8">
            Join 100+ students and professionals who have transformed their lives with The Koshish Kompany.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#1E3A8A] rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Explore Services <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
