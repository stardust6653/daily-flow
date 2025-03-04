import Button from "../../common/Button";
import Logo from "../../common/Logo";
import {
  AuthButtonStyle,
  AuthFormWrapperStyle,
  LogoWrapperStyle,
} from "./AuthFormWrapper.css";

interface AuthFormWrapperProps {
  children: React.ReactNode;
  type: "signin" | "signup" | "forgotPassword" | "changePassword";
  onClick: () => void;
  isValid: boolean;
}

const AuthFormWrapper = ({
  children,
  type,
  onClick,
  isValid,
}: AuthFormWrapperProps) => {
  const buttonTextMap = {
    signin: "로그인",
    signup: "가입",
    forgotPassword: "인증",
    changePassword: "변경",
  };

  const buttonText = buttonTextMap[type] || "버튼";

  return (
    <form
      className={AuthFormWrapperStyle}
      onSubmit={(e) => e.preventDefault()}
      autoComplete="off"
    >
      <div className={LogoWrapperStyle}>
        <Logo color="color" margin="0 0 44px" />
      </div>

      <div>{children}</div>
      <div className={AuthButtonStyle}>
        {type === "signin" && (
          <></>
          // <AccountRecoveryLink
          //   href="/forgot-password/verify-email"
          //   margin="10px 0 0"
          // >
          //   비밀번호를 잊으셨나요?
          // </AccountRecoveryLink>
        )}

        <Button
          isValid={isValid}
          text={buttonText}
          type="primary"
          onClick={onClick}
          margin="20px 0 0"
        />
      </div>
    </form>
  );
};

export default AuthFormWrapper;
