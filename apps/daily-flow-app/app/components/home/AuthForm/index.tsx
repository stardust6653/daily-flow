"use client";

import { useState } from "react";
import Input from "../../common/Input";
import AuthFormWrapper from "../../common/AuthFormWrapper";
import { useRouter } from "next/navigation";

const AuthForm: React.FC = () => {
  const [email, setEmail] = useState("");

  console.log(email);

  const router = useRouter();
  const onClick = () => router.push("/main");

  return (
    <AuthFormWrapper onClick={onClick} type="signin">
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
    </AuthFormWrapper>
  );
};
export default AuthForm;
