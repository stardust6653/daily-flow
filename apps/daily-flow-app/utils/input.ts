import React, { Dispatch, SetStateAction } from "react";

export const handleChange = <T>(
  e: React.ChangeEvent<HTMLInputElement>,
  setter: React.Dispatch<React.SetStateAction<T>>
) => {
  setter(e.target.value as T);
};

export const isEmailValid = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// 비밀번호 유효성 검사 (특수문자 포함)
export const isPasswordValid = (password: string) => {
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  return specialCharRegex.test(password);
};

export const setFormData = <T extends Record<string, any>, K extends keyof T>(
  value: T[K],
  key: K,
  setter: Dispatch<SetStateAction<T>>
) => {
  setter((prev) => ({
    ...prev,
    [key]: value,
  }));
};

export const getEmailErrorMessage = (data: Record<string, any>) =>
  !data.email || isEmailValid(data.email)
    ? ""
    : "올바른 형식의 이메일이 아닙니다";

export const getPasswordErrorMessage = (data: Record<string, any>) =>
  !data.password || isPasswordValid(data.password)
    ? ""
    : "최소한 하나 이상의 특수문자가 포함되어야 합니다";
