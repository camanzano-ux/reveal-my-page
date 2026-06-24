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
  Baby,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
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
    id: "pgtseq",
    title: "PGTseq",
    subtitle: "Sequenciamento de DNA embrionário",
    description:
      "Tecnologia de ponta para análise genética pré-implantacional, aumentando as chances de sucesso na reprodução assistida.",
    icon: <Dna className="h-8 w-8 text-teal-600" />,
    features: [
      "Detecção de aneuploidias",
      "Análise de rearranjos cromossômicos",
      "Screening de doenças monogênicas",
      "Maior taxa de implantação saudável",
    ],
  },
  {
    id: "pgt-a",
    title: "PGT-A",
    subtitle: "Screening de aneuploidia",
    description:
      "Identifica alterações no número de cromossomos nos embriões, reduzindo o risco de abortamento e síndromes cromossômicas.",
    icon: <Microscope className="h-8 w-8 text-teal-600" />,
    features: [
      "Aumento da taxa de gestação",
      "Redução de abortamentos",
      "Melhor seleção embrionária",
      "Resultado confiável em 24h",
    ],
  },
  {
    id: "pgt-m",
    title: "PGT-M",
    subtitle: "Doenças monogênicas",
    description:
      "Diagnóstico genético para casais portadores de doenças hereditárias, assegurando embriões livres de condições graves.",
    icon: <HeartPulse className="h-8 w-8 text-teal-600" />,
    features: [
      "Triagem de doenças raras",
      "Compatibilidade HLA",
      "Testes personalizados",
      "Acompanhamento especializado",
    ],
  },
  {
    id: "pgt-sr",
    title: "PGT-SR",
    subtitle: "Rearranjos estruturais",
    description:
      "Análise de translocações e rearranjos cromossômicos em casais com histórico de infertilidade ou perdas gestacionais.",
    icon: <ShieldCheck className="h-8 w-8 text-teal-600" />,
    features: [
      "Detecção de translocações",
      "Análise de inversões",
      "Redução de riscos de perda",
      "Relatório detalhado",
    ],
  },
];

const stats = [
  { value: "99%", label: "Precisão nas análises" },
  { value: "10k+", label: "Testes realizados" },
  { value: "50+", label: "Centros parceiros" },
  { value: "24h", label: "Resultado prioritário" },
];

const scienceSteps = [
  {
    title: "Coleta",
    description: "Biópsia embrionária segura e minimamente invasiva em laboratório parceiro.",
    icon: <FlaskConical className="h-6 w-6 text-white" />,
  },
  {
    title: "Sequenciamento",
    description: "Leitura completa do DNA com plataformas NGS de última geração.",
    icon: <Dna className="h-6 w-6 text-white" />,
  },
  {
    title: "Análise",
    description: "Interpretação por bioinformata e equipe médica especializada.",
    icon: <Microscope className="h-6 w-6 text-white" />,
  },
  {
    title: "Relatório",
    description: "Laudo claro e orientado para auxiliar na decisão clínica.",
    icon: <Award className="h-6 w-6 text-white" />,
  },
];

export default function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.15 }
    );

    const sections = document.querySelectorAll("section[data-animate]");
    sections.forEach((section) => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <img src="/logo-v1.png" alt="TheraSeq" className="h-10 w-auto object-contain" />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(l.id);
                }}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-600"
              >
                {l.label}
              </a>
            ))}
            <Button
              onClick={() => scrollTo("contato")}
              className="bg-teal-600 text-white hover:bg-teal-700"
            >
              Solicitar exame
            </Button>
          </nav>

          <button
            className="rounded-md p-2 text-slate-600 hover:bg-slate-100 md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(l.id);
                  }}
                  className="text-base font-medium text-slate-600 hover:text-teal-600"
                >
                  {l.label}
                </a>
              ))}
              <Button
                onClick={() => scrollTo("contato")}
                className="w-full bg-teal-600 text-white hover:bg-teal-700"
              >
                Solicitar exame
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="hero"
        data-animate
        className={`relative overflow-hidden bg-white transition-all duration-1000 ease-out ${
          visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700">
              <Dna className="h-4 w-4" />
              Genética reprodutiva de precisão
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              TheraSeq: ciência a favor da{
