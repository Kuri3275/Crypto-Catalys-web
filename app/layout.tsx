import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

// 1. Optimasi Font dengan display swap
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans", // Ini akan dipanggil di globals.css
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// 2. Metadata yang lebih "Evolved" untuk SEO
export const metadata: Metadata = {
  title: {
    default: "CryptoMastery — Belajar Crypto dari Nol",
    template: "%s | CryptoMastery",
  },
  description:
    "Kelas crypto premium untuk pemula di Indonesia. Pelajari strategi trading, analisa chart, dan manajemen risiko secara mandiri.",
  keywords: [
    "belajar crypto",
    "trading crypto",
    "blockchain indonesia",
    "bitcoin pemula",
  ],
  authors: [{ name: "Yogi Eka Saputra" }], // Sesuaikan dengan namamu
  themeColor: "#050508",
  openGraph: {
    title: "CryptoMastery — Belajar Crypto dari Nol",
    description:
      "Kuasai market crypto dengan strategi yang tepat dan manajemen risiko yang ketat.",
    url: "https://cryptomastery.id", // Ganti dengan domainmu nanti
    siteName: "CryptoMastery",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CryptoMastery — Belajar Crypto dari Nol",
    description:
      "Belajar analisa chart dan strategi trading crypto sampai mandiri.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${dmSans.variable} font-sans antialiased bg-[#050508] text-white selection:bg-brand-violet/30 selection:text-brand-violet`}
      >
        {/* 3. Noise Overlay & Grid Background 
          Kita pasang grid-bg di sini agar seluruh halaman punya texture keren secara otomatis
        */}
        <div className="noise-overlay grid-bg min-h-screen flex flex-col relative">
          {children}
        </div>
      </body>
    </html>
  );
}
