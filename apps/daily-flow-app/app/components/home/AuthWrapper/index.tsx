import React, { ReactNode } from "react";
import { Wrapper } from "../../common/Wrapper";

const AuthWrapper = ({ children }: { children: ReactNode }) => {
  const boxShadow =
    "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px";

  return (
    <Wrapper
      width="768px"
      height="480px"
      flexDirection="row"
      boxShadow={boxShadow}
    >
      {children}
    </Wrapper>
  );
};

export default AuthWrapper;
