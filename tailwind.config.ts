import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      scale: {
        '101': '1.01',
        '102': '1.02',
        '98': '0.98',
        '99': '0.99',
        '96': '0.96',
        '95': '0.95',
        '97': '0.97',
        '92': '0.92',
      },
      spacing: {
        '15': '3.75rem',
        '25': '6.25rem',
        '30': '7.5rem',
        '35': '8.75rem',
        '40': '10rem',
        '45': '11.25rem',
        '84': '21rem',
      },
    },
  },
  plugins: [],
} satisfies Config
