import { motion } from "framer-motion";

const stats = [
  { value: "5000+", label: "Projects Delivered" },
  { value: "200+", label: "Expert Team Members" },
  { value: "18+", label: "Years of Experience" },
  { value: "22+", label: "Countries Served" },
];

export default function Stats() {
  return (
    <section className="bg-white py-24" id="stats">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Stamping Authority At The
            <br className="hidden md:block" />
            Global Stage
          </h2>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            Trusted by startups and Fortune 500 companies worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] items-stretch gap-10 lg:gap-14">
          <div className="grid grid-cols-2 gap-x-8 gap-y-16 lg:pr-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="max-w-[210px]"
              >
                <h3 className="text-4xl font-black tracking-tight text-[#18c8d0] md:text-5xl">
                  {stat.value}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-700 md:text-lg">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-none bg-[#f4f5f7] px-8 py-16 md:px-16 md:py-20"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-3xl md:text-4xl font-black tracking-tight text-gray-900">Clutch</div>
                <div className="mt-4 flex items-center gap-2 text-lg text-gray-700">
                  <span>4.9</span>
                  <span className="text-amber-400 tracking-[0.08em]">★★★★★</span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">GoodFirms</div>
                <div className="mt-4 flex items-center gap-2 text-lg text-gray-700">
                  <span>4.5</span>
                  <span className="text-amber-400 tracking-[0.08em]">★★★★★</span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-2 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                  <span className="text-black">★</span>
                  <span>Trustpilot</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-lg text-gray-700">
                  <span>4.0</span>
                  <span className="text-amber-400 tracking-[0.08em]">★★★★☆</span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-3xl md:text-4xl font-black tracking-tight text-gray-900">DesignRush</div>
                <div className="mt-4 flex items-center gap-2 text-lg text-gray-700">
                  <span>4.9</span>
                  <span className="text-amber-400 tracking-[0.08em]">★★★★★</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
