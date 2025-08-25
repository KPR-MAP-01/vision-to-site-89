import { Eye, Heart } from "lucide-react";

interface StreamCardProps {
  streamerName: string;
  gameTitle: string;
  viewers: string;
  thumbnail: string;
  avatar: string;
  title: string;
}

const StreamCard = ({ streamerName, gameTitle, viewers, thumbnail, avatar, title }: StreamCardProps) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card cursor-pointer">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Live indicator */}
        <div className="absolute top-3 left-3 bg-primary px-2 py-1 rounded-md flex items-center gap-1">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-xs font-medium text-white">LIVE</span>
        </div>
        
        {/* Viewers count */}
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1">
          <Eye className="w-3 h-3 text-white" />
          <span className="text-xs font-medium text-white">{viewers}</span>
        </div>
        
        {/* Duration overlay */}
        <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-md">
          <span className="text-xs font-medium text-white">2:34:12</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start gap-3">
          <img 
            src={avatar} 
            alt={streamerName}
            className="w-10 h-10 rounded-full border-2 border-border"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-foreground truncate group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{streamerName}</p>
            <p className="text-sm text-muted-foreground">{gameTitle}</p>
          </div>
          <Heart className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default StreamCard;