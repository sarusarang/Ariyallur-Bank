import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, FileText, ArrowRight } from "lucide-react"

//  Shared animation presets 
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
}
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

//  Section Header 
interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
}
export function SectionHeader({ badge, title, subtitle, align = "center" }: SectionHeaderProps) {
  const textAlign = align === "center" ? "text-center max-w-2xl mx-auto" : "text-left"
  return (
    <div className={`${textAlign} space-y-2`}>
      {badge && (
        <span className="inline-flex items-center text-[10px] font-bold text-[#0F7EC3] bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100 uppercase tracking-widest">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">{title}</h2>
      {subtitle && <p className="text-slate-500 text-xs sm:text-sm mt-1 font-normal leading-relaxed">{subtitle}</p>}
    </div>
  )
}

//  Feature Card 
interface FeatureCardProps {
  icon: ReactNode
  title: string
  desc: string
}
export function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -5 }}
      className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs hover:shadow-xl transition-all duration-300 space-y-3"
    >
      <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
        {icon}
      </div>
      <h3 className="font-bold text-slate-800 text-sm">{title}</h3>
      <p className="text-xs text-slate-500 leading-relaxed font-normal">{desc}</p>
    </motion.div>
  )
}

interface ShowcaseStat {
  value: string
  label: string
}

interface ServiceImageShowcaseProps {
  badge: string
  title: string
  subtitle: string
  image: string
  imageAlt: string
  imageLabel?: string
  points: string[]
  stats?: ShowcaseStat[]
  reverse?: boolean
  accentClass?: string
  accentBgClass?: string
}

export function ServiceImageShowcase({
  badge,
  title,
  subtitle,
  image,
  imageAlt,
  imageLabel,
  points,
  stats,
  reverse = false,
  accentClass = "text-[#0F7EC3]",
  accentBgClass = "bg-[#0F7EC3]"
}: ServiceImageShowcaseProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: reverse ? 28 : -28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={`space-y-6 ${reverse ? "lg:order-2" : ""}`}
      >
        <div className="space-y-3">
          <span className={`inline-flex items-center text-[10px] font-extrabold ${accentClass} bg-white px-3 py-1.5 rounded-full border border-slate-100 uppercase tracking-widest shadow-sm`}>
            {badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
            {title}
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {points.map((point, i) => (
            <div key={i} className="flex items-start gap-2.5 rounded-2xl bg-white border border-slate-100 p-3 shadow-xs">
              <CheckCircle2 className={`size-4 ${accentClass} shrink-0 mt-0.5`} />
              <span className="text-xs font-semibold text-slate-600 leading-relaxed">{point}</span>
            </div>
          ))}
        </div>

        {stats && (
          <div className="grid grid-cols-3 gap-3 pt-1">
            {stats.map((stat, i) => (
              <div key={i} className="rounded-2xl bg-white border border-slate-100 p-4 shadow-xs">
                <span className={`block text-xl sm:text-2xl font-black ${accentClass}`}>{stat.value}</span>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, x: reverse ? -28 : 28 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`relative ${reverse ? "lg:order-1" : ""}`}
      >
        <div className="relative overflow-hidden rounded-3xl border border-white shadow-2xl bg-slate-900">
          <img src={image} alt={imageAlt} className="w-full h-72 sm:h-96 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/5 to-transparent" />
          {imageLabel && (
            <div className="absolute left-5 right-5 bottom-5">
              <span className="inline-flex items-center rounded-full bg-white/12 backdrop-blur-md border border-white/20 px-3 py-1.5 text-[10px] font-extrabold text-white uppercase tracking-widest">
                {imageLabel}
              </span>
            </div>
          )}
        </div>
        <div className={`absolute -bottom-5 -right-2 sm:-right-5 ${accentBgClass} text-white rounded-2xl px-5 py-4 shadow-xl`}>
          <span className="block text-2xl font-black">ASCB</span>
          <span className="text-[10px] font-bold uppercase tracking-wider opacity-90">Since 1937</span>
        </div>
      </motion.div>
    </section>
  )
}

//  Stats Strip 
interface Stat { value: string; label: string; sub?: string }
interface StatsStripProps { stats: Stat[]; accentClass?: string }
export function StatsStrip({ stats, accentClass = "text-[#0F7EC3]" }: StatsStripProps) {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-100">
        {stats.map((s, i) => (
          <div key={i} className="p-5 text-center hover:bg-slate-50/50 transition-colors">
            <span className={`block text-2xl sm:text-3xl font-extrabold ${accentClass} font-mono`}>{s.value}</span>
            <span className="block text-xs font-bold text-slate-700 mt-1">{s.label}</span>
            {s.sub && <span className="block text-[10px] text-slate-400 mt-0.5">{s.sub}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

//  Process Steps 
interface Step { step: string; title: string; desc: string }
interface ProcessStepsProps { steps: Step[]; accentClass?: string }
export function ProcessSteps({ steps, accentClass = "bg-[#0F7EC3]" }: ProcessStepsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="relative bg-white border border-slate-100 rounded-2xl p-6 shadow-xs hover:shadow-lg transition-all space-y-3"
        >
          {/* Connector line */}
          {i < steps.length - 1 && (
            <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-slate-200 z-10" />
          )}
          <div className={`w-9 h-9 rounded-xl ${accentClass} text-white flex items-center justify-center font-extrabold text-sm`}>
            {s.step}
          </div>
          <h3 className="font-bold text-slate-800 text-sm">{s.title}</h3>
          <p className="text-xs text-slate-500 leading-relaxed font-normal">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}

//  Document List 
interface DocListProps { docs: string[]; checkColor?: string }
export function DocList({ docs, checkColor = "text-emerald-500" }: DocListProps) {
  return (
    <ul className="space-y-3">
      {docs.map((doc, i) => (
        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 font-normal">
          <CheckCircle2 className={`size-4 ${checkColor} shrink-0 mt-0.5`} />
          <span className="leading-relaxed">{doc}</span>
        </li>
      ))}
    </ul>
  )
}

//  Docs + CTA Block 
interface DocCtaBlockProps {
  docs: string[]
  ctaGradient: string
  ctaIcon: ReactNode
  ctaTitle: string
  ctaDesc: string
  ctaPrimaryLabel: string
  ctaPrimaryAction: () => void
  ctaSecondaryLabel?: string
  ctaSecondaryHref?: string
  checkColor?: string
  extraInfo?: { label: string; value: string }[]
}
export function DocCtaBlock({
  docs, ctaGradient, ctaIcon, ctaTitle, ctaDesc,
  ctaPrimaryLabel, ctaPrimaryAction, ctaSecondaryLabel,
  ctaSecondaryHref, checkColor, extraInfo
}: DocCtaBlockProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-6">
        <h3 className="text-base font-extrabold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-3">
          <FileText className="size-5 text-[#0F7EC3]" /> Documents Required
        </h3>
        <DocList docs={docs} checkColor={checkColor} />
      </div>

      <div className={`bg-gradient-to-br ${ctaGradient} text-white rounded-3xl p-8 shadow-xl relative overflow-hidden flex flex-col justify-between`}>
        <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="space-y-3">
          <div className="size-10">{ctaIcon}</div>
          <h3 className="text-xl font-extrabold">{ctaTitle}</h3>
          <p className="text-white/80 text-xs leading-relaxed font-normal">{ctaDesc}</p>
          {extraInfo && (
            <div className="pt-2 space-y-1.5 text-xs border-t border-white/20 mt-3">
              {extraInfo.map((ei, i) => (
                <div key={i} className="flex justify-between">
                  <span className="font-medium opacity-70">{ei.label}</span>
                  <span className="font-bold">{ei.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button
            onClick={ctaPrimaryAction}
            className="inline-flex items-center justify-center gap-1.5 bg-white text-slate-800 hover:opacity-90 font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-all active:scale-[0.98]"
          >
            {ctaPrimaryLabel} <ArrowRight className="size-4" />
          </button>
          {ctaSecondaryLabel && ctaSecondaryHref && (
            <a
              href={ctaSecondaryHref}
              className="border border-white/30 text-white hover:bg-white/10 font-bold text-xs px-5 py-3 rounded-xl transition-all text-center"
            >
              {ctaSecondaryLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

//  Eligibility Banner 
interface EligibilityBannerProps { items: string[]; accentClass?: string; borderClass?: string }
export function EligibilityBanner({ items, accentClass = "text-[#0F7EC3]", borderClass = "border-sky-100" }: EligibilityBannerProps) {
  return (
    <div className={`bg-sky-50/50 border ${borderClass} rounded-2xl p-6`}>
      <h3 className={`text-xs font-extrabold ${accentClass} uppercase tracking-widest mb-4`}>Eligibility Criteria</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-normal">
            <CheckCircle2 className={`size-3.5 ${accentClass} shrink-0`} />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
