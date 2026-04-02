import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  Code2,
  Globe,
  Layers3,
  Rocket,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "5500+", label: "Projects delivered" },
  { value: "200+", label: "Qualified developers" },
  { value: "20+", label: "Years of expertise" },
];

const brands = [
  { name: "Trustpilot", rating: "4.6" },
  { name: "G2", rating: "4.6" },
  { name: "Clutch", rating: "4.9" },
  { name: "GoodFirms", rating: "4.7" },
];

const steps = [
  { title: "Share requirements", desc: "Tell us the stack, scope, and team shape you need." },
  { title: "Screen candidates", desc: "Review a shortlist of matching developers and interview them." },
  { title: "Onboard fast", desc: "Start with a clear engagement model and minimal hiring friction." },
];

const compare = [
  {
    title: "The Old Way",
    items: [
      "Unclear roles and timelines",
      "Hidden assumptions in scope",
      "Weak proof of delivery",
      "Communication gaps",
    ],
  },
  {
    title: "The Codevax Way",
    items: [
      "Clear scope and ownership",
      "Defined deliverables and IP",
      "Strong client trust and process",
      "Aligned culture and skills",
    ],
  },
];

const industries = [
  "eCommerce",
  "eLearning",
  "Online Services",
  "Rental Industry",
  "Mobility",
];

const roles = [
  "Front-end Developers",
  "Back-end Developers",
  "Full-stack Developers",
  "Mobile Developers",
  "DevOps",
  "Cloud Engineers",
  "Data Engineers",
  "Automation QAs",
  "AI Developers",
  "ML Engineers",
];

const tech = [
  "PHP",
  "Laravel",
  "Python",
  "Node JS",
  "React JS",
  "Next JS",
  "Nest JS",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Flutter",
  "Socket.io",
];

const models = {
  dedicated: {
    title: "Dedicated Team Model",
    desc: "Best for product roadmaps that need a long-term team fully aligned to your workflow.",
    points: ["Flexible team composition", "Strong product ownership", "Rapid iteration", "Scale as needed"],
  },
  fixed: {
    title: "Fixed Price Model",
    desc: "Best when scope and deliverables are defined and you want predictable timelines and budget.",
    points: ["Clear milestones", "Defined scope", "Set deadline", "Great for one-off builds"],
  },
  hourly: {
    title: "Hourly Price Model",
    desc: "Best for smaller updates, support work, and ongoing improvements with full flexibility.",
    points: ["Transparent billing", "Flexible tasks", "Easy to scale", "Ideal for support"],
  },
} as const;

const faqs = [
  ["Why hire dedicated developers from Codevax?", "You get a focused team that integrates quickly, communicates clearly, and stays aligned to delivery."],
  ["Can I hire one expert or a full team?", "Yes. We support single specialists, pod-style teams, and larger dedicated groups."],
  ["How do you choose the right developer?", "We match on stack, experience, collaboration style, and product goals."],
  ["Do you support long-term projects?", "Yes. The dedicated model is designed for ongoing product growth and maintenance."],
];

export default function HireDevelopers() {
  const [model, setModel] = useState<keyof typeof models>("dedicated");
  const current = models[model];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative overflow-hidden bg-[#0d1b2a] pt-36 pb-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#18c8d022_0%,_transparent_45%)]" />
        <div className="container relative z-10 mx-auto grid gap-12 px-6 md:px-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#18c8d0]">
              Hire Dedicated Developers
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Hire experts who feel like{" "}
              <span className="bg-gradient-to-r from-[#18c8d0] to-[#18c8d0] bg-clip-text text-transparent">
                your own team
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Bring in React, Node, mobile, design, and DevOps talent that plugs into your process fast and helps your product ship with less friction.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="rounded-full bg-[#18c8d0] px-7 text-white hover:bg-[#14b2b9]">
                <Link href="/contact">
                  Build Your Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/20 bg-white/5 px-7 text-white hover:bg-white/10 hover:text-white">
                <a href="#engagement">View Models</a>
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="text-3xl font-black tracking-tight text-[#18c8d0]">{stat.value}</div>
                  <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur"
          >
            <div className="rounded-[1.5rem] bg-[#101f30] p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
                    Team snapshot
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-white">Dedicated team, ready to plug in</h2>
                </div>
                <BadgeCheck className="h-10 w-10 text-[#18c8d0]" />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {["React", "Node.js", "DevOps", "Growth"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#18c8d0]/10 text-[#18c8d0]">
                      <Code2 className="h-5 w-5" />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-white">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-white/5 p-5">
                <p className="text-sm leading-relaxed text-slate-300">
                  A partner that focuses on delivery, communication, and the business outcome of the product.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-gray-400">Recognized By</p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-5">
            {brands.map((brand) => (
              <div key={brand.name} className="text-center">
                <div className="text-2xl font-black tracking-tight text-gray-800">{brand.name}</div>
                <div className="mt-2 text-sm text-gray-600">
                  <span className="font-semibold text-gray-800">{brand.rating}</span>{" "}
                  <span className="text-amber-400">★★★★★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fa] py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#18c8d0]">Quick Onboarding</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Hire dedicated developers in 3 easy steps
            </h2>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_6px_24px_rgba(15,23,42,0.05)]">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#18c8d0]/10 text-2xl font-black text-[#18c8d0]">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-4 leading-relaxed text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#18c8d0]">Why Codevax</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Expertise you can trust
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {compare.map((panel) => (
              <div key={panel.title} className={`rounded-[2rem] p-8 md:p-10 ${panel.title === "The Old Way" ? "bg-gray-50" : "bg-[#f5fffd]"}`}>
                <h3 className="text-2xl font-bold text-gray-900">{panel.title}</h3>
                <ul className="mt-6 space-y-4">
                  {panel.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700">
                      {panel.title === "The Old Way" ? <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gray-400" /> : <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#18c8d0]" />}
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d1b2a] py-24 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#18c8d0]">Sectors We Serve</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              We’ve empowered teams across diverse industries
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {industries.map((industry) => (
              <div key={industry} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#18c8d0]/15 text-[#18c8d0]">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">{industry}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Tailored product delivery for this business category.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#18c8d0]">Hire by Role</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Find the right expert for your product
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {roles.map((role) => (
              <span key={role} className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
                {role}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fa] py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#18c8d0]">Technology Stack</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Hire developers specialized in modern stacks
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {tech.map((item) => (
              <div key={item} className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#18c8d0]/10 text-[#18c8d0]">
                  <Layers3 className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="engagement" className="bg-white py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#18c8d0]">Flexible Engagement Models</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Choose the setup that fits your roadmap
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {(Object.keys(models) as Array<keyof typeof models>).map((key) => (
              <button
                key={key}
                onClick={() => setModel(key)}
                className={`rounded-full px-5 py-2 text-sm font-semibold ${model === key ? "bg-[#18c8d0] text-white" : "bg-gray-100 text-gray-600 hover:text-gray-900"}`}
              >
                {models[key].title}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[2rem] border border-gray-100 bg-gray-50 p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900">{current.title}</h3>
              <p className="mt-4 leading-relaxed text-gray-600">{current.desc}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {current.points.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3">
                    <CheckCircle2 className="h-5 w-5 text-[#18c8d0]" />
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild className="rounded-full bg-[#18c8d0] px-7 text-white hover:bg-[#14b2b9]">
                  <Link href="/contact">
                    Hire Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#0d1b2a] p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">What you get</p>
              <ul className="mt-6 space-y-4">
                {[
                  "Clear communication and ownership",
                  "Flexible scaling as priorities change",
                  "Strong product and delivery focus",
                  "A team that feels close to in-house",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                    <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#18c8d0]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fa] py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#18c8d0]">Frequently Asked Questions</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Common questions before hiring
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {faqs.map(([q, a]) => (
              <details key={q} className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-gray-900">
                  <span>{q}</span>
                  <ChevronDown className="h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 leading-relaxed text-gray-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d1b2a] py-20 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 px-8 py-10 md:px-12 md:py-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#18c8d0]">Start your project</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                  Hire dedicated developers and move faster
                </h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">
                  If you want a team that feels close to in-house while keeping flexibility, we can help you shape the right hiring setup.
                </p>
              </div>
              <Button asChild className="rounded-full bg-[#18c8d0] px-7 text-white hover:bg-[#14b2b9]">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
