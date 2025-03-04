import { Dispatch, SetStateAction } from "react";
import { SignupDataType } from "../../components/pages/signup/SignupForm";
import { setFormData } from "../../utils/input";
import { getFieldErrorMessage } from "../../utils/validator";

export const signupFormConfig = (
  validator: (data: SignupDataType) => { errors: Record<string, string> },
  data: SignupDataType,
  setter: Dispatch<SetStateAction<SignupDataType>>,
  emailErrorMessage: string
) => {
  const validatorData = validator(data);

  return [
    {
      setValue: (value: string) => setFormData(value, "email", setter),
      errorMessage:
        emailErrorMessage !== ""
          ? emailErrorMessage
          : getFieldErrorMessage(validatorData.errors["email"], data?.email),
      placeholder: "이메일",
      type: "email",
    },
    {
      setValue: (value: string) => setFormData(value, "nickname", setter),
      errorMessage: getFieldErrorMessage(
        validatorData.errors["nickname"],
        data?.nickname
      ),
      placeholder: "별명",
      type: "text",
    },
    {
      setValue: (value: string) => setFormData(value, "password", setter),
      errorMessage: getFieldErrorMessage(
        validatorData.errors["password"],
        data?.password
      ),
      placeholder: "비밀번호",
      type: "password",
    },
    {
      setValue: (value: string) =>
        setFormData(value, "confirmed_password", setter),
      errorMessage:
        validatorData.errors["password-confirm"] &&
        "비밀번호가 일치하지 않습니다",
      placeholder: "비밀번호 확인",
      type: "password",
    },
  ];
};
