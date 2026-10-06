import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import ScrollToTop from "@/components/shared/ScrollToTop";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TaqwaSoftware | Web Solutions | App Development | AI Agents",
    template: "%s | TaqwaSoftware",
  },
  description:
    "Taqwa Software crafts premium digital assets with purpose, quality, and integrity. Specializing in Web Solutions, App Development, AI Agents, and Custom Web Solutions. Delivering excellence in software engineering. Trust us to bring your digital dreams to life. Contact us today!",
  keywords: [
    "Software Agency",
    "Web Development",
    "App Development",
    "WordPress",
    "AI Agents",
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "Prisma",
    "TypeScript",
    "Python",
    "Custom Software",
    "Digital Engineering",
  ],
  authors: [{ name: "Taqwa Software Team" }],
  creator: "Taqwa Software",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://taqwasoftware.com",
    siteName: "TaqwaSoftware",
    title:
      "TaqwaSoftware | Web Solutions | App Development | AI Agents | Engineering Excellence",
    description:
      "Crafting digital assets with purpose, quality, and integrity. Specializing in Web Solutions, App Development, AI Agents, and Custom Web Solutions. Delivering excellence in software engineering. Trust us to bring your digital dreams to life. Contact us today!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TaqwaSoftware Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TaqwaSoftware | Engineering Excellence in Software Development",
    description:
      "Crafting digital assets with purpose, quality, and integrity. Specializing in Web Solutions, App Development, AI Agents, and Custom Web Solutions. Delivering excellence in software engineering. Trust us to bring your digital dreams to life. Contact us today!",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Taqwa Software",
  image: "https://taqwasoftware.com/logo.png",
  description: "Crafting digital assets with purpose, quality, and integrity.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Innovation Tower, DIFC",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  url: "https://taqwasoftware.com",
  telephone: "+880 1709 190412",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[#09090b]`}
      >
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
         <ScrollToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
