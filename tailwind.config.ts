import { type Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: { min: '481px', max: '640px' },
      md: { min: '641px', max: '768px' },
      lg: { min: '769px', max: '1024px' },
      xl: { min: '1025px', max: '1399px' },
      '2xl': { min: '1400px', max: '1920px' },
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        purpule: 'hsl(var(--purpule))',
        lightpurpule: 'hsl(var(--lightpurpule))',
        darkpurpule: 'hsl(var(--darkpurpule))',
        blue: 'hsl(var(--blue))',
        dark: 'hsl(var(--dark))',
        lightdark: 'hsl(var(--lightdark))',
        lightborder: 'hsl(var(--lightborder))',
        lighttext: 'hsl(var(--lighttext))',
        darktext: 'hsl(var(--darktext))',
        overlay: 'hsl(var(--overlay))',
        green: 'hsl(var(--green))',
        garysec: 'hsl(var(--garysec))',

        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        "slide-linear": {
          "0%": {
            transform: "translateX(0px)",
          },
          "50%": {
            transform: "translateX(50px)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "appear": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "appear-down": {
          // "0%": {
          //   opacity: "1",
          //   transform: "translateY(-30px)",
          // },
          // "100%": {
          //   opacity: "1",
          //   transform: "translateY(0)",
          // },
          from: { height: '0' },
          to: { height: '440px' },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        'spin': {
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-linear': 'slide-linear 2s  infinite',
        "fade-in-up": "fade-in-up 0.2s ease-out",
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "appear-down": "appear-down 0.3s ease-out",
        "appear": "appear 1s ease-in-out ",
        "spin": "spin 6s infinite linear",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
