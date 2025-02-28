import AccountRecoveryLink from "../../common/AccountRecoveryLink";
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
}

const AuthFormWrapper = ({ children, type, onClick }: AuthFormWrapperProps) => {
  const buttonText = (authType: string) => {
    switch (authType) {
      case "signin":
        return "로그인";
        break;
      case "signup":
        return "가입";
        break;
      case "forgotPassword":
        return "인증";
        break;
      case "changePassword":
        return "변경";
        break;
      default:
        return "버튼";
        break;
    }
  };

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
          text={buttonText(type)}
          type="primary"
          onClick={onClick}
          margin="20px 0 0"
        />
      </div>
    </form>
  );
};

export default AuthFormWrapper;
