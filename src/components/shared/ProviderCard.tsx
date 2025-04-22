
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MapPin, Star } from "lucide-react";
import { ServiceProvider } from "@/types";
import { useApp } from "@/contexts/AppContext";
import { cn } from "@/lib/utils";

interface ProviderCardProps {
  provider: ServiceProvider;
  onSwipe?: () => void;
  className?: string;
}

const ProviderCard: React.FC<ProviderCardProps> = ({ provider, onSwipe, className }) => {
  const { toggleFavorite, isFavorite } = useApp();
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(provider.id);
  };
  
  const handleSwipe = () => {
    if (onSwipe) {
      setIsAnimating(true);
      setTimeout(() => {
        onSwipe();
        setIsAnimating(false);
      }, 500);
    }
  };

  // Add error handling for image loading
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/400x500?text=Profile+Image";
  };
  
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-xl w-full max-w-sm bg-glass backdrop-blur-md transition-all duration-300",
        isAnimating && "animate-card-swipe",
        className
      )}
    >
      <Link to={`/provider/${provider.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-t-xl">
          <img 
            src={provider.avatar} 
            alt={provider.alias}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onError={handleImageError}
          />
          <button
            onClick={handleFavorite}
            className="absolute top-3 right-3 p-2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors"
            aria-label={isFavorite(provider.id) ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart 
              size={20} 
              className={cn(
                "transition-colors",
                isFavorite(provider.id) ? "fill-red-500 text-red-500" : "text-foreground"
              )} 
            />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="font-display text-xl font-semibold text-white mb-1">{provider.alias}</h3>
            <div className="flex items-center gap-2 mb-1">
              <div className="flex items-center gap-1">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <span className="text-white text-sm">{provider.rating}</span>
              </div>
              <span className="text-white/70 text-xs">({provider.reviewCount} reviews)</span>
            </div>
            <div className="flex items-center gap-1 text-white/90 text-sm">
              <MapPin size={14} />
              <span>{provider.location}</span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {provider.tags.map((tag, index) => (
              <span
                key={index}
                className="tag tag-primary text-xs py-0.5 px-2"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {provider.bio}
          </div>
          <div className="text-lg font-semibold">
            ${provider.pricePerHour}/hour
          </div>
        </div>
        {onSwipe && (
          <div className="flex border-t border-border mt-2">
            <button 
              className="flex-1 py-3 text-center hover:bg-secondary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleSwipe();
              }}
            >
              Skip
            </button>
            <Link 
              to={`/provider/${provider.id}`}
              className="flex-1 py-3 text-center text-primary hover:bg-primary/10 transition-colors font-medium"
            >
              View Profile
            </Link>
          </div>
        )}
      </Link>
    </div>
  );
};

export default ProviderCard;
