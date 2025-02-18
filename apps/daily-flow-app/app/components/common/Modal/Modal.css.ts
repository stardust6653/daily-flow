import { themeVars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const ModalWrapperStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  position: "absolute",
  top: 0,
  left: 0,
});

export const SmallModalStyle = style({});

export const MediumModalStyle = style({});

export const LargeModalStyle = style({
  width: "768px",
  height: "480px",
  borderRadius: themeVars.radii.md,
  backgroundColor: themeVars.colors.base.white,
  boxShadow: themeVars.shadows.md,
  padding: "20px",
  boxSizing: "border-box",
});
