import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import WhoIsThisForSection from "@/components/sections/WhoIsThisForSection";
import ProductEcosystemSection from "@/components/sections/ProductEcosystemSection";
import AIFeaturesSection from "@/components/sections/AIFeaturesSection";
import ManufacturingSection from "@/components/sections/ManufacturingSection";
import GallerySection from "@/components/sections/GallerySection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import WaitlistSection from "@/components/sections/WaitlistSection";
import FAQSection from "@/components/sections/FAQSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <WhoIsThisForSection />
      <ProductEcosystemSection />
      <AIFeaturesSection />
      <ManufacturingSection />
      <GallerySection />
      <HowItWorksSection />
      <RoadmapSection />
      <WaitlistSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
