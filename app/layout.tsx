import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { AuthProvider } from "@/contexts/auth-context"
import { LanguageProvider } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Script from "next/script"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FedEx - Fast and Reliable Delivery Worldwide",
  description:
    "Ship your packages safely and on time with FedEx. Track packages, schedule pickups, and manage your deliveries online.",
  keywords: "FedEx, shipping, delivery, tracking, packages, logistics, worldwide, express",
  authors: [{ name: "FedEx" }],
  creator: "FedEx",
  publisher: "FedEx",
  icons: {
    icon: "/images/fedex-favicon.png",
    shortcut: "/images/fedex-favicon.png",
    apple: "/images/fedex-favicon.png",
  },
  openGraph: {
    title: "FedEx - Fast and Reliable Delivery Worldwide",
    description:
      "Ship your packages safely and on time with FedEx. Track packages, schedule pickups, and manage your deliveries online.",
    url: "https://fedex.com",
    siteName: "FedEx",
    images: [
      {
        url: "/images/fedex-favicon.png",
        width: 512,
        height: 512,
        alt: "FedEx Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FedEx - Fast and Reliable Delivery Worldwide",
    description:
      "Ship your packages safely and on time with FedEx. Track packages, schedule pickups, and manage your deliveries online.",
    images: ["/images/fedex-favicon.png"],
  },
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
  verification: {
    google: "google-site-verification-code",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/fedex-favicon.png" sizes="any" />
        <link rel="icon" href="/images/fedex-favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/images/fedex-favicon.png" />
        <link rel="apple-touch-icon" href="/images/fedex-favicon.png" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        <Script id="smartsupp-chat" strategy="afterInteractive">
          {`
            var _smartsupp = _smartsupp || {};
            _smartsupp.key = '2e34d7237fd0b88423f1c3c3010becc99d482297';
            window.smartsupp||(function(d) {
              var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
              s=d.getElementsByTagName('script')[0];c=d.createElement('script');
              c.type='text/javascript';c.charset='utf-8';c.async=true;
              c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
            })(document);
          `}
        </Script>
        <noscript>
          Powered by{" "}
          <a href="https://www.smartsupp.com" target="_blank" rel="noreferrer">
            Smartsupp
          </a>
        </noscript>
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <AuthProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <ScrollToTop />
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
