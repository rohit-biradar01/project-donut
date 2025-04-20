
import React from "react";
import { Moon, Sun, Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/contexts/ThemeContext";
import { Theme } from "@/types";

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  
  const themes: { value: Theme; label: string; icon: React.ReactNode }[] = [
    {
      value: "dark",
      label: "Dark + Neon",
      icon: <Moon className="h-4 w-4" />,
    },
    {
      value: "light",
      label: "Light",
      icon: <Sun className="h-4 w-4" />,
    },
    {
      value: "pastel",
      label: "Pastel",
      icon: <Palette className="h-4 w-4" />,
    },
    {
      value: "gradient",
      label: "Gradient Bold",
      icon: <Sparkles className="h-4 w-4" />,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full bg-glass border-primary/30 shadow-neon-sm hover:shadow-neon-md transition-all">
          {themes.find(t => t.value === theme)?.icon || <Sun className="h-4 w-4" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-primary/30 shadow-neon-sm">
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.value}
            onClick={() => setTheme(t.value)}
            className="flex items-center gap-2 cursor-pointer transition-colors hover:bg-primary/20"
          >
            {t.icon}
            <span>{t.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
