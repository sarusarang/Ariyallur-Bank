import { motion } from "framer-motion"
import PageBanner from "../components/common/PageBanner"
import { ServiceImageShowcase } from "../components/common/ServicePageParts"
import { BarChart3, ShieldCheck, Briefcase, CheckCircle2, ArrowUpRight, Building2, CreditCard, RefreshCw } from "lucide-react"

export default function CurrentDeposit() {
  const tiers = [
    {
      name: "Basic Current Account",
      label: "For Individuals & Proprietors",
      minBal: "Rs. 2,000",
      txnLimit: "Unlimited",
      od: "Not Available",
      color: "from-slate-600 to-slate-800",
      features: ["Unlimited daily transactions", "Cheque book facility", "RTGS/NEFT/IMPS transfers", "SMS alerts on each debit"]
    },
    {
      name: "Business Current Account",
      label: "For Firms & Partnerships",
      minBal: "Rs. 5,000",
      txnLimit: "Unlimited",
      od: "Up to Rs. 50,000 on request",
      color: "from-[#0F7EC3] to-[#0b5c91]",
      features: ["All Basic account benefits", "Overdraft (OD) facility available", "Monthly account statements", "Multi-signatory operation allowed"]
    },
    {
      name: "Corporate Current Account",
      label: "For Companies & Trusts",
      minBal: "Rs. 10,000",
      txnLimit: "Unlimited + Priority",
      od: "Custom OD on evaluation",
      color: "from-indigo-700 to-indigo-900",
      features: ["All Business account benefits", "Custom overdraft terms", "Priority queue at all branches", "Dedicated relationship manager"]
    }
  ]

  const facilities = [
    { icon: <CreditCard className="size-6 text-primary" />, title: "Overdraft Facility", desc: "Maintain business liquidity by drawing funds beyond your balance with our structured overdraft limit." },
    { icon: <RefreshCw className="size-6 text-emerald-500" />, title: "Auto-Sweep to FD", desc: "Idle balances above threshold are automatically swept into short-term FDs to earn passive interest income." },
    { icon: <Building2 className="size-6 text-amber-500" />, title: "Multiple Authorizations", desc: "Set two or more authorized signatories for transaction operations, ideal for businesses and trusts." },
    { icon: <BarChart3 className="size-6 text-indigo-500" />, title: "Detailed Account Reports", desc: "Monthly and quarterly account statements with full ledger-level details for financial reporting and audits." }
  ]

  const documents = [
    "Completed Current Account opening form",
    "Valid business registration certificate or firm deed",
    "PAN Card of the entity / proprietor",
    "Aadhaar / Identity proof of all authorized signatories",
    "Board resolution / partnership authority letter (for companies / firms)",
    "Recent utility bill as address proof of business"
  ]

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }
  const cardItem = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 90 } } }

  return (
    <div className="bg-slate-50/50 min-h-screen pb-16">
      <PageBanner
        title="Current Deposit Account"
        subtitle="Designed for businesses, merchants, and institutions with unlimited transactions, overdraft access, and real-time reporting."
        category="Deposit Schemes"
        bgGradient="from-[#1e293b] via-[#0F7EC3] to-[#0b5c91]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        <ServiceImageShowcase
          badge="Business banking"
          title="A cleaner current account for daily business cash flow"
          subtitle="Manage receipts, vendor payments, cheque operations, and branch-assisted transfers with a current account designed for local merchants, firms, trusts, and companies."
          image="/branch_hq.png"
          imageAlt="ASCB branch for current account services"
          imageLabel="Business banking service desk"
          points={[
            "Unlimited daily transactions",
            "Cheque book and statement support",
            "Overdraft review for eligible members",
            "Multi-signatory operation for firms"
          ]}
          stats={[
            { value: "3", label: "Tiers" },
            { value: "OD", label: "Option" },
            { value: "24/7", label: "Alerts" }
          ]}
        />

        {/* Section 1  Tier Comparison Cards */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Account Tiers</h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2 font-normal">
              From individual proprietors to registered companies  choose the account tier matching your business scale.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                variants={cardItem}
                whileHover={{ y: -6 }}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className={`bg-gradient-to-r ${tier.color} text-white px-6 pt-6 pb-4 space-y-1`}>
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-white/60">{tier.label}</span>
                  <h3 className="font-extrabold text-base">{tier.name}</h3>
                </div>
                <div className="px-6 py-5 flex-1 space-y-4">
                  <div className="space-y-3 text-xs border-b border-slate-100 pb-4">
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-semibold">Min Balance:</span>
                      <span className="font-bold text-slate-800">{tier.minBal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-semibold">Transactions:</span>
                      <span className="font-bold text-slate-800">{tier.txnLimit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-semibold">Overdraft (OD):</span>
                      <span className="font-bold text-slate-800 text-right">{tier.od}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {tier.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-xs text-slate-600 font-normal">
                        <CheckCircle2 className="size-3.5 text-primary shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href="#branches"
                    className="w-full text-center block bg-slate-50 border border-slate-200 hover:bg-primary hover:text-white hover:border-primary text-slate-700 font-bold text-xs py-3 rounded-xl transition-all duration-200"
                  >
                    Open This Account
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Section 2  Facilities */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Key Business Facilities</h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2 font-normal">
              Powerful tools and services designed to empower your business banking experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((fac, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs space-y-4 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {fac.icon}
                </div>
                <h3 className="font-bold text-slate-800 text-sm">{fac.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">{fac.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3  Documents + CTA */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-6">
            <h3 className="text-base font-extrabold text-slate-800 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Briefcase className="size-5 text-primary" /> Business Documents Required
            </h3>
            <ul className="space-y-3">
              {documents.map((doc, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 font-normal">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden flex flex-col justify-between border border-slate-800">
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
            <div className="space-y-3">
              <ShieldCheck className="size-8 text-primary" />
              <h3 className="text-xl font-extrabold">Open a Business Current Account</h3>
              <p className="text-slate-300 text-xs leading-relaxed font-normal">
                Visit any ASCB branch with your business registration documents. Our relationship manager will assist with account setup and overdraft configuration.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#branches"
                className="flex items-center justify-center gap-1.5 bg-primary hover:bg-primary/95 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-all active:scale-[0.98]"
              >
                Visit Nearest Branch <ArrowUpRight className="size-3.5" />
              </a>
              <a
                href="tel:+914832762022"
                className="border border-slate-700 text-slate-300 hover:bg-slate-800 font-bold text-xs px-5 py-3 rounded-xl transition-all text-center"
              >
                Call for Guidance
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
