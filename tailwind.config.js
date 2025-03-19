/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-dark': '#020618',
        'foreground-dark': '#0F172B',
        'border-color': '#314158',
        'text-primary': '#F8FAFC',
        'text-secondary': '#90A1B9',
        'accent-blue': '#615FFF',
        'accent-green': '#00D5BE',
        'accent-orange': '#FFB86A',
        'snake-green': '#43D9AD',
        'snake-bg': '#1D293D',
      },
      fontFamily: {
        'fira-code': ['"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'inner-white': 'inset 0px 2px 0px 0px rgba(255, 255, 255, 0.3)',
      },
    },
  },
  plugins: [],
}
