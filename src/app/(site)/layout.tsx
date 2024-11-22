import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import AOS from 'aos'
import 'aos/dist/aos.css';



export const metadata: Metadata = {
  title: "PortFolio",
  description: "Build By Krishna Bakshi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`  antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
