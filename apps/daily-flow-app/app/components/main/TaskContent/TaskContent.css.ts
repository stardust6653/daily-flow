import { themeVars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const TaskContentStyle = style({
  display: "flex",
  alignItems: "flex-start",
  marginBottom: "8px",
});

export const MainTaskContentStyle = style({
  fontSize: themeVars.fontSizes.md,
  marginRight: "5px",
  marginBottom: "7px",
});

export const MemoStyle = style({
  color: themeVars.colors.gray[500],
  fontSize: themeVars.fontSizes.sm,
});

export const TaskButtonStyle = style({
  marginRight: themeVars.space.sm,
  borderRadius: "50%",
  marginTop: "2px",
  width: "10px",
  height: "10px",
  border: "1px solid black",
  padding: 0,
  cursor: "pointer",
  backgroundColor: "transparent",
});
