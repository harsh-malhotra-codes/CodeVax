import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Briefcase, Heart, Zap, Users, Coffee, BookOpen, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const perks = [
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health insurance for you and your family." },
  { icon: Zap, title: "Fast Growth", desc: "Clear career ladders and dedicated learning budgets." },
  { icon: Coffee, title: "Flexible Work", desc: "Remote-first culture with flexible working hours." },
  { icon: BookOpen, title: "Learning Budget", desc: "$1,500/year for courses, books, and conferences." },
  { icon: Users, title: "Great Team", desc: "Work alongside 200+ brilliant engineers and designers." },
  { icon: Briefcase, title: "Equity Options", desc: "ESOP available for senior and leadership roles." },
];

const jobs = [
  {
    title: "Senior React.js Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / Punjab, India",
    experience: "4+ years",
    desc: "Build and maintain large-scale React applications for our growing SaaS products. You'll work closely with design and backend teams to deliver exceptional user experiences.",
  },
  {
    title: "Node.js Backend Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / Punjab, India",
    experience: "3+ years",
    desc: "Design and implement RESTful APIs and microservices. You'll own backend systems that power tens of thousands of users daily.",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote",
    experience: "3+ years",
    desc: "Create beautiful, user-centered designs for our SaaS products. From research to high-fidelity Figma prototypes — you'll own the entire design process.",
  },
  {
    title: "Digital Marketing Manager",
    department: "Growth",
    type: "Full-time",
    location: "Punjab, India",
    experience: "4+ years",
    desc: "Lead our multi-channel digital marketing efforts including SEO, PPC, social, and content. You'll own the full acquisition funnel.",
  },
  {
    title: "DevOps / Cloud Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / Punjab, India",
    experience: "3+ years",
    desc: "Manage our cloud infrastructure on AWS. Implement CI/CD pipelines, container orchestration, and ensure 99.9% uptime across all products.",
  },
  {
    title: "Business Development Executive",
    department: "Sales",
    type: "Full-time",
    location: "Punjab, India",
    experience: "2+ years",
    desc: "Drive new business opportunities by identifying, qualifying, and closing enterprise-level accounts across international markets.",
  },
];

const deptColors: Record<string, string> = {
  Engineering: "bg-blue-100 text-blue-700",
  Design: "bg-purple-100 text-purple-700",
  Growth: "bg-green-100 text-green-700",
  Sales: "bg-orange-100 text-orange-700",
};

export default function Career() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const departments = ["All", ...Array.from(new Set(jobs.map((j) => j.department)))];
  const filtered = filter === "All" ? jobs : jobs.filter((j) => j.department === filter);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-[#0d1b2a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#1abc9c18_0%,_transparent_55%)]" />
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#1abc9c] uppercase tracking-[0.25em] font-semibold text-sm mb-5"
          >
            Join Our Team
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            Build the Future of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1abc9c] to-[#3498db]"> SaaS With Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto mb-8"
          >
            Join a team of 200+ engineers, designers, and strategists building products that matter. Remote-friendly. Fast-paced. High-impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#openings">
              <Button className="rounded-full h-13 px-8 bg-[#1abc9c] hover:bg-[#16a085] text-white border-0 group">
                View Open Positions
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Culture / Hero image */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#1abc9c] uppercase tracking-[0.2em] font-semibold text-xs mb-4 block">Our Culture</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                A Place Where Great Work Gets Done
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                We believe the best products come from happy, empowered teams. At Codevax, you'll find a culture of ownership, learning, and genuine care — where your growth is as important as the company's.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We are remote-first, async-friendly, and obsessively focused on craft. Whether you're a developer, designer, or marketer — you'll have the autonomy and resources to do your best work.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Team Members", value: "200+" },
                  { label: "Countries", value: "22+" },
                  { label: "Avg. Tenure", value: "3.4 yrs" },
                  { label: "Remote Team", value: "65%" },
                ].map((stat, i) => (
                  <div key={i} className="bg-[#f8f9fa] rounded-xl p-5">
                    <p className="text-2xl font-black text-[#1abc9c]">{stat.value}</p>
                    <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&q=80&auto=format&fit=crop"
                alt="Team culture"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#1abc9c] uppercase tracking-[0.2em] font-semibold text-xs mb-3 block">Benefits</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Why You'll Love It Here</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 group hover:border-[#1abc9c]/30 hover:shadow-[0_8px_40px_rgba(26,188,156,0.1)] transition-all duration-300"
                data-testid={`perk-card-${i}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#1abc9c]/10 flex items-center justify-center mb-5 group-hover:bg-[#1abc9c] transition-colors duration-300">
                  <perk.icon className="w-5 h-5 text-[#1abc9c] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{perk.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-24 bg-white" id="openings">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-[#1abc9c] uppercase tracking-[0.2em] font-semibold text-xs mb-3 block">Open Roles</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              We're growing fast and always looking for talented people. Don't see a perfect fit? Send us your CV anyway.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setFilter(dept)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  filter === dept
                    ? "bg-[#1abc9c] text-white shadow-lg shadow-[#1abc9c]/20"
                    : "bg-[#f8f9fa] text-gray-600 hover:bg-[#1abc9c]/10 hover:text-[#1abc9c]"
                }`}
                data-testid={`filter-${dept.toLowerCase()}`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Accordion */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filtered.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  expandedJob === i ? "border-[#1abc9c]/40 shadow-[0_4px_24px_rgba(26,188,156,0.1)]" : "border-gray-200 hover:border-[#1abc9c]/30"
                }`}
                data-testid={`job-card-${i}`}
              >
                <button
                  onClick={() => setExpandedJob(expandedJob === i ? null : i)}
                  className="w-full text-left px-7 py-6 flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-bold text-gray-900 text-lg">{job.title}</h3>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${deptColors[job.department]}`}>
                          {job.department}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" /> {job.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5" /> {job.experience}
                        </span>
                      </div>
                    </div>
                  </div>
                  <motion.div animate={{ rotate: expandedJob === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: expandedJob === i ? "auto" : 0, opacity: expandedJob === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-7 pb-7 border-t border-gray-100 pt-5">
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{job.desc}</p>
                    <Link href="/contact">
                      <Button className="rounded-full bg-[#1abc9c] hover:bg-[#16a085] text-white border-0 group" data-testid={`apply-${i}`}>
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
