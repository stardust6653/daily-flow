"use client";

import { useState } from "react";
import Input from "@/app/components/common/Input";

import AuthFormWrapper from "../../layout/AuthFormWrapper";
import {
  doPasswordsMatch,
  getEmailErrorMessage,
  getPasswordErrorMessage,
  setFormData,
} from "@/utils/input";
import api from "@/app/api/axios";
import { useRouter } from "next/navigation";
import { createValidator, rules } from "@/utils/validator";

const SignupForm = () => {
  const router = useRouter();

  const [error, setError] = useState("");
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    confirmed_password: "",
    nickname: "",
  });

  const isSignupFormValid = createValidator([
    rules.email("email"),
    rules.password("password"),
    rules.matches("password", "confirmed_password"),
  ]);

  const isSignupValid = isSignupFormValid(signupData);

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

  const confirmedPasswordErrorMessage =
    !signupData.confirmed_password || doPasswordsMatch(signupData)
      ? ""
      : "비밀번호가 일치하지 않습니다";

  return (
    <AuthFormWrapper
      onClick={handleSubmit}
      type="signup"
      isValid={isSignupValid}
    >
      <Input
        setValue={(value: string) => setFormData(value, "email", setSignupData)}
        errorMessage={error ? error : getEmailErrorMessage(signupData)}
        placeholder="Email"
        type="email"
      />
      <Input
        setValue={(value: string) =>
          setFormData(value, "nickname", setSignupData)
        }
        errorMessage=""
        placeholder="Nickname"
        type="text"
      />
      <Input
        setValue={(value: string) =>
          setFormData(value, "password", setSignupData)
        }
        errorMessage={getPasswordErrorMessage(signupData)}
        placeholder="Password"
        type="password"
      />

      <Input
        setValue={(value: string) =>
          setFormData(value, "confirmed_password", setSignupData)
        }
        errorMessage={confirmedPasswordErrorMessage}
        placeholder="Password Confirmed"
        type="password"
      />
    </AuthFormWrapper>
  );
};

export default SignupForm;
