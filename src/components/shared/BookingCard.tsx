
import React from "react";
import { Calendar, Clock, DollarSign, MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Booking } from "@/types";
import { useApp } from "@/contexts/AppContext";
import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";

interface BookingCardProps {
  booking: Booking;
}

const BookingCard: React.FC<BookingCardProps> = ({ booking }) => {
  const { cancelBooking, getProviderById } = useApp();
  const provider = getProviderById(booking.providerId);
  const service = provider?.services.find(s => s.id === booking.serviceId);
  
  if (!provider || !service) return null;
  
  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'MMMM d, yyyy');
    } catch (e) {
      return dateString;
    }
  };
  
  return (
    <div className="bg-glass backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-glow">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 aspect-square">
          <img 
            src={provider.avatar} 
            alt={provider.alias} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-5 flex-1">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-display text-xl font-semibold">{provider.alias}</h3>
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              booking.status === 'confirmed' ? 'bg-primary/20 text-primary' :
              booking.status === 'pending' ? 'bg-yellow-500/20 text-yellow-500' :
              booking.status === 'cancelled' ? 'bg-destructive/20 text-destructive' :
              'bg-green-500/20 text-green-500'
            }`}>
              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </div>
          </div>
          
          <h4 className="font-medium mb-4">{service.title}</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-muted-foreground" />
              <span className="text-sm">{formatDate(booking.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-muted-foreground" />
              <span className="text-sm">{booking.time} ({booking.duration} min)</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign size={16} className="text-muted-foreground" />
              <span className="text-sm">${booking.price}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1.5"
              asChild
            >
              <Link to={`/chat/${booking.providerId}`}>
                <MessageSquare size={16} />
                Message
              </Link>
            </Button>
            
            {booking.status !== 'cancelled' && booking.status !== 'completed' && (
              <Button 
                variant="destructive" 
                size="sm"
                className="flex items-center gap-1.5"
                onClick={() => cancelBooking(booking.id)}
              >
                <X size={16} />
                Cancel Booking
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
