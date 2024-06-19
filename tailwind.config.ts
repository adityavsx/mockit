import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'navbar-background-light': "#fff",
        'question-type-item-hover': '#CBD1FF',
        'mock-item-hover': '#B7BFFF',
        'add-section': '#EFEFEF',
        'navbar-determining-icon': '#BCC3FF',
        'navbar-determining-icon-fill': '#000640'

      },
    },
  },
  plugins: [nextui()],

};
export default config;
