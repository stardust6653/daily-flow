import { themeVars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const MainTitleStyle = style({
  display: "flex",
  alignItems: "center",
  fontSize: themeVars.fontSizes.xxxl,
  fontWeight: 600,
});

export const MainTitleColorChipStyle = style({
  display: "block",
  width: "15px",
  height: "15px",
  borderRadius: "100%",
  marginRight: themeVars.space.md,
  "::after": {
    content: " ",
  },
});
