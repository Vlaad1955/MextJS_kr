import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderComponent from "@/app/components/header/HeaderComponent";
import AsideComponent from "@/app/components/aside/AsideComponent";
import TrendingComponent from "@/app/components/trending/TrendingComponent";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Main page",
  description: "The start page of the site, where you will find all the movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div className={`container`}>
        <AsideComponent/>
        <main className={`content`}>
          <HeaderComponent/>
          {children}
        </main>
      </div>
      </body>
    </html>
  );
}
