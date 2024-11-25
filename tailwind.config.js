// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        cursor: "cursor-blink 1.5s infinite",
      },
      keyframes: {
        "cursor-blink": {
          "0%, 50%": { opacity: 1 },
          "25%, 75%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
