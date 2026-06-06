import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { 
  Building2, Users, Award, ShieldCheck, Wallet, 
  KeyRound, ArrowLeftRight, Smartphone, Bell, CreditCard, Landmark,
  BadgePercent, Briefcase, Home, Car, ChevronDown, 
  Menu, X, PiggyBank, BarChart3, Receipt, 
  MapPin, PhoneCall, Globe, Info, TrendingUp
} from "lucide-react"

// Mega dropdown item structure
interface SubItem {
  name: string
  href: string
  desc: string
  icon: React.ReactNode
}

interface NavSection {
  title: string
  icon: React.ReactNode
  items: SubItem[]
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(false)
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null)

  // Track scrolling to apply glassmorphism style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const servicesData: NavSection[] = [
    {
      title: "Corporate Info",
      icon: <Building2 className="size-5 text-primary" />,
      items: [
        { name: "Our History", href: "/our-history", desc: "Our heritage and vision since 1937", icon: <Info className="size-4" /> },
        { name: "Board of Directors", href: "/board-of-directors", desc: "Our leadership & administration team", icon: <Users className="size-4" /> },
        { name: "HO & Branches", href: "/branches", desc: "Find a branch or ATM near you", icon: <MapPin className="size-4" /> },
        { name: "Our Achievements", href: "/#achievements", desc: "Milestones and recognitions", icon: <Award className="size-4" /> },
        { name: "DEAF Account", href: "/#deaf", desc: "Depositor Education & Awareness Fund", icon: <ShieldCheck className="size-4" /> },
      ]
    },
    {
      title: "Facilities",
      icon: <Wallet className="size-5 text-primary" />,
      items: [
        { name: "Safe Deposit Locker", href: "/safe-deposit-locker", desc: "Keep your valuables safe and secure", icon: <KeyRound className="size-4" /> },
        { name: "RTGS / NEFT / IMPS", href: "/money-transfer", desc: "Quick and secure money transfers", icon: <ArrowLeftRight className="size-4" /> },
        { name: "Mobile Banking", href: "/mobile-banking", desc: "Bank on the go with our modern app", icon: <Smartphone className="size-4" /> },
        { name: "SMS Alerts", href: "/#sms-alerts", desc: "Real-time updates on your account", icon: <Bell className="size-4" /> },
        { name: "ATM / Micro ATM", href: "/#atm", desc: "24/7 card access and rural banking", icon: <CreditCard className="size-4" /> },
      ]
    },
    {
      title: "Loans",
      icon: <BadgePercent className="size-5 text-primary" />,
      items: [
        { name: "Gold Loan", href: "/gold-loan", desc: "Instant cash against gold ornaments", icon: <CoinsIcon className="size-4" /> },
        { name: "Personal Loan", href: "/personal-loan", desc: "Financial support for personal goals", icon: <Users className="size-4" /> },
        { name: "Home Loan", href: "/home-loan", desc: "Build or buy your dream home", icon: <Home className="size-4" /> },
        { name: "Vehicle Loan", href: "/#vehicle-loan", desc: "Easy funding for your new car or bike", icon: <Car className="size-4" /> },
        { name: "Business & Agri Loan", href: "/#business-loan", desc: "Support for trade, industry & farming", icon: <Briefcase className="size-4" /> },
      ]
    },
    {
      title: "Deposits",
      icon: <PiggyBank className="size-5 text-primary" />,
      items: [
        { name: "Savings Deposit", href: "/savings-deposit", desc: "Earn interest while keeping funds flexible", icon: <PiggyBank className="size-4" /> },
        { name: "Current Deposit", href: "/current-deposit", desc: "Designed for business cash flows", icon: <BarChart3 className="size-4" /> },
        { name: "Fixed Deposit", href: "/fixed-deposit", desc: "High yields for your locked funds", icon: <Landmark className="size-4" /> },
        { name: "Recurring Deposit", href: "/#recurring", desc: "Save systematically every month", icon: <Receipt className="size-4" /> },
        { name: "Reinvestment Schemes", href: "/#reinvestment", desc: "Maximize compound interest returns", icon: <Globe className="size-4" /> },
      ]
    },
    {
      title: "Chitty Schemes",
      icon: <CoinsIcon className="size-5 text-primary" />,
      items: [
        { name: "Gold Chitty", href: "/gold-chitty", desc: "Systematic gold savings for future needs", icon: <Award className="size-4" /> },
        { name: "Multi-Section Kuri", href: "/multi-section-kuri", desc: "Maximize your chances of winning draws", icon: <TrendingUp className="size-4" /> },
        { name: "Regular Savings Chitty", href: "/regular-chitty", desc: "Flexible bidding and regular dividends", icon: <PiggyBank className="size-4" /> },
        { name: "Chitty Loan / Advance", href: "/#chitty-loan", desc: "Instant bridge loans against deposits", icon: <Landmark className="size-4" /> },
        { name: "Special NRI Chitty", href: "/#nri-chitty", desc: "Exclusive chitty investment plans for NRIs", icon: <Globe className="size-4" /> },
      ]
    }
  ]

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#0b5c91] text-white text-xs py-1.5 px-4 hidden md:block border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><PhoneCall className="size-3" /> Head Office: +91 483 2762022</span>
            <span>|</span>
            <span>' ASCB - Banking since 1937 '</span>
          </div>
          <div className="flex gap-4 items-center">
            <a href="/branches" className="hover:text-sky-200 transition-colors">Locate Branches</a>
            <span>|</span>
            <a href="#charges" className="hover:text-sky-200 transition-colors">Service Charges</a>
            <span>|</span>
            <a href="#downloads" className="hover:text-sky-200 transition-colors">Downloads</a>
          </div>
        </div>
      </div>

      {/* Main Navbar  sticky with glassmorphism on scroll */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={`sticky top-0 z-50 transition-[background,box-shadow,padding] duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-100"
            : "bg-white py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative h-12 w-12 flex items-center justify-center overflow-hidden bg-slate-50 rounded-lg p-1 border border-slate-100">
                <img 
                  src="/ASCB-LOGO-Trans.png" 
                  alt="Ariyallur Service Co-operative Bank Logo" 
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
              <div>
                <span className="block font-extrabold text-[#0F7EC3] text-lg leading-tight tracking-tight group-hover:text-[#0b5c91] transition-colors">
                  ARIYALLUR
                </span>
                <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none mt-0.5">
                 Service Co-operative Bank Ltd
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1.5 font-medium text-slate-600 text-sm">
              <Link to="/" className="px-3 py-2 rounded-lg hover:text-[#0F7EC3] hover:bg-slate-50 transition-all">Home</Link>
              
              {/* Mega Dropdown Hover Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown(true)}
                onMouseLeave={() => setActiveDropdown(false)}
              >
                <button 
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all hover:text-[#0F7EC3] hover:bg-slate-50 cursor-pointer ${
                    activeDropdown ? "text-[#0F7EC3] bg-slate-50" : ""
                  }`}
                >
                  Products & Services
                  <ChevronDown className={`size-4 transition-transform duration-300 ${activeDropdown ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[1140px] z-50 pointer-events-auto"
                    >
                      {/* Arrow pointer */}
                      <div className="flex justify-center -mb-1">
                        <div className="w-3 h-3 bg-white border-l border-t border-slate-100 rotate-45 shadow-sm" />
                      </div>
                      <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                        {/* Dropdown Header bar */}
                        <div className="bg-linear-to-r from-[#0F7EC3]/5 via-sky-50 to-[#0F7EC3]/5 px-6 py-3 border-b border-slate-100 flex items-center gap-2">
                          <span className="text-[10px] font-extrabold text-[#0F7EC3] uppercase tracking-widest">Products & Services</span>
                          <span className="text-slate-300 text-xs">|</span>
                          <span className="text-[10px] text-slate-400 font-medium">Select a service category to explore</span>
                        </div>
                        <div className="grid grid-cols-5 p-5 gap-5">
                          {servicesData.map((section, idx) => (
                            <div key={idx} className="space-y-1">
                              {/* Category Header */}
                              <div className="flex items-center gap-2 pb-2 mb-2 border-b border-slate-100">
                                <span className="text-[#0F7EC3]">{section.icon}</span>
                                <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#0b5c91]">{section.title}</h4>
                              </div>
                              <ul className="space-y-0.5">
                                {section.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>
                                    <Link
                                      to={item.href}
                                      onClick={() => setActiveDropdown(false)}
                                      className="flex items-start gap-2.5 px-2 py-2 rounded-lg hover:bg-sky-50 transition-all group"
                                    >
                                      <div className="mt-0.5 text-slate-400 group-hover:text-[#0F7EC3] transition-colors shrink-0">
                                        {item.icon}
                                      </div>
                                      <div>
                                        <div className="font-semibold text-slate-700 text-xs group-hover:text-[#0F7EC3] transition-colors leading-snug">
                                          {item.name}
                                        </div>
                                        <div className="text-[10px] text-slate-400 font-normal mt-0.5 leading-normal">
                                          {item.desc}
                                        </div>
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        {/* Dropdown Footer CTA */}
                        <div className="px-6 py-3 bg-sky-50/60 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-[10px] text-slate-400 font-medium">Need help choosing a service?</span>
                          <a href="#contact" className="text-[10px] font-bold text-[#0F7EC3] hover:text-[#0b5c91] flex items-center gap-1 transition-colors">
                            Talk to an advisor -&gt;
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/branches" className="px-3 py-2 rounded-lg hover:text-[#0F7EC3] hover:bg-slate-50 transition-all">Our Branches</Link>
              <a href="/#news" className="px-3 py-2 rounded-lg hover:text-[#0F7EC3] hover:bg-slate-50 transition-all">News Room</a>
              <a href="/#downloads" className="px-3 py-2 rounded-lg hover:text-[#0F7EC3] hover:bg-slate-50 transition-all">Downloads</a>
              <a href="/#charges" className="px-3 py-2 rounded-lg hover:text-[#0F7EC3] hover:bg-slate-50 transition-all">Charges</a>
              <a href="/#contact" className="px-3 py-2 rounded-lg hover:text-[#0F7EC3] hover:bg-slate-50 transition-all">Contacts</a>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden xl:flex items-center gap-3">
              <a 
                href="#ebanking" 
                className="bg-linear-to-r from-[#0F7EC3] to-[#1A7CC1] hover:from-[#0b5c91] hover:to-[#0F7EC3] text-white px-5 py-2.5 rounded-xl font-semibold text-xs shadow-md shadow-sky-500/10 hover:shadow-sky-500/20 active:scale-[0.98] transition-all flex items-center gap-1.5"
              >
                <ShieldCheck className="size-4" /> Internet Banking
              </a>
            </div>

            {/* Hamburger Button (Mobile) */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-slate-100 text-slate-700 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40 xl:hidden"
            />

            {/* Menu Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring" as const, damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-[320px] bg-white z-50 shadow-2xl p-6 overflow-y-auto flex flex-col xl:hidden"
            >
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                  <img src="/ASCB-LOGO-Trans.png" alt="Logo" className="h-8 object-contain" />
                  <span className="font-extrabold text-[#0F7EC3] text-sm tracking-tight">ASCB Bank</span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors"
                >
                  <X className="size-5" />
                </button>
              </div>

              <div className="flex-1 py-4 space-y-2">
                <Link 
                  to="/" 
                  onClick={() => setIsOpen(false)} 
                  className="block px-3 py-2 rounded-lg text-slate-800 font-bold hover:bg-slate-50 hover:text-[#0F7EC3]"
                >
                  Home
                </Link>

                {/* Mobile Services Accordion */}
                <div className="space-y-1">
                  <button
                    onClick={() => setActiveMobileSection(activeMobileSection === "services" ? null : "services")}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-slate-800 font-bold hover:bg-slate-50 hover:text-[#0F7EC3]"
                  >
                    <span>Products & Services</span>
                    <ChevronDown className={`size-4 transition-transform duration-300 ${activeMobileSection === "services" ? "rotate-180 text-primary" : "text-slate-400"}`} />
                  </button>

                  <AnimatePresence>
                    {activeMobileSection === "services" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 border-l border-slate-100 space-y-2 mt-1"
                      >
                        {servicesData.map((section, idx) => (
                          <div key={idx} className="space-y-1 pt-2">
                            <h5 className="font-bold text-slate-400 text-[10px] tracking-widest uppercase px-3 py-1 flex items-center gap-1.5">
                              {section.icon} {section.title}
                            </h5>
                            {section.items.map((item, itemIdx) => (
                              <Link
                                key={itemIdx}
                                to={item.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-700 text-xs hover:bg-sky-50/70 hover:text-primary transition-all"
                              >
                                {item.icon}
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link 
                  to="/branches" 
                  onClick={() => setIsOpen(false)} 
                  className="block px-3 py-2 rounded-lg text-slate-800 font-bold hover:bg-slate-50 hover:text-[#0F7EC3]"
                >
                  Our Branches
                </Link>
                <a 
                  href="/#news" 
                  onClick={() => setIsOpen(false)} 
                  className="block px-3 py-2 rounded-lg text-slate-800 font-bold hover:bg-slate-50 hover:text-[#0F7EC3]"
                >
                  News Room
                </a>
                <a 
                  href="/#downloads" 
                  onClick={() => setIsOpen(false)} 
                  className="block px-3 py-2 rounded-lg text-slate-800 font-bold hover:bg-slate-50 hover:text-[#0F7EC3]"
                >
                  Downloads
                </a>
                <a 
                  href="/#charges" 
                  onClick={() => setIsOpen(false)} 
                  className="block px-3 py-2 rounded-lg text-slate-800 font-bold hover:bg-slate-50 hover:text-[#0F7EC3]"
                >
                  Charges
                </a>
                <a 
                  href="/#contact" 
                  onClick={() => setIsOpen(false)} 
                  className="block px-3 py-2 rounded-lg text-slate-800 font-bold hover:bg-slate-50 hover:text-[#0F7EC3]"
                >
                  Contacts
                </a>
              </div>

              <div className="pt-6 border-t border-slate-100 space-y-3 mt-auto">
                <a 
                  href="#ebanking"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-[#0F7EC3] text-white py-3 rounded-xl font-bold text-xs shadow-md shadow-sky-500/10 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5"
                >
                  <ShieldCheck className="size-4" /> Internet Banking
                </a>
                <div className="text-center text-[10px] text-slate-400 font-medium">
                  ' ASCB - Banking since 1937 '
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

// Simple placeholder icon wrapper for coins since standard Lucide has it as Coins
function CoinsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="8" cy="8" r="6" />
      <circle cx="18" cy="18" r="4" />
      <path d="M12 18a6 6 0 0 0-6-6" />
    </svg>
  )
}
