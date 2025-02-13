import Logo from "./components/common/Logo/Logo";
import { Wrapper } from "./components/common/Wrapper/Wrapper";
import { HomeStyle } from "./home.css";

export default function Home() {
  return (
    <div className={HomeStyle}>
      <Wrapper flexDirection="center" alignItems="center" height="100vh">
        123
        <Logo />
      </Wrapper>
    </div>
  );
}
