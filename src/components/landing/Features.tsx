
import React from "react";
import SectionHeader from "../shared/SectionHeader";
import { Calendar, Shield, MessageSquare, Search, CreditCard, Clock } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Search />,
    title: "Advanced Discovery",
    description: "Find the perfect match for your service needs with powerful filters and verified reviews."
  },
  {
    icon: <Calendar />,
    title: "Simple Booking",
    description: "Book appointments with just a few clicks and manage your schedule effortlessly."
  },
  {
    icon: <MessageSquare />,
    title: "Secure Messaging",
    description: "Communicate directly with providers without revealing personal contact information."
  },
  {
    icon: <CreditCard />,
    title: "SafePay Protection",
    description: "Our secure payment system ensures your financial details remain private and protected."
  },
  {
    icon: <Shield />,
    title: "Privacy Controls",
    description: "Customize your privacy settings and control exactly what information you share."
  },
  {
    icon: <Clock />,
    title: "Real-time Availability",
    description: "See up-to-date schedules and book at times that work for both parties."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="A Better Way to Book Services" 
          description="Project Donut combines security, convenience, and quality to create the ultimate booking platform."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-glass rounded-xl p-6 transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                {React.cloneElement(feature.icon as React.ReactElement, {
                  size: 24,
                  className: "text-primary"
                })}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
