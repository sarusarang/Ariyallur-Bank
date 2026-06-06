import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import PageBanner from "../components/common/PageBanner"
import { ServiceImageShowcase } from "../components/common/ServicePageParts"
import { 
  CheckCircle2, ChevronDown, HelpCircle, Landmark, 
  Sparkles, DollarSign, ArrowRight
} from "lucide-react"

export default function RegularChitty() {
  const [chittyValue, setChittyValue] = useState<number>(200000)
  const [discountPercent, setDiscountPercent] = useState<number>(20)
  const [tenure, setTenure] = useState<number>(40)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const activeBatches = [
    { name: "Batch ASCB-R1", total: "Rs. 50,000", monthly: "Rs. 1,000", months: "50 Months", seats: "4 Seats Left", speed: "Economy Saver" },
    { name: "Batch ASCB-R3", total: "Rs. 2,00,000", monthly: "Rs. 5,000", months: "40 Months", seats: "2 Seats Left", speed: "Medium Growth" },
    { name: "Batch ASCB-R7", total: "Rs. 5,00,000", monthly: "Rs. 10,000", months: "50 Months", seats: "7 Seats Left", speed: "High Value" },
    { name: "Batch ASCB-R9", total: "Rs. 10,00,000", monthly: "Rs. 20,000", months: "50 Months", seats: "3 Seats Left", speed: "Premium Corporate" }
  ]

  const processSteps = [
    { title: "Monthly Installment", desc: "Every member pays their scheduled monthly installment in full by the due date." },
    { title: "Auction Day", desc: "On a set day each month, members who need immediate cash submit their bid discounts." },
    { title: "Prize Allocation", desc: "The member who offers the highest discount wins the draw and gets the prize money." },
    { title: "Dividend Shared", desc: "The bidded discount amount (minus 5% fee) is distributed equally among all members as dividend savings." }
  ]

  const faqs = [
    {
      q: "Who can enroll in a Regular Savings Chitty?",
      a: "Any resident citizen above 18 years of age can enroll. You need to become an associate member of the Ariyallur Service Co-operative Bank. The enrollment process is simple and requires basic KYC documentation."
    },
    {
      q: "What happens if there are no bidders in a particular month?",
      a: "If no subscriber submits a bid or requests an auction, a lottery draw (lot) is conducted among all eligible non-prized subscribers. The winner chosen by lot receives the prize money with only the minimum bank commission (5%) deducted."
    },
    {
      q: "How does the dividend reduce my monthly installment?",
      a: "For example, if the chitty group is Rs. 5,00,000 with 50 members (Rs. 10,000/month installment) and a member bids at a Rs. 1,00,000 discount. After deducting the bank's 5% commission (Rs. 25,000), the remaining Rs. 75,000 is divided among all 50 members. Each member gets a Rs. 1,500 dividend, meaning next month they pay only Rs. 8,500."
    },
    {
      q: "What happens if I delay my monthly installment payment?",
      a: "Timely payment is critical to participate in auctions. If you delay your payment, you will lose the dividend benefit for that month and will have to pay the full installment amount along with a nominal default interest rate. You will also be barred from bidding in the auction."
    }
  ]

  // Calculator logic
  const commission = chittyValue * 0.05
  const discountVal = chittyValue * (discountPercent / 100)
  const prizeMoney = chittyValue - discountVal - commission
  
  // In standard practice, bidding discount is the dividend pool. 
  // Let's assume the full discount minus bank commission is distributed (some systems distribute full discount minus 5% chitty value fee)
  // Let's define the dividend pool as discount minus bank commission (capped) or just standard dividend rules:
  // Dividend per member = (discount - commission) / members
  const memberCount = tenure
  const dividendPerMember = Math.max(0, (discountVal - commission) / memberCount)
  const baseMonthly = chittyValue / tenure
  const nextPayment = Math.max(0, baseMonthly - dividendPerMember)

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }
  const item = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }

  return (
    <div className="bg-slate-50/50 min-h-screen pb-16">
      <PageBanner
        title="Regular Savings Chitty"
        subtitle="The classic dual savings and credit instrument. Save systematically every month, earn regular dividends, and bid for prize funds to meet immediate expenses."
        category="Chitty Schemes"
        bgGradient="from-indigo-600 via-blue-500 to-sky-600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        <ServiceImageShowcase
          badge="Systematic savings"
          title="Save monthly, earn dividends, and bid when you need funds"
          subtitle="Regular savings chitty blends disciplined saving with flexible access to prize funds through transparent monthly auctions and dividend sharing."
          image="/branch_hq.png"
          imageAlt="ASCB branch for regular chitty services"
          imageLabel="Regular chitty enrollment desk"
          points={[
            "Multiple batch sizes",
            "Monthly auction participation",
            "Dividend benefit after bidding",
            "Security support for prize release"
          ]}
          stats={[
            { value: "50m", label: "Popular tenure" },
            { value: "30%", label: "Bid cap" },
            { value: "4", label: "Open batches" }
          ]}
          accentClass="text-indigo-600"
          accentBgClass="bg-indigo-600"
        />
        
        {/* Section 1: Active & Running Chitties */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-indigo-600 font-extrabold text-xs uppercase tracking-widest bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100">
              Open Enlistments
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">Active & Upcoming Chitty Batches</h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2 font-normal">
              Review our active chitty batches. Contact us today to secure one of the remaining vacant seats before bidding starts.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {activeBatches.map((batch, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{batch.speed}</span>
                    <span className="bg-indigo-50 text-indigo-700 text-[9px] font-extrabold px-2 py-0.5 rounded-full border border-indigo-100">{batch.seats}</span>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-sm">{batch.name}</h3>
                    <div className="flex items-end gap-1 mt-1">
                      <span className="text-2xl font-black text-indigo-600">{batch.total}</span>
                      <span className="text-[10px] text-slate-400 mb-0.5">value</span>
                    </div>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-slate-500">
                      <span>Monthly Installment:</span>
                      <span className="font-bold text-slate-800">{batch.monthly}</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Duration:</span>
                      <span className="font-bold text-slate-800">{batch.months}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-50">
                  <a
                    href="#calculator"
                    className="w-full text-center block bg-slate-50 border border-slate-100 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 text-slate-700 font-bold text-xs py-2 rounded-lg transition-colors"
                  >
                    Calculate Bids
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Section 2: Interactive Bidding & Dividend Calculator */}
        <section className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8" id="calculator">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100">
                  Interactive tool
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-3">Chitty Bidding Calculator</h3>
                <p className="text-slate-500 text-xs mt-1.5 leading-relaxed font-normal">
                  Simulate the bidding auction of your chitty. Adjust the chitty value, duration, and target auction bid discount percentage to see estimated payouts.
                </p>
              </div>

              {/* Chitty Value Selector */}
              <div className="space-y-2">
                <span className="text-slate-600 font-semibold text-xs block">Chitty Denomination</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[50000, 200000, 500000, 1000000].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setChittyValue(val)}
                      className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                        chittyValue === val 
                          ? "bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-500/20" 
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {val >= 100000 ? `Rs. ${(val/100000).toFixed(0)} Lakh` : `Rs. ${val/1000}K`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bidding Discount Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 font-semibold">Auction Bid Discount:</span>
                  <span className="font-extrabold text-indigo-600 text-sm">{discountPercent}%</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="30" 
                  step="1" 
                  value={discountPercent} 
                  onChange={(e) => setDiscountPercent(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>5% (Min Draw)</span>
                  <span>18%</span>
                  <span>30% (Govt. Cap)</span>
                </div>
              </div>

              {/* Tenure Selection */}
              <div className="space-y-2">
                <span className="text-slate-600 font-semibold text-xs block">Tenure / Member Count</span>
                <div className="flex gap-4">
                  {[30, 40, 50].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => {
                        setTenure(t)
                      }}
                      className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                        tenure === t 
                          ? "bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-500/20" 
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {t} Months ({t} Members)
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Output Card */}
            <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                <DollarSign className="size-5 text-indigo-400" />
                <span className="text-xs font-extrabold tracking-wider uppercase text-indigo-400">Auction Draw Results</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Net Prize Payout</span>
                  <span className="block text-xl font-extrabold text-white mt-0.5">Rs. {prizeMoney.toLocaleString('en-IN')}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Bidded Discount Value</span>
                  <span className="block text-xl font-extrabold text-indigo-400 mt-0.5">
                    Rs. {discountVal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Base Installment:</span>
                  <span className="font-semibold text-white">Rs. {baseMonthly.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Individual Dividend Share:</span>
                  <span className="font-semibold text-emerald-400">- Rs. {dividendPerMember.toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-xs border-t border-white/10 pt-2 font-bold">
                  <span className="text-white">Next Month Net Payment:</span>
                  <span className="text-indigo-400">Rs. {nextPayment.toFixed(0)}</span>
                </div>
              </div>

              <div className="text-[10px] text-slate-400 font-normal leading-normal space-y-1">
                <p>* 5% Bank registration & commission fee (Rs. {commission.toLocaleString('en-IN')}) is already deducted from the prize money.</p>
                <p>* Bidding discount values are capped at 30% max in accordance with cooperative chitty guidelines.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Section 3: Bidding Process Walkthrough */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">How Chitty Bidding & Auctions Work</h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2 font-normal">
              A transparent, step-by-step cycle conducted every month until the scheme tenure completes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {processSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs flex flex-col space-y-3 hover:shadow-md transition-shadow relative"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs border border-indigo-100">
                  {idx + 1}
                </div>
                <h3 className="font-extrabold text-slate-800 text-xs sm:text-sm">{step.title}</h3>
                <p className="text-[11px] text-slate-500 font-normal leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Safety & Regulatory Guarantees */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Landmark className="size-5 text-[#0F7EC3]" />
              <h3 className="text-base font-extrabold text-slate-800">ASCB Financial Security Pledge</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Ariyallur Service Co-operative Bank has been handling financial savings since 1937. All our chitty groups are 100% compliant with Kerala Chit Funds Act & Central Chit Funds Regulations, offering absolute protection for your hard-earned savings.
            </p>
            <ul className="space-y-2.5">
              {[
                "100% security deposits placed with treasury authorities prior to batch launch",
                "Fully transparent, audited accounts available on request",
                "Priority redressal desk for chitty disputes",
                "Direct debit setup from your ASCB savings account"
              ].map((pledge, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-slate-600 font-normal">
                  <CheckCircle2 className="size-3.5 text-indigo-500 shrink-0" /> {pledge}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-700 to-sky-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-3">
              <Sparkles className="size-8 text-indigo-200" />
              <h3 className="text-xl font-extrabold">Open a systematic savings channel</h3>
              <p className="text-indigo-100 text-xs leading-relaxed font-normal">
                Regular chitty savings allow you to build capital without the rigidity of fixed deposits. Bid and withdraw early for emergency credit or stay till the end to collect your full accumulated sum with dividends.
              </p>
            </div>
            <div className="mt-8 flex gap-3">
              <a
                href="tel:+914832762022"
                className="bg-white text-indigo-700 hover:bg-indigo-50 font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-all active:scale-[0.98]"
              >
                Inquire Batch Openings
              </a>
              <a
                href="#branches"
                className="bg-transparent border border-white/20 text-white hover:bg-white/10 font-bold text-xs px-5 py-3 rounded-xl transition-all active:scale-[0.98] flex items-center gap-1"
              >
                Branch Locator <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <HelpCircle className="size-8 text-indigo-500 mx-auto" />
            <h2 className="text-2xl font-extrabold text-slate-900 mt-2">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-xs mt-1">Answers to standard queries about regular chitty participation.</p>
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
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 text-xs sm:text-sm hover:text-indigo-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`size-4 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-indigo-500" : ""}`} />
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
