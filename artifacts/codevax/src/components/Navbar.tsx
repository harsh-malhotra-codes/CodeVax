import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, type Variants } from "framer-motion";

/* ─── Mega Menu Data ─────────────────────────────────────────────────── */

const megaColumns = [
  {
    heading: "Development",
    color: "#18c8d0",
    items: [
      { label: "Custom SaaS Development", hot: true },
      { label: "Custom Web Development" },
      { label: "Mobile App Development" },
      { label: "Full Stack Development" },
      { label: "MVP Development" },
      { label: "Node.js Development" },
      { label: "React.js Development" },
      { label: "CMS Development" },
    ],
  },
  {
    heading: "Growth",
    color: "#18c8d0",
    items: [
      { label: "Digital Marketing" },
      { label: "SEO Services" },
      { label: "PPC Management" },
      { label: "Social Media Marketing" },
    ],
  },
  {
    heading: "Design",
    color: "#9b59b6",
    items: [
      { label: "UI/UX Design" },
      { label: "Website Design" },
      { label: "Product Design" },
    ],
  },
  {
    heading: "Consultancy",
    color: "#f39c12",
    items: [
      { label: "Business Strategy" },
      { label: "Go-To-Market Strategy" },
      { label: "Startup Consulting" },
    ],
  },
];

const productColumns = [
  {
    heading: "Platforms",
    color: "#18c8d0",
    items: [
      { label: "Rental Management Platform", href: "/product/rental" },
      { label: "E-commerce Marketplace", href: "/product/ecommerce" },
      { label: "E-learning System", href: "/product/elearning" },
      { label: "Travel Booking Platform", href: "/product/travel" },
      { label: "Real Estate Portal", href: "/product/real-estate" },
      { label: "Logistics & Fleet", href: "/product/logistics" },
    ],
  },
  {
    heading: "Categories",
    color: "#18c8d0",
    items: [
      { label: "SaaS Products", href: "/product/rental" },
      { label: "White-label Solutions", href: "/product/ecommerce" },
      { label: "Industry Platforms", href: "/product/logistics" },
    ],
  },
  {
    heading: "Features",
    color: "#9b59b6",
    items: [
      { label: "Multi-tenant Architecture", href: "/product/rental" },
      { label: "API Integrations", href: "/product/ecommerce" },
      { label: "Analytics Dashboard", href: "/product/logistics" },
    ],
  },
];

const hireColumns = [
  {
    heading: "Roles",
    color: "#18c8d0",
    items: [
      { label: "React Developers", href: "/hire-developers" },
      { label: "Node.js Developers", href: "/hire-developers" },
      { label: "Full-Stack Developers", href: "/hire-developers" },
      { label: "Mobile Developers", href: "/hire-developers" },
      { label: "DevOps Engineers", href: "/hire-developers" },
    ],
  },
  {
    heading: "Engagement",
    color: "#18c8d0",
    items: [
      { label: "Dedicated Team", href: "/hire-developers" },
      { label: "Fixed Scope", href: "/hire-developers" },
      { label: "Hourly Support", href: "/hire-developers" },
      { label: "Team Augmentation", href: "/hire-developers" },
    ],
  },
  {
    heading: "Why Codevax",
    color: "#9b59b6",
    items: [
      { label: "Fast onboarding", href: "/hire-developers" },
      { label: "Clear communication", href: "/hire-developers" },
      { label: "Product mindset", href: "/hire-developers" },
      { label: "Reliable delivery", href: "/hire-developers" },
    ],
  },
];

type SidebarLink = {
  label: string;
  href: string;
  menu?: "services" | "product" | "hire";
};

const sidebarLinks: SidebarLink[] = [
  { label: "Products", href: "/product", menu: "product" as const },
  { label: "Services", href: "/services", menu: "services" as const },
  { label: "Hire Developers", href: "/hire-developers", menu: "hire" as const },
];

/* ─── Animation Variants ─────────────────────────────────────────────── */

const overlayVariants: Variants = {
  hidden:  { opacity: 0, y: -16, clipPath: "inset(0 0 100% 0)" },
  visible: { opacity: 1, y: 0,   clipPath: "inset(0 0 0% 0)",
             transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] as const } },
  exit:    { opacity: 0, y: -8,  clipPath: "inset(0 0 100% 0)",
             transition: { duration: 0.28, ease: [0.4, 0, 1, 1] as const } },
};

const colVariants: Variants = {
  hidden:  { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.35, delay: 0.12 + i * 0.06, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

/* ─── Component ─────────────────────────────────────────────────────── */

export default function Navbar() {
  const [isScrolled,     setIsScrolled]     = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [activeMega,     setActiveMega]     = useState<"services" | "product" | "hire" | null>(null);
  const [location]                          = useLocation();

  const isHome = location === "/";

  /* Scroll listener */
  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* Lock body scroll when mega open */
  useEffect(() => {
    document.body.style.overflow = activeMega ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeMega]);

  /* Close on route change */
  useEffect(() => {
    setActiveMega(null);
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home",    href: "/" },
    { name: "Services",href: "/services", isMega: "services" as const },
    { name: "Product", href: "/product", isMega: "product" as const },
    { name: "Hire Developers", href: "/hire-developers", isMega: "hire" as const },
  ];

  const transparent = !isScrolled && !activeMega && isHome;

  /* ─ Header bar styling ─ */
  const headerCls = [
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
    activeMega
      ? "bg-white py-4 shadow-none border-b border-gray-100"
      : isScrolled
        ? "bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm"
        : isHome
          ? "bg-transparent py-5"
          : "bg-white border-b border-gray-100 py-4",
  ].join(" ");

  return (
    <>
      {/* ══════════════ HEADER BAR ══════════════ */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={headerCls}
        data-testid="navbar"
      >
        <div className="container mx-auto px-6 md:px-14 flex items-center justify-between h-full">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 z-50 select-none"
            onClick={() => setActiveMega(null)}
          >
            <img
              src="/og.png"
              alt="Codevax"
              className="h-10 w-auto max-w-[160px] object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" role="navigation">
            {navLinks.map((link) =>
              link.isMega ? (
                <button
                  key={link.name}
                  onClick={() =>
                    setActiveMega((current) =>
                      current === link.isMega ? null : link.isMega,
                    )
                  }
                  data-testid={`button-${link.isMega}-mega`}
                  className={`flex items-center gap-1 text-[13.5px] font-semibold tracking-wide transition-colors ${
                    transparent
                      ? "text-gray-200 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } ${activeMega === link.isMega ? "!text-[#18c8d0]" : ""}`}
                >
                  {link.name}
                  <motion.span
                    animate={{ rotate: activeMega === link.isMega ? 180 : 0 }}
                    transition={{ duration: 0.22 }}
                    className="origin-center"
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </motion.span>
                </button>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[13.5px] font-semibold tracking-wide transition-colors ${
                    location === link.href
                      ? "text-[#18c8d0]"
                      : transparent
                        ? "text-gray-200 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}

            <Link
              href="/contact"
              onClick={() => setActiveMega(null)}
              data-testid="button-work-with-us"
              className="blob-btn group h-11 px-2.5 shadow-[0_10px_24px_rgba(24,200,208,0.18)]"
            >
              <span className="blob-btn__inner" aria-hidden="true">
                <span className="blob-btn__blobs">
                  <span className="blob-btn__blob" />
                  <span className="blob-btn__blob" />
                  <span className="blob-btn__blob" />
                  <span className="blob-btn__blob" />
                </span>
              </span>
              <span className="blob-btn__content">
                WORK WITH US
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </nav>

          {/* Mobile toggle */}
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="md:hidden z-50 p-1.5 rounded-lg"
              onClick={() => {
                setMobileOpen((v) => !v);
                setActiveMega(null);
              }}
              data-testid="button-mobile-menu"
            >
            {mobileOpen
              ? <X    className={`w-6 h-6 ${transparent ? "text-white" : "text-gray-900"}`} />
              : <Menu className={`w-6 h-6 ${transparent ? "text-white" : "text-gray-900"}`} />
            }
          </button>
        </div>

        {/* ── Mobile drawer ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit  ={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-2xl md:hidden overflow-hidden"
            >
              <div className="flex flex-col px-6 py-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between py-3.5 border-b border-gray-100 last:border-0 text-[15px] font-semibold transition-colors ${
                      location === link.href ? "text-[#18c8d0]" : "text-gray-700 hover:text-[#18c8d0]"
                    }`}
                  >
                    {link.name}
                    <ArrowRight className="w-4 h-4 opacity-30" />
                  </Link>
                ))}
                <Button
                  asChild
                  className="w-full rounded-full mt-4 mb-2 bg-[#18c8d0] hover:bg-[#14b2b9] text-white border-0"
                  data-testid="button-mobile-work"
                >
                  <Link href="/contact">WORK WITH US</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <svg
        aria-hidden="true"
        className="absolute h-0 w-0 overflow-hidden"
        focusable="false"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* ══════════════ MEGA MENU OVERLAY ══════════════ */}
      <AnimatePresence>
        {activeMega === "services" && (
          <motion.div
            key="mega-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-white overflow-y-auto"
            data-testid="mega-menu-overlay"
          >
            {/* Top teal progress bar */}
            <div className="h-[3px] w-full bg-gradient-to-r from-[#18c8d0] via-[#18c8d0] to-[#18c8d0]" />

            {/* Spacer behind fixed header */}
            <div className="h-[68px]" />

            {/* ── Close button ── */}
            <button
              onClick={() => setActiveMega(null)}
              aria-label="Close menu"
              className="absolute top-6 right-6 md:right-10 w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10 group"
              data-testid="mega-close"
            >
              <X className="w-5 h-5 text-gray-600 group-hover:rotate-90 transition-transform duration-200" />
            </button>

            {/* ── Main content ── */}
            <div className="container mx-auto px-6 md:px-14 py-10 lg:py-14">
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-24">

                {/* ── LEFT: Big nav links ── */}
                <aside className="lg:w-64 xl:w-72 flex-shrink-0 flex flex-col">
                  <nav className="flex flex-col flex-1">
                    {sidebarLinks.map((link, i) => {
                      const isActive = link.menu ? activeMega === link.menu : location === link.href;

                      const content = (
                        <>
                          <span className={[
                            "font-bold leading-none whitespace-nowrap transition-all",
                            isActive ? "text-[1.7rem]" : "text-[1.35rem] group-hover:text-[1.45rem]",
                          ].join(" ")}>
                            {link.label}
                          </span>
                          <ArrowUpRight className={[
                            "w-5 h-5 flex-shrink-0 transition-all duration-200",
                            isActive
                              ? "opacity-100 text-[#18c8d0]"
                              : "opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0",
                          ].join(" ")} />
                        </>
                      );

                      const className = [
                        "group flex items-center justify-between py-[14px] border-b transition-all duration-200",
                        isActive
                          ? "border-[#18c8d0]/40 text-[#18c8d0]"
                          : "border-gray-100 text-gray-700 hover:text-[#18c8d0]",
                      ].join(" ");

                      if (link.menu) {
                        const menu = link.menu;
                        return (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setActiveMega(menu)}
                            data-testid={`mega-left-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                            className={className}
                          >
                            {content}
                          </button>
                        );
                      }

                      return (
                        <Link
                          key={i}
                          href={link.href}
                          onClick={() => setActiveMega(null)}
                          data-testid={`mega-left-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                          className={className}
                        >
                          {content}
                        </Link>
                      );
                    })}
                  </nav>

                  {/* Contact CTA */}
                  <div className="mt-10 pt-6 relative">
                    {/* Double underline accent */}
                    <div className="absolute top-0 left-0 w-16 h-[3px] bg-[#18c8d0]" />
                    <div className="absolute top-[5px] left-0 w-8 h-[2px] bg-[#18c8d0]/40" />

                    <Link
                      href="/contact"
                      onClick={() => setActiveMega(null)}
                      className="group inline-flex items-center gap-2 mt-1"
                      data-testid="mega-contact-link"
                    >
                      <span className="text-[1.1rem] font-black text-gray-900 group-hover:text-[#18c8d0] transition-colors underline-offset-4 decoration-2 group-hover:underline">
                        Contact Us
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#18c8d0] group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <p className="text-gray-400 text-[13px] mt-1 font-medium">hello@codevax.com</p>
                  </div>
                </aside>

                {/* Vertical divider */}
                <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent self-stretch" />

                {/* ── RIGHT: Service columns ── */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10">
                  {megaColumns.map((col, ci) => (
                    <motion.div
                      key={ci}
                      custom={ci}
                      variants={colVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {/* Column heading */}
                      <div className="mb-5">
                        <p className="text-[10.5px] font-black uppercase tracking-[0.22em] text-gray-400 mb-2.5">
                          {col.heading}
                        </p>
                        <div
                          className="h-[2.5px] w-10 rounded-full"
                          style={{ backgroundColor: col.color }}
                        />
                      </div>

                      {/* Items */}
                      <ul className="space-y-[2px]">
                        {col.items.map((item, ii) => (
                          <li key={ii}>
                            <Link
                              href="/services"
                              onClick={() => setActiveMega(null)}
                              className="group/item flex items-center gap-2.5 py-[8px] pr-2 rounded-lg hover:bg-gray-50 transition-all duration-150"
                            >
                              <span
                                className="w-[7px] h-[7px] rounded-full flex-shrink-0 transition-all duration-200 group-hover/item:scale-125"
                                style={{
                                  backgroundColor: `${col.color}55`,
                                  outline: `2px solid transparent`,
                                }}
                              />
                              <span className="text-[14px] text-gray-600 group-hover/item:text-gray-900 font-medium leading-snug transition-colors">
                                {item.label}
                              </span>
                              {item.hot && (
                                <span className="ml-auto text-[10px] font-bold text-[#18c8d0] bg-[#18c8d0]/10 px-1.5 py-0.5 rounded-full flex-shrink-0">
                                  Popular
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ── Bottom stats bar ── */}
              <div className="mt-14 pt-7 border-t border-gray-100 flex flex-wrap gap-x-14 gap-y-5">
                {[
                  { value: "5,000+", label: "Projects Delivered" },
                  { value: "200+",   label: "Expert Engineers" },
                  { value: "18+",    label: "Years Experience" },
                  { value: "22+",    label: "Countries Served" },
                ].map((s, i) => (
                  <div key={i} className="flex items-baseline gap-3">
                    <span className="text-[1.6rem] font-black text-[#18c8d0] leading-none">
                      {s.value}
                    </span>
                    <span className="text-[12px] text-gray-500 font-medium">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeMega === "product" && (
          <motion.div
            key="product-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-white overflow-y-auto"
            data-testid="product-menu-overlay"
          >
            <div className="h-[3px] w-full bg-gradient-to-r from-[#18c8d0] via-[#18c8d0] to-[#18c8d0]" />
            <div className="h-[68px]" />

            <button
              onClick={() => setActiveMega(null)}
              aria-label="Close menu"
              className="absolute top-6 right-6 md:right-10 w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10 group"
              data-testid="product-close"
            >
              <X className="w-5 h-5 text-gray-600 group-hover:rotate-90 transition-transform duration-200" />
            </button>

            <div className="container mx-auto px-6 md:px-14 py-10 lg:py-14">
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-24">
                <aside className="lg:w-64 xl:w-72 flex-shrink-0 flex flex-col">
                  <nav className="flex flex-col flex-1">
                    {sidebarLinks.map((link, i) => {
                      const isActive = link.menu ? activeMega === link.menu : location === link.href;

                      const content = (
                        <>
                          <span className={[
                            "font-bold leading-none whitespace-nowrap transition-all",
                            isActive ? "text-[1.7rem]" : "text-[1.35rem] group-hover:text-[1.45rem]",
                          ].join(" ")}>
                            {link.label}
                          </span>
                          <ArrowUpRight className={[
                            "w-5 h-5 flex-shrink-0 transition-all duration-200",
                            isActive
                              ? "opacity-100 text-[#18c8d0]"
                              : "opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0",
                          ].join(" ")} />
                        </>
                      );

                      const className = [
                        "group flex items-center justify-between py-[14px] border-b transition-all duration-200",
                        isActive
                          ? "border-[#18c8d0]/40 text-[#18c8d0]"
                          : "border-gray-100 text-gray-700 hover:text-[#18c8d0]",
                      ].join(" ");

                      if (link.menu) {
                        const menu = link.menu;
                        return (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setActiveMega(menu)}
                            data-testid={`product-left-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                            className={className}
                          >
                            {content}
                          </button>
                        );
                      }

                      return (
                        <Link
                          key={i}
                          href={link.href}
                          onClick={() => setActiveMega(null)}
                          data-testid={`product-left-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                          className={className}
                        >
                          {content}
                        </Link>
                      );
                    })}
                  </nav>

                  <div className="mt-10 pt-6 relative">
                    <div className="absolute top-0 left-0 w-16 h-[3px] bg-[#18c8d0]" />
                    <div className="absolute top-[5px] left-0 w-8 h-[2px] bg-[#18c8d0]/40" />
                    <Link
                      href="/contact"
                      onClick={() => setActiveMega(null)}
                      className="group inline-flex items-center gap-2 mt-1"
                      data-testid="product-contact-link"
                    >
                      <span className="text-[1.1rem] font-black text-gray-900 group-hover:text-[#18c8d0] transition-colors underline-offset-4 decoration-2 group-hover:underline">
                        Talk to Us
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#18c8d0] group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <p className="text-gray-400 text-[13px] mt-1 font-medium">product@codevax.com</p>
                  </div>
                </aside>

                <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent self-stretch" />

                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                  {productColumns.map((col, ci) => (
                    <motion.div
                      key={ci}
                      custom={ci}
                      variants={colVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <div className="mb-5">
                        <p className="text-[10.5px] font-black uppercase tracking-[0.22em] text-gray-400 mb-2.5">
                          {col.heading}
                        </p>
                        <div
                          className="h-[2.5px] w-10 rounded-full"
                          style={{ backgroundColor: col.color }}
                        />
                      </div>

                      <ul className="space-y-[2px]">
                        {col.items.map((item, ii) => (
                          <li key={ii}>
                            <Link
                              href={item.href}
                              onClick={() => setActiveMega(null)}
                              className="group/item flex items-center gap-2.5 py-[8px] pr-2 rounded-lg hover:bg-gray-50 transition-all duration-150"
                            >
                              <span
                                className="w-[7px] h-[7px] rounded-full flex-shrink-0 transition-all duration-200 group-hover/item:scale-125"
                                style={{
                                  backgroundColor: `${col.color}55`,
                                  outline: `2px solid transparent`,
                                }}
                              />
                              <span className="text-[14px] text-gray-600 group-hover/item:text-gray-900 font-medium leading-snug transition-colors">
                                {item.label}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-14 pt-7 border-t border-gray-100 flex flex-wrap gap-x-14 gap-y-5">
                {[
                  { value: "6", label: "Product Routes" },
                  { value: "White-label", label: "Ready" },
                  { value: "API", label: "Driven" },
                  { value: "Custom", label: "Scalable" },
                ].map((s, i) => (
                  <div key={i} className="flex items-baseline gap-3">
                    <span className="text-[1.6rem] font-black text-[#18c8d0] leading-none">
                      {s.value}
                    </span>
                    <span className="text-[12px] text-gray-500 font-medium">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeMega === "hire" && (
          <motion.div
            key="hire-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-white overflow-y-auto"
            data-testid="hire-menu-overlay"
          >
            <div className="h-[3px] w-full bg-gradient-to-r from-[#18c8d0] via-[#18c8d0] to-[#18c8d0]" />
            <div className="h-[68px]" />

            <button
              onClick={() => setActiveMega(null)}
              aria-label="Close menu"
              className="absolute top-6 right-6 md:right-10 w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10 group"
              data-testid="hire-close"
            >
              <X className="w-5 h-5 text-gray-600 group-hover:rotate-90 transition-transform duration-200" />
            </button>

            <div className="container mx-auto px-6 md:px-14 py-10 lg:py-14">
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-24">
                <aside className="lg:w-64 xl:w-72 flex-shrink-0 flex flex-col">
                  <nav className="flex flex-col flex-1">
                    {sidebarLinks.map((link, i) => {
                      const isActive = link.menu ? activeMega === link.menu : location === link.href;

                      const content = (
                        <>
                          <span className={[
                            "font-bold leading-none whitespace-nowrap transition-all",
                            isActive ? "text-[1.7rem]" : "text-[1.35rem] group-hover:text-[1.45rem]",
                          ].join(" ")}>
                            {link.label}
                          </span>
                          <ArrowUpRight className={[
                            "w-5 h-5 flex-shrink-0 transition-all duration-200",
                            isActive
                              ? "opacity-100 text-[#18c8d0]"
                              : "opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0",
                          ].join(" ")} />
                        </>
                      );

                      const className = [
                        "group flex items-center justify-between py-[14px] border-b transition-all duration-200",
                        isActive
                          ? "border-[#18c8d0]/40 text-[#18c8d0]"
                          : "border-gray-100 text-gray-700 hover:text-[#18c8d0]",
                      ].join(" ");

                      if (link.menu) {
                        const menu = link.menu;
                        return (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setActiveMega(menu)}
                            data-testid={`hire-left-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                            className={className}
                          >
                            {content}
                          </button>
                        );
                      }

                      return (
                        <Link
                          key={i}
                          href={link.href}
                          onClick={() => setActiveMega(null)}
                          data-testid={`hire-left-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                          className={className}
                        >
                          {content}
                        </Link>
                      );
                    })}
                  </nav>

                  <div className="mt-10 pt-6 relative">
                    <div className="absolute top-0 left-0 w-16 h-[3px] bg-[#18c8d0]" />
                    <div className="absolute top-[5px] left-0 w-8 h-[2px] bg-[#18c8d0]/40" />

                    <Link
                      href="/hire-developers"
                      onClick={() => setActiveMega(null)}
                      className="group inline-flex items-center gap-2 mt-1"
                      data-testid="hire-contact-link"
                    >
                      <span className="text-[1.1rem] font-black text-gray-900 group-hover:text-[#18c8d0] transition-colors underline-offset-4 decoration-2 group-hover:underline">
                        Hire Our Experts
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#18c8d0] group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <p className="text-gray-400 text-[13px] mt-1 font-medium">Start with a dedicated team</p>
                  </div>
                </aside>

                <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent self-stretch" />

                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                  {hireColumns.map((col, ci) => (
                    <motion.div
                      key={ci}
                      custom={ci}
                      variants={colVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <div className="mb-5">
                        <p className="text-[10.5px] font-black uppercase tracking-[0.22em] text-gray-400 mb-2.5">
                          {col.heading}
                        </p>
                        <div
                          className="h-[2.5px] w-10 rounded-full"
                          style={{ backgroundColor: col.color }}
                        />
                      </div>

                      <ul className="space-y-[2px]">
                        {col.items.map((item, ii) => (
                          <li key={ii}>
                            <Link
                              href={item.href}
                              onClick={() => setActiveMega(null)}
                              className="group/item flex items-center gap-2.5 py-[8px] pr-2 rounded-lg hover:bg-gray-50 transition-all duration-150"
                            >
                              <span
                                className="w-[7px] h-[7px] rounded-full flex-shrink-0 transition-all duration-200 group-hover/item:scale-125"
                                style={{
                                  backgroundColor: `${col.color}55`,
                                  outline: `2px solid transparent`,
                                }}
                              />
                              <span className="text-[14px] text-gray-600 group-hover/item:text-gray-900 font-medium leading-snug transition-colors">
                                {item.label}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-14 pt-7 border-t border-gray-100 flex flex-wrap gap-x-14 gap-y-5">
                {[
                  { value: "1", label: "Team Or Roles" },
                  { value: "3", label: "Engagement Models" },
                  { value: "24h", label: "Response Time" },
                  { value: "100%", label: "Tailored Fit" },
                ].map((s, i) => (
                  <div key={i} className="flex items-baseline gap-3">
                    <span className="text-[1.6rem] font-black text-[#18c8d0] leading-none">
                      {s.value}
                    </span>
                    <span className="text-[12px] text-gray-500 font-medium">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
