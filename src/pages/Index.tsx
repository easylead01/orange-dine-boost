import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import CaseStudySection from "@/components/CaseStudySection";
import ServicesSection from "@/components/ServicesSection";
import ComparisonSection from "@/components/ComparisonSection";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingContacts from "@/components/FloatingContacts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <HeroSection />
      <ProblemsSection />
      <CaseStudySection />
      <ServicesSection />
      <ComparisonSection />
      <StatsSection />
      <ProcessSection />
      <GuaranteeSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingContacts />
    </div>
  );
};

export default Index;
