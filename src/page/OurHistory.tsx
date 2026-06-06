import { motion } from "framer-motion"
import PageBanner from "../components/common/PageBanner"
import {
  FeatureCard,
  SectionHeader,
  ServiceImageShowcase,
  StatsStrip,
  fadeUp,
  staggerContainer
} from "../components/common/ServicePageParts"
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  Building2,
  CheckCircle2,
  HeartHandshake,
  History,
  Landmark,
  Network,
  ShieldCheck,
  Smartphone,
  Sprout,
  Users,
  WalletCards
} from "lucide-react"

export default function OurHistory() {
  const milestones = [
    {
      year: "1937",
      title: "Community Co-operative Founded",
      icon: <Sprout className="size-5" />,
      desc: "Started as a member-owned agricultural credit society supporting farmers, weavers, and local families.",
      highlight: "People-first banking"
    },
    {
      year: "1960",
      title: "Permanent Banking Office",
      icon: <Building2 className="size-5" />,
      desc: "Moved into a dedicated office and expanded savings, deposits, and general member banking services.",
      highlight: "Stable local presence"
    },
    {
      year: "1988",
      title: "Class-I Co-operative Bank",
      icon: <Landmark className="size-5" />,
      desc: "Recognized for stronger operations, better credit delivery, and wider financial inclusion across Malappuram.",
      highlight: "Formal banking scale"
    },
    {
      year: "2002",
      title: "Vault & Locker Upgrade",
      icon: <ShieldCheck className="size-5" />,
      desc: "Introduced secure locker facilities and stronger vault infrastructure for gold, documents, and valuables.",
      highlight: "Security-first growth"
    },
    {
      year: "2012",
      title: "Core Banking Modernisation",
      icon: <Network className="size-5" />,
      desc: "Computerized counters, improved ledgers, and faster transaction workflows across service desks.",
      highlight: "Digital foundation"
    },
    {
      year: "2019",
      title: "ATM & Micro-ATM Reach",
      icon: <WalletCards className="size-5" />,
      desc: "Expanded cash access with ATM and micro-ATM points for easier service outside regular counters.",
      highlight: "Always-on access"
    },
    {
      year: "2025",
      title: "Mobile Banking Era",
      icon: <Smartphone className="size-5" />,
      desc: "Launched a modern mobile banking experience for transfers, account access, chitty tracking, and alerts.",
      highlight: "Modern member service"
    }
  ]

  const achievements = [
    { value: "89+", label: "Years", sub: "Serving since 1937" },
    { value: "1L+", label: "Members", sub: "Across the region" },
    { value: "3", label: "Branches", sub: "With service desks" },
    { value: "4", label: "ATM Points", sub: "Including micro-ATM" }
  ]

  const values = [
    {
      icon: <History className="size-6 text-[#0F7EC3]" />,
      title: "Deep Local Legacy",
      desc: "Ariyalur families have trusted the bank across generations for savings, credit, and community support."
    },
    {
      icon: <Award className="size-6 text-amber-500" />,
      title: "Democratic Governance",
      desc: "Member participation and elected oversight keep the bank accountable to the people it serves."
    },
    {
      icon: <ShieldCheck className="size-6 text-emerald-500" />,
      title: "Audited Security",
      desc: "Operational discipline, deposit protection, and compliance remain central to every service upgrade."
    },
    {
      icon: <HeartHandshake className="size-6 text-rose-500" />,
      title: "Community Reinvestment",
      desc: "Local deposits support local needs, including homes, small business, education, and agriculture."
    }
  ]

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      <PageBanner
        title="Our History & Legacy"
        subtitle="A nearly nine-decade journey of member-owned banking, local trust, and modern cooperative service."
        category="Corporate Info"
        bgGradient="from-[#0A4E7A] via-[#0F7EC3] to-[#1E3A8A]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-16 space-y-20 sm:space-y-28">
        <StatsStrip stats={achievements} />

        <ServiceImageShowcase
          badge="Established 1937"
          title="Built by the community, grown for the community"
          subtitle="Ariyallur Service Co-operative Bank began with a simple cooperative promise: make dependable financial support available to ordinary families. That promise still guides how we design deposits, loans, chitty schemes, locker facilities, and digital banking."
          image="/history_coop.png"
          imageAlt="Historic cooperative banking scene representing ASCB origins"
          imageLabel="Ariyalur cooperative roots"
          points={[
            "Member-owned and democratically governed",
            "Local deposits reinvested into local needs",
            "Service culture shaped by long relationships",
            "Modern banking without losing cooperative values"
          ]}
          stats={[
            { value: "1937", label: "Founded" },
            { value: "89+", label: "Years" },
            { value: "Class A", label: "Audit" }
          ]}
        />

        <section className="space-y-12">
          <SectionHeader
            badge="Milestones"
            title="Milestones of Trust"
            subtitle="A cleaner look at the moments that shaped ASCB from a local cooperative desk into a modern service bank."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-sky-100 via-[#0F7EC3]/30 to-sky-100" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-x-16">
              {milestones.map((m, idx) => (
                <motion.div
                  key={m.year}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className={`${idx % 2 === 1 ? "lg:translate-y-10" : ""} relative bg-white border border-slate-100 rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-2xl bg-[#0F7EC3] text-white flex items-center justify-center shadow-lg shadow-sky-500/20 shrink-0">
                      {m.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-2xl font-black text-slate-900 font-mono">{m.year}</span>
                        <span className="text-[10px] font-extrabold text-[#0F7EC3] bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-full uppercase tracking-widest">
                          {m.highlight}
                        </span>
                      </div>
                      <h3 className="text-base font-extrabold text-slate-800 mt-2">{m.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-2 font-normal">{m.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <ServiceImageShowcase
          reverse
          badge="Digital transformation"
          title="From handwritten ledgers to smooth digital banking"
          subtitle="The modern ASCB experience brings together computerized counters, secure transfers, ATM access, and mobile-first banking while retaining personal branch support for members who prefer assisted service."
          image="/history_modern.png"
          imageAlt="Modern cooperative bank branch with digital banking signage"
          imageLabel="Modern ASCB service experience"
          points={[
            "Computerized branch counters",
            "RTGS, NEFT and IMPS enabled",
            "ATM and micro-ATM access points",
            "Mobile banking and account alerts"
          ]}
          stats={[
            { value: "24/7", label: "Digital access" },
            { value: "4", label: "ATM points" },
            { value: "3", label: "Branches" }
          ]}
        />

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-7 relative overflow-hidden rounded-3xl min-h-[320px] shadow-2xl bg-slate-900"
          >
            <img src="/branch_hq.png" alt="ASCB head office building" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
            <div className="absolute left-6 right-6 bottom-6 text-white">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-200">Service network</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-2">A stronger branch network for everyday banking</h2>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-1 gap-4"
          >
            {[
              { icon: <Users className="size-5 text-[#0F7EC3]" />, title: "Member Service", text: "Branch teams support deposits, loans, chitty inquiries, lockers, and assisted digital banking." },
              { icon: <BookOpenCheck className="size-5 text-emerald-500" />, title: "Transparent Records", text: "Audited operations and clear member communication keep the cooperative model dependable." },
              { icon: <CheckCircle2 className="size-5 text-amber-500" />, title: "Ready For The Next Decade", text: "The bank continues to improve convenience, safety, and speed across every touchpoint." }
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="size-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-sm">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="space-y-12">
          <SectionHeader
            title="Why Ariyallur Cooperative?"
            subtitle="The principles that keep the bank simple, secure, and close to the community."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value) => (
              <FeatureCard key={value.title} {...value} />
            ))}
          </motion.div>
        </section>

        <section className="bg-slate-900 rounded-3xl p-7 sm:p-10 lg:p-12 text-white overflow-hidden relative">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#0F7EC3]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#38bdf8]">
                <Users className="size-5" />
                <h3 className="text-[10px] font-extrabold uppercase tracking-widest">Our Vision</h3>
              </div>
              <p className="text-slate-200 text-sm leading-relaxed">
                To be the benchmark cooperative bank for financial inclusion, local prosperity, and secure modern banking.
              </p>
            </div>
            <div className="space-y-4 border-t border-white/10 md:border-t-0 md:border-l md:pl-10 pt-8 md:pt-0">
              <div className="flex items-center gap-2 text-sky-300">
                <Landmark className="size-5" />
                <h3 className="text-[10px] font-extrabold uppercase tracking-widest">Our Mission</h3>
              </div>
              <p className="text-slate-200 text-sm leading-relaxed">
                To offer transparent savings, credit, chitty, locker, and digital services that help members move forward with confidence.
              </p>
            </div>
          </div>
          <div className="relative mt-10 flex flex-col sm:flex-row gap-3">
            <a href="/branches" className="inline-flex items-center justify-center gap-1.5 bg-[#0F7EC3] hover:bg-sky-500 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all">
              Find Our Branches <ArrowRight className="size-4" />
            </a>
            <a href="/board-of-directors" className="inline-flex items-center justify-center gap-1.5 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all">
              Meet Our Leadership <ArrowRight className="size-4" />
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
