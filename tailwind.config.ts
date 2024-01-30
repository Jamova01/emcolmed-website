// importa los tipos de configuración de Tailwind CSS
import type { Config } from "tailwindcss";

// Colores corporativos
// #063B54
// #CCCCCC
// #006F86
// #458922
// #6A9643

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        marqueeX: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
      animation: {
        marqueeX: "marqueeX 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
