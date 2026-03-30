import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">
              ABOUT US
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              We Are Codevax.<br />
              <span className="text-gray-800">We Help Entrepreneurs Build Their Dreams.</span>
            </h2>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              With years of experience building enterprise-grade software, we specialize in crafting bespoke digital solutions for businesses at every scale. Our expert teams work closely with entrepreneurs and enterprises alike, transforming complex ideas into streamlined, scalable technology.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From SaaS platforms to mobile applications and digital marketing, our end-to-end approach ensures every product we ship is ready to grow with your business. We don't just write code; we architect solutions that drive real business value.
            </p>
            
            <div className="pt-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 h-14 text-base font-semibold group"
              >
                KNOW MORE !!
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}