import { themeVars } from "@/app/styles/theme.css";
import { style, createVar } from "@vanilla-extract/css";

export const wrapperWidth = createVar();
export const wrapperHeight = createVar();
export const wrapperDisplay = createVar();
export const wrapperFlexDirection = createVar();
export const wrapperJustifyContent = createVar();
export const wrapperAlignItems = createVar();

export const WrapperStyle = style({
  width: wrapperWidth,
  height: wrapperHeight,
  display: wrapperDisplay,
  flexDirection: wrapperFlexDirection,
  justifyContent: wrapperJustifyContent,
  alignItems: wrapperAlignItems,
  boxShadow: themeVars.shadows.md,
  position: "relative",
});
