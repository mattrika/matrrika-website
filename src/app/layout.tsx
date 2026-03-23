import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";
import { robotoFont } from "@/utils/font";
import { seoMetadata } from "@/utils/seo-metadata";
import Script from "next/script";

const roboto = robotoFont

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbf8f3",
};

export const metadata: Metadata = {
  ...seoMetadata,
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mattrika Technologies",
    "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://youragency.com',
    "logo": (process.env.NEXT_PUBLIC_SITE_URL || 'https://youragency.com') + "/og-agency.png",
  };

  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans antialiased`} suppressHydrationWarning>
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main id="main-content" className="min-h-screen" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}