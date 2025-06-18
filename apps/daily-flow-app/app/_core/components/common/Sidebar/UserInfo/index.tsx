import { FiLogOut, FiSettings } from "react-icons/fi";
import {
  IconStyle,
  UserInfoStyle,
  UserProfileGroupStyle,
  UserProfileStyle,
} from "./UserInfo.css";
import { useEffect, useState } from "react";
import { useAuth } from "@/app/_core/contexts/AuthContext";
import api from "@/app/api/axios";
import { useRouter } from "next/navigation";

type DataType = {
  email: string;
  nickname: string;
  id: string;
  show_tutorial: boolean;
  created_at: string;
  updated_at: string;
};

const UserInfo = () => {
  const [data, setData] = useState<DataType | null>(null);

  const router = useRouter();
  const { accessToken, logout } = useAuth();

  useEffect(() => {
    if (accessToken) {
      api
        .get("/users/me")
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [accessToken]);

  const handleLogoutClick = () => {
    logout();
    router.push("/");
  };

  return (
    <div className={UserInfoStyle}>
      <div className={UserProfileGroupStyle}>
        <div className={UserProfileStyle}></div>
        <p>{data?.nickname || "로딩 중"}</p>
      </div>
      <div>
        <button onClick={() => alert("현재 기능을 준비 중입니다.")}>
          <FiSettings className={IconStyle} />
        </button>

        <button onClick={handleLogoutClick}>
          <FiLogOut className={IconStyle} />
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
