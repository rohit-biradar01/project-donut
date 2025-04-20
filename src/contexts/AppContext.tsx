
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { ServiceProvider } from '@/types';
import { providers as demoProviders } from '@/data/providers';
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
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ isProvider: boolean } | null>(null);
  const [sosMode, setSosMode] = useState(false);
  const [providers] = useState<ServiceProvider[]>(demoProviders);
  const [profileImage, setProfileImage] = useState<string | null>(
    localStorage.getItem('profileImage') || null
  );
  const { toast } = useToast();

  // Load user state from localStorage on initial render
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

  // Save profile image to localStorage when it changes
  useEffect(() => {
    if (profileImage) {
      localStorage.setItem('profileImage', profileImage);
    } else {
      localStorage.removeItem('profileImage');
    }
  }, [profileImage]);

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

  return (
    <AppContext.Provider value={{ 
      user, 
      setUserType, 
      providers, 
      sosMode, 
      toggleSosMode,
      profileImage,
      setProfileImage
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
