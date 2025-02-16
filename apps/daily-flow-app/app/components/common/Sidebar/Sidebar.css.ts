import { themeVars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const SidebarStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "328px",
  height: "100%",
  boxSizing: "border-box",
  backgroundColor: themeVars.colors.primary.main,
});

export const SidebarMenuStyle = style({
  width: "100%",
  fontSize: themeVars.fontSizes.md,
  color: themeVars.colors.base.white,
  fontWeight: 600,
});

export const SidebarMenuWrapperStyle = style({
  width: "100%",
  boxSizing: "border-box",
  padding: "13px 19px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const SidebarMenuListStyle = style({
  width: "100%",
  marginBottom: themeVars.space.xl,
});

export const SidebarMenuTitleStyle = style({
  marginBottom: themeVars.space.md,
});

export const SidebarMenuItemStyle = style({
  fontWeight: 400,

  display: "flex",
  alignContent: "center",
});

export const SidebarMenuItemIconStyle = style({
  marginRight: themeVars.space.sm,
});
