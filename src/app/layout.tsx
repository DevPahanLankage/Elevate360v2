import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: true,
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elevate360.agency"),
  title: "Elevate360 | Digital Marketing Agency",
  description:
    "Transform your digital presence with Elevate360. We specialize in social media marketing, web development, and strategic digital solutions.",
  keywords:
    "digital marketing, social media marketing, web development, brand strategy, SEO, digital transformation",
  authors: [{ name: "Elevate360" }],
  creator: "Elevate360",
  publisher: "Elevate360",
  themeColor: "#2A3663",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://elevate360.agency",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elevate360.agency",
    siteName: "Elevate360",
    title: "Elevate360 | Digital Marketing Agency",
    description:
      "Transform your digital presence with Elevate360. We specialize in social media marketing, web development, and strategic digital solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elevate360 - Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevate360 | Digital Marketing Agency",
    description:
      "Transform your digital presence with Elevate360. We specialize in social media marketing, web development, and strategic digital solutions.",
    images: ["/og-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "your-google-site-verification",
  },
  category: "Digital Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2A3663" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
