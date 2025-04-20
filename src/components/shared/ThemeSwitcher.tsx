
import React from "react";
import { Moon, Sun, Palette, Sparkles, Waves, Flame, Cloud } from "lucide-react";
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
      value: "neon-blue",
      label: "Neon Blue",
      icon: <Waves className="h-4 w-4" />,
    },
    {
      value: "hot-pink",
      label: "Hot Pink",
      icon: <Flame className="h-4 w-4" />,
    },
    {
      value: "cyber-purple",
      label: "Cyber Purple",
      icon: <Cloud className="h-4 w-4" />,
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
      <DropdownMenuContent align="end" className="border-primary/30 shadow-neon-sm bg-glass backdrop-blur-xl">
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.value}
            onClick={() => setTheme(t.value)}
            className={`flex items-center gap-2 cursor-pointer transition-colors hover:bg-primary/20 ${theme === t.value ? 'bg-primary/30' : ''}`}
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
