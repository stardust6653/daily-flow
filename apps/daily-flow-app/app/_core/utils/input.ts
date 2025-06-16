import React, { Dispatch, SetStateAction } from "react";

export const handleChange = <T>(
  e: React.ChangeEvent<HTMLInputElement>,
  setter: React.Dispatch<React.SetStateAction<T>>
) => {
  setter(e.target.value as T);
};

// 폼 데이터 업데이트 함수
// T: 폼 데이터 타입
// K: 폼 데이터의 키 타입
// value: 업데이트할 값
// key: 업데이트할 키
// setter: 폼 데이터 상태 업데이트 함수
export const setFormData = <
  T extends Record<string, unknown>,
  K extends keyof T,
>(
  value: T[K],
  key: K,
  setter: Dispatch<SetStateAction<T>>
) => {
  setter((prev) => ({
    ...prev,
    [key]: value,
  }));
};

// 필드 유효성 검사를 공통 로직으로 추출
const isValid = (field: string, regex: RegExp) => {
  return regex.test(field);
};

isValid("email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
isValid("password", /[!@#$%^&*(),.?":{}|<>]/);
