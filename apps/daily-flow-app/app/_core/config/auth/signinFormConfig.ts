import { Dispatch, SetStateAction } from "react";
import { SigninDataType } from "../../components/pages/home/AuthForm";
import { setFormData } from "../../utils/input";
import { getFieldErrorMessage } from "../../utils/validator";

export const signinFormConfig = (
  validator: (data: SigninDataType) => { errors: Record<string, string> },
  data: SigninDataType,
  setter: Dispatch<SetStateAction<SigninDataType>>,
  errorMessage: string
) => {
  const validatorData = validator(data);

  return [
    {
      setValue: (value: string) => setFormData(value, "email", setter),
      errorMessage: getFieldErrorMessage(
        validatorData.errors["email"],
        data?.email
      ),
      placeholder: "Email",
      type: "email",
    },
    {
      setValue: (value: string) => setFormData(value, "password", setter),
      errorMessage: errorMessage,
      placeholder: "Password",
      type: "password",
    },
  ];
};
