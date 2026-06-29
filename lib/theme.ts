"use client";

import { createTheme } from "@mui/material/styles";

const brandOrange = "#F97316";
const brandOrangeDark = "#EA580C";
const brandOrangeLight = "#FB923C";
const brandNavy = "#0F172A";
const brandNavyLight = "#1E293B";

export const theme = createTheme({
  palette: {
    primary: {
      main: brandOrange,
      dark: brandOrangeDark,
      light: brandOrangeLight,
      contrastText: "#ffffff",
    },
    secondary: {
      main: brandNavy,
      light: brandNavyLight,
      contrastText: "#ffffff",
    },
    success: {
      main: "#22c55e",
      dark: "#16a34a",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: brandNavy,
      secondary: "#64748b",
    },
  },
  typography: {
    fontFamily: 'var(--font-inter), "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: 'var(--font-plus-jakarta), var(--font-inter), sans-serif',
      fontWeight: 800,
    },
    h2: {
      fontFamily: 'var(--font-plus-jakarta), var(--font-inter), sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'var(--font-plus-jakarta), var(--font-inter), sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'var(--font-plus-jakarta), var(--font-inter), sans-serif',
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: "1px solid #f1f5f9",
          boxShadow: "0 1px 3px rgba(15, 23, 42, 0.06)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #f1f5f9",
          boxShadow: "none",
        },
      },
    },
  },
});

export { brandNavy, brandNavyLight, brandOrange, brandOrangeDark, brandOrangeLight };
