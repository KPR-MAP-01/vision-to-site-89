import { Button } from "@/components/ui/button";
import { Play, Users, Eye } from "lucide-react";
import heroImage from "@/assets/gaming-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Gaming Arena" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Live Gaming
            <span className="block text-primary">Experience</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Watch the best streamers, discover new games, and join the ultimate gaming community
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="gaming" size="lg" className="text-lg px-8 py-6">
              <Play className="w-6 h-6 mr-3 fill-white" />
              Start Watching
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Users className="w-6 h-6 mr-3" />
              Join Community
            </Button>
          </div>
          
          {/* Live Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="text-foreground font-semibold">15.2K</span>
              <span className="text-muted-foreground">Live Now</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-primary" />
              <span className="text-foreground font-semibold">892K</span>
              <span className="text-muted-foreground">Watching</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-foreground font-semibold">2.4M</span>
              <span className="text-muted-foreground">Streamers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;