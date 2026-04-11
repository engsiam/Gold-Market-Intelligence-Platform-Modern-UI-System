import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Footer } from "@/components/layout/Footer";
import { Ticker } from "@/components/ui/Ticker";
import { Modal } from "@/components/ui/Modal";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BAJUS - Bangladesh Gold Industry Authority",
  description: "Official Digital Platform for Bangladesh's Gold Industry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${playfair.variable} antialiased font-sans flex flex-col min-h-screen relative`}
      >
        <Ticker />
        <Navbar />
        <MobileMenu />
        <div className="flex-grow flex flex-col">
          {children}
        </div>
        <Footer />
        <Modal />
      </body>
    </html>
  );
}
