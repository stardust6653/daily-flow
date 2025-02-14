import { createGlobalTheme } from "@vanilla-extract/css";

export const themeVars = createGlobalTheme(":root", {
  colors: {
    // 메인 컬러 스케일
    primary: {
      lightest: "#F7D4CC", // 매우 연한 톤 - 배경용
      lighter: "#ECA395", // 연한 톤 - 부드러운 강조
      light: "#E88D7C", // 밝은 톤 - 호버 배경
      main: "#E2725B", // 기본 메인 컬러
      dark: "#C85B45", // 어두운 톤 - 호버/액티브
      darker: "#A64937", // 더 어두운 톤 - 강조
    },

    // 그레이 스케일
    gray: {
      bg: "#C4C4C4", // 기존 bgGray
      accent: "#F1F1F1", // 기존 accentGray
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
    },

    // 상태 컬러
    state: {
      error: "#FF3636", // 기존 cancelRed
      success: "#228A2B", // 기존 confirmGreen
      warning: "#FFA726", // 새로 추가된 경고색
      info: "#29B6F6", // 새로 추가된 정보색
    },

    // 기본 컬러
    base: {
      white: "#FFFFFF",
      black: "#111827",
    },
  },

  // 간격 시스템
  space: {
    none: "0",
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },

  // 반경 시스템
  radii: {
    none: "0",
    sm: "5px",
    md: "10px",
    lg: "12px",
    xl: "16px",
    full: "9999px",
  },

  // 그림자 시스템
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
  },

  // 폰트 크기
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    xxl: "24px",
    xxxl: "28px",
  },

  // 폰트 두께
  fontWeights: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
});
