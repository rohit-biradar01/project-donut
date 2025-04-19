
import React, { createContext, useContext, useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Booking, ServiceProvider, User } from "@/types";
import { mockProviders } from "@/data/providers";

type AppContextType = {
  user: User;
  providers: ServiceProvider[];
  bookings: Booking[];
  favoriteProviders: ServiceProvider[];
  toggleFavorite: (providerId: string) => void;
  addBooking: (booking: Booking) => void;
  cancelBooking: (bookingId: string) => void;
  getProviderById: (id: string) => ServiceProvider | undefined;
  isFavorite: (providerId: string) => boolean;
  sosMode: boolean;
  toggleSosMode: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const initialUser: User = {
  isProvider: false,
  favoriteProviders: ["p1", "p4", "p7"],
  bookings: []
};

// Mock bookings data
const initialBookings: Booking[] = [
  {
    id: "b1",
    providerId: "p2",
    serviceId: "s4",
    date: "2025-05-05",
    time: "10:00",
    duration: 60,
    price: 90,
    status: "confirmed"
  },
  {
    id: "b2",
    providerId: "p5",
    serviceId: "s10",
    date: "2025-05-10",
    time: "18:00",
    duration: 60,
    price: 60,
    status: "pending"
  }
];

export function AppProvider({ children }: { children: React.ReactNode }) {
  const { toast } = useToast();
  const [user, setUser] = useState<User>(initialUser);
  const [providers] = useState<ServiceProvider[]>(mockProviders);
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const [sosMode, setSosMode] = useState(false);
  
  const favoriteProviders = providers.filter(provider => 
    user.favoriteProviders.includes(provider.id)
  );
  
  const toggleFavorite = (providerId: string) => {
    setUser(prevUser => {
      const isFavorited = prevUser.favoriteProviders.includes(providerId);
      const updatedFavorites = isFavorited
        ? prevUser.favoriteProviders.filter(id => id !== providerId)
        : [...prevUser.favoriteProviders, providerId];
      
      toast({
        title: isFavorited ? "Removed from favorites" : "Added to favorites",
        description: isFavorited 
          ? "Provider has been removed from your favorites" 
          : "Provider has been added to your favorites",
      });
      
      return {
        ...prevUser,
        favoriteProviders: updatedFavorites
      };
    });
  };
  
  const addBooking = (booking: Booking) => {
    setBookings(prev => [...prev, booking]);
    
    toast({
      title: "Booking confirmed!",
      description: "Your appointment has been successfully scheduled.",
    });
  };
  
  const cancelBooking = (bookingId: string) => {
    setBookings(prev => 
      prev.map(booking => 
        booking.id === bookingId 
          ? { ...booking, status: "cancelled" } 
          : booking
      )
    );
    
    toast({
      title: "Booking cancelled",
      description: "Your appointment has been cancelled successfully.",
      variant: "destructive"
    });
  };
  
  const getProviderById = (id: string) => {
    return providers.find(provider => provider.id === id);
  };
  
  const isFavorite = (providerId: string) => {
    return user.favoriteProviders.includes(providerId);
  };
  
  const toggleSosMode = () => {
    setSosMode(prev => !prev);
    toast({
      title: sosMode ? "SOS Mode Deactivated" : "SOS Mode Activated",
      description: sosMode
        ? "Your profile and bookings are now visible again."
        : "Your profile is now hidden and no new bookings can be made.",
      variant: sosMode ? "default" : "destructive",
    });
  };
  
  return (
    <AppContext.Provider 
      value={{ 
        user,
        providers,
        bookings,
        favoriteProviders,
        toggleFavorite,
        addBooking,
        cancelBooking,
        getProviderById,
        isFavorite,
        sosMode,
        toggleSosMode
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  
  return context;
}
