import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Hexagon, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const megaMenuColumns = [
  {
    heading: "Development",
    items: [
      "Custom SaaS Development",
      "Custom Web Development",
      "Mobile App Development",
      "Full Stack Development",
      "MVP Development",
      "Node.js Development",
      "React.js Development",
      "CMS Development",
    ],
  },
  {
    heading: "Growth",
    items: [
      "Digital Marketing",
      "SEO Services",
      "PPC Management",
      "Social Media Marketing",
    ],
  },
  {
    heading: "Design",
    items: [
      "UI/UX Design",
      "Website Design",
      "Product Design",
    ],
  },
  {
    heading: "Consultancy",
    items: [
      "Business Strategy",
      "Go-To-Market Strategy",
      "Startup Consulting",
    ],
  },
];

const leftLinks = [
  { label: "Products", href: "/product" },
  { label: "Services", href: "/services", isMegaToggle: true },
  { label: "Hire Developers", href: "/services" },
  { label: "Work", href: "/#industries" },
  { label: "Insights", href: "/#stats" },
  { label: "Codevax", href: "/" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [location] = useLocation();
  const overlayRef = useRef<HTMLDivElement>(null);

  const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (megaOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [megaOpen]);

  // Close mega menu on route change
  useEffect(() => { setMegaOpen(false); setMobileMenuOpen(false); }, [location]);

  const navLinks = [
    { name: "Home", href: "/", isRoute: true },
    { name: "About", href: "/about", isRoute: true },
    { name: "Services", href: "/services", isRoute: true, isMega: true },
    { name: "Product", href: "/product", isRoute: true },
    { name: "Career", href: "/career", isRoute: true },
    { name: "Contact", href: "/contact", isRoute: true },
  ];

  const navbarTransparent = !isScrolled && !megaOpen && isHomePage;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          megaOpen
            ? "bg-white py-4 border-b border-gray-100"
            : isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm"
            : isHomePage
            ? "bg-transparent py-5"
            : "bg-white border-b border-gray-100 py-4 shadow-sm"
        }`}
        data-testid="navbar"
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-50" onClick={() => setMegaOpen(false)}>
            <Hexagon className="w-8 h-8 text-[#1abc9c]" fill="currentColor" />
            <span className={`text-2xl font-bold tracking-tight ${navbarTransparent ? "text-white" : "text-gray-900"}`}>
              Codevax
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isMega ? (
                <button
                  key={link.name}
                  onClick={() => setMegaOpen((v) => !v)}
                  data-testid="button-services-mega"
                  className={`text-sm font-medium transition-colors flex items-center gap-1 hover:text-[#1abc9c] ${
                    navbarTransparent ? "text-gray-200" : "text-gray-600"
                  } ${megaOpen ? "text-[#1abc9c]" : ""}`}
                >
                  {link.name}
                  <motion.span animate={{ rotate: megaOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronRight className="w-4 h-4 rotate-90" />
                  </motion.span>
                </button>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[#1abc9c] ${
                    navbarTransparent ? "text-gray-200" : "text-gray-600"
                  } ${location === link.href ? "text-[#1abc9c]" : ""}`}
                >
                  {link.name}
                </Link>
              )
            )}
            <Button
              className="rounded-full px-6 shadow-sm hover:shadow-md transition-shadow bg-[#1abc9c] hover:bg-[#16a085] text-white border-0"
              onClick={() => setMegaOpen(false)}
              data-testid="button-work-with-us"
            >
              WORK WITH US
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 p-1"
            onClick={() => { setMobileMenuOpen(!mobileMenuOpen); setMegaOpen(false); }}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen
              ? <X className={`w-6 h-6 ${navbarTransparent ? "text-white" : "text-gray-900"}`} />
              : <Menu className={`w-6 h-6 ${navbarTransparent ? "text-white" : "text-gray-900"}`} />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl md:hidden overflow-hidden"
            >
              <div className="flex flex-col px-6 py-4 gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-gray-800 font-medium py-3 border-b border-gray-100 last:border-0 flex items-center justify-between hover:text-[#1abc9c] transition-colors ${
                      location === link.href ? "text-[#1abc9c]" : ""
                    }`}
                  >
                    {link.name}
                    <ChevronRight className="w-4 h-4 opacity-40" />
                  </Link>
                ))}
                <Button className="w-full rounded-full mt-3 bg-[#1abc9c] hover:bg-[#16a085] text-white border-0" data-testid="button-mobile-work">
                  WORK WITH US
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Full-Screen Mega Menu Overlay */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white overflow-y-auto"
            data-testid="mega-menu-overlay"
          >
            {/* Decorative teal top stripe */}
            <div className="h-1 bg-gradient-to-r from-[#1abc9c] to-[#3498db] w-full" />

            {/* Spacer for fixed navbar */}
            <div className="h-16" />

            <div className="container mx-auto px-6 md:px-12 py-12 lg:py-16">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                {/* LEFT — Large Nav Links */}
                <div className="lg:w-64 xl:w-72 flex-shrink-0 flex flex-col justify-between">
                  <div className="flex flex-col gap-1">
                    {leftLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setMegaOpen(false)}
                        className={`group flex items-center justify-between py-4 border-b border-gray-100 last:border-0 transition-all duration-200 ${
                          link.isMegaToggle
                            ? "text-[#1abc9c] font-bold text-2xl"
                            : "text-gray-800 font-semibold text-xl hover:text-[#1abc9c]"
                        }`}
                        data-testid={`mega-left-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                      >
                        {link.label}
                        <ArrowRight className={`w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 ${link.isMegaToggle ? "opacity-100 text-[#1abc9c]" : ""}`} />
                      </Link>
                    ))}
                  </div>

                  {/* Contact CTA */}
                  <div className="mt-12 pt-8 border-t-2 border-[#1abc9c]">
                    <Link
                      href="/contact"
                      onClick={() => setMegaOpen(false)}
                      className="inline-flex items-center gap-2 text-gray-900 font-bold text-lg hover:text-[#1abc9c] transition-colors group"
                      data-testid="mega-contact-link"
                    >
                      Contact Us
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <p className="text-gray-500 text-sm mt-1">hello@codevax.com</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden lg:block w-px bg-gray-100 self-stretch" />

                {/* RIGHT — Service Columns Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
                >
                  {megaMenuColumns.map((col, ci) => (
                    <div key={ci}>
                      {/* Column heading */}
                      <div className="mb-5">
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-2">
                          {col.heading}
                        </h3>
                        <div className="w-8 h-0.5 bg-[#1abc9c]" />
                      </div>
                      {/* Items */}
                      <ul className="flex flex-col gap-0.5">
                        {col.items.map((item, ii) => (
                          <li key={ii}>
                            <Link
                              href="/services"
                              onClick={() => setMegaOpen(false)}
                              className="group flex items-center gap-2 py-2 text-[15px] text-gray-600 hover:text-[#1abc9c] font-medium transition-colors duration-150"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-[#1abc9c] flex-shrink-0 transition-colors" />
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Bottom Stats Bar */}
              <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap gap-8 md:gap-16">
                {[
                  { value: "5000+", label: "Projects Delivered" },
                  { value: "200+", label: "Expert Engineers" },
                  { value: "18+", label: "Years Experience" },
                  { value: "22+", label: "Countries" },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="text-2xl font-black text-[#1abc9c]">{s.value}</p>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop click to close */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30"
            onClick={() => setMegaOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
