/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Julio Daza | Developer",
  description: "Julio Daza Fullstack Developer website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en" className="dark">
      <head>
      </head>
      <body className={inter.className + ' bg-gradient-to-r from-[#efeeee] via-[#e2e2e2] to-[#d6d6d6]'}>{children}</body>
      <PrelineScript />
    </html>
  );
}
