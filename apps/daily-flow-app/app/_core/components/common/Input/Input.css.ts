import { themeVars } from "@/app/_core/styles/theme.css";
import { createVar, style } from "@vanilla-extract/css";

export const wrapperWidth = createVar();
export const wrapperHeight = createVar();

export const InputFormStyle = style({
  display: "flex",
  flexDirection: "column",
  textAlign: "right",
});

export const InputStyle = style({
  width: "260px",
  height: "38px",
  padding: "0 14px",
  boxSizing: "border-box",
  borderRadius: themeVars.radii.sm,
  backgroundColor: themeVars.colors.gray.accent,
  border: "none",
  textAlign: "left",
});

export const ErrorMessageStyle = style({
  fontSize: themeVars.fontSizes.xs,
  padding: "7px 2px",
  height: "26px",
  boxSizing: "border-box",
  color: themeVars.colors.state.error,
});
