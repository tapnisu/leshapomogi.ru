import { type Config } from "tailwindcss";

export default {
  content: ["{routes,islands,components}/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#d0d1d3",
          200: "#a2a4a7",
          300: "#73767a",
          400: "#45494e",
          500: "#161b22",
          600: "#12161b",
          700: "#0d1014",
          800: "#090b0e",
          900: "#040507",
        },
      },
    },
  },
} satisfies Config;
