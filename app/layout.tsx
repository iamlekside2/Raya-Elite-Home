import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GA4Script from "@/components/analytics/GA4Script";
import FBPixelScript from "@/components/analytics/FBPixelScript";
import TidioScript from "@/components/analytics/TidioScript";
import { SITE } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="bg-pearl font-lato text-charcoal antialiased">
        <GA4Script />
        <FBPixelScript />
        <TidioScript />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
