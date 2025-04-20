
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, MessageSquare, Calendar, Heart, Shield, CircleUser, Settings, PieChart, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useApp } from '@/contexts/AppContext';
import { useToast } from '@/hooks/use-toast';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { sosMode, user, setUserType, profileImage } = useApp();
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    // Clear auth data
    localStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('hasVisitedAuth');
    
    // Reset user state
    setUserType(false);
    
    // Show toast notification
    toast({
      title: "Logged out successfully",
      description: "You've been logged out of your account",
    });
    
    // Redirect to home
    navigate('/');
  };

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
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true' || sessionStorage.getItem('hasVisitedAuth') === 'true';
  
  let ctaButton;
  if (!isAuthenticated) {
    ctaButton = (
      <Button asChild className="btn-neon">
        <Link to="/auth">Sign In</Link>
      </Button>
    );
  } else if (user?.isProvider) {
    ctaButton = (
      <Button asChild className="btn-neon">
        <Link to="/dashboard">View Bookings</Link>
      </Button>
    );
  } else {
    ctaButton = (
      <Button asChild className="btn-neon">
        <Link to="/discover">Browse Providers</Link>
      </Button>
    );
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-glass backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center shadow-neon-sm group-hover:shadow-neon-md transition-shadow">
              <span className="font-['Great_Vibes'] text-2xl text-primary-foreground">D</span>
            </div>
            <span className="font-['Great_Vibes'] text-3xl font-semibold group-hover:text-primary transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              Project Donut
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {isAuthenticated && navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={cn(
                  "px-3 py-2 rounded-lg flex items-center gap-1.5 transition-all duration-300",
                  location.pathname === link.path 
                    ? "bg-primary/20 text-primary shadow-neon-sm" 
                    : "hover:bg-secondary hover:text-accent-foreground"
                )}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
            {sosMode && (
              <div className="bg-destructive/20 text-destructive px-3 py-1.5 rounded-full flex items-center gap-1.5 animate-pulse-slow">
                <Shield size={16} />
                <span className="text-sm font-medium">SOS Active</span>
              </div>
            )}
            {ctaButton}
            
            {isAuthenticated && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="rounded-full h-9 w-9 p-0 ml-2">
                    <Avatar className="h-8 w-8 border border-primary/30 transition-all hover:shadow-neon-sm">
                      <AvatarImage src={profileImage || ""} alt="Profile" />
                      <AvatarFallback className="bg-primary/20 text-primary">
                        {user?.isProvider ? (
                          <CircleUser size={20} />
                        ) : (
                          <User size={20} />
                        )}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-glass border-primary/30 shadow-neon-sm">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">{user?.isProvider ? "Provider Account" : "Client Account"}</p>
                      <p className="text-xs text-muted-foreground">demo@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-primary/20" />
                  <DropdownMenuItem onClick={() => navigate('/settings')} className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive focus:text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
          "fixed inset-y-0 right-0 z-50 w-64 bg-background shadow-neon-sm transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-4 h-full flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center shadow-neon-sm">
                <span className="font-brand text-lg text-primary-foreground">D</span>
              </div>
              <span className="font-brand text-lg font-semibold">Project Donut</span>
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
                    ? "bg-primary/20 text-primary shadow-neon-sm" 
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
            <div className="bg-destructive/20 text-destructive rounded-lg p-3 mb-4 flex items-center gap-2 animate-pulse-slow">
              <Shield size={18} />
              <span className="font-medium">SOS Mode Active</span>
            </div>
          )}
          
          {isAuthenticated && (
            <Button 
              variant="outline" 
              className="w-full mb-4 bg-glass text-primary hover:text-primary-foreground border-primary/30"
              onClick={() => {
                handleLogout();
                toggleMenu();
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </Button>
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
