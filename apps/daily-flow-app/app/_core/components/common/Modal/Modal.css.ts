import { themeVars } from "@/app/_core/styles/theme.css";
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

const modalStyle = style({
  borderRadius: themeVars.radii.md,
  backgroundColor: themeVars.colors.base.white,
  boxShadow: themeVars.shadows.md,
  padding: "20px",
  boxSizing: "border-box",
});

export const SmallModalStyle = style([
  modalStyle,
  {
    width: "300px",
    height: "200px",
  },
]);

export const MediumModalStyle = style({});

export const LargeModalStyle = style([
  modalStyle,
  {
    width: "768px",
    height: "480px",
  },
]);
