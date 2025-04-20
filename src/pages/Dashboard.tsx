
import React from "react";
import Layout from "@/components/layout/Layout";
import DashboardTabs from "@/components/dashboard/DashboardTabs";
import { useApp } from "@/contexts/AppContext";
import { Button } from "@/components/ui/button";
import { CheckCircle, User, CircleUser } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const { user, setUserType } = useApp();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Improved authentication check that respects localStorage
  React.useEffect(() => {
    const hasVisitedAuth = sessionStorage.getItem('hasVisitedAuth') || localStorage.getItem('isLoggedIn');
    
    if (!hasVisitedAuth && window.location.pathname !== '/auth') {
      toast({
        title: "Authentication required",
        description: "Please log in to access the dashboard.",
        variant: "default",
      });
      navigate('/auth');
    }
  }, [navigate, toast]);

  const handleSwitchUserType = (type: string) => {
    const isProvider = type === "provider";
    setUserType(isProvider);
    
    toast({
      title: `Switched to ${isProvider ? "Provider" : "Client"} View`,
      description: `You are now viewing the dashboard as a ${isProvider ? "service provider" : "client"}.`,
    });
  };

  return (
    <Layout>
      <div className="mb-4">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
          {user?.isProvider ? "Provider Dashboard" : "Your Dashboard"}
        </h1>
        <p className="text-muted-foreground">
          {user?.isProvider 
            ? "Manage your services, bookings, and view your earnings" 
            : "Manage your bookings and favorite providers"}
        </p>
      </div>
      
      {/* Demo mode notice */}
      <Alert className="mb-6 bg-glass border-primary/20 animate-pulse-slow">
        <CheckCircle className="h-4 w-4 text-primary" />
        <AlertDescription>
          <span className="font-medium">Demo Mode:</span> You can switch between client and provider views to see different interfaces.
        </AlertDescription>
      </Alert>
      
      {/* Demo user switcher */}
      <div className="mb-8 p-4 rounded-xl bg-glass border border-primary/20 shadow-neon-sm">
        <p className="text-sm text-muted-foreground mb-2">Demo Mode: Switch between user types</p>
        <Tabs
          defaultValue={user?.isProvider ? "provider" : "client"}
          onValueChange={handleSwitchUserType}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 bg-background/50 backdrop-blur-sm">
            <TabsTrigger value="client" className="flex items-center gap-2 data-[state=active]:shadow-neon-sm">
              <User size={16} />
              Client View
            </TabsTrigger>
            <TabsTrigger value="provider" className="flex items-center gap-2 data-[state=active]:shadow-neon-sm">
              <CircleUser size={16} />
              Provider View
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <DashboardTabs />
    </Layout>
  );
};

export default Dashboard;
