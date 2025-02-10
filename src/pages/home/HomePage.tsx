import Navbar from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import WhoAmISection from "./components/WhoAmISection"
import PortfolioSection from "./components/PortfolioSection"
import { WhatDoIOfferSection } from "./components/WhatDoIOfferSection"
import { LetsGetInTouchSection } from "./components/LetsGetInTouchSection"
import HeroSection from "./components/HeroSection"

const HomePage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full max-w-[2000px]">
        <div className="h-screen flex flex-col w-full justify-center items-center">
          <Navbar />
          <HeroSection />
        </div>
        <WhoAmISection />
        <PortfolioSection />
        <WhatDoIOfferSection />
        <LetsGetInTouchSection />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
