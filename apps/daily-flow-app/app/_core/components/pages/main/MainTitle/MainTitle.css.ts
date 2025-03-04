import { themeVars } from "@/app/_core/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const MainTitleStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: themeVars.fontSizes.xxxl,
  fontWeight: 600,
});

export const TitleGroupStyle = style({
  display: "flex",
  alignItems: "center",
});

export const MainTitleColorChipStyle = style({
  display: "block",
  width: "15px",
  height: "15px",
  borderRadius: "100%",
  marginRight: themeVars.space.md,
  "::after": {
    content: " ",
  },
});

export const DeleteIconStyle = style({
  cursor: "pointer",
  width: "20px",
  height: "20px",
  marginRight: themeVars.space.xxl,
  color: themeVars.colors.gray[500],
  transition: "all 0.3s ease-in-out",
  ":hover": {
    color: themeVars.colors.state.error,
  },
});
