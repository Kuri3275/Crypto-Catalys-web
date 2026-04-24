import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconBook() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <line x1="12" y1="6" x2="16" y2="6" />
      <line x1="12" y1="10" x2="16" y2="10" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconTarget() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function IconRegister() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" y1="8" x2="19" y2="14" />
      <line x1="22" y1="11" x2="16" y2="11" />
    </svg>
  );
}

function IconPlay() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <polygon points="8 21 16 21 12 17" />
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" strokeWidth="0" />
    </svg>
  );
}

function IconRocket() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const painPoints = [
  {
    emoji: "😵",
    title: "Bingung Mulai dari Mana",
    desc: "Terlalu banyak informasi di internet, tapi nggak tahu mana yang bener. Malah makin pusing dan nggak jadi mulai.",
  },
  {
    emoji: "📉",
    title: "Sudah Nyoba Tapi Rugi",
    desc: "Ikut-ikutan beli coin tanpa strategi. Hasilnya minus terus. Nggak tahu kapan beli, kapan jual.",
  },
  {
    emoji: "🚨",
    title: "Takut Kena Scam",
    desc: "Banyak project crypto abal-abal. Susah bedain mana yang legit dan mana yang jebakan. Uang sudah habis untuk belajar mahal.",
  },
];

const solutions = [
  {
    icon: <IconBook />,
    tag: "Terstruktur",
    title: "Belajar Step by Step",
    desc: "Materi disusun rapi dari dasar hingga mahir. Tidak ada yang dilewati, tidak ada yang bikin bingung. Setiap langkah jelas.",
    color: "violet",
  },
  {
    icon: <IconChart />,
    tag: "Terbukti",
    title: "Strategi yang Jelas",
    desc: "Bukan sekadar teori. Kamu dapat framework dan strategi yang bisa langsung diterapkan untuk mengidentifikasi peluang di pasar.",
    color: "cyan",
  },
  {
    icon: <IconShield />,
    tag: "Aman",
    title: "Analisa Sebelum Beli",
    desc: "Pelajari cara membaca chart, memahami fundamental, dan manajemen risiko agar setiap keputusan berdasarkan data, bukan tebak-tebakan.",
    color: "violet",
  },
];

const courseModules = [
  {
    num: "01",
    title: "Fundamental Crypto",
    items: ["Apa itu Blockchain & Bitcoin", "Jenis-jenis aset crypto", "Cara kerja wallet & exchange", "Keamanan aset digital"],
  },
  {
    num: "02",
    title: "Analisa Chart",
    items: ["Membaca candlestick", "Support & resistance", "Indikator populer (RSI, MACD)", "Pola chart yang profitable"],
  },
  {
    num: "03",
    title: "Strategi Trading",
    items: ["Swing trading & scalping", "Entry & exit yang tepat", "Backtesting strategi", "Psikologi trading"],
  },
  {
    num: "04",
    title: "Manajemen Risiko",
    items: ["Ukuran posisi yang aman", "Stop loss & take profit", "Diversifikasi portofolio", "Kendalikan emosi saat market chaos"],
  },
];

const testimonials = [
  {
    name: "Rizky Pratama",
    role: "Mahasiswa, 22 tahun",
    avatar: "RP",
    text: "Sebelumnya saya udah rugi jutaan karena ikut-ikutan beli tanpa strategi. Setelah ikut kelas ini, baru ngerti cara baca chart dan manajemen risiko. Mindset saya soal crypto berubah total.",
    stars: 5,
  },
  {
    name: "Sari Dewi",
    role: "Fresh Graduate, 24 tahun",
    avatar: "SD",
    text: "Penjelasannya sangat mudah dipahami bahkan untuk pemula banget kayak saya. Step by step, nggak ada yang bikin bingung. Sekarang sudah bisa analisa sendiri sebelum beli coin.",
    stars: 5,
  },
  {
    name: "Budi Santoso",
    role: "Karyawan Swasta, 28 tahun",
    avatar: "BS",
    text: "Paling suka bagian manajemen risiko dan psikologi trading. Nggak disangka itu yang paling penting tapi sering dilewatin. Kelas ini worth it banget, materinya komprehensif.",
    stars: 5,
  },
];

const steps = [
  {
    num: "01",
    icon: <IconRegister />,
    title: "Daftar",
    desc: "Pilih paket dan daftarkan diri kamu. Proses cepat, kurang dari 5 menit.",
  },
  {
    num: "02",
    icon: <IconPlay />,
    title: "Akses Materi",
    desc: "Langsung akses semua modul. Belajar kapan saja, di mana saja, sesuai ritme kamu.",
  },
  {
    num: "03",
    icon: <IconRocket />,
    title: "Praktek & Berkembang",
    desc: "Terapkan strategi, join komunitas, dan mulai perjalanan crypto kamu dengan benar.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050508] text-white overflow-x-hidden">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-violet-600/10 blur-[120px] animate-glow pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />

        {/* Floating orbs */}
        <div className="absolute top-20 right-[10%] w-2 h-2 rounded-full bg-violet-400 opacity-60 animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-1/3 left-[8%] w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-40 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/3 right-[15%] w-1 h-1 rounded-full bg-violet-300 opacity-50 animate-float" style={{ animationDelay: "4s" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center pt-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/8 text-violet-300 text-xs font-medium mb-8 animate-fade-in">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Kelas Crypto Premium · Batch 2025
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 animate-fade-up">
            Belajar Crypto
            <br />
            <span className="text-gradient">dari Nol</span> Sampai
            <br />
            Paham Strateginya
          </h1>

          {/* Sub */}
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Kelas terstruktur untuk pemula. Belajar analisa chart, strategi trading, dan manajemen risiko — bukan sekadar ikut-ikutan tren.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#daftar"
              className="btn-primary text-white font-semibold px-8 py-4 rounded-full text-sm md:text-base flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <span>Gabung Sekarang</span>
              <IconArrow />
            </a>
            <a
              href="#materi"
              className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-2 group"
            >
              Lihat materi
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Social proof strip */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 md:gap-10 animate-fade-up" style={{ animationDelay: "0.45s" }}>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-white">1,200+</div>
              <div className="text-white/40 text-xs mt-0.5">Pelajar Aktif</div>
            </div>
            <div className="w-px h-8 bg-white/10 hidden md:block" />
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-white">4.9 ★</div>
              <div className="text-white/40 text-xs mt-0.5">Rating Rata-rata</div>
            </div>
            <div className="w-px h-8 bg-white/10 hidden md:block" />
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-white">40+</div>
              <div className="text-white/40 text-xs mt-0.5">Jam Materi</div>
            </div>
            <div className="w-px h-8 bg-white/10 hidden md:block" />
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-white">Seumur Hidup</div>
              <div className="text-white/40 text-xs mt-0.5">Akses Materi</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-10 bg-white" style={{ animation: "scrollLine 2s ease-in-out infinite" }} />
        </div>
      </section>

      {/* ── PROBLEM ───────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-4 block">Kenali Masalahnya</span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Kamu mungkin pernah merasa{" "}
                <span className="text-gradient">seperti ini</span>
              </h2>
              <p className="text-white/40 mt-4 max-w-lg mx-auto text-sm md:text-base">
                Banyak yang tertarik dengan crypto tapi akhirnya menyerah karena hal-hal ini.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {painPoints.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 120}>
                <div className="glass-card glass-card-hover rounded-2xl p-7 h-full">
                  <div className="text-4xl mb-5">{p.emoji}</div>
                  <h3 className="text-base font-semibold text-white mb-3">{p.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-violet-600/6 blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4 block">Solusinya</span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Kelas yang dirancang untuk{" "}
                <span className="text-gradient">hasil nyata</span>
              </h2>
              <p className="text-white/40 mt-4 max-w-lg mx-auto text-sm md:text-base">
                Bukan sekedar teori. Kamu belajar dengan metode yang sudah terbukti membantu ribuan pemula.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {solutions.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 120}>
                <div className="glass-card glass-card-hover rounded-2xl p-7 h-full relative overflow-hidden group">
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${s.color === "cyan" ? "from-transparent via-cyan-500/50 to-transparent" : "from-transparent via-violet-500/50 to-transparent"}`} />

                  <div className={`inline-flex p-2.5 rounded-xl mb-5 ${s.color === "cyan" ? "bg-cyan-500/10 text-cyan-400" : "bg-violet-500/10 text-violet-400"}`}>
                    {s.icon}
                  </div>

                  <div className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-3 ${s.color === "cyan" ? "bg-cyan-500/10 text-cyan-400" : "bg-violet-500/10 text-violet-400"}`}>
                    {s.tag}
                  </div>

                  <h3 className="text-base font-semibold text-white mb-3">{s.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSE CONTENT ────────────────────────────────────────────────── */}
      <section id="materi" className="py-24 md:py-32 relative">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-4 block">Kurikulum</span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Apa yang akan kamu{" "}
                <span className="text-gradient">pelajari</span>
              </h2>
              <p className="text-white/40 mt-4 max-w-md mx-auto text-sm md:text-base">
                40+ jam konten video, quiz, dan studi kasus nyata dari pasar crypto.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {courseModules.map((mod, i) => (
              <ScrollReveal key={mod.num} delay={i * 100}>
                <div className="glass-card glass-card-hover rounded-2xl p-7 h-full">
                  <div className="flex items-start gap-4 mb-5">
                    <span className="text-3xl font-bold text-gradient-violet leading-none">{mod.num}</span>
                    <h3 className="text-base font-semibold text-white mt-1">{mod.title}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {mod.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-white/50">
                        <span className="text-violet-400 flex-shrink-0">
                          <IconCheck />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bonus banner */}
          <ScrollReveal delay={200}>
            <div className="mt-5 rounded-2xl p-6 md:p-8 border border-cyan-500/20 bg-gradient-to-r from-cyan-950/30 via-violet-950/20 to-transparent flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
              <div>
                <div className="text-xs text-cyan-400 font-semibold tracking-widest uppercase mb-1">Bonus Eksklusif</div>
                <h4 className="text-white font-semibold text-base md:text-lg">
                  Akses komunitas private + Live Q&A setiap bulan
                </h4>
                <p className="text-white/40 text-sm mt-1">Tanya langsung ke mentor dan diskusi dengan sesama trader.</p>
              </div>
              <div className="flex-shrink-0 px-5 py-2.5 rounded-full border border-cyan-500/30 text-cyan-400 text-sm font-medium whitespace-nowrap">
                Included ✓
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section id="testimoni" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-4 block">Testimoni</span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Kata mereka yang sudah{" "}
                <span className="text-gradient">bergabung</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 120}>
                <div className="glass-card glass-card-hover rounded-2xl p-7 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5 text-amber-400">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <IconStar key={j} />
                    ))}
                  </div>

                  <p className="text-white/60 text-sm leading-relaxed flex-1 mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{t.name}</div>
                      <div className="text-xs text-white/40">{t.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <section id="cara-kerja" className="py-24 md:py-32 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-cyan-600/5 blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4 block">Cara Kerja</span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Mulai dalam{" "}
                <span className="text-gradient">3 langkah</span>
              </h2>
              <p className="text-white/40 mt-4 max-w-md mx-auto text-sm md:text-base">
                Prosesnya simpel. Tidak butuh pengalaman teknis sama sekali.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
            {/* Connector line desktop */}
            <div className="hidden md:block absolute top-16 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-gradient-to-r from-violet-500/20 via-cyan-500/30 to-violet-500/20" />

            {steps.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 150}>
                <div className="relative flex flex-col items-center text-center p-8">
                  {/* Step number badge */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center text-violet-400 relative z-10">
                      {s.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-3">{s.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section id="daftar" className="py-24 md:py-32 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-violet-600/10 blur-[120px] animate-glow pointer-events-none" />

        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center relative z-10">
          <ScrollReveal>
            <div className="glass-card rounded-3xl p-10 md:p-16 border border-violet-500/20 relative overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-violet-500/20 to-transparent rounded-br-full" />
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-cyan-500/15 to-transparent rounded-tl-full" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/8 text-violet-300 text-xs font-medium mb-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                  Slot Terbatas · Batch 2025
                </div>

                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
                  Siap memulai perjalanan
                  <br />
                  <span className="text-gradient">crypto kamu?</span>
                </h2>

                <p className="text-white/50 text-sm md:text-base mb-10 max-w-lg mx-auto leading-relaxed">
                  Bergabung dengan ribuan pelajar yang sudah memilih untuk belajar dengan benar. Akses seumur hidup, komunitas aktif, dan mentor berpengalaman.
                </p>

                {/* Price block */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-white/30 text-sm line-through">Rp 799.000</div>
                    <div className="text-4xl font-bold text-white">Rp 399.000</div>
                    <div className="text-xs text-green-400 mt-1 font-medium">Hemat 50% · Harga perkenalan</div>
                  </div>
                </div>

                <a
                  href="#"
                  className="btn-primary inline-flex items-center gap-3 text-white font-semibold px-10 py-4 rounded-full text-base w-full sm:w-auto justify-center"
                >
                  <span>Gabung Sekarang</span>
                  <IconArrow />
                </a>

                <p className="text-white/25 text-xs mt-6">
                  Pembayaran aman · Akses langsung setelah daftar · Garansi kepuasan 7 hari
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L13 5V11L8 14L3 11V5L8 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M8 2V14M3 5L13 11M13 5L3 11" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
              </svg>
            </div>
            <span className="text-white/60 font-medium text-sm">CryptoMastery</span>
          </div>

          {/* Copyright */}
          <p className="text-white/25 text-xs text-center">
            © 2025 CryptoMastery. Investasi adalah keputusan pribadi, selalu lakukan riset mandiri.
          </p>

          {/* Social */}
          <div className="flex items-center gap-4">
            {["Twitter / X", "Instagram", "Telegram"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-white/30 hover:text-white/70 transition-colors text-xs"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
