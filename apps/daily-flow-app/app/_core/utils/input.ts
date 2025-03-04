import React, { Dispatch, SetStateAction } from "react";

export const handleChange = <T>(
  e: React.ChangeEvent<HTMLInputElement>,
  setter: React.Dispatch<React.SetStateAction<T>>
) => {
  setter(e.target.value as T);
};

// 이메일 유효성 검사
export const isEmailValid = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// 비밀번호 유효성 검사 (특수문자 포함)
export const isPasswordValid = (password: string) => {
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  return specialCharRegex.test(password);
};

// 비밀번호 확인 일치 검사
export const doPasswordsMatch = <T extends Record<string, string>>(data: T) => {
  return data.password === data.confirmed_password;
};

// 폼 데이터 업데이트 함수
// T: 폼 데이터 타입
// K: 폼 데이터의 키 타입
// value: 업데이트할 값
// key: 업데이트할 키
// setter: 폼 데이터 상태 업데이트 함수
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

// 이메일 에러 메시지 반환 함수
export const getEmailErrorMessage = (data: Record<string, any>) =>
  !data.email || isEmailValid(data.email)
    ? ""
    : "올바른 형식의 이메일이 아닙니다";

// 비밀번호 에러 메시지 반환 함수
export const getPasswordErrorMessage = (data: Record<string, any>) =>
  !data.password || isPasswordValid(data.password)
    ? ""
    : "최소한 하나 이상의 특수문자가 포함되어야 합니다";
