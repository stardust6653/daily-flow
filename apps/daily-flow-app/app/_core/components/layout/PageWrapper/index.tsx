"use client";
import { PageWrapperStyle } from "./PageWrapper.css";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import BlockedScreen from "../../common/BlockedScreen";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const width = useWindowWidth();
  if (width < 1024) return <BlockedScreen />;
  return <main className={PageWrapperStyle}>{children}</main>;
};

export default PageWrapper;
