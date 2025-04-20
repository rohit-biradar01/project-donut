
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				neon: {
					purple: '#9b87f5',
					blue: '#1EAEDB',
					pink: '#D946EF',
					cyan: '#0FF',
					green: '#39FF14'
				},
				pastel: {
					cream: '#FEF7CD',
					pink: '#FFDEE2',
					blue: '#D3E4FD',
					purple: '#E5DEFF',
					green: '#F2FCE2'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Clash Display', 'sans-serif'],
			},
			boxShadow: {
				glow: '0 0 20px rgba(155, 135, 245, 0.5)',
				'glow-lg': '0 0 30px rgba(155, 135, 245, 0.7)',
				'glow-xl': '0 0 40px rgba(155, 135, 245, 0.9)',
				glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
				'neon-sm': '0 0 5px rgba(155, 135, 245, 0.5), 0 0 10px rgba(155, 135, 245, 0.3)',
				'neon-md': '0 0 10px rgba(155, 135, 245, 0.7), 0 0 20px rgba(155, 135, 245, 0.5)',
				'neon-lg': '0 0 15px rgba(155, 135, 245, 0.9), 0 0 30px rgba(155, 135, 245, 0.7)',
				'neon-blue': '0 0 10px rgba(30, 174, 219, 0.7), 0 0 20px rgba(30, 174, 219, 0.5)',
				'neon-pink': '0 0 10px rgba(217, 70, 239, 0.7), 0 0 20px rgba(217, 70, 239, 0.5)',
				'neon-cyan': '0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.5)',
				'neon-green': '0 0 10px rgba(57, 255, 20, 0.7), 0 0 20px rgba(57, 255, 20, 0.5)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-out': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'card-swipe': {
					'0%': { transform: 'translateX(0) rotate(0)' },
					'100%': { transform: 'translateX(150%) rotate(15deg)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 15px rgba(155, 135, 245, 0.5)' },
					'50%': { boxShadow: '0 0 30px rgba(155, 135, 245, 0.8)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(155, 135, 245, 0.5), 0 0 10px rgba(155, 135, 245, 0.3)',
						borderColor: 'rgba(155, 135, 245, 0.3)'
					},
					'50%': { 
						boxShadow: '0 0 10px rgba(155, 135, 245, 0.8), 0 0 20px rgba(155, 135, 245, 0.6)',
						borderColor: 'rgba(155, 135, 245, 0.8)'
					}
				},
				'text-shimmer': {
					'0%': { 
						backgroundPosition: '-200% 0' 
					},
					'100%': { 
						backgroundPosition: '200% 0' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out',
				'slide-in': 'slide-in 0.3s ease-out',
				'slide-out': 'slide-out 0.3s ease-out',
				'card-swipe': 'card-swipe 0.5s ease-out forwards',
				'pulse-glow': 'pulse-glow 2s infinite',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 3s infinite',
				'text-shimmer': 'text-shimmer 3s infinite linear'
			},
			backdropBlur: {
				xs: '2px',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
