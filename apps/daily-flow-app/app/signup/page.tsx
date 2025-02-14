import Banner from "../components/common/Banner";
import { Wrapper } from "../components/common/Wrapper";
import AuthWrapper from "../components/home/AuthWrapper";
import SignupForm from "../components/signup/SignupForm";

const SignUpPage = () => {
  return (
    <Wrapper flexDirection="center" alignItems="center" height="100vh">
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
    </Wrapper>
  );
};

export default SignUpPage;
