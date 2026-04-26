import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import Slider from "@/components/slider";
import TestimonialSlider from "@/components/TestimonialSlider";

interface SectionHeadingProps {
  label: string;
  title: string;
  description: string;
  align?: "left" | "center";
}



const marketStats = [
  { value: "100+", label: "Materi video & ebook terstruktur" },
  { value: "06", label: "week guided sprint" },
  { value: "3x", label: "Lebih Cepat Memahami kondisi market" },
];

const trustSignals = [
  "Mentoring private untuk diskusi & feedback",
  "Live market review setiap minggu",
  "Materi lengkap (video & ebook)",
  "Akses ke insight & peluang memecoin",
];

const featurePillars = [
  {
    id: "01",
    title: "Berhenti bergantung pada sinyal",
    copy: "Kamu belajar memahami market sendiri, bukan menunggu call dari orang lain.",
  },
  {
    id: "02",
    title: "Punya cara entry yang jelas",
    copy: "Setiap keputusan punya alasan, level risiko, dan rencana yang bisa dijelaskan.",
  },
  {
    id: "03",
    title: "Belajar dari kesalahan sendiri",
    copy: "Dengan journaling dan review, kamu tahu apa yang harus diperbaiki, bukan mengulang kesalahan yang sama.",
  },
];

const learningGrid = [
  {
    title: "Membaca arah market",
    description:
      "Memahami pergerakan market dan area penting agar tidak asal entry.",
  },
  {
    title: "Mengatur risiko",
    description:
      "Menentukan kapan entry, berapa risiko, dan kapan harus keluar.",
  },
  {
    title: "Memahami pergerakan crypto",
    description: "Membedakan hype dan peluang yang layak diikuti.",
  },
  {
    title: "Evaluasi & perbaikan",
    description: "Belajar dari kesalahan untuk meningkatkan keputusan.",
  },
];

const outcomes = [
  {
    image: "/images/images2.webp",
    title: "Market clarity",
    link: "https://lynk.id/fenandra33/d6z264o32qkz",
  },
  {
    image: "/images/images1.webp",
    title: "Better decision",
    link: "https://lynk.id/fenandra33/9e2o34l295rd",
  },
  {
    image: "/images/images3.webp",
    title: "Better decision",
    link: "https://lynk.id/fenandra33/xkr39q4m2rd8",
  },
  {
    image: "/images/images4.webp",
    title: "Better decision",
    link: "https://lynk.id/fenandra33/5qRk4oK",
  },
];

const roadmap = [
  {
    week: "01",
    title: "Reset cara melihat market",
    description:
      "Rapikan mindset, pahami market cycle, dan bangun watchlist dengan pendekatan yang lebih dewasa.",
  },
  {
    week: "02",
    title: "Read the chart like a map",
    description:
      "Belajar struktur market, support resistance, liquidity, dan area yang layak diamati.",
  },
  {
    week: "03",
    title: "Design the trade",
    description:
      "Susun entry plan, stop loss, target, dan invalidasi dengan alasan yang konsisten.",
  },
  {
    week: "04",
    title: "Review, refine, repeat",
    description:
      "Masuk ke ritme journaling, live review, dan evaluasi supaya sistem benar-benar menempel.",
  },
];

const testimonials = [
  {
    image: "/images/proof1.jpg",
    quote: "Entry sekarang lebih jelas, ga asal ikut sinyal.",
    name: "Andi",
  },
  {
    image: "/images/proof2.jpg",
    quote: "Akhirnya ngerti kenapa ambil posisi.",
    name: "Rizky",
  },
  {
    image: "/images/proof3.jpg",
    quote: "Lebih tenang, ga panik tiap market gerak.",
    name: "Fajar",
  },
];

const faqs = [
  {
    question: "Apakah ini cocok untuk orang yang benar-benar baru?",
    answer:
      "Ya. Program ini dibuat untuk pemula yang butuh alur belajar jelas, bukan asumsi bahwa peserta sudah paham chart atau istilah crypto.",
  },
  {
    question: "Apakah ini kelas sinyal atau grup call?",
    answer:
      "Bukan. Fokus utamanya adalah membangun cara berpikir, membaca market, dan menyiapkan keputusan secara mandiri.",
  },
  {
    question: "Seberapa intens programnya?",
    answer:
      "Dirancang supaya realistis untuk dijalani sambil kerja atau kuliah, dengan ritme materi, live review, dan evaluasi mingguan.",
  },
  {
    question: "Kenapa seat dibatasi?",
    answer:
      "Karena nilai utamanya ada di review dan kedalaman diskusi. Cohort kecil menjaga pengalaman tetap terasa fokus dan relevan.",
  },
];

function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignmentClass = align === "center" ? "items-center text-center" : "";

  return (
    <div className={`flex flex-col gap-4 ${alignmentClass}`}>
      <span className="section-kicker">{label}</span>
      <div className="space-y-4">
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">
          {title}
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-white/62 md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-transparent pb-28 md:pb-0">
      <Navbar />

      <section className="section-shell hero-shell flex min-h-screen items-center pt-28">
        <div className="hero-halo hero-halo-left" />
        <div className="hero-halo hero-halo-right" />
        <div className="hero-grid absolute inset-0 opacity-80" />

        <div className="container relative z-10 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="section-kicker">
                The New Standard of Learning.
              </span>
              <h1 className="hero-title mt-6">
                Crypto
                <span className="text-gradient-signal">Catalyst</span>
                <br />
              </h1>

              <h3 className="hero-subtitle mt-6">
                Belajar crypto dengan sistem yang jelas, bukan sekadar ikut
                tren.
              </h3>
              <p className="mt-6 max-w-4xl text-xs leading-6 text-white/68 md:text-lg">
                Cocok untuk pemula yang ingin memahami market dari nol sampai
                bisa mengambil keputusan sendiri dengan lebih tenang.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/58">
                <span className="data-chip">memecoin</span>
                <span className="data-chip">Crypto</span>
                <span className="data-chip">Live market review</span>
                <span className="data-chip">trading plan</span>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="https://discord.gg/zmauuhKvuW" className="button-primary">
                  Join sekarang
                </a>
                <a href="#experience" className="button-secondary">
                  Explore the experience
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {marketStats.map((item) => (
                  <div
                    key={item.label}
                    className="metric-tile rounded-[1.5rem] p-5"
                  >
                    <p className="text-3xl font-semibold text-white">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/56">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="hero-console rounded-[2rem] p-6 md:p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="console-dot bg-[#34d399]" />
                  <span className="console-dot bg-[#38bdf8]" />
                  <span className="console-dot bg-[#f59e0b]" />
                </div>
                <span className="text-[11px] uppercase tracking-[0.3em] text-white/38">
                  What You Get
                </span>
              </div>

              <div className="panel mt-6 rounded-[1.75rem] p-6">
                <div className="flex items-center justify-between border-b border-white/8 pb-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-[#6ee7f9]/80">
                      Benefit
                    </p>
                    <p className="mt-2 text-4xl font-semibold text-white">.</p>
                  </div>
                  <div className="status-badge">Premium</div>
                </div>

                <div className="mt-6 space-y-4">
                  {trustSignals.map((item, index) => (
                    <div
                      key={item}
                      className="signal-row flex items-start gap-4 rounded-[1.25rem] p-4"
                    >
                      <div className="signal-index">{index + 1}</div>
                      <p className="text-sm leading-7 text-white/68">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="neon-band mt-6 rounded-[1.5rem] p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/62">
                    Outcome focus
                  </p>
                  <p className="mt-3 text-lg leading-8 text-white/86">
                    Anda tidak di sini untuk mengejar lebih banyak perdagangan.
                    Anda di sini untuk mengembangkan penilaian, struktur, dan
                    keputusan yang dapat diulang.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-shell py-10">
        <div className="container">
          <div className="trust-strip grid gap-4 rounded-[2rem] p-6 md:grid-cols-4 md:p-8">
            {[
              "Market structure",
              "Risk management",
              "Narrative filtering",
              "Execution discipline",
            ].map((item, index) => (
              <ScrollReveal key={item} delay={index * 90}>
                <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] px-4 py-5 text-center text-sm uppercase tracking-[0.40em] text-white/58">
                  {item}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section-shell py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <ScrollReveal>
            <SectionHeading
              label="Kenapa banyak orang gagal di crypto?"
              title="Masalahnya bukan di market. Tapi di cara kamu belajar."
              description="Terlalu banyak informasi, terlalu banyak noise, dan terlalu sedikit arah.
              Banyak orang masuk crypto dengan harapan tinggi, tapi tanpa sistem yang jelas.
              Akhirnya hanya ikut-ikutan, overtrade, dan bingung harus mulai dari mana."
            />
            <p className="mt-6 text-base md:text-lg text-white/90 max-w-xl font-medium">
              Crypto Catalys dibuat untuk membantu kamu keluar dari pola itu.
            </p>
          </ScrollReveal>

          <div className="grid gap-5">
            {featurePillars.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 120}>
                <div className="feature-card rounded-[1.75rem] p-6 md:p-7">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-white/35">
                        {item.id}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>
                    <div className="feature-glyph" />
                  </div>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/62 md:text-base">
                    {item.copy}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              label="Apa yang akan kamu pelajari"
              title="Belajar crypto dengan cara yang lebih jelas dan terarah"
              description="Setiap materi disusun secara bertahap untuk membantu kamu memahami market dengan lebih jelas, lalu mengubahnya menjadi keputusan yang bisa dipraktekkan."
              align="center"
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {learningGrid.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="glass-module h-full rounded-[1.75rem] p-6">
                  <div className="module-badge">0{index + 1}</div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/60 md:text-base">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="materi" className="section-shell py-24">
        <div className="container grid gap-12 lg:grid-cols-[1fr_0.92fr]">
          <ScrollReveal>
            <div className="panel rounded-[2rem] p-7 md:p-8">
              <SectionHeading
                label="Materi eksklusif"
                title="Materi yang disusun untuk membantu kamu memahami market dengan jelas"
                description="Semua materi disusun agar kamu bisa memahami market secara bertahap, tanpa harus memilah informasi yang terlalu banyak dan membingungkan."
              />

              <div className="mt-10 space-y-5">
                {roadmap.map((item, index) => (
                  <ScrollReveal key={item.week} delay={index * 100}>
                    <div className="roadmap-row rounded-[1.5rem] p-5 md:p-6">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start">
                        <div className="roadmap-week">{item.week}</div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-white/62 md:text-base">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-4">
            <ScrollReveal>
              <div className="flex justify-center">
                <Slider outcomes={outcomes} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section>
        <ScrollReveal>
          <div className="offer-panel rounded-[2rem] p-7 md:p-10">
            <div className="max-w-2xl mx-auto text-center">
              <span className="section-kicker">Apa yang kamu dapatkan</span>

              <h2 className="mt-5 text-3xl font-semibold leading-tight text-white md:text-5xl">
                Program belajar crypto yang jelas dan terarah
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/68 md:text-base">
                Kamu tidak hanya belajar teori, tapi memahami bagaimana cara
                membaca market dan mengambil keputusan dengan lebih jelas.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 max-w-xl mx-auto">
              {[
                "Live review market setiap minggu",
                "Workbook + replay library",
                "Akses materi video & ebook",
                "Decision templates included",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] bg-white/[0.03] border border-white/6 backdrop-blur px-4 py-5 text-sm leading-7 text-white/66 text-left sm:text-center"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="section-shell py-24 ">
        <div className="container grid gap-6 lg:grid-cols-[1.05fr_0.95fr] items-stretch">
          <ScrollReveal delay={120}>
            <div className="cta-vault rounded-[2rem] p-7 md:p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#67e8f9]/76">
                Premium+ Access
              </p>

              <h3 className="mt-5 text-3xl font-semibold leading-tight text-white">
                Akses penuh Crypto Catalys hanya dengan Rp229K
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/68 md:text-base">
                Sekali bayar untuk akses lifetime ke seluruh materi, framework,
                dan sistem belajar yang dirancang untuk membantu kamu memahami
                market dengan lebih jelas dan terarah.
              </p>

              <div className="vault-divider my-8" />

              <div className="space-y-4 text-sm leading-7 text-white/58">
                <p>
                  Termasuk update materi berkelanjutan tanpa biaya tambahan.
                </p>
                <p>
                  Dirancang untuk kamu yang ingin belajar serius tanpa harus
                  bergantung pada signal orang lain.
                </p>
              </div>

              <a href="https://wa.link/ywdj1n" className="button-primary mt-8 w-full">
                Dapatkan akses sekarang
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="cta-vault rounded-[2rem] p-7 md:p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#67e8f9]/76">
                Basic Access
              </p>

              <h3 className="mt-5 text-3xl font-semibold leading-tight text-white">
                Mulai dari Rp119K untuk akses 3 bulan
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/68 md:text-base">
                Akses ke materi inti dan framework dasar untuk membantu kamu
                memahami market dengan lebih terarah tanpa harus overwhelm
                dengan terlalu banyak informasi.
              </p>

              <div className="vault-divider my-8" />

              <div className="space-y-4 text-sm leading-7 text-white/58">
                <p>
                  Cocok untuk pemula yang ingin mulai dengan struktur belajar
                  yang jelas.
                </p>
                <p>
                  Fokus pada fondasi penting sebelum masuk ke level yang lebih
                  dalam.
                </p>
              </div>

              <a href="https://wa.link/kgz4kb" className="button-primary mt-8 w-full">
                Dapatkan akses sekarang
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="testimoni" className="section-shell py-24">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              label="Testimoni"
              title="Yang berubah bukan cuma pengetahuan, tapi cara mereka ambil keputusan."
              description="Mereka bukan trader profesional. Tapi setelah punya sistem yang jelas, cara mereka melihat market berubah total."
            />
          </ScrollReveal>

          <div className="mt-12 flex justify-center ">
            <ScrollReveal>
              <TestimonialSlider testimonials={testimonials} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="faq" className="section-shell py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.94fr_1.06fr]">
          <ScrollReveal>
            <SectionHeading
              label="FAQs"
              title="The last objections should feel resolved before the final CTA appears."
              description="This keeps the conversion flow clean and gives more cautious visitors enough confidence to keep going."
            />
          </ScrollReveal>

          <div className="grid gap-4">
            {faqs.map((item, index) => (
              <ScrollReveal key={item.question} delay={index * 90}>
                <div className="faq-item rounded-[1.5rem] p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/60 md:text-base">
                    {item.answer}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="daftar" className="section-shell pb-28 pt-12">
        <div className="container">
          <ScrollReveal>
            <div className="final-panel rounded-[2.5rem] px-6 py-10 md:px-10 md:py-14">
              <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <span className="section-kicker">Final call</span>
                  <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">
                    Upgrade from crypto confusion to a premium learning system
                    built for calm conviction.
                  </h2>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/66 md:text-base">
                    Enter the next CryptoCatalys cohort and build your own
                    market framework, review ritual, and execution discipline in
                    a small-group environment designed to convert uncertainty
                    into clarity.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/56">
                    <span className="data-chip">12-seat intake</span>
                    <span className="data-chip">Premium support</span>
                    <span className="data-chip">Replay included</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                  <a href="#" className="button-primary text-center">
                    Apply for access
                  </a>
                  <a
                    href="#experience"
                    className="button-secondary text-center"
                  >
                    Revisit the offer
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="mobile-cta-bar md:hidden">
        <div className="mobile-cta-shell mx-auto flex w-full max-w-6xl items-center gap-3 rounded-[1.5rem] px-4 py-3">
          <div className="min-w-0 flex-1">
            <p className="text-xs uppercase tracking-[0.18em] text-white/42">
              Next cohort
            </p>
            <p className="truncate text-sm font-medium text-white">
              Premium Web3 learning, limited seats
            </p>
          </div>
          <a
            href="#daftar"
            className="button-primary shrink-0 px-5 py-3 text-sm"
          >
            Apply
          </a>
        </div>
      </div>
    </main>
  );
}
