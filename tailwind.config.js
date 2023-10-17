/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      gray: {
        1: "#F0F0F0",
        2: "##D8D8D8",
        3: "#333333",
      },
      white: "#FFF",
      dark: "#232E21",
      primary: "##FF0073",
      secondary: {
        1: "#FFF2F9",
        2: "##F4C3C2",
        3: "##F9DC5C",
      },
      accent: {
        1: "##3772FF",
      },
    },
    extend: {},
  },
  plugins: [],
};
