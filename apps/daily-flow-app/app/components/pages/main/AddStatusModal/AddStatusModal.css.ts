import { style } from "@vanilla-extract/css";

export const AddButtonStyle = style({
  display: "flex",
  justifyContent: "flex-end",
});

export const AddStatusModalStyle = style({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const ContentWrapperStyle = style({
  display: "flex",
  gap: "13px",
});
