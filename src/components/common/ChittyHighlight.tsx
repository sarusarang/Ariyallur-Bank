import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Coins, Award, PiggyBank, ArrowRight, ShieldCheck, CheckCircle } from "lucide-react"

export default function ChittyHighlight() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 90, damping: 15 } }
  }

  const chittySchemes = [
    {
      title: "Gold Chitty Schemes",
      desc: "Save systematically and receive prize disbursements in physical gold ornaments or cash. Designed for jewelry accumulation.",
      icon: <Coins className="size-6 text-amber-500" />,
      href: "/gold-chitty",
      color: "amber",
      themeClasses: "border-amber-100 hover:border-amber-300 hover:shadow-amber-500/5 hover:shadow-md",
      btnClass: "bg-amber-50 text-amber-700 hover:bg-amber-600 hover:text-white hover:border-amber-600",
      features: ["BIS 916 Hallmarked Purity", "Dividend offset installments", "Jeweler partner waivers"]
    },
    {
      title: "Multi-Section Kuri",
      desc: "Get 4 winning chances every month! Highly optimized scheme combining 1 lottery draw and 3 competitive discount auctions.",
      icon: <Award className="size-6 text-teal-500" />,
      href: "/multi-section-kuri",
      color: "teal",
      themeClasses: "border-teal-100 hover:border-teal-300 hover:shadow-teal-500/5 hover:shadow-md",
      btnClass: "bg-teal-50 text-teal-700 hover:bg-teal-600 hover:text-white hover:border-teal-600",
      features: ["4 Draws per month", "4x shorter waiting times", "Pooled dividend distributions"]
    },
    {
      title: "Regular Savings Chitty",
      desc: "Our classic financial saving model. Earn attractive dividends month-on-month and bid systematically for immediate credit.",
      icon: <PiggyBank className="size-6 text-indigo-500" />,
      href: "/regular-chitty",
      color: "indigo",
      themeClasses: "border-indigo-100 hover:border-indigo-300 hover:shadow-indigo-500/5 hover:shadow-md",
      btnClass: "bg-indigo-50 text-indigo-700 hover:bg-indigo-600 hover:text-white hover:border-indigo-600",
      features: ["Installments from 1,000", "State government audited", "Flexible credit payout options"]
    }
  ]

  return (
    <section className="py-20 bg-linear-to-br from-slate-50 via-white to-sky-50/30 border-b border-slate-100 relative overflow-hidden" id="chitty-highlight">
      {/* Decorative Blur Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0F7EC3] font-bold text-xs uppercase tracking-widest bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 flex items-center gap-1.5 w-fit mx-auto">
            <ShieldCheck className="size-4 text-[#0F7EC3]" /> Government Registered Chitties
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 leading-tight">
            Flexible savings and credit combined: ASCB Chitties
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-3 font-normal leading-relaxed">
            Chitti is the ultimate smart-saver scheme in cooperative banking. Benefit from monthly auction dividends that offset your installments, or bid early to access immediate lump-sum capital.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {chittySchemes.map((scheme, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={`bg-white border ${scheme.themeClasses} rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs transition-all duration-300 group`}
            >
              <div className="space-y-6">
                {/* Header Icon & Title */}
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:rotate-2 duration-300">
                    {scheme.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-full">
                    Kuri Act Compliant
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-extrabold text-slate-800 text-lg group-hover:text-primary transition-colors">
                    {scheme.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                    {scheme.desc}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-2 pt-2 border-t border-slate-50">
                  {scheme.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-xs text-slate-600 font-normal">
                      <CheckCircle className="size-3.5 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="mt-8">
                <Link
                  to={scheme.href}
                  className={`w-full text-center border border-slate-200 block font-bold text-xs py-3 rounded-xl transition-all duration-200 ${scheme.btnClass}`}
                >
                  Explore Scheme Details
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom trust bar */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-extrabold text-base">Not sure which Chitty scheme fits your goal?</h4>
            <p className="text-slate-400 text-xs font-normal">
              Our cooperative bank representatives will help you analyze the best options based on your cashflow.
            </p>
          </div>
          <div>
            <a
              href="tel:+914832762022"
              className="inline-flex items-center gap-1.5 bg-[#0F7EC3] hover:bg-[#0b5c91] text-white px-5 py-3 rounded-xl font-bold text-xs shadow-md transition-all active:scale-[0.98]"
            >
              Talk to Chitty Advisor <ArrowRight className="size-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
