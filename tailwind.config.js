/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B00',
          light: '#FF8533',    // Slightly softer orange
          dark: '#E25A00',
        },
        secondary: {
          DEFAULT: '#0070C9',
          light: '#1E88E5',    // More vibrant blue
          dark: '#005BB5',
        },
        accent: {              // New accent color
          DEFAULT: '#2E3192',  // Deep navy
          light: '#3D41B4',
          dark: '#1E2160',
        },
        dark: '#1A1A1A',
        light: '#FFFFFF',
        gray: {
          light: '#F5F5F5',
          medium: '#E0E0E0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/4489748/pexels-photo-4489748.jpeg')",
        'about-pattern': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg')",
      },
    },
  },
  plugins: [],
};