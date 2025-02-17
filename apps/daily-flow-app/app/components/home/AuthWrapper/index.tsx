import React, { ReactNode } from "react";
import { Wrapper } from "../../layout/LayoutWrapper";

const AuthWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Wrapper width="768px" height="480px" flexDirection="row">
      {children}
    </Wrapper>
  );
};

export default AuthWrapper;
