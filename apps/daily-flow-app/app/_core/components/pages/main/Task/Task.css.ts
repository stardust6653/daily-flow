import { style } from "@vanilla-extract/css";

export const TaskStyle = style({
  cursor: "pointer",
  position: "relative",
  overflow: "visible",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "120px",
  boxSizing: "border-box",
  padding: "10px 16px",
  marginBottom: "5px",
});

export const EditButtonStyle = style({
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "#fff",
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "2px 8px",
  fontSize: "12px",
  cursor: "pointer",
  zIndex: 2,
});
