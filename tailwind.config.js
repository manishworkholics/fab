/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
        orange: {
          primary: "hsl(var(--orange-primary))",
          light: "hsl(var(--orange-light))",
        },
        blue: {
          primary: "hsl(var(--blue-primary))",
          light: "hsl(var(--blue-light))",
        },
        gray: {
          light: "hsl(var(--gray-light))",
          medium: "hsl(var(--gray-medium))",
        },
        gradient: {
          primary: "var(--gradient-primary)",
          accent: "var(--gradient-accent)",
          subtle: "var(--gradient-subtle)",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(96.65deg, rgba(22, 113, 217, 0.0416) 4.24%, rgba(235, 80, 23, 0.1092) 46.8%, rgba(248, 183, 23, 0.0156) 95.76%)",
      },
      borderImage: {
        "gradient-blue-orange": {
          source: "linear-gradient(180deg, #C6DDF7 0%, #FF6250 46%, #D2E7FF 100%)",
          slice: "1",
        },
      },
    },
    fontSize: {
      xs: ["10px", "16px"],
      sm: ["12px", "16px"],
      base: ["14px", "20px"],
      lg: ["18px", "28px"],
      xl: ["20px", "32px"],
      "2xl": ["24px", "36px"],
      "3xl": ["32px", "48px"],
    },
  },
  plugins: [],
};
