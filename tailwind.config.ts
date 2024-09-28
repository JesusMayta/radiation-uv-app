import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1D1F21",
        primary: "#FF6600",
        secondary: "#ff983f",
        accent: "#ffffa1",
        textColor: "#F5F5F5"
      },
      backgroundImage: {
        imageIndex: "url('./src/assets/img/index-image.png')",
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
