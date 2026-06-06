import { useState } from "react"
import { motion } from "framer-motion"
import PageBanner from "../components/common/PageBanner"
import LoanApplyModal from "../components/common/LoanApplyModal"
import { ServiceImageShowcase } from "../components/common/ServicePageParts"
import {
  ShieldCheck, Sparkles, Clock, BadgePercent,
  CheckCircle2, Gem, TrendingUp, FileText, ChevronRight
} from "lucide-react"

export default function GoldLoan() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const highlights = [
    { icon: <Clock className="size-6 text-primary" />, title: "Instant Disbursal", desc: "Funds credited within 30 minutes of gold valuation and document verification." },
    { icon: <BadgePercent className="size-6 text-amber-500" />, title: "Low Interest Rates", desc: "Competitive interest rates starting at just 10% per annum with simple repayment options." },
    { icon: <ShieldCheck className="size-6 text-emerald-500" />, title: "Secure Gold Storage", desc: "Your pledged ornaments are stored in our fully insured reinforced vaults with CCTV monitoring." },
    { icon: <TrendingUp className="size-6 text-indigo-500" />, title: "Flexible Tenure", desc: "Choose repayment periods from 3 months to 36 months, suiting your cash flow needs." }
  ]

  const slabs = [
    { tier: "Bullet (Up to 6 months)", ltv: "Up to 75% LTV", rate: "10.00% p.a.", amount: "Up to Rs. 20 Lakhs" },
    { tier: "Overdraft / Demand Loan", ltv: "Up to 70% LTV", rate: "11.00% p.a.", amount: "Up to Rs. 30 Lakhs" },
    { tier: "Monthly Interest Payment", ltv: "Up to 75% LTV", rate: "10.50% p.a.", amount: "Up to Rs. 25 Lakhs" },
    { tier: "Agri Gold Loan", ltv: "Up to 75% LTV", rate: "9.00% p.a.", amount: "Up to Rs. 3 Lakhs" }
  ]

  const documents = [
    "Duly filled Gold Loan Application Form",
    "Passport size photographs (2 copies)",
    "Identity Proof - Aadhaar, PAN, Voter ID or Passport",
    "Address Proof - Utility bill or Rental agreement",
    "Existing ASCB Savings Account (or open one simultaneously)"
  ]

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
  }
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 90, damping: 15 } }
  }

  return (
    <div className="bg-slate-50/50 min-h-screen pb-16">
      <PageBanner
        title="Gold Loan"
        subtitle="Unlock instant liquidity against your gold ornaments. No income proof needed, with fast approval within 30 minutes."
        category="Loans & Advances"
        bgGradient="from-[#78350f] via-[#b45309] to-[#d97706]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        <ServiceImageShowcase
          badge="Instant secured credit"
          title="Fast gold-backed funding with bank-grade custody"
          subtitle="Walk into a branch with your ornaments, complete valuation, and receive a transparent loan offer. Your pledged gold stays protected in monitored vault custody until closure."
          image="/branch_hq.png"
          imageAlt="ASCB branch for gold loan service"
          imageLabel="Gold loan desk at branch"
          points={[
            "Certified on-site valuation",
            "No guarantor for eligible members",
            "Secure vault storage",
            "Flexible repayment choices"
          ]}
          stats={[
            { value: "30m", label: "Fast approval" },
            { value: "75%", label: "LTV" },
            { value: "10%", label: "From p.a." }
          ]}
          accentClass="text-amber-600"
          accentBgClass="bg-amber-600"
        />

        {/* Section 1  Hero + Highlights */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-amber-700 bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
              <Gem className="size-3.5" /> GOLD SECURED LENDING
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
              Turn your idle gold into immediate working capital
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              ASCB Gold Loans are the fastest route to instant cash with no guarantors and simple branch verification. Walk in with your gold jewellery (18-22 carat), and our certified appraisers will evaluate it on the spot.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md shadow-amber-500/20 transition-all active:scale-[0.98]"
            >
              <Sparkles className="size-4" /> Apply for Gold Loan
              <ChevronRight className="size-4" />
            </button>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -4 }}
                className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 space-y-3"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                  {h.icon}
                </div>
                <h3 className="font-bold text-slate-800 text-sm">{h.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Section 2  Interest Rate Slabs Table */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Gold Loan Interest Rate Slabs</h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2 font-normal">
              Choose the scheme that best aligns with your repayment preference and gold value.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-amber-50/70 border-b border-amber-100 text-[10px] font-extrabold uppercase tracking-wider text-amber-700">
                    <th className="px-6 py-4">Loan Scheme</th>
                    <th className="px-6 py-4">LTV Ratio</th>
                    <th className="px-6 py-4">Interest Rate</th>
                    <th className="px-6 py-4">Max Loan Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-medium">
                  {slabs.map((s, i) => (
                    <tr key={i} className="hover:bg-amber-50/30 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-800">{s.tier}</td>
                      <td className="px-6 py-4 text-slate-600">{s.ltv}</td>
                      <td className="px-6 py-4 text-amber-600 font-bold">{s.rate}</td>
                      <td className="px-6 py-4 text-slate-600">{s.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 3  Documents + CTA */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-6">
            <h3 className="text-base font-extrabold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-3">
              <FileText className="size-5 text-primary" /> Documents Required
            </h3>
            <ul className="space-y-3">
              {documents.map((doc, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 font-normal">
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-600 to-amber-800 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="space-y-3">
              <Gem className="size-8 text-amber-200" />
              <h3 className="text-xl font-extrabold">Ready to apply for a Gold Loan?</h3>
              <p className="text-amber-100 text-xs leading-relaxed font-normal">
                Our team of certified gold evaluators and loan officers are available at all branches. No prior appointment needed, simply walk in.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-amber-700 hover:bg-amber-50 font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-all active:scale-[0.98]"
              >
                Apply Online Now
              </button>
              <a
                href="tel:+914832762022"
                className="border border-amber-400 text-white hover:bg-white/10 font-bold text-xs px-5 py-3 rounded-xl transition-all text-center"
              >
                Call Our Branch
              </a>
            </div>
          </div>
        </section>

      </div>

      <LoanApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        loanType="Gold Loan"
      />
    </div>
  )
}
