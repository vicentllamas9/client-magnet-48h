import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import BonusSection from "@/components/BonusSection";
import AuthoritySection from "@/components/AuthoritySection";
import OfferSection from "@/components/OfferSection";
import UrgencySection from "@/components/UrgencySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <BonusSection />
      <AuthoritySection />
      <OfferSection />
      <UrgencySection />
    </div>
  );
};

export default Index;
