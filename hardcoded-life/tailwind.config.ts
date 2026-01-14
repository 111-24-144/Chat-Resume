import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: colors.slate[950],
        surface: colors.slate[900],
        primary: colors.emerald[500],
        "text-primary": colors.slate[50],
        "text-secondary": colors.slate[400],
      },
    },
  },
  plugins: [],
};
export default config;
