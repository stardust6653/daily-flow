import { themeVars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const TaskTypeStyle = style({
  color: themeVars.colors.gray[400],
  fontSize: themeVars.fontSizes.sm,
  textAlign: "end",
});
