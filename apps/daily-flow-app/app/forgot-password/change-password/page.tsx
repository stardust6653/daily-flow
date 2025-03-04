import Banner from "@/app/components/common/Banner";
import LayoutWrapper from "@/app/components/layout/LayoutWrapper";
import ChangePasswordForm from "@/app/components/pages/forgot-password/ChangePasswordForm";
import AuthWrapper from "@/app/components/pages/home/AuthWrapper";

const ChangePasswordPage = () => {
  return (
    <LayoutWrapper flexDirection="center" alignItems="center" height="100vh">
      <AuthWrapper>
        <ChangePasswordForm />
        <Banner
          title="비밀번호 찾기"
          firstLine="이메일 인증 후"
          secondLine="새 비밀번호를 등록하세요"
          type="signin"
          buttonType="white"
        />
      </AuthWrapper>
    </LayoutWrapper>
  );
};

export default ChangePasswordPage;
