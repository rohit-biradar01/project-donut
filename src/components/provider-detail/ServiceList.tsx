
import React from "react";
import { Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceProvider } from "@/types";

interface ServiceListProps {
  provider: ServiceProvider;
  onBookService: (serviceId: string) => void;
}

const ServiceList: React.FC<ServiceListProps> = ({ provider, onBookService }) => {
  return (
    <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <h2 className="font-display text-2xl font-bold mb-4">Services</h2>
      
      <div className="grid grid-cols-1 gap-4">
        {provider.services.map(service => (
          <div 
            key={service.id} 
            className="bg-glass rounded-xl p-4 transition-all duration-300 hover:shadow-glow"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-3">{service.description}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <DollarSign size={16} className="text-muted-foreground" />
                    <span>${service.price}</span>
                  </div>
                  {service.duration > 0 && (
                    <div className="flex items-center gap-1">
                      <Clock size={16} className="text-muted-foreground" />
                      <span>{service.duration} minutes</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="md:self-end">
                <Button className="w-full md:w-auto" onClick={() => onBookService(service.id)}>
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
