import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import ProductExplainSection from "@/components/home/ProductExplainSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import RolesSection from "@/components/home/RolesSection";
import ModulesSection from "@/components/home/ModulesSection";
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
      <ModulesSection />
      <PricingSection />
      <RequestDemoSection />
      <FAQSection />
    </div>
  );
};

export default Home;
