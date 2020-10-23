module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        color1: "#7541c8",
        color2: "#48556a",
        color3: "#19212e",
        color4: "#ffffff",
        color5: "#cfcfcf",
        color6: "#ecf2f8",
      },
      fontFamily: {
        Barlow: "Barlow Semi Condensed",
      },
      backgroundImage: {
        quote: "url('./images/bg-pattern-quotation.svg')",
      },
      backgroundPosition: {
        "80%": "80% top",
        "90%": "90% top",
      },
    },
  },
  variants: {},
  plugins: [],
};
