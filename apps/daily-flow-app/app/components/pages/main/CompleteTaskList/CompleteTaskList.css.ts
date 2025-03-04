import { themeVars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { StatusLabelStyle } from "../StatusLabel/StatusLabel.css";

export const CompleteTaskListStyle = style({
  width: "214px",
  flexShrink: 0,
  marginTop: themeVars.space.xl,
  marginRight: themeVars.space.sm,
});

export const CompleteTaskListLabelStyle = style([
  StatusLabelStyle,
  {
    backgroundColor: themeVars.colors.state.success,
  },
]);
