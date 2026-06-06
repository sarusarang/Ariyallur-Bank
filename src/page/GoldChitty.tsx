import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import PageBanner from "../components/common/PageBanner"
import { ServiceImageShowcase } from "../components/common/ServicePageParts"
import { 
  ShieldCheck, Sparkles, CheckCircle2, ChevronDown, 
  HelpCircle, Scale, Coins, ShoppingBag, Info
} from "lucide-react"

export default function GoldChitty() {
  // Calculator state
  const [installment, setInstallment] = useState<number>(5000)
  const [tenure, setTenure] = useState<number>(40)
  const [goldRate, setGoldRate] = useState<number>(7200) // current assumed rate per gram

  // FAQs state
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const schemeOptions = [
    {
      title: "ASCB Swarna Varsha Chitty",
      value: "Rs. 1,00,000",
      installment: "Rs. 2,500 / month",
      tenure: "40 Months",
      goldEquivalent: "~13.88 grams",
      desc: "Perfect for budget-conscious members planning future gold purchases or children's weddings.",
      benefits: [
        "Dividends shared monthly",
        "Disbursement in physical gold or cash",
        "Lower bidding thresholds",
        "Free locker discount of 25%"
      ]
    },
    {
      title: "ASCB Sovereign Gold Chitty",
      value: "Rs. 2,00,000",
      installment: "Rs. 5,000 / month",
      tenure: "40 Months",
      goldEquivalent: "~27.77 grams",
      desc: "Designed for intermediate savings, providing a solid lump-sum weight of gold upon completion.",
      benefits: [
        "Average monthly installment of Rs. 4,400 due to dividends",
        "Prized money can be used immediately after auction",
        "Option to buy gold from partner jewelers with zero making charges",
        "Free safe locker discount of 50%"
      ]
    },
    {
      title: "ASCB Imperial Swarna Kuri",
      value: "Rs. 5,00,000",
      installment: "Rs. 12,500 / month",
      tenure: "40 Months",
      goldEquivalent: "~69.44 grams",
      desc: "A premium scheme for high-yield savings and large-scale gold accumulation, offering VIP banking support.",
      benefits: [
        "Priority bidding approval",
        "Dedicated relationship manager",
        "Complimentary safe deposit locker for 3 years",
        "Zero gold testing fees"
      ]
    }
  ]

  const benefits = [
    { icon: <ShieldCheck className="size-6 text-amber-500" />, title: "Government Approved", desc: "Registered and audited by the Registrar of Chitties, Govt. of Kerala." },
    { icon: <Scale className="size-6 text-emerald-500" />, title: "Hallmarked Assurance", desc: "Withdrawals converted to gold are guaranteed 916 BIS Hallmark purity." },
    { icon: <Coins className="size-6 text-yellow-500" />, title: "Dividend Savings", desc: "Save up to 15% on total installments through monthly auction dividends." },
    { icon: <ShoppingBag className="size-6 text-rose-500" />, title: "Jewelry Partner Tie-ups", desc: "Redeem prize funds at partner outlets with waiver on making charges." }
  ]

  const faqs = [
    {
      q: "How does a Gold Chitty differ from a regular cash chitty?",
      a: "A Gold Chitty operates similarly in terms of bidding, but the prize money is linked to gold value or physical gold. At the time of winning, you can choose to take delivery of physical 916 BIS hallmarked gold coins/ornaments, or receive the cash equivalent of the gold price on that day. You also receive exclusive discounts at partner jewelers."
    },
    {
      q: "What is the average dividend and how does it reduce my monthly payment?",
      a: "When a subscriber bids for the chitty at a discount, the foregone amount (minus the bank's 5% commission) is distributed equally among all subscribers as dividend. This dividend is deducted from your next month's installment, meaning you pay less than the face-value installment (for example, paying Rs. 4,200 instead of Rs. 5,000)."
    },
    {
      q: "Can I bid for the gold chitty in the very first month?",
      a: "The first month's installment is always paid in full, and the draw is determined by a lot. Active bidding starts from the second month onwards. Subscribers who need urgent gold or funds can bid up to the maximum allowable discount limit (usually 30% or 40% depending on government rules)."
    },
    {
      q: "What security do I need to submit to receive the prized gold?",
      a: "To withdraw the prized gold or cash before completing all installments, you need to provide security to safeguard the remaining future installments. Accepted securities include land property, fixed deposits with ASCB, gold pledges, or personal guarantees from salaried employees."
    }
  ]

  // Calculator computations
  const totalValue = installment * tenure
  const avgDividendRate = 0.12 // assumed average dividend savings of 12%
  const estimatedNetPaid = totalValue * (1 - avgDividendRate)
  const estGoldGrams = totalValue / goldRate

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }
  const cardItem = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 90 } } }

  return (
    <div className="bg-slate-50/50 min-h-screen pb-16">
      <PageBanner
        title="Gold Chitty Schemes"
        subtitle="The smartest way to plan your gold purchases. Save systematically, earn monthly dividends, and take home physical 916 hallmarked gold or cash."
        category="Chitty Schemes"
        bgGradient="from-amber-600 via-yellow-500 to-amber-700"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        <ServiceImageShowcase
          badge="Gold savings"
          title="Plan future gold needs with disciplined monthly savings"
          subtitle="Gold chitty schemes help members save systematically, participate in monthly draws, and receive funds or gold value support for weddings, purchases, and family goals."
          image="/branch_hq.png"
          imageAlt="ASCB branch for gold chitty services"
          imageLabel="Gold chitty enrollment desk"
          points={[
            "Gold-linked savings discipline",
            "Monthly dividend benefit",
            "Physical gold or cash equivalent options",
            "Branch guidance for enrollment and security"
          ]}
          stats={[
            { value: "40m", label: "Tenure" },
            { value: "916", label: "Hallmark" },
            { value: "3", label: "Batches" }
          ]}
          accentClass="text-amber-600"
          accentBgClass="bg-amber-600"
        />
        
        {/* Section 1: Active Gold Chitty Schemes */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-amber-600 font-extrabold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1.5 rounded-full border border-amber-100">
              Active Batches
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">Explore Our Swarna Chitties</h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2 font-normal">
              Select a gold chitty batch tailored to your savings speed. Limited seats available in upcoming drafts.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {schemeOptions.map((scheme, i) => (
              <motion.div
                key={i}
                variants={cardItem}
                whileHover={{ y: -6 }}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/5 border-b border-slate-100 px-6 pt-6 pb-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest">Swarna Chit</span>
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full">{scheme.tenure}</span>
                  </div>
                  <h3 className="font-extrabold text-slate-800 text-base">{scheme.title}</h3>
                  <div className="flex items-end gap-1.5 pt-1">
                    <span className="text-2xl font-black text-amber-600">{scheme.value}</span>
                    <span className="text-xs text-slate-400 mb-0.5">scheme value</span>
                  </div>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed">{scheme.desc}</p>
                </div>
                <div className="px-6 py-5 flex-1 space-y-4">
                  <div className="flex justify-between text-xs border-b border-slate-50 pb-2">
                    <span className="text-slate-400 font-semibold">Monthly Installment:</span>
                    <span className="font-bold text-slate-800">{scheme.installment}</span>
                  </div>
                  <div className="flex justify-between text-xs border-b border-slate-50 pb-2">
                    <span className="text-slate-400 font-semibold">Est. Gold equivalent:</span>
                    <span className="font-bold text-slate-800 flex items-center gap-1">
                      <Scale className="size-3.5 text-amber-500" /> {scheme.goldEquivalent}
                    </span>
                  </div>
                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Exclusive Benefits</span>
                    <ul className="space-y-1.5">
                      {scheme.benefits.map((b, bi) => (
                        <li key={bi} className="flex items-center gap-2 text-xs text-slate-600 font-normal">
                          <CheckCircle2 className="size-3.5 text-amber-500 shrink-0" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href="#register"
                    className="w-full text-center block bg-slate-50 border border-slate-200 hover:bg-amber-500 hover:text-white hover:border-amber-500 text-slate-700 font-bold text-xs py-3 rounded-xl transition-all duration-200"
                  >
                    Request Callback
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Section 2: Interactive Gold Purchase Planner */}
        <section className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[#0F7EC3] font-bold text-xs uppercase tracking-widest bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100">
                  Interactive tool
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-3">Swarna Varsha Calculator</h3>
                <p className="text-slate-500 text-xs mt-1.5 leading-relaxed font-normal">
                  Calculate how much gold weight you will collect or the estimated net amount you will spend after dividend reductions.
                </p>
              </div>

              {/* Monthly Installment Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 font-semibold">Monthly Installment:</span>
                  <span className="font-extrabold text-amber-600 text-sm">Rs. {installment.toLocaleString('en-IN')}</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="25000" 
                  step="500" 
                  value={installment} 
                  onChange={(e) => setInstallment(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>Rs. 1,000</span>
                  <span>Rs. 10,000</span>
                  <span>Rs. 25,000</span>
                </div>
              </div>

              {/* Tenure Selection */}
              <div className="space-y-2">
                <span className="text-slate-600 font-semibold text-xs block">Tenure (Months)</span>
                <div className="flex gap-4">
                  {[30, 40, 50].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTenure(t)}
                      className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                        tenure === t 
                          ? "bg-amber-500 border-amber-500 text-white shadow-md shadow-amber-500/20" 
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {t} Months
                    </button>
                  ))}
                </div>
              </div>

              {/* Gold Rate Input */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 font-semibold">Assumed Gold Rate (per gram):</span>
                  <span className="font-bold text-slate-800">Rs. {goldRate}</span>
                </div>
                <input 
                  type="number" 
                  value={goldRate}
                  onChange={(e) => setGoldRate(Math.max(1000, Number(e.target.value)))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-amber-500 font-semibold"
                />
              </div>
            </div>

            {/* Calculations Output Card */}
            <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
              {/* Decorative radial overlay */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#0F7EC3]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                <Coins className="size-5 text-amber-400" />
                <span className="text-xs font-extrabold tracking-wider uppercase text-amber-400">Estimated Returns</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Total Chitty Value</span>
                  <span className="block text-xl font-extrabold text-white mt-0.5">Rs. {totalValue.toLocaleString('en-IN')}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Gold Accumulation</span>
                  <span className="block text-xl font-extrabold text-amber-400 mt-0.5 flex items-center gap-1">
                    {estGoldGrams.toFixed(2)} <span className="text-xs text-slate-400 font-normal">grams</span>
                  </span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Face Value Invested:</span>
                  <span className="font-semibold text-white">Rs. {totalValue.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Avg. Dividend Saved (12%):</span>
                  <span className="font-semibold text-emerald-400">- Rs. {(totalValue * avgDividendRate).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-xs border-t border-white/10 pt-2 font-bold">
                  <span className="text-white">Est. Net Outflow Paid:</span>
                  <span className="text-amber-400">Rs. {estimatedNetPaid.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <p className="text-[10px] text-slate-400 leading-normal font-normal">
                * Note: Net outflow estimates are subject to variable bidding levels. Gold equivalency calculation is based on current input rate which fluctuates according to market standards.
              </p>
            </div>

          </div>
        </section>

        {/* Section 3: Benefits Grid */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Why Subscribe to ASCB Swarna Chitties?</h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2 font-normal">
              Combining the security of a government-registered chit fund with cooperative banking benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs space-y-4 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {b.icon}
                </div>
                <h3 className="font-bold text-slate-800 text-sm">{b.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Registration & KYC */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10" id="register">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Info className="size-5 text-[#0F7EC3]" />
              <h3 className="text-base font-extrabold text-slate-800">Enrollment KYC Documents</h3>
            </div>
            <ul className="space-y-3.5">
              {[
                "Aadhaar Card copy (for identity and state verification)",
                "PAN Card or Form 60 declaration",
                "Proof of bank account (cancelled cheque or first page of ASCB passbook)",
                "2 recent passport-size photographs",
                "Duly signed ASCB Chitty Enrollment Request and Rules handbook"
              ].map((doc, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 font-normal">
                  <CheckCircle2 className="size-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-700 to-yellow-800 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-3">
              <Sparkles className="size-8 text-amber-200" />
              <h3 className="text-xl font-extrabold">Secure your gold savings seat today</h3>
              <p className="text-amber-100 text-xs leading-relaxed font-normal">
                Batches are created monthly and fill up quickly. Get in touch with our chitty officers at the nearest branch or drop an inquiry to block your slot.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+914832762022"
                className="text-center bg-white text-amber-700 hover:bg-amber-50 font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-all active:scale-[0.98]"
              >
                Call Chitty Desk
              </a>
              <a
                href="#branches"
                className="text-center bg-transparent border border-white/30 text-white hover:bg-white/10 font-bold text-xs px-5 py-3 rounded-xl transition-all active:scale-[0.98]"
              >
                Locate Branch
              </a>
            </div>
          </div>
        </section>

        {/* Section 5: Collapsible FAQs */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <HelpCircle className="size-8 text-amber-500 mx-auto" />
            <h2 className="text-2xl font-extrabold text-slate-900 mt-2">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-xs mt-1">Everything you need to know about ASCB Swarna Chitties.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 text-xs sm:text-sm hover:text-amber-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`size-4 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-amber-500" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 pt-1 border-t border-slate-50 text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </section>

      </div>
    </div>
  )
}
