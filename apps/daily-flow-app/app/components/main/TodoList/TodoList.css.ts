import { themeVars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const TodoListStyle = style({
  width: "214px",
  marginTop: themeVars.space.xl,
  marginRight: themeVars.space.sm,
});
