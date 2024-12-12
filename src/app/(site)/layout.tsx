import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import 'aos/dist/aos.css';
import { NavigationContainer } from "../../components/layout/NavigationContainer";
import Chatbot from "@/components/layout/Chatbot";
import Footer from "@/components/layout/footer";



export const metadata: Metadata = {
  title: "KrishnaBakshi.app",
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
        <Footer/>

        <NavigationContainer/>
        <Chatbot/>
      </body>
    </html>
  );
}
