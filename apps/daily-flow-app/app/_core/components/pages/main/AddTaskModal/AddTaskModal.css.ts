import { themeVars } from "@/app/_core/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const AddTaskModalStyle = style({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const AddTaskInputStyle = style({
  width: "544px",
  padding: "8px 11px",
  marginTop: "10px",
  border: "none",
  borderBottom: `1px solid ${themeVars.colors.gray[300]}`,
});

export const AddWrapperStyle = style({
  display: "flex",
  marginTop: "20px",
  justifyContent: "space-between",
});

// 공통 스타일
export const baseAddTaskBoxStyle = style({
  height: "286px",
  border: `1px solid ${themeVars.colors.gray[300]}`,
  padding: "15px 13px",
  boxSizing: "border-box",
});

export const InputTitleStyle = style({
  fontSize: themeVars.fontSizes.xl,
  marginBottom: themeVars.space.sm,
});

export const AddButtonStyle = style({
  display: "flex",
  justifyContent: "flex-end",
});
