
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
    <div className={`min-h-screen transition-colors duration-300 ${theme}`}>
      <Navbar />
      <main className="container mx-auto px-4 pt-20 pb-10">
        {children}
      </main>
      <div className="fixed bottom-4 right-4">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Layout;
