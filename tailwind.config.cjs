module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0D0D0D",
        acid: "#E8F227",
        paper: "#F5F0E8",
        ash: "#A8A49C",
        vermillion: "#D4341A"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        mono: ["DM Mono", "monospace"],
        accent: ["Fraunces", "serif"]
      }
    }
  },
  plugins: []
};
