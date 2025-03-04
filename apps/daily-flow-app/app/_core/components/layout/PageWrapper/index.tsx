import { PageWrapperStyle } from "./PageWrapper.css";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return <main className={PageWrapperStyle}>{children}</main>;
};

export default PageWrapper;
