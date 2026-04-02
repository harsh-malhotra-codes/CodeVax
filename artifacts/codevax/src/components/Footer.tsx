import { Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-gray-300 pt-20 pb-8 border-t border-white/10" id="contact">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/og.png"
                alt="Codevax"
                className="h-10 w-auto max-w-[170px] object-contain"
              />
            </div>
            <p className="leading-relaxed mb-8 max-w-sm">
              For Startups, SMBs, and Large corporations - we deliver the digital products that power your growth.
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
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-base font-bold text-white/90 hover:border-primary hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-base font-bold text-white/90 hover:border-primary hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Products Col */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Products</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/product/rental" className="hover:text-primary transition-colors">Rental Management Platform</Link></li>
              <li><Link href="/product/ecommerce" className="hover:text-primary transition-colors">E-commerce Marketplace</Link></li>
              <li><Link href="/product/elearning" className="hover:text-primary transition-colors">E-learning System</Link></li>
              <li><Link href="/product/travel" className="hover:text-primary transition-colors">Travel Booking Platform</Link></li>
              <li><Link href="/product/logistics" className="hover:text-primary transition-colors">Logistics & Fleet</Link></li>
              <li className="pt-2">
                <Link href="/product" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                  More Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Services</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/services" className="hover:text-primary transition-colors">Custom SaaS Development</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Mobile App Development</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Cloud Consulting</Link></li>
              <li className="pt-2">
                <Link href="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                  More Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Contact Us</h4>
            <address className="not-italic mb-4 leading-relaxed">
              1025, 10th Floor, Block-D,<br />
              CCC Building, Punjab, India
            </address>
            <a href="mailto:hello@codevax.com" className="inline-flex mb-4 rounded-full border border-white/15 px-4 py-2 font-semibold hover:border-primary hover:text-primary transition-colors">
              hello@codevax.com
            </a>
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
