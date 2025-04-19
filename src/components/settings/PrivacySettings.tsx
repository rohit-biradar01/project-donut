
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { useApp } from "@/contexts/AppContext";

const PrivacySettings: React.FC = () => {
  const { sosMode, toggleSosMode } = useApp();
  
  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between p-6 rounded-xl bg-glass">
        <div>
          <h3 className="text-xl font-semibold mb-1">SOS Mode</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Temporarily disable your profile and prevent new bookings.
            Use this in emergency situations to quickly go invisible.
          </p>
          <Button 
            variant={sosMode ? "destructive" : "outline"} 
            onClick={toggleSosMode}
            className="flex items-center gap-2"
          >
            <Shield size={16} />
            {sosMode ? "Deactivate SOS Mode" : "Activate SOS Mode"}
          </Button>
        </div>
        <div className="h-12 w-12 rounded-full bg-destructive/20 flex items-center justify-center">
          <Shield size={24} className="text-destructive" />
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-4 border-b border-border">
          <div>
            <Label htmlFor="hide-profile" className="font-medium">Hide Profile</Label>
            <p className="text-sm text-muted-foreground">
              Make your profile invisible in search results
            </p>
          </div>
          <Switch id="hide-profile" />
        </div>
        
        <div className="flex items-center justify-between pb-4 border-b border-border">
          <div>
            <Label htmlFor="blur-image" className="font-medium">Blur Profile Image</Label>
            <p className="text-sm text-muted-foreground">
              Blur your profile picture in public listings
            </p>
          </div>
          <Switch id="blur-image" />
        </div>
        
        <div className="flex items-center justify-between pb-4 border-b border-border">
          <div>
            <Label htmlFor="disable-messages" className="font-medium">Disable Messages</Label>
            <p className="text-sm text-muted-foreground">
              Prevent new message requests from users
            </p>
          </div>
          <Switch id="disable-messages" />
        </div>
      </div>
    </div>
  );
};

export default PrivacySettings;
