import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";

const dmdisplay = DM_Serif_Display({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-dmdisplay",
});

const dmsans = DM_Sans({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-dmsans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmdisplay.variable} ${dmsans.variable}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
