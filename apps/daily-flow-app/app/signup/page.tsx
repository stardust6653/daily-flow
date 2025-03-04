import Banner from "../_core/components/common/Banner";
import LayoutWrapper from "../_core/components/layout/LayoutWrapper";
import AuthWrapper from "../_core/components/pages/home/AuthWrapper";
import SignupForm from "../_core/components/pages/signup/SignupForm";

const SignUpPage = () => {
  return (
    <LayoutWrapper flexDirection="center" alignItems="center" height="100vh">
      <AuthWrapper>
        <SignupForm />
        <Banner
          title="반갑습니다"
          firstLine="칸반보드 기반의"
          secondLine="할 일 및 지출 흐름 파악"
          type="signin"
          buttonType="white"
        />
      </AuthWrapper>
    </LayoutWrapper>
  );
};

export default SignUpPage;
