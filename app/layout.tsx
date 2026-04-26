import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CryptoCatalys | Belajar Crypto dari Nol",
    template: "%s | CryptoCatalys",
  },
  description:
    "Program belajar crypto untuk pemula Indonesia dengan fokus pada market structure, risk management, dan eksekusi yang lebih disiplin.",
  keywords: [
    "belajar crypto",
    "trading crypto",
    "blockchain indonesia",
    "bitcoin pemula",
  ],
  authors: [{ name: "CryptoCatalys" }],
  openGraph: {
    title: "CryptoCatalys | Belajar Crypto dari Nol",
    description:
      "Pelajari crypto dengan roadmap yang jelas, latihan chart yang relevan, dan risk management yang bisa dipakai mandiri.",
    url: "https://cryptocatalys.id",
    siteName: "CryptoCatalys",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CryptoCatalys | Belajar Crypto dari Nol",
    description:
      "Belajar analisa chart, risk management, dan strategi eksekusi crypto sampai lebih mandiri.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050816",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="font-sans antialiased">
        <div className="noise-overlay relative min-h-screen">{children}</div>
      </body>
    </html>
  );
}
