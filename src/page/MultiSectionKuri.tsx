import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import PageBanner from "../components/common/PageBanner"
import { ServiceImageShowcase } from "../components/common/ServicePageParts"
import { 
  ChevronDown, Sparkles, ShieldAlert, BarChart3, HelpCircle as HelpIcon, ArrowUpRight
} from "lucide-react"

export default function MultiSectionKuri() {
  // Calculator state
  const [chittyValue, setChittyValue] = useState<number>(500000)
  const [tenure, setTenure] = useState<number>(50)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Calculations for Multi-section chitty
  const commissionRate = 0.05 // 5% bank commission
  const lotPrize = chittyValue * (1 - commissionRate)
  const maxDiscountRate = 0.30 // 30% max bidding discount
  const maxBiddedPrize = chittyValue * (1 - maxDiscountRate)
  const estimatedAverageDividend = (chittyValue / tenure) * 0.15 // average dividend savings

  const monthlyInstallment = chittyValue / tenure
  const estimatedNetInstallment = monthlyInstallment - estimatedAverageDividend

  const comparisonData = [
    { feature: "Draws per month", multi: "4 Draws (1 by Lot, 3 by Auction)", ordinary: "1 Draw (Auction or Lot if no bids)" },
    { feature: "Chit Group Size", multi: "Usually 160 or 200 members", ordinary: "Usually 40 or 50 members" },
    { feature: "Lot Winner Payout", multi: "Full prize money (95% of value, 5% fee)", ordinary: "Subject to bidding discount if bidded" },
    { feature: "Waiting Time to Win", multi: "4x shorter waiting period", ordinary: "Longer waiting period" },
    { feature: "Dividend Pooling", multi: "Dividends pooled from 3 auctions shared", ordinary: "Dividend from single auction shared" },
    { feature: "Bidding Caps", multi: "Strict 30% cap for subscriber safety", ordinary: "Varies, sometimes higher discounts" }
  ]

  const faqs = [
    {
      q: "What is a Multi-Section Kuri and how does it work?",
      a: "A Multi-Section Kuri combines four sections of the same denomination and duration into a single group (for example, 4 sections of 50 members each, totaling 200 members). Every month, four draws are conducted. One winner is chosen by lot (draw of names) and receives the maximum possible prize money (95% of value). The other three winners are chosen by bidding/auction, where subscribers discount their prize money to get immediate funds."
    },
    {
      q: "Why is the lot draw winner highly advantageous?",
      a: "The lot draw winner gets the prized amount without any bidding deduction (only the bank's standard 5% commission is deducted). For a Rs. 5 Lakh chitty, the lot winner receives Rs. 4.75 Lakhs, which is the highest possible payout, while still benefiting from monthly dividends for the rest of the tenure."
    },
    {
      q: "How are dividends calculated in a Multi-Section Kuri?",
      a: "The discount offered by the 3 auction winners in their bids is pooled together. After deducting the bank's commission, this pooled amount is divided equally among all members (e.g., all 200 members) and credited as a dividend. This dividend is deducted from the next month's installment, which reduces your actual payment."
    },
    {
      q: "What security is required to release the prized money?",
      a: "Since the prized money is paid out early, the winner must provide security to guarantee the payment of future monthly installments. Acceptable securities include land/property documents, fixed deposits with ASCB, bank guarantees, gold pledges, or personal guarantees from salary-earning government/cooperative employees."
    }
  ]

  return (
    <div className="bg-slate-50/50 min-h-screen pb-16">
      <PageBanner
        title="Multi-Section Kuri"
        subtitle="Unmatched speed and high savings. Four lucky draws every month ensure that you win faster while enjoying lower net monthly installments."
        category="Chitty Schemes"
        bgGradient="from-teal-600 via-cyan-500 to-emerald-600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        <ServiceImageShowcase
          badge="Faster draw chances"
          title="Multiple monthly draws for faster access to prize funds"
          subtitle="Multi-Section Kuri groups combine multiple sections so more subscribers can win each month while still sharing dividend benefits across the group."
          image="/history_modern.png"
          imageAlt="ASCB branch for multi-section kuri services"
          imageLabel="Multi-section kuri advisory"
          points={[
            "Four draws every month",
            "One lot winner plus auction winners",
            "Dividend sharing across subscribers",
            "Security guidance before prize release"
          ]}
          stats={[
            { value: "4", label: "Draws" },
            { value: "30%", label: "Bid cap" },
            { value: "5%", label: "Fee" }
          ]}
          accentClass="text-teal-600"
          accentBgClass="bg-teal-600"
        />
        
        {/* Section 1: How it Works (Visual Steps) */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-teal-600 font-extrabold text-xs uppercase tracking-widest bg-teal-50 px-3 py-1.5 rounded-full border border-teal-100">
              Operational Flow
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">Four Draws Every Month</h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2 font-normal">
              In a Multi-Section Kuri, subscribers are grouped together to enable multiple draws. Here is how the prize fund is distributed each month:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            
            {/* Step 1 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs flex flex-col items-center text-center space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center font-black text-sm border border-teal-100">1</div>
              <h3 className="font-bold text-slate-800 text-xs sm:text-sm">Lot Draw (1 Winner)</h3>
              <p className="text-[11px] text-slate-500 font-normal leading-relaxed">
                Selected purely by random draw. Receives 95% of the total face value, with only 5% bank commission deducted. No discount bidding required.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs flex flex-col items-center text-center space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center font-black text-sm border border-teal-100">2</div>
              <h3 className="font-bold text-slate-800 text-xs sm:text-sm">Auction 1 (Highest Bidder)</h3>
              <p className="text-[11px] text-slate-500 font-normal leading-relaxed">
                Subscribers bid for the amount. The subscriber willing to take the highest discount (capped at 30% max) wins the prized money.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs flex flex-col items-center text-center space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center font-black text-sm border border-teal-100">3</div>
              <h3 className="font-bold text-slate-800 text-xs sm:text-sm">Auctions 2 & 3</h3>
              <p className="text-[11px] text-slate-500 font-normal leading-relaxed">
                Second and third auctions are conducted immediately. This allows two more urgent subscribers to walk away with their prize money in the same month.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs flex flex-col items-center text-center space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-sm border border-emerald-100">4</div>
              <h3 className="font-bold text-slate-800 text-xs sm:text-sm">Dividend Pooling</h3>
              <p className="text-[11px] text-slate-500 font-normal leading-relaxed">
                All bidded discount amounts are pooled together, divided equally, and deducted from the next installment of all active subscribers.
              </p>
            </div>
            
          </div>
        </section>

        {/* Section 2: Interactive Kuri Estimator */}
        <section className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-teal-600 font-bold text-xs uppercase tracking-widest bg-teal-50 px-3 py-1.5 rounded-full border border-teal-100">
                  Interactive tool
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-3">Multi-Section Kuri Estimator</h3>
                <p className="text-slate-500 text-xs mt-1.5 leading-relaxed font-normal">
                  Toggle the Chitty amount and tenure to estimate your prize payouts and approximate monthly dividend savings.
                </p>
              </div>

              {/* Chitty Value Selector */}
              <div className="space-y-2">
                <span className="text-slate-600 font-semibold text-xs block">Select Chitty Denomination</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[100000, 200000, 500000, 1000000].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setChittyValue(val)}
                      className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                        chittyValue === val 
                          ? "bg-teal-600 border-teal-600 text-white shadow-md shadow-teal-500/20" 
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      Rs. {(val/100000).toFixed(0)} Lakh{val >= 200000 ? 's' : ''}
                    </button>
                  ))}
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
                          ? "bg-teal-600 border-teal-600 text-white shadow-md shadow-teal-500/20" 
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {t} Months
                    </button>
                  ))}
                </div>
              </div>

              {/* Security Alert Badge */}
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex gap-3">
                <ShieldAlert className="size-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-800 text-xs">Maximum Discount Cap</h4>
                  <p className="text-[10px] text-slate-500 leading-normal font-normal">
                    Under government guidelines, bidding discounts are capped at 30% to protect subscribers from paying high rates.
                  </p>
                </div>
              </div>
            </div>

            {/* Calculations Output Card */}
            <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                <BarChart3 className="size-5 text-teal-400" />
                <span className="text-xs font-extrabold tracking-wider uppercase text-teal-400">Estimated Payouts & Savings</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Lot Draw Payout (Max)</span>
                  <span className="block text-xl font-extrabold text-white mt-0.5">Rs. {lotPrize.toLocaleString('en-IN')}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Max Auction Payout</span>
                  <span className="block text-xl font-extrabold text-teal-400 mt-0.5">
                    Rs. {maxBiddedPrize.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Base Monthly Installment:</span>
                  <span className="font-semibold text-white">Rs. {monthlyInstallment.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Est. Average Dividend:</span>
                  <span className="font-semibold text-emerald-400">- Rs. {estimatedAverageDividend.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-xs border-t border-white/10 pt-2 font-bold">
                  <span className="text-white">Est. Net Monthly Payment:</span>
                  <span className="text-teal-400">Rs. {estimatedNetInstallment.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <p className="text-[10px] text-slate-400 leading-normal font-normal">
                * Note: The calculations are estimates based on standard auction performance. Real-time dividend distributions vary based on actual monthly bidding percentages.
              </p>
            </div>

          </div>
        </section>

        {/* Section 3: Comparison Table */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">How It Compares</h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2 font-normal">
              Compare the operational benefits of a Multi-Section Kuri against standard ordinary chitties.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-xs max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-extrabold border-b border-slate-800">
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-[10px]">Feature</th>
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-[10px] text-teal-400">Multi-Section Kuri</th>
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-[10px]">Ordinary Chitty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-normal">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-slate-800">{row.feature}</td>
                      <td className="p-4 sm:p-5 text-teal-600 font-semibold">{row.multi}</td>
                      <td className="p-4 sm:p-5 text-slate-500">{row.ordinary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4: Registration Inquiry */}
        <section className="bg-gradient-to-br from-teal-800 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden flex flex-col justify-between max-w-5xl mx-auto">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-2xl space-y-4">
            <Sparkles className="size-8 text-teal-300" />
            <h3 className="text-2xl font-extrabold leading-tight">Enroll in the next Multi-Section Kuri batch</h3>
            <p className="text-teal-100 text-xs sm:text-sm leading-relaxed font-normal">
              Get the dual benefit of quick payouts and large savings. Talk to our financial advisers to understand how to leverage Kuri draws to fund your businesses, construction, or personal goals.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+914832762022"
              className="bg-white text-teal-800 hover:bg-teal-50 font-bold text-xs px-6 py-3 rounded-xl shadow-md transition-all active:scale-[0.98]"
            >
              Call Us Now
            </a>
            <a
              href="#branches"
              className="bg-transparent border border-white/20 text-white hover:bg-white/10 font-bold text-xs px-6 py-3 rounded-xl transition-all active:scale-[0.98] flex items-center gap-1"
            >
              Locate Branch Offices <ArrowUpRight className="size-4" />
            </a>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <HelpIcon className="size-8 text-teal-600 mx-auto" />
            <h2 className="text-2xl font-extrabold text-slate-900 mt-2">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-xs mt-1">Common queries regarding Multi-Section Kuri regulations.</p>
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
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 text-xs sm:text-sm hover:text-teal-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`size-4 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-teal-500" : ""}`} />
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
