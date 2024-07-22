import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        imagePattern: "url('/images/background.png')",
        textImagePattern: "url('/images/textbg.avif')",
        yellowOutline: "url('/images/yellow-outline.png')",
        blackOutline: "url('/images/black-outline.png')",
        heroGlow:
          "radial-gradient(51% 38% at 50% 108.3%, rgba(255, 253, 227, .12) 0%, rgba(171, 171, 171, 0) 100%)",

        yellowGlow:
          "radial-gradient(50% 42% at 44.800000000000004% 28.7%, var(--token-2f356ba9-a052-497b-a1a1-ad2839fe6a1e, #fffb00) 0%, rgba(253, 235, 87, 0) 100%)",
         goodiesYellow: 'radial-gradient(50% 25% at 50% 0%, rgba(255, 251, 0, .2) 0%, rgba(0, 0, 0, 0) 100%);',
         funkeyYellow:'radial-gradient(50% 42% at 44.800000000000004% 28.7%, var(--token-2f356ba9-a052-497b-a1a1-ad2839fe6a1e, #fffb00) 0%, rgba(253, 235, 87, 0) 100%)',
         largeCupYellow:'radial-gradient(50% 42% at 50% 8.9%, var(--token-2f356ba9-a052-497b-a1a1-ad2839fe6a1e, #fffb00) 0%, rgba(253, 235, 87, 0) 100%);',
         dribbleYellow:'radial-gradient(50% 42% at 50% 64.2%, var(--token-2f356ba9-a052-497b-a1a1-ad2839fe6a1e, #fffb00) 0%, rgba(253, 235, 87, 0) 100%);',
         scrollRadial:'radial-gradient(46% 58.879999999999995% at 50% 100%, rgba(255, 251, 0, .2) 0%, rgba(0, 0, 0, 0) 100%);',
         accordianGlow:'radial-gradient(46% 46% at 50% 57.99999999999999%,rgba(255,251,0,.25) 0%,rgba(0,0,0,0) 100%)',

         textColor:'radial-gradient(circle, #fffb00, #000000)'
      },
      colors: {
        yellow: "#fffb00",
        borderColor:'rgba(255, 255, 255, .1)',
        cardFlip:'rgba(245, 39, 145, 0.5)'
      },

      fontFamily: {
        ibm: ["var(--ibm-plex-sans-condensed), sans-serif"],
        gasoek: ["var(--gasoek-one), cursive"],
        poppins: ["Poppins, cursive"],
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "spin-fast": "spin 0.5s linear infinite",

        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
    plugins: [addVariablesForColors],
  },
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;
