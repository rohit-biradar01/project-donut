
import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        "neon-sm": "0 0 5px rgba(155, 135, 245, 0.3), 0 0 20px rgba(155, 135, 245, 0.15)",
        "neon-md": "0 0 10px rgba(155, 135, 245, 0.5), 0 0 30px rgba(155, 135, 245, 0.2)",
        "neon-lg": "0 0 15px rgba(155, 135, 245, 0.7), 0 0 40px rgba(155, 135, 245, 0.3)",
        "neon-blue": "0 0 10px rgba(0, 195, 255, 0.5), 0 0 30px rgba(0, 195, 255, 0.2)",
        "neon-pink": "0 0 10px rgba(255, 0, 170, 0.5), 0 0 30px rgba(255, 0, 170, 0.2)",
        "neon-cyan": "0 0 10px rgba(0, 255, 240, 0.5), 0 0 30px rgba(0, 255, 240, 0.2)",
        "glow": "0 0 15px rgba(155, 135, 245, 0.5)",
        "glow-lg": "0 0 30px rgba(155, 135, 245, 0.7)",
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["'Clash Display'", "sans-serif"],
        brand: ["'Pacifico'", "cursive"]
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "text-shadow": (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
} satisfies Config;
