import { motion } from "framer-motion";
import { ArrowRight, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiGoogleanalytics, SiGoogleads, SiMeta, SiHtml5, SiCss, SiJavascript, SiReact, SiNodedotjs, SiDocker } from "react-icons/si";

export default function Hero() {
  const floatingCards = [
    { icon: SiReact, title: "React", top: "10%", left: "10%", delay: 0 },
    { icon: SiNodedotjs, title: "Node.js", top: "40%", left: "60%", delay: 0.2 },
    { icon: Cloud, title: "AWS", top: "70%", left: "20%", delay: 0.4 },
    { icon: SiDocker, title: "Docker", top: "20%", left: "80%", delay: 0.6 },
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0d1b2a] pt-20" id="home">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-[#0d1b2a] to-[#1a1a2e] opacity-90"></div>
      
      {/* Tech Grid overlay subtle */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 flex-1 pt-16 pb-20">
        {/* Left Content */}
        <div className="w-full lg:w-[60%] flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block"
          >
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm border border-primary/30 bg-primary/10 px-4 py-1.5 rounded-full">
              Custom Software Solutions
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[64px] leading-[1.1] font-bold text-white mb-6"
          >
            Helping You Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Inner Resilience.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
          >
            At Codevax, we transform your vision into reality with our custom development solutions. Specializing in industry-standard SaaS applications, bespoke mobile app development, and strategic marketing services, we provide the tools and expertise your business needs to thrive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="lg" className="rounded-full h-14 px-8 text-base shadow-lg shadow-primary/20 group">
              LET'S TALK !!
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Right Content - Abstract Visuals */}
        <div className="w-full lg:w-[40%] h-[400px] lg:h-[500px] relative hidden md:block">
          {floatingCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -20, 0],
              }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.4 + card.delay },
                scale: { duration: 0.5, delay: 0.4 + card.delay },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: card.delay }
              }}
              className="absolute bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl flex items-center gap-4"
              style={{ top: card.top, left: card.left }}
            >
              <card.icon className="w-8 h-8 text-primary" />
              <span className="text-white font-semibold">{card.title}</span>
            </motion.div>
          ))}
          
          {/* Decorative geometric shapes */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary/20 rounded-full border-dashed"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-blue-400/10 rounded-full border-dashed"
          />
        </div>
      </div>

      {/* Tech Logos Bottom Bar */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/20 backdrop-blur-sm py-6">
        <div className="container mx-auto px-6 md:px-12 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 text-white"><Cloud className="w-6 h-6" /><span className="font-semibold text-sm hidden md:block">AWS</span></div>
          <div className="flex items-center gap-2 text-white"><SiGoogleanalytics className="w-6 h-6" /><span className="font-semibold text-sm hidden md:block">Google Analytics</span></div>
          <div className="flex items-center gap-2 text-white"><SiGoogleads className="w-6 h-6" /><span className="font-semibold text-sm hidden md:block">Google Ads</span></div>
          <div className="flex items-center gap-2 text-white"><SiMeta className="w-6 h-6" /><span className="font-semibold text-sm hidden md:block">Meta</span></div>
          <div className="flex items-center gap-2 text-white"><SiHtml5 className="w-6 h-6" /><span className="font-semibold text-sm hidden md:block">HTML5</span></div>
          <div className="flex items-center gap-2 text-white"><SiCss className="w-6 h-6" /><span className="font-semibold text-sm hidden md:block">CSS3</span></div>
          <div className="flex items-center gap-2 text-white"><SiJavascript className="w-6 h-6" /><span className="font-semibold text-sm hidden md:block">JavaScript</span></div>
        </div>
      </div>
    </section>
  );
}