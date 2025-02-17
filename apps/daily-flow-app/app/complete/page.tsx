import Banner from "../components/common/Banner";
import LayoutWrapper from "../components/layout/LayoutWrapper";
import AuthForm from "../components/home/AuthForm";
import AuthWrapper from "../components/home/AuthWrapper";

const CompletePage = () => {
  return (
    <LayoutWrapper flexDirection="center" alignItems="center" height="100vh">
      <AuthWrapper>
        <AuthForm />
        <Banner
          title="환영합니다"
          firstLine="지금 바로"
          secondLine="데일리 플로우를 이용해보세요"
          type="signup"
          buttonType="none"
        />
      </AuthWrapper>
    </LayoutWrapper>
  );
};

export default CompletePage;
