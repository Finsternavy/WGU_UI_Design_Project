/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryDark: '#003B6D',
        primary: '#6699CC',
        secondaryDark: '#676767',
        secondary: '#BDBDBD',
        accent: '#ffcc00',
        danger: '#ff0000',
        success: '#00ff00',
        info: '#00ccff',
        warning: '#ff9900'
      }
    }
  },
  plugins: []
}
