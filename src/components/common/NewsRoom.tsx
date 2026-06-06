import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Megaphone, ChevronRight, Clock,
  ArrowRight, Users, Award, ShieldCheck, MapPin
} from "lucide-react"

interface Announcement {
  id: number
  date: string
  tag: string
  title: string
  content: string
  isUrgent: boolean
}

export default function NewsRoom() {
  const [activeNewsIdx, setActiveNewsIdx] = useState(0)

  const newsList: Announcement[] = [
    {
      id: 1,
      date: "June 05, 2026",
      tag: "RBI Guideline",
      title: "Positive Pay System (PPS) Implementation",
      content: "As per RBI guidelines regarding Positive Pay System, customers are advised to submit minimum information about their cheque issuance (Cheque number, date, payee name, amount) for amounts above 50,000/-. This ensures protection against cheque counterfeiting and alterations.",
      isUrgent: true
    },
    {
      id: 2,
      date: "May 28, 2026",
      tag: "Interest Rates",
      title: "Revision in Fixed Deposit Interest Rates",
      content: "We are pleased to announce a revision in our Fixed Deposit interest rates. Senior citizens receive an additional 0.50% interest p.a. on all domestic term deposits of 1 year and above. Visit your nearest branch or service portal for detailed charts.",
      isUrgent: false
    },
    {
      id: 3,
      date: "May 15, 2026",
      tag: "Alert",
      title: "Safe Banking Advisory regarding Cyber Security",
      content: "MCUBank never requests account passwords, PIN numbers, OTP codes, or card details over the phone, email, or SMS. Please do not share sensitive credentials with anyone. Report suspicious communications to support@manjeribank.com.",
      isUrgent: true
    }
  ]

  // Auto fader for news ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNewsIdx((prev) => (prev + 1) % newsList.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [newsList.length])

  const administrationLinks = [
    { name: "Board of Directors", desc: "Governance and strategic decision makers", icon: <Users className="size-4 text-sky-500" />, href: "#board" },
    { name: "HO & Branch Network", desc: "Branch locations and ATM directory", icon: <MapPin className="size-4 text-emerald-500" />, href: "#branches" },
    { name: "Key Milestones", desc: "Our history of success and honors", icon: <Award className="size-4 text-amber-500" />, href: "#achievements" },
    { name: "Unclaimed Deposits (DEAF)", desc: "Depositor Education and Awareness Fund details", icon: <ShieldCheck className="size-4 text-indigo-500" />, href: "#deaf" },
  ]

  return (
    <section className="py-20 bg-slate-50/50" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Column 1: News Room Ticker (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Megaphone className="size-5 text-[#0F7EC3] animate-bounce" />
                <h3 className="font-extrabold text-slate-800 text-lg sm:text-xl tracking-tight">
                  News & Announcements
                </h3>
              </div>
              <div className="flex gap-1.5">
                {newsList.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveNewsIdx(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === activeNewsIdx ? "w-6 bg-[#0F7EC3]" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to announcement ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Fading News Container */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 min-h-[300px] flex flex-col justify-between shadow-sm relative overflow-hidden">
              {/* Card visual elements */}
              <div className="absolute right-0 top-0 w-24 h-24 bg-linear-to-bl from-sky-50 to-transparent rounded-bl-full" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNewsIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 relative z-10"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                      <Clock className="size-3" /> {newsList[activeNewsIdx].date}
                    </span>
                    <span className={`text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                      newsList[activeNewsIdx].isUrgent
                        ? "bg-red-50 text-red-500 border border-red-100"
                        : "bg-sky-50 text-primary border border-sky-100"
                    }`}>
                      {newsList[activeNewsIdx].tag}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-slate-800 text-lg md:text-xl leading-snug">
                    {newsList[activeNewsIdx].title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                    {newsList[activeNewsIdx].content}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Action and Disclaimer */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap justify-between items-center gap-4 relative z-10">
                <span className="text-[10px] text-slate-400 font-medium">
                  *Last updated: Today
                </span>
                <a 
                  href="#announcements" 
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0F7EC3] hover:text-primary transition-all group"
                >
                  <span>View All Updates</span>
                  <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Governance & Support Links (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-extrabold text-slate-800 text-lg sm:text-xl tracking-tight pb-4 border-b border-slate-200">
              Corporate Desk
            </h3>

            <div className="space-y-3">
              {administrationLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-200 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                      {link.icon}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-800 text-xs sm:text-sm group-hover:text-primary transition-colors">
                        {link.name}
                      </h4>
                      <p className="text-[10px] text-slate-400 font-medium mt-0.5 leading-normal">
                        {link.desc}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="size-4 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </a>
              ))}
            </div>

            {/* Quick Contact Card */}
            <div className="bg-linear-to-br from-[#0A3D62] to-[#0F7EC3] text-white rounded-3xl p-6 space-y-4 relative overflow-hidden shadow-lg shadow-sky-500/10">
              <div className="relative z-10 space-y-1">
                <span className="text-sky-200 font-bold text-[10px] uppercase tracking-widest block">Need Assistance?</span>
                <h4 className="font-extrabold text-sm sm:text-base text-white">Dedicated Support Lines</h4>
              </div>

              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="space-y-1">
                  <span className="text-[9px] text-sky-200 uppercase tracking-wider block">Head Office Phone</span>
                  <a href="tel:+914832762022" className="font-extrabold text-xs sm:text-sm hover:underline font-mono block">
                    +91 483 2762022
                  </a>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] text-sky-200 uppercase tracking-wider block">Direct support email</span>
                  <a href="mailto:support@manjeribank.com" className="font-extrabold text-[10px] sm:text-xs hover:underline block truncate">
                    support@manjeribank.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
