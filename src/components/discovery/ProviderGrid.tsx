
import React from "react";
import ProviderCard from "../shared/ProviderCard";
import { ServiceProvider } from "@/types";

interface ProviderGridProps {
  providers: ServiceProvider[];
  onSwipe?: (providerId: string) => void;
  viewType?: "grid" | "list";
}

const ProviderGrid: React.FC<ProviderGridProps> = ({ 
  providers, 
  onSwipe,
  viewType = "grid" 
}) => {
  return (
    <div className={viewType === "grid" 
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
      : "flex flex-col gap-6"
    }>
      {providers.map(provider => (
        <ProviderCard 
          key={provider.id}
          provider={provider}
          onSwipe={onSwipe ? () => onSwipe(provider.id) : undefined}
          className={viewType === "list" ? "max-w-none w-full" : ""}
        />
      ))}
      
      {providers.length === 0 && (
        <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
          <h3 className="text-2xl font-semibold mb-2">No providers found</h3>
          <p className="text-muted-foreground">Try adjusting your filters or search criteria</p>
        </div>
      )}
    </div>
  );
};

export default ProviderGrid;
