"use client";

import { useState } from "react";
import Input from "@/app/_core/components/common/Input";
import AuthFormWrapper from "../../../layout/AuthFormWrapper";
import api from "@/app/api/axios";
import { useRouter } from "next/navigation";
import { createValidatorWithError, rules } from "@/app/_core/utils/validator";
import { signupFormConfig } from "@/app/_core/config/auth/signupFormConfig";

export interface SignupDataType {
  email: string;
  password: string;
  confirmed_password: string;
  nickname: string;
  [key: string]: string;
}

const SignupForm = () => {
  const router = useRouter();

  const [error, setError] = useState("");
  const [signupData, setSignupData] = useState<SignupDataType>({
    email: "",
    password: "",
    confirmed_password: "",
    nickname: "",
  });

  const isSignupFormValidWithError = createValidatorWithError([
    rules.email("email"),
    rules.password("password"),
    rules.matches("password", "confirmed_password"),
    rules.minLength("nickname", 2),
  ]);

  const formFields = signupFormConfig(
    isSignupFormValidWithError,
    signupData,
    setSignupData,
    error
  );

  const handleSubmit = async () => {
    await api
      .post("/auth/register", {
        email: signupData.email,
        password: signupData.password,
        nickname: signupData.nickname,
      })
      .then(() => {
        router.push("/complete");
      })
      .catch((err) => {
        console.error("회원가입 실패:", err);
        if (err.response.data.message === "User already exists") {
          setError("이미 존재하는 이메일입니다");
          setInterval(() => {
            setError("");
          }, 3000);
        }
      });
  };

  return (
    <AuthFormWrapper
      onClick={handleSubmit}
      type="signup"
      isValid={isSignupFormValidWithError(signupData).isValid}
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

export default SignupForm;
