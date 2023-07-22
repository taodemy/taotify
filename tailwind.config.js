/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // using theme extend, so that we can still use the original color, for example transparent.
    fontSize: {
      xs: [
        "0.5rem",
        {
          lineHeight: "12px",
          fontWeight: "300",
        },
      ],
      sm: [
        "0.75rem",
        {
          lineHeight: "14px",
          fontWeight: "300",
        },
      ],
      base: [
        "0.875rem",
        {
          lineHeight: "18px",
          fontWeight: "400",
        },
      ],
      lg: [
        "1rem",
        {
          lineHeight: "20px",
          fontWeight: "300",
        },
      ],
      xl: [
        "1rem",
        {
          lineHeight: "20px",
          fontWeight: "400",
        },
      ],
      "2xl": [
        "1.25rem",
        {
          lineHeight: "28px",
          fontWeight: "300",
        },
      ],
      "3xl": [
        "1.5rem",
        {
          lineHeight: "32px",
          fontWeight: "300",
        },
      ],
      "4xl": [
        "2rem",
        {
          lineHeight: "48px",
          fontWeight: "400",
        },
      ],
      "5xl": [
        "3.5rem",
        {
          lineHeight: "72px",
          fontWeight: "500",
        },
      ],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B3ECF",
          400: "#954FD3",
          300: "#A468D9",
          200: "#B07CDE",
          100: "#BD91E4",
        },
        secondary: {
          DEFAULT: "#3972E6",
          400: "#4E81E9",
          300: "#6591EC",
          200: "#7CA1EE",
          100: "#92B2F1",
        },
        ternary: {
          DEFAULT: "#2DEBC9",
          400: "#5CEFD5",
          300: "#7DF3DD",
          200: "#99F5E5",
          100: "#B4F8EC",
        },
        warning: {
          DEFAULT: "#E63965",
          400: "#E95379",
          300: "#EC6A8B",
          200: "#EF809C",
          100: "#F29BB2",
        },
        info: {
          DEFAULT: "#DB7737",
          400: "#E18C56",
          300: "#E49868",
          200: "#E7A479",
          100: "#EBB38F",
        },
        dark: {
          DEFAULT: "#282B2D",
          400: "#35393B",
          300: "#43484C",
          200: "#52585C",
          100: "#60676C",
        },
        light: {
          DEFAULT: "#FEFEFE",
          400: "#E8E8E8",
          300: "#D9D9D9",
          200: "#BFBFBF",
          100: "#A3A3A3",
        },
      },
      dropShadow: {
        bgImgShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        sans: ["sans-serif"],
        roboto: ["var(--font-roboto)"],
        allura: ["var(--font-allura)"],
      },
    },
  },
  plugins: [],
};
