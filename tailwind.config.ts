import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        "custom-298": "298px",
      },
      backgroundColor: {
        MessageBackgroundColor: "#F9F9F9",
        MessageDarkBackgroundColor: "#1e1e1e",
        FooterDarkBackgroundColor: "#0d120d",
        darkModeBg: "#1d1d1d",
        darkModeItemBg: "#424242",
      },
      colors: {
        darkModeFontColor: "#c9d1d9",
      },
    },
  },
  // plugins: [],
  plugins: [require("@tailwindcss/typography")],
};
export default config;
