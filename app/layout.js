"use client";

import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import Loader from "@/components/pages/Loader";
import "./globals.css";

// Importing Google Fonts

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  Weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 2000); // Start fading loader
    const timer2 = setTimeout(() => {
      setLoading(false); // Remove loader
      setContentVisible(true); // Start content fade-in
    }, 2700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased bg-black text-white`}
      >
        {loading && <Loader fadeOut={fadeOut} />}
        <div
          className={`transition-opacity duration-1000 ease-in-out ${
            contentVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
