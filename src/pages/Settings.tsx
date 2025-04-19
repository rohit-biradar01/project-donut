
import React from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PrivacySettings from "@/components/settings/PrivacySettings";
import NotificationSettings from "@/components/settings/NotificationSettings";
import ProfileSettings from "@/components/settings/ProfileSettings";
import AccountSettings from "@/components/settings/AccountSettings";

const Settings: React.FC = () => {
  return (
    <Layout>
      <div className="mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
          Settings
        </h1>
        <p className="text-muted-foreground">
          Manage your account preferences and privacy settings
        </p>
      </div>
      
      <div className="bg-glass rounded-xl p-6 mb-6">
        <Tabs defaultValue="privacy" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>
          
          <TabsContent value="privacy" className="animate-fade-in">
            <PrivacySettings />
          </TabsContent>
          
          <TabsContent value="notifications" className="animate-fade-in">
            <NotificationSettings />
          </TabsContent>
          
          <TabsContent value="profile" className="animate-fade-in">
            <ProfileSettings />
          </TabsContent>
          
          <TabsContent value="account" className="animate-fade-in">
            <AccountSettings />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Settings;
