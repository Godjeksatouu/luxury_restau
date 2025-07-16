/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        gold: {
          300: '#F7E7CE',
          400: '#E6D36A',
          500: '#D4AF37',
          600: '#B8941F',
          700: '#9C7A0B',
        },
        blue: {
          400: '#00D4FF',
          500: '#0EA5E9',
        },
        purple: {
          500: '#9D4EDD',
        },
        neon: {
          blue: '#00D4FF',
          purple: '#9D4EDD',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'text-reveal': 'textReveal 0.8s ease-out forwards',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 212, 255, 0.5)',
        'gold': '0 0 20px rgba(212, 175, 55, 0.3)',
      },
    },
  },
  plugins: [],
};