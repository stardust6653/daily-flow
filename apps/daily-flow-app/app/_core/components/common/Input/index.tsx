"use client";

import React from "react";
import { ErrorMessageStyle, InputFormStyle, InputStyle } from "./Input.css";

interface InputProps {
  setValue: (value: string) => void;
  errorMessage: string;
  placeholder: string;
  type: string;
  label?: string;
}

const Input = ({
  setValue,
  errorMessage,
  placeholder,
  type,
  label,
}: InputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={InputFormStyle}>
      <input
        id={label}
        className={InputStyle}
        type={type}
        placeholder={placeholder}
        onChange={handleInputChange}
        autoComplete="off" // 비밀번호 저장 팝업 방지
      />
      <span className={ErrorMessageStyle}>{errorMessage}</span>
    </div>
  );
};

export default Input;
