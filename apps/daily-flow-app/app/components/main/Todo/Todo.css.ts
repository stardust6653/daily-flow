import { style } from "@vanilla-extract/css";

export const TodoStyle = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100px",
  boxSizing: "border-box",
  padding: "10px 16px",
  marginBottom: "5px",
});
