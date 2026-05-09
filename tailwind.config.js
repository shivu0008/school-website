/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0A2540',
        'brand-orange': '#F97316',
        'brand-green': '#22C55E',
        'brand-white': '#ffffff',
        'warm-bg': '#fcfcfc',
      },
      borderRadius: {
        'prestige': '3rem',
        'prestige-lg': '4rem',
        'prestige-xl': '5rem',
      },
      boxShadow: {
        'prestige-sm': '0 20px 40px rgba(10, 37, 64, 0.05)',
        'prestige-lg': '0 30px 60px rgba(10, 37, 64, 0.15)',
        'prestige-xl': '0 50px 100px rgba(10, 37, 64, 0.25)',
        'glow-orange': '0 0 30px rgba(249, 115, 22, 0.4)',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shake: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
