import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://youragency.com';
const agencyName = process.env.NEXT_PUBLIC_SITE_NAME || 'Mattrika';

export const baseKeywords = [
   "Software Development Agency",
   "Angular Development Company",
   "Digital Transformation",
   agencyName
];

export const seoMetadata: Metadata = {
   metadataBase: new URL(siteUrl),
   title: {
      default: `${agencyName} | Custom Software & Web Development Agency`,
      template: `%s | ${agencyName}`,
   },
   description: "Mattrika Technologies is a full-service web design and development agency specializing in creating custom, high-performing websites and scalable digital solutions.",
   keywords: [...baseKeywords, "Custom Web Development", "Enterprise Software Solutions", "UI/UX Design Agency", "Full-Stack Development"],
   verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
   },
   openGraph: {
      title: agencyName,
      url: siteUrl,
      siteName: agencyName,
      images: [{ url: '/og-agency.png', width: 1200, height: 630 }],
      locale: 'en_US',
      type: 'website',
   },
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: true,
         'max-video-preview': -1,
         'max-image-preview': 'large',
         'max-snippet': -1,
      },
   },
   twitter: {
      card: 'summary_large_image',
      creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE,
      images: ['/og-agency.png'],
   },
   other: {
      'facebook-domain-verification': process.env.NEXT_PUBLIC_FB_DOMAIN_VERIFICATION || '',
      'fb:app_id': process.env.NEXT_PUBLIC_FB_APP_ID || '',
   },
};