import { ButtonStyle } from "./Button.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  margin?: string;
  type: "primary" | "white";
}

const Button = ({ text, onClick, margin, type }: ButtonProps) => {
  return (
    <button className={ButtonStyle[type]} onClick={onClick} style={{ margin }}>
      {text}
    </button>
  );
};

export default Button;
