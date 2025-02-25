import { themeVars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const DeleteModalStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  top: "30%",
  left: "30%",
  backgroundColor: themeVars.colors.base.white,
  position: "absolute",
  padding: "10px 14px",
  borderRadius: "10px",
  boxShadow: themeVars.shadows.md,
  width: "200px",
  height: "72px",
  zIndex: 100,
  boxSizing: "border-box",
});

export const DeleteModalContentStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
});

export const DeleteModalColorStyle = style({
  width: "8px",
  height: "8px",
  borderRadius: "100%",
  marginRight: "5px",
  marginBottom: "2px",
});

export const DeleteModalButtonStyle = style({
  cursor: "pointer",
  border: `1px solid ${themeVars.colors.state.error}`,
  width: "100%",
  padding: "5px",
  borderRadius: "5px",
  color: themeVars.colors.state.error,
  transition: "all 0.3s ease-in-out",
  ":hover": {
    backgroundColor: themeVars.colors.state.error,
    color: themeVars.colors.base.white,
  },
});
