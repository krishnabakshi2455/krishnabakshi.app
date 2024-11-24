import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
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
        className={`antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
