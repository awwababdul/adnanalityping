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
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "hsl(var(--background))",
          alt: "hsl(var(--background-alt))",
          muted: "hsl(var(--background-muted))",
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "hsl(var(--primary-50))",
          100: "hsl(var(--primary-100))",
          200: "hsl(var(--primary-200))",
          300: "hsl(var(--primary-300))",
          400: "hsl(var(--primary-400))",
          500: "hsl(var(--primary-500))",
          600: "hsl(var(--primary-600))",
          700: "hsl(var(--primary-700))",
          800: "hsl(var(--primary-800))",
          900: "hsl(var(--primary-900))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
          50: "hsl(var(--success-50))",
          100: "hsl(var(--success-100))",
          200: "hsl(var(--success-200))",
          300: "hsl(var(--success-300))",
          400: "hsl(var(--success-400))",
          500: "hsl(var(--success-500))",
          600: "hsl(var(--success-600))",
          700: "hsl(var(--success-700))",
          800: "hsl(var(--success-800))",
          900: "hsl(var(--success-900))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
          50: "hsl(var(--warning-50))",
          100: "hsl(var(--warning-100))",
          200: "hsl(var(--warning-200))",
          300: "hsl(var(--warning-300))",
          400: "hsl(var(--warning-400))",
          500: "hsl(var(--warning-500))",
          600: "hsl(var(--warning-600))",
          700: "hsl(var(--warning-700))",
          800: "hsl(var(--warning-800))",
          900: "hsl(var(--warning-900))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
          50: "hsl(var(--destructive-50))",
          100: "hsl(var(--destructive-100))",
          200: "hsl(var(--destructive-200))",
          300: "hsl(var(--destructive-300))",
          400: "hsl(var(--destructive-400))",
          500: "hsl(var(--destructive-500))",
          600: "hsl(var(--destructive-600))",
          700: "hsl(var(--destructive-700))",
          800: "hsl(var(--destructive-800))",
          900: "hsl(var(--destructive-900))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        neutral: {
          DEFAULT: "hsl(var(--neutral))",
          50: "hsl(var(--neutral-50))",
          100: "hsl(var(--neutral-100))",
          200: "hsl(var(--neutral-200))",
          300: "hsl(var(--neutral-300))",
          400: "hsl(var(--neutral-400))",
          500: "hsl(var(--neutral-500))",
          600: "hsl(var(--neutral-600))",
          700: "hsl(var(--neutral-700))",
          800: "hsl(var(--neutral-800))",
          900: "hsl(var(--neutral-900))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        // Surface colors for modern card design
        surface: {
          DEFAULT: "hsl(var(--surface))",
          variant: "hsl(var(--surface-variant))",
          container: "hsl(var(--surface-container))",
          "container-high": "hsl(var(--surface-container-high))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif"
        ],
        serif: [
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif"
        ],
        display: [
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif"
        ],
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "Consolas",
          "Monaco",
          "Courier New",
          "monospace"
        ],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.125rem", letterSpacing: "0.025em" }],
        sm: ["0.875rem", { lineHeight: "1.375rem", letterSpacing: "0.025em" }],
        base: ["1rem", { lineHeight: "1.625rem", letterSpacing: "0.000em" }],
        lg: ["1.125rem", { lineHeight: "1.875rem", letterSpacing: "-0.025em" }],
        xl: ["1.25rem", { lineHeight: "2rem", letterSpacing: "-0.025em" }],
        "2xl": ["1.5rem", { lineHeight: "2.25rem", letterSpacing: "-0.025em" }],
        "3xl": ["1.875rem", { lineHeight: "2.375rem", letterSpacing: "-0.050em" }],
        "4xl": ["2.25rem", { lineHeight: "2.75rem", letterSpacing: "-0.050em" }],
        "5xl": ["3rem", { lineHeight: "3.25rem", letterSpacing: "-0.075em" }],
        "6xl": ["3.75rem", { lineHeight: "4rem", letterSpacing: "-0.075em" }],
        "7xl": ["4.5rem", { lineHeight: "4.75rem", letterSpacing: "-0.100em" }],
        "8xl": ["6rem", { lineHeight: "6.25rem", letterSpacing: "-0.100em" }],
        "9xl": ["8rem", { lineHeight: "8.25rem", letterSpacing: "-0.125em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem", 
        "88": "22rem",
        "128": "32rem",
        "144": "36rem",
        "160": "40rem",
        "192": "48rem",
        "224": "56rem",
        "256": "64rem",
        "section": "var(--spacing-section)",
        "section-mobile": "var(--spacing-section-mobile)",
        "container": "var(--spacing-container)",
        "container-mobile": "var(--spacing-container-mobile)",
      },
      borderRadius: {
        none: "0",
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        "3xl": "var(--radius-3xl)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        // Basic shadow system
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
        inner: "var(--shadow-inner)",
        none: "var(--shadow-none)",
        
        // Enhanced glow effects
        "glow-sm": "var(--shadow-glow-sm)",
        "glow": "var(--shadow-glow)",
        "glow-lg": "var(--shadow-glow-lg)",
        "glow-success": "var(--shadow-glow-success)",
        "glow-warning": "var(--shadow-glow-warning)",
        
        // Glass morphism effects
        "glass": "0 8px 32px rgba(31, 38, 135, 0.37)",
        "glass-lg": "0 25px 50px rgba(31, 38, 135, 0.37)",
        "glass-xl": "0 40px 80px rgba(31, 38, 135, 0.37)",
        
        // Card specific shadows
        "card": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "card-hover": "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        "card-lg": "0 20px 40px -12px rgba(0, 0, 0, 0.25)",
        
        // Interactive element shadows
        "button": "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
        "button-hover": "0 8px 16px 0 rgba(0, 0, 0, 0.15)",
        "button-active": "0 1px 2px 0 rgba(0, 0, 0, 0.15)",
        
        // Floating elements
        "float": "0 8px 25px -8px rgba(0, 0, 0, 0.3)",
        "float-lg": "0 20px 40px -12px rgba(0, 0, 0, 0.25)",
      },
      keyframes: {
        // Accordion animations
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        
        // Enhanced entrance animations
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" }
        },
        
        // Scale animations
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "scale-out": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.95)", opacity: "0" }
        },
        "zoom-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "zoom-out": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.8)", opacity: "0" }
        },
        
        // Slide animations
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" }
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" }
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" }
        },
        "slide-out-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" }
        },
        
        // Floating and movement animations
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "float-lg": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" }
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" }
        },
        
        // Glow and pulse effects
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" }
        },
        "pulse-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 0 0 hsl(var(--primary) / 0.5)" 
          },
          "50%": { 
            boxShadow: "0 0 0 10px hsl(var(--primary) / 0)" 
          }
        },
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: "var(--shadow-glow)",
            filter: "brightness(1)" 
          },
          "50%": { 
            boxShadow: "var(--shadow-glow-lg)",
            filter: "brightness(1.1)" 
          }
        },
        
        // Rotation animations
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" }
        },
        
        // Shimmer and shine effects
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        },
        "shine": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" }
        },
        
        // Loading animations
        "skeleton": {
          "0%": { opacity: "1" },
          "50%": { opacity: "0.4" },
          "100%": { opacity: "1" }
        },
        "loading-dots": {
          "0%, 80%, 100%": { transform: "scale(0)" },
          "40%": { transform: "scale(1)" }
        },
        
        // Advanced entrance animations
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        "flip-in": {
          "0%": { transform: "rotateY(-90deg)", opacity: "0" },
          "100%": { transform: "rotateY(0)", opacity: "1" }
        },
        "flip-out": {
          "0%": { transform: "rotateY(0)", opacity: "1" },
          "100%": { transform: "rotateY(90deg)", opacity: "0" }
        },
        
        // Typewriter effect
        "typewriter": {
          "0%": { width: "0" },
          "100%": { width: "100%" }
        },
        "blink": {
          "0%, 50%": { borderColor: "transparent" },
          "51%, 100%": { borderColor: "currentColor" }
        },
      },
      animation: {
        // Accordion animations
        "accordion-down": "accordion-down 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "accordion-up": "accordion-up 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        
        // Basic entrance/exit animations
        "fade-in": "fade-in 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        "fade-in-up": "fade-in-up 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        "fade-in-down": "fade-in-down 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        "fade-in-left": "fade-in-left 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        "fade-in-right": "fade-in-right 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        "fade-out": "fade-out 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        
        // Scale animations
        "scale-in": "scale-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "scale-out": "scale-out 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        "zoom-in": "zoom-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "zoom-out": "zoom-out 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        
        // Slide animations
        "slide-in-right": "slide-in-right 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-in-left": "slide-in-left 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-out-right": "slide-out-right 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-out-left": "slide-out-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-up": "slide-up 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-down": "slide-down 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        
        // Movement animations
        "float": "float 3s ease-in-out infinite",
        "float-lg": "float-lg 4s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        
        // Pulse and glow effects
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2.5s ease-in-out infinite",
        
        // Rotation
        "spin-slow": "spin-slow 8s linear infinite",
        "spin-reverse": "spin-reverse 8s linear infinite",
        
        // Shimmer and shine
        "shimmer": "shimmer 2s ease-in-out infinite",
        "shine": "shine 3s ease-in-out infinite",
        
        // Loading states
        "skeleton": "skeleton 2s ease-in-out infinite",
        "loading-dots": "loading-dots 1.4s ease-in-out infinite",
        
        // Advanced animations
        "flip-in": "flip-in 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        "flip-out": "flip-out 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        
        // Typewriter
        "typewriter": "typewriter 4s steps(40, end) forwards",
        "blink": "blink 1s step-end infinite",
        
        // Combined entrance effects
        "enter": "fade-in-up 0.5s cubic-bezier(0.4, 0, 0.2, 1), scale-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s",
        "exit": "fade-out 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale-out 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        
        // Hero-specific animations
        "hero-float": "float 6s ease-in-out infinite",
        "hero-glow": "glow-pulse 3s ease-in-out infinite",
        
        // Button animations
        "button-hover": "scale-in 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "button-press": "scale-out 0.1s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      backgroundImage: {
        // Enhanced gradient system
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-linear": "linear-gradient(135deg, var(--tw-gradient-stops))",
        
        // Brand gradients
        "gradient-primary": "var(--gradient-primary)",
        "gradient-success": "var(--gradient-success)",
        "gradient-surface": "var(--gradient-surface)",
        "gradient-glass": "var(--gradient-glass)",
        
        // Hero gradients
        "gradient-hero": "linear-gradient(135deg, hsl(var(--primary-600)) 0%, hsl(var(--primary-800)) 100%)",
        "gradient-hero-overlay": "linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%)",
        
        // Premium gradients
        "gradient-premium": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "gradient-gold": "linear-gradient(135deg, #f6d55c 0%, #f39d12 50%, #f1c40f 100%)",
        "gradient-silver": "linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)",
        "gradient-copper": "linear-gradient(135deg, #b79891 0%, #94716b 100%)",
        
        // Utility gradients
        "gradient-overlay": "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)",
        "gradient-fade": "linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.05) 50%, transparent 100%)",
        
        // Noise and texture
        "noise-pattern": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\")",
        "texture-subtle": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cg fill='%23000' fill-opacity='0.03'%3E%3Cpolygon points='10 0 20 10 10 20 0 10'/%3E%3C/g%3E%3C/svg%3E\")",
        
        // Shimmer effects
        "shimmer": "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)",
        "shimmer-gold": "linear-gradient(90deg, transparent 0%, rgba(251, 191, 36, 0.3) 50%, transparent 100%)",
      },
      backdropBlur: {
        none: "0",
        xs: "2px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px",
      },
      
      // Enhanced transitions
      transitionDuration: {
        DEFAULT: "var(--duration-normal)",
        fast: "var(--duration-fast)",
        slow: "var(--duration-slow)",
        slower: "var(--duration-slower)",
        0: "0ms",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
      },
      
      // Enhanced z-index scale
      zIndex: {
        auto: "auto",
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        popup: "1000",
        overlay: "1200",
        modal: "1300",
        toast: "1400",
        tooltip: "1500",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;