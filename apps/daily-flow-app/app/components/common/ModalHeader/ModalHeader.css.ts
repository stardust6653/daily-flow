import { themeVars } from "@/app/styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

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

export const ModalHeaderTitleStyle = styleVariants({
  small: { fontSize: themeVars.fontSizes.sm },
  medium: { fontSize: themeVars.fontSizes.md },
  large: { fontSize: themeVars.fontSizes.xl },
});
