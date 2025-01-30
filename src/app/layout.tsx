import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from '@/components'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barrie Real Estate Collective | BREC",
  description: "Barrie Real Estate Collective (BREC) is a distinguished network of real estate professionals bringing together decades of experience and local expertise in the Barrie real estate market.",
  keywords: [
    "Barrie Real Estate",
    "BREC",
    "Real Estate Collective",
    "Barrie Properties",
    "Real Estate Professionals",
    "Barrie Real Estate Agents",
    "Luxury Real Estate Barrie",
    "Real Estate Investment Barrie",
  ],
  authors: [{ name: "Barrie Real Estate Collective" }],
  creator: "Barrie Real Estate Collective",
  publisher: "Barrie Real Estate Collective",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://brec.com",
    title: "Barrie Real Estate Collective | BREC",
    description: "A collective of distinguished real estate professionals in Barrie, Ontario.",
    siteName: "Barrie Real Estate Collective",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barrie Real Estate Collective | BREC",
    description: "A collective of distinguished real estate professionals in Barrie, Ontario.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
