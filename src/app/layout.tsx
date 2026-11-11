import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "共鸣 · 认识自己，理解关系",
  description: "以恋爱为核心的社区化智能社交平台，帮你认识他人、理解自己。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
