"use client";

import { useState } from "react";
import Input from "@/app/components/common/Input";
import Logo from "@/app/components/common/Logo";
import Button from "@/app/components/common/Button";
import { AuthFormStyle } from "@/app/components/home/AuthForm/AuthForm.css";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  console.log(email, password, confirmPassword);

  return (
    <form className={AuthFormStyle} onSubmit={(e) => e.preventDefault()}>
      <Logo color="color" margin="0 0 44px" />

      <Input
        setValue={setEmail}
        errorMessage="올바른 형식의 이메일이 아닙니다"
        placeholder="Email"
        type="email"
      />
      <Input
        setValue={setPassword}
        errorMessage="최소한 하나 이상의 특수문자가 포함되어야 합니다"
        placeholder="Password"
        type="password"
      />

      <Input
        setValue={setConfirmPassword}
        errorMessage="비밀번호가 일치하지 않습니다"
        placeholder="Password Confirmed"
        type="password"
      />

      <Button
        text="회원가입"
        type="primary"
        onClick={() => console.log("클릭")}
        margin="16px 0 0"
      />
    </form>
  );
};

export default SignupForm;
