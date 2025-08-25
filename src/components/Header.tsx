import { Button } from "@/components/ui/button";
import { Play, User, Menu, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-md bg-card/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Play className="w-5 h-5 text-white fill-white" />
            </div>
            <h1 className="text-xl font-bold text-foreground">Climax</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Browse</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Categories</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Live</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-secondary rounded-lg px-3 py-2 min-w-[300px]">
            <Search className="w-4 h-4 text-muted-foreground mr-2" />
            <input 
              placeholder="Search games, streamers..." 
              className="bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground flex-1"
            />
          </div>
          
          <Button variant="outline" size="sm" className="hidden md:flex">
            <User className="w-4 h-4 mr-2" />
            Login
          </Button>
          
          <Button variant="gaming" size="sm">
            Start Streaming
          </Button>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;