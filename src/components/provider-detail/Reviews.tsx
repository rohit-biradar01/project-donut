
import React from "react";
import { Star } from "lucide-react";
import { ServiceProvider } from "@/types";

interface ReviewsProps {
  provider: ServiceProvider;
}

const Reviews: React.FC<ReviewsProps> = ({ provider }) => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
      />
    ));
  };
  
  return (
    <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl font-bold">Reviews</h2>
        <div className="flex items-center gap-2">
          <div className="flex">{renderStars(provider.rating)}</div>
          <span className="font-medium">{provider.rating}</span>
          <span className="text-muted-foreground">({provider.reviewCount} reviews)</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {provider.reviews.map(review => (
          <div 
            key={review.id} 
            className="bg-glass rounded-xl p-5 transition-all duration-300 hover:shadow-glow"
          >
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-semibold">{review.userName}</h4>
              <div className="flex">{renderStars(review.rating)}</div>
            </div>
            <p className="text-muted-foreground">"{review.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
