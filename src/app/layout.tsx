import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { CurrencyProvider } from "@/context/CurrencyContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahmoodiyah | Custom Packaging Solutions",
  description: "Mahmoodiyah provides custom packaging solutions for brands. Bleach card boxes, box board cartons, and luxury rigid packaging crafted with precision.",
  keywords: ["Mahmoodiyah", "custom packaging", "bleach card boxes", "box board cartons", "rigid setup boxes", "golden panni foiling", "cosmetics packaging", "food cartons"],
  openGraph: {
    title: "Mahmoodiyah | Custom Packaging Solutions",
    description: "Custom packaging designed around your brand, product, and customer experience.",
    url: "https://mahmoodiyah.com",
    siteName: "Mahmoodiyah Packaging",
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="font-sans text-neutral-900 bg-white min-h-full flex flex-col selection:bg-neutral-900 selection:text-white">
        <CurrencyProvider>
          {children}
        </CurrencyProvider>
      </body>
    </html>
  );
}
