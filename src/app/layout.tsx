import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
import {
 BASE_URL,
 keywords as seoKeywords,
 organizationSchema,
 websiteSchema,
} from "@/lib/seo";

const jakarta = Plus_Jakarta_Sans({
 subsets: ["latin"],
 display: "swap",
 variable: "--font-jakarta",
});

const DEFAULT_TITLE = `${site.name} — Custom Software, AI & Web Development`;

// Google Analytics 4 measurement ID (override with NEXT_PUBLIC_GA_ID in env).
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-K1L76KWRY4";

export const metadata: Metadata = {
 metadataBase: new URL(BASE_URL),
 title: {
  default: DEFAULT_TITLE,
  template: `%s | ${site.name}`,
 },
 description: site.description,
 applicationName: site.name,
 category: "technology",
 keywords: seoKeywords.brand,
 authors: [{ name: site.name, url: BASE_URL }],
 creator: site.name,
 publisher: site.name,
 alternates: { canonical: "/" },
 formatDetection: { email: false, telephone: false, address: false },
 openGraph: {
  type: "website",
  locale: "en_US",
  url: BASE_URL,
  title: DEFAULT_TITLE,
  description: site.description,
  siteName: site.name,
  // og:image is supplied automatically by app/opengraph-image.tsx.
 },
 twitter: {
  card: "summary_large_image",
  title: DEFAULT_TITLE,
  description: site.description,
 },
 robots: {
  index: true,
  follow: true,
  googleBot: {
   index: true,
   follow: true,
   "max-image-preview": "large",
   "max-snippet": -1,
   "max-video-preview": -1,
  },
 },
 // Add real values once you have them (Google Search Console, Bing, etc.).
 // verification: { google: "…", other: { "msvalidate.01": "…" } },
};

export default function RootLayout({
 children,
}: Readonly<{ children: React.ReactNode }>) {
 return (
  <html lang="en" className={jakarta.variable}>
   <body>
    {/* Site-wide entity graph — Organization + WebSite, referenced by @id
            from every page's page-level schema. */}
    <JsonLd id="ld-global" schema={[organizationSchema(), websiteSchema()]} />
    <div className="max-w-page mx-auto bg-white">
     <Header />
     <main>{children}</main>
     <Footer />
    </div>

    {/* Google Analytics (gtag.js) */}
    {GA_ID && (
     <>
      <Script
       src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
       strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
       {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
      </Script>
     </>
    )}
   </body>
  </html>
 );
}
