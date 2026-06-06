import HomeSlider from "../components/common/HomeSlider"
import WelcomeSection from "../components/common/WelcomeSection"
import QuickLinks from "../components/common/QuickLinks"
import ChittyHighlight from "../components/common/ChittyHighlight"
import CoreValues from "../components/common/CoreValues"
import EmiCalculator from "../components/common/EmiCalculator"
import MobileBanking from "../components/common/MobileBanking"
import NewsRoom from "../components/common/NewsRoom"

export default function Home() {
  return (
    <>
      {/* 1. Hero Animated Slider */}
      <HomeSlider />

      {/* 2. Welcome & Mission Overview */}
      <WelcomeSection />

      {/* 3. Quick Links / Services Cards Grid */}
      <QuickLinks />

      {/* Chitty Schemes Highlight Section */}
      <ChittyHighlight />

      {/* 4. Core Values Section  Dark navy theme */}
      <CoreValues />

      {/* 5. Interactive EMI Loan Calculator */}
      <EmiCalculator />

      {/* 6. Mobile App Highlight Section */}
      <MobileBanking />

      {/* 7. Split News Room & Board of Directors Panel */}
      <NewsRoom />
    </>
  )
}