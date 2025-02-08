import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import HeroSection from "./components/HeroSection";
import WhoAmISection from "./components/WhoAmISection";
import PortfolioSection from "./components/PortfolioSection";
import { WhatDoIOfferSection } from "./components/WhatDoIOfferSection";
import { LetsGetInTouchSection } from './components/LetsGetInTouchSection';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhoAmISection />
      <PortfolioSection />
      <WhatDoIOfferSection />
      <LetsGetInTouchSection />
      <Footer />
    </>
  );
};

export default HomePage;

