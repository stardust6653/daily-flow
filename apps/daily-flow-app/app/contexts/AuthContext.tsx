"use client";

import { createContext, useContext, useState } from "react";
import api from "../api/axios";

interface AuthContextType {
  accessToken: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);
// src/contexts/AuthContext.tsx
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // 초기 상태를 로컬 스토리지에서 가져옴
  const [accessToken, setAccessToken] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      // Next.js SSR 고려
      const token = localStorage.getItem("accessToken");
      if (token) {
        // 초기 axios 헤더 설정
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }
      return token;
    }
    return null;
  });

  const login = (token: string) => {
    setAccessToken(token);
    localStorage.setItem("accessToken", token);
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };

  const logout = () => {
    setAccessToken(null);
    localStorage.removeItem("accessToken");
    delete api.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider value={{ accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
