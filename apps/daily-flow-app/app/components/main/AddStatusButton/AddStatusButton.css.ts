import { themeVars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const AddStatusButtonWrapperStyle = style({
  width: "214px",
  display: "flex",
  marginTop: themeVars.space.xl,
  flexShrink: 0,
  marginRight: "61px",
});

export const AddStatusButtonStyle = style({
  width: "100%",
  height: "36px",
  boxSizing: "border-box",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px 10px 0 0",
  fontSize: themeVars.fontSizes.md,
  padding: "10px 15px",
  color: themeVars.colors.gray[400],
  backgroundColor: themeVars.colors.gray[200],
  transition: "all 0.3s ease-in-out",

  ":hover": {
    color: themeVars.colors.gray[500],
    backgroundColor: themeVars.colors.gray[300],
  },
});
