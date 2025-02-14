import { themeVars } from "@/app/styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

const baseButtonStyle = style({
  padding: "10px 25px",
  borderRadius: themeVars.radii.md,
  transition: "all 0.2s ease-in-out",
  cursor: "pointer",
  border: "none",
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
});
