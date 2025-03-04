import Banner from "../../components/common/Banner";
import LayoutWrapper from "../../components/layout/LayoutWrapper";
import VerifyEmailForm from "../../components/pages/forgot-password/VerifyEmailForm";
import AuthWrapper from "../../components/pages/home/AuthWrapper";

const ForgotPasswordPage = () => {
  return (
    <LayoutWrapper flexDirection="center" alignItems="center" height="100vh">
      <AuthWrapper>
        <VerifyEmailForm />
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

export default ForgotPasswordPage;
