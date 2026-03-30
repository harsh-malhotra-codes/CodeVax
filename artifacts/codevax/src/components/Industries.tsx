import { motion } from "framer-motion";

const industries = [
  {
    name: "Rentals",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Apparels",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "E-learning & Education",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Travel & Hospitality",
    image: "https://images.unsplash.com/photo-1551882547-ff40c4a49ce5?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Real Estate",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Machinery",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "E-commerce",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Corporates",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Logistics",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80&auto=format&fit=crop",
  },
];

export default function Industries() {
  return (
    <section className="py-24 bg-[#f8f9fa]" id="industries">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[#1abc9c] uppercase tracking-[0.2em] font-semibold text-sm mb-3 block">
            What We Cover
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Industries We Serve !!
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((ind, index) => (
            <motion.div
              key={index}
              data-testid={`industry-card-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="relative h-[220px] rounded-xl overflow-hidden cursor-pointer shadow-md group"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url('${ind.image}')` }}
              />

              {/* Dark overlay — deepens on hover */}
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/60 transition-colors duration-300" />

              {/* Subtle gradient at bottom for extra depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Text */}
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <h3 className="text-white text-xl md:text-2xl font-bold tracking-wide drop-shadow-lg leading-snug">
                  {ind.name}
                </h3>
              </div>

              {/* Teal bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1abc9c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
