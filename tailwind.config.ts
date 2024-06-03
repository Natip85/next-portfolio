import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Oleo Script", "system-ui"],
        primary: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.65)), url("/images/bg.jpg")',
      },
    },
  },
  plugins: [],
};
export default config;
