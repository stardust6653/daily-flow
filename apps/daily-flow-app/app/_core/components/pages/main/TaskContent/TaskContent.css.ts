import { themeVars } from "@/app/_core/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const TaskContentStyle = style({
  display: "flex",
  alignItems: "flex-start",
  marginBottom: "8px",
});

export const MemoStyle = style({
  color: themeVars.colors.gray[500],
  fontSize: themeVars.fontSizes.sm,
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  wordBreak: "break-word",
});

export const MainTaskContentStyle = style({
  fontSize: themeVars.fontSizes.md,
  marginRight: "5px",
  marginBottom: "7px",
  display: "-webkit-box",
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  wordBreak: "break-word",

  lineHeight: "1.2", // 줄 높이 조정
  maxHeight: "1.3em", // 최대 높이를 줄 높이와 맞춤
  padding: "2px 0", // 위아래 여백 추가
  boxSizing: "border-box", // 박스 모델 조정
});

export const TaskButtonStyle = style({
  marginRight: themeVars.space.sm,
  borderRadius: "50%",
  marginTop: "5px",
  width: "10px",
  height: "10px",
  minWidth: "10px",
  border: "1px solid black",
  padding: 0,
  cursor: "pointer",
  backgroundColor: "transparent",
});
