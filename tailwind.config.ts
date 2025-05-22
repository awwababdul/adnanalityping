
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
          DEFAULT: "#0070F3", // Bright blue like on3.ai
          foreground: "#FFFFFF",
          50: "#E6F0FF",
          100: "#CCE1FF",
          200: "#99C2FF",
          300: "#66A3FF",
          400: "#3384FF",
          500: "#0070F3",
          600: "#005AD1",
          700: "#0045AF",
          800: "#00308D",
          900: "#001B6B",
        },
        secondary: {
          DEFAULT: "#111827", // Dark blue/black like on3.ai
          foreground: "#FFFFFF",
        },
        success: {
          DEFAULT: "#4CAF50",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#7928CA", // Purple accent color like on3.ai
          foreground: "#FFFFFF",
          50: "#F3E6FF",
          100: "#E7CCFF",
          200: "#D099FF",
          300: "#B866FF",
          400: "#A133FF",
          500: "#7928CA",
          600: "#6820A8",
          700: "#561986",
          800: "#451164",
          900: "#330842",
        },
        gold: {
          DEFAULT: "#D4AF37",
          50: "#FAF6E9",
          100: "#F5EDD2",
          200: "#EBDBA6",
          300: "#E1C979",
          400: "#D8B74D",
          500: "#D4AF37",
          600: "#B28F22",
          700: "#8F701B",
          800: "#6C5214",
          900: "#49330D",
        },
        muted: {
          DEFAULT: "#F8F9FA",
          foreground: "#111827",
        },
        destructive: {
          DEFAULT: "#FF4D4F",
          foreground: "#FFFFFF",
        },
        warning: {
          DEFAULT: "#FFA940",
          foreground: "#FFFFFF",
        },
        info: {
          DEFAULT: "#1890FF",
          foreground: "#FFFFFF",
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
        display: ["Montserrat", "system-ui", "sans-serif"],
      },
      borderRadius: {
        'sm': '0.25rem',
        DEFAULT: '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'premium': '0 10px 30px -5px rgba(0, 112, 243, 0.3)',
        'gold': '0 10px 30px -5px rgba(212, 175, 55, 0.3)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow": {
          "0%, 100%": { 
            boxShadow: "0 0 5px rgba(0, 112, 243, 0.5), 0 0 10px rgba(0, 112, 243, 0.3)" 
          },
          "50%": { 
            boxShadow: "0 0 20px rgba(0, 112, 243, 0.8), 0 0 30px rgba(0, 112, 243, 0.5)" 
          }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" }
        },
        "shimmer": {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "glow": "glow 3s infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite linear",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise-pattern': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        'premium-gradient': 'linear-gradient(135deg, #0070F3 0%, #7928CA 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #EBDBA6 50%, #D4AF37 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
