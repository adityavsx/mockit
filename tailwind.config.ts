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
        "background-color": "rgba(var(--backgroundColor))",
        "text-accent-color-1": "rgba(var(--textAccentColorOne))",
        "text-accent-color-2": "rgba(var(--textAccentColorTwo))",
        "section-item-background": "rgba(var(--sectionItemBackground))",
        "divider": "rgba(var(--divider))",
        "text-accent-color-3": "rgba(var(--textAccentColorThree))",

      },
      typography: {
				DEFAULT: {
					css: {
						"code::before": { content: '""' },
            "code::after": { content: '""' },
            "p::before": { content: '""' },
            "p::after": { content: '""' },
					},
				},
			},
    },
  },
  plugins:[
    nextui(),
    require('@tailwindcss/typography'),
  ],

};
export default config;
