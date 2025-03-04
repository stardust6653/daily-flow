import { themeVars } from "@/app/_core/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const AddExpenditureModalStyle = style({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const AddExpenditureInputWrapperStyle = style({
  position: "relative",
});

export const AddExpenditureInputStyle = style({
  width: "100%",
  padding: "8px 20px 4px 5px",
  border: "none",
  borderBottom: `1px solid ${themeVars.colors.gray[300]}`,
  boxSizing: "border-box",
  marginTop: themeVars.space.sm,
  fontSize: themeVars.fontSizes.sm,
});

export const AddExpenditureWonStyle = style({
  position: "absolute",
  right: "0",
  top: "60%",
  transform: "translateY(-50%)",
  fontSize: themeVars.fontSizes.sm,
});
