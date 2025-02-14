"use client";

import { useState } from "react";
import Input from "../../common/Input";
import AccountRecoveryLink from "../../common/AccountRecoveryLink";
import AuthFormWrapper from "../../common/AuthFormWrapper";

const AuthForm: React.FC = () => {
  const [email, setEmail] = useState("");

  console.log(email);

  return (
    <AuthFormWrapper onClick={() => console.log("클릭")} type="signin">
      <Input
        setValue={setEmail}
        errorMessage="이메일 유형이 잘못됨"
        placeholder="Email"
        type="email"
      />
      <Input
        setValue={setEmail}
        errorMessage=""
        placeholder="Password"
        type="password"
      />

      <AccountRecoveryLink
        href="/forgot-password/verify-email"
        margin="10px 0 0"
      >
        비밀번호를 잊으셨나요?
      </AccountRecoveryLink>
    </AuthFormWrapper>
  );
};
export default AuthForm;
