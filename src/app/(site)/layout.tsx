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
      <head>
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-T7N43T37FP"></script> */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ANALYTICS_ID}`}></script>
        <script dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.ANALYTICS_ID}');  
          `}} />
        {/* // gtag('config', 'G-T7N43T37FP');   */}
      </head>
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
        <Footer />

        <NavigationContainer />
        <Chatbot />
      </body>
    </html>
  );
}
