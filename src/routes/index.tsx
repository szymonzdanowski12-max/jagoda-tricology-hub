import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Sparkles, Leaf, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 py-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-primary" />
        <span className="font-display text-xl font-semibold tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
          Jagoda <span className="text-primary">Trycholog</span>
        </span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm">
        <a href="#o-mnie" className="hover:text-primary transition-colors">O mnie</a>
        <a href="#uslugi" className="hover:text-primary transition-colors">Usługi</a>
        <a href="#kontakt" className="hover:text-primary transition-colors">Kontakt</a>
      </nav>
      <a href="#kontakt">
        <Button variant="default" className="rounded-full">Umów wizytę</Button>
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroHair} alt="Zdrowe lśniące włosy" width={1536} height={1024} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>
      <div className="relative z-10 px-6 md:px-12 max-w-4xl">
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-6">Gabinet Trychologiczny</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] mb-6">
          Zdrowe włosy <br/> zaczynają się <em className="text-primary not-italic">u korzeni</em>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
          Profesjonalna diagnostyka skóry głowy oraz indywidualne terapie dopasowane do Twoich potrzeb. Odzyskaj pewność siebie razem z Jagodą.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#kontakt"><Button size="lg" className="rounded-full px-8 h-12">Zarezerwuj konsultację</Button></a>
          <a href="#uslugi"><Button size="lg" variant="outline" className="rounded-full px-8 h-12 bg-background/50 backdrop-blur">Poznaj zabiegi</Button></a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="o-mnie" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src={trichologist} alt="Jagoda — trycholog" loading="lazy" width={1024} height={1024} className="rounded-2xl w-full" style={{ boxShadow: "var(--shadow-soft)" }} />
          <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl hidden md:block">
            <p className="text-3xl font-display font-semibold">8+</p>
            <p className="text-xs uppercase tracking-wider">lat doświadczenia</p>
          </div>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">O mnie</p>
          <h2 className="text-4xl md:text-5xl font-medium mb-6">Pasja do zdrowych włosów</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Jestem Jagoda — certyfikowany trycholog z pasją do pomagania kobietom i mężczyznom w odzyskaniu zdrowia ich włosów. Łączę wiedzę naukową z holistycznym podejściem.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            W moim gabinecie znajdziesz spokój, profesjonalizm oraz indywidualne podejście do każdego problemu — od wypadania włosów po podrażnienia skóry głowy.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: HeartPulse, title: "Diagnostyka trichoskopowa", desc: "Profesjonalne badanie skóry głowy i włosów z użyciem dermatoskopu cyfrowego." },
    { icon: Leaf, title: "Terapie regenerujące", desc: "Mezoterapia, peelingi enzymatyczne i zabiegi wzmacniające cebulki włosów." },
    { icon: Sparkles, title: "Plany pielęgnacji", desc: "Spersonalizowane programy domowej pielęgnacji oparte o naturalne kosmetyki." },
  ];
  return (
    <section id="uslugi" className="py-24 md:py-32 px-6 md:px-12 bg-muted/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Usługi</p>
          <h2 className="text-4xl md:text-5xl font-medium">Zabiegi szyte na miarę</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-background p-8 rounded-2xl border border-border hover:-translate-y-1 transition-transform" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-6" style={{ background: "var(--gradient-warm)" }}>
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-medium mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 rounded-3xl overflow-hidden">
          <img src={treatments} alt="Naturalne kosmetyki do włosów" loading="lazy" width={1024} height={1024} className="w-full h-64 md:h-96 object-cover" />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="kontakt" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Kontakt</p>
          <h2 className="text-4xl md:text-5xl font-medium mb-6">Umów wizytę</h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Wypełnij formularz, a skontaktuję się z Tobą w ciągu 24 godzin, aby omówić szczegóły konsultacji.
          </p>
          <ul className="space-y-5">
            <li className="flex items-center gap-4">
              <span className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center"><Phone className="h-4 w-4 text-primary" /></span>
              <a href={`tel:${PHONE.replace(/\s/g,"")}`} className="hover:text-primary">{PHONE}</a>
            </li>
            <li className="flex items-center gap-4">
              <span className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center"><Mail className="h-4 w-4 text-primary" /></span>
              <a href={`mailto:${EMAIL}`} className="hover:text-primary">{EMAIL}</a>
            </li>
            <li className="flex items-center gap-4">
              <span className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center"><MapPin className="h-4 w-4 text-primary" /></span>
              <span>ul. Kwiatowa 12, Warszawa</span>
            </li>
          </ul>
          <div className="flex gap-3 mt-10">
            {[
              { icon: Instagram, href: "https://instagram.com" },
              { icon: Facebook, href: "https://facebook.com" },
              { icon: Youtube, href: "https://youtube.com" },
            ].map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label="Social media"
                className="h-11 w-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform">
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
            <Button type="submit" size="lg" className="w-full rounded-xl h-12">
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
