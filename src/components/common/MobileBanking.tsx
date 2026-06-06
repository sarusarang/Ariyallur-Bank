import { motion } from "framer-motion"
import { Smartphone, CheckCircle2 } from "lucide-react"

// Animation presets for scroll reveal
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
} as const

export default function MobileBanking() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden" id="mobile-banking">
      {/* Abstract Background Ring */}
      <div className="absolute -left-12 -bottom-12 w-64 h-64 border-12 border-white/5 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Mockup Column */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-5 hidden lg:flex justify-center"
          >
            {/* Premium Phone dashboard mockup */}
            <div className="w-64 h-[440px] bg-slate-950 border-8 border-slate-800 rounded-[36px] overflow-hidden shadow-2xl relative flex flex-col p-4 space-y-4">
              {/* Status Bar */}
              <div className="flex justify-between items-center text-[10px] text-slate-400 px-2 font-bold">
                <span>ASCB Pay</span>
                <span className="w-12 h-3 bg-slate-900 rounded-full border border-slate-800" />
              </div>

              {/* App Interface Mockup */}
              <div className="bg-sky-600 rounded-2xl p-4 text-white space-y-2 relative overflow-hidden shadow-md">
                <span className="text-[9px] uppercase tracking-wider block opacity-75">Instant Gold Loan Balance</span>
                <span className="text-xl font-extrabold block">1,50,000</span>
                <span className="text-[8px] block mt-4 bg-sky-700/60 w-fit px-2 py-0.5 rounded">Active Status</span>
              </div>

              <div className="flex-1 bg-slate-900 rounded-2xl p-4 space-y-3">
                <span className="text-[10px] font-bold text-slate-400 block uppercase">Quick Transfer</span>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-slate-950/60 p-2.5 rounded-xl text-center space-y-1 hover:bg-slate-950 transition-colors">
                    <span className="text-[8px] text-slate-400 block uppercase font-bold">RTGS</span>
                  </div>
                  <div className="bg-slate-950/60 p-2.5 rounded-xl text-center space-y-1 hover:bg-slate-950 transition-colors">
                    <span className="text-[8px] text-slate-400 block uppercase font-bold">NEFT</span>
                  </div>
                  <div className="bg-slate-950/60 p-2.5 rounded-xl text-center space-y-1 hover:bg-slate-950 transition-colors">
                    <span className="text-[8px] text-slate-400 block uppercase font-bold">IMPS</span>
                  </div>
                </div>

                {/* Visual Graph Card */}
                <div className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-3 flex justify-between items-center">
                  <div className="space-y-0.5">
                    <span className="text-[8px] text-slate-400 block uppercase">Monthly Saving</span>
                    <span className="text-xs font-bold text-emerald-400">+12.4%</span>
                  </div>
                  <div className="w-16 h-8 flex items-end gap-1 pb-1">
                    <div className="w-2.5 h-3 bg-sky-500/30 rounded-t" />
                    <div className="w-2.5 h-5 bg-sky-500/50 rounded-t" />
                    <div className="w-2.5 h-8 bg-sky-500 rounded-t" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Text Content Column */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-sky-300 font-bold text-xs uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 w-fit">
              <Smartphone className="size-3.5 text-sky-400" /> Digital Banking App
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Manage your money securely, anywhere in the world
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-semibold leading-relaxed">
              Download the MCUB Mobile app and carry your bank in your pocket.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
              Check balance statements, review pending interest cycles, transfer funds instantly through NEFT/RTGS, and block debit cards with one single click. Available for free download.
            </p>

            {/* Feature Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-sky-400 shrink-0" />
                <span>24/7 IMPS & NEFT Transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-sky-400 shrink-0" />
                <span>Real-time SMS Passbook Alert</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-sky-400 shrink-0" />
                <span>Mobile Recharge & Utility Pay</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-sky-400 shrink-0" />
                <span>Biometric Fingerprint Login</span>
              </div>
            </div>

            {/* Download buttons */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#play-store"
                className="bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all flex items-center gap-2 active:scale-[0.98]"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-5 object-contain" />
                Google Play
              </a>
              <a
                href="#app-store"
                className="bg-slate-800 text-white hover:bg-slate-750 border border-slate-700 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all flex items-center gap-2 active:scale-[0.98]"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-5 object-contain filter invert" />
                App Store
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
