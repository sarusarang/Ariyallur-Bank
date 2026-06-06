import { motion } from "framer-motion"
import { 
  Building, Landmark, PiggyBank, Smartphone, 
  FileDown, Image as ImageIcon, ChevronRight 
} from "lucide-react"

interface LinkItem {
  title: string
  desc: string
  href: string
  icon: React.ReactNode
  colorClass: string
  borderColor: string
  bgHoverGlow: string
}

export default function QuickLinks() {
  const links: LinkItem[] = [
    {
      title: "About Us",
      desc: "Discover our mission, our legacy of service, and our dedication to local communities since 1937.",
      href: "#about",
      icon: <Building className="size-6 text-sky-500" />,
      colorClass: "bg-sky-500/10 text-sky-500",
      borderColor: "border-sky-100 hover:border-sky-300",
      bgHoverGlow: "shadow-sky-500/5 hover:shadow-sky-500/10"
    },
    {
      title: "Loans & Advances",
      desc: "Fast approvals on Gold Loans, Personal Loans, Home Loans, and Business finance at reasonable rates.",
      href: "#loans",
      icon: <Landmark className="size-6 text-amber-500" />,
      colorClass: "bg-amber-500/10 text-amber-500",
      borderColor: "border-amber-100 hover:border-amber-300",
      bgHoverGlow: "shadow-amber-500/5 hover:shadow-amber-500/10"
    },
    {
      title: "Deposit Schemes",
      desc: "Grow your savings systematically with our highly attractive Savings, Fixed, and Recurring deposit terms.",
      href: "#deposits",
      icon: <PiggyBank className="size-6 text-emerald-500" />,
      colorClass: "bg-emerald-500/10 text-emerald-500",
      borderColor: "border-emerald-100 hover:border-emerald-300",
      bgHoverGlow: "shadow-emerald-500/5 hover:shadow-emerald-500/10"
    },
    {
      title: "Facilities & Services",
      desc: "Secure money transfers with RTGS, NEFT, IMPS, Safe lockers, SMS alerts, and modern ATM networks.",
      href: "#facilities",
      icon: <Smartphone className="size-6 text-indigo-500" />,
      colorClass: "bg-indigo-500/10 text-indigo-500",
      borderColor: "border-indigo-100 hover:border-indigo-300",
      bgHoverGlow: "shadow-indigo-500/5 hover:shadow-indigo-500/10"
    },
    {
      title: "Download Zone",
      desc: "Easily download PDF account opening packets, KYC updation forms, and other administrative requests.",
      href: "#downloads",
      icon: <FileDown className="size-6 text-violet-500" />,
      colorClass: "bg-violet-500/10 text-violet-500",
      borderColor: "border-violet-100 hover:border-violet-300",
      bgHoverGlow: "shadow-violet-500/5 hover:shadow-violet-500/10"
    },
    {
      title: "Media Gallery",
      desc: "Browse our photographic records of corporate events, branch openings, and social outreach initiatives.",
      href: "#gallery",
      icon: <ImageIcon className="size-6 text-rose-500" />,
      colorClass: "bg-rose-500/10 text-rose-500",
      borderColor: "border-rose-100 hover:border-rose-300",
      bgHoverGlow: "shadow-rose-500/5 hover:shadow-rose-500/10"
    }
  ]

  // Animation variants for grid container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  } as const

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } }
  } as const

  return (
    <section className="py-20 bg-slate-50/50" id="quick-links">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0F7EC3] font-bold text-xs uppercase tracking-widest bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
            Primary Portals
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 leading-tight">
            Comprehensive financial services tailored to your needs
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-3 font-normal leading-relaxed">
            Select a pathway below to view detailed rates, download documents, locate facilities, or contact our customer desk.
          </p>
        </div>

        {/* Quick Links Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {links.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`bg-white border ${link.borderColor} rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl ${link.bgHoverGlow}`}
            >
              <div className="space-y-4">
                {/* Icon wrapper */}
                <div className={`w-12 h-12 rounded-xl ${link.colorClass} flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300`}>
                  {link.icon}
                </div>
                
                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-extrabold text-slate-800 text-base md:text-lg group-hover:text-[#0F7EC3] transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                    {link.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Trigger Link */}
              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center gap-1.5 text-xs font-bold text-[#0F7EC3] group-hover:text-primary transition-colors">
                <span>Access Portal</span>
                <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
