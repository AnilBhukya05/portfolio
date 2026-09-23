export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAF6EF",
        paper2: "#F1EAD9",
        ink: "#221F1A",
        ink2: "#6B6558",
        clay: "#C1502E",
        clay2: "#E2A24B",
        sage: "#495E45",
        line: "#E6DCC7",
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(34, 31, 26, 0.10)",
        card: "0 4px 16px rgba(34, 31, 26, 0.06)",
      },
    },
  },
  plugins: [],
};