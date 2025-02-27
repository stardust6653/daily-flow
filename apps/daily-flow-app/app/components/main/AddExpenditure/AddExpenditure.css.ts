import { themeVars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const AddExpenditureStyle = style({
  display: "flex",
  justifyContent: "flex-end",
});

export const AddExpenditureTextStyle = style({
  fontSize: themeVars.fontSizes.sm,
  cursor: "pointer",
  color: themeVars.colors.gray[500],
  transition: "all 0.3s ease-in-out",
  ":hover": {
    color: themeVars.colors.primary.main,
  },
});
