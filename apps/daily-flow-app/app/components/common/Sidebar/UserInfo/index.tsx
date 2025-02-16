import { FiLogOut, FiSettings } from "react-icons/fi";
import {
  IconStyle,
  UserInfoStyle,
  UserProfileGroupStyle,
  UserProfileStyle,
} from "./UserInfo.css";

const UserInfo = () => {
  return (
    <div className={UserInfoStyle}>
      <div className={UserProfileGroupStyle}>
        <div className={UserProfileStyle}></div>
        <p>test@test.com</p>
      </div>
      <div>
        <button>
          <FiSettings className={IconStyle} />
        </button>

        <button>
          <FiLogOut className={IconStyle} />
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
