"use client";

import { useAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { accessToken } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (accessToken) {
      router.push("/main");
    }
  }, [accessToken, router]);

  if (accessToken) return null;

  return <>{children}</>;
};
