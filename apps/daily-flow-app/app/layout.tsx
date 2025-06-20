import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LayoutStyle } from "./layout.css";
import { AuthProvider } from "./_core/contexts/AuthContext";
import "@/app/_core/styles/global.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "지출/일정 관리 서비스, 데일리 플로우",
  description: "지출과 일정을 칸반보드 형태로 쉽게 관리해보세요!",
  other: {
    google: "notranslate",
    robots: "noindex,nofollow",
  },
  // HTTP 등가 메타 태그
  metadataBase: new URL("https://yourwebsite.com"),
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#ffffff",
  // 캐시 컨트롤 관련 설정
  applicationName: "Next.js App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${LayoutStyle}`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
