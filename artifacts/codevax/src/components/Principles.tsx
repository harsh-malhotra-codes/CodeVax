import { motion } from "framer-motion";
import { Shield, Star, Eye, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Variants } from "framer-motion";

const principles = [
  {
    icon: Shield,
    title: "Build Trust",
    description: "We establish honest, lasting relationships with our clients through transparent communication.",
  },
  {
    icon: Star,
    title: "Deliver Perfection",
    description: "Every project we undertake is executed with meticulous attention to detail and quality.",
  },
  {
    icon: Eye,
    title: "Be Transparent",
    description: "We believe in open communication and clear reporting at every stage of development.",
  },
  {
    icon: Lightbulb,
    title: "Drive Innovation",
    description: "We constantly push boundaries, embracing new technologies to deliver cutting-edge solutions.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
  },
};

export default function Principles() {
  return (
    <section className="py-20 md:py-24 bg-white" id="principles">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">
            OUR PRINCIPLES
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            We Architect Perfection !!
          </h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {principles.map((principle, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full min-h-[260px] border-0 shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300 group overflow-hidden relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out"></div>
                <CardContent className="p-10 flex flex-col items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <principle.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {principle.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
