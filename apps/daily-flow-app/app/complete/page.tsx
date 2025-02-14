import Banner from "../components/common/Banner";
import { Wrapper } from "../components/common/Wrapper";
import AuthForm from "../components/home/AuthForm";
import AuthWrapper from "../components/home/AuthWrapper";

const CompletePage = () => {
  return (
    <Wrapper flexDirection="center" alignItems="center" height="100vh">
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
    </Wrapper>
  );
};

export default CompletePage;
