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
  BadgeCheck,
  BookOpen,
  CalendarDays,
  FileCheck2,
  Landmark,
  Scale,
  ShieldCheck,
  Star,
  Users
} from "lucide-react"

export default function BoardOfDirectors() {
  const leadership = [
    {
      name: "Sri. K. Ramakrishnan",
      role: "President",
      since: "2018",
      photo: "/president.png",
      color: "from-[#0F7EC3] to-sky-400",
      badge: "President",
      desc: "Provides strategic direction for modernization, cooperative compliance, credit quality, and member-first service delivery.",
      expertise: ["Strategic Planning", "Digital Banking", "Co-operative Law"]
    },
    {
      name: "Smt. P. Devika",
      role: "Vice President",
      since: "2019",
      photo: "/vp.png",
      color: "from-emerald-600 to-teal-400",
      badge: "Vice President",
      desc: "Leads member welfare programs, women entrepreneurship support, agricultural credit outreach, and financial literacy work.",
      expertise: ["Member Welfare", "Agricultural Credit", "Financial Literacy"]
    },
    {
      name: "Sri. M. Faisal",
      role: "General Manager",
      since: "2016",
      photo: "/gm.png",
      color: "from-slate-700 to-slate-500",
      badge: "Administration",
      desc: "Directs branch operations, staff administration, internal controls, risk monitoring, and daily service quality.",
      expertise: ["Banking Operations", "Risk Controls", "Staff Administration"]
    }
  ]

  const directorPhotos = ["/president.png", "/vp.png", "/gm.png"]
  const directors = [
    { name: "Sri. T. Balan", role: "Finance Committee", focus: "Budget review and treasury discipline", photo: directorPhotos[0] },
    { name: "Sri. C. H. Mustafa", role: "Credit Control", focus: "Loan portfolio monitoring and recovery oversight", photo: directorPhotos[2] },
    { name: "Smt. V. K. Mini", role: "Member Welfare", focus: "Member service quality and outreach programs", photo: directorPhotos[1] },
    { name: "Sri. K. Gopinathan", role: "Audit & Compliance", focus: "Internal audit and statutory reporting", photo: directorPhotos[0] },
    { name: "Sri. P. Haridas", role: "Agricultural Credit", focus: "Farmer credit support and seasonal lending", photo: directorPhotos[2] },
    { name: "Smt. Safeera Beevi", role: "Women Welfare", focus: "Women-led savings and enterprise initiatives", photo: directorPhotos[1] },
    { name: "Sri. R. Krishnakumar", role: "Infrastructure", focus: "Branch facilities, service access, and security upgrades", photo: directorPhotos[0] },
    { name: "Smt. L. Radha", role: "Social Programs", focus: "Community development and financial inclusion", photo: directorPhotos[1] },
    { name: "Sri. V. Suresh", role: "Legal Affairs", focus: "Policy review, documentation, and legal checks", photo: directorPhotos[2] }
  ]

  const principles = [
    {
      icon: <Users className="size-6 text-[#0F7EC3]" />,
      title: "Democratic Representation",
      desc: "Directors are elected by members, keeping bank decisions aligned with local priorities."
    },
    {
      icon: <Award className="size-6 text-amber-500" />,
      title: "Audit Discipline",
      desc: "Committee-level review supports clean books, clear reporting, and financial accountability."
    },
    {
      icon: <Landmark className="size-6 text-emerald-500" />,
      title: "Regulatory Compliance",
      desc: "Policies are reviewed against cooperative rules, statutory requirements, and banking guidelines."
    },
    {
      icon: <ShieldCheck className="size-6 text-rose-500" />,
      title: "Member-First Decisions",
      desc: "Safety of deposits, fair lending, and service quality are the board's central responsibilities."
    }
  ]

  const committees = [
    { name: "Finance & Audit Committee", members: "T. Balan, K. Gopinathan", chair: "K. Ramakrishnan", icon: <FileCheck2 className="size-5" /> },
    { name: "Credit & Risk Committee", members: "C. H. Mustafa, P. Haridas", chair: "M. Faisal", icon: <Scale className="size-5" /> },
    { name: "Member Welfare Committee", members: "V. K. Mini, Safeera Beevi, L. Radha", chair: "P. Devika", icon: <Users className="size-5" /> },
    { name: "Infrastructure Committee", members: "R. Krishnakumar, V. Suresh", chair: "K. Gopinathan", icon: <Landmark className="size-5" /> }
  ]

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      <PageBanner
        title="Board of Directors"
        subtitle="Meet the member-elected leadership team guiding ASCB with transparency, discipline, and community responsibility."
        category="Corporate Info"
        bgGradient="from-[#0A4E7A] via-[#0F7EC3] to-[#1E3A8A]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-16 space-y-20 sm:space-y-28">
        <StatsStrip
          stats={[
            { value: "12", label: "Board Leaders", sub: "Executive + elected directors" },
            { value: "4", label: "Committees", sub: "Specialized oversight" },
            { value: "1937", label: "Legacy", sub: "Member-owned model" },
            { value: "Class A", label: "Audit Focus", sub: "Disciplined governance" }
          ]}
        />

        <section className="space-y-12">
          <SectionHeader
            badge="Executive team"
            title="Leadership With Clear Accountability"
            subtitle="The executive leadership team coordinates strategy, branch operations, service quality, and member welfare."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, idx) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className={`relative bg-gradient-to-br ${leader.color} h-64 sm:h-72 overflow-hidden`}>
                  <img src={leader.photo} alt={leader.name} className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                    <span className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                      {leader.badge}
                    </span>
                    <Star className="size-5 text-white/80 fill-white/30" />
                  </div>
                </div>

                <div className="p-6 flex-1 space-y-4">
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-800">{leader.name}</h3>
                    <p className="text-xs text-[#0F7EC3] font-bold mt-0.5">{leader.role} - Since {leader.since}</p>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">{leader.desc}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {leader.expertise.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold text-slate-600 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <ServiceImageShowcase
          badge="Governance in action"
          title="Structured oversight behind every banking decision"
          subtitle="Board-level committees review credit, audit, infrastructure, and member welfare so the bank can remain simple for customers while staying rigorous behind the counter."
          image="/branch_hq.png"
          imageAlt="ASCB head office representing board governance"
          imageLabel="Board oversight and branch execution"
          points={[
            "Clear committee ownership",
            "Regular branch and service reviews",
            "Deposit safety and risk discipline",
            "Member welfare built into decisions"
          ]}
          stats={[
            { value: "4", label: "Committees" },
            { value: "12", label: "Leaders" },
            { value: "100%", label: "Member focus" }
          ]}
        />

        <section className="space-y-12">
          <SectionHeader
            badge="Board directory"
            title="Board Members"
            subtitle="Elected representatives overseeing finance, credit, member welfare, audit, infrastructure, and social programs."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {directors.map((director) => (
              <motion.div
                key={director.name}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 bg-slate-900 overflow-hidden">
                  <img src={director.photo} alt={director.name} className="h-full w-full object-cover object-top opacity-95" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute left-4 bottom-4 bg-white/15 backdrop-blur-md border border-white/20 text-white text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full">
                    {director.role}
                  </span>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-extrabold text-slate-800 text-sm">{director.name}</h3>
                      <p className="text-[11px] text-[#0F7EC3] font-bold mt-0.5">Director</p>
                    </div>
                    <BookOpen className="size-4 text-slate-300 shrink-0" />
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">{director.focus}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="space-y-10">
          <SectionHeader
            title="Board Committees"
            subtitle="Focused groups keep reviews regular, practical, and easy to act on."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {committees.map((committee, idx) => (
              <motion.div
                key={committee.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="size-11 rounded-xl bg-sky-50 border border-sky-100 text-[#0F7EC3] flex items-center justify-center shrink-0">
                    {committee.icon}
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="font-extrabold text-slate-800 text-sm">{committee.name}</h3>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between gap-4">
                        <span className="text-slate-400 font-semibold">Members</span>
                        <span className="text-slate-700 font-medium text-right">{committee.members}</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-slate-400 font-semibold">Chairperson</span>
                        <span className="text-[#0F7EC3] font-bold text-right">{committee.chair}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <SectionHeader
            title="Governance Integrity"
            subtitle="Transparent, accountable, and member-first management at every level."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {principles.map((principle) => (
              <FeatureCard key={principle.title} {...principle} />
            ))}
          </motion.div>
        </section>

        <section className="bg-gradient-to-br from-[#0A4E7A] to-[#0F7EC3] rounded-3xl p-7 sm:p-10 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-56 h-56 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="flex items-center gap-2 text-sky-100">
                <CalendarDays className="size-5" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest">Member participation</span>
              </div>
              <h3 className="text-2xl font-extrabold">Join Our Annual General Meeting</h3>
              <p className="text-sky-100 text-sm leading-relaxed font-normal">
                Members can attend the Annual General Body meeting, review bank progress, vote for directors, and participate in key cooperative decisions.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {["Voting Rights", "Policy Transparency", "Annual Audits", "Member Feedback"].map((item) => (
                  <span key={item} className="text-[10px] font-bold text-white bg-white/10 border border-white/20 px-3 py-1 rounded-full">{item}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
              <a href="tel:+914832762022" className="bg-white text-[#0b5c91] hover:bg-sky-50 font-bold text-xs px-6 py-3 rounded-xl shadow-md transition-all active:scale-[0.98] inline-flex items-center justify-center gap-1.5">
                Contact the Board <ArrowRight className="size-4" />
              </a>
              <a href="/our-history" className="bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all text-center inline-flex items-center justify-center gap-1.5">
                Our History <BadgeCheck className="size-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
