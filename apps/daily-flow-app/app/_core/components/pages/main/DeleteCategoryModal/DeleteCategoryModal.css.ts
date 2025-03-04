import { themeVars } from "@/app/_core/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const DeleteCategoryModalStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
});

export const DeleteCategoryTitleStyle = style({
  display: "flex",
  alignItems: "center",
});

export const DeleteCategoryDescStyle = style({
  textAlign: "center",
  lineHeight: 1.4,
});

export const AlertStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: themeVars.colors.state.error,
});

export const AlertIconStyle = style({
  marginBottom: "2px",
  marginRight: themeVars.space.xs,
});

export const DeleteButtonStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  width: "100%",
  padding: "5px",
  color: themeVars.colors.state.error,
  border: `1px solid ${themeVars.colors.state.error}`,
  borderRadius: "5px",
  transition: "all 0.3s ease-in-out",
  ":hover": {
    backgroundColor: themeVars.colors.state.error,
    color: themeVars.colors.base.white,
  },
});

export const DeleteIconStyle = style({
  width: "12px",
  height: "12px",
  marginBottom: "2px",
  marginRight: themeVars.space.xs,
});

export const ColorChipStyle = style({
  display: "block",
  width: "10px",
  height: "10px",
  marginBottom: "2px",
  borderRadius: "100%",
  marginRight: themeVars.space.sm,
});
