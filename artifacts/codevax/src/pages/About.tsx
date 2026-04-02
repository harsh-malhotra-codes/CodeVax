import { motion } from "framer-motion";
import { Target, Eye, Zap, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const valueCards = [
  { icon: Target, title: "Mission", desc: "Placeholder section for your mission statement." },
  { icon: Eye, title: "Vision", desc: "Placeholder section for your long-term vision." },
  { icon: Zap, title: "Innovation", desc: "Placeholder section for innovation principles." },
  { icon: Users, title: "People", desc: "Placeholder section for team and culture." },
];

const proofPoints = [
  "Placeholder proof point one",
  "Placeholder proof point two",
  "Placeholder proof point three",
  "Placeholder proof point four",
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative pt-36 pb-24 bg-[#0d1b2a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#18c8d018_0%,_transparent_55%)]" />
        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-[#18c8d0] uppercase tracking-[0.25em] font-semibold text-sm mb-5"
            >
              About Codevax
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
            >
              A clean structure for your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18c8d0] to-[#18c8d0]">
                {" "}
                about story
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-xl leading-relaxed"
            >
              This page is now a structural placeholder so you can swap in your final About copy later without changing the layout.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#18c8d0] uppercase tracking-[0.2em] font-semibold text-xs mb-3 block">What We Stand For</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Core Sections</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[#f8f9fa] rounded-2xl p-8 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-[#18c8d0]/10 flex items-center justify-center mb-5">
                  <card.icon className="w-5 h-5 text-[#18c8d0]" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#18c8d0] uppercase tracking-[0.2em] font-semibold text-xs mb-4 block">About Layout</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Sections are ready.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                You can now drop in the real company story, achievements, and team narrative later without having to rebuild the page.
              </p>
              <div className="space-y-4">
                {proofPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#18c8d0] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact">
                <Button className="learn-more min-w-[12rem] h-13 px-6">
                    Work With Us
                  </Button>
                </Link>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-8">
              <div className="grid grid-cols-2 gap-4">
                {["Story", "Values", "Team", "Process"].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#f8f9fa] p-6 min-h-28 flex items-center justify-center text-center">
                    <div>
                      <p className="text-lg font-bold text-gray-900">{item}</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-2">Placeholder</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0d1b2a] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#18c8d0] mb-3">Ready for copy</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Replace this structure with your final About content later.</h2>
              <p className="text-gray-300 max-w-2xl">
                The layout is set, the routing is ready, and the styling matches the rest of the site.
              </p>
            </div>
            <Link href="/contact">
                <Button className="learn-more min-w-[12rem] h-14 px-6 text-base font-semibold whitespace-nowrap shadow-lg shadow-[#18c8d0]/30 flex-shrink-0">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
