import type { Metadata } from "next";
import { Playfair } from "next/font/google";
import "./globals.css";

const inter = Playfair({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  title: "Church",
  description: "Welcome to Rome",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
