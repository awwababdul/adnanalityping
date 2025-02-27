
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
        },
        muted: {
          DEFAULT: "#F8F9FA",
          foreground: "#111827",
        },
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
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.7s ease-out",
        "glow": "glow 3s infinite",
        "float": "float 6s ease-in-out infinite"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise-pattern': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
