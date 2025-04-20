
import React from "react";
import { useApp } from "@/contexts/AppContext";
import ProviderCard from "../shared/ProviderCard";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Heart } from "lucide-react";

const FavoritesList: React.FC = () => {
  const { favoriteProviders, providers } = useApp();
  
  const favoriteProviderObjects = providers.filter(provider => 
    favoriteProviders.includes(provider.id)
  );
  
  if (favoriteProviderObjects.length === 0) {
    return (
      <Alert className="bg-glass">
        <Heart className="h-4 w-4" />
        <AlertDescription>
          You haven't favorited any providers yet.
        </AlertDescription>
      </Alert>
    );
  }
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold font-display">Your Favorites</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoriteProviderObjects.map(provider => (
          <ProviderCard key={provider.id} provider={provider} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
