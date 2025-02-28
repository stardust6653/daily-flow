"use client";

import { useState } from "react";
import Input from "@/app/components/common/Input";

import AuthFormWrapper from "../../layout/AuthFormWrapper";
import {
  getEmailErrorMessage,
  getPasswordErrorMessage,
  isEmailValid,
  isPasswordValid,
  setFormData,
} from "@/utils/input";
import api from "@/app/api/axios";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const router = useRouter();

  const [error, setError] = useState("");
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    confirmed_password: "",
    nickname: "",
  });

  // 비밀번호 확인 일치 검사
  const doPasswordsMatch = () => {
    return signupData.password === signupData.confirmed_password;
  };

  const handleSubmit = async () => {
    // 유효성 검사 후 제출 로직
    if (
      isEmailValid(signupData.email) &&
      isPasswordValid(signupData.password) &&
      doPasswordsMatch()
    ) {
      console.log("회원가입 데이터:", signupData);
      await api
        .post("/auth/register", {
          email: signupData.email,
          password: signupData.password,
          nickname: signupData.nickname,
        })
        .then((res) => {
          console.log("회원가입 응답:", res.data);
        })
        .then(() => {
          // 회원가입 성공 시 로그인 페이지로 이동
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
    }
  };

  const confirmedPasswordErrorMessage =
    !signupData.confirmed_password || doPasswordsMatch()
      ? ""
      : "비밀번호가 일치하지 않습니다";

  return (
    <AuthFormWrapper onClick={handleSubmit} type="signup">
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
