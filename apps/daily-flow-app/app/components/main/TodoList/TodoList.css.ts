import { themeVars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const TodoListStyle = style({
  width: "214px",
  marginTop: themeVars.space.xl,
  marginRight: themeVars.space.sm,
});

export const TodoListLabelStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "10px 10px 0 0",
  color: themeVars.colors.base.white,
  fontSize: themeVars.fontSizes.md,
  padding: "10px 15px",
});

export const TodoListLengthStyle = style({
  fontSize: themeVars.fontSizes.md,
});

export const TodoListContentStyle = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100px",
  boxSizing: "border-box",
  padding: "10px 16px",
  marginBottom: "5px",
});

export const TodoListMainContentStyle = style({
  display: "flex",
  alignItems: "flex-start",
  marginBottom: "8px",
});

export const TodoListTaskStyle = style({
  fontSize: themeVars.fontSizes.md,
  marginRight: "5px",
  marginBottom: "7px",
});

export const TodoListMemoStyle = style({
  color: themeVars.colors.gray[500],
  fontSize: themeVars.fontSizes.sm,
});

export const TodoListButtonStyle = style({
  marginRight: themeVars.space.sm,
  borderRadius: "50%",
  marginTop: "2px",
  width: "10px",
  height: "10px",
  border: "1px solid black",
  padding: 0,
  cursor: "pointer",
  backgroundColor: "transparent",
});

export const TodoListPeriodStyle = style({
  color: themeVars.colors.gray[400],
  fontSize: themeVars.fontSizes.sm,
  textAlign: "end",
});

export const TodoListSubTaskMarkStyle = style({
  position: "absolute",
  bottom: "0",
  left: "0",
  borderRadius: "0 50% 0 0",
  width: "20px",
  height: "20px",
});

export const TodoListAddButtonStyle = style({
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100px",
  color: themeVars.colors.gray[400],
  backgroundColor: themeVars.colors.gray[100],
  fontSize: themeVars.fontSizes.xxxl,
  transition: "all 0.3s ease-in-out",
  ":hover": {
    color: themeVars.colors.gray[500],
    backgroundColor: themeVars.colors.gray[300],
  },
});
