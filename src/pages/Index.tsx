import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dna,
  FlaskConical,
  Users,
  Award,
  Microscope,
  HeartPulse,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Sparkles
} from "lucide-react";

const navLinks = [
  { id: "sobre", label: "Sobre" },
  { id: "ciencia", label: "Ciência" },
  { id: "exames", label: "Exames" },
  { id: "familia", label: "Família" },
  { id: "contato", label: "Contato" },
];

const exames = [
  {
    id: "pgt-a",
    title: "PGT-A",
    subtitle: "Screening de aneuploidia",
    description: "Identifica alterações no número de cromossomos nos embriões, reduzindo o risco de abortamento.",
    icon: <Dna className="h-8 w-8 text-teal-600" />,
  },
  {
    id: "pgt-m",
    title: "PGT-M",
    subtitle: "Doenças monogênicas",
    description: "Diagnóstico genético para casais portadores de doenças hereditárias.",
    icon: <HeartPulse className="h-8 w-8 text-teal-600" />,
  },
  {
    id: "pgt-sr",
    title: "PGT-SR",
    subtitle: "Rearranjos estruturais",
    description: "Análise de translocações e rearranjos cromossômicos em casais com histórico de infertilidade.",
    icon: <ShieldCheck className="h-8 w-8 text-teal-600" />,
  }
];

export default function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className={`fixed top-0 z-50 w-full transition-all ${scrolled ? "bg-white/90 backdrop-blur shadow-sm py-2" : "bg-transparent py-4"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <img src="/logo-v1.png" alt="TheraSeq" className="h-10 w-auto" />
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={(e) => { e.preventDefault(); scrollTo(l.id); }} className="text-sm font-medium hover:text-teal-600 transition-colors">
                {l.label}
              </a>
            ))}
            <Button onClick={() => scrollTo("contato")} className="bg-teal-600 hover:bg-teal-700">Contato</Button>
          </nav>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>      <main>
        <section id="hero" className="relative pt-32 pb-20 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700">
                <Sparkles className="h-4 w-4" /> Juno Genetics by TheraSeq
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 lg:text-6xl">
                Avançando a ciência de <span className="text-teal-600">formar famílias</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-lg">
                Tecnologia NGS de última geração com o mais alto padrão da América Latina para análises genéticas reprodutivas.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollTo("exames")} className="bg-teal-600 hover:bg-teal-700">Ver Exames</Button>
                <Button size="lg" variant="outline" onClick={() => scrollTo("sobre")}>Saiba Mais</Button>
              </div>
            </div>
            <div className="relative">
              <img src="/thera.gif" alt="Animação TheraSeq" className="rounded-2xl shadow-2xl w-full" />
            </div>
          </div>
        </section>

        <section id="exames" className="py-20 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Testes PGTseq</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {exames.map((ex) => (
                <Card key={ex.id} className="border-none shadow-md hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 space-y-4">
                    <div className="p-3 bg-teal-50 w-fit rounded-xl">{ex.icon}</div>
                    <h3 className="text-xl font-bold">{ex.title}</h3>
                    <p className="text-slate-600 text-sm">{ex.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <img src="/logo-v2.png" alt="TheraSeq" className="h-12 w-auto mx-auto mb-6 opacity-80" />
          <p className="text-slate-400 text-sm">© 2026 TheraSeq — Tecnologia a favor da vida.</p>
        </div>
      </footer>
    </div>
  );
}
