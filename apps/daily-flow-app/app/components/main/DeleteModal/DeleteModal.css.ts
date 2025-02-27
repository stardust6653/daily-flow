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
  cursor: "default",
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

export const MainTaskTextStyle = style({
  display: "block",
  maxWidth: "150px", // 아이콘과 여백을 고려해 줄임
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  flex: "1", // 남은 공간을 모두 차지
  minWidth: 0, // flexbox 내에서 축소 가능하도록 설정
});

export const DeleteIconStyle = style({
  marginBottom: "2px",
  marginRight: "5px",
});
