import { themeVars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const DetailModalStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  width: "100%",
});

export const DetailModalHeaderWrapperStyle = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  marginBottom: themeVars.space.md,
});

export const DetailModalColorStyle = style({
  width: "15px",
  height: "15px",
  borderRadius: "100%",
  "::after": {
    content: " ",
  },
  marginRight: themeVars.space.md,
});

export const OptionStyle = style({
  display: "flex",
  alignItems: "center",
  padding: "10px",
});

export const OptionNameStyle = style({
  display: "flex",
  width: "130px",
  color: themeVars.colors.gray[600],
});

export const OptionIconStyle = style({
  fontSize: themeVars.fontSizes.sm,
  color: themeVars.colors.gray[500],
  marginRight: themeVars.space.sm,
});

export const OptionContentStyle = style({
  display: "flex",
  alignItems: "center",
  color: themeVars.colors.gray[700],
});

export const ColorChipStyle = style({
  width: "9px",
  height: "9px",
  borderRadius: "100%",
  marginRight: themeVars.space.sm,
  "::after": {
    content: " ",
  },
});

export const SubTaskStyle = style({
  display: "flex",
  flexDirection: "column",

  rowGap: themeVars.space.md,
});

export const SubTaskContentStyle = style({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});

export const buttonStyle = style({
  cursor: "pointer",
  width: "10px",
  height: "10px",
  border: `1px solid ${themeVars.colors.gray[800]}`,
  borderRadius: "4px",
  marginRight: themeVars.space.sm,
});

export const SubTaskCheckButtonStyle = style([buttonStyle, {}]);

export const SubTaskCheckCompleteButtonStyle = style([
  buttonStyle,
  {
    backgroundColor: themeVars.colors.primary.lighter,
  },
]);

export const SubTaskContentTextStyle = style({});

export const SubTaskContentTextCompleteStyle = style({
  textDecoration: "line-through",
  color: themeVars.colors.gray[500],
});

export const LineStyle = style({
  width: "100%",
  borderBottom: `1px solid ${themeVars.colors.gray[300]}`,
  margin: `${themeVars.space.md} 0`,
});

export const CompleteButtonStyle = style({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
});
