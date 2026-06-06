import { motion } from "framer-motion"
import PageBanner from "../components/common/PageBanner"
import { SectionHeader, StatsStrip, FeatureCard, ProcessSteps, EligibilityBanner, DocCtaBlock, ServiceImageShowcase, staggerContainer } from "../components/common/ServicePageParts"
import { PiggyBank, ShieldCheck, BadgePercent, TrendingUp, CheckCircle2, Sparkles, ArrowRight } from "lucide-react"

export default function SavingsDeposit() {
  const accountTypes = [
    {
      title: "Regular Savings Account",
      interest: "3.50%",
      minBalance: "Rs. 500",
      desc: "Perfect for daily banking, salary credits, and routine money management with zero maintenance hassle.",
      features: ["Free passbook & cheque book", "Internet & mobile banking", "IMPS/NEFT/RTGS transfers", "Linked debit card facility"],
      color: "border-violet-200",
      accentBg: "bg-violet-600",
      accentText: "text-violet-600",
      lightBg: "bg-violet-50"
    },
    {
      title: "Senior Citizen Savings",
      interest: "4.00%",
      minBalance: "Rs. 500",
      desc: "Enhanced interest and priority service for members aged 60 and above, with added safety benefits.",
      features: ["Extra 0.50% interest benefit", "Priority counter queue", "Free doorstep banking", "Auto-renewal FD linkage"],
      color: "border-amber-200",
      accentBg: "bg-amber-500",
      accentText: "text-amber-600",
      lightBg: "bg-amber-50"
    },
    {
      title: "Minor / Student Savings",
      interest: "3.50%",
      minBalance: "Rs. 250",
      desc: "Encourage financial literacy in children and students with a specially designed low-barrier account.",
      features: ["Lowest minimum balance", "Monthly SMS balance alert", "Guardian-linked control", "Free ATM card (first year)"],
      color: "border-teal-200",
      accentBg: "bg-teal-600",
      accentText: "text-teal-600",
      lightBg: "bg-teal-50"
    }
  ]

  const benefits = [
    { icon: <ShieldCheck className="size-6 text-emerald-500" />, title: "DICGC Insured Up to Rs. 5 Lakh", desc: "All savings are insured under DICGC protection, helping keep your principal safe." },
    { icon: <BadgePercent className="size-6 text-violet-600" />, title: "Quarterly Interest Crediting", desc: "Interest is calculated daily and credited to your account every quarter automatically." },
    { icon: <TrendingUp className="size-6 text-amber-500" />, title: "Nomination Facility", desc: "Appoint a nominee for your account to ensure seamless asset transfer on demand." },
    { icon: <PiggyBank className="size-6 text-rose-500" />, title: "Sweep-In / Sweep-Out FD Link", desc: "Automatically sweep idle savings into FD to maximize interest earnings without manual steps." }
  ]

  const steps = [
    { step: "01", title: "Visit Any Branch", desc: "Walk into any ASCB branch with your KYC documents and an initial deposit amount." },
    { step: "02", title: "Fill Application", desc: "Complete the membership and savings account opening form with your details." },
    { step: "03", title: "KYC Verification", desc: "Our bank officer verifies your Aadhaar, PAN, and address proof on the spot." },
    { step: "04", title: "Account Active", desc: "Your savings account is activated within 15 minutes. Passbook issued same day." }
  ]

  const kycDocs = [
    "Aadhaar Card (mandatory for e-KYC)",
    "PAN Card or Form 60 (if PAN not available)",
    "Address proof - utility bill or Voter ID",
    "2 recent passport size photographs",
    "Membership application form to ASCB"
  ]

  const eligibility = [
    "Indian resident individual (18 years and above)",
    "Minors may open with guardian co-operation",
    "Must apply for ASCB membership (Rs. 100 refundable)",
    "HUF, trusts, and institutions also eligible",
    "No minimum credit score required",
    "Suitable for salaried, self-employed, and pensioners"
  ]

  const stats = [
    { value: "3.50%", label: "Savings Rate", sub: "Standard accounts" },
    { value: "4.00%", label: "Senior Rate", sub: "Age 60+" },
    { value: "Rs. 500", label: "Min Balance", sub: "Regular accounts" },
    { value: "Rs. 5L", label: "DICGC Cover", sub: "Per depositor" }
  ]

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      <PageBanner
        title="Savings Deposit"
        subtitle="Grow your money daily while retaining full flexibility. ASCB Savings accounts are designed for every stage of life."
        category="Deposit Schemes"
        bgGradient="from-[#6b21a8] via-[#7c3aed] to-[#8b5cf6]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">

        {/* Stats Strip */}
        <StatsStrip stats={stats} accentClass="text-violet-600" />

        <ServiceImageShowcase
          badge="Everyday banking"
          title="Savings accounts that keep money accessible and productive"
          subtitle="Open a savings account for salary credits, household money management, student savings, pension receipts, and digital banking access with branch support whenever you need it."
          image="/history_modern.png"
          imageAlt="Modern ASCB branch for savings account service"
          imageLabel="Savings account desk"
          points={[
            "Passbook, cheque book, and branch service",
            "Mobile banking and fund transfers",
            "Quarterly interest crediting",
            "Nomination and FD sweep options"
          ]}
          stats={[
            { value: "3.50%", label: "Standard" },
            { value: "4.00%", label: "Senior" },
            { value: "15m", label: "Setup" }
          ]}
          accentClass="text-violet-600"
          accentBgClass="bg-violet-600"
        />

        {/* Section 1  Account Types */}
        <section className="space-y-12">
          <SectionHeader
            badge="Savings Accounts"
            title="Choose Your Savings Account"
            subtitle="Three specialised savings account variants designed for different member profiles and needs."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {accountTypes.map((acc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className={`bg-white border ${acc.color} rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col`}
              >
                <div className={`${acc.lightBg} border-b border-slate-100 px-6 pt-6 pb-4 space-y-2`}>
                  <span className={`text-[10px] font-extrabold ${acc.accentText} uppercase tracking-widest`}>Savings Account</span>
                  <h3 className="font-extrabold text-slate-800 text-base">{acc.title}</h3>
                  <div className="flex items-end gap-1">
                    <span className={`text-2xl font-black ${acc.accentText}`}>{acc.interest} p.a.</span>
                  </div>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed">{acc.desc}</p>
                </div>
                <div className="px-6 py-5 flex-1 space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400 font-semibold">Min Balance:</span>
                    <span className="font-bold text-slate-800">{acc.minBalance}</span>
                  </div>
                  <ul className="space-y-2 pt-1">
                    {acc.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-xs text-slate-600 font-normal">
                        <CheckCircle2 className={`size-3.5 ${acc.accentText} shrink-0`} /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href="tel:+914832762022"
                    className={`w-full text-center block ${acc.accentBg} hover:opacity-90 text-white font-bold text-xs py-3 rounded-xl transition-all duration-200`}
                  >
                    Open This Account
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Section 2  Benefits */}
        <section className="space-y-12">
          <SectionHeader title="Why Choose ASCB Savings?" subtitle="Benefits that make your savings work harder every day." />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((b, i) => <FeatureCard key={i} {...b} />)}
          </motion.div>
        </section>

        {/* Section 3  How to Open */}
        <section className="space-y-10">
          <SectionHeader badge="Simple Process" title="How to Open an Account" subtitle="Four easy steps to get your ASCB savings account activated." />
          <ProcessSteps steps={steps} accentClass="bg-violet-600" />
        </section>

        {/* Section 4  Eligibility */}
        <EligibilityBanner items={eligibility} accentClass="text-violet-600" borderClass="border-violet-100" />

        {/* Section 5  Docs + CTA */}
        <DocCtaBlock
          docs={kycDocs}
          ctaGradient="from-violet-700 to-purple-900"
          ctaIcon={<Sparkles className="size-8 text-violet-200" />}
          ctaTitle="Open your ASCB Savings Account today"
          ctaDesc="Visit any of our branch offices with your KYC documents. Account activation takes as little as 15 minutes."
          ctaPrimaryLabel="Contact Us to Open"
          ctaPrimaryAction={() => { window.location.href = "tel:+914832762022" }}
          ctaSecondaryLabel="Find a Branch"
          ctaSecondaryHref="/branches"
          checkColor="text-violet-500"
          extraInfo={[
            { label: "Account Activation:", value: "Same day" },
            { label: "Membership Fee:", value: "Rs. 100 refundable" }
          ]}
        />

      </div>
    </div>
  )
}
