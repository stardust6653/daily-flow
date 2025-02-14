import { Wrapper } from "./components/common/Wrapper";
import AuthBanner from "./components/home/AuthBanner";
import AuthForm from "./components/home/AuthForm";
import AuthWrapper from "./components/home/AuthWrapper";
import { HomeStyle } from "./home.css";

export default function Home() {
  return (
    <div className={HomeStyle}>
      <Wrapper flexDirection="center" alignItems="center" height="100vh">
        <AuthWrapper>
          <AuthForm />
          <AuthBanner />
        </AuthWrapper>
      </Wrapper>
    </div>
  );
}
