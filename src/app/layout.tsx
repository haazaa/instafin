import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutChrome from "@/components/LayoutChrome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InstaFin - AI-Powered Financial Solutions for Businesses",
  description:
    "Transform your business with InstaFin's AI-driven financial solutions. Get instant capital access, risk scoring, and background verification for SMBs and enterprises.",
  keywords:
    "fintech, AI, financial solutions, business loans, risk scoring, capital access",
  authors: [{ name: "InstaFin" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutChrome>
          <main className="min-h-screen">{children}</main>
        </LayoutChrome>
      </body>
    </html>
  );
}
