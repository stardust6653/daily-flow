"use client";

import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  WrapperStyle,
  wrapperWidth,
  wrapperHeight,
  wrapperDisplay,
  wrapperFlexDirection,
  wrapperJustifyContent,
  wrapperAlignItems,
  wrapperBoxShadow,
} from "./Wrapper.css";

interface WrapperProps {
  width?: string;
  height?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  boxShadow?: string;
  children: React.ReactNode;
}

export const Wrapper = ({
  width = "100%",
  height = "auto",
  display = "flex",
  flexDirection = "column",
  justifyContent = "center",
  alignItems = "center",
  boxShadow = "none",
  children,
}: WrapperProps) => {
  const styleValue = assignInlineVars({
    [wrapperWidth]: width,
    [wrapperHeight]: height,
    [wrapperDisplay]: display,
    [wrapperFlexDirection]: flexDirection,
    [wrapperJustifyContent]: justifyContent,
    [wrapperAlignItems]: alignItems,
    [wrapperBoxShadow]: boxShadow,
  });

  return (
    <div className={WrapperStyle} style={styleValue}>
      {children}
    </div>
  );
};
