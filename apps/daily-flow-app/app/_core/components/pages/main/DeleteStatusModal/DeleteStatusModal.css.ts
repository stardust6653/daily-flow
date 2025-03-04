import { themeVars } from "@/app/_core/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const DeleteModalStyle = style({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  top: "30%",
  left: "30%",
  backgroundColor: themeVars.colors.base.white,
  padding: "10px 14px",
  borderRadius: "10px",
  boxShadow: themeVars.shadows.md,
  width: "200px",
  height: "72px",
  zIndex: 100,
  boxSizing: "border-box",
});

export const DeleteModalContentStyle = style({
  color: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%", // 전체 너비 사용
  overflow: "hidden", // 내용이 넘치지 않도록
});

export const DeleteModalColorStyle = style({
  width: "8px",
  height: "8px",
  borderRadius: "100%",
  marginRight: "5px",
  marginBottom: "2px",
});

export const DeleteModalButtonStyle = style({
  fontSize: themeVars.fontSizes.sm,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  border: `1px solid ${themeVars.colors.state.error}`,
  width: "100%",
  padding: "3px 5px",
  borderRadius: "5px",
  color: themeVars.colors.state.error,
  transition: "all 0.3s ease-in-out",
  whiteSpace: "nowrap", // 버튼 텍스트가 줄바꿈되지 않도록
  ":hover": {
    backgroundColor: themeVars.colors.state.error,
    color: themeVars.colors.base.white,
  },
});
export const DeleteIconStyle = style({
  marginBottom: "2px",
  marginRight: "5px",
});

export const StatusLabelTextStyle = style({
  display: "block",
  maxWidth: "150px", // 아이콘과 여백을 고려해 줄임
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  flex: "1", // 남은 공간을 모두 차지
  minWidth: 0, // flexbox 내에서 축소 가능하도록 설정
});
