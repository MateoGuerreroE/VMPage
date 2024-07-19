import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    flowbite.content(),
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        short: { raw: "(min-height: 901px)" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        mazo: "url('../public/bg/mazo.jpg')",
        areas: "url('../public/bg/areas.png')",
        act: "url('../public/bg/actividades.png')",
        biblo: "url('../public/bg/biblioteca.png')",
        contact: "url('../public/bg/contacto.png')",
        artemis: "url('../public/bg/artemisa.jpg')",
      },
      colors: {
        "vm-darker": "#2f2e2f",
        "vm-brown": "#645047",
        "vm-beige": "#bba088",
        "vm-blue": "#032739",
        "vm-ywl": "#af8854",
      },
      fontFamily: {
        display: ["var(--font-dmdisplay)"],
        dmsans: ["var(--font-dmsans)"],
      },
    },
  },
  plugins: [flowbite.plugin(), require("@tailwindcss/aspect-ratio")],
};
export default config;
