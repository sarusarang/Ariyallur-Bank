import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Award, Landmark } from "lucide-react"

// Animation presets for scroll reveal
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
} as const

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const statItems = [
  { label: "Years of Financial Trust", value: "89+", desc: "Serving generations since 1937" },
  { label: "Satisfied Customers", value: "100k+", desc: "Trusted by families and local businesses" },
  { label: "Audit Classification", value: "Class A", desc: "Top-tier credit compliance rating" },
  { label: "Core Deposit Security", value: "100%", desc: "DICGC insured up to ₹5 Lakhs" }
]

export default function WelcomeSection() {
  return (
    <section className="py-16 border-b-3 border-dashed border-gray-200 sm:py-20 relative overflow-hidden bg-linear-to-br from-sky-50 via-white to-[#e8f4fd]" id="about">
      {/* Subtle decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#0F7EC3]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-100/60 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content Column */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-[#0F7EC3] font-bold text-xs uppercase tracking-widest bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 flex items-center gap-1.5 w-fit">
              <Sparkles className="size-3.5 text-[#0F7EC3]" /> Welcome to ASCB Bank
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Pioneering financial stability & cooperative growth in Ariyallur
            </h2>

            <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
              Welcome to Ariyallur Service Co-operative Bank Ltd. — where your goals meet our commitment.
            </p>

            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
              For nearly nine decades, we have remained devoted to building prosperity for individuals, small traders, farmers, and entrepreneurs. Our cooperative structure means we prioritize customer values over pure commercial profits, delivering premium digital infrastructure alongside friendly, personalized services.
            </p>

            {/* Stats Summary Panel */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex gap-3 items-start">
                <div className="p-2 bg-sky-50 rounded-lg text-primary shrink-0"><Award className="size-5" /></div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm">Recognized Stability</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-normal">Consistent high ratings in financial compliance audits.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="p-2 bg-sky-50 rounded-lg text-primary shrink-0"><Landmark className="size-5" /></div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm">Local Heritage</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-normal">Deeply embedded in the growth and trade of Manjeri.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#quick-links"
                className="inline-flex items-center gap-1.5 bg-[#0F7EC3] hover:bg-[#0b5c91] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md shadow-sky-500/10 active:scale-[0.98] transition-all"
              >
                Our Banking Portals <ArrowRight className="size-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Visual Stats Column */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {statItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-center flex flex-col justify-center space-y-2 hover:shadow-md hover:bg-white transition-all duration-300"
              >
                <span className="block text-3xl font-extrabold text-[#0F7EC3] font-mono leading-none">{item.value}</span>
                <span className="block text-slate-800 font-bold text-xs uppercase tracking-wide">{item.label}</span>
                <span className="block text-[10px] text-slate-400 leading-normal font-medium">{item.desc}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
