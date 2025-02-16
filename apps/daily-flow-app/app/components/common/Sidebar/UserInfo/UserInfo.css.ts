import { themeVars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const UserInfoStyle = style({
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 10px",
  backgroundColor: themeVars.colors.primary.lightest,
  width: "100%",
  height: "59px",
});

export const UserProfileGroupStyle = style({
  display: "flex",
  alignItems: "center",
});

export const UserProfileStyle = style({
  marginRight: themeVars.space.md,
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  backgroundColor: themeVars.colors.gray.accent,
});

export const IconStyle = style({
  fontSize: themeVars.fontSizes.xl,
  color: themeVars.colors.base.black,
  marginLeft: themeVars.space.md,
  ":hover": {
    color: themeVars.colors.primary.main,
  },
});
