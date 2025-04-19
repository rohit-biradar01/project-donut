
import React from "react";
import Layout from "@/components/layout/Layout";
import DashboardTabs from "@/components/dashboard/DashboardTabs";

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <div className="mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
          Your Dashboard
        </h1>
        <p className="text-muted-foreground">
          Manage your bookings and favorite providers
        </p>
      </div>
      
      <DashboardTabs />
    </Layout>
  );
};

export default Dashboard;
