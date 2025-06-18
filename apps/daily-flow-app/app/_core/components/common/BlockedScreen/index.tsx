import {
  BlockedScreenContentDescriptionStyle,
  BlockedScreenContentStyle,
  BlockedScreenContentTitleStyle,
  BlockedScreenStyle,
} from "./BlockedScreen.css";
import Logo from "../Logo";

const BlockedScreen = () => (
  <div className={BlockedScreenStyle}>
    <Logo />
    <div className={BlockedScreenContentStyle}>
      <p className={BlockedScreenContentTitleStyle}>
        이 서비스는 아직 1024px 이상 해상도에서만 이용 가능합니다.
      </p>
      <p className={BlockedScreenContentDescriptionStyle}>
        PC 환경에서 접속해 주세요.
      </p>
    </div>
  </div>
);

export default BlockedScreen;
