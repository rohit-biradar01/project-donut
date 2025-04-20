
import React from "react";
import Navbar from "./Navbar";
import ThemeSwitcher from "../shared/ThemeSwitcher";
import { useTheme } from "@/contexts/ThemeContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme}`}>
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(270,70%,5%),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(250,70%,5%),transparent_50%)]"></div>
      </div>
      <Navbar />
      <main className="container mx-auto px-4 pt-20 pb-10 relative z-10">
        {children}
      </main>
      <div className="fixed bottom-4 right-4 z-30 animate-float">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Layout;
