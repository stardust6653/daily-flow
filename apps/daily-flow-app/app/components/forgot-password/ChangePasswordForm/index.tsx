"use client";

import { useRouter } from "next/navigation";
import AuthFormWrapper from "../../common/AuthFormWrapper";
import Input from "../../common/Input";
import { useState } from "react";

const ChangePasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  console.log(password, confirmPassword);

  const router = useRouter();
  const onClick = () => router.push("/complete");

  return (
    <AuthFormWrapper type="changePassword" onClick={onClick}>
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
    </AuthFormWrapper>
  );
};

export default ChangePasswordForm;
