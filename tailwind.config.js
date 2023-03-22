/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        default: "#8B3ECF",
        400: "#954FD3",
        300: "#A468D9",
        200: "#B07CDE",
        100: "#BD91E4",
      },
      secondary: {
        default: "#3972E6",
        400: "#4E81E9",
        300: "#6591EC",
        200: "#7CA1EE",
        100: "#92B2F1",
      },
      ternary: {
        default: "#2DEBC9",
        400: "#5CEFD5",
        300: "#7DF3DD",
        200: "#99F5E5",
        100: "#B4F8EC",
      },
      warning: {
        default: "#E63965",
        400: "#E95379",
        300: "#EC6A8B",
        200: "#EF809C",
        100: "#F29BB2",
      },
      info: {
        default: "#DB7737",
        400: "#E18C56",
        300: "#E49868",
        200: "#E7A479",
        100: "#EBB38F",
      },
      dark: {
        400: "#35393B",
        300: "#43484C",
        200: "#52585C",
        100: "#60676C",
      },
      light: {
        400: "#E8E8E8",
        300: "#D9D9D9",
        200: "#BFBFBF",
        100: "#A3A3A3",
      },
    },
    fontSize: {
      xs: [
        "8px",
        {
          lineHeight: "12px",
          letterSpacing: "-0.5em",
          fontWeight: "300",
        },
      ],
      sm: [
        "12px",
        {
          lineHeight: "14px",
          letterSpacing: "-0.75em",
          fontWeight: "300",
        },
      ],
      base: [
        "14px",
        {
          lineHeight: "18px",
          letterSpacing: "-0.875em",
          fontWeight: "400",
        },
      ],
      lg: [
        "16px",
        {
          lineHeight: "20px",
          letterSpacing: "-1em",
          fontWeight: "300",
        },
      ],
      xl: [
        "16px",
        {
          lineHeight: "20px",
          letterSpacing: "-1em",
          fontWeight: "400",
        },
      ],
      "2xl": [
        "20px",
        {
          lineHeight: "28px",
          letterSpacing: "-1.25em",
          fontWeight: "300",
        },
      ],
      "3xl": [
        "24px",
        {
          lineHeight: "32px",
          letterSpacing: "-1.5em",
          fontWeight: "300",
        },
      ],
      "4xl": [
        "32px",
        {
          lineHeight: "48px",
          letterSpacing: "-2em",
          fontWeight: "400",
        },
      ],
      "5xl": [
        "56px",
        {
          lineHeight: "72px",
          letterSpacing: "7em",
          fontWeight: "500",
        },
      ],
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
