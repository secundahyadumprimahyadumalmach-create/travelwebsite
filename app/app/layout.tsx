import type { Metadata } from "next";
import { Bricolage_Grotesque, Public_Sans } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });
const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-public" });

export const metadata: Metadata = {
  title: "Luming Concierge",
  description: "Trips in Cotonou and Ouidah, arranged for you.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${publicSans.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
