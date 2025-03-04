import { themeVars } from "@/app/_core/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const SidebarNavigationStyle = style({
  width: "100%",
  fontSize: themeVars.fontSizes.md,
  color: themeVars.colors.base.white,
  fontWeight: 600,
});
