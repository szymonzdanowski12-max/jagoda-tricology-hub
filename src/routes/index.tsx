import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Sparkles, Leaf, HeartPulse, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import heroHair from "@/assets/hero-hair.jpg";
import trichologist from "@/assets/trichologist.jpg";
import treatments from "@/assets/treatments.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Trycholog Jagoda — Zdrowie i piękno Twoich włosów" },
      { name: "description", content: "Gabinet trychologiczny Jagody. Diagnostyka skóry głowy, terapie wzmacniające i indywidualne plany pielęgnacji włosów." },
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
      <About />
      <Services />
      <LocationMap />
      <ContactForm />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-6 md:px-12 py-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-accent" />
        <span className="text-xl font-semibold tracking-wide text-primary-foreground" style={{ fontFamily: "var(--font-display)" }}>
          Jagoda <span className="text-accent italic">Trycholog</span>
        </span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm text-primary-foreground/90">
        <a href="#o-mnie" className="hover:text-accent transition-colors">O mnie</a>
        <a href="#uslugi" className="hover:text-accent transition-colors">Usługi</a>
        <a href="#lokalizacja" className="hover:text-accent transition-colors">Lokalizacja</a>
        <a href="#kontakt" className="hover:text-accent transition-colors">Kontakt</a>
      </nav>
      <a href="#kontakt">
        <Button variant="default" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">Umów wizytę</Button>
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroHair} alt="Zdrowe lśniące włosy" width={1536} height={1024} className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
      </div>
      <div className="relative z-10 px-6 md:px-12 max-w-4xl text-primary-foreground">
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-accent mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-accent inline-block" /> Gabinet Trychologiczny
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.02] mb-8" style={{ fontFamily: "var(--font-display)" }}>
          Zdrowe włosy <br/> zaczynają się <em className="text-accent">u korzeni</em>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/85 max-w-xl mb-10 leading-relaxed">
          Profesjonalna diagnostyka skóry głowy oraz indywidualne terapie dopasowane do Twoich potrzeb. Odzyskaj pewność siebie razem z Jagodą.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#kontakt"><Button size="lg" className="rounded-full px-8 h-12 bg-accent text-accent-foreground hover:bg-accent/90 shadow-2xl">Zarezerwuj konsultację</Button></a>
          <a href="#uslugi"><Button size="lg" variant="outline" className="rounded-full px-8 h-12 bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground backdrop-blur">Poznaj zabiegi</Button></a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 text-xs tracking-[0.3em] uppercase animate-pulse">↓ Przewiń</div>
    </section>
  );
}

function About() {
  return (
    <section id="o-mnie" className="py-24 md:py-32 px-6 md:px-12 relative">
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-warm)" }} />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-accent/40" />
          <img src={trichologist} alt="Jagoda — trycholog" loading="lazy" width={1024} height={1024} className="rounded-2xl w-full relative" style={{ boxShadow: "var(--shadow-soft)" }} />
          <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl hidden md:block" style={{ boxShadow: "var(--shadow-glow)" }}>
            <p className="text-4xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>8+</p>
            <p className="text-xs uppercase tracking-wider">lat doświadczenia</p>
          </div>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">O mnie</p>
          <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ fontFamily: "var(--font-display)" }}>Pasja do zdrowych włosów</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Jestem Jagoda — certyfikowany trycholog z pasją do pomagania kobietom i mężczyznom w odzyskaniu zdrowia ich włosów. Łączę wiedzę naukową z holistycznym podejściem.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            W moim gabinecie znajdziesz spokój, profesjonalizm oraz indywidualne podejście do każdego problemu — od wypadania włosów po podrażnienia skóry głowy.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
            <div><p className="text-3xl text-primary" style={{ fontFamily: "var(--font-display)" }}>500+</p><p className="text-xs text-muted-foreground uppercase tracking-wider">pacjentów</p></div>
            <div><p className="text-3xl text-primary" style={{ fontFamily: "var(--font-display)" }}>15+</p><p className="text-xs text-muted-foreground uppercase tracking-wider">terapii</p></div>
            <div><p className="text-3xl text-primary" style={{ fontFamily: "var(--font-display)" }}>98%</p><p className="text-xs text-muted-foreground uppercase tracking-wider">poleceń</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Service = {
  icon: typeof HeartPulse;
  title: string;
  desc: string;
  long: string;
  bullets: string[];
  duration: string;
  price: string;
};

const services: Service[] = [
  {
    icon: HeartPulse,
    title: "Diagnostyka trichoskopowa",
    desc: "Profesjonalne badanie skóry głowy i włosów z użyciem dermatoskopu cyfrowego.",
    long: "Wnikliwe badanie kondycji skóry głowy i mieszków włosowych przy użyciu specjalistycznego dermatoskopu cyfrowego z 60-200x powiększeniem. Pozwala dokładnie określić przyczynę problemu i zaplanować skuteczną terapię.",
    bullets: ["Cyfrowe zdjęcia w dużym powiększeniu", "Ocena stanu mieszków i łodyg włosów", "Pisemny raport i plan działania", "Dobór preparatów do domowej pielęgnacji"],
    duration: "60 min",
    price: "od 250 zł",
  },
  {
    icon: Leaf,
    title: "Terapie regenerujące",
    desc: "Mezoterapia, peelingi enzymatyczne i zabiegi wzmacniające cebulki włosów.",
    long: "Kompleksowe zabiegi regenerujące skórę głowy: mezoterapia igłowa z koktajlami witaminowymi, delikatne peelingi enzymatyczne oraz infuzje wzmacniające cebulki. Idealne przy wypadaniu i osłabieniu włosów.",
    bullets: ["Mezoterapia igłowa skóry głowy", "Peeling enzymatyczny i kwasowy", "Stymulacja mieszków włosowych", "Seria 4-6 zabiegów dla efektu"],
    duration: "75 min",
    price: "od 350 zł",
  },
  {
    icon: Sparkles,
    title: "Plany pielęgnacji",
    desc: "Spersonalizowane programy domowej pielęgnacji oparte o naturalne kosmetyki.",
    long: "Indywidualnie zaprojektowany plan pielęgnacji domowej dopasowany do Twojego typu włosów, stylu życia i celów. Pracujemy wyłącznie na sprawdzonych, naturalnych kosmetykach trychologicznych.",
    bullets: ["Indywidualny dobór kosmetyków", "Harmonogram pielęgnacji tygodniowej", "Wsparcie suplementacyjne", "Konsultacje kontrolne online"],
    duration: "45 min",
    price: "od 180 zł",
  },
];

function Services() {
  const [open, setOpen] = useState<Service | null>(null);
  return (
    <section id="uslugi" className="py-24 md:py-32 px-6 md:px-12 bg-muted/40 relative overflow-hidden">
      <div className="absolute -left-40 top-40 w-[500px] h-[500px] rounded-full opacity-40 blur-3xl" style={{ background: "var(--gradient-warm)" }} />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">Usługi</p>
          <h2 className="text-4xl md:text-5xl font-medium" style={{ fontFamily: "var(--font-display)" }}>Zabiegi szyte na miarę</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Kliknij wybrany zabieg, aby poznać szczegóły, czas trwania oraz cenę.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <button
              key={s.title}
              onClick={() => setOpen(s)}
              className="group text-left bg-background p-8 rounded-2xl border border-border hover:-translate-y-2 hover:border-accent transition-all duration-300 relative overflow-hidden"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "var(--gradient-warm)", mixBlendMode: "multiply" }} />
              <div className="relative">
                <div className="h-14 w-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ background: "var(--gradient-warm)" }}>
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-medium mb-3" style={{ fontFamily: "var(--font-display)" }}>{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all">
                  Czytaj więcej <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </button>
          ))}
        </div>
        <div className="mt-20 rounded-3xl overflow-hidden relative" style={{ boxShadow: "var(--shadow-soft)" }}>
          <img src={treatments} alt="Naturalne kosmetyki do włosów" loading="lazy" width={1024} height={1024} className="w-full h-64 md:h-96 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent flex items-center p-10 md:p-16">
            <div className="max-w-md text-primary-foreground">
              <h3 className="text-3xl md:text-4xl mb-3" style={{ fontFamily: "var(--font-display)" }}>Naturalna pielęgnacja</h3>
              <p className="text-primary-foreground/85">Korzystam wyłącznie ze sprawdzonych, dermatologicznie testowanych kosmetyków.</p>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-2xl rounded-3xl p-0 overflow-hidden border-accent/30">
          {open && (
            <>
              <div className="p-8 md:p-10" style={{ background: "var(--gradient-warm)" }}>
                <div className="h-14 w-14 rounded-2xl bg-background flex items-center justify-center mb-4">
                  <open.icon className="h-7 w-7 text-primary" />
                </div>
                <DialogHeader>
                  <DialogTitle className="text-3xl md:text-4xl text-primary" style={{ fontFamily: "var(--font-display)" }}>{open.title}</DialogTitle>
                  <DialogDescription className="text-foreground/70 text-base mt-2">{open.long}</DialogDescription>
                </DialogHeader>
              </div>
              <div className="p-8 md:p-10 space-y-6">
                <ul className="space-y-3">
                  {open.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Czas / Cena</p>
                    <p className="text-lg font-medium">{open.duration} · {open.price}</p>
                  </div>
                  <a href="#kontakt" onClick={() => setOpen(null)}>
                    <Button className="rounded-full bg-primary">Umów zabieg</Button>
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

function LocationMap() {
  return (
    <section id="lokalizacja" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">Lokalizacja</p>
          <h2 className="text-4xl md:text-5xl font-medium" style={{ fontFamily: "var(--font-display)" }}>Znajdź nas na mapie</h2>
          <p className="text-muted-foreground mt-4">{ADDRESS}</p>
        </div>
        <div className="rounded-3xl overflow-hidden border border-border relative" style={{ boxShadow: "var(--shadow-soft)" }}>
          <iframe
            title="Mapa gabinetu"
            src="https://www.google.com/maps?q=Kwiatowa+12+Warszawa&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[400px] md:h-[500px] border-0"
          />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="kontakt" className="py-24 md:py-32 px-6 md:px-12 bg-muted/40 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-warm)" }} />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 relative">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">Kontakt</p>
          <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ fontFamily: "var(--font-display)" }}>Umów wizytę</h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Wypełnij formularz, a skontaktuję się z Tobą w ciągu 24 godzin, aby omówić szczegóły konsultacji.
          </p>
          <ul className="space-y-5">
            <li className="flex items-center gap-4">
              <span className="h-11 w-11 rounded-full bg-background flex items-center justify-center" style={{ boxShadow: "var(--shadow-elegant)" }}><Phone className="h-4 w-4 text-primary" /></span>
              <a href={`tel:${PHONE.replace(/\s/g,"")}`} className="hover:text-primary">{PHONE}</a>
            </li>
            <li className="flex items-center gap-4">
              <span className="h-11 w-11 rounded-full bg-background flex items-center justify-center" style={{ boxShadow: "var(--shadow-elegant)" }}><Mail className="h-4 w-4 text-primary" /></span>
              <a href={`mailto:${EMAIL}`} className="hover:text-primary">{EMAIL}</a>
            </li>
            <li className="flex items-center gap-4">
              <span className="h-11 w-11 rounded-full bg-background flex items-center justify-center" style={{ boxShadow: "var(--shadow-elegant)" }}><MapPin className="h-4 w-4 text-primary" /></span>
              <span>{ADDRESS}</span>
            </li>
          </ul>
          <div className="flex gap-3 mt-10">
            {[
              { icon: Instagram, href: "https://instagram.com" },
              { icon: Facebook, href: "https://facebook.com" },
              { icon: Youtube, href: "https://youtube.com" },
            ].map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label="Social media"
                className="h-11 w-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 hover:bg-accent hover:text-accent-foreground transition-all">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="bg-card p-8 md:p-10 rounded-3xl border border-border"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <div className="space-y-5">
            <div>
              <Label htmlFor="name">Imię i nazwisko</Label>
              <Input id="name" placeholder="Anna Kowalska" className="mt-2 h-12 rounded-xl" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="anna@email.com" className="mt-2 h-12 rounded-xl" required />
              </div>
              <div>
                <Label htmlFor="phone">Telefon</Label>
                <Input id="phone" type="tel" placeholder="+48 ___ ___ ___" className="mt-2 h-12 rounded-xl" />
              </div>
            </div>
            <div>
              <Label htmlFor="message">Opisz swój problem</Label>
              <Textarea id="message" rows={5} placeholder="Krótko opisz, z czym się zmagasz..." className="mt-2 rounded-xl" />
            </div>
            <Button type="submit" size="lg" className="w-full rounded-xl h-12 bg-primary">
              {sent ? "Dziękuję! Odezwę się wkrótce ✿" : "Wyślij zgłoszenie"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 md:px-12 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Trycholog Jagoda · Wszystkie prawa zastrzeżone
    </footer>
  );
}
