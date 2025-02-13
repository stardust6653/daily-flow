# 프로젝트 이슈 모음

1. turbopack에서 Vanilla Extract 동작 불가 이슈

   > 해결 : Webpack으로 세팅

- [VE 깃헙에 등록된 이슈](https://github.com/vanilla-extract-css/vanilla-extract/issues/1367)

---

2. 동적 스타일링 에러

   `Unsupported style property var(--fontColor**1gmfgka2). Did you mean var(-fontColor**1gmfgka2)?`

   위 에러와 함께 스타일링이 의도적으로 되지 않음.

   > 해결 : `npm install @vanilla-extract/dynamic` 설치
   > 기존에는 컴포넌트 스타일에 변수를 직접 전달하였으나 `assignInlineVars`를 통해 전달하니 문제 해결
   > assignInlineVars 함수를 통해 CSS 변수를 변환하여 인라인 스타일에 적용하게 됨
   > 해당 스타일링은 클라이언트 컴포넌트에서만 동작하므로 use client를 작성해줘야함
