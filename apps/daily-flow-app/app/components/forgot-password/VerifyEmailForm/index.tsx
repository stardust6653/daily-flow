"use client";

import { useState } from "react";
import AuthFormWrapper from "../../common/AuthFormWrapper";
import Input from "../../common/Input";
import { VerifyEmailFormLabelStyle } from "./VerifyEmailForm.css";
import { useRouter } from "next/navigation";

const VerifyEmailForm = () => {
  const [email, setEmail] = useState("");

  console.log(email);

  const router = useRouter();
  const onClick = () => router.push("/forgot-password/change-password");

  return (
    <AuthFormWrapper type="forgotPassword" onClick={onClick}>
      <div>
        <label className={VerifyEmailFormLabelStyle} htmlFor="email">
          가입한 이메일을 입력해주세요
        </label>
        <Input
          errorMessage="올바른 형식의 이메일이 아닙니다"
          placeholder="Email"
          type="email"
          label="email"
          setValue={setEmail}
        />
      </div>
    </AuthFormWrapper>
  );
};

export default VerifyEmailForm;
