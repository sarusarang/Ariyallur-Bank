import { motion } from "framer-motion"
import PageBanner from "../components/common/PageBanner"
import { ServiceImageShowcase } from "../components/common/ServicePageParts"
import { Send, Clock, BadgePercent, ArrowLeftRight, Landmark, HelpCircle, ShieldCheck } from "lucide-react"

export default function MoneyTransfer() {
  const comparison = [
    {
      type: "IMPS (Instant Payment)",
      speed: "Immediate (Real-time)",
      limit: "Up to Rs. 5 Lakhs / day",
      hours: "24/7/365 Available",
      charge: "Minimal / Free on Mobile App",
      desc: "Perfect for immediate, small-to-medium transfers. Can be initiated via our ASCB Mobile Banking App or branch counters."
    },
    {
      type: "NEFT (National Funds)",
      speed: "Hourly batches (1-2 hours)",
      limit: "No minimum, up to Rs. 10 Lakhs",
      hours: "24/7/365 (Batches settlement)",
      charge: "Free online, low at counters",
      desc: "Ideal for regular, high-value transfers like bills, rentals, or business vendor payments with batch-mode secure settlements."
    },
    {
      type: "RTGS (Real Time Gross)",
      speed: "Immediate / Gross settlement",
      limit: "Minimum Rs. 2 Lakhs, no max limit",
      hours: "24/7/365 Available",
      charge: "Nominal processing charges",
      desc: "Best suited for large corporate transactions and urgent bulk financial transfers with instantaneous RBI-backed assurance."
    }
  ]

  const steps = [
    { title: "Beneficiary Details", desc: "Obtain the correct Account Number, Name, and bank IFSC code of the recipient." },
    { title: "Choose Channel", desc: "Access via ASCB Mobile App, Internet Banking portal, or visit any of our branch counters." },
    { title: "Secure OTP Approval", desc: "Validate the payment using high-security Multi-Factor Authentication code sent to your mobile." },
    { title: "Instant Receipt", desc: "Receive automated SMS alerts, transaction ID, and e-receipts for compliance audits." }
  ]

  const faqs = [
    { q: "What is an IFSC code?", a: "Indian Financial System Code (IFSC) is an 11-digit alphanumeric code that uniquely identifies a bank branch participating in NEFT, RTGS, and IMPS transfer systems. Our Head Office IFSC code is ASCB0000001." },
    { q: "Are transfer services available on holidays?", a: "Yes. RTGS, NEFT, and IMPS channels are fully available 24/7 online via the mobile app and digital banking, including Sundays and bank holidays." },
    { q: "What should I do if a transfer fails but money is debited?", a: "Failed transactions are auto-credited back within 2 to 24 hours under RBI guidelines. In case of issues, reach out to our grievance cell at support@ariyallurbank.com with the transaction reference." }
  ]

  return (
    <div className="bg-slate-50/50 min-h-screen pb-16">
      {/* Banner */}
      <PageBanner
        title="RTGS / NEFT / IMPS Transfers"
        subtitle="Transfer funds securely and instantly across any bank in India. Choose between immediate IMPS, bulk NEFT, or high-value RTGS channels."
        category="Facilities & Services"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        <ServiceImageShowcase
          badge="Secure transfers"
          title="Move money across banks with confidence"
          subtitle="Use IMPS, NEFT, and RTGS for daily payments, vendor settlements, urgent transfers, and high-value transactions with branch and mobile banking support."
          image="/history_modern.png"
          imageAlt="Modern ASCB digital banking branch for money transfers"
          imageLabel="RTGS, NEFT and IMPS support"
          points={[
            "IMPS for instant small and medium transfers",
            "NEFT for routine account-to-account payments",
            "RTGS for urgent high-value settlement",
            "SMS receipts and transaction references"
          ]}
          stats={[
            { value: "24/7", label: "Online" },
            { value: "3", label: "Modes" },
            { value: "OTP", label: "Security" }
          ]}
        />
        
        {/* Section 1: Comparison Cards */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Transfer Services Comparison</h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2 font-normal">
              Compare speeds, limits, and processing timings to select the optimal money transfer mode.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {comparison.map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                    <ArrowLeftRight className="size-5 text-primary" />
                    <h3 className="font-extrabold text-slate-800 text-base">{c.type}</h3>
                  </div>

                  <ul className="space-y-3.5 text-xs">
                    <li className="flex justify-between">
                      <span className="text-slate-400 font-medium">Settlement Speed:</span>
                      <span className="text-slate-700 font-bold">{c.speed}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-400 font-medium">Transfer Limits:</span>
                      <span className="text-slate-700 font-bold">{c.limit}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-400 font-medium">Operating Hours:</span>
                      <span className="text-slate-700 font-bold">{c.hours}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-400 font-medium">Service Fees:</span>
                      <span className="text-primary font-bold">{c.charge}</span>
                    </li>
                  </ul>

                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {c.desc}
                  </p>
                </div>

                <div className="mt-8">
                  <a
                    href="#ebanking"
                    className="w-full text-center block bg-slate-50 border border-slate-100 hover:bg-primary hover:text-white hover:border-primary text-slate-700 font-bold text-xs py-3 rounded-xl transition-all duration-200"
                  >
                    Initiate Transfer
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 2: How it works timeline */}
        <section className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xs space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-extrabold text-slate-900">How to Transfer Funds</h2>
            <p className="text-slate-500 text-xs mt-2 font-normal">
              A simple, 4-step secure guideline to execute inter-bank transfers safely.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="space-y-3 relative">
                <span className="text-3xl font-black text-slate-100 block">{`0${idx + 1}`}</span>
                <h4 className="font-bold text-slate-800 text-sm">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: FAQ / Information */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-primary bg-sky-50 px-3.5 py-1 rounded-full border border-sky-100">
              <ShieldCheck className="size-3.5" /> SECURE CHANNELS
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 leading-tight">
              Safety instructions for online transfers
            </h2>
            <p className="text-slate-500 text-xs leading-relaxed font-normal">
              Always double-check beneficiary account details before authorizing. Bank officials will never contact you asking for PINs, passwords, or transaction OTPs. Under cooperative security protocols, all transaction records are monitored to prevent cyber fraud.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs space-y-2">
                <h4 className="font-bold text-slate-800 text-sm flex items-start gap-2">
                  <HelpCircle className="size-4.5 text-primary shrink-0 mt-0.5" /> {faq.q}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed pl-6.5 font-normal">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
