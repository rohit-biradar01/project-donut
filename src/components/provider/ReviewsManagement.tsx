
import React from 'react';
import { Star } from 'lucide-react';
import {
  Card,
  CardContent,
} from "@/components/ui/card";

type Review = {
  id: string;
  userName: string;
  rating: number;
  comment: string;
};

// Fake reviews data
const fakeReviews: Review[] = [
  {
    id: 'r1',
    userName: 'Anonymous',
    rating: 5,
    comment: 'Incredible service! Very professional and attentive to my specific needs. Helped me recover from my sports injury quickly.'
  },
  {
    id: 'r2',
    userName: 'Client',
    rating: 4,
    comment: 'Great service overall. Would recommend for deep tissue work especially.'
  },
  {
    id: 'r3',
    userName: 'Anonymous User',
    rating: 5,
    comment: 'Excellent communication and very punctual. The service was exactly what I needed.'
  },
];

const ReviewsManagement: React.FC = () => {
  const averageRating = fakeReviews.reduce((acc, review) => acc + review.rating, 0) / fakeReviews.length;
  
  return (
    <div className="space-y-8 animate-in fade-in">
      <div>
        <h2 className="text-3xl font-bold font-display">Reviews</h2>
        <p className="text-muted-foreground">Client feedback and ratings</p>
      </div>
      
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-glass rounded-xl">
        <div className="text-center md:border-r md:border-border md:pr-6">
          <div className="text-4xl font-bold">{averageRating.toFixed(1)}</div>
          <div className="flex items-center justify-center mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className={i < Math.round(averageRating) ? "fill-primary text-primary" : "text-muted"}
              />
            ))}
          </div>
          <div className="text-sm text-muted-foreground mt-1">{fakeReviews.length} reviews</div>
        </div>
        
        <div className="flex-1 w-full">
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map(rating => {
              const count = fakeReviews.filter(r => r.rating === rating).length;
              const percentage = (count / fakeReviews.length) * 100;
              
              return (
                <div key={rating} className="flex items-center gap-2">
                  <div className="flex items-center w-12">
                    <span>{rating}</span>
                    <Star size={14} className="ml-1 fill-primary text-primary" />
                  </div>
                  <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-500 ease-out"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground w-8">{count}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        {fakeReviews.map(review => (
          <Card key={review.id} className="bg-glass hover:shadow-glow transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">{review.userName}</h3>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < review.rating ? "fill-primary text-primary" : "text-muted"}
                    />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground">{review.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReviewsManagement;
