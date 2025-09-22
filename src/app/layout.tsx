import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { headers } from "next/headers";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const hostHeader = headerList.get("host") || "";
  const hostname = hostHeader.split(":")[0];
  const hideChrome = hostname === "instafin.ai";
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {!hideChrome && <Header />}
        <main className="min-h-screen">{children}</main>
        {!hideChrome && <Footer />}
      </body>
    </html>
  );
}
