import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TQProviders from "@/components/providers/tanstack-query-provider";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Next Todo List",
  description: "Next로 제작한 투두리스트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={`${pretendard.className}`}>
        <TQProviders>
          <div className="mx-auto max-w-[1200px] px-4">{children}</div>
        </TQProviders>
      </body>
    </html>
  );
}
