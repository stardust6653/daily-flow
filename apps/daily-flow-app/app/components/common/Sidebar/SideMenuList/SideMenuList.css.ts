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
