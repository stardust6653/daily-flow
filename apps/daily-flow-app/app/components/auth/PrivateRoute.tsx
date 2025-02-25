"use client";

import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { accessToken } = useAuth();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!accessToken) {
      router.push("/");
    }
  }, [accessToken, router]);

  // 첫 렌더링 시에는 아무것도 보여주지 않음
  if (!mounted) return null;

  // 인증되지 않은 경우
  if (!accessToken) return null;

  return <>{children}</>;
};
