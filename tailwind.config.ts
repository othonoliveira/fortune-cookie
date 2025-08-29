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
				cookie: {
					gold: 'hsl(var(--cookie-gold))',
					shadow: 'hsl(var(--cookie-shadow))'
				},
				sparkle: 'hsl(var(--sparkle))',
				'magic-glow': 'hsl(var(--magic-glow))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'sparkle': {
					'0%, 100%': { 
						opacity: '0.3',
						transform: 'scale(0.8) rotate(0deg)'
					},
					'50%': { 
						opacity: '1',
						transform: 'scale(1.2) rotate(180deg)'
					}
				},
				'crack': {
					'0%': { transform: 'scale(1) rotate(0deg)' },
					'25%': { transform: 'scale(1.05) rotate(-2deg)' },
					'50%': { transform: 'scale(1.1) rotate(2deg)' },
					'75%': { transform: 'scale(1.05) rotate(-1deg)' },
					'100%': { transform: 'scale(1) rotate(0deg)' }
				},
				'cookie-split': {
					'0%': { 
						transform: 'scale(1) rotateY(0deg)',
						opacity: '1'
					},
					'50%': { 
						transform: 'scale(1.1) rotateY(15deg)',
						opacity: '0.8'
					},
					'100%': { 
						transform: 'scale(0) rotateY(90deg)',
						opacity: '0'
					}
				},
				'fortune-reveal': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(20px) scale(0.8)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(var(--magic-glow) / 0.3)'
					},
					'50%': { 
						boxShadow: '0 0 40px hsl(var(--magic-glow) / 0.6), 0 0 60px hsl(var(--sparkle) / 0.4)'
					}
				},
				'magic-pulse': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'sparkle': 'sparkle 3s ease-in-out infinite',
				'crack': 'crack 0.6s ease-out',
				'cookie-split': 'cookie-split 0.5s ease-out 0.6s forwards',
				'fortune-reveal': 'fortune-reveal 0.8s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'magic-pulse': 'magic-pulse 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;