import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, Instagram, ArrowUpRight, Plus, Check } from "lucide-react";
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
      { title: "Jagoda Kosmetologia & Trychologia — Atelier zdrowych włosów" },
      { name: "description", content: "Gabinet trychologiczny Jagody. Mezoterapia, karboksyterapia, head spa, terapia powięzi i autorskie zabiegi skóry głowy oraz włosów." },
    ],
  }),
});

const PHONE = "+48 531 658 816";
const PHONE_RAW = "+48531658816";
const EMAIL = "jagodakosmetolog@gmail.com";
const INSTAGRAM = "https://www.instagram.com/jagodakosmetologia/";
const INSTAGRAM_HANDLE = "@jagodakosmetologia";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Philosophy />
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
        <a href="#lokalizacja" className="hover:text-accent transition-colors">Lokalizacja</a>
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

      <div className="absolute top-28 md:top-32 left-6 md:left-12 right-6 md:right-12 z-10 flex justify-between items-start text-primary-foreground/80 text-[10px] uppercase tracking-[0.4em]">
        <span>Kosmetologia · Trychologia</span>
        <span className="hidden md:block text-right">N° 01<br/>Atelier Jagody</span>
      </div>

      <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-24 text-primary-foreground">
        <div className="max-w-5xl">
          <h1 className="text-[3.25rem] sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.95] tracking-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}>
            Włosy <em className="text-accent font-light italic">jak</em><br/>
            poezja <span className="inline-block align-middle h-px w-12 md:w-24 bg-accent mx-3 md:mx-5" /><span className="italic font-light">ciała</span>
          </h1>
          <div className="mt-10 grid md:grid-cols-3 gap-6 items-end max-w-4xl">
            <p className="md:col-span-2 text-base md:text-lg text-primary-foreground/85 leading-relaxed font-light max-w-xl">
              Gabinet kosmetologii i trychologii prowadzony przez Jagodę — z pasji do nauki o skórze głowy i miłości do prawdziwego piękna. Powolnie, świadomie, indywidualnie.
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
  const items = ["Mezoterapia mikroigłowa", "Karboksyterapia", "Head Spa", "Head & Face Spa", "Terapia powięzi", "Infuzja tlenowa"];
  return (
    <div className="bg-primary text-primary-foreground py-5 overflow-hidden border-y border-accent/20">
      <div className="flex gap-12 whitespace-nowrap" style={{ animation: "marquee 40s linear infinite" }}>
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
              <img src={jagodaPortrait} alt="Jagoda — kosmetolog i trycholog" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-background border border-accent/40 px-6 py-4 rounded-sm" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <p className="text-3xl text-primary" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 300 }}>
                Jagoda
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">Kosmetolog · Trycholog</p>
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
              Jestem Jagoda. Kosmetolog i trycholog. Pomagam moim pacjentkom i pacjentom zrozumieć ich włosy oraz skórę głowy — od mieszka po końcówkę.
            </p>
            <p>
              Każda wizyta to rozmowa, badanie i plan, który naprawdę da się wpleść w codzienność. Bez magicznych obietnic, za to z ciekawością i precyzją.
            </p>
          </div>

          <div className="mt-14 flex flex-wrap gap-3">
            {["Indywidualne podejście", "Sterylne procedury", "Naturalne marki", "Świadoma terapia"].map((t) => (
              <span key={t} className="text-xs uppercase tracking-[0.25em] border border-border px-4 py-2 rounded-full text-muted-foreground">{t}</span>
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
};

const services: Service[] = [
  {
    num: "01",
    title: "Konsultacja trychologiczna",
    desc: "Wnikliwa rozmowa, wywiad i ocena kondycji skóry głowy oraz włosów.",
    long: "Punkt wyjścia każdej terapii. Wspólnie omawiamy historię włosów, styl życia, suplementację i pielęgnację. Ocena kondycji skóry głowy oraz łodygi włosa, a na końcu — spójny plan działania dopasowany do Twoich potrzeb.",
    bullets: ["Szczegółowy wywiad trychologiczny", "Ocena skóry głowy i mieszków", "Plan terapii i pielęgnacji domowej", "Rekomendacje produktowe"],
  },
  {
    num: "02",
    title: "Zabieg trychologiczny skóry głowy",
    desc: "Oczyszczenie, dotlenienie i regeneracja mikrobiomu skóry głowy.",
    long: "Kompleksowy rytuał skupiony na skórze głowy — peeling dopasowany do potrzeb, oczyszczenie ujść mieszków, ampuła aktywna oraz delikatny masaż relaksujący. Pomocny przy łojotoku, łupieżu, świądzie i osłabionej kondycji.",
    bullets: ["Peeling enzymatyczny lub kwasowy", "Aktywne ampuły trychologiczne", "Masaż stymulujący mikrokrążenie", "Domowa rekomendacja kontynuacji"],
  },
  {
    num: "03",
    title: "Zabieg trychologiczny na łodygę włosa",
    desc: "Odbudowa struktury włosa — od skóry głowy po końcówki.",
    long: "Zabieg dedykowany włosom zniszczonym, suchym, porowatym i po procesach chemicznych. Wielowarstwowa odbudowa keratynowo-lipidowa, która przywraca gładkość, sprężystość i naturalny połysk pasm.",
    bullets: ["Odbudowa keratynowo-lipidowa", "Wygładzenie i nawilżenie", "Regeneracja porowatości", "Efekt zdrowego połysku"],
  },
  {
    num: "04",
    title: "Mezoterapia mikroigłowa",
    desc: "Iniekcyjna stymulacja mieszków koktajlami aktywnymi.",
    long: "Punktowe wprowadzenie koktajli witaminowo-peptydowych w skórę głowy. Stymuluje mieszki do pracy, wspiera odżywienie i wzrost włosa. Polecana przy wypadaniu, osłabieniu i utracie gęstości — najlepsze efekty daje seria zabiegów.",
    bullets: ["Koktajle witaminowo-peptydowe", "Pobudzenie mieszków włosowych", "Wsparcie przy wypadaniu", "Najlepiej w serii zabiegów"],
  },
  {
    num: "05",
    title: "Karboksyterapia",
    desc: "Aplikacja medycznego CO₂ stymulująca mikrokrążenie skóry głowy.",
    long: "Kontrolowane podanie dwutlenku węgla pod skórę głowy, które wywołuje silne dotlenienie i pobudzenie mikrokrążenia. Wspiera regenerację mieszków i poprawia warunki, w jakich rośnie włos.",
    bullets: ["Silne dotlenienie tkanek", "Pobudzenie mikrokrążenia", "Wsparcie regeneracji mieszków", "Synergiczne łączenie z mezoterapią"],
  },
  {
    num: "06",
    title: "Trychologiczne Head Spa",
    desc: "Rytuał pielęgnacji skóry głowy łączący zabieg z głębokim relaksem.",
    long: "Inspirowany japońskimi rytuałami zabieg, w którym troska o skórę głowy spotyka się z prawdziwym wyciszeniem. Etapowe oczyszczenie, ciepłe okłady, długi masaż i aromaterapia — efekt pielęgnacyjny i sensoryczny w jednym.",
    bullets: ["Wieloetapowe oczyszczenie", "Długi masaż relaksacyjny", "Ciepłe okłady i aromaterapia", "Czas dla siebie — krok po kroku"],
  },
  {
    num: "07",
    title: "Trychologiczne Head & Face Spa",
    desc: "Rozszerzony rytuał — skóra głowy, twarz, kark i dekolt.",
    long: "Pełna wersja rytuału Head Spa wzbogacona o pielęgnację twarzy, karku i dekoltu. Połączenie pracy trychologicznej z kosmetologiczną — dla osób, które chcą całościowego doświadczenia odprężenia i odbudowy.",
    bullets: ["Wszystko z Head Spa", "Pielęgnacja twarzy i dekoltu", "Masaż karku i obręczy barkowej", "Spójny rytuał piękna i relaksu"],
  },
  {
    num: "08",
    title: "Terapia powięzi obręczy barkowej",
    desc: "Praca manualna z napięciami karku, barków i górnej części pleców.",
    long: "Skupiona praca z powięzią karku, barków i górnej części pleców. Rozluźnia chronicznie napięte struktury, poprawia ukrwienie i przekłada się na lepszą kondycję skóry głowy oraz wyraźną ulgę po długim dniu pracy.",
    bullets: ["Rozluźnienie napiętej powięzi", "Poprawa ukrwienia", "Ulga w napięciach karku", "Wsparcie zdrowia skóry głowy"],
  },
  {
    num: "09",
    title: "Terapia powięzi skóry głowy",
    desc: "Manualna praca z powięzią czaszki — głębokie odprężenie i dotlenienie.",
    long: "Delikatna, ale głęboka praca manualna z powięzią pokrywającą czaszkę. Uwalnia mikronapięcia, poprawia mikrokrążenie skóry głowy i wprowadza w stan głębokiego rozluźnienia układu nerwowego.",
    bullets: ["Uwolnienie mikronapięć", "Poprawa mikrokrążenia", "Działanie wyciszające", "Komplementarna do Head Spa"],
  },
  {
    num: "10",
    title: "Infuzja tlenowa",
    desc: "Bezigłowe wprowadzenie aktywnych substancji w skórę głowy.",
    long: "Bezigłowa technologia, w której strumień tlenu wprowadza w skórę głowy aktywne substancje odżywcze. Niezwykle delikatna, kojąca i dobrze tolerowana — idealna jako uzupełnienie zabiegów trychologicznych.",
    bullets: ["Bezigłowe podanie składników", "Silne dotlenienie skóry głowy", "Działanie kojące i odżywcze", "Świetnie łączy się z innymi zabiegami"],
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
              Dziesięć ścieżek, <em className="text-accent">jeden cel</em> — Twoje włosy.
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 text-primary-foreground/70 font-light leading-relaxed">
            Każdy zabieg dopasowuję indywidualnie. Kliknij wybraną pozycję, aby poznać szczegóły. Po cennik i czas trwania zapraszam do kontaktu telefonicznego lub wiadomości na Instagramie.
          </p>
        </div>

        <ul className="divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">
          {services.map((s) => (
            <li key={s.num}>
              <button
                onClick={() => setOpen(s)}
                className="group w-full text-left grid grid-cols-12 gap-4 md:gap-8 py-7 md:py-10 items-center hover:bg-primary-foreground/5 transition-colors px-2"
              >
                <span className="col-span-2 md:col-span-1 text-accent text-sm tracking-[0.2em]">{s.num}</span>
                <div className="col-span-10 md:col-span-9">
                  <h3 className="text-2xl md:text-4xl tracking-tight group-hover:text-accent transition-colors" style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}>
                    {s.title}
                  </h3>
                  <p className="hidden md:block text-primary-foreground/60 mt-2 font-light max-w-2xl">{s.desc}</p>
                </div>
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
                <div className="flex flex-wrap items-end justify-between gap-4 pt-6 border-t border-border">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Cennik i czas trwania</p>
                    <p className="text-base mt-1 font-light">Indywidualnie — porozmawiajmy o szczegółach.</p>
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
            Wierzę, że zdrowe włosy nie powstają w jednej wizycie. Powstają z rytuałów, składników, snu, oddechu. Łączę kosmetologię z trychologią — bo skóra głowy zasługuje na taką samą uwagę, jak twarz.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-px bg-border">
            {["Świadome składniki", "Sterylne procedury", "Bez obietnic bez pokrycia", "Twoje tempo"].map((t) => (
              <div key={t} className="bg-background p-5 text-sm font-light tracking-wide">— {t}</div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
          <img src={botanicals} alt="Botaniczne kosmetyki" loading="lazy" width={1024} height={1024} className="w-full aspect-[3/4] object-cover rounded-sm row-span-2" style={{ boxShadow: "var(--shadow-soft)" }} />
          <img src={hairDetail} alt="Detal lśniących włosów" loading="lazy" width={1024} height={1280} className="w-full aspect-square object-cover rounded-sm mt-10" style={{ boxShadow: "var(--shadow-elegant)" }} />
          <div className="bg-primary text-primary-foreground rounded-sm p-6 flex flex-col justify-end aspect-square">
            <p className="text-2xl md:text-3xl leading-tight" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 300 }}>
              „Słucham włosów — zanim zacznę je leczyć."
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mt-4">— Jagoda</p>
          </div>
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
              Znajdź mnie <em className="text-accent">na mapie</em>.
            </h2>
          </div>
          <div className="md:col-span-5 text-muted-foreground font-light">
            <p>Dokładny adres gabinetu przekazuję po potwierdzeniu rezerwacji.</p>
            <p className="mt-2 text-sm">Skontaktuj się ze mną telefonicznie lub na Instagramie, aby umówić wizytę.</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-sm border border-border relative" style={{ boxShadow: "var(--shadow-soft)" }}>
          <iframe
            title="Lokalizacja gabinetu Jagody"
            src="https://www.google.com/maps?q=Jagoda+Kosmetologia+Trychologia&output=embed"
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
            Odezwę się najszybciej, jak to możliwe, by wspólnie znaleźć dogodny termin wizyty.
          </p>
          <ul className="mt-12 space-y-5">
            <li className="flex items-center gap-4 border-b border-primary-foreground/15 pb-4">
              <Phone className="h-4 w-4 text-accent" />
              <a href={`tel:${PHONE_RAW}`} className="hover:text-accent transition-colors">{PHONE}</a>
            </li>
            <li className="flex items-center gap-4 border-b border-primary-foreground/15 pb-4">
              <Mail className="h-4 w-4 text-accent" />
              <a href={`mailto:${EMAIL}`} className="hover:text-accent transition-colors break-all">{EMAIL}</a>
            </li>
            <li className="flex items-center gap-4 border-b border-primary-foreground/15 pb-4">
              <Instagram className="h-4 w-4 text-accent" />
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">{INSTAGRAM_HANDLE}</a>
            </li>
          </ul>
          <div className="flex gap-3 mt-10">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Jagody"
              className="h-11 w-11 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Wyślij e-mail"
              className="h-11 w-11 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={`tel:${PHONE_RAW}`}
              aria-label="Zadzwoń"
              className="h-11 w-11 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all"
            >
              <Phone className="h-4 w-4" />
            </a>
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
                  <Input id="name" placeholder="Anna Kowalska" maxLength={100} className="mt-2 h-12 rounded-sm border-x-0 border-t-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-accent shadow-none" required />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Telefon</Label>
                  <Input id="phone" type="tel" maxLength={20} placeholder="+48 ___ ___ ___" className="mt-2 h-12 rounded-sm border-x-0 border-t-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-accent shadow-none" />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">E-mail</Label>
                <Input id="email" type="email" maxLength={255} placeholder="anna@example.com" className="mt-2 h-12 rounded-sm border-x-0 border-t-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-accent shadow-none" required />
              </div>
              <div>
                <Label htmlFor="treatment" className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Interesujący zabieg</Label>
                <Input id="treatment" maxLength={120} placeholder="np. Konsultacja trychologiczna" className="mt-2 h-12 rounded-sm border-x-0 border-t-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-accent shadow-none" />
              </div>
              <div>
                <Label htmlFor="message" className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Wiadomość</Label>
                <Textarea id="message" rows={5} maxLength={1000} placeholder="Opowiedz mi o swoich włosach..." className="mt-2 rounded-sm border-x-0 border-t-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-accent shadow-none resize-none" required />
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
        <span style={{ fontFamily: "var(--font-display)" }} className="text-base text-foreground">Jagoda<span className="text-accent">.</span> <span className="text-muted-foreground text-xs uppercase tracking-[0.3em] ml-2">Kosmetologia · Trychologia</span></span>
        <span className="uppercase tracking-[0.3em]">© {new Date().getFullYear()} — Atelier zdrowych włosów</span>
      </div>
    </footer>
  );
}
