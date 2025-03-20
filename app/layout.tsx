import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Header } from "@/components/modules/header";
import { Footer } from "@/components/modules/footer";
import { cocogoose, playfairVariable } from "./fonts";
import { Open_Sans, Playfair_Display, Bokor } from "next/font/google";

// Load Bokor as fallback font
const bokor = Bokor({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bokor",
  weight: "400",
});

// Load Open Sans as fallback font
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

// Load Playfair Display as fallback font
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Cheese Co. - Artisanal Cheese Shopping Experience",
  description:
    "A fun, no-pressure, hands-on cheese shop and charcuterie bar in Ambleside, West Vancouver.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cocogoose.variable} ${playfair.variable} ${playfairVariable.variable}${openSans.variable} ${bokor.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
