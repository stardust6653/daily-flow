"use client";

import React from "react";
import { handleChange } from "@/utils/input";
import { ErrorMessageStyle, InputFormStyle, InputStyle } from "./Input.css";

interface InputProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  errorMessage: string;
  placeholder: string;
  type: string;
}

const Input = ({ setValue, errorMessage, placeholder, type }: InputProps) => {
  return (
    <div className={InputFormStyle}>
      <input
        className={InputStyle}
        type={type}
        placeholder={placeholder}
        onChange={(e) => handleChange<string>(e, setValue)}
      />
      <span className={ErrorMessageStyle}>{errorMessage}</span>
    </div>
  );
};

export default Input;
