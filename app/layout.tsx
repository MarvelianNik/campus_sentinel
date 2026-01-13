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
    default: "School ERP: Automate Fees, Attendance & Reports",
    template: "%s | Campus Sentinel",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "en": "/",
    },
  },
  description:
    "Campus Sentinel is an automated AI School ERP to track fee collection, attendance & student reports. Streamline school management & parent communication!",
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
    title: "School ERP: Automate Fees, Attendance & Reports",
    description:
      "Campus Sentinel is an automated AI School ERP to track fee collection, attendance & student reports. Streamline school management & parent communication!",
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
    title: "School ERP: Automate Fees, Attendance & Reports",
    description:
      "Campus Sentinel is an automated AI School ERP to track fee collection, attendance & student reports. Streamline school management & parent communication!",
    images: ["/og-image.png"],
    site: "@campussentinel",
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
                  "@type": "WebSite",
                  "@id": "https://campussentinel.com/#website",
                  "url": "https://campussentinel.com",
                  "name": "Campus Sentinel",
                  "description": "AI-Powered School ERP Software for Indian Schools",
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://campussentinel.com/images/campus-sentinel-logo.png",
                    "width": "512",
                    "height": "512"
                  },
                  "publisher": { "@id": "https://campussentinel.com/#organization" },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://campussentinel.com/search?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://campussentinel.com/#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "item": {
                        "@id": "https://campussentinel.com",
                        "name": "Home"
                      }
                    }
                  ]
                },
                {
                  "@type": "Organization",
                  "@id": "https://campussentinel.com/#organization",
                  "name": "Campus Sentinel",
                  "url": "https://campussentinel.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://campussentinel.com/images/campus-sentinel-logo.png",
                    "width": "1024",
                    "height": "825"
                  },
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://campussentinel.com/images/campus-sentinel-logo.png",
                    "width": "1024",
                    "height": "825"
                  },
                  "alternateName": "Maximus Consultancy Services",
                  "description": "Campus Sentinel is an AI-powered school ERP software designed to help Indian schools manage attendance, fees, exams, communication, and analytics intelligently.",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Virtual Office",
                    "addressLocality": "Bangalore",
                    "addressRegion": "Karnataka",
                    "postalCode": "560001",
                    "addressCountry": "IN"
                  },
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "telephone": "+91-761-910-7621",
                      "contactType": "sales",
                      "email": "maximusconsultancyservice@gmail.com",
                      "areaServed": "IN",
                      "availableLanguage": ["English", "Hindi"]
                    },
                    {
                      "@type": "ContactPoint",
                      "telephone": "+91-761-910-7621",
                      "contactType": "customer support",
                      "email": "support@campussentinel.com",
                      "areaServed": "IN",
                      "availableLanguage": ["English", "Hindi"]
                    }
                  ],
                  "sameAs": [
                    "https://www.linkedin.com/company/campus-sentinel"
                  ]
                },
                {
                  "@type": "Event",
                  "name": "Campus Sentinel AI ERP Demo",
                  "startDate": "2026-01-20T10:00:00+05:30",
                  "endDate": "2026-01-20T11:00:00+05:30",
                  "eventStatus": "https://schema.org/EventScheduled",
                  "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
                  "location": [
                    {
                      "@type": "VirtualLocation",
                      "url": "https://campussentinel.com",
                      "name": "Campus Sentinel Online"
                    },
                    {
                      "@type": "Place",
                      "name": "Campus Sentinel Office",
                      "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Bidar",
                        "addressRegion": "Karnataka",
                        "addressCountry": "IN"
                      }
                    }
                  ],
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://campussentinel.com/images/campus-sentinel-logo.png",
                    "width": "1024",
                    "height": "825"
                  },
                  "description": "Live demonstration of Campus Sentinel AI-powered school ERP features.",
                  "organizer": {
                    "@type": "Organization",
                    "name": "Campus Sentinel",
                    "url": "https://campussentinel.com"
                  },
                  "offers": {
                    "@type": "Offer",
                    "url": "https://campussentinel.com",
                    "price": "0",
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock",
                    "itemCondition": "https://schema.org/NewCondition"
                  }
                },
                {
                  "@type": "Product",
                  "@id": "https://campussentinel.com/#product",
                  "name": "Campus Sentinel AI School ERP",
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://campussentinel.com/images/campus-sentinel-logo.png",
                    "width": "1024",
                    "height": "825"
                  },
                  "description": "The first AI-powered School ERP that automates attendance, answer evaluation, and parent communication.",
                  "brand": {
                    "@type": "Brand",
                    "name": "Campus Sentinel",
                    "logo": "https://campussentinel.com/images/campus-sentinel-logo.png"
                  },
                  "offers": {
                    "@type": "Offer",
                    "url": "https://campussentinel.com",
                    "price": "0",
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock",
                    "itemCondition": "https://schema.org/NewCondition",
                    "priceValidUntil": "2026-12-31"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "512",
                    "ratingCount": "512"
                  },
                  "review": [
                    {
                      "@type": "Review",
                      "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5",
                        "bestRating": "5"
                      },
                      "author": {
                        "@type": "Person",
                        "name": "RK Sharma"
                      },
                      "reviewBody": "Campus Sentinel has transformed our school's daily operations. The AI attendance and automated parent communication are game-changers."
                    }
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
                    "@id": "https://campussentinel.com/#product"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://campussentinel.com/#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is an AI-powered school ERP system?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "An AI-powered school ERP system uses artificial intelligence to automate school operations, analyze data, generate insights, and support better academic and administrative decisions."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How does Campus Sentinel use AI in school management?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Campus Sentinel applies AI to attendance patterns, academic performance, fee trends, and operational data to provide intelligent insights, alerts, and recommendations for schools."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Is Campus Sentinel suitable for Indian schools?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Campus Sentinel is built specifically for Indian schools, supporting local academic structures, administrative workflows, and compliance requirements."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What makes Campus Sentinel different from traditional school ERP software?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Unlike traditional ERP systems, Campus Sentinel integrates AI-driven analytics and automation, enabling predictive insights, smarter decision-making, and proactive school management."
                      }
                    }
                  ]
                },
                {
                  "@type": "Article",
                  "@id": "https://campussentinel.com/#article",
                  "headline": "Transforming Indian Schools with AI-Powered ERP",
                  "description": "Discover how Campus Sentinel is revolutionizing school management in India through AI-driven automation and analytics.",
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://campussentinel.com/images/campus-sentinel-logo.png",
                    "width": "1024",
                    "height": "825"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "CEO TalentSwype",
                    "url": "https://campussentinel.com"
                  },
                  "publisher": {
                    "@id": "https://campussentinel.com/#organization"
                  },
                  "datePublished": "2026-01-01",
                  "dateModified": "2026-01-13"
                },
                {
                  "@type": "VideoObject",
                  "@id": "https://campussentinel.com/#video",
                  "name": "Campus Sentinel AI ERP Demo - School Management Software",
                  "description": "Watch how Campus Sentinel automates attendance tracking, fee collection, and student reports. See our AI-powered school ERP in action.",
                  "thumbnailUrl": "https://campussentinel.com/images/campus-sentinel-logo.png",
                  "uploadDate": "2026-01-01T00:00:00Z",
                  "duration": "PT2M30S",
                  "contentUrl": "https://campussentinel.com/demo-video",
                  "embedUrl": "https://campussentinel.com/embed/demo-video",
                  "publisher": {
                    "@id": "https://campussentinel.com/#organization"
                  },
                  "potentialAction": {
                    "@type": "WatchAction",
                    "target": "https://campussentinel.com/demo-video"
                  }
                },
                {
                  "@type": "WebPage",
                  "@id": "https://campussentinel.com/#webpage",
                  "url": "https://campussentinel.com",
                  "name": "Campus Sentinel - AI School ERP",
                  "description": "The official website of Campus Sentinel AI School ERP.",
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://campussentinel.com/images/campus-sentinel-logo.png",
                    "width": "1024",
                    "height": "825"
                  },
                  "potentialAction": {
                    "@type": "ReadAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://campussentinel.com",
                      "actionPlatform": [
                        "http://schema.org/DesktopWebPlatform",
                        "http://schema.org/MobileWebPlatform"
                      ]
                    },
                    "expectsAcceptanceOf": {
                      "@type": "PropertyValueSpecification",
                      "valueName": "Terms of Service",
                      "valueRequired": true
                    }
                  }
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://campussentinel.com/#localbusiness",
                  "name": "Campus Sentinel",
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://campussentinel.com/images/campus-sentinel-logo.png",
                    "width": "1024",
                    "height": "825"
                  },
                  "telephone": "+91-761-910-7621",
                  "address": {
                    "@id": "https://campussentinel.com/#organization"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "12.9716",
                    "longitude": "77.5946"
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                      ],
                      "opens": "09:00",
                      "closes": "18:00"
                    }
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-761-910-7621",
                    "contactType": "customer service",
                    "email": "maximusconsultancyservice@gmail.com",
                    "areaServed": "IN",
                    "availableLanguage": ["English", "Hindi"]
                  }
                }
              ]
            })
          }}
        />
        {process.env.NODE_ENV === "production" && process.env.VERCEL_ENV === "production" && <Analytics />}
        <DebugSuppressor />
      </body>
    </html>
  )
}
