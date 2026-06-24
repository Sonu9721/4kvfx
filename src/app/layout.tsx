import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalaxyBackground from "@/components/GalaxyBackground";
import { site } from "@/lib/content";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | VFX & Visual Effects Studio in Mumbai`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "VFX studio Mumbai",
    "visual effects India",
    "3D animation Mumbai",
    "Bollywood VFX",
    "4K Visuals",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | VFX Studio Mumbai`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | VFX Studio Mumbai`,
    description: site.description,
  },
  alternates: {
    canonical: site.url,
  },
  icons: {
    icon: "/brand/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col font-sans relative">
        <Navbar />
        <GalaxyBackground />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
