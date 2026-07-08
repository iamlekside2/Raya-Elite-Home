import type { Metadata } from "next";
import { Fraunces, Nunito_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GA4Script from "@/components/analytics/GA4Script";
import FBPixelScript from "@/components/analytics/FBPixelScript";
import TidioScript from "@/components/analytics/TidioScript";
import ChatWidget from "@/components/ui/ChatWidget";
import { SITE } from "@/lib/constants";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

// Used only by the navy/gold hero ported from the first design.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Raya Elite Cleaning | Luxury Home & Office Cleaning in Maryland & DC",
    template: "%s | Raya Elite Cleaning",
  },
  description:
    "Premium residential and commercial cleaning services in Maryland and Washington DC. Trusted by homeowners, businesses, embassies, and government agencies. Book today.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: "Raya Elite Cleaning",
  },
  twitter: { card: "summary_large_image" },
  verification: { google: "yobw0ezKiIV21msNCIuLOEHTSqMv7g0MlaWRVoNlRQU" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${nunito.variable} ${playfair.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <GA4Script />
        <FBPixelScript />
        <TidioScript />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
