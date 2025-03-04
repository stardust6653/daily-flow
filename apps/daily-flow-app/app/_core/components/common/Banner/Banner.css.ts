import { themeVars } from "@/app/_core/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const BannerStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: themeVars.colors.base.white,
  width: "50%",
  height: "100%",
  borderRadius: "0 10px 10px 0",
  backgroundColor: themeVars.colors.primary.main,
});

export const BannerTitleStyle = style({
  fontSize: themeVars.fontSizes.xxxl,
  fontWeight: 600,
});

export const BannerDescStyle = style({
  lineHeight: 1.3,
  fontSize: themeVars.fontSizes.lg,
  margin: "20px 0 40px",
});
