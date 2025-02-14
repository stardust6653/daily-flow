"use client";

import Button from "../../common/Button";
import {
  AuthBannerDescStyle,
  AuthBannerStyle,
  AuthBannerTitleStyle,
} from "./AuthBanner.css";

const AuthBanner: React.FC = () => {
  return (
    <div className={AuthBannerStyle}>
      <p className={AuthBannerTitleStyle}>반갑습니다</p>
      <p className={AuthBannerDescStyle}>
        칸반보드 기반의
        <br /> 할 일 및 지출 흐름 파악
      </p>
      <Button
        text="회원가입"
        type="white"
        onClick={() => console.log("클릭")}
      />
    </div>
  );
};

export default AuthBanner;
