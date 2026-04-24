import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-[#050508]">
      <Navbar />

      {/* ── HERO SECTION ────────────────────────────────────────────────── */}
      {/* Tambahkan flex flex-col items-center agar isinya ketarik ke tengah layar */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
        {/* Dekorasi Cahaya (Glow) - Pastikan z-index di bawah konten */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-violet/20 blur-[120px] rounded-full animate-glow pointer-events-none" />

        <div className="container relative z-10 text-center flex flex-col items-center">
          <ScrollReveal>
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-brand-cyan mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
              CryptoMastery Class 2026
            </div>

            {/* Headline Raksasa - Pakai max-w agar tidak terlalu lebar di layar ultra-wide */}
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight mb-8 max-w-5xl mx-auto text-white">
              Belajar Crypto <br />
              <span className="text-gradient">Dari Nol</span> Sampai <br />
              Bisa Mandiri
            </h1>

            {/* Deskripsi */}
            <p className="text-text-muted text-base md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Kelas terstruktur untuk pemula. Belajar analisa chart, strategi
              trading, dan manajemen risiko — bukan sekadar ikut-ikutan tren.
            </p>

            {/* Action Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href="#daftar"
                className="btn-primary w-full sm:w-auto px-10 py-4 rounded-2xl font-bold text-white text-lg"
              >
                <span>Daftar Sekarang</span>
              </a>
              <a
                href="#materi"
                className="w-full sm:w-auto px-10 py-4 rounded-2xl font-bold text-white/70 hover:text-white bg-white/5 border border-white/10 transition-all"
              >
                Lihat Kurikulum
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Indikator Scroll */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 animate-float hidden md:block">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ─────────────────────────────────────────────────── */}
      {/* Gunakan items-center agar grid-nya berada di tengah container */}
      <section className="py-24 px-6 flex flex-col items-center">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Kenapa Kebanyakan <span className="text-gradient">Gagal?</span>
              </h2>
              <p className="text-text-muted">
                Banyak yang terjun tanpa peta, akhirnya tersesat.
              </p>
            </div>
          </ScrollReveal>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {[
              {
                e: "📉",
                t: "FOMO Akut",
                d: "Beli saat harga sudah di pucuk karena ikut-ikutan teman atau influencer.",
              },
              {
                e: "🤯",
                t: "Bingung Analisa",
                d: "Melihat chart kerasa kayak melihat alien. Tidak tahu kapan harus masuk.",
              },
              {
                e: "💸",
                t: "Tanpa Risk Management",
                d: "Sekali market turun sedikit, modal langsung habis (MC).",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 200}>
                <div className="glass-card glass-card-hover p-10 rounded-[32px] h-full flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="text-4xl mb-6">{item.e}</div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {item.t}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {item.d}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── KURIKULUM ───────────────────────────────────────────────────── */}
      <section id="materi" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-violet/5 blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16">
              <span className="text-brand-cyan text-sm font-bold tracking-widest uppercase">
                The Roadmap
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2">
                Materi yang Kamu{" "}
                <span className="text-gradient-violet">Dapatkan</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                n: "01",
                t: "Fundamental Blockchain",
                i: [
                  "Cara kerja Web3",
                  "Memilih Exchange Aman",
                  "Wallet & Security",
                ],
              },
              {
                n: "02",
                t: "Technical Analysis",
                i: [
                  "Candlestick Pattern",
                  "Support & Resistance",
                  "Indikator Rahasia",
                ],
              },
              {
                n: "03",
                t: "Trading Strategy",
                i: [
                  "Scalping vs Day Trading",
                  "Money Management",
                  "Psikologi Trading",
                ],
              },
              {
                n: "04",
                t: "Altcoin Gems",
                i: [
                  "Cara riset project baru",
                  "Membaca Tokenomics",
                  "Investasi Jangka Panjang",
                ],
              },
            ].map((m, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="border-gradient p-8 rounded-3xl group">
                  <div className="flex items-start gap-6">
                    <span className="text-5xl font-black text-white/5 group-hover:text-brand-violet/20 transition-colors">
                      {m.n}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold mb-4">{m.t}</h3>
                      <ul className="space-y-2">
                        {m.i.map((list, idx) => (
                          <li
                            key={idx}
                            className="text-text-muted text-sm flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-violet" />
                            {list}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">CryptoMastery</h3>
            <p className="text-text-muted text-sm">
              Empowering your financial future through education.
            </p>
          </div>
          <p className="text-text-muted text-xs uppercase tracking-widest">
            © 2026 CryptoMastery. Built with V4 Tech.
          </p>
        </div>
      </footer>
    </main>
  );
}
