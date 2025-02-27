import { themeVars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const AddStatusTitleStyle = style({
  fontSize: themeVars.fontSizes.xl,
  marginBottom: themeVars.space.md,
});

export const AddStatusWrapperStyle = style({
  marginTop: themeVars.space.md,
  width: "50%",
  padding: "15px",
  height: "316px",
  border: `1px solid ${themeVars.colors.gray[300]}`,
});

export const OptionStyle = style({
  marginBottom: themeVars.space.md,
});

export const OptionNameStyle = style({
  fontWeight: "500",
  marginBottom: themeVars.space.sm,
});

export const NameInputStyle = style({
  width: "100%",
  padding: "7px 5px",
  border: "none",
  borderBottom: `1px solid ${themeVars.colors.gray[300]}`,
  boxSizing: "border-box",
});

export const ColorChipListStyle = style({
  marginTop: themeVars.space.md,
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "10px",
  rowGap: "10px",
});

export const ColorChipStyle = style({
  cursor: "pointer",
  position: "relative",
  width: "25px",
  height: "25px",
  borderRadius: "50%",
  border: `1px solid ${themeVars.colors.gray[300]}`,
  overflow: "hidden",
});

export const ColorChipWrapperStyle = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

export const colorChip = style({
  position: "absolute",
  width: "50%",
  height: "100%",
  top: 0,
});

export const MainColorChipStyle = style([
  colorChip,
  {
    left: 0,
  },
]);

export const SubColorChipStyle = style([
  colorChip,
  {
    right: 0,
  },
]);

export const SelectedColorStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  borderRadius: "50%",
  top: 0,
  left: 0,
});
