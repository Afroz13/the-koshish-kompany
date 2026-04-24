import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Star, Quote, ChevronRight, MessageSquare, Loader2, CheckCircle2 } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  content: string;
  rating: number;
  service: string;
  initials: string;
  color: string;
  isUser?: boolean;
};

const seedTestimonials: Testimonial[] = [
  {
    name: "Suchitra Sharma",
    role: "MBA Student, Bangalore",
    content:
      "The Koshish Kompany helped me complete my MBA thesis on time. Gaurav sir's guidance on the research methodology and presentation was exceptional. I scored a distinction!",
    rating: 5,
    service: "Project Guidance",
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
    initials: "AK",
    color: "bg-rose-600",
  },
  {
    name: "Vivian Kumar",
    role: "MBA, Bangalore",
    content:
      "Getting my MBA final year project done with their help was a game changer. They guided me through the literature review, implementation, and even helped with the abstract. Truly professional service!",
    rating: 4,
    service: "Project Guidance",
    initials: "VK",
    color: "bg-indigo-600",
  },
];

const avatarColors = [
  "bg-blue-600",
  "bg-green-600",
  "bg-purple-600",
  "bg-yellow-600",
  "bg-rose-600",
  "bg-indigo-600",
  "bg-teal-600",
  "bg-orange-600",
];

function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

function pickColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  return avatarColors[hash % avatarColors.length];
}

type FormState = {
  name: string;
  occupation: string;
  city: string;
  content: string;
  rating: number;
};

const initialForm: FormState = {
  name: "",
  occupation: "",
  city: "",
  content: "",
  rating: 5,
};

export default function Testimonials() {
  const [userTestimonials, setUserTestimonials] = useState<Testimonial[]>([]);
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: "success" | "error"; text: string } | null>(
    null,
  );

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/testimonials");
        if (!res.ok) return;
        const data = await res.json();
        if (cancelled || !data?.testimonials) return;
        const mapped: Testimonial[] = data.testimonials.map((t: {
          name: string;
          occupation: string;
          city: string;
          content: string;
          rating: string;
        }) => ({
          name: t.name,
          role: `${t.occupation}, ${t.city}`,
          content: t.content,
          rating: Number(t.rating) || 5,
          service: "Client Feedback",
          initials: getInitials(t.name),
          color: pickColor(t.name),
          isUser: true,
        }));
        setUserTestimonials(mapped);
      } catch {
        // silent — fall back to seed only
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const validate = (f: FormState) => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (f.name.trim().length < 2) e.name = "Please enter your name";
    if (f.occupation.trim().length < 2) e.occupation = "Please enter your occupation";
    if (f.city.trim().length < 2) e.city = "Please enter your city";
    if (f.content.trim().length < 10) e.content = "Feedback should be at least 10 characters";
    if (f.rating < 1 || f.rating > 5) e.rating = "Pick a rating";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMsg(null);
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          occupation: form.occupation.trim(),
          city: form.city.trim(),
          content: form.content.trim(),
          rating: String(form.rating),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data?.success) {
        setStatusMsg({
          type: "error",
          text: data?.message ?? "Could not submit your feedback. Please try again.",
        });
        return;
      }

      const newItem: Testimonial = {
        name: form.name.trim(),
        role: `${form.occupation.trim()}, ${form.city.trim()}`,
        content: form.content.trim(),
        rating: form.rating,
        service: "Client Feedback",
        initials: getInitials(form.name.trim()),
        color: pickColor(form.name.trim()),
        isUser: true,
      };
      setUserTestimonials((prev) => [newItem, ...prev]);
      setForm(initialForm);
      setStatusMsg({ type: "success", text: "Thank you! Your feedback has been added." });
      setTimeout(() => {
        document.getElementById("testimonials-grid")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch {
      setStatusMsg({
        type: "error",
        text: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const allTestimonials = [...userTestimonials, ...seedTestimonials];

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
              { value: `${100 + userTestimonials.length}+`, label: "Happy Clients" },
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
      <section id="testimonials-grid" className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="card-hover bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col relative"
              >
                {testimonial.isUser && (
                  <span className="absolute top-4 right-4 px-2 py-0.5 bg-[#D4AF37]/15 text-[#D4AF37] rounded-full text-[10px] font-semibold uppercase tracking-wide border border-[#D4AF37]/30">
                    New
                  </span>
                )}

                {/* Quote icon */}
                <Quote className="h-8 w-8 text-[#D4AF37]/40 mb-4" fill="currentColor" />

                {/* Rating */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: Math.round(testimonial.rating) }).map((_, i) => (
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
                  <div
                    className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center flex-shrink-0`}
                  >
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

          {userTestimonials.length === 0 && (
            <div className="mt-10 bg-white border-2 border-dashed border-[#D4AF37]/40 rounded-2xl p-8 text-center">
              <MessageSquare className="h-12 w-12 text-[#D4AF37]/50 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">Be the First to Share!</h3>
              <p className="text-gray-500 text-sm">
                Worked with us recently? Use the form below to share your experience — your testimonial will appear here instantly.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Submit a Review */}
      <section id="submit-review" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f8f9fa] rounded-2xl p-6 sm:p-8 border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-[#D4AF37]" fill="currentColor" />
              </div>
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-2 font-poppins">
                Share Your Feedback
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xl mx-auto">
                Worked with The Koshish Kompany? Fill the form below and your testimonial will appear on this page right away.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1E3A8A] mb-1.5 uppercase tracking-wide">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Riya Verma"
                    className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/10"
                    disabled={isSubmitting}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1E3A8A] mb-1.5 uppercase tracking-wide">
                    Occupation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.occupation}
                    onChange={(e) => setForm({ ...form, occupation: e.target.value })}
                    placeholder="e.g. MBA Student"
                    className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/10"
                    disabled={isSubmitting}
                  />
                  {errors.occupation && (
                    <p className="text-xs text-red-500 mt-1">{errors.occupation}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1E3A8A] mb-1.5 uppercase tracking-wide">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    placeholder="e.g. Bangalore"
                    className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/10"
                    disabled={isSubmitting}
                  />
                  {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1E3A8A] mb-1.5 uppercase tracking-wide">
                  Rating <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setForm({ ...form, rating: n })}
                      className="p-1 transition-transform hover:scale-110"
                      aria-label={`${n} star${n > 1 ? "s" : ""}`}
                      disabled={isSubmitting}
                    >
                      <Star
                        className={`h-7 w-7 ${
                          n <= form.rating ? "text-[#D4AF37]" : "text-gray-300"
                        }`}
                        fill={n <= form.rating ? "currentColor" : "none"}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1E3A8A] mb-1.5 uppercase tracking-wide">
                  Your Feedback <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  placeholder="Tell us about your experience working with The Koshish Kompany..."
                  rows={4}
                  className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/10 resize-none"
                  disabled={isSubmitting}
                />
                {errors.content && <p className="text-xs text-red-500 mt-1">{errors.content}</p>}
              </div>

              {statusMsg && (
                <div
                  className={`flex items-center gap-2 p-3 rounded-lg text-sm ${
                    statusMsg.type === "success"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {statusMsg.type === "success" && <CheckCircle2 className="h-4 w-4 flex-shrink-0" />}
                  <span>{statusMsg.text}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1E3A8A] text-white rounded-lg font-semibold hover:bg-[#1a3070] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
                  </>
                ) : (
                  <>Submit Feedback</>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-xs text-gray-500 mb-3">Prefer a different way?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/916204077451?text=Hi%2C%20I%20would%20like%20to%20share%20my%20feedback%20about%20The%20Koshish%20Kompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-green-500 transition-colors text-xs"
                >
                  Share via WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-[#1E3A8A] border border-[#1E3A8A] rounded-lg font-semibold hover:bg-[#1E3A8A] hover:text-white transition-colors text-xs"
                >
                  Contact Form <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
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
