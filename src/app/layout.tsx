import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const gongGothic = localFont({
  src: "./fonts/GongGothicLight.ttf",
  variable: "--font-gong",
  display: "swap",
});

const mbcGulim = localFont({
  src: "./fonts/MBC1961GulimM.ttf",
  variable: "--font-mbc",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.name,
  description: "프리케어 솔루션 IR 홈페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`scroll-smooth ${gongGothic.variable} ${mbcGulim.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-transperent text-gray-900 antialiased">
        <Header />
        <main className="flex-1 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
