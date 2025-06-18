import { style } from "@vanilla-extract/css";

export const BlockedScreenStyle = style({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "#fff",
});

export const BlockedScreenContentStyle = style({
  marginTop: "16px",
});

export const BlockedScreenContentTitleStyle = style({
  textAlign: "center",
  fontSize: "24px",
  fontWeight: "normal",
});

export const BlockedScreenContentDescriptionStyle = style({
  marginTop: "10px",
  textAlign: "center",
  fontSize: "18px",
  fontWeight: "normal",
});
