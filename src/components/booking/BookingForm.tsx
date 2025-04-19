
import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { ServiceProvider, Booking } from "@/types";
import { useApp } from "@/contexts/AppContext";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";

interface BookingFormProps {
  provider: ServiceProvider;
  selectedServiceId?: string;
  onClose: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ 
  provider, 
  selectedServiceId,
  onClose
}) => {
  const { addBooking } = useApp();
  const { toast } = useToast();
  
  const [selectedService, setSelectedService] = useState(
    selectedServiceId || provider.services[0].id
  );
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string | undefined>();
  const [duration, setDuration] = useState<number | undefined>();
  const [tip, setTip] = useState(0);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  
  const service = provider.services.find(s => s.id === selectedService);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!service || !date || !time || !duration) {
      toast({
        title: "Missing information",
        description: "Please fill out all required booking details",
        variant: "destructive",
      });
      return;
    }
    
    // Create a new booking object
    const newBooking: Booking = {
      id: `b${Date.now()}`,
      providerId: provider.id,
      serviceId: service.id,
      date: format(date, "yyyy-MM-dd"),
      time,
      duration,
      price: service.price + tip,
      status: "confirmed"
    };
    
    // Add the booking
    addBooking(newBooking);
    
    // Show confirmation
    setConfirmationOpen(true);
  };
  
  // Generate available times based on the provider's availability
  const getAvailableTimes = () => {
    if (!date) return [];
    
    const dayOfWeek = format(date, "EEEE").toLowerCase() as 
      "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
    
    return provider.availability[dayOfWeek] || [];
  };
  
  // Generate duration options based on the selected service
  const getDurationOptions = () => {
    if (!service) return [];
    
    const baseDuration = service.duration || 60;
    return [
      { value: baseDuration, label: `${baseDuration} min` },
      { value: baseDuration * 1.5, label: `${baseDuration * 1.5} min` },
      { value: baseDuration * 2, label: `${baseDuration * 2} min` }
    ];
  };
  
  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Select Service</label>
            <Select 
              value={selectedService}
              onValueChange={setSelectedService}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {provider.services.map(service => (
                  <SelectItem key={service.id} value={service.id}>
                    {service.title} - ${service.price}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Select Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="p-3 pointer-events-auto"
                  disabled={(date) => {
                    const day = format(date, "EEEE").toLowerCase() as 
                      "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
                    return date < new Date() || provider.availability[day]?.length === 0;
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Select Time</label>
            <Select 
              value={time}
              onValueChange={setTime}
              disabled={!date || getAvailableTimes().length === 0}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent>
                {getAvailableTimes().map(timeSlot => (
                  <SelectItem key={timeSlot} value={timeSlot}>
                    {timeSlot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Select Duration</label>
            <Select 
              value={duration?.toString()}
              onValueChange={(value) => setDuration(parseInt(value))}
              disabled={!service}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                {getDurationOptions().map(option => (
                  <SelectItem key={option.value} value={option.value.toString()}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Add Tip (Optional)</label>
            <div className="flex flex-wrap gap-2">
              {[0, 10, 20, 50].map(amount => (
                <Button
                  key={amount}
                  type="button"
                  variant={tip === amount ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => setTip(amount)}
                >
                  {amount === 0 ? "No Tip" : `$${amount}`}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-glass rounded-xl p-4 space-y-3">
          <h4 className="font-semibold">Booking Summary</h4>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Service:</span>
            <span>{service?.title}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Date:</span>
            <span>{date ? format(date, "PPP") : "Not selected"}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Time:</span>
            <span>{time || "Not selected"}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Duration:</span>
            <span>{duration ? `${duration} min` : "Not selected"}</span>
          </div>
          
          <div className="border-t border-border pt-2 mt-2">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Service Fee:</span>
              <span>${service?.price || 0}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Tip:</span>
              <span>${tip}</span>
            </div>
            
            <div className="flex justify-between items-center font-semibold mt-1 pt-1 border-t border-border">
              <span>Total:</span>
              <span>${(service?.price || 0) + tip}</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button 
            type="button" 
            variant="outline" 
            className="flex-1"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            className="flex-1 btn-glow"
            disabled={!service || !date || !time || !duration}
          >
            Confirm Booking
          </Button>
        </div>
      </form>
      
      {/* Confirmation Dialog */}
      <Dialog open={confirmationOpen} onOpenChange={setConfirmationOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <DialogTitle className="text-center">Booking Confirmed!</DialogTitle>
            <DialogDescription className="text-center">
              Your appointment has been scheduled successfully.
            </DialogDescription>
          </DialogHeader>
          
          <div className="bg-glass rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-muted-foreground">Provider:</span>
              <span className="font-medium">{provider.alias}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-muted-foreground">Service:</span>
              <span>{service?.title}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-muted-foreground">Date & Time:</span>
              <span>{date ? format(date, "PPP") : "Not selected"} at {time}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Total:</span>
              <span className="font-semibold">${(service?.price || 0) + tip}</span>
            </div>
          </div>
          
          <DialogFooter className="sm:justify-center">
            <Button 
              onClick={() => {
                setConfirmationOpen(false);
                onClose();
              }}
              className="w-full sm:w-auto"
            >
              View in Dashboard
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookingForm;
