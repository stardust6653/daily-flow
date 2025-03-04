import { themeVars } from "@/app/_core/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const TodoListItemColorChipStyle = style({
  display: "block",
  width: "10px",
  height: "10px",
  borderRadius: "100%",
  marginBottom: "2px",
  marginRight: themeVars.space.md,
  "::after": {
    content: " ",
  },
});

export const TodoListItemStyle = style({
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  fontWeight: 400,
  width: "100%",
  padding: "15px 0",
  borderBottom: "1px solid #F19C9C",
});
