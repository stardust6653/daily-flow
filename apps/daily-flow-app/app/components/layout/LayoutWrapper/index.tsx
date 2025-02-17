"use client";

import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  wrapperWidth,
  wrapperHeight,
  wrapperDisplay,
  wrapperFlexDirection,
  wrapperJustifyContent,
  wrapperAlignItems,
  LayoutWrapperStyle,
} from "./LayoutWrapper.css";

interface LayoutWrapperProps {
  width?: string;
  height?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  children: React.ReactNode;
}

const LayoutWrapper = ({
  width = "100%",
  height = "auto",
  display = "flex",
  flexDirection = "column",
  justifyContent = "center",
  alignItems = "center",
  children,
}: LayoutWrapperProps) => {
  const styleValue = assignInlineVars({
    [wrapperWidth]: width,
    [wrapperHeight]: height,
    [wrapperDisplay]: display,
    [wrapperFlexDirection]: flexDirection,
    [wrapperJustifyContent]: justifyContent,
    [wrapperAlignItems]: alignItems,
  });

  return (
    <div className={LayoutWrapperStyle} style={styleValue}>
      {children}
    </div>
  );
};

export default LayoutWrapper;
