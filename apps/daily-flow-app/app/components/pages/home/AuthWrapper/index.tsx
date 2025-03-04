import React, { ReactNode } from "react";
import LayoutWrapper from "../../../layout/LayoutWrapper";

const AuthWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <LayoutWrapper width="768px" height="480px" flexDirection="row">
      {children}
    </LayoutWrapper>
  );
};

export default AuthWrapper;
