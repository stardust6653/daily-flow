"use client";

import Banner from "./components/common/Banner";
import LayoutWrapper from "./components/layout/LayoutWrapper";
import AuthForm from "./components/home/AuthForm";
import AuthWrapper from "./components/home/AuthWrapper";

export default function Home() {
  return (
    <LayoutWrapper flexDirection="center" alignItems="center" height="100vh">
      <AuthWrapper>
        <AuthForm />
        <Banner
          title="반갑습니다"
          firstLine="칸반보드 기반의"
          secondLine="할 일 및 지출 흐름 파악"
          type="signup"
          buttonType="white"
        />
      </AuthWrapper>
    </LayoutWrapper>
  );
}
