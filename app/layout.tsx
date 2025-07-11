import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next Todo List',
  description: 'Next로 제작한 투두리스트',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
