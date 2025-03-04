"use client";

import { useState } from "react";
import Input from "@/app/components/common/Input";
import AuthFormWrapper from "../../../layout/AuthFormWrapper";
import { setFormData } from "@/utils/input";
import api from "@/app/api/axios";
import { useRouter } from "next/navigation";
import { createValidatorWithError, rules } from "@/utils/validator";

const SignupForm = () => {
  const router = useRouter();

  const [error, setError] = useState("");
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    confirmed_password: "",
    nickname: "",
  });

  const isSignupFormValidWithError = createValidatorWithError([
    rules.email("email"),
    rules.password("password"),
    rules.matches("password", "confirmed_password"),
  ]);

  const formFields = [
    {
      setValue: (value: string) => setFormData(value, "email", setSignupData),
      errorMessage: error
        ? error
        : isSignupFormValidWithError(signupData).errors["email"],
      placeholder: "이메일",
      type: "email",
    },
    {
      setValue: (value: string) =>
        setFormData(value, "nickname", setSignupData),
      errorMessage: "",
      placeholder: "별명",
      type: "text",
    },
    {
      setValue: (value: string) =>
        setFormData(value, "password", setSignupData),
      errorMessage: isSignupFormValidWithError(signupData).errors["password"],
      placeholder: "비밀번호",
      type: "password",
    },
    {
      setValue: (value: string) =>
        setFormData(value, "confirmed_password", setSignupData),
      errorMessage: isSignupFormValidWithError(signupData).errors[
        "password-confirm"
      ]
        ? ""
        : "비밀번호가 일치하지 않습니다",
      placeholder: "비밀번호 확인",
      type: "password",
    },
  ];

  const handleSubmit = async () => {
    await api
      .post("/auth/register", {
        email: signupData.email,
        password: signupData.password,
        nickname: signupData.nickname,
      })
      .then((res) => {
        console.log("회원가입 응답:", res.data);
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
