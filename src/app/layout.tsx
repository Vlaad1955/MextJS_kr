import type { Metadata } from "next";
import "./globals.css";
import HeaderComponent from "@/app/components/header/HeaderComponent";
import AsideComponent from "@/app/components/aside/AsideComponent";
import React from "react";


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
