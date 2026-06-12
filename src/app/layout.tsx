import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drwadclinic.com"),
  title: {
    default:
      "Dr. Wad's Synergy Homoeopathic Clinic | Best Homeopathic Doctor in Rahatani, Pune",
    template: "%s | Dr. Wad's Synergy Homoeopathic Clinic",
  },
  description:
    "Dr. Aditi A. Wad (BHMS, MD Hom, PGDCR) — Expert homoeopathic treatment for PCOD, thyroid, skin, hair loss, migraine & more in Rahatani, Pune. Book your appointment today.",
  keywords: [
    "best homeopathic doctor in Rahatani Pune",
    "homeopathy clinic Pune",
    "PCOD treatment Pune",
    "hair fall treatment Pune",
    "thyroid treatment Pune",
    "skin specialist homoeopathy Pune",
    "Dr Aditi Wad",
    "homoeopathic doctor near me",
    "homeopathy Rahatani",
    "PCOS homoeopathy Pune",
  ],
  authors: [{ name: "Dr. Aditi A. Wad" }],
  creator: "Dr. Wad's Synergy Homoeopathic Clinic",
  openGraph: {
    title:
      "Dr. Wad's Synergy Homoeopathic Clinic | Best Homeopathic Doctor in Rahatani, Pune",
    description:
      "Expert homoeopathic treatment for PCOD, thyroid, skin, hair loss & more. 2000+ patients treated. Book your appointment today.",
    url: "https://drwadclinic.com",
    siteName: "Dr. Wad's Synergy Homoeopathic Clinic",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Wad's Synergy Homoeopathic Clinic",
    description:
      "Expert homoeopathic treatment in Rahatani, Pune. PCOD, thyroid, skin, hair loss & more.",
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
  alternates: {
    canonical: "https://drwadclinic.com",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Dr. Wad's Synergy Homoeopathic Clinic",
  image: "https://drwadclinic.com/images/clinic.jpg",
  url: "https://drwadclinic.com",
  telephone: "+919XXXXXXXXX",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rahatani",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411017",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.5913,
    longitude: 73.7789,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "17:00",
      closes: "21:00",
    },
  ],
  priceRange: "$$",
  medicalSpecialty: "Homeopathic",
};

const doctorSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Aditi A. Wad",
  image: "https://drwadclinic.com/images/dr-wad.jpg",
  url: "https://drwadclinic.com",
  telephone: "+919XXXXXXXXX",
  jobTitle: "Homoeopathic Physician",
  description:
    "Dr. Aditi A. Wad (BHMS, MD Hom, PGDCR) is a leading homoeopathic doctor in Rahatani, Pune specializing in PCOD, thyroid, skin, hair loss and chronic conditions.",
  medicalSpecialty: "Homeopathic",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rahatani",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411017",
    addressCountry: "IN",
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "BHMS Program",
    },
    {
      "@type": "EducationalOrganization",
      name: "MD Homoeopathy",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0D9488" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(doctorSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
