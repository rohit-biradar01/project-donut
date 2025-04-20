
import React, { useState } from "react";
import { Calendar, DollarSign, PieChart, MessageSquare, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useApp } from "@/contexts/AppContext";
import BookingRequestCard from "../provider/BookingRequestCard";
import EarningsChart from "../provider/EarningsChart";
import { Booking } from "@/types";

const ProviderDashboardView = () => {
  const { toast } = useToast();
  const { bookings } = useApp();
  const [activeTab, setActiveTab] = useState<"requests" | "calendar" | "earnings">("requests");
  
  // Filter pending bookings as requests
  const pendingRequests = bookings.filter(booking => booking.status === "pending");
  
  // Earnings data (fake/static)
  const weeklyEarnings = 1240;
  const weeklyBookings = 8;
  const monthlyEarnings = 4560;
  
  return (
    <div className="space-y-8 animate-in fade-in">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-display">Provider Dashboard</h2>
          <p className="text-muted-foreground">Manage your bookings and services</p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2" size="sm">
            <Calendar size={16} />
            <span className="hidden sm:inline">View Calendar</span>
          </Button>
          <Button className="flex items-center gap-2 btn-glow" size="sm">
            <MessageSquare size={16} />
            <span className="hidden sm:inline">Messages</span>
          </Button>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-glass hover:shadow-glow transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Weekly Earnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">${weeklyEarnings}</p>
            <p className="text-sm text-muted-foreground">From {weeklyBookings} bookings</p>
          </CardContent>
        </Card>
        
        <Card className="bg-glass hover:shadow-glow transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Upcoming Bookings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{pendingRequests.length}</p>
            <p className="text-sm text-muted-foreground">Requests pending approval</p>
          </CardContent>
        </Card>
        
        <Card className="bg-glass hover:shadow-glow transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              Average Rating
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">4.8</p>
            <p className="text-sm text-muted-foreground">From 27 reviews</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Tab Navigation */}
      <div className="flex border-b border-border">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "requests" ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
          }`}
          onClick={() => setActiveTab("requests")}
        >
          Booking Requests
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "calendar" ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
          }`}
          onClick={() => setActiveTab("calendar")}
        >
          Calendar
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "earnings" ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
          }`}
          onClick={() => setActiveTab("earnings")}
        >
          Earnings
        </button>
      </div>
      
      {/* Content based on active tab */}
      <div className="space-y-6">
        {activeTab === "requests" && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Pending Requests</h3>
            {pendingRequests.length > 0 ? (
              <div className="grid gap-4">
                {pendingRequests.map(request => (
                  <BookingRequestCard key={request.id} booking={request} />
                ))}
              </div>
            ) : (
              <div className="bg-glass p-8 rounded-xl text-center">
                <p className="text-muted-foreground mb-2">No pending booking requests</p>
                <p className="text-sm">New requests will appear here when clients book your services</p>
              </div>
            )}
          </div>
        )}
        
        {activeTab === "calendar" && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Booking Calendar</h3>
            <div className="bg-glass rounded-xl p-6">
              <p className="text-center text-muted-foreground">Calendar view coming soon</p>
            </div>
          </div>
        )}
        
        {activeTab === "earnings" && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Weekly Earnings</h3>
            <Card className="bg-glass">
              <CardContent className="pt-6">
                <EarningsChart />
              </CardContent>
              <CardFooter className="flex justify-between border-t border-border pt-4">
                <div>
                  <p className="text-sm font-medium">Monthly Total</p>
                  <p className="text-2xl font-bold">${monthlyEarnings}</p>
                </div>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <PieChart size={16} />
                  View Full Report
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProviderDashboardView;
