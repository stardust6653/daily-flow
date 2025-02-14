import { themeVars } from "@/app/styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const LogoStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: themeVars.fontSizes.xxl,
  fontWeight: 600,
});

export const LogoImageStyle = style({
  marginRight: 7,
});

// 공통 스타일 정의
const spanBase = style({
  marginRight: 3,
});

// prop에 따른 컬러
export const LogoTextVariants = styleVariants({
  color: { color: "#000" },
  white: { color: "#FFFFFF" },
});

export const LogoSpanTextStyle = styleVariants({
  color: [spanBase, { color: "#060606" }],
  white: [spanBase, { color: "#FFF1E6" }],
});
