import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, Code2, Lightbulb, Palette, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/lib/api";
import { useServices } from "@workspace/api-client-react";

const serviceIcons = {
  development: Code2,
  growth: BarChart3,
  design: Palette,
  consultancy: Lightbulb,
} as const;

const process = [
  { num: "01", title: "Discovery", desc: "We deep-dive into your goals, users, and market to define the right solution." },
  { num: "02", title: "Planning", desc: "Architecture, scope, and roadmap are defined before a single line of code is written." },
  { num: "03", title: "Build", desc: "Agile sprints with weekly demos ensure you're always in the loop." },
  { num: "04", title: "Launch", desc: "Rigorous QA, smooth deployment, and post-launch monitoring for a flawless go-live." },
];

export default function Services() {
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());
  const servicesQuery = useServices();
  const selectedServiceLabels = useMemo(() => {
    if (!servicesQuery.data) return [];

    const labels: string[] = [];
    servicesQuery.data.forEach((cat) => {
      cat.services.forEach((srv, si) => {
        if (selectedServices.has(`${cat.id}-${si}`)) {
          labels.push(srv.title);
        }
      });
    });
    return labels;
  }, [selectedServices, servicesQuery.data]);

  const toggleService = (key: string) => {
    setSelectedServices((current) => {
      const next = new Set(current);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const subject = selectedServiceLabels.length
      ? `Interested in: ${selectedServiceLabels.join(", ")}`
      : "";

    window.localStorage.setItem("codevax_selected_services", JSON.stringify(selectedServiceLabels));
    window.localStorage.setItem("codevax_contact_subject", subject);
  }, [selectedServiceLabels]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative pt-36 pb-24 bg-[#0d1b2a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#18c8d015_0%,_transparent_60%)]" />
        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-[#18c8d0] uppercase tracking-[0.25em] font-semibold text-sm mb-5"
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18c8d0] to-[#18c8d0]">
                {" "}
                Scale
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-xl leading-relaxed"
            >
              End-to-end digital services across development, design, growth, and strategy, delivered by specialists and guided by data.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex gap-8 overflow-x-auto py-4 scrollbar-hide">
            {servicesQuery.data?.map((cat) => {
              const Icon = serviceIcons[cat.id as keyof typeof serviceIcons] ?? Globe;

              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#18c8d0] whitespace-nowrap transition-colors pb-1 border-b-2 border-transparent hover:border-[#18c8d0]"
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          {servicesQuery.isLoading ? (
            <div className="rounded-2xl border border-dashed border-gray-200 bg-[#f8f9fa] px-6 py-14 text-center text-gray-500">
              Loading services...
            </div>
          ) : servicesQuery.isError ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-14 text-center text-red-700">
              {servicesQuery.error instanceof Error
                ? servicesQuery.error.message
                : "Unable to load services."}
            </div>
          ) : (
            servicesQuery.data?.map((cat, ci) => {
              const Icon = serviceIcons[cat.id as keyof typeof serviceIcons] ?? Globe;

              return (
                <section
                  key={cat.id}
                  id={cat.id}
                  className={`py-24 ${ci % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"}`}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${ci % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                    <motion.div
                      initial={{ opacity: 0, x: ci % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className={ci % 2 !== 0 ? "lg:order-2" : ""}
                    >
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${cat.color}18` }}>
                          <Icon className="w-5 h-5" style={{ color: cat.color }} />
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
                            role="button"
                            tabIndex={0}
                            onClick={() => toggleService(`${cat.id}-${si}`)}
                            onKeyDown={(event) => {
                              if (event.key === "Enter" || event.key === " ") {
                                event.preventDefault();
                                toggleService(`${cat.id}-${si}`);
                              }
                            }}
                            className={`group bg-white border rounded-xl p-5 transition-all duration-300 cursor-pointer ${
                              selectedServices.has(`${cat.id}-${si}`)
                                ? "border-[#18c8d0] shadow-[0_8px_32px_rgba(24,200,208,0.12)] bg-[#18c8d0]/5"
                                : "border-gray-100 hover:border-[#18c8d0]/40 hover:shadow-[0_4px_24px_rgba(24,200,208,0.1)]"
                            }`}
                            data-testid={`service-card-${cat.id}-${si}`}
                          >
                            <div className="flex items-start gap-3">
                              <Checkbox
                                checked={selectedServices.has(`${cat.id}-${si}`)}
                                onCheckedChange={() => toggleService(`${cat.id}-${si}`)}
                                onClick={(event) => event.stopPropagation()}
                                className="mt-1 shrink-0"
                              />
                              <div>
                                <h4 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-[#18c8d0] transition-colors">{srv.title}</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">{srv.desc}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-col gap-4">
                        <p className="text-sm text-gray-500">
                          {selectedServices.size} service{selectedServices.size === 1 ? "" : "s"} selected
                        </p>
                        <Link href="/contact">
                          <Button className="learn-more min-w-[12rem] h-12 px-6">
                            Get a Quote
                          </Button>
                        </Link>
                      </div>
                    </motion.div>

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
                </section>
              );
            })
          )}
        </div>
      </section>

      <section className="py-24 bg-[#0d1b2a]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#18c8d0] uppercase tracking-[0.2em] font-semibold text-xs mb-3 block">How We Work</span>
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
                className="relative bg-[#1a2a3a] border border-white/5 rounded-2xl p-8 group hover:border-[#18c8d0]/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#18c8d0] to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-t-2xl" />
                <span className="text-5xl font-black text-[#18c8d0]/20 block mb-4 group-hover:text-[#18c8d0]/40 transition-colors">{step.num}</span>
                <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link href="/services">
              <Button className="learn-more min-w-[12rem] h-14 px-6 text-base font-semibold shadow-lg shadow-[#18c8d0]/20">
                More Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
