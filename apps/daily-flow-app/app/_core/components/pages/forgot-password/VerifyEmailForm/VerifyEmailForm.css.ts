import { themeVars } from "@/app/_core/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const VerifyEmailFormLabelStyle = style({
  display: "inline-block",
  textAlign: "left",
  fontSize: themeVars.fontSizes.sm,
  padding: "0 5px",
  marginBottom: "5px",
});
