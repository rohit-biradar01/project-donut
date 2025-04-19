
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ServiceProvider } from "@/types";
import BookingCard from "../shared/BookingCard";
import { useApp } from "@/contexts/AppContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProviderCard from "../shared/ProviderCard";

const DashboardTabs: React.FC = () => {
  const { bookings, favoriteProviders } = useApp();
  const [activeTab, setActiveTab] = useState("upcoming");
  
  // Filter bookings based on status
  const upcomingBookings = bookings.filter(
    booking => booking.status === "confirmed" || booking.status === "pending"
  );
  
  const pastBookings = bookings.filter(
    booking => booking.status === "completed" || booking.status === "cancelled"
  );
  
  return (
    <Tabs 
      defaultValue="upcoming" 
      className="w-full"
      onValueChange={setActiveTab}
      value={activeTab}
    >
      <TabsList className="grid grid-cols-3 mb-6">
        <TabsTrigger value="upcoming">Upcoming Bookings</TabsTrigger>
        <TabsTrigger value="past">Past Bookings</TabsTrigger>
        <TabsTrigger value="favorites">Favorites</TabsTrigger>
      </TabsList>
      
      <TabsContent value="upcoming" className="animate-fade-in">
        <ScrollArea className="h-[calc(100vh-200px)]">
          {upcomingBookings.length > 0 ? (
            <div className="space-y-4 pr-4">
              {upcomingBookings.map(booking => (
                <BookingCard key={booking.id} booking={booking} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No upcoming bookings</h3>
              <p className="text-muted-foreground mb-6">
                Start exploring providers and book your first appointment
              </p>
              <Button asChild>
                <Link to="/discover">Browse Providers</Link>
              </Button>
            </div>
          )}
        </ScrollArea>
      </TabsContent>
      
      <TabsContent value="past" className="animate-fade-in">
        <ScrollArea className="h-[calc(100vh-200px)]">
          {pastBookings.length > 0 ? (
            <div className="space-y-4 pr-4">
              {pastBookings.map(booking => (
                <BookingCard key={booking.id} booking={booking} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No past bookings</h3>
              <p className="text-muted-foreground">
                Your completed and cancelled appointments will appear here
              </p>
            </div>
          )}
        </ScrollArea>
      </TabsContent>
      
      <TabsContent value="favorites" className="animate-fade-in">
        {favoriteProviders.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteProviders.map(provider => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No favorite providers yet</h3>
            <p className="text-muted-foreground mb-6">
              Add providers to your favorites list while browsing
            </p>
            <Button asChild>
              <Link to="/discover">Browse Providers</Link>
            </Button>
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;
