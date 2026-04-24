import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, MessageCircle, CheckCircle, Send, Loader2 } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<FormState>;

function validateForm(data: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (!data.phone.trim() || !/^[+]?[\d\s\-()]{8,15}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number";
  }
  if (!data.message.trim() || data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || "Failed to submit. Please try again.");
      }

      setIsSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section
        className="relative pt-24 lg:pt-32 pb-48 lg:pb-56 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Contact_01.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#1E3A8A]/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#D4AF37] text-sm font-medium">Get In Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-poppins">
            Contact <span className="text-[#D4AF37]">Us</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Have a question or want to get started? We're just a message away. Reach out via the form, WhatsApp, or email.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 lg:-mt-40 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-8 font-poppins">Contact Information</h2>

              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 bg-[#1E3A8A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1E3A8A] text-sm mb-1">Phone / WhatsApp</div>
                    <a href="tel:+916204077451" className="text-gray-600 text-sm hover:text-[#D4AF37] transition-colors">
                      +91 6204077451
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 bg-[#1E3A8A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1E3A8A] text-sm mb-1">Email</div>
                    <a href="mailto:thekoshishkompany@gmail.com" className="text-gray-600 text-sm hover:text-[#D4AF37] transition-colors break-all">
                      thekoshishkompany@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 bg-[#1E3A8A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1E3A8A] text-sm mb-1">Office Locations</div>
                    <p className="text-gray-600 text-sm">Virtual Offices in Mumbai &amp; Bangalore, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Instagram className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1E3A8A] text-sm mb-1">Instagram</div>
                    <a
                      href="https://www.instagram.com/thekoshishkompany"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 text-sm hover:text-[#D4AF37] transition-colors"
                    >
                      @thekoshishkompany
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Direct */}
              <div className="bg-[#1E3A8A] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="h-6 w-6 text-[#25D366]" />
                  <h3 className="font-semibold text-lg">Chat Directly on WhatsApp</h3>
                </div>
                <p className="text-white/80 text-sm mb-5 leading-relaxed">
                  For instant responses, reach us on WhatsApp. We typically reply within minutes during business hours.
                </p>
                <a
                  href="https://wa.me/916204077451?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-xl font-semibold text-sm hover:bg-green-500 transition-colors w-full justify-center"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 2.124.556 4.122 1.528 5.858L0 24l6.336-1.633C7.952 23.397 9.924 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.661-.516-5.173-1.413l-.369-.218-3.817.984 1.024-3.688-.241-.382A9.944 9.944 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
                  </svg>
                  Start WhatsApp Chat
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <p className="text-gray-500 text-xs mb-3">Follow us on social media</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/thekoshishkompany"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-lg text-xs font-medium hover:opacity-90 transition-opacity"
                  >
                    <Instagram className="h-3.5 w-3.5" />
                    Instagram
                  </a>
                  <a
                    href="mailto:thekoshishkompany@gmail.com"
                    className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg text-xs font-medium hover:opacity-90 transition-opacity"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1E3A8A] mb-2 font-poppins">Send Us a Message</h2>
                <p className="text-gray-500 text-sm mb-6">We'll get back to you within 24 hours.</p>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Message Sent!</h3>
                    <p className="text-gray-600 text-sm max-w-xs">
                      Thank you for contacting us! We'll get back to you within 24 hours. You can also reach us on WhatsApp for instant replies.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 px-5 py-2.5 border border-[#1E3A8A] text-[#1E3A8A] rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    {submitError && (
                      <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                        {submitError}
                      </div>
                    )}

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Sharma"
                          className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 transition-colors ${
                            errors.name ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#1E3A8A]"
                          }`}
                        />
                        {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="e.g. rahul@example.com"
                          className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 transition-colors ${
                            errors.email ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#1E3A8A]"
                          }`}
                        />
                        {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 9876543210"
                          className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 transition-colors ${
                            errors.phone ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#1E3A8A]"
                          }`}
                        />
                        {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Message / Inquiry <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Tell us about what you need help with..."
                          className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 transition-colors resize-none ${
                            errors.message ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#1E3A8A]"
                          }`}
                        />
                        {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1E3A8A] text-white rounded-lg font-semibold text-sm hover:bg-[#1a3070] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </button>

                      <p className="text-gray-400 text-xs text-center">
                        Or reach us directly on WhatsApp for instant support
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
