import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowLeft, ArrowRight, Shield, ShieldCheck, 
  Coins, Clock, Sparkles, CheckCircle2, ChevronRight 
} from "lucide-react"

interface Slide {
  id: number
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaLink: string
  badgeText: string
  colorTheme: string
  // Renders a custom visual component instead of standard image for a premium look
  renderVisual: () => React.ReactNode
}

export default function HomeSlider() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right
  const timerRef = useRef<any>(null)

  const slides: Slide[] = [
    {
      id: 1,
      badgeText: "LEGACY OF TRUST SINCE 1937",
      title: "Secure Banking built on Decades of Trust",
      subtitle: "Join over 100,000+ satisfied members who call us their financial home.",
      description: "As one of Kerala's oldest and most reliable co-operative urban banks, we offer secure deposits, competitive interest rates, and tailored financial guidance.",
      ctaText: "Explore Accounts",
      ctaLink: "#savings",
      colorTheme: "from-[#081f37] to-[#0d3b66]",
      renderVisual: () => (
        <div className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center">
          {/* Legacy Gold Shield */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="relative z-10 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-amber-400 via-yellow-200 to-amber-600 rounded-full flex items-center justify-center p-3 shadow-2xl shadow-yellow-500/20"
          >
            <div className="bg-[#0b1623] w-full h-full rounded-full flex flex-col items-center justify-center p-6 text-center border border-amber-400/40">
              <Shield className="size-16 md:size-20 text-amber-400 mb-4 animate-pulse" />
              <span className="text-amber-400 font-extrabold text-2xl md:text-3xl leading-none">89+</span>
              <span className="text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-widest mt-1">Years of Trust</span>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] text-slate-300 w-3/4">
                Serving generations since 1937
              </div>
            </div>
          </motion.div>
          {/* Decorative floating grids */}
          <div className="absolute top-1/4 left-1/4 w-12 h-12 border border-sky-500/30 rounded-lg animate-bounce duration-[4s]" />
          <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-sky-500/10 rounded-full animate-ping duration-[3s]" />
        </div>
      )
    },
    {
      id: 2,
      badgeText: "INSTANT GOLD LOANS",
      title: "Unlock the value of your gold in minutes",
      subtitle: "Quick approvals, competitive rates, and completely secure lockers.",
      description: "Get immediate financial support against your gold ornaments. Our simplified documentation and transparent evaluation ensure you walk out with cash in no time.",
      ctaText: "Calculate Gold Loan",
      ctaLink: "#gold-loan",
      colorTheme: "from-[#0A3D62] to-[#0F7EC3]",
      renderVisual: () => (
        <div className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center">
          {/* Floating Gold Coin and Lockbox Graphics */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative z-10 w-72 h-48 md:w-80 md:h-52 bg-gradient-to-br from-[#1e293b]/90 to-[#0f172a]/95 border border-slate-700/50 rounded-2xl p-6 shadow-2xl flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest">MCUB Gold Shield</span>
                <span className="text-white font-extrabold text-sm md:text-base">Instant Gold Loan Card</span>
              </div>
              <Coins className="size-8 text-yellow-500" />
            </div>
            
            <div className="space-y-2">
              <span className="block text-2xl font-mono text-slate-200 tracking-wider">•••• •••• •••• 1937</span>
              <div className="flex justify-between items-center text-[10px] text-slate-400 uppercase">
                <span>Interest: Low Rates</span>
                <span className="bg-yellow-500/10 text-yellow-500 font-bold px-2 py-0.5 rounded">Quick Approval</span>
              </div>
            </div>
          </motion.div>

          {/* Floating extra coins */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-1/4 right-[15%] z-20 bg-gradient-to-br from-yellow-300 to-amber-500 p-3 rounded-full shadow-lg"
          >
            <Coins className="size-6 text-[#0b1623]" />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-1/4 left-[15%] z-20 bg-slate-800 p-2.5 rounded-xl border border-slate-700 shadow-md flex items-center gap-2"
          >
            <Clock className="size-4 text-[#0F7EC3]" />
            <span className="text-[10px] font-bold text-white uppercase">10 Min Approval</span>
          </motion.div>
        </div>
      )
    },
    {
      id: 3,
      badgeText: "SMART DIGITAL BANKING",
      title: "Hassle-free digital banking on your phone",
      subtitle: "Secure money transfers with RTGS, NEFT, IMPS & UPI.",
      description: "Manage your accounts, transfer funds instantly, and monitor your savings 24/7. Our advanced digital infrastructure guarantees reliable and safe banking at your fingertips.",
      ctaText: "Get Mobile App",
      ctaLink: "#mobile-banking",
      colorTheme: "from-[#091E3A] to-[#2E86AB]",
      renderVisual: () => (
        <div className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center">
          {/* Smartphone Dashboard Representation */}
          <motion.div 
            initial={{ rotate: -5, scale: 0.9, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="w-56 h-[300px] md:w-64 md:h-[350px] bg-slate-900 border-[6px] border-slate-800 rounded-[32px] overflow-hidden shadow-2xl relative flex flex-col"
          >
            {/* Phone Screen Header */}
            <div className="bg-slate-950 p-3 pt-6 pb-2.5 border-b border-slate-800 flex justify-between items-center text-white text-[10px] font-bold">
              <span>MCUB Mobile</span>
              <div className="w-16 h-3.5 bg-slate-900 rounded-full flex items-center justify-center p-0.5 border border-slate-800">
                <div className="w-2 h-2 bg-slate-800 rounded-full" />
              </div>
            </div>

            {/* Phone Screen Body */}
            <div className="flex-1 p-3 space-y-3 bg-slate-950 text-slate-300">
              {/* Account Balance Card */}
              <div className="bg-gradient-to-r from-sky-600 to-sky-700 rounded-xl p-3 text-white space-y-1.5 shadow-md">
                <span className="text-[9px] uppercase tracking-wide text-sky-200">Available Balance</span>
                <span className="text-base font-extrabold block">₹4,89,520.00</span>
                <span className="text-[8px] text-sky-100 block opacity-80">Savings: *1937</span>
              </div>

              {/* Transactions list */}
              <div className="space-y-1.5">
                <span className="text-[9px] uppercase font-bold text-slate-500 block">Recent Transactions</span>
                <div className="bg-slate-900/60 p-2 rounded-lg flex justify-between items-center text-[10px]">
                  <div className="flex items-center gap-1.5">
                    <div className="p-1 bg-green-500/10 rounded text-green-500"><CheckCircle2 className="size-3" /></div>
                    <span>IMPS Transfer</span>
                  </div>
                  <span className="font-semibold text-green-400">+₹15,000.00</span>
                </div>
                <div className="bg-slate-900/60 p-2 rounded-lg flex justify-between items-center text-[10px]">
                  <div className="flex items-center gap-1.5">
                    <div className="p-1 bg-sky-500/10 rounded text-[#0F7EC3]"><CheckCircle2 className="size-3" /></div>
                    <span>Mobile Recharge</span>
                  </div>
                  <span className="font-semibold text-slate-300">-₹499.00</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sparkle badge floating */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute top-1/3 left-10 z-20 bg-gradient-to-tr from-sky-400 to-[#0F7EC3] text-white p-2.5 rounded-full shadow-lg"
          >
            <Sparkles className="size-5" />
          </motion.div>
        </div>
      )
    }
  ]

  const handleNext = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const startTimer = () => {
    stopTimer()
    timerRef.current = setInterval(() => {
      handleNext()
    }, 6000)
  }

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
  }

  useEffect(() => {
    startTimer()
    return () => stopTimer()
  }, [])

  // Framer Motion transition variables
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0
    })
  }

  return (
    <section 
      className="relative overflow-hidden w-full min-h-[520px] md:min-h-[580px] lg:min-h-[640px] flex items-center text-white"
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
    >
      {/* Background slide wrapper */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[current].colorTheme} flex items-center`}
        >
          {/* Subtle Grid overlay for high premium appearance */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-10">
            {/* Text Overlay Column */}
            <div className="space-y-6">
              <motion.span 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sky-200 border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-widest"
              >
                <ShieldCheck className="size-3.5 text-sky-400" />
                {slides[current].badgeText}
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight"
              >
                {slides[current].title}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-sm md:text-base text-slate-300 font-semibold"
              >
                {slides[current].subtitle}
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-xl font-normal"
              >
                {slides[current].description}
              </motion.p>

              {/* CTA button */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="pt-4 flex flex-wrap gap-4"
              >
                <a 
                  href={slides[current].ctaLink} 
                  className="px-6 py-3 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-500 hover:to-amber-500 text-slate-900 font-bold text-xs md:text-sm rounded-xl shadow-lg shadow-yellow-500/10 active:scale-[0.98] transition-all flex items-center gap-1.5 group"
                >
                  {slides[current].ctaText}
                  <ChevronRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs md:text-sm rounded-xl transition-all"
                >
                  Contact Officer
                </a>
              </motion.div>
            </div>

            {/* Animated Interactive Visual Column */}
            <div className="hidden lg:block relative">
              {slides[current].renderVisual()}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Manual Slider Navigation Arrows */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-3">
        <button
          onClick={handlePrev}
          className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-900/40 hover:bg-slate-900/60 border border-white/10 flex items-center justify-center text-white backdrop-blur-sm transition-all active:scale-95"
          aria-label="Previous slide"
        >
          <ArrowLeft className="size-4 md:size-5" />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-900/40 hover:bg-slate-900/60 border border-white/10 flex items-center justify-center text-white backdrop-blur-sm transition-all active:scale-95"
          aria-label="Next slide"
        >
          <ArrowRight className="size-4 md:size-5" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > current ? 1 : -1)
              setCurrent(idx)
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === current ? "w-8 bg-yellow-400" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
