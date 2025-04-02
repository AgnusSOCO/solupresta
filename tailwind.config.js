/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: '#00D1FF',
          navy: '#1E0F4F',
          'cyan-light': 'color-mix(in srgb, #00D1FF 85%, white)',
          'cyan-dark': 'color-mix(in srgb, #00D1FF 85%, black)',
          'navy-light': 'color-mix(in srgb, #1E0F4F 85%, white)',
          'navy-dark': 'color-mix(in srgb, #1E0F4F 85%, black)'
        },
        text: {
          primary: '#333333',
          secondary: '#666666',
          light: '#FFFFFF'
        },
        status: {
          error: '#DC3545',
          success: '#28A745',
          warning: '#FFC107',
          info: '#17A2B8'
        },
        background: {
          primary: '#FFFFFF',
          secondary: 'rgba(30, 15, 79, 0.02)'
        },
        border: {
          light: 'rgba(30, 15, 79, 0.1)',
          medium: 'rgba(30, 15, 79, 0.2)',
          dark: 'rgba(30, 15, 79, 0.3)'
        }
      },
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '1rem',
        'xl': '1.5rem',
        'full': '9999px'
      },
      spacing: {
        'xs': 'clamp(0.25rem, 0.2rem + 0.25vw, 0.375rem)',
        'sm': 'clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem)',
        'md': 'clamp(1rem, 0.8rem + 1vw, 1.5rem)',
        'lg': 'clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem)',
        'xl': 'clamp(2rem, 1.6rem + 2vw, 3rem)',
        '2xl': 'clamp(2.5rem, 2rem + 2.5vw, 3.75rem)',
        '3xl': 'clamp(3rem, 2.4rem + 3vw, 4.5rem)',
        'section': 'clamp(4rem, 3.2rem + 4vw, 6rem)',
        'container': 'clamp(1rem, 5vw, 2rem)',
        'card': 'var(--spacing-md)',
        'button': 'var(--spacing-sm) var(--spacing-md)',
        'input': 'var(--spacing-sm)',
        'gap': 'var(--spacing-md)'
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(30, 15, 79, 0.05)',
        'md': '0 4px 6px rgba(30, 15, 79, 0.1)',
        'lg': '0 10px 15px rgba(30, 15, 79, 0.1)',
        'xl': '0 20px 25px rgba(30, 15, 79, 0.15)',
        '2xl': '0 25px 50px rgba(30, 15, 79, 0.25)',
        'inner': 'inset 0 2px 4px rgba(30, 15, 79, 0.05)'
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "fade-out": {
          from: { opacity: 1, transform: "translateY(0)" },
          to: { opacity: 0, transform: "translateY(-20px)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-out": "fade-out 0.5s ease-in forwards",
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'fade-in-up': 'fadeInUp 0.5s ease-in-out forwards',
        'fade-in-down': 'fadeInDown 0.5s ease-in-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-in-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-in-out forwards',
        'scale-in': 'scaleIn 0.3s ease-in-out forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(1rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-1rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInRight: {
          '0%': { transform: 'translateX(-1rem)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideInLeft: {
          '0%': { transform: 'translateX(1rem)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'scale': 'transform',
        'fade': 'opacity',
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
        'shadow': 'box-shadow'
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
}