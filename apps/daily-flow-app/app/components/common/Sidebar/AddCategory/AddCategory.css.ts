import { themeVars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const AddCategoryStyle = style({
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  fontWeight: 400,
  width: "100%",
  padding: "15px 0",
  borderBottom: "1px solid #F19C9C",
});

export const AddCategoryIconStyle = style({
  display: "block",
  width: "10px",
  height: "10px",
  borderRadius: "100%",
  marginRight: themeVars.space.md,
  border: `1px solid ${themeVars.colors.gray[300]}`,
});
