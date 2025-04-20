
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, MessageSquare, Calendar, Heart, Shield, CircleUser, Settings, PieChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useApp } from '@/contexts/AppContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { sosMode, user } = useApp();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Define navigation links based on user type
  const clientNavLinks = [
    { name: 'Discover', path: '/discover', icon: <Heart size={18} /> },
    { name: 'Dashboard', path: '/dashboard', icon: <Calendar size={18} /> },
    { name: 'Messages', path: '/chat', icon: <MessageSquare size={18} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={18} /> },
  ];

  const providerNavLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: <PieChart size={18} /> },
    { name: 'Messages', path: '/chat', icon: <MessageSquare size={18} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={18} /> },
  ];

  const navLinks = user?.isProvider ? providerNavLinks : clientNavLinks;
  
  // Define CTA button based on user type and current route
  const isAuthenticated = location.pathname !== '/' && location.pathname !== '/auth';
  
  let ctaButton;
  if (!isAuthenticated) {
    ctaButton = (
      <Button asChild>
        <Link to="/auth">Sign In</Link>
      </Button>
    );
  } else if (user?.isProvider) {
    ctaButton = (
      <Button asChild>
        <Link to="/dashboard">View Bookings</Link>
      </Button>
    );
  } else {
    ctaButton = (
      <Button asChild>
        <Link to="/discover">Browse Providers</Link>
      </Button>
    );
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-glass backdrop-blur-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="font-display text-lg text-primary-foreground">D</span>
            </div>
            <span className="font-display text-xl font-semibold">Project Donut</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {isAuthenticated && navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={cn(
                  "px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors",
                  location.pathname === link.path 
                    ? "bg-primary/20 text-primary" 
                    : "hover:bg-secondary hover:text-accent-foreground"
                )}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
            {sosMode && (
              <div className="bg-destructive/20 text-destructive px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Shield size={16} />
                <span className="text-sm font-medium">SOS Active</span>
              </div>
            )}
            {ctaButton}
            {isAuthenticated && (
              <div className="ml-2 h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                {user?.isProvider ? (
                  <CircleUser size={20} className="text-primary" />
                ) : (
                  <User size={20} className="text-primary" />
                )}
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-secondary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav 
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-64 bg-background shadow-lg transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-4 h-full flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="font-display text-lg text-primary-foreground">D</span>
              </div>
              <span className="font-display text-lg font-semibold">Project Donut</span>
            </div>
            <button 
              className="p-2 rounded-lg hover:bg-secondary"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-2 flex-grow">
            {isAuthenticated && navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={cn(
                  "px-4 py-3 rounded-lg flex items-center gap-2 transition-colors",
                  location.pathname === link.path 
                    ? "bg-primary/20 text-primary" 
                    : "hover:bg-secondary hover:text-accent-foreground"
                )}
                onClick={toggleMenu}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
            
            {!isAuthenticated && (
              <Link 
                to="/auth"
                className="px-4 py-3 rounded-lg hover:bg-secondary hover:text-accent-foreground flex items-center gap-2 transition-colors"
                onClick={toggleMenu}
              >
                <User size={18} />
                <span>Sign In / Register</span>
              </Link>
            )}
          </div>
          
          {sosMode && (
            <div className="bg-destructive/20 text-destructive rounded-lg p-3 mb-4 flex items-center gap-2">
              <Shield size={18} />
              <span className="font-medium">SOS Mode Active</span>
            </div>
          )}
          
          {ctaButton && (
            <div onClick={toggleMenu}>
              {ctaButton}
            </div>
          )}
        </div>
      </nav>
      
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm md:hidden z-40"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Navbar;
