import { themeVars } from "@/app/_core/styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

const baseButtonStyle = style({
  padding: "10px 25px",
  borderRadius: themeVars.radii.md,
  boxSizing: "border-box",
  transition: "all 0.2s ease-in-out",
  cursor: "pointer",
  border: "none",
  textAlign: "center",
});

export const ButtonStyle = styleVariants({
  primary: [
    baseButtonStyle,
    {
      backgroundColor: themeVars.colors.primary.main,
      color: themeVars.colors.base.white,

      ":hover": {
        backgroundColor: themeVars.colors.primary.dark,
      },
    },
  ],
  white: [
    baseButtonStyle,
    {
      backgroundColor: themeVars.colors.base.white,
      color: themeVars.colors.primary.main,

      ":hover": {
        color: themeVars.colors.base.white,
        backgroundColor: themeVars.colors.primary.lighter,
      },
    },
  ],
  secondary: [
    baseButtonStyle,
    {
      backgroundColor: themeVars.colors.primary.lighter,
      color: themeVars.colors.primary.dark,
      ":hover": {
        backgroundColor: themeVars.colors.primary.light,
        color: themeVars.colors.primary.main,
      },
    },
  ],
  outline: [
    baseButtonStyle,
    {
      backgroundColor: "transparent",
      color: themeVars.colors.primary.main,
      border: `1.5px solid ${themeVars.colors.primary.main}`,
      ":hover": {
        borderColor: themeVars.colors.primary.lightest,
        backgroundColor: themeVars.colors.primary.lightest,
        color: themeVars.colors.primary.darker,
      },
    },
  ],
});

export const DisabledStyle = styleVariants({
  true: {
    cursor: "not-allowed",
    opacity: 0.5,
  },
  false: {
    cursor: "pointer",
    opacity: 1,
  },
});
