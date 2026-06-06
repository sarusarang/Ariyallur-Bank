import { motion } from "framer-motion"
import PageBanner from "../components/common/PageBanner"
import { ServiceImageShowcase } from "../components/common/ServicePageParts"
import { Landmark, BadgePercent, ShieldCheck, TrendingUp, CheckCircle2, Users, Sparkles } from "lucide-react"

export default function FixedDeposit() {
  const benefits = [
    { icon: <BadgePercent className="size-6 text-primary" />, title: "High Assured Returns", desc: "Earn guaranteed interest rates locked at the time of deposit, unaffected by market fluctuations." },
    { icon: <Users className="size-6 text-amber-500" />, title: "Senior Citizen Bonus", desc: "Members aged 60+ enjoy an additional 0.50% interest rate above standard published rates." },
    { icon: <ShieldCheck className="size-6 text-emerald-500" />, title: "DICGC Insured", desc: "Each depositor is insured up to Rs. 5 Lakhs under DICGC protection." },
    { icon: <TrendingUp className="size-6 text-indigo-500" />, title: "Auto-Renewal Option", desc: "Upon maturity, FDs can be automatically renewed at prevailing interest rates without visiting the bank." }
  ]

  const rateSlabs = [
    { tenure: "7 - 14 Days", general: "3.50%", seniorCitizen: "4.00%" },
    { tenure: "15 - 30 Days", general: "4.00%", seniorCitizen: "4.50%" },
    { tenure: "31 - 90 Days", general: "5.00%", seniorCitizen: "5.50%" },
    { tenure: "91 - 180 Days", general: "6.00%", seniorCitizen: "6.50%" },
    { tenure: "181 Days - 1 Year", general: "6.75%", seniorCitizen: "7.25%" },
    { tenure: "1 Year - 3 Years", general: "7.50%", seniorCitizen: "8.00%" },
    { tenure: "3 Years - 5 Years", general: "7.25%", seniorCitizen: "7.75%" },
    { tenure: "Above 5 Years", general: "7.00%", seniorCitizen: "7.50%" }
  ]

  const withdrawalTerms = [
    "Premature withdrawal allowed after 7 days of deposit with a 1% penalty on the applicable rate.",
    "Senior citizens are exempted from premature withdrawal penalty in case of medical emergency.",
    "Partial withdrawal is not permitted; the full FD must be closed for early liquidation.",
    "Joint FD holders require mutual consent (both signatures) for premature closure.",
    "Nomination facility is available for smoother claim processing."
  ]

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }
  const cardItem = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 90 } } }

  return (
    <div className="bg-slate-50/50 min-h-screen pb-16">
      <PageBanner
        title="Fixed Deposit"
        subtitle="Lock your savings for a defined period and earn the highest guaranteed interest rates available at ASCB Bank."
        category="Deposit Schemes"
        bgGradient="from-[#7c2d12] via-[#c2410c] to-[#ea580c]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        <ServiceImageShowcase
          badge="Assured returns"
          title="Lock funds confidently with predictable fixed deposit growth"
          subtitle="ASCB fixed deposits are built for members who want stable returns, simple renewal choices, senior citizen benefits, and branch-backed deposit service."
          image="/history_modern.png"
          imageAlt="ASCB branch for fixed deposit services"
          imageLabel="Fixed deposit service counter"
          points={[
            "Guaranteed interest for chosen tenure",
            "Senior citizen additional rate benefit",
            "Auto-renewal and nomination support",
            "DICGC deposit insurance protection"
          ]}
          stats={[
            { value: "7.50%", label: "Up to" },
            { value: "+0.50%", label: "Senior" },
            { value: "Rs. 1K", label: "Minimum" }
          ]}
          accentClass="text-orange-600"
          accentBgClass="bg-orange-600"
        />

        {/* Section 1  Benefits */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-orange-700 bg-orange-50 px-3.5 py-1 rounded-full border border-orange-200">
              <Landmark className="size-3.5" /> HIGH YIELD TERM DEPOSITS
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
              Your money working harder every single day
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              ASCB Fixed Deposits offer guaranteed returns in cooperative banking. Whether you are saving for a future goal or preserving capital, a term deposit is simple, insured, and predictable.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                variants={cardItem}
                whileHover={{ y: -4 }}
                className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 space-y-3"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                  {b.icon}
                </div>
                <h3 className="font-bold text-slate-800 text-sm">{b.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Section 2  Interest Rate Table */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">FD Interest Rate Schedule</h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2 font-normal">
              Rates effective from the current financial quarter. Subject to revision on board approval.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-orange-50/70 border-b border-orange-100 text-[10px] font-extrabold uppercase tracking-wider text-orange-700">
                    <th className="px-6 py-4">Tenure</th>
                    <th className="px-6 py-4">General Public (p.a.)</th>
                    <th className="px-6 py-4 flex items-center gap-1.5">
                      Senior Citizens (p.a.)
                      <span className="bg-amber-100 text-amber-700 text-[9px] px-1.5 py-0.5 rounded font-bold normal-case tracking-normal">+0.50%</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-medium">
                  {rateSlabs.map((row, i) => (
                    <tr key={i} className="hover:bg-orange-50/20 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-800">{row.tenure}</td>
                      <td className="px-6 py-4 text-orange-600 font-bold">{row.general}</td>
                      <td className="px-6 py-4 text-amber-600 font-bold">{row.seniorCitizen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 3  Withdrawal Terms + Open FD CTA */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-6">
            <h3 className="text-base font-extrabold text-slate-800 border-b border-slate-100 pb-3">Withdrawal & Closure Terms</h3>
            <ul className="space-y-3.5">
              {withdrawalTerms.map((term, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 font-normal">
                  <CheckCircle2 className="size-4 text-orange-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{term}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-orange-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="space-y-3">
              <Sparkles className="size-8 text-orange-200" />
              <h3 className="text-xl font-extrabold">Open a Fixed Deposit Today</h3>
              <p className="text-orange-100 text-xs leading-relaxed font-normal">
                Visit any ASCB branch or call our helpdesk to start your FD with a minimum deposit of Rs. 1,000. No hidden charges, no complications.
              </p>
              <div className="pt-2 space-y-1.5 text-xs text-orange-100">
                <div className="flex justify-between">
                  <span className="font-medium opacity-70">Minimum Amount:</span>
                  <span className="font-bold">Rs. 1,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium opacity-70">Maximum Amount:</span>
                  <span className="font-bold">No upper limit</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium opacity-70">Tax Benefit:</span>
                  <span className="font-bold">TDS applicable per IT rules</span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#branches"
                className="flex items-center justify-center gap-2 bg-white text-orange-700 hover:bg-orange-50 font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-all active:scale-[0.98]"
              >
                Open FD at Branch
              </a>
              <a
                href="tel:+914832762022"
                className="border border-orange-400 text-white hover:bg-white/10 font-bold text-xs px-5 py-3 rounded-xl transition-all text-center"
              >
                Call Branch Desk
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
