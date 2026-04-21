import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { AppPreview } from "@/components/AppPreview";
import { Differentiation } from "@/components/Differentiation";
import { MissionVision } from "@/components/MissionVision";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Features />
        <HowItWorks />
        <AppPreview />
        <Differentiation />
        <MissionVision />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
