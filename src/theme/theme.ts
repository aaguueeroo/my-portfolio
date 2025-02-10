import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Colors, Radiuses, Spacings } from "./constants";

let theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
      "100": "#FFF6F4",
      "200": "#F6EBE9",
      "300": "#F2D6D0",
      "400": "#E4B4AB",
      "500": "#CF8B7F",
      "600": "#8C524D",
      "700": "#502423",
      "800": "#2A0F0F",
      "900": "#110404",
    },
    secondary: {
      main: Colors.secondary,
      "100": "#F0F2F3",
      "200": "#D9DCDE",
      "300": "#BEC2C5",
      "400": "#A3A7AA",
      "500": "#212529",
      "600": "#1B1E20",
      "700": "#141618",
      "800": "#0E0F10",
      "900": "#080909",
    },
    success: {
      main: "#648a65",
    },
    error: {
      main: "#ad4949",
    },
    warning: {
      main: "#c1843a",
    },
    background: {
      default: "#F3F3F3",
    },
  },
  spacing: Spacings.xxs,
  shape: {
    borderRadius: Radiuses.xl,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          padding: Spacings.m,
          gap: Spacings.s,
          borderRadius: Radiuses.l,
          boxShadow: "18px 23px 71.5px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
  typography: {
    fontFamily: ["Golos Text", "sans-serif"].join(","),
    h1: {
      fontSize: "6em",
      '@media (min-width:600px)': {
        fontSize: "3.5rem",
      },
      fontWeight: 700,
      fontFamily: ["Golos Text", "sans-serif"].join(","),
    },
    h2: {
      fontSize: "5em",
      '@media (min-width:600px)': {
        fontSize: "3rem",
      },
      fontWeight: 700,
      fontFamily: ["Golos Text", "sans-serif"].join(","),
    },
    h3: {
      fontSize: "4.5rem",
      fontWeight: 700,
      fontFamily: ["Golos Text", "sans-serif"].join(","),
    },
    h4: {
      fontSize: "4rem",
      fontWeight: 700,
      fontFamily: ["Golos Text", "sans-serif"].join(","),
    },
    h5: {
      fontSize: "3.5rem",
      fontWeight: 700,
      fontFamily: ["Golos Text", "sans-serif"].join(","),
    },
    h6: {
      fontSize: "3rem",
      fontWeight: 700,
      fontFamily: ["Golos Text", "sans-serif"].join(","),
    },
    subtitle1: {
      fontSize: "2rem",
      fontWeight: 700,
      fontFamily: ["Golos Text", "sans-serif"].join(","),
    },
    subtitle2: {
      fontSize: "1.75rem",
      fontWeight: 700,
      fontFamily: ["Golos Text", "sans-serif"].join(","),
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
      fontFamily: ["Golos Text", "sans-serif"].join(","),
      fontSize: "1.5rem",
    },
    body1: {
      fontSize: "2.5rem",
      fontWeight: 400,
      lineHeight: 1.5,
      fontFamily: ["Golos Text", "sans-serif"].join(","),
      
    },
    body2: {
      fontSize: "1.25rem",
      fontWeight: 400,
      fontFamily: ["Golos Text", "sans-serif"].join(","),
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 400,
      fontFamily: ["Golos Text", "sans-serif"].join(","),
    },
  },
});

// This will make all typography responsive automatically
theme = responsiveFontSizes(theme);

export default theme;
