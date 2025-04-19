
import React from "react";
import { ShieldCheck, Lock, UserCheck, AlertCircle } from "lucide-react";

interface Badge {
  icon: React.ReactNode;
  title: string;
}

const badges: Badge[] = [
  {
    icon: <ShieldCheck size={24} />,
    title: "SafePay Protected"
  },
  {
    icon: <Lock size={24} />,
    title: "Anonymity by Default"
  },
  {
    icon: <UserCheck size={24} />,
    title: "Verified Providers"
  },
  {
    icon: <AlertCircle size={24} />,
    title: "SOS Safety Feature"
  }
];

const TrustBadges: React.FC = () => {
  return (
    <section className="py-12 bg-glass backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                {React.cloneElement(badge.icon as React.ReactElement, {
                  className: "text-primary"
                })}
              </div>
              <span className="font-semibold">{badge.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
