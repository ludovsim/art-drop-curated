import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import FeaturedCollections from "@/components/FeaturedCollections";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CountdownTimer />
      <FeaturedCollections />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
