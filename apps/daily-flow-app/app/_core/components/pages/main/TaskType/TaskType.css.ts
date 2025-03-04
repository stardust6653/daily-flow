import { themeVars } from "@/app/_core/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const TaskTypeStyle = style({
  color: themeVars.colors.gray[400],
  fontSize: themeVars.fontSizes.sm,
  textAlign: "end",
});
