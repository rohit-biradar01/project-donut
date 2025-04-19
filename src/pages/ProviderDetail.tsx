
import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProviderHeader from "@/components/provider-detail/ProviderHeader";
import ServiceList from "@/components/provider-detail/ServiceList";
import Reviews from "@/components/provider-detail/Reviews";
import Gallery from "@/components/provider-detail/Gallery";
import BookingForm from "@/components/booking/BookingForm";
import { useApp } from "@/contexts/AppContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ProviderDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getProviderById } = useApp();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>();
  
  const provider = id ? getProviderById(id) : undefined;
  
  if (!provider) {
    return <Navigate to="/discover" replace />;
  }
  
  const handleBookService = (serviceId: string) => {
    setSelectedService(serviceId);
    setBookingOpen(true);
  };
  
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <ProviderHeader provider={provider} />
        <ServiceList provider={provider} onBookService={handleBookService} />
        <Reviews provider={provider} />
        <Gallery provider={provider} />
        
        <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Book Appointment</DialogTitle>
            </DialogHeader>
            <BookingForm 
              provider={provider}
              selectedServiceId={selectedService}
              onClose={() => setBookingOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default ProviderDetail;
