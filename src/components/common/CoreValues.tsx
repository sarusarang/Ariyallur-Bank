import { HeartHandshake, Lock, CircleDollarSign } from "lucide-react"

export default function CoreValues() {
  const values = [
    {
      title: "Community First",
      desc: "Our profits are reinvested locally to fuel cooperative growth, employment, and trade.",
      icon: <HeartHandshake className="size-6 text-[#0F7EC3]" />
    },
    {
      title: "State-of-the-Art Security",
      desc: "Bank safely with advanced encryption systems, SMS alert monitors, and secure vault facilities.",
      icon: <Lock className="size-6 text-[#0F7EC3]" />
    },
    {
      title: "Transparent Terms",
      desc: "Zero hidden fee policies, fair gold loan interest valuations, and clear charges.",
      icon: <CircleDollarSign className="size-6 text-[#0F7EC3]" />
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-[#0b1623] relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[2.5rem_2.5rem] pointer-events-none" />

      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-48 bg-[#0F7EC3]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-32 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-sky-400 font-bold text-xs uppercase tracking-widest bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20">
            Cooperative Values
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-4 tracking-tight">
            A partnership built on absolute trust
          </h2>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed font-normal">
            For over 89 years, our cooperative model has kept community interests at the heart of every decision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center space-y-4 group"
            >
              <div className="w-14 h-14 bg-[#0F7EC3]/15 rounded-2xl flex items-center justify-center mx-auto border border-[#0F7EC3]/20 group-hover:bg-[#0F7EC3]/25 transition-all">
                {val.icon}
              </div>
              <h3 className="font-extrabold text-white text-base md:text-lg">{val.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
