import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ArrowUpRight, Plus, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import heroEditorial from "@/assets/hero-editorial.jpg";
import jagodaPortrait from "@/assets/jagoda-portrait.jpg";
import botanicals from "@/assets/botanicals.jpg";
import hairDetail from "@/assets/hair-detail.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Jagoda Trycholog — Atelier zdrowych włosów" },
      { name: "description", content: "Butikowy gabinet trychologiczny Jagody. Diagnostyka, terapie regenerujące i indywidualna pielęgnacja włosów w sercu Warszawy." },
    ],
  }),
});

const PHONE = "+48 723 481 902";
const EMAIL = "kontakt@trycholog-jagoda.pl";
const ADDRESS = "ul. Kwiatowa 12, 00-001 Warszawa";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Philosophy />
      <Testimonials />
      <LocationMap />
      <ContactForm />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-6 md:px-12 py-6 flex items-center justify-between text-primary-foreground">
      <a href="#top" className="flex items-baseline gap-2">
        <span className="text-2xl tracking-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
          Jagoda<span className="text-accent">.</span>
        </span>
        <span className="text-[10px] uppercase tracking-[0.4em] opacity-70 hidden sm:inline">Trycholog</span>
      </a>
      <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.25em]">
        <a href="#o-mnie" className="hover:text-accent transition-colors">Atelier</a>
        <a href="#uslugi" className="hover:text-accent transition-colors">Zabiegi</a>
        <a href="#opinie" className="hover:text-accent transition-colors">Opinie</a>
        <a href="#kontakt" className="hover:text-accent transition-colors">Kontakt</a>
      </nav>
      <a href="#kontakt" className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] border-b border-accent pb-1">
        Umów wizytę <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-[oklch(0.18_0.03_160)]">
      <div className="absolute inset-0">
        <img src={heroEditorial} alt="Portret kobiety o lśniących włosach" width={1536} height={1920} className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
      </div>

      {/* top label row */}
      <div className="absolute top-28 md:top-32 left-6 md:left-12 right-6 md:right-12 z-10 flex justify-between items-start text-primary-foreground/80 text-[10px] uppercase tracking-[0.4em]">
        <span>Est. 2017 — Warszawa</span>
        <span className="hidden md:block text-right">N° 01<br/>Atelier Trychologii</span>
      </div>

      <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-24 text-primary-foreground">
        <div className="max-w-5xl">
          <h1 className="text-[3.25rem] sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.95] tracking-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}>
            Włosy <em className="text-accent font-light italic">jak</em><br/>
            poezja <span className="inline-block align-middle h-px w-12 md:w-24 bg-accent mx-3 md:mx-5" /><span className="italic font-light">ciała</span>
          </h1>
          <div className="mt-10 grid md:grid-cols-3 gap-6 items-end max-w-4xl">
            <p className="md:col-span-2 text-base md:text-lg text-primary-foreground/85 leading-relaxed font-light max-w-xl">
              Butikowy gabinet trychologiczny prowadzony przez Jagodę — z pasji do nauki o włosach i miłości do prawdziwego piękna. Powolnie, świadomie, indywidualnie.
            </p>
            <div className="flex md:justify-end">
              <a href="#kontakt" className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] border border-primary-foreground/40 rounded-full px-6 py-3 hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all">
                Zarezerwuj <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Trichoskopia", "Mezoterapia", "Łysienie androgenowe", "Łojotok", "Łupież", "Pielęgnacja domowa", "Suplementacja"];
  return (
    <div className="bg-primary text-primary-foreground py-5 overflow-hidden border-y border-accent/20">
      <div className="flex gap-12 whitespace-nowrap animate-[marquee_40s_linear_infinite]" style={{ animation: "marquee 40s linear infinite" }}>
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="text-sm uppercase tracking-[0.35em] flex items-center gap-12">
            {t} <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }`}</style>
    </div>
  );
}

function About() {
  return (
    <section id="o-mnie" className="py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-start">
        <div className="md:col-span-5 md:sticky md:top-24">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm" style={{ boxShadow: "var(--shadow-soft)" }}>
              <img src={jagodaPortrait} alt="Jagoda — trycholog w gabinecie" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-background border border-accent/40 px-6 py-4 rounded-sm" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <p className="text-5xl text-primary" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 300 }}>8<span className="text-accent">+</span></p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">lat praktyki</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 md:pt-12">
          <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" /> Słowo o mnie
          </p>
          <h2 className="text-4xl md:text-6xl leading-[1.05] tracking-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}>
            Patrzę głębiej, niż <em className="text-accent">sięga grzebień</em>.
          </h2>
          <div className="mt-10 space-y-6 text-muted-foreground text-lg font-light leading-relaxed max-w-xl">
            <p>
              Jestem Jagoda. Certyfikowana trycholog, miłośniczka botaniki i powolnej pielęgnacji. Pomagam moim pacjentkom i pacjentom zrozumieć ich włosy — od mieszka po końcówkę.
            </p>
            <p>
              Każda konsultacja to rozmowa, badanie pod dermatoskopem i plan, który naprawdę da się wpleść w codzienność. Bez magicznych obietnic, za to z ciekawością i precyzją.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-px bg-border">
            {[
              { n: "500+", l: "pacjentów" },
              { n: "15", l: "autorskich terapii" },
              { n: "98%", l: "powraca" },
            ].map((s) => (
              <div key={s.l} className="bg-background p-6">
                <p className="text-4xl md:text-5xl text-primary" style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}>{s.n}</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-2">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type Service = {
  num: string;
  title: string;
  desc: string;
  long: string;
  bullets: string[];
  duration: string;
  price: string;
};

const services: Service[] = [
  {
    num: "01",
    title: "Diagnostyka trichoskopowa",
    desc: "Szczegółowe badanie skóry głowy i mieszków pod dermatoskopem cyfrowym.",
    long: "Wnikliwe badanie kondycji skóry głowy i mieszków włosowych przy użyciu dermatoskopu cyfrowego z 60–200x powiększeniem. Wynik to nie tylko diagnoza — to mapa drogowa Twojej terapii.",
    bullets: ["Cyfrowe zdjęcia mikroskopowe", "Ocena gęstości i fazy wzrostu", "Pisemny raport i plan terapii", "Dobór preparatów do domu"],
    duration: "60 min",
    price: "od 250 zł",
  },
  {
    num: "02",
    title: "Terapie regenerujące",
    desc: "Mezoterapia, peelingi enzymatyczne i autorskie infuzje wzmacniające.",
    long: "Kompleksowe zabiegi w gabinecie: mezoterapia igłowa z koktajlami witaminowymi, delikatne peelingi enzymatyczne oraz infuzje stymulujące mieszki. Idealne przy wypadaniu, osłabieniu i utracie gęstości.",
    bullets: ["Mezoterapia igłowa skóry głowy", "Peeling enzymatyczny i kwasowy", "Stymulacja mieszków włosowych", "Seria 4–6 zabiegów"],
    duration: "75 min",
    price: "od 350 zł",
  },
  {
    num: "03",
    title: "Rytuały pielęgnacji",
    desc: "Spersonalizowane plany domowej pielęgnacji oparte o naturalne kosmetyki.",
    long: "Indywidualnie zaprojektowany rytuał pielęgnacji domowej, dopasowany do Twojego typu włosów, stylu życia i celów. Pracuję wyłącznie ze sprawdzonymi, naturalnymi markami trychologicznymi.",
    bullets: ["Indywidualny dobór kosmetyków", "Harmonogram tygodniowy", "Wsparcie suplementacyjne", "Konsultacje kontrolne online"],
    duration: "45 min",
    price: "od 180 zł",
  },
];

function Services() {
  const [open, setOpen] = useState<Service | null>(null);
  return (
    <section id="uslugi" className="py-24 md:py-40 px-6 md:px-12 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: "var(--gradient-radial)" }} />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-12 gap-10 mb-16 md:mb-24 items-end">
          <div className="md:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" /> Karta zabiegów
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}>
              Trzy ścieżki, <em className="text-accent">jeden cel</em> — Twoje włosy.
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 text-primary-foreground/70 font-light leading-relaxed">
            Każdy zabieg dopasowuję indywidualnie. Kliknij wybraną ścieżkę, aby poznać szczegóły, czas trwania oraz cenę.
          </p>
        </div>

        <ul className="divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">
          {services.map((s) => (
            <li key={s.num}>
              <button
                onClick={() => setOpen(s)}
                className="group w-full text-left grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-12 items-center hover:bg-primary-foreground/5 transition-colors px-2"
              >
                <span className="col-span-2 md:col-span-1 text-accent text-sm tracking-[0.2em]">{s.num}</span>
                <div className="col-span-10 md:col-span-6">
                  <h3 className="text-2xl md:text-4xl tracking-tight group-hover:text-accent transition-colors" style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}>
                    {s.title}
                  </h3>
                  <p className="hidden md:block text-primary-foreground/60 mt-2 font-light max-w-md">{s.desc}</p>
                </div>
                <span className="hidden md:block col-span-3 text-primary-foreground/70 text-sm tracking-[0.15em] uppercase">{s.duration} · {s.price}</span>
                <span className="col-span-12 md:col-span-2 flex md:justify-end">
                  <span className="h-12 w-12 rounded-full border border-primary-foreground/30 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground transition-all group-hover:rotate-90">
                    <Plus className="h-4 w-4" />
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-2xl rounded-sm p-0 overflow-hidden border-accent/40 bg-background text-foreground">
          {open && (
            <>
              <div className="px-8 md:px-12 pt-10 pb-8 border-b border-border">
                <p className="text-accent text-xs tracking-[0.3em] mb-3">{open.num} — Zabieg</p>
                <DialogHeader>
                  <DialogTitle className="text-3xl md:text-5xl tracking-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}>{open.title}</DialogTitle>
                  <DialogDescription className="text-muted-foreground text-base mt-4 leading-relaxed font-light">{open.long}</DialogDescription>
                </DialogHeader>
              </div>
              <div className="p-8 md:p-12 space-y-8">
                <ul className="space-y-3">
                  {open.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 font-light">
                      <Check className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-end justify-between pt-6 border-t border-border">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Czas / Cena</p>
                    <p className="text-2xl mt-1" style={{ fontFamily: "var(--font-display)" }}>{open.duration} · {open.price}</p>
                  </div>
                  <a href="#kontakt" onClick={() => setOpen(null)}>
                    <Button className="rounded-full bg-primary text-primary-foreground h-11 px-6 uppercase text-xs tracking-[0.25em]">Umów zabieg</Button>
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="order-2 md:order-1">
          <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" /> Filozofia
          </p>
          <h2 className="text-4xl md:text-6xl leading-[1.05] tracking-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}>
            Natura, nauka <br/><em className="text-accent">i&nbsp;cierpliwość</em>.
          </h2>
          <p className="mt-8 text-muted-foreground text-lg font-light leading-relaxed max-w-md">
            Wierzę, że zdrowe włosy nie powstają w jednej wizycie. Powstają z rytuałów, składników, snu, oddechu. Łączę dermatologię z botaniką — bo to, co naturalne, też potrafi być skuteczne.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-px bg-border">
            {["Składniki czyste", "Procedury sterylne", "Bez obietnic bez pokrycia", "Twoje tempo"].map((t) => (
              <div key={t} className="bg-background p-5 text-sm font-light tracking-wide">— {t}</div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
          <img src={botanicals} alt="Botaniczne kosmetyki" loading="lazy" width={1024} height={1024} className="w-full aspect-[3/4] object-cover rounded-sm row-span-2" style={{ boxShadow: "var(--shadow-soft)" }} />
          <img src={hairDetail} alt="Detal lśniących włosów" loading="lazy" width={1024} height={1280} className="w-full aspect-square object-cover rounded-sm mt-10" style={{ boxShadow: "var(--shadow-elegant)" }} />
          <div className="bg-primary text-primary-foreground rounded-sm p-6 flex flex-col justify-end aspect-square">
            <p className="text-3xl leading-tight" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 300 }}>
              „Słucham włosów — zanim zacznę je leczyć."
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mt-4">— Jagoda</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { t: "Pierwsza osoba, która naprawdę wytłumaczyła mi, co dzieje się z moimi włosami. Po trzech miesiącach widzę różnicę.", n: "Anna K.", r: "Pacjentka od 2024" },
    { t: "Spokój, profesjonalizm i konkret. Dostałam plan, który da się wpleść w życie zawodowej mamy.", n: "Marta W.", r: "Pacjentka od 2023" },
    { t: "Polecam całym sercem. Gabinet jak małe atelier — czuje się zaopiekowana.", n: "Karolina S.", r: "Pacjentka od 2022" },
  ];
  return (
    <section id="opinie" className="py-24 md:py-40 px-6 md:px-12 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" /> Głosy pacjentów
            </p>
            <h2 className="text-4xl md:text-6xl leading-tight tracking-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}>
              <em className="text-accent">Słowa</em>, które niosą.
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-1 text-accent">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure key={r.n} className="bg-background border border-border p-8 md:p-10 rounded-sm flex flex-col justify-between min-h-[280px]" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <div>
                <span className="text-5xl text-accent leading-none" style={{ fontFamily: "var(--font-display)" }}>"</span>
                <blockquote className="mt-2 text-lg font-light leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>{r.t}</blockquote>
              </div>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <p className="text-sm">{r.n}</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">{r.r}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationMap() {
  return (
    <section id="lokalizacja" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 mb-12 items-end">
          <div className="md:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" /> Atelier
            </p>
            <h2 className="text-4xl md:text-6xl tracking-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}>
              Znajdź nas <em className="text-accent">na mapie</em>.
            </h2>
          </div>
          <div className="md:col-span-5 text-muted-foreground font-light">
            <p>{ADDRESS}</p>
            <p className="mt-2 text-sm">Pon–Pt 10:00–19:00 · Sob 10:00–14:00</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-sm border border-border relative" style={{ boxShadow: "var(--shadow-soft)" }}>
          <iframe
            title="Mapa gabinetu"
            src="https://www.google.com/maps?q=Kwiatowa+12+Warszawa&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[400px] md:h-[520px] border-0 grayscale-[40%]"
          />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="kontakt" className="py-24 md:py-40 px-6 md:px-12 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: "var(--gradient-radial)" }} />
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16 relative">
        <div className="md:col-span-5">
          <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" /> Kontakt
          </p>
          <h2 className="text-4xl md:text-6xl leading-[1.05] tracking-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}>
            Napisz <em className="text-accent">kilka słów</em>.
          </h2>
          <p className="mt-6 text-primary-foreground/70 font-light leading-relaxed max-w-md">
            Odezwę się w ciągu 24 godzin, by wspólnie znaleźć dogodny termin konsultacji.
          </p>
          <ul className="mt-12 space-y-5">
            {[
              { Icon: Phone, label: PHONE, href: `tel:${PHONE.replace(/\s/g,"")}` },
              { Icon: Mail, label: EMAIL, href: `mailto:${EMAIL}` },
              { Icon: MapPin, label: ADDRESS, href: undefined as string | undefined },
            ].map(({ Icon, label, href }, i) => (
              <li key={i} className="flex items-center gap-4 border-b border-primary-foreground/15 pb-4">
                <Icon className="h-4 w-4 text-accent" />
                {href ? <a href={href} className="hover:text-accent transition-colors">{label}</a> : <span>{label}</span>}
              </li>
            ))}
          </ul>
          <div className="flex gap-3 mt-10">
            {[
              { icon: Instagram, href: "https://instagram.com" },
              { icon: Facebook, href: "https://facebook.com" },
              { icon: Youtube, href: "https://youtube.com" },
            ].map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label="Social media"
                className="h-11 w-11 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="md:col-span-7 bg-background text-foreground p-8 md:p-12 rounded-sm border border-accent/30"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          {sent ? (
            <div className="text-center py-16">
              <div className="h-14 w-14 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-6">
                <Check className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-3xl mb-3" style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}>Dziękuję za wiadomość</h3>
              <p className="text-muted-foreground font-light">Odezwę się do Ciebie najszybciej, jak to możliwe.</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="name" className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Imię i nazwisko</Label>
                  <Input id="name" placeholder="Anna Kowalska" className="mt-2 h-12 rounded-sm border-x-0 border-t-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-accent shadow-none" required />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Telefon</Label>
                  <Input id="phone" type="tel" placeholder="+48 ___ ___ ___" className="mt-2 h-12 rounded-sm border-x-0 border-t-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-accent shadow-none" />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">E-mail</Label>
                <Input id="email" type="email" placeholder="anna@example.com" className="mt-2 h-12 rounded-sm border-x-0 border-t-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-accent shadow-none" required />
              </div>
              <div>
                <Label htmlFor="message" className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Wiadomość</Label>
                <Textarea id="message" rows={5} placeholder="Opowiedz mi o swoich włosach..." className="mt-2 rounded-sm border-x-0 border-t-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-accent shadow-none resize-none" required />
              </div>
              <Button type="submit" className="w-full h-14 rounded-full bg-primary text-primary-foreground uppercase text-xs tracking-[0.3em] hover:bg-accent hover:text-accent-foreground transition-colors">
                Wyślij zgłoszenie
              </Button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t border-border py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-muted-foreground">
        <span style={{ fontFamily: "var(--font-display)" }} className="text-base text-foreground">Jagoda<span className="text-accent">.</span> <span className="text-muted-foreground text-xs uppercase tracking-[0.3em] ml-2">Trycholog</span></span>
        <span className="uppercase tracking-[0.3em]">© {new Date().getFullYear()} — Atelier zdrowych włosów</span>
      </div>
    </footer>
  );
}
