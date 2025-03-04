import { themeVars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const TaskListStyle = style({
  width: "214px",

  flexShrink: 0,
  marginTop: themeVars.space.xl,
  marginRight: themeVars.space.sm,
});

export const DeleteModalBgStyle = style({
  width: "100%",
  height: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,0.1)",
  zIndex: 99,
});
