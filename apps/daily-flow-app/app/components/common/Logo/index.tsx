import ColorLogo from "@/public/assets/images/logo-color.png";
import WhiteLogo from "@/public/assets/images/logo-white.png";
import Image, { StaticImageData } from "next/image";
import {
  LogoImageStyle,
  LogoSpanTextStyle,
  LogoStyle,
  LogoTextVariants,
} from "./Logo.css";

interface LogoProps {
  color?: "color" | "white";
  margin?: string;
}

const LogoImage = ({ selectedColor }: { selectedColor: StaticImageData }) => {
  return (
    <Image
      src={selectedColor}
      alt="Daily Flow 로고"
      className={LogoImageStyle}
    />
  );
};

const Logo = ({ color = "color", margin = "" }: LogoProps) => {
  const selectedColor = color === "color" ? ColorLogo : WhiteLogo;

  return (
    <h1 className={LogoStyle} style={{ margin }}>
      <LogoImage selectedColor={selectedColor} />
      <span
        className={`${LogoSpanTextStyle[color]} ${LogoTextVariants[color]}`}
      >
        Daily
      </span>
      <span className={LogoTextVariants[color]}>Flow</span>
    </h1>
  );
};

export default Logo;
