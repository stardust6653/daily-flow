"use client";

import { useRouter } from "next/navigation";
import Button from "../Button";
import { BannerDescStyle, BannerStyle, BannerTitleStyle } from "./Banner.css";

interface BannerProps {
  title: string;
  firstLine: string;
  secondLine: string;
  type: "signin" | "signup";
  buttonType: "white" | "primary";
}

const Banner = ({
  title,
  firstLine,
  secondLine,
  type,
  buttonType,
}: BannerProps) => {
  const buttonText = type === "signin" ? "로그인" : "회원가입";
  const buttonColor = buttonType === "white" ? "white" : "primary";

  const router = useRouter();
  const href = type === "signin" ? "/" : "/signup";
  const handleButtonClick = () => router.push(href);

  return (
    <div className={BannerStyle}>
      <p className={BannerTitleStyle}>{title}</p>
      <p className={BannerDescStyle}>
        <span>{firstLine}</span>
        <br />
        <span>{secondLine}</span>
      </p>
      <Button
        text={buttonText}
        type={buttonColor}
        onClick={handleButtonClick}
      />
    </div>
  );
};

export default Banner;
