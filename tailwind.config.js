/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      gray: {
        1: "hsl(var(--color-gray-1) / <alpha-value>)",
        2: "hsl(var(--color-gray-2) / <alpha-value>)",
        3: "hsl(var(--color-gray-3) / <alpha-value>)",
      },
      white: "hsl(var(--color-white) / <alpha-value>)",
      dark: "hsl(var(--color-dark) / <alpha-value>)",
      primary: "hsl(var(--color-primary) / <alpha-value>)",
      secondary: {
        1: "hsl(var(--color-secondary-1) / <alpha-value>)",
        2: "hsl(var(--color-secondary-2) / <alpha-value>)",
      },
      accent: {
        1: "hsl(var(--color-accent-1) / <alpha-value>)",
      },
    },
    extend: {},
  },
  plugins: [],
};

// gray: {
//   1: "#F0F0F0",
//   2: "#D8D8D8",
//   3: "#333333",

// white: "#FFF",
// dark: "#232E21",
// primary: "#FF0073",
// secondary: {
//   1: "#FFF2F9",
//   2: "#F4C3C2",
//   3: "#F9DC5C",

// accent: {
//   1: "#3772FF",
