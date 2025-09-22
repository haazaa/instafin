"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LayoutChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const shouldHideChrome = pathname?.startsWith("/coming-soon");

  return (
    <>
      {!shouldHideChrome && <Header />}
      {children}
      {!shouldHideChrome && <Footer />}
    </>
  );
}
