import { Button } from "@/components/ui/button";
import GameCard from "./GameCard";
import game1 from "@/assets/game1.jpg";
import game2 from "@/assets/game2.jpg";
import game3 from "@/assets/game3.jpg";
import game4 from "@/assets/game4.jpg";

const FeaturedGames = () => {
  const games = [
    {
      title: "Cyber Strike: Future War",
      image: game1,
      viewers: "245K",
      streamers: "12.3K",
      category: "FPS"
    },
    {
      title: "Dragon Quest Online",
      image: game2,
      viewers: "189K",
      streamers: "8.7K",
      category: "RPG"
    },
    {
      title: "NightRace: Neon Streets",
      image: game3,
      viewers: "156K",
      streamers: "5.2K",
      category: "Racing"
    },
    {
      title: "Battle Royale Supreme",
      image: game4,
      viewers: "312K",
      streamers: "18.9K",
      category: "Battle Royale"
    }
  ];

  const categories = [
    "Action", "Adventure", "Strategy", "RPG", "Sports", "Racing", "Simulation", "Puzzle"
  ];

  return (
    <section className="py-16 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Games</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the most popular games being streamed right now
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button key={category} variant="category" size="sm">
              {category}
            </Button>
          ))}
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {games.map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Games
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;