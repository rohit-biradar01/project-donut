import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { ServiceProvider, Booking, Service } from '@/types';
import { mockProviders as demoProviders } from '@/data/providers';
import { useToast } from '@/hooks/use-toast';

interface AppContextType {
  user: {
    isProvider: boolean;
  } | null;
  setUserType: (isProvider: boolean) => void;
  providers: ServiceProvider[];
  sosMode: boolean;
  toggleSosMode: () => void;
  profileImage: string | null;
  setProfileImage: (url: string | null) => void;
  selectedTheme: string;
  setSelectedTheme: (theme: string) => void;
  
  bookings: Booking[];
  favoriteProviders: string[];
  toggleFavorite: (providerId: string) => void;
  isFavorite: (providerId: string) => boolean;
  getProviderById: (id: string) => ServiceProvider | undefined;
  addBooking: (booking: Booking) => void;
  cancelBooking: (bookingId: string) => void;
  updateBookingStatus: (bookingId: string, status: Booking['status']) => void;
  providerServices: Service[];
  addService: (service: Service) => void;
  updateService: (serviceId: string, service: Service) => void;
  deleteService: (serviceId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ isProvider: boolean } | null>(null);
  const [sosMode, setSosMode] = useState(false);
  const [providers] = useState<ServiceProvider[]>(demoProviders);
  const [profileImage, setProfileImage] = useState<string | null>(
    localStorage.getItem('profileImage') || null
  );
  const [selectedTheme, setSelectedTheme] = useState<string>(
    localStorage.getItem('selectedTheme') || 'dark'
  );
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [favoriteProviders, setFavoriteProviders] = useState<string[]>(
    JSON.parse(localStorage.getItem('favoriteProviders') || '[]')
  );
  const { toast } = useToast();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true' || 
                      sessionStorage.getItem('hasVisitedAuth') === 'true';
    
    if (isLoggedIn) {
      const storedUserType = localStorage.getItem('userType');
      setUser({ 
        isProvider: storedUserType === 'provider'
      });
    }
  }, []);

  useEffect(() => {
    if (profileImage) {
      localStorage.setItem('profileImage', profileImage);
    } else {
      localStorage.removeItem('profileImage');
    }
  }, [profileImage]);

  useEffect(() => {
    if (selectedTheme) {
      localStorage.setItem('selectedTheme', selectedTheme);
    }
  }, [selectedTheme]);

  useEffect(() => {
    localStorage.setItem('favoriteProviders', JSON.stringify(favoriteProviders));
  }, [favoriteProviders]);

  const setUserType = (isProvider: boolean) => {
    setUser({ isProvider });
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userType', isProvider ? 'provider' : 'client');
  };

  const toggleSosMode = () => {
    const newSosMode = !sosMode;
    setSosMode(newSosMode);
    
    toast({
      title: newSosMode ? "SOS Mode Activated" : "SOS Mode Deactivated",
      description: newSosMode 
        ? "Emergency features are now enabled. Stay safe." 
        : "Emergency features have been turned off.",
      variant: newSosMode ? "destructive" : "default",
    });
  };

  const toggleFavorite = (providerId: string) => {
    setFavoriteProviders(current => {
      if (current.includes(providerId)) {
        return current.filter(id => id !== providerId);
      } else {
        return [...current, providerId];
      }
    });
  };

  const isFavorite = (providerId: string) => {
    return favoriteProviders.includes(providerId);
  };

  const getProviderById = (id: string) => {
    return providers.find(provider => provider.id === id);
  };

  const addBooking = (booking: Booking) => {
    setBookings(current => [...current, booking]);
  };

  const cancelBooking = (bookingId: string) => {
    setBookings(current => 
      current.map(booking => 
        booking.id === bookingId 
          ? { ...booking, status: 'cancelled' as const } 
          : booking
      )
    );
  };

  const updateBookingStatus = (bookingId: string, status: Booking['status']) => {
    setBookings(current => 
      current.map(booking => 
        booking.id === bookingId ? { ...booking, status } : booking
      )
    );
  };

  const [providerServices, setProviderServices] = useState<Service[]>([]);

  const addService = (service: Service) => {
    setProviderServices(current => [...current, service]);
  };

  const updateService = (serviceId: string, service: Service) => {
    setProviderServices(current => 
      current.map(s => s.id === serviceId ? service : s)
    );
  };

  const deleteService = (serviceId: string) => {
    setProviderServices(current => current.filter(s => s.id !== serviceId));
  };

  return (
    <AppContext.Provider value={{ 
      user, 
      setUserType, 
      providers, 
      sosMode, 
      toggleSosMode,
      profileImage,
      setProfileImage,
      selectedTheme,
      setSelectedTheme,
      bookings,
      favoriteProviders,
      toggleFavorite,
      isFavorite,
      getProviderById,
      addBooking,
      cancelBooking,
      updateBookingStatus,
      providerServices,
      addService,
      updateService,
      deleteService
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  
  return context;
};
