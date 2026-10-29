import { SiteContent } from "@/lib/jktl/site-copy";
import { publishedSite } from "@/lib/jktl/public-content";
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

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const values = await publishedSite();
  return (
    <html lang="en">
      <body className={garamond.variable}>
        <SiteContent values={values}>
          <Topbar />
          <Navbar />
          {children}
          <Footer />
        </SiteContent>
      </body>
    </html>
  );
}
