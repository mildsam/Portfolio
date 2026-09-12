/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Modern & Minimalist Palette
        primary: '#3B82F6',     // Modern Blue (Blue-500)
        primaryDark: '#1d4ed8', // Darker Blue for gradients/hovers (Blue-700)
        accent: '#06B6D4',      // Vibrant Teal/Cyan (Cyan-500)
        lightBg: '#F8FAFC',     // Very light slate/white (Slate-50)
        textDark: '#0F172A',    // Deep Slate (Slate-900)
        textGray: '#64748B',    // Slate Gray (Slate-500)
        
        // Overriding 'purple' colors to match the blue theme in dark mode
        purple: {
            400: '#38BDF8', // Sky-400 (Bright Blue for dark mode text)
            500: '#0EA5E9', // Sky-500 (for progress bars)
            600: '#0284C7', // Sky-600
            700: '#0369A1', // Sky-700 (for dark mode buttons)
            800: '#075985', // Sky-800 (for button hover)
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
