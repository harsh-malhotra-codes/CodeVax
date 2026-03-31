import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Zap, Users, Award, Globe, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Target,
    title: "Mission",
    desc: "To empower startups and enterprises with industry-grade digital solutions that accelerate growth and deliver measurable business outcomes.",
  },
  {
    icon: Eye,
    title: "Vision",
    desc: "To be the most trusted technology partner for businesses globally, known for precision engineering and relentless focus on client success.",
  },
  {
    icon: Zap,
    title: "Innovation",
    desc: "We constantly push the boundaries of what's possible, adopting emerging technologies to keep our clients ahead of the curve.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Every project is a partnership. We work side-by-side with your team, ensuring complete transparency at every milestone.",
  },
];

const reasons = [
  "End-to-end product development from ideation to deployment",
  "Dedicated team of 200+ specialists across all disciplines",
  "Agile methodology for faster time-to-market",
  "ISO-certified quality assurance processes",
  "24/7 post-launch support and maintenance",
  "Transparent communication with real-time project dashboards",
  "Proven track record across 5,000+ successful projects",
  "Competitive pricing without compromise on quality",
];

const team = [
  { name: "Arun Sharma", role: "CEO & Co-founder", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop&fit=faces" },
  { name: "Priya Nair", role: "CTO", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop&fit=faces" },
  { name: "Rahul Verma", role: "Head of Design", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop&fit=faces" },
  { name: "Sneha Gupta", role: "Head of Marketing", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop&fit=faces" },
];

const stats = [
  { icon: Award, value: "5000+", label: "Projects Delivered" },
  { icon: Users, value: "200+", label: "Team Members" },
  { icon: Globe, value: "22+", label: "Countries" },
  { icon: Zap, value: "18+", label: "Years Experience" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-[#0d1b2a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1abc9c18_0%,_transparent_55%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d1b2a] to-transparent" />
        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-[#1abc9c] uppercase tracking-[0.25em] font-semibold text-sm mb-5"
            >
              About Codevax
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
            >
              We Turn Ambitious Ideas Into
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1abc9c] to-[#3498db]"> World-Class Products</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-xl leading-relaxed"
            >
              Since 2006, we've partnered with entrepreneurs, SMBs, and Fortune 500 enterprises to build software that scales, performs, and endures.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-[#f8f9fa] py-12 border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1abc9c]/10 flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-5 h-5 text-[#1abc9c]" />
                </div>
                <div>
                  <p className="text-2xl font-black text-gray-900">{s.value}</p>
                  <p className="text-sm text-gray-500">{s.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#1abc9c] uppercase tracking-[0.2em] font-semibold text-xs mb-4 block">Our Story</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                We Are Codevax.<br />
                <span className="text-gray-500">Built to Build What Matters.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Codevax was founded with a single belief: that the right technology partner can make the difference between a startup that struggles and one that scales. We've spent 18 years refining that belief into a system — one that combines engineering excellence, design thinking, and strategic consulting.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Today we operate across 22 countries, with a team of over 200 specialists — developers, designers, marketers, and strategists — all working toward one goal: your success.
              </p>
              <Link href="/contact">
                <Button className="rounded-full h-13 px-8 bg-[#1abc9c] hover:bg-[#16a085] text-white border-0 group">
                  Work With Us
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop"
                  alt="Codevax team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/60 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1abc9c]/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#1abc9c]" />
                </div>
                <div>
                  <p className="font-black text-gray-900 text-lg leading-none">Top Rated</p>
                  <p className="text-gray-500 text-xs mt-1">Clutch · GoodFirms · DesignRush</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#1abc9c] uppercase tracking-[0.2em] font-semibold text-xs mb-3 block">What We Stand For</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 group hover:border-[#1abc9c]/30 hover:shadow-[0_8px_40px_rgba(26,188,156,0.1)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1abc9c]/10 flex items-center justify-center mb-5 group-hover:bg-[#1abc9c] transition-colors duration-300">
                  <v.icon className="w-5 h-5 text-[#1abc9c] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#1abc9c] uppercase tracking-[0.2em] font-semibold text-xs mb-4 block">Why Codevax</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                The Partner Your Business Deserves
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We're not just a vendor — we're invested in your success. Here's what sets us apart from other development agencies.
              </p>
              <ul className="space-y-4">
                {reasons.map((r, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#1abc9c] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{r}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80&auto=format&fit=crop"
                alt="Why choose Codevax"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#1abc9c] uppercase tracking-[0.2em] font-semibold text-xs mb-3 block">Meet The Team</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">The Minds Behind Codevax</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              A diverse, passionate team united by one purpose — delivering excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group text-center"
                data-testid={`team-card-${i}`}
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-5 shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                <p className="text-[#1abc9c] text-sm font-medium mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
