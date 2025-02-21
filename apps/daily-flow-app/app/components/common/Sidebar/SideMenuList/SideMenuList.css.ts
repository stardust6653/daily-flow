import { themeVars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const SideMenuListWrapperStyle = style({
  marginBottom: themeVars.space.xl,
});

export const SideMenuListStyle = style({
  width: "100%",
  marginBottom: themeVars.space.xl,
});

export const SideMenuListTitleStyle = style({
  marginBottom: themeVars.space.md,
});

export const SideMenuItemStyle = style({
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  fontWeight: 400,
  width: "100%",
});

export const SideMenuIconStyle = style({
  display: "block",
  width: "15px",
  height: "15px",
  borderRadius: "100%",
  marginRight: "11px",
});
