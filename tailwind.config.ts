import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#090806",
        noir: "#11100d",
        ivory: "#f8f1e6",
        pearl: "#fffaf1",
        champagne: "#d7b875",
        antique: "#b08a4a",
        sand: "#c8b18a",
        dusk: "#272118"
      },
      boxShadow: {
        silk: "0 24px 80px rgba(17, 16, 13, 0.22)",
        candle: "0 0 45px rgba(215, 184, 117, 0.28)"
      },
      backgroundImage: {
        "paper-grain":
          "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.74), transparent 26%), radial-gradient(circle at 82% 18%, rgba(215,184,117,0.18), transparent 28%), linear-gradient(135deg, #fffaf1 0%, #f5ead8 46%, #ead8b8 100%)"
      }
    }
  },
  plugins: []
};

export default config;
