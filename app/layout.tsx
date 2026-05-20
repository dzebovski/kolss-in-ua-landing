import type { Metadata } from "next";
import { Literata, Onest } from "next/font/google";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { StickyMobileCta } from "@/components/landing/sticky-mobile-cta";
import { siteUrl } from "@/lib/kolss-content";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Кухні та меблі на замовлення в Києві й області | KOLSS",
    template: "%s",
  },
  description:
    "KOLSS виготовляє кухні та корпусні меблі на замовлення в Києві й області.",
  applicationName: "KOLSS",
  authors: [{ name: "KOLSS" }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${onest.variable} ${literata.variable} h-full scroll-smooth antialiased`}
    >
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
