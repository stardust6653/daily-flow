import { style } from "@vanilla-extract/css";
import { baseAddTaskBoxStyle } from "../AddTaskModal.css";
import { themeVars } from "@/app/_core/styles/theme.css";
import { EllipsisTextStyle } from "@/app/_core/styles/common.css";

export const SetOptionStyle = style([
  baseAddTaskBoxStyle,
  {
    overflowY: "auto",
    width: "170px",
  },
]);

export const SelectOptionStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: themeVars.fontSizes.md,
  fontWeight: 600,
  marginBottom: themeVars.space.md,
});

export const ToggleStyle = style({
  cursor: "pointer",
  fontSize: themeVars.fontSizes.xxxl,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: themeVars.colors.primary.main,
});

export const SelectScheduleWrapperStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginTop: themeVars.space.sm,
  marginBottom: themeVars.space.md,
});

export const SelectScheduleStyle = style({
  width: "100%",
  marginBottom: themeVars.space.sm,
});

export const SelectScheduleLabelStyle = style({
  color: themeVars.colors.gray[500],
  fontSize: themeVars.fontSizes.sm,
  marginBottom: themeVars.space.xs,
});

export const SelectScheduleInputStyle = style({
  padding: "0 2px",
  width: "100%",
  fontSize: themeVars.fontSizes.sm,
  border: `1px solid ${themeVars.colors.gray[300]}`,
});

export const SelectStatusStyle = style({});

export const SelectStatusTitleStyle = style({
  fontSize: themeVars.fontSizes.md,
  fontWeight: 600,
  marginBottom: themeVars.space.sm,
});

export const SelectedLabelStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: themeVars.fontSizes.sm,
  cursor: "pointer",
  padding: "3px 7px",
  border: `1px solid ${themeVars.colors.gray[300]}`,
  height: "26px",
  boxSizing: "border-box",
  marginBottom: themeVars.space.sm,
});

export const SelectedLabelNameStyle = style({
  display: "flex",
  alignItems: "center",
  maxWidth: "100%",
  overflow: "hidden",
});

export const LabelListStyle = style({
  fontSize: themeVars.fontSizes.sm,
  border: `1px solid ${themeVars.colors.gray[300]}`,
});

export const LabelItemStyle = style({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  padding: "7px",
  ":hover": {
    backgroundColor: themeVars.colors.gray[100],
  },
});

export const LabelItemTextStyle = style([
  EllipsisTextStyle,
  {
    display: "block",
    width: "100%",
  },
]);

export const LabelItemColorStyle = style({
  minHeight: "10px",
  minWidth: "10px",
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  marginRight: themeVars.space.sm,
});
