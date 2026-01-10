import type { Metadata } from "next";
import {
  Inter,
  Montserrat,
  Poppins,
  Raleway,
  Roboto,
  Ubuntu,
  Work_Sans,
} from "next/font/google";
import type { ReactNode } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import ThemeTokens from "./components/ThemeTokens";
// @ts-ignore: Allow importing global CSS without type declarations
import "./globals.css";

export const metadata: Metadata = {
  title: "MostraLoja",
  description: "Next.js 15 starter with TypeScript and TailwindCSS",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "400", "600", "700"],
  variable: "--font-poppins",
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "400", "600", "700"],
  variable: "--font-inter",
});
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["500", "400", "600", "700"],
  variable: "--font-work-sans",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "400", "600", "700"],
  variable: "--font-montserrat",
});

const fontVariables = [
  poppins.variable,
  raleway.variable,
  ubuntu.variable,
  roboto.variable,
  inter.variable,
  workSans.variable,
  montserrat.variable,
].join(" ");

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="overflow-x-hidden">
        <ThemeTokens />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
