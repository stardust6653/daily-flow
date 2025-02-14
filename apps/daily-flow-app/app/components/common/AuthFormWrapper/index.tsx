import Button from "../Button";
import Logo from "../Logo";
import { AuthFormWrapperStyle } from "./AuthFormWrapper.css";

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
    <>
      <form
        className={AuthFormWrapperStyle}
        onSubmit={(e) => e.preventDefault()}
      >
        <Logo color="color" margin="0 0 44px" />
        {children}
        <Button
          text={buttonText(type)}
          type="primary"
          onClick={onClick}
          margin="20px 0 0"
        />
      </form>
    </>
  );
};

export default AuthFormWrapper;
