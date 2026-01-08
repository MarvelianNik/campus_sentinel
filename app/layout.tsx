import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { DebugSuppressor } from "@/components/debug-suppressor"

import { Geist_Mono, Merriweather_Sans as V0_Font_Merriweather_Sans, Geist_Mono as V0_Font_Geist_Mono } from 'next/font/google'

// Initialize fonts
const _merriweatherSans = V0_Font_Merriweather_Sans({ subsets: ['latin'], weight: ["300", "400", "500", "600", "700", "800"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://campus-sentinel.com"), // TODO: Update with actual domain
  title: {
    default: "Campus Sentinel - Smart School Management Platform",
    template: "%s | Campus Sentinel",
  },
  description:
    "Complete school management platform for principals. Track attendance, manage fees, communicate with parents, and get smart insights—all in one simple platform.",
  keywords: [
    "School Management System",
    "School ERP",
    "Attendance Tracking",
    "Fee Management",
    "Parent Communication",
    "School Analytics",
    "Education Technology",
    "Principal Dashboard",
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
    url: "https://campus-sentinel.com",
    title: "Campus Sentinel - A smarter way to manage your school",
    description:
      "Complete school management platform for principals. Track attendance, manage fees, communicate with parents, and get smart insights.",
    siteName: "Campus Sentinel",
    images: [
      {
        url: "/og-image.jpg", // Needs to be added to public folder ideally
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
    images: ["/og-image.jpg"],
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
    icon: "/images/favicon.ico",
    apple: "/apple-icon.png",
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
        {process.env.NODE_ENV === "production" && <Analytics />}
        <DebugSuppressor />
      </body>
    </html>
  )
}
