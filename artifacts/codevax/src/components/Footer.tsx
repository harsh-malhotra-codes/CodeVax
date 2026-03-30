import { Hexagon, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-gray-300 pt-20 pb-8 border-t border-white/10" id="contact">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">
          
          {/* Brand Col */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <Hexagon className="w-8 h-8 text-primary" fill="currentColor" />
              <span className="text-2xl font-bold tracking-tight text-white">
                Codevax
              </span>
            </div>
            <p className="leading-relaxed mb-8 max-w-sm">
              For Startups, SMBs, and Large corporations — we deliver the digital products that power your growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Services</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="hover:text-primary transition-colors">Custom SaaS Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mobile App Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cloud Consulting</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Contact Us</h4>
            <address className="not-italic mb-4 leading-relaxed">
              1025, 10th Floor, Block-D,<br />
              CCC Building, Punjab, India
            </address>
            <a href="mailto:hello@codevax.com" className="block mb-8 hover:text-primary transition-colors">
              hello@codevax.com
            </a>
            <Button size="lg" className="rounded-full shadow-lg">
              CONTACT US
            </Button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 Codevax. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}