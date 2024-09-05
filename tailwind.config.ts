import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			'dark-color': '#0b132b',
			'theme-color': '#2bc7c9',
			'light-theme': '#f5feff',
			'light-theme-grey': '#fbfbfb',
			'heading-color': '#021325',
			'sub-text-color': '#242b35',
			'list-color': '#727272',
			'red': '#f30',
			'white': '#fff',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
