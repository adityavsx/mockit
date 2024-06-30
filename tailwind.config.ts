import type { Config } from "tailwindcss";
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
        'section-item': '#E6E9FF',
        'section-item-action': '#B4BDFF',
        'mock-item-hover': '#B7BFFF',
        'add-section': '#EFEFEF',
        'navbar-determining-icon': '#BCC3FF',
        'navbar-determining-icon-fill': '#000640',
        'section-item-delete': '#FFD5D5',
        'section-item-delete-active': '#F9B1B1'

      },
    },
  },
  plugins:[
    nextui(),
    require('@tailwindcss/typography'),
  ],

};
export default config;
