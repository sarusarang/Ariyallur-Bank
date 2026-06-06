import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import ScrollToTop from "./components/common/ScrollToTop"

// Lazy load all pages
const Home = lazy(() => import('./page/Index'))

// Corporate Info
const OurHistory = lazy(() => import('./page/OurHistory'))
const BoardOfDirectors = lazy(() => import('./page/BoardOfDirectors'))
const Branches = lazy(() => import('./page/Branches'))

// Facilities
const SafeDepositLocker = lazy(() => import('./page/SafeDepositLocker'))
const MoneyTransfer = lazy(() => import('./page/MoneyTransfer'))
const MobileBanking = lazy(() => import('./page/MobileBanking'))

// Loans
const GoldLoan = lazy(() => import('./page/GoldLoan'))
const PersonalLoan = lazy(() => import('./page/PersonalLoan'))
const HomeLoan = lazy(() => import('./page/HomeLoan'))

// Deposits
const SavingsDeposit = lazy(() => import('./page/SavingsDeposit'))
const CurrentDeposit = lazy(() => import('./page/CurrentDeposit'))
const FixedDeposit = lazy(() => import('./page/FixedDeposit'))

// Chitti Schemes
const GoldChitty = lazy(() => import('./page/GoldChitty'))
const MultiSectionKuri = lazy(() => import('./page/MultiSectionKuri'))
const RegularChitty = lazy(() => import('./page/RegularChitty'))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
        <span className="text-xs text-slate-400 font-medium">Loading...</span>
      </div>
    </div>
  )
}

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Corporate Info */}
          <Route path="our-history" element={<OurHistory />} />
          <Route path="board-of-directors" element={<BoardOfDirectors />} />
          <Route path="branches" element={<Branches />} />

          {/* Facilities */}
          <Route path="safe-deposit-locker" element={<SafeDepositLocker />} />
          <Route path="money-transfer" element={<MoneyTransfer />} />
          <Route path="mobile-banking" element={<MobileBanking />} />

          {/* Loans */}
          <Route path="gold-loan" element={<GoldLoan />} />
          <Route path="personal-loan" element={<PersonalLoan />} />
          <Route path="home-loan" element={<HomeLoan />} />

          {/* Deposits */}
          <Route path="savings-deposit" element={<SavingsDeposit />} />
          <Route path="current-deposit" element={<CurrentDeposit />} />
          <Route path="fixed-deposit" element={<FixedDeposit />} />

          {/* Chitti Schemes */}
          <Route path="gold-chitty" element={<GoldChitty />} />
          <Route path="multi-section-kuri" element={<MultiSectionKuri />} />
          <Route path="regular-chitty" element={<RegularChitty />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
