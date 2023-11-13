import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2b9fd1",
          secondary: "#a9ccf9",
          accent: "#cdef99",
          neutral: "#252537",
          "base-100": "#fcfcfd",
          info: "#59b2ee",
          success: "#36ddbc",
          warning: "#a6610c",
          error: "#f43440",
          body: {
            "background-color": "#e3e6e6",
          },
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
