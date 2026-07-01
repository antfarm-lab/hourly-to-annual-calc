import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "時給から年収計算ツール｜時給・勤務日数から年収目安を自動計算",
  description:
    "時給・1日の労働時間・週の勤務日数を入力するだけで、おおよその年収を簡単に計算できる無料ツールです。",
  keywords: [
    "時給 年収 計算",
    "年収 計算",
    "アルバイト 年収",
    "パート 年収",
    "時給 収入 シミュレーション",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja"><head>
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7726060769550218"
    crossOrigin="anonymous"
  />
</head>

      <body>{children}</body>
    </html>
  );
}