import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { DebugSuppressor } from "@/components/debug-suppressor"
import Script from 'next/script'

import { Geist_Mono, Merriweather_Sans as V0_Font_Merriweather_Sans, Geist_Mono as V0_Font_Geist_Mono } from 'next/font/google'

// Initialize fonts
const _merriweatherSans = V0_Font_Merriweather_Sans({ subsets: ['latin'], weight: ["300", "400", "500", "600", "700", "800"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://campussentinel.com"), // TODO: Update with actual domain
  title: {
    default: "Campus Sentinel | World's First AI-Powered School ERP",
    template: "%s | Campus Sentinel",
  },
  description:
    "Campus Sentinel is the first AI-driven School ERP system that automates attendance via surveillance, answer sheet evaluation, and parent communication for modern schools.",
  keywords: [
    "AI School ERP",
    "AI Powered School Management",
    "Automated Attendance Surveillance",
    "AI Answer Sheet Evaluation",
    "Smart School ERP India",
    "Campus Safety AI",
    "AI Student Performance Analysis",
    "School Management System",
    "Parent Communication AI",
  ],
  authors: [{ name: "Campus Sentinel Team" }],
  creator: "Campus Sentinel",
  publisher: "Campus Sentinel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://campussentinel.com",
    title: "Campus Sentinel - A smarter way to manage your school",
    description:
      "Complete school management platform for principals. Track attendance, manage fees, communicate with parents, and get smart insights.",
    siteName: "Campus Sentinel",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Campus Sentinel Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Campus Sentinel - A smarter way to manage your school",
    description:
      "Complete school management platform for principals. Track attendance, manage fees, communicate with parents, and get smart insights.",
    images: ["/og-image.png"],
    creator: "@campussentinel",
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/favicon.ico" },
      { url: "/icon.svg" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/apple-icon.png" },
    ],
    shortcut: ["/favicon.ico"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://campussentinel.com/#organization",
                  "name": "Campus Sentinel",
                  "url": "https://campussentinel.com",
                  "logo": "https://campussentinel.com/images/campus-sentinel-logo.png",
                  "description": "Campus Sentinel is an AI-powered school ERP software designed to help Indian schools manage attendance, fees, exams, communication, and analytics intelligently.",
                  "sameAs": [
                    "https://www.linkedin.com/company/campus-sentinel"
                  ]
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://campussentinel.com/#software",
                  "name": "Campus Sentinel",
                  "operatingSystem": "Web-based",
                  "applicationCategory": "AI-Powered School ERP Software",
                  "applicationSubCategory": "Education Management System",
                  "description": "Campus Sentinel is an AI-powered education management software that helps schools automate operations, gain insights, and improve academic and administrative decision-making.",
                  "publisher": {
                    "@id": "https://campussentinel.com/#organization"
                  },
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock"
                  }
                }
              ]
            })
          }}
        />
        {process.env.NODE_ENV === "production" && <Analytics />}
        <DebugSuppressor />
      </body>
    </html>
  )
}
