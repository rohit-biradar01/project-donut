
import React from "react";
import { Heart, MapPin, Star, Shield } from "lucide-react";
import { ServiceProvider } from "@/types";
import { useApp } from "@/contexts/AppContext";
import { cn } from "@/lib/utils";

interface ProviderHeaderProps {
  provider: ServiceProvider;
}

const ProviderHeader: React.FC<ProviderHeaderProps> = ({ provider }) => {
  const { toggleFavorite, isFavorite } = useApp();
  
  // Add error handling for image loading
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/400x400?text=Provider+Image";
  };
  
  return (
    <div className="relative flex flex-col md:flex-row gap-6 animate-fade-in">
      <div className="md:w-1/3">
        <div className="aspect-square rounded-2xl overflow-hidden">
          <img 
            src={provider.avatar} 
            alt={provider.alias}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        </div>
      </div>
      
      <div className="md:w-2/3">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
              {provider.alias}
            </h1>
            <div className="flex items-center gap-1 mb-1">
              <MapPin size={16} className="text-muted-foreground" />
              <span className="text-muted-foreground">{provider.location}</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <span className="font-medium">{provider.rating}</span>
              </div>
              <span className="text-muted-foreground">({provider.reviewCount} reviews)</span>
            </div>
          </div>
          
          <button
            onClick={() => toggleFavorite(provider.id)}
            className="p-3 rounded-full hover:bg-secondary transition-colors"
            aria-label={isFavorite(provider.id) ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart 
              size={24} 
              className={cn(
                "transition-colors",
                isFavorite(provider.id) ? "fill-red-500 text-red-500" : ""
              )} 
            />
          </button>
        </div>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {provider.tags.map((tag, index) => (
            <span
              key={index}
              className="tag tag-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="px-3 py-1 bg-secondary rounded-full flex items-center gap-1.5 text-sm">
            <Shield size={14} className="text-primary" />
            <span>Verified Provider</span>
          </div>
          <div className="px-3 py-1 bg-secondary rounded-full flex items-center gap-1.5 text-sm">
            <span>Starting at ${provider.pricePerHour}/hr</span>
          </div>
        </div>
        
        <p className="text-muted-foreground">
          {provider.bio}
        </p>
      </div>
    </div>
  );
};

export default ProviderHeader;
