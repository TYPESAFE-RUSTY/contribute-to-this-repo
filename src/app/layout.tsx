import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import LenisProvider from "@/wrappers/LensiProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CONTRIBUTION",
  description: "Helping beginners learn Open Source.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
