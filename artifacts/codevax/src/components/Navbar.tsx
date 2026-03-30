import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Hexagon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Product", href: "#product" },
    { name: "Career", href: "#career" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
      data-testid="navbar"
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <Hexagon className={`w-8 h-8 ${isScrolled ? "text-primary" : "text-primary"}`} fill="currentColor" />
          <span className={`text-2xl font-bold tracking-tight ${isScrolled ? "text-gray-900" : "text-white"}`}>
            Codevax
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-gray-600" : "text-gray-200 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="rounded-full px-6 shadow-sm hover:shadow-md transition-shadow"
            data-testid="button-work-with-us"
          >
            WORK WITH US
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg md:hidden overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-800 font-medium py-2 border-b border-gray-100 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full rounded-full mt-2" data-testid="button-mobile-work">
                WORK WITH US
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}