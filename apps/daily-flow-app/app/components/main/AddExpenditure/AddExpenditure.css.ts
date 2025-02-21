import { themeVars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const AddExpenditureStyle = style({
  color: themeVars.colors.gray[500],
  fontSize: themeVars.fontSizes.xs,
  textAlign: "end",
  marginBottom: themeVars.space.sm,
  cursor: "pointer",

  ":hover": {
    color: themeVars.colors.primary.main,
  },
});
