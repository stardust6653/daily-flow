import { ButtonStyle, DisabledStyle } from "./Button.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  margin?: string;
  type: "primary" | "white" | "secondary" | "outline";
  isValid?: boolean;
}

const Button = ({
  text,
  onClick,
  margin,
  type,
  isValid = true,
}: ButtonProps) => {
  return (
    <button
      className={`${ButtonStyle[type]} ${DisabledStyle[isValid ? "false" : "true"]}`}
      disabled={!isValid}
      onClick={onClick}
      style={{ margin }}
    >
      {text}
    </button>
  );
};

export default Button;
