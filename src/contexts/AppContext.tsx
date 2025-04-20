
import React, { createContext, useContext, useState, useEffect } from "react";
import { ServiceProvider, Booking, User } from "@/types";
import providersData from "@/data/providers";

interface AppContextState {
  providers: ServiceProvider[];
  bookings: Booking[];
  favoriteProviders: string[];
  user: User | null;
  getProviderById: (id: string) => ServiceProvider | undefined;
  addBooking: (booking: Booking) => void;
  cancelBooking: (id: string) => void;
  updateBookingStatus: (id: string, status: "pending" | "confirmed" | "completed" | "cancelled") => void;
  toggleFavorite: (id: string) => void;
  setUserType: (isProvider: boolean) => void;
}

const AppContext = createContext<AppContextState | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [providers] = useState<ServiceProvider[]>(providersData);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [favoriteProviders, setFavoriteProviders] = useState<string[]>([]);
  const [user, setUser] = useState<User | null>({
    isProvider: false,
    favoriteProviders: [],
    bookings: []
  });

  // Create some demo bookings
  useEffect(() => {
    const demoBookings: Booking[] = [
      {
        id: "b1",
        providerId: "p1",
        serviceId: "s1",
        date: "2025-04-20",
        time: "14:00",
        duration: 60,
        price: 140,
        status: "confirmed"
      },
      {
        id: "b2",
        providerId: "p2",
        serviceId: "s1",
        date: "2025-04-25",
        time: "10:00",
        duration: 90,
        price: 180,
        status: "pending"
      },
      {
        id: "b3",
        providerId: "p3",
        serviceId: "s2",
        date: "2025-03-15",
        time: "16:30",
        duration: 60,
        price: 120,
        status: "completed"
      },
      {
        id: "b4",
        providerId: "p1",
        serviceId: "s2",
        date: "2025-04-28",
        time: "11:00",
        duration: 60,
        price: 120,
        status: "pending"
      }
    ];
    
    setBookings(demoBookings);
    
    // Set some initial favorites
    setFavoriteProviders(["p1", "p3"]);
  }, []);
  
  const getProviderById = (id: string) => {
    return providers.find(provider => provider.id === id);
  };
  
  const addBooking = (booking: Booking) => {
    setBookings(prev => [...prev, booking]);
  };
  
  const cancelBooking = (id: string) => {
    setBookings(prev => 
      prev.map(booking => 
        booking.id === id 
          ? { ...booking, status: "cancelled" as const } 
          : booking
      )
    );
  };
  
  const updateBookingStatus = (id: string, status: "pending" | "confirmed" | "completed" | "cancelled") => {
    setBookings(prev => 
      prev.map(booking => 
        booking.id === id 
          ? { ...booking, status } 
          : booking
      )
    );
  };
  
  const toggleFavorite = (id: string) => {
    setFavoriteProviders(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const setUserType = (isProvider: boolean) => {
    setUser(prev => ({
      ...prev,
      isProvider
    }));
  };
  
  return (
    <AppContext.Provider
      value={{
        providers,
        bookings,
        favoriteProviders,
        user,
        getProviderById,
        addBooking,
        cancelBooking,
        updateBookingStatus,
        toggleFavorite,
        setUserType
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
