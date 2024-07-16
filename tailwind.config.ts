import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        mazo: "url('../public/bg/mazo.jpg')",
        areas: "url('../public/bg/areas.png')",
        act: "url('../public/bg/actividades.png')",
        biblo: "url('../public/bg/biblioteca.png')",
        contact: "url('../public/bg/contacto.png')",
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
  plugins: [],
};
export default config;
