import { Button } from "@/components/ui/button";
import StreamCard from "./StreamCard";
import game1 from "@/assets/game1.jpg";
import game2 from "@/assets/game2.jpg";
import game3 from "@/assets/game3.jpg";
import game4 from "@/assets/game4.jpg";

const LiveStreams = () => {
  const streams = [
    {
      streamerName: "ProGamer_Alex",
      gameTitle: "Cyber Strike: Future War",
      viewers: "12.4K",
      thumbnail: game1,
      avatar: game1,
      title: "Ranked Gameplay - Road to Legend!"
    },
    {
      streamerName: "MagicMaster_Luna",
      gameTitle: "Dragon Quest Online",
      viewers: "8.7K",
      thumbnail: game2,
      avatar: game2,
      title: "Epic Boss Fight - Dragon Raid!"
    },
    {
      streamerName: "SpeedRacer_Tom",
      gameTitle: "NightRace: Neon Streets",
      viewers: "5.2K",
      thumbnail: game3,
      avatar: game3,
      title: "Street Racing Championship Finals"
    },
    {
      streamerName: "BattleKing_Zane",
      gameTitle: "Battle Royale Supreme",
      viewers: "18.9K",
      thumbnail: game4,
      avatar: game4,
      title: "100 Players - Last Man Standing!"
    },
    {
      streamerName: "TechNinja_Sam",
      gameTitle: "Cyber Strike: Future War",
      viewers: "9.3K",
      thumbnail: game1,
      avatar: game1,
      title: "Weapon Tier List & Gameplay Tips"
    },
    {
      streamerName: "FantasyQueen_Aria",
      gameTitle: "Dragon Quest Online",
      viewers: "6.8K",
      thumbnail: game2,
      avatar: game2,
      title: "Building the Ultimate Character"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Live <span className="text-primary">Streams</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Watch your favorite streamers live right now
            </p>
          </div>
          <Button variant="outline">
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {streams.map((stream, index) => (
            <StreamCard key={index} {...stream} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveStreams;