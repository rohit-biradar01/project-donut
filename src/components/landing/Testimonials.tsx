
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  text: string;
  rating: number;
  tag: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex K.",
    avatar: "/avatars/testimonial-1.webp",
    text: "Project Donut made finding a qualified tutor incredibly easy. The privacy features gave me confidence to book without worrying about my personal information being shared.",
    rating: 5,
    tag: "Tutoring Services"
  },
  {
    id: 2,
    name: "Jamie T.",
    avatar: "/avatars/testimonial-2.webp",
    text: "As someone who travels frequently, I love being able to find tech support anywhere. The verification system means I always know I'm getting qualified help.",
    rating: 5,
    tag: "Tech Support"
  },
  {
    id: 3,
    name: "Sam R.",
    avatar: "/avatars/testimonial-3.webp",
    text: "The booking process is seamless, and I appreciate the ability to communicate my needs directly through the chat before confirming appointments.",
    rating: 4,
    tag: "Personal Training"
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
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
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[350px] md:h-[250px]">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 transition-opacity duration-500 flex flex-col items-center ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div className="w-full p-6 md:p-8 rounded-2xl bg-glass transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <span className="text-xs text-primary">{testimonial.tag}</span>
                    </div>
                    <div className="ml-auto flex">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  
                  <blockquote className="text-muted-foreground italic">
                    "{testimonial.text}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-secondary"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
