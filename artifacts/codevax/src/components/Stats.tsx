import { motion } from "framer-motion";

const stats = [
  { value: "5000+", label: "Projects Delivered" },
  { value: "200+", label: "Expert Team Members" },
  { value: "18+", label: "Years of Experience" },
  { value: "22+", label: "Countries Served" },
];

export default function Stats() {
  return (
    <section className="py-24 bg-white" id="stats">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Stamping Authority At The Global Stage
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by startups and Fortune 500 companies worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 font-medium text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Recognition Logos - Typography based since no external images */}
        <div className="pt-12 border-t border-gray-100">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
            Recognized By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale">
            <div className="text-2xl font-black tracking-tighter text-gray-800">Clutch</div>
            <div className="text-2xl font-bold tracking-tight text-gray-800">GoodFirms</div>
            <div className="text-2xl font-extrabold italic text-gray-800">DesignRush</div>
            <div className="text-2xl font-bold text-gray-800 flex items-center gap-1">
              <span className="text-green-500 text-3xl">★</span> Trustpilot
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}