import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "./components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "MostraLoja",
  description: "Next.js 15 starter with TypeScript and TailwindCSS",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Header />
        {children}
      </body>
    </html>
  );
}
