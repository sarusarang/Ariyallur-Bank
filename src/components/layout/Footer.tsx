import { 
  Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUpRight
} from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0b1623] text-slate-300 border-t border-slate-800">
      {/* Top Footer Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: About & Regulatory */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 flex items-center justify-center bg-white rounded-lg p-1">
                <img src="/ASCB-LOGO-Trans.png" alt="Logo" className="h-full w-full object-contain" />
              </div>
              <div>
                <span className="block font-bold text-white text-base tracking-tight leading-tight">ARIYALLUR</span>
                <span className="block text-[8px] text-[#0F7EC3] font-bold uppercase tracking-wider leading-none">Service Co-operative Bank Ltd</span>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Established in 1937, Ariyallur Service Co-operative Bank Ltd. has been the cornerstone of financial trust, security, and community growth for nearly nine decades.
            </p>

            {/* DICGC Information Badge */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-xs">
                <ShieldCheck className="size-4 text-[#0F7EC3]" />
                DICGC Insured
              </div>
              <p className="text-[10px] text-slate-400 leading-relaxed">
                Ariyallur Service Co-operative Bank is registered with DICGC. Each depositor is insured up to a maximum of Rs. 5,00,000 for both principal and interest amounts.
              </p>
              <a 
                href="https://www.dicgc.org.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 text-[10px] text-[#0F7EC3] hover:text-sky-300 font-semibold transition-colors"
              >
                Visit DICGC Website <ArrowUpRight className="size-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Products & Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 pb-2 border-b border-slate-800">
              Our Products
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400 font-medium">
              <li>
                <Link to="/savings-deposit" className="hover:text-white hover:underline transition-all flex items-center justify-between group">
                  <span>Savings Accounts</span>
                  <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/fixed-deposit" className="hover:text-white hover:underline transition-all flex items-center justify-between group">
                  <span>Fixed &amp; Term Deposits</span>
                  <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/gold-loan" className="hover:text-white hover:underline transition-all flex items-center justify-between group">
                  <span>Gold Loans (Quick Approval)</span>
                  <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/home-loan" className="hover:text-white hover:underline transition-all flex items-center justify-between group">
                  <span>Home &amp; Property Loans</span>
                  <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/safe-deposit-locker" className="hover:text-white hover:underline transition-all flex items-center justify-between group">
                  <span>Safe Deposit Lockers</span>
                  <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/mobile-banking" className="hover:text-white hover:underline transition-all flex items-center justify-between group">
                  <span>Digital Mobile Banking</span>
                  <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/gold-chitty" className="hover:text-white hover:underline transition-all flex items-center justify-between group">
                  <span>Gold Chitty Schemes</span>
                  <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/multi-section-kuri" className="hover:text-white hover:underline transition-all flex items-center justify-between group">
                  <span>Multi-Section Kuri (Chit)</span>
                  <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/regular-chitty" className="hover:text-white hover:underline transition-all flex items-center justify-between group">
                  <span>Regular Savings Chitty</span>
                  <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 pb-2 border-b border-slate-800">
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400 font-medium">
              <li>
                <Link to="/our-history" className="hover:text-white hover:underline transition-all">Our History</Link>
              </li>
              <li>
                <Link to="/branches" className="hover:text-white hover:underline transition-all">Locate Branches</Link>
              </li>
              <li>
                <a href="/#downloads" className="hover:text-white hover:underline transition-all">Download Account Forms</a>
              </li>
              <li>
                <a href="/#charges" className="hover:text-white hover:underline transition-all">Interest Rates &amp; Service Charges</a>
              </li>
              <li>
                <Link to="/board-of-directors" className="hover:text-white hover:underline transition-all">Board of Directors</Link>
              </li>
              <li>
                <a href="/#contact" className="hover:text-white hover:underline transition-all">Customer Grievance Redressal</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & App Download */}
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 pb-2 border-b border-slate-800">
                Get In Touch
              </h4>
              <ul className="space-y-3.5 text-xs text-slate-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="size-4 mt-0.5 text-[#0F7EC3] shrink-0" />
                  <span>
                    3VR2+HQ6, Chettipadi Rd, Near Vallikkunnu railway station,
                    Ariyallur, Vallikkunnu, Kerala 676312
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="size-4 text-[#0F7EC3] shrink-0" />
                  <span>+91 483 2762022, 2766347</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="size-4 text-[#0F7EC3] shrink-0" />
                  <span>info@ariyallurbank.com</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="size-4 mt-0.5 text-[#0F7EC3] shrink-0" />
                  <span>
                    Mon - Fri: 10:00 AM - 4:00 PM<br />
                    Sat: 10:00 AM - 1:00 PM
                  </span>
                </li>
              </ul>
            </div>

            {/* App Download with stylized QR Code */}
            <div className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-3.5 flex items-center gap-4">
              <div className="bg-white p-1.5 rounded-lg w-16 h-16 flex items-center justify-center shrink-0">
                {/* SVG representing a QR Code */}
                <svg className="size-full text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h6v6H3V3zm2 2v2h2V5H5zm8-2h6v6h-6V3zm2 2v2h2V5h-2zM3 15h6v6H3v-6zm2 2v2h2v-2H5zm10-2h2v2h-2v-2zm2 2h2v2h-2v-2zm-2 2h2v2h-2v-2zm2-4h2v2h-2v-2zm-4 4h2v2h-2v-2zm0-4h2v2h-2v-2zm6-2h2v2h-2v-2zm-2 2h2v2h-2v-2zM10 10h4v4h-4v-4zm2 2v2h2v-2h-2z" />
                </svg>
              </div>
              <div className="space-y-1">
                <span className="block font-bold text-white text-xs leading-tight">Scan to Download App</span>
                <span className="block text-[10px] text-slate-400 leading-normal">
                  Access digital mobile banking from your iOS or Android device.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Social Media and Legal Bar */}
      <div className="bg-slate-950/80 py-8 border-t border-slate-900 text-slate-500 text-[11px] font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="#disclaimer" className="hover:text-slate-300 transition-colors">RBI Disclosures</a>
            <span>|</span>
            <a href="#sitemap" className="hover:text-slate-300 transition-colors">Sitemap</a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-sky-600 hover:text-white text-slate-400 transition-all"
              aria-label="Facebook"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-sky-400 hover:text-white text-slate-400 transition-all"
              aria-label="Twitter"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-sky-700 hover:text-white text-slate-400 transition-all"
              aria-label="LinkedIn"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-red-600 hover:text-white text-slate-400 transition-all"
              aria-label="YouTube"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
                <polygon points="10 15 15 12 10 9" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copywrite and Developer Credits */}
      <div className="bg-[#080f18] py-5 text-center text-[10px] text-slate-600 border-t border-slate-950">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span>
            Copyright (c) {currentYear} Ariyallur Service Co-Operative Bank Ltd. All Rights Reserved.
          </span>
          <span className="flex items-center gap-1.5">
            Designed for excellence. Developed by 
            <a href="https://extechnology.in/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0F7EC3] font-bold hover:underline transition-all">
              Ex Technology
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
