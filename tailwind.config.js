/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#111827",
        mist: "#f8fafc",
        cyanGlass: "#67e8f9",
        limeGlass: "#bef264",
        coralGlass: "#fb7185",
      },
      boxShadow: {
        glass: "0 20px 60px rgba(15, 23, 42, 0.16)",
        glow: "0 0 45px rgba(103, 232, 249, 0.22)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        rise: "rise 0.55s ease-out both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -16px, 0)" },
        },
        rise: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
