
import React from "react";
import Layout from "@/components/layout/Layout";
import DashboardTabs from "@/components/dashboard/DashboardTabs";
import { useApp } from "@/contexts/AppContext";
import { Button } from "@/components/ui/button";
import { CheckCircle, User, CircleUser } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard: React.FC = () => {
  const { user, setUserType } = useApp();
  const { toast } = useToast();

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
      
      {/* Demo user switcher */}
      <div className="mb-8 p-4 rounded-xl bg-glass">
        <p className="text-sm text-muted-foreground mb-2">Demo Mode: Switch between user types</p>
        <Tabs
          defaultValue={user?.isProvider ? "provider" : "client"}
          onValueChange={handleSwitchUserType}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="client" className="flex items-center gap-2">
              <User size={16} />
              Client View
            </TabsTrigger>
            <TabsTrigger value="provider" className="flex items-center gap-2">
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
