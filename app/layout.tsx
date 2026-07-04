// import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google"; // Replace with your desired font
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";



const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
});


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "K.K. Ubani & Co.",
//   description: "The Number 1 law firm ",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={garamond.variable}
      >
        <Topbar/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
