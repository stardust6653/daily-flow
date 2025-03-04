import { themeVars } from "@/app/_core/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const AddStatusWrapperStyle = style({
  marginTop: themeVars.space.md,
  width: "50%",
  padding: "15px",
  height: "316px",
  border: `1px solid ${themeVars.colors.gray[300]}`,
  overflowY: "auto",
});

export const StatusListTitleStyle = style({
  fontSize: themeVars.fontSizes.xl,
  marginBottom: themeVars.space.md,
});

export const StatusListStyle = style({
  display: "flex",
  flexDirection: "column",
  rowGap: "5px",
});

export const StatusListItemStyle = style({
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "7px",
  border: `1px solid ${themeVars.colors.gray[300]}`,
});

export const StatusLabelStyle = style({
  display: "flex",
  alignItems: "center",
  color: themeVars.colors.gray[700],
});

export const StatusColorStyle = style({
  minWidth: "6px",
  height: "6px",
  borderRadius: "50%",
  marginRight: "5px",
});

export const StatusNameStyle = style([
  {
    display: "block",
    maxWidth: "300px", // 아이콘과 여백을 고려해 줄임
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    flex: "1", // 남은 공간을 모두 차지
    minWidth: 0, // flexbox 내에서 축소 가능하도록 설정
  },
]);

export const RemoveIconStyle = style({
  fontSize: themeVars.fontSizes.sm,
  cursor: "pointer",
  color: themeVars.colors.gray[400],
  ":hover": {
    color: themeVars.colors.primary.main,
  },
});
