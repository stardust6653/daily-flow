import { themeVars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const ModalHeaderStyle = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: themeVars.fontSizes.xxl,
  fontWeight: 600,
});

export const CloseButtonStyle = style({
  cursor: "pointer",
});
