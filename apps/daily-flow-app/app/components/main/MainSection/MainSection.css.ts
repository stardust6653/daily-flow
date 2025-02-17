import { themeVars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const MainSectionStyle = style({
  padding: "67px 61px",
});

export const MainSectionListStyle = style({
  display: "flex",
});

export const MainSectionAddListStyle = style({
  width: "214px",
  display: "flex",
  marginTop: themeVars.space.xl,
  marginRight: themeVars.space.sm,
});

export const MainSectionAddButtonStyle = style({
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

  ":hover": {
    color: themeVars.colors.gray[500],
    backgroundColor: themeVars.colors.gray[300],
  },
});
