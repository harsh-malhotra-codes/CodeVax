import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "One-on-one / CEO Coaching",
    desc: "Personalized guidance for executives to drive organizational growth and navigate complex business challenges.",
  },
  {
    num: "02",
    title: "Business Coaching",
    desc: "Strategic frameworks and hands-on support to scale your business operations and maximize profitability.",
  },
  {
    num: "03",
    title: "Management Coaching",
    desc: "Empowering managers with the leadership skills to build high-performing, resilient teams.",
  },
  {
    num: "04",
    title: "Workshops & Seminars",
    desc: "Immersive sessions that build capability and foster a culture of continuous innovation across teams.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-[#0d1b2a] text-white overflow-hidden" id="services">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Main Services
          </h2>
          <p className="text-xl text-gray-400">
            Cutting-edge solutions tailored to transform your business
          </p>
        </div>

        {/* Horizontal scroll container on mobile, grid on desktop */}
        <div className="flex overflow-x-auto pb-8 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 snap-x snap-mandatory hide-scrollbar">
          {services.map((srv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[85vw] sm:min-w-[300px] md:min-w-0 snap-center bg-[#1a1a2e] rounded-2xl p-8 relative group hover:-translate-y-2 transition-transform duration-300 border border-white/5 overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></div>
              
              <span className="text-5xl font-extrabold text-primary/20 mb-6 block group-hover:text-primary/40 transition-colors">
                {srv.num}
              </span>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                {srv.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-8 flex-1">
                {srv.desc}
              </p>
              
              <a href="#" className="inline-flex items-center text-primary font-semibold text-sm uppercase tracking-wider group/link mt-auto">
                GET STARTED NOW
                <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}