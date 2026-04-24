import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CryptoMastery — Belajar Crypto dari Nol",
  description:
    "Kelas crypto premium untuk pemula. Pelajari strategi trading, analisa chart, dan manajemen risiko dari instruktur berpengalaman.",
  keywords: "belajar crypto, kelas crypto, trading crypto, bitcoin, blockchain",
  openGraph: {
    title: "CryptoMastery — Belajar Crypto dari Nol",
    description:
      "Kelas crypto premium untuk pemula. Pelajari strategi trading, analisa chart, dan manajemen risiko.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${dmSans.variable} font-sans noise-overlay antialiased`}>
        {children}
      </body>
    </html>
  );
}
