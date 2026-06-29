import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import ThemeRegistry from "@/components/ThemeRegistry";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { SITE } from "@/lib/constants";
import { inter, plusJakartaSans } from "@/lib/fonts";
import { GA_MEASUREMENT_ID, SITE_NAME, SITE_URL } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE.title,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className={inter.className}>
        <ThemeRegistry>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </ThemeRegistry>
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
