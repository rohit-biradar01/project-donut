
import React, { useState } from "react";
import { Calendar, Clock, DollarSign, MessageSquare, X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Booking, ServiceProvider, Service } from "@/types";
import { useApp } from "@/contexts/AppContext";
import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface BookingCardProps {
  booking: Booking;
  provider?: ServiceProvider;
  service?: Service;
}

const BookingCard: React.FC<BookingCardProps> = ({ booking, provider: propProvider, service: propService }) => {
  const { cancelBooking, getProviderById } = useApp();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // If provider and service are not passed as props, get them from the context
  const contextProvider = getProviderById(booking.providerId);
  const provider = propProvider || contextProvider;
  const service = propService || provider?.services.find(s => s.id === booking.serviceId);
  
  if (!provider || !service) return null;
  
  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'MMMM d, yyyy');
    } catch (e) {
      return dateString;
    }
  };

  const handleCancelBooking = () => {
    setIsDialogOpen(true);
  };

  const confirmCancellation = () => {
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      cancelBooking(booking.id);
      setIsDialogOpen(false);
      setIsProcessing(false);
      
      toast({
        title: "Booking Cancelled",
        description: "Your booking has been cancelled successfully.",
        variant: "default",
      });
    }, 800);
  };
  
  return (
    <>
      <div className="bg-glass backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-glow transform hover:-translate-y-1 group">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 aspect-square overflow-hidden">
            <img 
              src={provider.avatar} 
              alt={provider.alias} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
              <div className="flex items-center gap-2 group-hover:text-primary transition-colors">
                <Calendar size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm">{formatDate(booking.date)}</span>
              </div>
              <div className="flex items-center gap-2 group-hover:text-primary transition-colors">
                <Clock size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm">{booking.time} ({booking.duration} min)</span>
              </div>
              <div className="flex items-center gap-2 group-hover:text-primary transition-colors">
                <DollarSign size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm">${booking.price}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-1.5 transition-all hover:scale-105 hover:shadow-glow"
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
                  className="flex items-center gap-1.5 transition-all hover:scale-105"
                  onClick={handleCancelBooking}
                >
                  <X size={16} />
                  Cancel Booking
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Cancel Booking</DialogTitle>
            <DialogDescription>
              Are you sure you want to cancel your booking with {provider.alias} on {formatDate(booking.date)} at {booking.time}?
            </DialogDescription>
          </DialogHeader>
          
          <div className="bg-glass p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Calendar size={16} className="text-muted-foreground mr-2" />
              <span>{formatDate(booking.date)} at {booking.time}</span>
            </div>
            <div className="flex items-center">
              <DollarSign size={16} className="text-muted-foreground mr-2" />
              <span className="text-muted-foreground">Service fee:</span>
              <span className="ml-auto">${booking.price}</span>
            </div>
          </div>
          
          <DialogFooter className="flex sm:justify-between">
            <Button 
              variant="outline" 
              onClick={() => setIsDialogOpen(false)}
              disabled={isProcessing}
            >
              Keep Booking
            </Button>
            <Button 
              variant="destructive"
              onClick={confirmCancellation}
              disabled={isProcessing}
              className="flex items-center gap-1.5"
            >
              {isProcessing ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-destructive-foreground border-t-transparent"></div>
                  Processing...
                </div>
              ) : (
                <>
                  <X size={16} />
                  Confirm Cancellation
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookingCard;
