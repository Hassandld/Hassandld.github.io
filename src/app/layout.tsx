import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Background from "@/components/Background";

export const metadata: Metadata = {
  title: "Hassan Bahathiq | Cybersecurity & PMO Professional",
  description: "Portfolio of Hassan Ahmed Bahathiq, Cybersecurity Graduate experienced in GRC, IAM, Security Operations, Strategic Planning, and PMO initiatives.",
  keywords: ["Hassan Bahathiq", "Hassan Ahmed Bahathiq", "Cybersecurity Saudi Arabia", "IAM", "GRC", "Security Operations"],
  icons: {
    icon: "/hero-image.jpg",
    shortcut: "/hero-image.jpg",
    apple: "/hero-image.jpg",
  },
  openGraph: {
    title: "Hassan Bahathiq | Cybersecurity & PMO Professional",
    description: "Experienced in Governance, Risk & Compliance (GRC), Identity & Access Management (IAM), Security Operations, Strategic Planning, and PMO initiatives.",
    url: "https://hassandld.github.io",
    siteName: "Hassan Bahathiq Portfolio",
    images: [
      {
        url: "https://hassandld.github.io/about-image.png",
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
    images: ["https://hassandld.github.io/about-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-200">
        <LanguageProvider>
          <Background />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
