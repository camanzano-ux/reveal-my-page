import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Dna,
  Microscope,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Award,
  Users,
  ArrowRight,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import logoV1 from "@/assets/logo-v1.png";
import logoV2 from "@/assets/logo-v2.png";
import heroDna from "@/assets/hero-banner.jpg";
import theraGif from "@/assets/thera.gif";
import familyImg from "@/assets/family.jpg";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Mensagem enviada! Nossa equipe entrará em contato em breve.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 1200);
  };

  const navLinks = [
    { id: "sobre", label: "Sobre" },
    { id: "testes", label: "Testes PGTseq" },
    { id: "ciencia", label: "Ciência" },
    { id: "pacientes", label: "Pacientes" },
    { id: "contato", label: "\n" },
  ];

  const tests = [
    {
      tag: "PGTseq-A",
      title: "Aneuploidias",
      desc: "O método mais validado de teste genético pré-implantacional para aneuploidia em pacientes em FIV — exclusivo TheraSeq.",
      icon: Dna,
    },
    {
      tag: "PGTseq-M",
      title: "Doenças Monogênicas",
      desc: "Teste genético único, personalizado para cada família, projetado para detectar alterações associadas a distúrbios de gene único.",
      icon: HeartPulse,
    },
    {
      tag: "PGTseq-SR",
      title: "Rearranjos Estruturais",
      desc: "Teste para indivíduos com rearranjo cromossômico — identifica material cromossômico extra ou ausente nas biópsias embrionárias.",
      icon: Microscope,
    },
  ];

  const stats = [
    { value: "99.0%", label: "Precisão analítica" },
    { value: "24 H", label: "Suporte analítico" },
  ];

  const differentials = [
    { icon: Award, title: "Líder na América Latina", desc: "Tecnologia NGS de ponta com padrões internacionais." },
    { icon: ShieldCheck, title: "Resultados confiáveis", desc: "Validação científica rigorosa e reprodutibilidade." },
    { icon: Sparkles, title: "Inovação contínua", desc: "Pesquisa proprietária e algoritmos próprios." },
    { icon: Users, title: "Suporte humanizado", desc: "Geneticistas seniores acompanhando cada caso." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HEADER */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-base ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-soft py-2"
            : "bg-white/40 backdrop-blur-md py-3"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#home" onClick={(e) => handleNav(e, "home")} className="flex items-center gap-2">
            <img src={logoV1} alt="TheraSeq" className="h-12 md:h-16 w-auto drop-shadow-md" />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => handleNav(e, l.id)}
                className="text-sm font-semibold text-navy/80 hover:text-gradient transition-base"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={(e) => handleNav(e, "contato")}
              className="bg-gradient-brand-deep text-primary-foreground px-5 py-2.5 rounded-full font-semibold text-sm shadow-soft hover:shadow-glow hover:scale-105 transition-base"
            >
              Contato
            </a>
          </nav>
          <button
            aria-label="Menu"
            className="lg:hidden p-2 rounded-full bg-white/70 text-navy"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border">
            <ul className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => handleNav(e, l.id)}
                    className="block py-2 font-semibold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main>
        {/* HERO */}
        <section
          id="home"
          className="relative min-h-screen flex items-center text-navy overflow-hidden pt-28"
        >
          {/* Ethereal background image (banner style) */}
          <img
            src={heroDna}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            width={1920}
            height={1280}
          />
          {/* Soft white gradient to keep text readable on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-glow opacity-40 mix-blend-overlay" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-white/60 rounded-full px-4 py-2 mb-6 shadow-soft">
                <Sparkles className="h-4 w-4 text-teal-deep" />
                <span className="text-sm font-semibold text-navy">Juno Genetics available in LATAM by TheraSeq</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.02] mb-6 text-navy">
                Avançando a ciência de{" "}
                <span className="text-gradient">formar famílias</span>
              </h1>
              <p className="text-lg md:text-xl text-navy/75 mb-10 max-w-2xl leading-relaxed whitespace-pre-line">
                A TheraSeq é um laboratório de análises genéticas dedicado a&nbsp; clínicas e laboratórios de saúde reprodutiva e seus pacientes — com tecnologia de sequenciamento de última geração (NGS) e o mais alto padrão da América Latina, além de utilizar uma das únicas plataformas{"\n"}com validação analítica e clínica a nível mundial (Juno Genetics).
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#testes"
                  onClick={(e) => handleNav(e, "testes")}
                  className="inline-flex items-center gap-2 bg-gradient-brand-deep text-white px-7 py-4 rounded-full font-bold shadow-glow hover:scale-105 transition-base"
                >
                  Conheça os exames PGTseq <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#ciencia"
                  onClick={(e) => handleNav(e, "ciencia")}
                  className="inline-flex items-center gap-2 border-2 border-navy/20 bg-white/60 backdrop-blur text-navy px-7 py-4 rounded-full font-bold hover:bg-white transition-base"
                >
                  Nossa tecnologia
                </a>
              </div>

              {/* Stats */}
              <div className="flex flex-col sm:flex-row gap-8 mt-16 max-w-2xl">
                {stats.map((s) => (
                  <div key={s.label} className="border-l-2 border-teal-deep/40 pl-4 flex items-baseline gap-3">
                    <span className="text-3xl md:text-4xl font-extrabold text-gradient leading-none shrink-0">
                      {s.value}
                    </span>
                    <span className="text-sm md:text-base text-navy/75 font-semibold leading-tight">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="py-24 md:py-32 bg-gradient-soft">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-bold tracking-widest text-gradient uppercase">Sobre Nós</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-navy">
                Progresso na <span className="text-gradient">ciência reprodutiva</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-5 leading-relaxed whitespace-pre-line">
                Thera: Arquétipo da cura, cuidado e proteção.{"\n"}
                Seq: Linguagem do sequenciamento e tecnologia{"\n\n"}
                TheraSeq é a ponte entre o invisível e o possível.&nbsp;{"\n"}
                É onde o rigor científico convive com a sensibilidade de quem entende que cada embrião carrega não apenas cromossomos, mas expectativas, histórias e futuros inteiros.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Mais do que um nome, TheraSeq é um propósito: cuidado e ciência, coração e código, entrelaçados em um caminho preciso do embrião à vida.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Tecnologia NGS proprietária",
                  "Aconselhamento genético especializado",
                  "Padrões internacionais de qualidade",
                  "Parceria com clínicas em toda Latam",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-teal-deep mt-0.5 shrink-0" />
                    <span className="text-foreground/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-brand opacity-20 blur-3xl rounded-full animate-pulse-glow" />
              <img
                src={theraGif.url}
                alt="Laboratório TheraSeq"
                className="relative rounded-3xl shadow-glow w-full"
                loading="lazy"
                width={1024}
                height={768}
              />
              <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl shadow-card p-5 flex items-center gap-3">
                <div className="bg-gradient-brand-deep p-3 rounded-xl">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-navy">Líder Latam</div>
                  <div className="text-xs text-muted-foreground">Em genética reprodutiva</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTES */}
        <section id="testes" className="py-24 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-glow opacity-30 pointer-events-none" />
          <div className="container mx-auto px-6 relative">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-bold tracking-widest text-gradient uppercase">Exames & Testes</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-5 text-navy">
                Testes pré-implantacionais para{" "}
                <span className="text-gradient">decisões informadas</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Soluções avançadas em PGT para clínicas de reprodução assistida e suas pacientes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {tests.map((t, i) => {
                const Icon = t.icon;
                return (
                  <div
                    key={t.tag}
                    className="group relative bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-base hover:-translate-y-2 border border-border/50 overflow-hidden"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-brand rounded-full opacity-10 group-hover:opacity-20 transition-base" />
                    <div className="relative">
                      <div className="inline-flex p-4 rounded-2xl bg-gradient-brand-deep mb-6 shadow-soft">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="text-xs font-bold tracking-widest text-teal-deep mb-2">
                        {t.tag}
                      </div>
                      <h3 className="text-2xl font-bold text-navy mb-3">{t.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">{t.desc}</p>
                      <a
                        href="#contato"
                        onClick={(e) => handleNav(e, "contato")}
                        className="inline-flex items-center gap-2 font-semibold text-gradient hover:gap-3 transition-base"
                      >
                        Saber mais <ArrowRight className="h-4 w-4 text-teal-deep" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CIENCIA */}
        <section id="ciencia" className="py-24 md:py-32 bg-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-40" />
          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-sm font-bold tracking-widest bg-gradient-to-r from-lilac to-teal bg-clip-text text-transparent uppercase">
                Ciência & Tecnologia
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6">
                Inovação em{" "}
                <span className="bg-gradient-to-r from-lilac to-teal bg-clip-text text-transparent">
                  Sequenciamento (NGS)
                </span>
              </h2>
              <p className="text-lg text-white/75 leading-relaxed">
                Nossa plataforma utiliza algoritmos proprietários e tecnologia de ponta para fornecer
                resultados com precisão superior a 99,9%. Na TheraSeq, ciência é compromisso com a vida.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentials.map((d) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.title}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-teal/40 transition-base"
                  >
                    <div className="inline-flex p-3 rounded-xl bg-gradient-brand mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{d.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{d.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PACIENTES */}
        <section id="pacientes" className="py-24 md:py-32 bg-gradient-soft">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-6 bg-gradient-brand opacity-20 blur-3xl rounded-full" />
              <img
                src={familyImg}
                alt="Família"
                className="relative rounded-3xl shadow-glow w-full"
                loading="lazy"
                width={1024}
                height={768}
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-bold tracking-widest text-gradient uppercase">
                Atendimento a Pacientes
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-navy">
                Suporte completo para{" "}
                <span className="text-gradient">cada família</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Oferecemos suporte integral para clínicas de reprodução assistida e suas pacientes,
                desde a logística da biópsia até o aconselhamento genético pós-resultado.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { t: "Aconselhamento genético", d: "Parceria com geneticistas seniores para suporte antes e após o exame, quando pertinente e indicado." },
                  { t: "Logística de biópsia", d: "Cadeia de transporte segura, rastreável e validada." },
                  { t: "Relatórios clínicos claros", d: "Resultados acionáveis para decisões clínicas." },
                ].map((s) => (
                  <div key={s.t} className="flex gap-4 p-4 bg-card rounded-2xl shadow-card">
                    <CheckCircle2 className="h-6 w-6 text-teal-deep shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-navy">{s.t}</div>
                      <div className="text-sm text-muted-foreground">{s.d}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#contato"
                onClick={(e) => handleNav(e, "contato")}
                className="inline-flex items-center gap-2 bg-gradient-brand-deep text-white px-7 py-4 rounded-full font-bold shadow-soft hover:shadow-glow hover:scale-105 transition-base"
              >
                Entre em contato conosco <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-hero rounded-3xl overflow-hidden shadow-glow relative">
              <div className="absolute inset-0 bg-gradient-glow opacity-50" />
              <div className="grid lg:grid-cols-2 relative">
                <div className="p-10 md:p-14 text-white">
                  <span className="text-sm font-bold tracking-widest text-teal uppercase">Fale Conosco</span>
                  <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6">
                    Vamos construir o futuro da{" "}
                    <span className="bg-gradient-to-r from-lilac to-teal bg-clip-text text-transparent">
                      genética reprodutiva
                    </span>{" "}
                    juntos
                  </h2>
                  <p className="text-white/80 mb-10 text-lg whitespace-pre-line">
                    Dúvidas sobre nossos exames ou interesse em parcerias?{"\n"}
                    Nossa equipe técnica está à disposição.
                  </p>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-white/10 backdrop-blur">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs text-white/60 uppercase tracking-widest">Email</div>
                        <a href="mailto:laboratorio@theraseq.com.br" className="font-semibold hover:text-teal transition-base">
                          laboratorio@theraseq.com.br
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-white/10 backdrop-blur">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs text-white/60 uppercase tracking-widest">Telefone</div>
                        <a href="tel:+551150565901" className="font-semibold hover:text-teal transition-base">
                          +55 (11) 5056-5901
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-white/10 backdrop-blur">
                        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-white/60 uppercase tracking-widest">WhatsApp</div>
                        <a href="https://wa.me/5511922966021" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-teal transition-base">
                          +55 (11) 92296-6021
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-white/10 backdrop-blur">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs text-white/60 uppercase tracking-widest">Endereço</div>
                        <div className="font-semibold leading-snug">
                          Av. Ibirapuera, 2315 — 1º Andar<br />
                          Moema, São Paulo — SP<br />
                          CEP: 04029-200
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="bg-background m-3 lg:m-6 rounded-2xl p-8 md:p-10 flex flex-col gap-4"
                >
                  <h3 className="text-2xl font-bold text-navy mb-2">Envie uma mensagem</h3>
                  <input
                    required
                    type="text"
                    placeholder="Nome completo"
                    className="w-full p-4 bg-muted rounded-xl border border-transparent focus:border-primary focus:outline-none transition-base"
                  />
                  <input
                    required
                    type="email"
                    placeholder="E-mail profissional"
                    className="w-full p-4 bg-muted rounded-xl border border-transparent focus:border-primary focus:outline-none transition-base"
                  />
                  <input
                    type="text"
                    placeholder="Clínica / Instituição"
                    className="w-full p-4 bg-muted rounded-xl border border-transparent focus:border-primary focus:outline-none transition-base"
                  />
                  <textarea
                    required
                    rows={4}
                    placeholder="Como podemos ajudar?"
                    className="w-full p-4 bg-muted rounded-xl border border-transparent focus:border-primary focus:outline-none transition-base resize-none"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-gradient-brand-deep text-white p-4 rounded-xl font-bold shadow-soft hover:shadow-glow hover:scale-[1.02] transition-base disabled:opacity-60"
                  >
                    {submitting ? "Enviando..." : "Enviar Mensagem"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-navy text-white/80 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <img src={logoV2} alt="TheraSeq" className="h-16 w-auto mb-4" />
              <p className="text-sm leading-relaxed max-w-md">
                Laboratório de análises genéticas. Avançando a ciência da vida com tecnologia NGS de última geração.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Exames</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#testes" className="hover:text-teal transition-base">PGTseq-A</a></li>
                <li><a href="#testes" className="hover:text-teal transition-base">PGTseq-M</a></li>
                <li><a href="#testes" className="hover:text-teal transition-base">PGTseq-SR</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Institucional</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#sobre" className="hover:text-teal transition-base">Sobre</a></li>
                <li><a href="#ciencia" className="hover:text-teal transition-base">Ciência</a></li>
                <li><a href="#contato" className="hover:text-teal transition-base">Contato</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
            <p>© 2026 TheraSeq — Divisão de Genética Mater Group. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-teal transition-base">Privacidade</a>
              <a href="#" className="hover:text-teal transition-base">Termos de Uso</a>
              <a href="#" className="hover:text-teal transition-base">LGPD</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
