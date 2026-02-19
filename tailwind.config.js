
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",          // Scans files in root (like App.tsx)
    "./components/**/*.{js,ts,jsx,tsx}", // Scans your components folder
    "./pages/**/*.{js,ts,jsx,tsx}", // Scans your new pages folder
  ],
  theme: {
    extend: {
      // 1. Custom Animations
      animation: {
        "shine": "shine 3s linear infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      // 2. Animation Keyframes
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      // 3. Custom Colors
      colors: {
        "primary-brand": "#26d48c", 
        "secondary-brand-blue": "#1842b6",
        "background-dark": "#0a0a0a",
        "glass-border": "rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};