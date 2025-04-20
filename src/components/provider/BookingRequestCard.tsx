
import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import { Calendar, Clock, DollarSign, Check, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Booking } from "@/types";
import { useApp } from "@/contexts/AppContext";
import { useToast } from "@/hooks/use-toast";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogFooter,
  DialogDescription
} from "@/components/ui/dialog";

interface BookingRequestCardProps {
  booking: Booking;
}

const BookingRequestCard: React.FC<BookingRequestCardProps> = ({ booking }) => {
  const { getProviderById, updateBookingStatus } = useApp();
  const { toast } = useToast();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [action, setAction] = useState<'accept' | 'decline'>();
  const [isProcessing, setIsProcessing] = useState(false);

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

  const handleAction = (actionType: 'accept' | 'decline') => {
    setAction(actionType);
    setShowConfirmDialog(true);
  };

  const confirmAction = () => {
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      const newStatus = action === 'accept' ? 'confirmed' : 'cancelled';
      updateBookingStatus(booking.id, newStatus);
      
      toast({
        title: action === 'accept' ? 'Booking Accepted' : 'Booking Declined',
        description: action === 'accept' 
          ? `You have successfully accepted the booking for ${formatDate(booking.date)}`
          : `You have declined the booking request`,
        variant: action === 'accept' ? 'default' : 'destructive',
      });
      
      setShowConfirmDialog(false);
      setIsProcessing(false);
    }, 800);
  };
  
  return (
    <>
      <Card className="bg-glass overflow-hidden transition-all duration-300 hover:shadow-glow">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="p-5 flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
                <div className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                  New Request
                </div>
              </div>
              
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
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-3 border-t border-border p-4 bg-background/5">
          <Button 
            variant="outline" 
            size="sm"
            className="flex items-center gap-1.5"
            onClick={() => handleAction('decline')}
          >
            <X size={16} />
            Decline
          </Button>
          <Button 
            variant="default" 
            size="sm"
            className="flex items-center gap-1.5"
            onClick={() => handleAction('accept')}
          >
            <Check size={16} />
            Accept
          </Button>
        </CardFooter>
      </Card>
      
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {action === 'accept' ? 'Accept Booking Request?' : 'Decline Booking Request?'}
            </DialogTitle>
            <DialogDescription>
              {action === 'accept' 
                ? 'By accepting, the client will be notified and the booking will be added to your calendar.'
                : 'The client will be notified that you have declined their booking request.'}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex sm:justify-between">
            <Button 
              variant="outline" 
              onClick={() => setShowConfirmDialog(false)}
              disabled={isProcessing}
            >
              Cancel
            </Button>
            <Button 
              variant={action === 'accept' ? 'default' : 'destructive'} 
              onClick={confirmAction}
              disabled={isProcessing}
              className={action === 'accept' ? 'btn-glow' : ''}
            >
              {isProcessing ? 'Processing...' : action === 'accept' ? 'Confirm Accept' : 'Confirm Decline'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookingRequestCard;
