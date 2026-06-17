import type { Metadata } from "next";
import { Inter, Tajawal } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });
const tajawal = Tajawal({ 
  subsets: ["arabic"], 
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: '--font-tajawal'
});

export const metadata: Metadata = {
  title: "Hassan Bahathiq | Cybersecurity & PMO Professional",
  description: "Portfolio of Hassan Ahmed Bahathiq, Cybersecurity Graduate experienced in GRC, IAM, Security Operations, Strategic Planning, and PMO initiatives.",
  keywords: ["Hassan Bahathiq", "Hassan Ahmed Bahathiq", "Cybersecurity Saudi Arabia", "IAM", "GRC", "Security Operations"],
  openGraph: {
    title: "Hassan Bahathiq | Cybersecurity & PMO Professional",
    description: "Experienced in Governance, Risk & Compliance (GRC), Identity & Access Management (IAM), Security Operations, Strategic Planning, and PMO initiatives.",
    url: "https://hassandld.github.io",
    siteName: "Hassan Bahathiq Portfolio",
    images: [
      {
        url: "https://hassandld.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hassan Bahathiq Professional Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassan Bahathiq | Cybersecurity & PMO Professional",
    description: "Experienced in GRC, IAM, Security Operations, Strategic Planning, and PMO initiatives.",
    images: ["https://hassandld.github.io/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${tajawal.variable} bg-gray-900 text-gray-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-200`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
