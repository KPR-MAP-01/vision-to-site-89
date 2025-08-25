import { Eye, Users } from "lucide-react";

interface GameCardProps {
  title: string;
  image: string;
  viewers: string;
  streamers: string;
  category: string;
}

const GameCard = ({ title, image, viewers, streamers, category }: GameCardProps) => {
  return (
    <div className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card cursor-pointer">
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        
        {/* Live Badge */}
        <div className="absolute top-3 left-3 bg-primary px-2 py-1 rounded-md flex items-center gap-1">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-xs font-medium text-white">LIVE</span>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-3 right-3 bg-card/80 backdrop-blur-sm px-2 py-1 rounded-md">
          <span className="text-xs font-medium text-foreground">{category}</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{viewers}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{streamers}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;