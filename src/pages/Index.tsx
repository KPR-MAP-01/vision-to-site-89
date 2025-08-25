import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedGames from "@/components/FeaturedGames";
import LiveStreams from "@/components/LiveStreams";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedGames />
      <LiveStreams />
      <Footer />
    </div>
  );
};

export default Index;
