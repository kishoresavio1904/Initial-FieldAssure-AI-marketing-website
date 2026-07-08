import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import ProductExplainSection from "@/components/home/ProductExplainSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import RolesSection from "@/components/home/RolesSection";
import WhatBreaksSection from "@/components/home/WhatBreaksSection";
import PricingSection from "@/components/home/PricingSection";
import RequestDemoSection from "@/components/home/RequestDemoSection";
import FAQSection from "@/components/home/FAQSection";

const Home = () => {
  return (
    <div data-testid="home-page">
      <HeroSection />
      <ProblemSection />
      <ProductExplainSection />
      <HowItWorksSection />
      <RolesSection />
      <WhatBreaksSection />
      <PricingSection />
      <RequestDemoSection />
      <FAQSection />
    </div>
  );
};

export default Home;
