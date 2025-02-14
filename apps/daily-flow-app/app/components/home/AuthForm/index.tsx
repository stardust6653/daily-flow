"use client";

import { useState } from "react";
import Input from "../../common/Input";
import Logo from "../../common/Logo";
import { AuthFormStyle } from "./AuthForm.css";
import AccountRecoveryLink from "../../common/AccountRecoveryLink";
import Button from "../../common/Button";

const AuthForm: React.FC = () => {
  const [email, setEmail] = useState("");

  console.log(email);

  return (
    <form className={AuthFormStyle} onSubmit={(e) => e.preventDefault()}>
      <Logo color="color" margin="0 0 44px" />

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

      <AccountRecoveryLink href="/" margin="10px 0 0">
        비밀번호를 잊으셨나요?
      </AccountRecoveryLink>
      <Button
        text="로그인"
        type="primary"
        onClick={() => console.log("클릭")}
        margin="16px 0 0"
      />
    </form>
  );
};
export default AuthForm;
