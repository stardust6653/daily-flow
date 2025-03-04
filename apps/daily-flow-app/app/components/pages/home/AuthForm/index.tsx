"use client";

import { useState } from "react";
import Input from "../../../common/Input";
import AuthFormWrapper from "../../../layout/AuthFormWrapper";
import { useRouter } from "next/navigation";
import api from "@/app/api/axios";
import { useAuth } from "@/app/contexts/AuthContext";
import { getEmailErrorMessage, setFormData } from "@/utils/input";
import { createValidator, rules } from "@/utils/validator";

const AuthForm: React.FC = () => {
  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { login } = useAuth();
  const router = useRouter();

  const isSignInValid = createValidator([
    rules.email("email"),
    rules.required("password"),
  ]);

  const isSigninValid = isSignInValid(signinData);

  const onClick = async () => {
    try {
      const response = await api.post("/auth/login", signinData);
      console.log("Login response:", response.data); // 로그인 응답 확인
      login(response.data.access_token);
      router.push("/main");
    } catch (error) {
      setError("이메일 또는 비밀번호가 틀렸습니다");
      console.error("Login failed:", error);
      setInterval(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <AuthFormWrapper onClick={onClick} type="signin" isValid={isSigninValid}>
      <Input
        setValue={(value: string) => setFormData(value, "email", setSigninData)}
        errorMessage={getEmailErrorMessage(signinData)}
        placeholder="Email"
        type="email"
      />
      <Input
        setValue={(value: string) =>
          setFormData(value, "password", setSigninData)
        }
        errorMessage={error}
        placeholder="Password"
        type="password"
      />
    </AuthFormWrapper>
  );
};

export default AuthForm;
