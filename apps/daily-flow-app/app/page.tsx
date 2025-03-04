"use client";

import Banner from "./_core/components/common/Banner";
import LayoutWrapper from "./_core/components/layout/LayoutWrapper";
import AuthForm from "./_core/components/pages/home/AuthForm";
import AuthWrapper from "./_core/components/pages/home/AuthWrapper";

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
