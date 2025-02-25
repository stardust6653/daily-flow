// src/components/auth/AuthForm.tsx
"use client";

import { useState } from "react";
import Input from "../../common/Input";
import AuthFormWrapper from "../../layout/AuthFormWrapper";
import { useRouter } from "next/navigation";
import api from "@/app/api/axios";
import { useAuth } from "@/app/contexts/AuthContext";

const AuthForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const onClick = async () => {
    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });
      console.log("Login response:", response.data); // 로그인 응답 확인
      login(response.data.access_token);
      router.push("/main");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <AuthFormWrapper onClick={onClick} type="signin">
      <Input
        setValue={setEmail}
        errorMessage="이메일 유형이 잘못됨"
        placeholder="Email"
        type="email"
      />
      <Input
        setValue={setPassword}
        errorMessage=""
        placeholder="Password"
        type="password"
      />
    </AuthFormWrapper>
  );
};

export default AuthForm;
