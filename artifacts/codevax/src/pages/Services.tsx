import { motion } from "framer-motion";
import { ArrowRight, Code2, Smartphone, BarChart3, Palette, Lightbulb, Globe, Server, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serviceCategories = [
  {
    id: "development",
    label: "Development",
    icon: Code2,
    color: "#1abc9c",
    heading: "Custom Software Development",
    intro: "From robust SaaS platforms to full-stack enterprise applications — we engineer software that scales.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80&auto=format&fit=crop",
    services: [
      { title: "Custom SaaS Development", desc: "End-to-end SaaS platforms built for scale, with multi-tenancy, billing, and analytics baked in." },
      { title: "Custom Web Development", desc: "High-performance web applications using the latest frameworks and best practices." },
      { title: "Mobile App Development", desc: "Native and cross-platform mobile apps for iOS and Android with exceptional UX." },
      { title: "Full Stack Development", desc: "Complete front-to-back development with modern tech stacks including React and Node." },
      { title: "MVP Development", desc: "Launch your minimum viable product in weeks, not months — validation-first approach." },
      { title: "Node.js Development", desc: "Scalable server-side applications and APIs built on Node.js and Express." },
      { title: "React.js Development", desc: "Dynamic, component-driven UIs built with React and state management libraries." },
      { title: "CMS Development", desc: "Custom and headless CMS solutions tailored to your content management needs." },
    ],
  },
  {
    id: "growth",
    label: "Growth",
    icon: BarChart3,
    color: "#3498db",
    heading: "Digital Growth & Marketing",
    intro: "Data-driven marketing strategies that drive qualified traffic, leads, and revenue.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&auto=format&fit=crop",
    services: [
      { title: "Digital Marketing", desc: "Comprehensive digital marketing campaigns across all channels for maximum ROI." },
      { title: "SEO Services", desc: "Technical SEO, content strategy, and link building to dominate search rankings." },
      { title: "PPC Management", desc: "Performance-driven pay-per-click campaigns on Google, Meta, and beyond." },
      { title: "Social Media Marketing", desc: "Brand building and community engagement across all major social platforms." },
    ],
  },
  {
    id: "design",
    label: "Design",
    icon: Palette,
    color: "#9b59b6",
    heading: "UI/UX & Product Design",
    intro: "Pixel-perfect interfaces and intuitive user experiences that convert and delight.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80&auto=format&fit=crop",
    services: [
      { title: "UI/UX Design", desc: "Research-backed user experiences that balance aesthetics with usability and conversion." },
      { title: "Website Design", desc: "Premium web design that communicates your brand and converts visitors to customers." },
      { title: "Product Design", desc: "End-to-end product design from wireframes to polished, developer-ready prototypes." },
    ],
  },
  {
    id: "consultancy",
    label: "Consultancy",
    icon: Lightbulb,
    color: "#f39c12",
    heading: "Strategic Business Consulting",
    intro: "Expert guidance to validate, launch, and grow your digital product successfully.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80&auto=format&fit=crop",
    services: [
      { title: "Business Strategy", desc: "Structured roadmaps and operational frameworks to accelerate your business goals." },
      { title: "Go-To-Market Strategy", desc: "Comprehensive GTM planning to launch your product with maximum market impact." },
      { title: "Startup Consulting", desc: "Mentorship and tactical support for early-stage startups from idea to funding." },
    ],
  },
];

const process = [
  { num: "01", title: "Discovery", desc: "We deep-dive into your goals, users, and market to define the right solution." },
  { num: "02", title: "Planning", desc: "Architecture, scope, and roadmap are defined before a single line of code is written." },
  { num: "03", title: "Build", desc: "Agile sprints with weekly demos ensure you're always in the loop." },
  { num: "04", title: "Launch", desc: "Rigorous QA, smooth deployment, and post-launch monitoring for a flawless go-live." },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-[#0d1b2a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#1abc9c15_0%,_transparent_60%)]" />
        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-[#1abc9c] uppercase tracking-[0.25em] font-semibold text-sm mb-5"
            >
              What We Do
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
            >
              Services Built For
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1abc9c] to-[#3498db]"> Scale</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-xl leading-relaxed"
            >
              End-to-end digital services across development, design, growth, and strategy — delivered by specialists, guided by data.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category Quick Nav */}
      <section className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex gap-8 overflow-x-auto py-4 scrollbar-hide">
            {serviceCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#1abc9c] whitespace-nowrap transition-colors pb-1 border-b-2 border-transparent hover:border-[#1abc9c]"
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Category Sections */}
      {serviceCategories.map((cat, ci) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`py-24 ${ci % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"}`}
        >
          <div className="container mx-auto px-6 md:px-12">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${ci % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              {/* Text side */}
              <motion.div
                initial={{ opacity: 0, x: ci % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={ci % 2 !== 0 ? "lg:order-2" : ""}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${cat.color}18` }}>
                    <cat.icon className="w-5 h-5" style={{ color: cat.color }} />
                  </div>
                  <span className="uppercase tracking-[0.2em] font-semibold text-xs text-gray-400">{cat.label}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">{cat.heading}</h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-10">{cat.intro}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cat.services.map((srv, si) => (
                    <motion.div
                      key={si}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: si * 0.06 }}
                      className="group bg-white border border-gray-100 rounded-xl p-5 hover:border-[#1abc9c]/40 hover:shadow-[0_4px_24px_rgba(26,188,156,0.1)] transition-all duration-300 cursor-pointer"
                      data-testid={`service-card-${cat.id}-${si}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: `${cat.color}18` }}>
                          <span className="w-2 h-2 rounded-full block" style={{ backgroundColor: cat.color }} />
                        </span>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-[#1abc9c] transition-colors">{srv.title}</h4>
                          <p className="text-gray-500 text-xs leading-relaxed">{srv.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link href="/contact">
                    <Button className="rounded-full px-7 bg-[#1abc9c] hover:bg-[#16a085] text-white border-0 group">
                      Get a Quote
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Image side */}
              <motion.div
                initial={{ opacity: 0, x: ci % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className={`rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] ${ci % 2 !== 0 ? "lg:order-1" : ""}`}
              >
                <img src={cat.image} alt={cat.heading} className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Process */}
      <section className="py-24 bg-[#0d1b2a]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#1abc9c] uppercase tracking-[0.2em] font-semibold text-xs mb-3 block">How We Work</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Our Proven Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-[#1a2a3a] border border-white/5 rounded-2xl p-8 group hover:border-[#1abc9c]/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#1abc9c] to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-t-2xl" />
                <span className="text-5xl font-black text-[#1abc9c]/20 block mb-4 group-hover:text-[#1abc9c]/40 transition-colors">{step.num}</span>
                <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
