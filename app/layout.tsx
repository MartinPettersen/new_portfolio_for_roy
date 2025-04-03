import type { Metadata } from "next";
import { Geist, Geist_Mono, Libre_Baskerville, Rubik } from "next/font/google";
import "./globals.css";
import Header from "./components/(header)/Header";
import Papers from "./components/(paper)/Papers";
import Navbar from "./components/(navigation)/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  weight: "400",
  variable: "--font-libre-baskerville",
  subsets:["latin"],
});

const rubik = Rubik({
  weight: "400",
  variable: "--font-rubik",
  subsets:["latin"],
})

export const metadata: Metadata = {
  title: "Hagalid's Portfolio",
  description: "Hagalid's Portfolio side",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${libreBaskerville.variable} ${rubik.variable} antialiased md:p-6 pt-8 md:pt-0 relative `}
      >
        <div className="z-[1] max-w-full ">
          <Header />
          <Navbar />
          <Papers />
          {children}
        </div>
      </body>
    </html>
  );
}
