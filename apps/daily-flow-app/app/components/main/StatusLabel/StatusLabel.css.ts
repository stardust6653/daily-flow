import { themeVars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const StatusLabelStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "10px 10px 0 0",
  color: themeVars.colors.base.white,
  fontSize: themeVars.fontSizes.md,
  padding: "10px 15px",
});

export const ListLengthStyle = style({
  fontSize: themeVars.fontSizes.md,
});
