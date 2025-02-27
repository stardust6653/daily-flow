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

export const SidebarMenuWrapperStyle = style({
  width: "328px",
  boxSizing: "border-box",
  padding: "13px 19px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});
