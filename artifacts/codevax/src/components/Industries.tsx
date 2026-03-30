import { motion } from "framer-motion";

const industries = [
  { name: "Rentals", gradient: "from-[#0d1b2a] to-[#1abc9c]/80" },
  { name: "Apparels", gradient: "from-[#1a1a2e] to-[#2ecc71]/80" },
  { name: "E-learning & Education", gradient: "from-[#0d1b2a] to-[#16a085]/80" },
  { name: "Travel & Hospitality", gradient: "from-[#1a1a2e] to-[#3498db]/80" },
  { name: "Real Estate", gradient: "from-[#0d1b2a] to-[#1abc9c]/80" },
  { name: "Machinery", gradient: "from-[#1a1a2e] to-[#2980b9]/80" },
  { name: "E-commerce", gradient: "from-[#0d1b2a] to-[#1abc9c]/80" },
  { name: "Corporates", gradient: "from-[#1a1a2e] to-[#16a085]/80" },
  { name: "Logistics", gradient: "from-[#0d1b2a] to-[#27ae60]/80" },
];

export default function Industries() {
  return (
    <section className="py-24 bg-[#f8f9fa]" id="industries">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Industries We Serve !!
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((ind, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.04 }}
              className={`relative h-[200px] rounded-xl overflow-hidden cursor-pointer group shadow-md bg-gradient-to-br ${ind.gradient}`}
            >
              {/* Overlay for hover brightness */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></div>
              
              {/* Decorative circle */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>

              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <h3 className="text-white text-2xl font-bold tracking-wide shadow-black/50 drop-shadow-sm group-hover:scale-105 transition-transform">
                  {ind.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}