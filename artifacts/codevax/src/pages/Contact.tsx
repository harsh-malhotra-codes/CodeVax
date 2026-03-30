import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    lines: ["1025, 10th Floor, Block-D,", "CCC Building, Punjab, India"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["hello@codevax.com", "support@codevax.com"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 98765 43210", "+91 91234 56789"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon – Fri: 9:00 AM – 7:00 PM", "Sat: 10:00 AM – 4:00 PM"],
  },
];

const subjects = [
  "Custom SaaS Development",
  "Mobile App Development",
  "Digital Marketing",
  "UI/UX Design",
  "Cloud Consulting",
  "General Inquiry",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-[#0d1b2a] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#1abc9c22_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#1a1a2e_0%,_transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 border-dashed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/[0.03] border-dashed" />

        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#1abc9c] uppercase tracking-[0.25em] font-semibold text-sm mb-5"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Let's Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1abc9c] to-[#3498db]">
              Great Together
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Have a project in mind? Reach out to our team and we'll get back to you within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-10 relative z-10">
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-gray-100 group hover:border-[#1abc9c]/30 hover:shadow-[0_8px_40px_rgba(26,188,156,0.12)] transition-all duration-300"
                data-testid={`contact-info-card-${i}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#1abc9c]/10 flex items-center justify-center mb-5 group-hover:bg-[#1abc9c] transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-[#1abc9c] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-gray-900 font-bold text-base mb-3">{item.title}</h3>
                {item.lines.map((line, j) => (
                  <p key={j} className="text-gray-500 text-sm leading-relaxed">
                    {line}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content — Form + Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#1abc9c] uppercase tracking-[0.2em] font-semibold text-xs mb-3 block">
                Send a Message
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                We'd Love to Hear From You
              </h2>
              <p className="text-gray-500 mb-10 leading-relaxed">
                Fill out the form below and one of our experts will reach out shortly to discuss your project.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#1abc9c]/10 border border-[#1abc9c]/30 rounded-2xl p-10 text-center"
                  data-testid="form-success"
                >
                  <div className="w-16 h-16 rounded-full bg-[#1abc9c] flex items-center justify-center mx-auto mb-5">
                    <Send className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                    className="text-[#1abc9c] font-semibold hover:underline text-sm"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-700" htmlFor="name">
                        Full Name <span className="text-[#1abc9c]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        data-testid="input-name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#1abc9c] focus:ring-2 focus:ring-[#1abc9c]/20 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-700" htmlFor="email">
                        Email Address <span className="text-[#1abc9c]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        data-testid="input-email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#1abc9c] focus:ring-2 focus:ring-[#1abc9c]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-700" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        data-testid="input-phone"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#1abc9c] focus:ring-2 focus:ring-[#1abc9c]/20 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-700" htmlFor="subject">
                        Subject <span className="text-[#1abc9c]">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        data-testid="select-subject"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:border-[#1abc9c] focus:ring-2 focus:ring-[#1abc9c]/20 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select a service...</option>
                        {subjects.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700" htmlFor="message">
                      Your Message <span className="text-[#1abc9c]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, and timeline..."
                      data-testid="textarea-message"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#1abc9c] focus:ring-2 focus:ring-[#1abc9c]/20 transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-xl h-14 text-base font-semibold shadow-lg shadow-[#1abc9c]/20 group"
                    data-testid="button-submit"
                  >
                    Send Message
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Right — Visual Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-8"
            >
              {/* Map Placeholder */}
              <div className="relative rounded-2xl overflow-hidden h-72 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&q=80&auto=format&fit=crop"
                  alt="Office location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0d1b2a]/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <div className="w-14 h-14 rounded-full bg-[#1abc9c] flex items-center justify-center mb-4 shadow-lg shadow-[#1abc9c]/40">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-bold text-lg">CCC Building, Punjab</p>
                  <p className="text-gray-300 text-sm mt-1">1025, 10th Floor, Block-D</p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-[#0d1b2a] rounded-2xl p-8">
                <h3 className="text-white font-bold text-xl mb-6">Why Work With Us?</h3>
                <ul className="space-y-4">
                  {[
                    "Response within 24 business hours",
                    "Free initial project consultation",
                    "Transparent pricing — no hidden costs",
                    "Dedicated project manager from day one",
                    "End-to-end development & post-launch support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-[#1abc9c]/20 flex items-center justify-center flex-shrink-0">
                        <span className="w-2 h-2 rounded-full bg-[#1abc9c] block" />
                      </span>
                      <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#0d1b2a] to-[#1a2a3a] rounded-2xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-400 max-w-md">
                Join 5,000+ businesses that trust Codevax to deliver world-class digital solutions.
              </p>
            </div>
            <Button
              size="lg"
              className="rounded-full h-14 px-10 text-base font-semibold whitespace-nowrap shadow-lg shadow-[#1abc9c]/30 group flex-shrink-0"
              data-testid="button-cta-banner"
            >
              LET'S TALK !!
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
