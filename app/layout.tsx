import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";
import "./styles/inputs.css"
import './styles/text.css'

import Header from "./Components/Header/Header";
import InfoBar from "./Components/InfoBar/InfoBar";
import Footer from "./Components/Footer/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Clear Automate",
  description: "Automate your real estate workflows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://t.contentsquare.net/uxa/0003f09a28410.js"></script>
      </head>
      <body className={poppins.variable}>
        <InfoBar />
        <Header />
        <div className='backgroundImage'></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
