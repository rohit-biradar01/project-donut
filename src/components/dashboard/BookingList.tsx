
import React from "react";
import { useApp } from "@/contexts/AppContext";
import BookingCard from "../shared/BookingCard";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CalendarX2 } from "lucide-react";

interface BookingListProps {
  status?: "upcoming" | "past" | "all";
}

const BookingList: React.FC<BookingListProps> = ({ status = "all" }) => {
  const { bookings, getProviderById } = useApp();
  
  // Filter bookings based on status
  const filteredBookings = bookings.filter(booking => {
    if (status === "all") return true;
    
    const bookingDate = new Date(booking.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (status === "upcoming") {
      return bookingDate >= today && booking.status !== "cancelled";
    } else if (status === "past") {
      return bookingDate < today || booking.status === "completed" || booking.status === "cancelled";
    }
    
    return true;
  });
  
  if (filteredBookings.length === 0) {
    return (
      <Alert className="bg-glass">
        <CalendarX2 className="h-4 w-4" />
        <AlertDescription>
          No {status === "all" ? "" : status} bookings found.
        </AlertDescription>
      </Alert>
    );
  }
  
  return (
    <div className="space-y-4">
      {filteredBookings.map((booking) => {
        const provider = getProviderById(booking.providerId);
        
        if (!provider) return null;
        
        const service = provider.services.find(s => s.id === booking.serviceId);
        
        if (!service) return null;
        
        return (
          <BookingCard 
            key={booking.id}
            booking={booking}
            provider={provider}
            service={service}
          />
        );
      })}
    </div>
  );
};

export default BookingList;
