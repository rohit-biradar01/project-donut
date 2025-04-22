
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ServiceProvider } from "@/types";
import { cn } from "@/lib/utils";

interface GalleryProps {
  provider: ServiceProvider;
}

const Gallery: React.FC<GalleryProps> = ({ provider }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  
  const nextImage = () => {
    setActiveIndex(prev => (prev + 1) % provider.gallery.length);
  };
  
  const prevImage = () => {
    setActiveIndex(prev => (prev - 1 + provider.gallery.length) % provider.gallery.length);
  };
  
  // Add error handling for image loading
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/600x400?text=Image+Not+Found";
  };
  
  return (
    <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
      <h2 className="font-display text-2xl font-bold mb-4">Gallery</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {provider.gallery.map((image, index) => (
          <div 
            key={index} 
            className="aspect-square rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => {
              setActiveIndex(index);
              setShowLightbox(true);
            }}
          >
            <img 
              src={image} 
              alt={`${provider.alias} gallery ${index + 1}`}
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
          </div>
        ))}
      </div>
      
      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl max-h-screen p-4">
            <button
              onClick={() => setShowLightbox(false)}
              className="absolute top-2 right-2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            
            <div className="relative aspect-video bg-glass rounded-xl overflow-hidden">
              <img 
                src={provider.gallery[activeIndex]} 
                alt={`${provider.alias} gallery ${activeIndex + 1}`}
                className="w-full h-full object-contain"
                onError={handleImageError}
              />
              
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="p-2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="p-2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {provider.gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(index);
                    }}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      index === activeIndex ? "bg-primary w-4" : "bg-muted"
                    )}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
