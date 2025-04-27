import { Geist, Geist_Mono, Montserrat} from "next/font/google";
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

export const metadata = {
  title: "Keshav Soni",
  description: "Portfolio Made by Keshav Soni using Next.js, Tailwind CSS, Framer Motion, Shadcn/ui, magicUI, ReactBits, Lenis, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
