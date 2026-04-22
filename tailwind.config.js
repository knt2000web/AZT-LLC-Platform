/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:   '#0A1F33',
        accent:    '#C0C6CC',
        secondary: '#515f74',
        surface:   '#f8f9fa',
        'surface-container': '#edeeef',
      },
      fontFamily: {
        sans:     ['Montserrat', 'sans-serif'],
        headline: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0px',
        sm: '0px',
        md: '2px',
        lg: '2px',
        xl: '2px',
        full: '9999px',
      },
      letterSpacing: {
        military: '0.3em',
        widest2:  '0.25em',
      },
    },
  },
  plugins: [],
};
