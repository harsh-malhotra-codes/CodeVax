import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Globe, Zap, ShoppingBag, GraduationCap, Plane, Building2, Truck, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  {
    icon: LayoutDashboard,
    title: "Rental Management Platform",
    tag: "SaaS",
    desc: "A full-featured platform for rental businesses — manage listings, bookings, payments, and customer communications in one place.",
    features: ["Real-time availability calendar", "Automated invoicing", "Multi-location support", "Mobile app included"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop",
    badge: "Most Popular",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Marketplace",
    tag: "SaaS",
    desc: "Multi-vendor marketplace solution with advanced product management, vendor dashboards, and integrated payment gateways.",
    features: ["Multi-vendor architecture", "Inventory management", "Advanced analytics", "Custom storefront builder"],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80&auto=format&fit=crop",
    badge: null,
  },
  {
    icon: GraduationCap,
    title: "E-learning Management System",
    tag: "EdTech",
    desc: "Comprehensive LMS built for modern educators — course creation, student tracking, live sessions, and certification management.",
    features: ["Video course builder", "Live class scheduler", "Progress analytics", "Certificate generation"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop",
    badge: "New",
  },
  {
    icon: Plane,
    title: "Travel Booking Platform",
    tag: "Travel",
    desc: "End-to-end travel booking solution covering flights, hotels, and tours with dynamic pricing and CRM integration.",
    features: ["Flight & hotel aggregation", "Dynamic pricing engine", "B2B & B2C portals", "Loyalty rewards module"],
    image: "https://images.unsplash.com/photo-1551882547-ff40c4a49ce5?w=800&q=80&auto=format&fit=crop",
    badge: null,
  },
  {
    icon: Building2,
    title: "Real Estate Portal",
    tag: "PropTech",
    desc: "Feature-rich real estate platform for buyers, sellers, and agents — with AI-powered property recommendations and virtual tours.",
    features: ["Property listing & search", "Virtual tour support", "Agent CRM dashboard", "Mortgage calculator"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format&fit=crop",
    badge: null,
  },
  {
    icon: Truck,
    title: "Logistics & Fleet Management",
    tag: "Logistics",
    desc: "Real-time fleet tracking and logistics management solution with route optimization, driver management, and delivery analytics.",
    features: ["GPS fleet tracking", "Route optimization", "Driver app (iOS/Android)", "Delivery proof & ePOD"],
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80&auto=format&fit=crop",
    badge: null,
  },
];

const stats = [
  { value: "6", label: "Core Products" },
  { value: "50+", label: "Integrations" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "White-label", label: "Ready" },
];

export default function Product() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-[#0d1b2a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1abc9c18_0%,_transparent_55%)]" />
        <div className="absolute -bottom-1 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80H1440V20C1200 70 960 0 720 40C480 80 240 0 0 30V80Z" fill="white" />
          </svg>
        </div>
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#1abc9c] uppercase tracking-[0.25em] font-semibold text-sm mb-5"
          >
            Ready-Made Solutions
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            Pre-Packaged SaaS Products
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1abc9c] to-[#3498db]">
              Ready to Deploy
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Launch faster with our battle-tested, white-label SaaS products. Fully customizable to your brand and business needs.
          </motion.p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <p className="text-3xl font-black text-[#1abc9c] mb-1">{s.value}</p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[#1abc9c] uppercase tracking-[0.2em] font-semibold text-xs mb-3 block">Our Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Industry-Specific Platforms</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Each product is production-ready, white-label-friendly, and backed by our full support team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.07)] border border-gray-100 hover:shadow-[0_12px_48px_rgba(26,188,156,0.13)] hover:border-[#1abc9c]/20 transition-all duration-400 flex flex-col"
                data-testid={`product-card-${i}`}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-[#1abc9c] text-white text-xs font-bold px-3 py-1 rounded-full">{product.tag}</span>
                    {product.badge && (
                      <span className="bg-white text-gray-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        {product.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1abc9c]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1abc9c] transition-colors duration-300">
                      <product.icon className="w-5 h-5 text-[#1abc9c] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg leading-tight">{product.title}</h3>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{product.desc}</p>

                  <ul className="space-y-2 mb-7 flex-1">
                    {product.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1abc9c] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="w-full rounded-xl border-[#1abc9c]/30 text-[#1abc9c] hover:bg-[#1abc9c] hover:text-white hover:border-[#1abc9c] transition-all group/btn"
                    >
                      Request Demo
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#0d1b2a] to-[#1a2a3a] rounded-2xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Need a Custom Build?</h2>
              <p className="text-gray-400 max-w-md">
                Don't see exactly what you need? Our team will build it from scratch — tailored precisely to your requirements.
              </p>
            </div>
            <Link href="/contact">
              <Button className="rounded-full h-14 px-10 text-base font-semibold bg-[#1abc9c] hover:bg-[#16a085] text-white border-0 whitespace-nowrap group flex-shrink-0">
                Discuss Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
