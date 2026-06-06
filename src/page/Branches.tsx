import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
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
  Accessibility,
  ArrowRight,
  Building2,
  Clock,
  Compass,
  CreditCard,
  Headphones,
  Landmark,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Wifi
} from "lucide-react"

type TabType = "all" | "branches" | "atms"

export default function Branches() {
  const [activeTab, setActiveTab] = useState<TabType>("all")

  const offices = [
    {
      name: "Head Office - Ariyallur",
      address: "K.P.M. Tower, Court Road, Malappuram, Kerala - 676121",
      phone: "+91 483 2762022, 2766347",
      email: "info@ariyallurbank.com",
      ifsc: "ASCB0000001",
      hours: "Mon - Fri: 10:00 AM - 4:00 PM\nSat: 10:00 AM - 1:00 PM",
      isHO: true,
      image: "/branch_hq.png",
      services: ["Locker Facility", "Gold Loan", "NEFT/RTGS", "Chitty Desk"],
      badge: "Head Office"
    },
    {
      name: "Manjeri Town Branch",
      address: "Urban Plaza, Nilambur Road, Manjeri, Kerala - 676122",
      phone: "+91 483 2762023",
      email: "manjeri@ariyallurbank.com",
      ifsc: "ASCB0000002",
      hours: "Mon - Fri: 10:00 AM - 4:00 PM\nSat: 10:00 AM - 1:00 PM",
      isHO: false,
      image: "/history_modern.png",
      services: ["Savings & Current", "Personal Loan", "Money Transfer"],
      badge: "Town Branch"
    },
    {
      name: "Ariyallur Junction Branch",
      address: "Co-operative House, Ariyallur Jn., Malappuram, Kerala - 676125",
      phone: "+91 494 2400125",
      email: "ariyallur@ariyallurbank.com",
      ifsc: "ASCB0000003",
      hours: "Mon - Fri: 10:00 AM - 4:00 PM\nSat: 10:00 AM - 1:00 PM",
      isHO: false,
      image: "/history_coop.png",
      services: ["Fixed Deposit", "Agricultural Credit", "Micro ATM"],
      badge: "Local Branch"
    }
  ]

  const atms = [
    { name: "Head Office ATM", location: "K.P.M. Tower, Court Road, Malappuram", status: "24/7 Active", type: "Full ATM" },
    { name: "Manjeri Town ATM", location: "Urban Plaza, Nilambur Road, Manjeri", status: "24/7 Active", type: "Full ATM" },
    { name: "Ariyallur Junction ATM", location: "Co-operative House, Ariyallur Jn.", status: "24/7 Active", type: "Full ATM" },
    { name: "Calicut Road Micro ATM", location: "ASCB Counter, Near Civil Station, Malappuram", status: "Business Hours", type: "Micro ATM" }
  ]

  const lobbyFeatures = [
    { icon: <Accessibility className="size-6 text-sky-500" />, title: "Accessible Branches", desc: "Ramped entry, accessible counters, priority seating, and assisted service support." },
    { icon: <ShieldCheck className="size-6 text-emerald-500" />, title: "CCTV & Vault Security", desc: "Monitored premises and secure areas for cash, documents, and locker operations." },
    { icon: <Wifi className="size-6 text-indigo-500" />, title: "Digital Help Desk", desc: "Assisted support for mobile banking, fund transfers, mini-statements, and forms." },
    { icon: <CreditCard className="size-6 text-amber-500" />, title: "Card Services", desc: "ATM card issue support, PIN reset guidance, card blocking, and transaction assistance." },
    { icon: <Landmark className="size-6 text-rose-500" />, title: "Locker Guidance", desc: "Private locker viewing support and document guidance at eligible branches." },
    { icon: <Headphones className="size-6 text-teal-500" />, title: "Grievance Desk", desc: "Clear complaint channels with branch-level tracking and fast response discipline." }
  ]

  const tabs: { key: TabType; label: string; count: number }[] = [
    { key: "all", label: "All Locations", count: offices.length + atms.length },
    { key: "branches", label: "Branches", count: offices.length },
    { key: "atms", label: "ATMs & Micro", count: atms.length }
  ]

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      <PageBanner
        title="Our Branches & ATMs"
        subtitle="Find ASCB branches, ATM points, micro-ATM counters, and assisted service desks across the region."
        category="Corporate Info"
        bgGradient="from-[#0A4E7A] via-[#0F7EC3] to-[#1E3A8A]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-16 space-y-20 sm:space-y-28">
        <StatsStrip
          stats={[
            { value: "3", label: "Branches", sub: "Member service desks" },
            { value: "4", label: "ATM Points", sub: "Full and micro access" },
            { value: "24/7", label: "Cash Access", sub: "At active ATMs" },
            { value: "6+", label: "Facilities", sub: "At major branches" }
          ]}
        />

        <ServiceImageShowcase
          badge="Locate us"
          title="Premium branch service with practical local reach"
          subtitle="ASCB combines modern branch infrastructure with the familiar support of a cooperative bank. Use the locator below to find the right service point for deposits, loans, locker inquiries, chitty support, and transfers."
          image="/branch_hq.png"
          imageAlt="ASCB head office branch building"
          imageLabel="Head office and branch service network"
          points={[
            "Dedicated branch counters",
            "ATM and micro-ATM cash access",
            "Locker, loan, and chitty assistance",
            "Digital banking support at branch"
          ]}
          stats={[
            { value: "3", label: "Branches" },
            { value: "4", label: "ATM points" },
            { value: "1937", label: "Legacy" }
          ]}
        />

        <section className="space-y-10">
          <SectionHeader
            badge="Branch locator"
            title="Branch & ATM Network"
            subtitle="Filter by location type to find the nearest branch, ATM, or micro-ATM point."
          />

          <div className="flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                  activeTab === tab.key
                    ? "bg-[#0F7EC3] text-white border-[#0F7EC3] shadow-md shadow-sky-500/20"
                    : "bg-white text-slate-600 border-slate-200 hover:border-sky-300 hover:text-[#0F7EC3]"
                }`}
              >
                {tab.label}
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${activeTab === tab.key ? "bg-white/20" : "bg-slate-100 text-slate-500"}`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {(activeTab === "all" || activeTab === "branches") && (
              <motion.div
                key="branches"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                {offices.map((office, idx) => (
                  <motion.div
                    key={office.name}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08, ease: "easeOut" }}
                    whileHover={{ y: -4 }}
                    className={`bg-white border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col ${
                      office.isHO ? "border-[#0F7EC3]/25 ring-2 ring-[#0F7EC3]/10" : "border-slate-100"
                    }`}
                  >
                    <div className="relative h-48 overflow-hidden bg-slate-900">
                      <img src={office.image} alt={office.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                      <div className="absolute left-4 right-4 bottom-4 flex items-end justify-between gap-4">
                        <div>
                          <span className="text-[9px] text-sky-100 font-extrabold uppercase tracking-widest">{office.badge}</span>
                          <h3 className="text-white font-extrabold text-base mt-1">{office.name}</h3>
                        </div>
                        <Building2 className="size-5 text-white/70 shrink-0" />
                      </div>
                    </div>

                    <div className="p-6 flex-1 space-y-5">
                      <ul className="space-y-3 text-xs text-slate-500">
                        <li className="flex items-start gap-2.5">
                          <MapPin className="size-4 text-[#0F7EC3] shrink-0 mt-0.5" />
                          <span className="leading-relaxed font-normal">{office.address}</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Phone className="size-4 text-[#0F7EC3] shrink-0" />
                          <span className="font-semibold text-slate-700">{office.phone}</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <Mail className="size-4 text-[#0F7EC3] shrink-0" />
                          <span className="font-normal">{office.email}</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Clock className="size-4 text-[#0F7EC3] shrink-0 mt-0.5" />
                          <span className="leading-relaxed whitespace-pre-line font-normal">{office.hours}</span>
                        </li>
                      </ul>

                      <div>
                        <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Available Services</span>
                        <div className="flex flex-wrap gap-1.5">
                          {office.services.map((service) => (
                            <span key={service} className="text-[10px] font-bold text-[#0F7EC3] bg-sky-50 border border-sky-100 px-2 py-0.5 rounded-full">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <span className="block text-[9px] text-slate-400 font-extrabold uppercase tracking-wider">IFSC Code</span>
                        <span className="font-mono font-bold text-slate-700">{office.ifsc}</span>
                      </div>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(office.name + " " + office.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-[#0F7EC3] hover:text-sky-500 transition-colors"
                      >
                        View Map <Compass className="size-3.5" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {(activeTab === "all" || activeTab === "atms") && (
              <motion.div
                key="atms"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {activeTab === "all" && (
                  <h3 className="text-lg font-extrabold text-slate-800 flex items-center gap-2">
                    <CreditCard className="size-5 text-[#0F7EC3]" /> ATM & Micro-ATM Network
                  </h3>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {atms.map((atm, idx) => (
                    <motion.div
                      key={atm.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.06 }}
                      whileHover={{ y: -4 }}
                      className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      <div className="bg-slate-900 p-5 flex justify-between items-start">
                        <div>
                          <h4 className="text-white font-bold text-sm">{atm.name}</h4>
                          <span className="text-[10px] text-slate-400 font-semibold">{atm.type}</span>
                        </div>
                        <CreditCard className="size-5 text-slate-400" />
                      </div>
                      <div className="p-5 space-y-4">
                        <p className="text-xs text-slate-500 font-normal leading-relaxed">{atm.location}</p>
                        <div className={`flex items-center gap-1.5 text-[10px] font-bold self-start px-2.5 py-1 rounded-full border w-fit ${
                          atm.status === "24/7 Active"
                            ? "text-emerald-600 bg-emerald-50 border-emerald-100"
                            : "text-amber-600 bg-amber-50 border-amber-100"
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${atm.status === "24/7 Active" ? "bg-emerald-500" : "bg-amber-500"}`} />
                          {atm.status}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <section className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative min-h-[320px] bg-[#0F1E2E] flex items-center justify-center overflow-hidden">
              <img src="/history_modern.png" alt="Modern ASCB branch exterior" className="absolute inset-0 w-full h-full object-cover opacity-45" />
              <div className="absolute inset-0 bg-slate-950/45" />
              <div className="relative text-center space-y-3 px-6">
                <MapPin className="size-10 text-[#38bdf8] mx-auto" />
                <p className="text-white font-extrabold text-xl">Malappuram District Service Coverage</p>
                <p className="text-slate-300 text-xs sm:text-sm">3 branches, 4 ATM points, and assisted digital service counters.</p>
              </div>
            </div>

            <div className="lg:col-span-5 p-7 sm:p-8 text-white space-y-6">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#38bdf8]">Service promise</span>
                <h3 className="text-xl font-extrabold mt-2">Fast guidance at the right counter</h3>
              </div>
              {[
                "Savings, current, and deposit desk",
                "Gold loan, personal loan, and home loan support",
                "Locker availability and document guidance",
                "Chitty registration and branch callbacks"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <div className="w-8 h-8 rounded-lg bg-[#0F7EC3] flex items-center justify-center shrink-0">
                    <Sparkles className="size-4 text-white" />
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <SectionHeader
            title="Branch Amenities & Facilities"
            subtitle="Every ASCB branch is designed for safe, accessible, and efficient banking."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {lobbyFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </motion.div>
        </section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0F7EC3] to-sky-400 rounded-3xl p-7 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xl shadow-sky-500/10"
        >
          <div className="text-white space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-extrabold">Need help finding the right service point?</h3>
            <p className="text-sky-100 text-xs font-normal">
              Call our central helpline and we will guide you to the nearest ASCB branch, ATM, or service desk.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a href="tel:+914832762022" className="bg-white text-[#0b5c91] hover:bg-sky-50 font-bold text-xs px-6 py-3 rounded-xl shadow-md transition-all active:scale-[0.98] text-center">
              Call +91 483 2762022
            </a>
            <a href="mailto:info@ariyallurbank.com" className="bg-white/15 border border-white/30 text-white hover:bg-white/25 font-bold text-xs px-6 py-3 rounded-xl transition-all text-center inline-flex items-center justify-center gap-1.5">
              Email Us <ArrowRight className="size-4" />
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
