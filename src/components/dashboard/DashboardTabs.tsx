
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingList from "./BookingList";
import FavoritesList from "./FavoritesList";
import ProviderDashboardView from "./ProviderDashboardView";
import ServiceManagement from "../provider/ServiceManagement";
import ReviewsManagement from "../provider/ReviewsManagement";
import { useApp } from "@/contexts/AppContext";

const DashboardTabs = () => {
  const { user } = useApp();
  const [activeTab, setActiveTab] = useState("upcoming");

  // If user is a provider, show provider tabs
  if (user?.isProvider) {
    return (
      <Tabs
        defaultValue="dashboard"
        className="w-full"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 mb-8">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="bookings">All Bookings</TabsTrigger>
          <TabsTrigger value="reviews" className="hidden md:inline-flex">Reviews</TabsTrigger>
          <TabsTrigger value="earnings" className="hidden md:inline-flex">Earnings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard" className="animate-in fade-in-50">
          <ProviderDashboardView />
        </TabsContent>
        
        <TabsContent value="services" className="animate-in fade-in-50">
          <ServiceManagement />
        </TabsContent>
        
        <TabsContent value="bookings" className="animate-in fade-in-50">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold font-display">All Bookings</h2>
            <BookingList status="all" />
          </div>
        </TabsContent>
        
        <TabsContent value="reviews" className="animate-in fade-in-50">
          <ReviewsManagement />
        </TabsContent>
        
        <TabsContent value="earnings" className="animate-in fade-in-50">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold font-display">Earnings</h2>
            <div className="bg-glass rounded-xl p-6">
              <p className="text-center text-muted-foreground">Detailed earnings report coming soon</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    );
  }

  // Default client dashboard tabs
  return (
    <Tabs
      defaultValue="upcoming"
      className="w-full"
      value={activeTab}
      onValueChange={setActiveTab}
    >
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="upcoming">Upcoming Bookings</TabsTrigger>
        <TabsTrigger value="past">Past Bookings</TabsTrigger>
        <TabsTrigger value="favorites">Favorites</TabsTrigger>
      </TabsList>
      
      <TabsContent value="upcoming" className="animate-in fade-in-50">
        <BookingList status="upcoming" />
      </TabsContent>
      
      <TabsContent value="past" className="animate-in fade-in-50">
        <BookingList status="past" />
      </TabsContent>
      
      <TabsContent value="favorites" className="animate-in fade-in-50">
        <FavoritesList />
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;
