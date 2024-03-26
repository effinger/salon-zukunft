module.exports = {
  content: ["_site/**/*.html"],
  safelist: [
    "hover:rotate-1",
    "hover:rotate-2",
    "hover:rotate-3",
    "hover:rotate-4",
    "hover:rotate-5",
    "hover:rotate-6",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Abil Display'", "serif"],
        sans: ["'Aktiv Grotesk'", "sans-serif"],
      },
      colors: {
        pink: "#FF008A",
        purple: "#5700C7",
        blue: "#00068D",
        white: "#FFFFFF",
      },
      backgroundImage: {
        hero: "url('/img/hero.jpg')",
      },
    },
  },
  plugins: [],
};
