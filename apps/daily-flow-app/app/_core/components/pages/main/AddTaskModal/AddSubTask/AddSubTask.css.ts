import { style } from "@vanilla-extract/css";
import { baseAddTaskBoxStyle } from "../AddTaskModal.css";
import { themeVars } from "@/app/_core/styles/theme.css";

export const AddSubTaskStyle = style([
  baseAddTaskBoxStyle,
  {
    width: "170px",
  },
]);

export const AddSubTaskInputStyle = style({
  border: "none",
  padding: "5px 4px",
  borderBottom: `1px solid ${themeVars.colors.gray[300]}`,
  marginBottom: themeVars.space.md,
  width: "100%",
  boxSizing: "border-box",
  fontSize: themeVars.fontSizes.sm,
});

export const SubTaskItemStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: themeVars.space.sm,
});

export const SubTaskContentStyle = style({
  fontSize: themeVars.fontSizes.sm,
});

export const EraseButtonStyle = style({
  cursor: "pointer",
  fontSize: themeVars.fontSizes.sm,
  marginBottom: "2px",
  color: themeVars.colors.gray[500],

  ":hover": {
    color: themeVars.colors.primary.main,
  },
});

export const EmptySubTaskStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: themeVars.colors.gray[500],
  textAlign: "center",
  fontSize: themeVars.fontSizes.sm,
  marginTop: themeVars.space.md,
  lineHeight: "1.3",
});
