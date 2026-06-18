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
      "Dr Wad's synergy Homeopathy clinic | Best Homeopathic Doctor in Pimple Saudagar, Pune",
    template: "%s | Dr Wad's synergy Homeopathy clinic",
  },
  description:
    "Dr. Aditi A. Wad (BHMS, MD Hom, PGDCR) Expert Homoeopathic treatment for PCOD, thyroid, skin, hair loss, migraine & more in Pimple Saudagar, Pune. Book your appointment today.",
  keywords: [
    "best Homeopathic doctor in Pimple Saudagar Pune",
    "Homeopathy clinic Pune",
    "PCOD treatment Pune",
    "hair fall treatment Pune",
    "thyroid treatment Pune",
    "skin specialist Homoeopathy Pune",
    "Dr Aditi Wad",
    "Homoeopathic doctor near me",
    "Homeopathy Pimple Saudagar",
    "PCOS Homoeopathy Pune",
  ],
  authors: [{ name: "Dr. Aditi A. Wad" }],
  creator: "Dr Wad's synergy Homeopathy clinic",
  openGraph: {
    title:
      "Dr Wad's synergy Homeopathy clinic | Best Homeopathic Doctor in Pimple Saudagar, Pune",
    description:
      "Expert Homoeopathic treatment for PCOD, thyroid, skin, hair loss & more. 2000+ patients treated. Book your appointment today.",
    url: "https://drwadclinic.com",
    siteName: "Dr Wad's synergy Homeopathy clinic",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Wad's synergy Homeopathy clinic",
    description:
      "Expert Homoeopathic treatment in Pimple Saudagar, Pune. PCOD, thyroid, skin, hair loss & more.",
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
  name: "Dr Wad's synergy Homeopathy clinic",
  image: "https://drwadclinic.com/images/clinic.jpg",
  url: "https://drwadclinic.com",
  telephone: "+917798756622",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pimple Saudagar",
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
  telephone: "+917798756622",
  jobTitle: "Homoeopathic Physician",
  description:
    "Dr. Aditi A. Wad (BHMS, MD Hom, PGDCR) is a leading Homoeopathic doctor in Pimple Saudagar, Pune specializing in PCOD, thyroid, skin, hair loss and chronic conditions.",
  medicalSpecialty: "Homeopathic",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pimple Saudagar",
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
      suppressHydrationWarning
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
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
