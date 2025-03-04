import { themeVars } from "@/app/_core/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const AddCategoryModalStyle = style({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const AddCategoryInputWrapperStyle = style({
  position: "relative",
});

export const AddCategoryInputStyle = style({
  width: "100%",
  padding: "8px 20px 8px 5px",
  border: "none",
  borderBottom: `1px solid ${themeVars.colors.gray[300]}`,
  boxSizing: "border-box",
  marginTop: themeVars.space.sm,
});

export const ColorChipListStyle = style({
  marginTop: themeVars.space.md,
  width: "100%",
  display: "flex",
  overflowX: "scroll",
  gap: "5px",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
});

export const ColorChipStyle = style({
  cursor: "pointer",
  display: "block",
  width: "20px",
  height: "20px",
  borderRadius: "100%",
  flexShrink: 0,
});

export const SelectedColorStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  fontSize: "10px",
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  borderRadius: "100%",
  color: themeVars.colors.base.white,
});
