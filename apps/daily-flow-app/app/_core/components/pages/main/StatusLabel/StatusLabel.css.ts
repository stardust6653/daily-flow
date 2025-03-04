import { EllipsisTextStyle } from "@/app/_core/styles/common.css";
import { themeVars } from "@/app/_core/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const StatusLabelStyle = style([
  {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "10px 10px 0 0",
    color: themeVars.colors.base.white,
    fontSize: themeVars.fontSizes.md,
    padding: "0 15px",
    height: "36px",
    lineHeight: "1.3",
  },
]);

export const StatusLabelTextStyle = style([
  EllipsisTextStyle,
  { width: "100%" },
]);

export const ListLengthStyle = style({
  fontSize: themeVars.fontSizes.md,
});
