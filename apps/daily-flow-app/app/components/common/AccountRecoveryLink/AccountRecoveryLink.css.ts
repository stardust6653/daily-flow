import { themeVars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const AccountRecoveryLinkStyle = style({
  color: themeVars.colors.base.black,
  fontSize: themeVars.fontSizes.xs,
  textDecoration: "none",
  borderBottom: "none",
  ":hover": {
    color: themeVars.colors.primary.dark,
  },
});
