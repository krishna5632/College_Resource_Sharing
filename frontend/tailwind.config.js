/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
  extend: {
    colors: {
      dark: {
        bg: '#0B0B0F',
        surface: '#15151C',
        primary: '#A855F7',
        secondary: '#7C3AED',
        text: '#E4E4E7',
        muted: '#9CA3AF',
        border: '#2A2A33',
        myGreen: 'rgb(76, 228, 32)',
      },
      light: {
        bg: '#F9FAFB',
        surface: '#FFFFFF',
        primary: '#7C3AED',
        secondary: '#8B5CF6',
        text: '#1E1E24',
        muted: '#4B5563',
        border: '#E5E7EB',
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
},
darkMode: "class",

  plugins: [],
}
