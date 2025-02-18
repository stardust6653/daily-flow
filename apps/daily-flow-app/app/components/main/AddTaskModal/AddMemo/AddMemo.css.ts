import { style } from "@vanilla-extract/css";
import { baseAddTaskBoxStyle } from "../AddTaskModal.css";
import { themeVars } from "@/app/styles/theme.css";

export const AddMemoStyle = style([
  baseAddTaskBoxStyle,
  {
    width: "361px",
  },
]);

export const MemoStyle = style({
  fontSize: themeVars.fontSizes.sm,
  lineHeight: "1.3",
  boxSizing: "border-box",
  width: "100%",
  height: "90%",
  padding: "5px",
  border: "none",
  resize: "none",
});
