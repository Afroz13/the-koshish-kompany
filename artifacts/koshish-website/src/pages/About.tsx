import { Link } from "wouter";
import { Heart, Eye, Target, Star, Shield, Lightbulb, Users, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "Gaurav Goswami",
    role: "Founder & Lead Consultant",
    image: "/images/gaurav-founder.png",
    bio: "Founded by Gaurav Goswami, an MBA in Marketing with a deep-rooted background in business development and strategic consultancy. With a track record of fostering client relationships at T R Chadha & Co LLP, Gaurav combines analytical commerce expertise with creative leadership to drive The Koshish Kompany toward persistent growth.",
    certifications: ["MBA - Marketing", "Six Sigma", "Business Analytics", "Digital Marketing"],
    quote: "Every effort — every Koshish — brings us closer to our goals.",
  },
  {
    name: "Yogesh Singh Nayal",
    role: "Additional Director / Technical Director",
    image: "/images/yogesh.jpg",
    bio: "A tech-visionary and award-winning engineer, Yogesh leads our technological roadmap. With a background in Computer Science and a distinguished career—where he pioneered AI-driven intelligence platforms for thousands of enterprise contracts—he specializes in Python, Generative AI, and scalable cloud architecture. Yogesh's expertise in RAG and LLM integration ensures our company remains at the forefront of the AI revolution.",
    certifications: ["Web Develpoer", "Computer Science", "Python & AI", "Cloud Architecture", "AI Platforms"],
    quote: "Technology is the bridge between ambition and achievement.",
  },
  {
    name: "MD Afroz Ansari",
    role: "Additional Director / Director of Data & Digital Strategy",
    image: "/images/afroz.png",
    bio: "Afroz is the analytical engine of the company, combining his background in Information Technology with an advanced pursuit of a master's in computer applications. A certified expert in Power BI, SQL, and Machine Learning, he specializes in turning fragmented data into interactive business intelligence. As the lead developer of our digital infrastructure and a former AI Club Secretary, Afroz ensures our company remains data-informed and technologically agile.",
    certifications: ["Data Analyst","Power BI", "Excel", "Machine Learning", "MCA - IT, Generative AI"],
    quote: "Data is the new compass — it tells you exactly where you are and where to go.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Empathy",
    desc: "We genuinely care about the people we serve. Every student, every client, every professional.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: Shield,
    title: "Integrity",
    desc: "We deliver honest, transparent guidance — no shortcuts, no false promises.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Star,
    title: "Excellence",
    desc: "We hold ourselves to the highest standards in every service we provide.",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "From AI tools to modern consulting, we stay ahead of the curve.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Users,
    title: "Inclusion",
    desc: "We believe everyone deserves access to quality mentorship regardless of background.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
];

export default function About() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section
        className="relative py-24 lg:py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/About_01.jpeg')" }}
      >
        <div className="absolute inset-0 bg-[#1E3A8A]/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#D4AF37] text-sm font-medium">Our Story</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-poppins">
            About <span className="text-[#D4AF37]">The Koshish Kompany</span>
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Born from a simple belief: every honest effort deserves the right support. We are here to guide you.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
                <span className="text-[#1E3A8A] text-sm font-medium">Our Background</span>
              </div>
              <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6 font-poppins">How We Started</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2025, The Koshish Kompany began as a small initiative by Gaurav Goswami to help peers navigate the complexities of college projects and business consulting. What started as a humble effort soon grew into a comprehensive consultancy serving students and professionals across India.
                </p>
                <p>
                  We realized that first-generation students and emerging professionals often lack the mentorship required to bridge the gap between academic life and professional success. <span className="text-[#1E3A8A] font-semibold">"Koshish" means effort or attempt</span> — and we are here to support every honest attempt you make toward your goals.
                </p>
                <p>
                  Today, with a team of experts in business, technology, and data strategy, we offer a full suite of services: from academic project guidance and career training to tax filing, startup consulting, and even corporate event anchoring.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: Target, label: "Mission", text: "Empower every individual through guidance and mentorship" },
                  { icon: Eye, label: "Vision", text: "Be India's most trusted Edutech & Consultancy firm" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="bg-[#f8f9fa] rounded-xl p-4 border border-gray-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="h-4 w-4 text-[#D4AF37]" />
                        <span className="font-semibold text-[#1E3A8A] text-sm">{item.label}</span>
                      </div>
                      <p className="text-gray-600 text-xs leading-relaxed">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/anniversary.jpeg"
                alt="The Koshish Kompany 1st Anniversary"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
              <div className="absolute -bottom-5 -left-5 bg-[#1E3A8A] text-white rounded-xl p-4 shadow-lg max-w-xs">
                <div className="text-[#D4AF37] font-bold text-lg">Founded 2025</div>
                <div className="text-white/80 text-xs mt-1">Celebrating 1 Year of Empowering Success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-100 rounded-full px-4 py-1.5 mb-4">
              <Star className="h-3 w-3 text-[#D4AF37]" fill="currentColor" />
              <span className="text-[#D4AF37] text-sm font-medium">What We Stand For</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] font-poppins">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className={`card-hover rounded-xl p-6 text-center border border-gray-100 ${val.bg}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm mb-4">
                    <Icon className={`h-6 w-6 ${val.color}`} />
                  </div>
                  <h3 className="font-bold text-[#1E3A8A] text-base mb-2">{val.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
              <Users className="h-3 w-3 text-[#1E3A8A]" />
              <span className="text-[#1E3A8A] text-sm font-medium">Board of Members</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] font-poppins">Meet the Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-base">
              A diverse team of experts dedicated to your growth and success.
            </p>
          </div>

          <div className="space-y-12">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`bg-[#f8f9fa] rounded-2xl overflow-hidden shadow-md flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="lg:w-80 flex-shrink-0">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-72 lg:h-full object-scale-down lg:object-cover object-top bg-gray-100"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center flex-1">
                  <h3 className="text-2xl font-bold text-[#1E3A8A] font-poppins mb-1">{member.name}</h3>
                  <p className="text-[#D4AF37] font-semibold text-sm mb-4">{member.role}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.certifications.map((cert) => (
                      <span key={cert} className="px-3 py-1 bg-white text-[#1E3A8A] rounded-full text-xs font-medium border border-blue-100 shadow-sm">
                        {cert}
                      </span>
                    ))}
                  </div>
                  <blockquote className="italic text-gray-500 text-sm border-l-4 border-[#D4AF37] pl-4 mb-4">
                    "{member.quote}"
                  </blockquote>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-poppins">Ready to Work With Us?</h2>
          <p className="text-white/80 mb-8">
            Explore our services or reach out today. Let's build something great together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#1E3A8A] rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Our Services <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
