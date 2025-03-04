"use client";

import { useState } from "react";
import Input from "../../../common/Input";
import AuthFormWrapper from "../../../layout/AuthFormWrapper";
import { useRouter } from "next/navigation";
import api from "@/app/api/axios";
import { useAuth } from "@/app/_core/contexts/AuthContext";
import { createValidatorWithError, rules } from "@/app/_core/utils/validator";
import { signinFormConfig } from "@/app/_core/config/auth/signinFormConfig";

export interface SigninDataType {
  email: string;
  password: string;
}

const AuthForm: React.FC = () => {
  const [signinData, setSigninData] = useState<SigninDataType>({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { login } = useAuth();
  const router = useRouter();

  const isSignInValid = createValidatorWithError([
    rules.email("email"),
    rules.required("password"),
  ]);

  const formFields = signinFormConfig(
    isSignInValid,
    signinData,
    setSigninData,
    error
  );

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
    <AuthFormWrapper
      onClick={onClick}
      type="signin"
      isValid={isSignInValid(signinData).isValid}
    >
      {formFields.map((field, index) => (
        <Input
          key={index}
          setValue={field.setValue}
          errorMessage={field.errorMessage ?? ""}
          placeholder={field.placeholder}
          type={field.type}
        />
      ))}
    </AuthFormWrapper>
  );
};

export default AuthForm;
