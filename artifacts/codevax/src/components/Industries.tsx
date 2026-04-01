import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    name: "Rentals",
    tag: "Real Assets",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85&auto=format&fit=crop",
  },
  {
    name: "Apparels & Fashion",
    tag: "E-commerce",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=900&q=85&auto=format&fit=crop",
  },
  {
    name: "E-learning",
    tag: "Education Tech",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=85&auto=format&fit=crop",
  },
  {
    name: "Travel & Hospitality",
    tag: "Tourism",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=900&q=85&auto=format&fit=crop",
  },
  {
    name: "Real Estate",
    tag: "PropTech",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=85&auto=format&fit=crop",
  },
  {
    name: "Machinery",
    tag: "Industrial",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&q=85&auto=format&fit=crop",
  },
  {
    name: "E-commerce",
    tag: "Retail Tech",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&q=85&auto=format&fit=crop",
  },
  {
    name: "Corporates",
    tag: "Enterprise",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85&auto=format&fit=crop",
  },
  {
    name: "Logistics",
    tag: "Supply Chain",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=900&q=85&auto=format&fit=crop",
  },
];

/* stagger animation for the grid */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1,
             transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Industries() {
  return (
    <section className="py-28 bg-[#f8f9fa]" id="industries">
      <div className="container mx-auto px-6 md:px-12">

        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block text-[#1abc9c] uppercase tracking-[0.25em] font-semibold text-sm mb-4"
          >
            What We Cover
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight"
          >
            Industries We Serve
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="w-16 h-[3px] bg-[#1abc9c] mx-auto mt-5 origin-left"
          />
        </div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
        >
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              data-testid={`industry-card-${i}`}
              className="relative h-[260px] rounded-2xl overflow-hidden cursor-pointer group shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
            >
              {/* ── Background image with zoom ── */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-110 will-change-transform"
                style={{ backgroundImage: `url('${ind.image}')` }}
              />

              {/* ── Layered overlays ── */}
              {/* Base dark scrim */}
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-400 group-hover:bg-black/55" />
              {/* Gradient from bottom for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* ── Tag pill (top-left) ── */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                <span className="text-[11px] font-bold uppercase tracking-widest bg-[#1abc9c] text-white px-3 py-1 rounded-full">
                  {ind.tag}
                </span>
              </div>

              {/* ── Bottom content ── */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Title */}
                <h3 className="text-white text-xl md:text-[1.35rem] font-bold tracking-wide leading-tight drop-shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                  {ind.name}
                </h3>

                {/* Explore link — slides up on hover */}
                <div className="overflow-hidden h-0 group-hover:h-7 transition-all duration-300">
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="text-[#1abc9c] text-[13px] font-semibold">Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#1abc9c] group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              {/* ── Teal bottom accent ── */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1abc9c] to-[#3498db] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* ── Corner glow on hover ── */}
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[#1abc9c]/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-1/2 translate-y-1/2" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
