/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        mediumorchid: "#c456c6",
        gray: {
          "100": "#282828",
          "200": "#141414",
        },
        steelblue: "#1270b0",
        dimgray: "#616161",
        darkslategray: "#333",
        darkgray: "#b3b3b3",
        cornflowerblue: "#17a1fa",
        "neutral-100": "#fff",
        "neutral-300": "#eff0f7",
        slategray: "#6f6c90",
        snow: "#fffafa",
        plum: "#e2a9df",
      },
      spacing: {},
      fontFamily: {
        "kiwi-maru": "'Kiwi Maru'",
        inter: "Inter",
        "other-18-20-m": "'DM Sans'",
        inherit: "inherit",
      },
      borderRadius: {
        "21xl": "40px",
        "27xl": "46px",
        "base-7": "15.7px",
      },
    },
    fontSize: {
      "3xl": "22px",
      lg: "18px",
      "2xs": "11px",
      "5xl": "24px",
      lgi: "19px",
      "19xl-3": "38.3px",
      "4xl": "23px",
      "12xl": "31px",
      "17xl": "36px",
      "10xl": "29px",
      "mid-8": "17.8px",
      inherit: "inherit",
    },
    screens: {
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
