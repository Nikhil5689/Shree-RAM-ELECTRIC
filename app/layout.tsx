import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Shri Ram Electric Service | Electrical Services in Mira-Bhayander | Sanjay Shukla",
  description:
    "Professional electrical services in Mira-Bhayander for 12+ years. Expert in residential wiring, appliance repair, CCTV installation, and society maintenance. Call 8425856456 for reliable electrical solutions.",
  keywords:
    "electrician Mira-Bhayander, electrical services Maharashtra, appliance repair, CCTV installation, residential wiring, commercial electrical, Sanjay Shukla electrician, Shri Ram Electric Service, Sai Ram Sales Service",
  authors: [{ name: "Shri Ram Electric Service" }],
  creator: "Shri Ram Electric Service",
  publisher: "Shri Ram Electric Service",
  robots: "index, follow",
  openGraph: {
    title: "Shri Ram Electric Service | Professional Electrical Services Mira-Bhayander",
    description:
      "Trusted electrical service provider with 12+ years experience. Specializing in residential & commercial wiring, appliance repair, and security systems.",
    url: "https://shriramelecricservice.com",
    siteName: "Shri Ram Electric Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Ram Electric Service | Electrical Services Mira-Bhayander",
    description: "Professional electrical services for 12+ years. Expert in wiring, repairs, and maintenance.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#FF6600",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="canonical" href="https://shriramelecricservice.com" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mira-Bhayander" />
        <meta name="geo.position" content="19.295132;72.854771" />
        <meta name="ICBM" content="19.295132, 72.854771" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Shri Ram Electric Service",
              alternateName: "Sai Ram Sales and Service",
              description: "Professional electrical services in Mira-Bhayander with 12+ years of experience",
              founder: {
                "@type": "Person",
                name: "Sanjay Shukla",
              },
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "Shop no. B-5, New Hari Darshan bldg, Maharana Pratap Rd",
                  addressLocality: "Bhayandar West",
                  addressRegion: "Maharashtra",
                  postalCode: "401101",
                  addressCountry: "IN",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "Shop No.: 19, Radha Raman Building, Opp. D Mart",
                  addressLocality: "Bhayander West",
                  addressRegion: "Maharashtra",
                  postalCode: "401101",
                  addressCountry: "IN",
                },
              ],
              telephone: ["+91-8425856456", "+91-9320777141", "+91-8291599122"],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 19.295132,
                  longitude: 72.854771,
                },
                geoRadius: "25000",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.03",
                reviewCount: "50+",
              },
              priceRange: "₹₹",
              openingHours: "Mo-Su 09:00-20:00",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Electrical Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Residential Electrical Wiring",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Appliance Repair Services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "CCTV Installation and Security Systems",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
