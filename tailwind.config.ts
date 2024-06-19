import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'navbar-background-light': "#DDE0F9",
        'question-type-item-hover': '#CBD1FF',
        'mock-item-hover': '#B7BFFF',
        'add-section': '#000640'
      },
    },
  },
  plugins: [nextui()],

};
export default config;
