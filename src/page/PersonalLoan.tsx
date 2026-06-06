import { useState } from "react"
import { motion } from "framer-motion"
import PageBanner from "../components/common/PageBanner"
import LoanApplyModal from "../components/common/LoanApplyModal"
import { ServiceImageShowcase } from "../components/common/ServicePageParts"
import {
  User, Sparkles, BadgePercent, Clock, CheckCircle2,
  FileText, ChevronRight, ShieldCheck, Calculator
} from "lucide-react"

export default function PersonalLoan() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const useCases = [
    { label: "Wedding Expenses", icon: <Sparkles className="size-6 text-rose-500" /> },
    { label: "Education Fees", icon: <FileText className="size-6 text-sky-500" /> },
    { label: "Medical Emergencies", icon: <ShieldCheck className="size-6 text-emerald-500" /> },
    { label: "Home Renovation", icon: <User className="size-6 text-amber-500" /> },
    { label: "Travel & Leisure", icon: <Clock className="size-6 text-indigo-500" /> },
    { label: "Debt Consolidation", icon: <Calculator className="size-6 text-[#0F7EC3]" /> }
  ]

  const eligibility = [
    { label: "Age", value: "21 - 60 years" },
    { label: "Employment Type", value: "Salaried / Self-employed / Business owner" },
    { label: "Minimum Net Income", value: "Rs. 15,000 / month (Salaried) or Rs. 20,000 (Self-employed)" },
    { label: "Credit History", value: "No active NPA / default on any credit obligation" },
    { label: "Membership", value: "Active ASCB member account required" },
    { label: "Minimum Loan Amount", value: "Rs. 25,000" }
  ]

  const slabs = [
    { tenure: "Up to 12 months", rate: "12.00% p.a.", emi: "Rs. 2,224 per Rs. 25,000" },
    { tenure: "13 - 24 months", rate: "12.50% p.a.", emi: "Rs. 4,375 per Rs. 1 Lakh" },
    { tenure: "25 - 36 months", rate: "13.00% p.a.", emi: "Rs. 3,369 per Rs. 1 Lakh" },
    { tenure: "37 - 60 months", rate: "13.50% p.a.", emi: "Rs. 2,278 per Rs. 1 Lakh" }
  ]

  const documents = [
    "Completed Personal Loan Application Form",
    "Identity & Address Proof (Aadhaar / PAN / Passport)",
    "Latest 3-month salary slips or 6-month bank statements",
    "Form 16 / ITR for the last 2 years (self-employed)",
    "Passport photographs - 2 copies"
  ]

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }
  const cardItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 90 } }
  }

  return (
    <div className="bg-slate-50/50 min-h-screen pb-16">
      <PageBanner
        title="Personal Loan"
        subtitle="Fund your dreams, handle emergencies, and achieve goals with flexible personal finance at competitive interest rates."
        category="Loans & Advances"
        bgGradient="from-[#1e3a8a] via-[#2563eb] to-[#0F7EC3]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        <ServiceImageShowcase
          badge="Flexible personal finance"
          title="A simple loan for planned needs and urgent moments"
          subtitle="Personal loans are designed for members who need quick, structured funding without complicated product choices. Get guidance on eligibility, EMI, and documents before applying."
          image="/history_modern.png"
          imageAlt="Modern ASCB branch for personal loan support"
          imageLabel="Personal loan advisory support"
          points={[
            "Useful for family and personal expenses",
            "Preliminary review within business hours",
            "Clear EMI and tenure guidance",
            "Branch support for documentation"
          ]}
          stats={[
            { value: "48h", label: "Review" },
            { value: "60m", label: "Max tenure" },
            { value: "12%", label: "From p.a." }
          ]}
        />

        {/* Section 1  Purpose Tiles */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What Can You Use It For?</h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2 font-normal">
              Our personal loan is fully flexible  spend it on any personal need or financial goal.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {useCases.map((uc, i) => (
              <motion.div
                key={i}
                variants={cardItem}
                whileHover={{ scale: 1.05 }}
                className="bg-white border border-slate-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200 flex flex-col items-center gap-2"
              >
                <span className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">{uc.icon}</span>
                <span className="text-xs font-bold text-slate-700">{uc.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Section 2  Eligibility + Interest Table side by side */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Eligibility card */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-6">
            <h3 className="text-base font-extrabold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-3">
              <User className="size-5 text-primary" /> Eligibility Criteria
            </h3>
            <ul className="space-y-4">
              {eligibility.map((el, i) => (
                <li key={i} className="flex items-start justify-between gap-4 text-xs border-b border-slate-50 pb-3 last:border-none last:pb-0">
                  <span className="text-slate-400 font-semibold shrink-0">{el.label}</span>
                  <span className="text-slate-700 font-bold text-right leading-snug">{el.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Rate Slabs card */}
          <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
            <div className="px-8 pt-8 pb-4 border-b border-slate-100">
              <h3 className="text-base font-extrabold text-slate-800 flex items-center gap-2">
                <Calculator className="size-5 text-primary" /> EMI & Rate Slabs
              </h3>
              <p className="text-xs text-slate-400 mt-1 font-normal">Indicative EMI for illustration only. Actual rates may vary.</p>
            </div>
            <div className="divide-y divide-slate-100">
              {slabs.map((s, i) => (
                <div key={i} className="px-8 py-4 flex items-center justify-between text-xs hover:bg-blue-50/20 transition-colors">
                  <div>
                    <span className="font-bold text-slate-800 block">{s.tenure}</span>
                    <span className="text-slate-400 font-normal">{s.emi}</span>
                  </div>
                  <span className="font-black text-primary text-sm">{s.rate}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3  Documents + Apply Banner */}
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

          <div className="bg-gradient-to-br from-[#1e3a8a] to-[#0F7EC3] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="space-y-3">
              <ShieldCheck className="size-8 text-sky-200" />
              <h3 className="text-xl font-extrabold">Apply for a Personal Loan Today</h3>
              <p className="text-sky-100 text-xs leading-relaxed font-normal">
                Quick approvals for salaried individuals and self-employed applicants. Get pre-approval within 48 business hours.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-all active:scale-[0.98]"
              >
                <Sparkles className="size-3.5" /> Apply Online
                <ChevronRight className="size-3.5" />
              </button>
              <a
                href="tel:+914832762022"
                className="border border-sky-400 text-white hover:bg-white/10 font-bold text-xs px-5 py-3 rounded-xl transition-all text-center"
              >
                Talk to an Advisor
              </a>
            </div>
          </div>
        </section>

      </div>

      <LoanApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        loanType="Personal Loan"
      />
    </div>
  )
}
