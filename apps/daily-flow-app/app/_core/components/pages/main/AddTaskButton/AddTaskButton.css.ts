import { themeVars } from "@/app/_core/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const AddTaskButtonStyle = style({
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "120px",
  color: themeVars.colors.gray[400],
  backgroundColor: themeVars.colors.gray[100],
  fontSize: themeVars.fontSizes.xxxl,
  transition: "all 0.3s ease-in-out",
  ":hover": {
    color: themeVars.colors.gray[500],
    backgroundColor: themeVars.colors.gray[300],
  },
});
