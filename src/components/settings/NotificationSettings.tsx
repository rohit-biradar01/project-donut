
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const NotificationSettings: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <div>
          <Label htmlFor="booking-reminders" className="font-medium">Booking Reminders</Label>
          <p className="text-sm text-muted-foreground">
            Receive notifications about upcoming appointments
          </p>
        </div>
        <Switch id="booking-reminders" defaultChecked />
      </div>
      
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <div>
          <Label htmlFor="message-alerts" className="font-medium">Message Alerts</Label>
          <p className="text-sm text-muted-foreground">
            Get notified when you receive new messages
          </p>
        </div>
        <Switch id="message-alerts" defaultChecked />
      </div>
      
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <div>
          <Label htmlFor="booking-requests" className="font-medium">Booking Requests</Label>
          <p className="text-sm text-muted-foreground">
            Get notified about new booking requests
          </p>
        </div>
        <Switch id="booking-requests" defaultChecked />
      </div>
      
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <div>
          <Label htmlFor="promo-notifications" className="font-medium">Promotional Notifications</Label>
          <p className="text-sm text-muted-foreground">
            Receive updates about new features and special offers
          </p>
        </div>
        <Switch id="promo-notifications" />
      </div>
      
      <div className="flex items-center justify-between pb-4">
        <div>
          <Label htmlFor="email-notifications" className="font-medium">Email Notifications</Label>
          <p className="text-sm text-muted-foreground">
            Receive all notifications via email as well
          </p>
        </div>
        <Switch id="email-notifications" defaultChecked />
      </div>
    </div>
  );
};

export default NotificationSettings;
