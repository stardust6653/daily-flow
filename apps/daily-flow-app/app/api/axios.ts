import axios from "axios";
import { rawLogout } from "@/app/_core/contexts/AuthContext";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

// 요청 인터셉터 추가
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken"); // 또는 상태에서 가져오기
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가: 401 에러 시 로그아웃 및 이동
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      rawLogout();
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default api;
