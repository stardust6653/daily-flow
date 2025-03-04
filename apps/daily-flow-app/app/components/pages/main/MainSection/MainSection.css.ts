import { style } from "@vanilla-extract/css";

export const MainSectionStyle = style({
  width: "100%",
  padding: "67px 0 0 61px",
  height: "100vh", // 전체 화면 높이
  overflow: "hidden", // 중요: 내부 스크롤을 위해 외부 오버플로우 차단
});

export const MainSectionListStyle = style({
  display: "flex",
  overflowX: "auto", // 수평 스크롤 유지
  width: "100%",
  height: "calc(100vh - 160px)", // 패딩과 헤더 등 고려한 높이
  flexWrap: "nowrap", // 줄바꿈 방지

  // 스크롤바 숨기기
  msOverflowStyle: "none", // IE, Edge용
  scrollbarWidth: "none", // Firefox용

  // Webkit 브라우저용 (Chrome, Safari 등)
  "::-webkit-scrollbar": {
    display: "none",
  },
});

export const DeleteModalBgStyle = style({
  width: "100%",
  height: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,0.1)",
  zIndex: 99,
});
