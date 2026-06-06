import { motion } from "framer-motion"
import PageBanner from "../components/common/PageBanner"
import { ServiceImageShowcase } from "../components/common/ServicePageParts"
import { ShieldCheck, Eye, KeyRound, Clock, ClipboardList, Lock, Sparkles } from "lucide-react"

export default function SafeDepositLocker() {
  const securityFeatures = [
    {
      icon: <Lock className="size-6 text-primary" />,
      title: "Reinforced Concrete Vaults",
      desc: "Vaults constructed as per strict security guidelines, featuring heavily reinforced walls and explosion-resistant steel doors."
    },
    {
      icon: <KeyRound className="size-6 text-amber-500" />,
      title: "Dual Key Control",
      desc: "Each locker is secured under dual custody. It requires both the bank's master key and your personal customer key to open."
    },
    {
      icon: <Eye className="size-6 text-emerald-500" />,
      title: "24/7 CCTV & Armed Guard",
      desc: "Continuous round-the-clock digital surveillance with motion sensors and direct alarms linked to local police networks."
    },
    {
      icon: <Clock className="size-6 text-indigo-500" />,
      title: "Unlimited Locker Access",
      desc: "Operate your locker during standard banking hours without any additional charges or limit on the number of operations."
    }
  ]

  const lockerRates = [
    { size: "Small", dimensions: "125 x 175 x 492 mm", rental: "Rs. 1,200", deposit: "Rs. 5,000" },
    { size: "Medium", dimensions: "159 x 210 x 492 mm", rental: "Rs. 2,500", deposit: "Rs. 10,000" },
    { size: "Large", dimensions: "329 x 410 x 492 mm", rental: "Rs. 5,000", deposit: "Rs. 20,000" }
  ]

  const documents = [
    "Duly filled Locker Application Form & Agreement",
    "Passport size photographs (2 copies)",
    "Identity Proof (Aadhaar Card, PAN Card, or Passport)",
    "Address Proof (Utility bill, Voter ID, or Rental agreement)",
    "Savings or Current account in the branch for linked rental debit"
  ]

  return (
    <div className="bg-slate-50/50 min-h-screen pb-16">
      {/* Banner */}
      <PageBanner
        title="Safe Deposit Locker"
        subtitle="Provide your valuables, gold ornaments, and legal documents with the ultimate layer of cooperative security and vault protection."
        category="Facilities & Services"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        <ServiceImageShowcase
          badge="Vault protection"
          title="A secure place for gold, documents, and valuables"
          subtitle="ASCB locker facilities combine controlled access, dual-key operation, monitored premises, and branch assistance so members can store important assets with confidence."
          image="/branch_hq.png"
          imageAlt="ASCB branch building for safe deposit locker services"
          imageLabel="Safe deposit locker service"
          points={[
            "Dual key locker operation",
            "Linked savings/current account",
            "Private viewing assistance",
            "Limited availability by branch"
          ]}
          stats={[
            { value: "3", label: "Sizes" },
            { value: "CCTV", label: "Security" },
            { value: "FD", label: "Deposit" }
          ]}
        />
        
        {/* Section 1: Security Infrastructure */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-primary bg-sky-50 px-3.5 py-1 rounded-full border border-sky-100">
              <ShieldCheck className="size-3.5" /> BANK GRADE VAULTS
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
              Absolute security and peace of mind for your precious assets
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We understand that your assets carry both monetary and emotional value. ASCB safe deposit lockers are designed with multi-layered electronic and mechanical barriers, ensuring your gold, diamonds, certificates, and legacy documents are shielded from risks.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {securityFeatures.slice(0, 2).map((feat, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    {feat.icon}
                    <h4 className="font-bold text-slate-800 text-xs sm:text-sm">{feat.title}</h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">{feat.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {securityFeatures.slice(2).map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                  {feat.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-800 text-sm">{feat.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 2: Pricing and Dimensions */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Locker Options & Rental Rates</h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2 font-normal">
              Choose the size that best matches your requirement. Interest-bearing deposits are required to link with locker rent payments.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                    <th className="px-6 py-4">Locker Size</th>
                    <th className="px-6 py-4">Dimensions (H x W x D)</th>
                    <th className="px-6 py-4">Annual Rent (Excl. GST)</th>
                    <th className="px-6 py-4">Refundable FD Deposit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs text-slate-600 font-medium">
                  {lockerRates.map((rate, idx) => (
                    <tr key={idx} className="hover:bg-sky-50/20 transition-colors">
                      <td className="px-6 py-4 text-slate-800 font-bold flex items-center gap-1.5">
                        <Sparkles className="size-4 text-primary" /> {rate.size}
                      </td>
                      <td className="px-6 py-4 font-mono">{rate.dimensions}</td>
                      <td className="px-6 py-4 text-primary font-bold">{rate.rental}</td>
                      <td className="px-6 py-4 text-slate-500">{rate.deposit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 3: Requirements & Checklist */}
        <section className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-extrabold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-3">
              <ClipboardList className="size-5 text-primary" /> Required Documents & Eligibility
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              To hire a locker, the applicant must maintain a primary Savings/Current account with ASCB to facilitate auto-debit of rentals and hold standard KYC certifications.
            </p>
            <ul className="space-y-3">
              {documents.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                  <span className="w-5 h-5 rounded-full bg-sky-50 text-primary flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 border border-sky-100">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed font-normal">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-linear-to-br from-slate-900 to-[#0b1c2e] text-white p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden shadow-xl border border-slate-800">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="space-y-4">
              <span className="text-[10px] text-sky-400 font-extrabold tracking-widest uppercase">Locker Booking</span>
              <h4 className="text-xl font-extrabold leading-tight">Check locker availability in your nearest branch</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Locker facilities are limited and allocated on a first-come, first-served basis. Visit our branches directly to inquire or file a reservation request.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#branches"
                className="inline-block bg-primary hover:bg-primary/95 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md active:scale-[0.98] transition-all"
              >
                Find Nearest Branch
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
