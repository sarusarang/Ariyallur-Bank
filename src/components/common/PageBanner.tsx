import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ChevronRight, Home } from "lucide-react"

interface PageBannerProps {
  title: string
  subtitle: string
  category: string
  categoryUrl?: string
  bgGradient?: string
}

export default function PageBanner({
  title,
  subtitle,
  category,
  categoryUrl = "/",
  bgGradient = "from-[#0A4E7A] via-[#0F7EC3] to-[#1E3A8A]"
}: PageBannerProps) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${bgGradient} text-white py-16 md:py-24 px-4`}>
      {/* Decorative patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-60" />
      
      {/* Mesh lines / grid background using SVG */}
      <svg className="absolute inset-0 size-full opacity-15" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating Animated Circles */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-sky-400 blur-3xl"
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 1.05, 1],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-10 left-10 w-96 h-96 rounded-full bg-indigo-500 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Banner Content */}
        <div className="max-w-3xl space-y-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs text-sky-200/90 font-medium">
            <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="size-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="size-3 text-sky-300" />
            <Link to={categoryUrl} className="hover:text-white transition-colors">
              {category}
            </Link>
            <ChevronRight className="size-3 text-sky-300" />
            <span className="text-white font-semibold truncate">{title}</span>
          </nav>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm md:text-base text-sky-100 font-normal max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Floating badge to add design depth */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl w-44 shrink-0 text-center shadow-lg"
        >
          <span className="text-[10px] text-sky-200 uppercase tracking-widest font-extrabold">Established</span>
          <span className="text-2xl font-black text-white mt-0.5 tracking-wide">1937</span>
          <span className="text-[10px] text-sky-100 font-medium mt-1">Trust & Security</span>
        </motion.div>
      </div>
    </div>
  )
}
