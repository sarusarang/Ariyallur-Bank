import { useState } from "react"
import { motion } from "framer-motion"
import PageBanner from "../components/common/PageBanner"
import LoanApplyModal from "../components/common/LoanApplyModal"
import { ServiceImageShowcase } from "../components/common/ServicePageParts"
import {
  Home, Sparkles, BadgePercent, ShieldCheck,
  CheckCircle2, FileText, ChevronRight, Users, Building2
} from "lucide-react"

export default function HomeLoan() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const purposes = [
    { icon: <Building2 className="size-8 text-emerald-600" />, title: "Construction", desc: "Build your dream home from ground up on your own plot of land." },
    { icon: <Home className="size-8 text-[#0F7EC3]" />, title: "Purchase", desc: "Buy a ready-to-move or under-construction residential property." },
    { icon: <Sparkles className="size-8 text-amber-500" />, title: "Renovation", desc: "Upgrade, extend, or repair your existing home and interiors." },
    { icon: <BadgePercent className="size-8 text-indigo-500" />, title: "Balance Transfer", desc: "Transfer your high-rate home loan from another bank to save on EMI." }
  ]

  const features = [
    { icon: <BadgePercent className="size-6 text-emerald-500" />, title: "Competitive Rate", desc: "Home loan rates starting from 9.50% p.a. for eligible salaried and self-employed members." },
    { icon: <Users className="size-6 text-primary" />, title: "Co-applicant Benefit", desc: "Include spouse or parent as co-applicant to enhance loan eligibility and reduce rate." },
    { icon: <ShieldCheck className="size-6 text-amber-500" />, title: "No Prepayment Penalty", desc: "Pay off your home loan early anytime without any penalties or extra charges." },
    { icon: <Building2 className="size-6 text-indigo-500" />, title: "Up to 30-Year Tenure", desc: "Spread your repayments over a maximum of 30 years for comfortable monthly EMIs." }
  ]

  const interestMatrix = [
    { loan: "Up to Rs. 10 Lakhs", salaried: "9.50%", selfEmp: "9.75%" },
    { loan: "Rs. 10 - Rs. 25 Lakhs", salaried: "9.75%", selfEmp: "10.00%" },
    { loan: "Rs. 25 - Rs. 75 Lakhs", salaried: "10.00%", selfEmp: "10.25%" },
    { loan: "Above Rs. 75 Lakhs", salaried: "10.25%", selfEmp: "10.50%" }
  ]

  const documents = [
    "Completed Home Loan Application form with 2 passport photos",
    "Identity Proof - Aadhaar, PAN Card",
    "Income Proof - Latest 3-month payslips or 2-year ITR",
    "Property Documents - Sale deed, Patta, Building plan, NOC",
    "Bank statements - last 12 months",
    "Valuation report from bank-approved surveyor"
  ]

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }
  const cardItem = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 90 } } }

  return (
    <div className="bg-slate-50/50 min-h-screen pb-16">
      <PageBanner
        title="Home Loan"
        subtitle="Turn your dream of owning a home into reality with affordable financing, simple approvals, and flexible repayment plans."
        category="Loans & Advances"
        bgGradient="from-[#064e3b] via-[#065f46] to-[#059669]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        <ServiceImageShowcase
          badge="Housing finance"
          title="Home funding with local guidance from start to sanction"
          subtitle="Whether you are buying, building, or renovating, ASCB helps members understand eligibility, document readiness, valuation, and EMI comfort before committing."
          image="/branch_hq.png"
          imageAlt="ASCB branch supporting home loan members"
          imageLabel="Home loan guidance desk"
          points={[
            "Construction, purchase, and renovation support",
            "Long tenure for comfortable EMI planning",
            "Property document and valuation guidance",
            "No prepayment penalty on eligible loans"
          ]}
          stats={[
            { value: "9.50%", label: "From p.a." },
            { value: "30y", label: "Tenure" },
            { value: "0", label: "Prepay fee" }
          ]}
          accentClass="text-emerald-600"
          accentBgClass="bg-emerald-600"
        />

        {/* Section 1  Purposes */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What Is This Loan For?</h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2 font-normal">
              ASCB home loan covers a wide spectrum of housing needs  from plot construction to existing home repairs.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {purposes.map((p, i) => (
              <motion.div
                key={i}
                variants={cardItem}
                whileHover={{ y: -5 }}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center space-y-3"
              >
                <span className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto">{p.icon}</span>
                <h3 className="font-extrabold text-slate-800 text-sm">{p.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Section 2  Features */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
              <Home className="size-3.5" /> HOUSING FINANCE
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
              Designed for every kind of home buyer
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Whether you're a first-time buyer, upgrading your current space, or investing in a new property, our home loan product is tailored to make the process smooth, transparent, and affordable with minimal paperwork.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md shadow-emerald-500/20 transition-all active:scale-[0.98]"
            >
              <Sparkles className="size-4" /> Apply for Home Loan
              <ChevronRight className="size-4" />
            </button>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={cardItem}
                className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all space-y-3"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                  {f.icon}
                </div>
                <h3 className="font-bold text-slate-800 text-sm">{f.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Section 3  Interest Matrix Table */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Interest Rate Matrix</h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2 font-normal">
              Indicative rates effective from current assessment period. Final rate subject to credit evaluation.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-emerald-50/70 border-b border-emerald-100 text-[10px] font-extrabold uppercase tracking-wider text-emerald-700">
                    <th className="px-6 py-4">Loan Amount Range</th>
                    <th className="px-6 py-4">Salaried (p.a.)</th>
                    <th className="px-6 py-4">Self-Employed (p.a.)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-medium">
                  {interestMatrix.map((row, i) => (
                    <tr key={i} className="hover:bg-emerald-50/20 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-800">{row.loan}</td>
                      <td className="px-6 py-4 text-emerald-600 font-bold">{row.salaried}</td>
                      <td className="px-6 py-4 text-slate-600">{row.selfEmp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4  Documents + Apply CTA */}
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

          <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="space-y-3">
              <Home className="size-8 text-emerald-200" />
              <h3 className="text-xl font-extrabold">Start your home loan application</h3>
              <p className="text-emerald-100 text-xs leading-relaxed font-normal">
                Our housing loan officers are available to help you navigate the documentation and valuation process smoothly.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-all active:scale-[0.98]"
              >
                <Sparkles className="size-3.5" /> Apply Online <ChevronRight className="size-3.5" />
              </button>
              <a
                href="tel:+914832762022"
                className="border border-emerald-400 text-white hover:bg-white/10 font-bold text-xs px-5 py-3 rounded-xl transition-all text-center"
              >
                Call for Guidance
              </a>
            </div>
          </div>
        </section>

      </div>

      <LoanApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        loanType="Home Loan"
      />
    </div>
  )
}
