import { useState } from "react";
import { Eye, Heart, Bookmark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  name: string;
  description: string;
  logo: string;
  link: string;
  status: "ongoing" | "upcoming";
  initialViews: number;
  initialLikes: number;
  onLearnMore: () => void;
  onAddToWatchlist?: () => void;
}

const ProjectCard = ({
  name,
  description,
  logo,
  link,
  status,
  initialViews,
  initialLikes,
  onLearnMore,
  onAddToWatchlist,
}: ProjectCardProps) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isWatchlisted, setIsWatchlisted] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const handleWatchlist = () => {
    setIsWatchlisted(!isWatchlisted);
    if (onAddToWatchlist) {
      onAddToWatchlist();
    }
  };

  return (
    <Card className={`group relative overflow-hidden bg-card border-border transition-all duration-300 hover:-translate-y-1 ${
      status === "ongoing" 
        ? "animate-card-glow hover:border-primary/70" 
        : "hover:border-primary/50 hover:shadow-card"
    }`}>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="h-16 flex items-center">
            <img src={logo} alt={`${name} logo`} className="max-h-16 max-w-[200px] object-contain" />
          </div>
          {status === "ongoing" && (
            <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent font-medium">
              Beta
            </span>
          )}
          {status === "upcoming" && (
            <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground font-medium">
              Coming Soon
            </span>
          )}
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2 text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Eye className="w-4 h-4" />
            <span>{initialViews.toLocaleString()}</span>
          </div>
          <button
            onClick={handleLike}
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <Heart
              className={`w-4 h-4 transition-all ${
                isLiked ? "fill-accent text-accent" : ""
              }`}
            />
            <span>{likes}</span>
          </button>
        </div>

        <Button
          onClick={onLearnMore}
          variant="secondary"
          className="w-full font-semibold"
        >
          Read The Project Brief
        </Button>

        <Button
          onClick={handleWatchlist}
          variant="outline"
          className="w-full font-semibold"
        >
          <Bookmark className={`w-4 h-4 mr-2 ${isWatchlisted ? "fill-current" : ""}`} />
          {isWatchlisted ? "Added to Watchlist" : "Add To Watchlist"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
