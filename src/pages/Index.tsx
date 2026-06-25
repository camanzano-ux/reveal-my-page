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
  Globe,
  Check,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoV1 from "@/assets/logo-v1.png";
import logoV2 from "@/assets/logo-v2.png";
import heroDna from "@/assets/hero-banner.jpg";
import familyImg from "@/assets/family.jpg";
import theraGif from "@/assets/thera.gif";

type Lang = "pt" | "es" | "en";

const LANGUAGES: { code: Lang; label: string; short: string }[] = [
  { code: "pt", label: "Português", short: "PT" },
  { code: "es", label: "Español", short: "ES" },
  { code: "en", label: "English", short: "EN" },
];

const T = {
  pt: {
    nav: { sobre: "Sobre", testes: "Testes PGTseq", ciencia: "Ciência", pacientes: "Pacientes", contato: "Contato" },
    heroBadge: "Juno Genetics disponível na América Latina por TheraSeq",
    heroTitle1: "Avançando a ciência de ",
    heroTitle2: "formar famílias",
    heroDesc: "A TheraSeq é um laboratório de análises genéticas dedicado a clínicas e laboratórios de saúde reprodutiva e seus pacientes — com tecnologia de sequenciamento de última geração (NGS) e o mais alto padrão da América Latina, além de utilizar uma das únicas plataformas a nível mundial com validação analítica e clínica (Juno Genetics).",
    heroCta1: "Conheça os exames PGTseq",
    heroCta2: "Nossa tecnologia",
    statAccuracy: "Precisão analítica",
    statSupport: "Suporte analítico",
    aboutKicker: "Sobre Nós",
    aboutTitle1: "Progresso na ",
    aboutTitle2: "ciência reprodutiva",
    aboutP1: "Thera: Arquétipo da cura, cuidado e proteção.{\\n}Seq: Linguagem do sequenciamento e tecnologia.{\\n\\n}TheraSeq é a ponte entre o invisível e o possível.{\\n\\n}É onde o rigor científico convive com a sensibilidade de quem entende que cada embrião carrega não apenas cromossomos, mas expectativas, histórias e futuros inteiros.",
    aboutP2: "Mais do que um nome, TheraSeq é um propósito: cuidado e ciência, coração e código, entrelaçados em um caminho preciso do embrião à vida.",
    aboutBullets: [
      "Tecnologia NGS proprietária",
      "Aconselhamento genético especializado",
      "Padrões internacionais de qualidade",
      "Parceria com clínicas em toda Latam",
    ],
    aboutBadgeTitle: "Líder Latam",
    aboutBadgeSub: "Em genética reprodutiva",
    testsKicker: "Exames & Testes",
    testsTitle1: "Testes pré-implantacionais para ",
    testsTitle2: "decisões informadas",
    testsLead: "Soluções avançadas em PGT para clínicas de reprodução assistida e suas pacientes.",
    testItems: [
      { title: "Aneuploidias", desc: "O método mais validado de teste genético pré-implantacional para aneuploidia em pacientes em FIV — exclusivo TheraSeq." },
      { title: "Doenças Monogênicas", desc: "Teste genético único, personalizado para cada família, projetado para detectar alterações associadas a distúrbios de gene único." },
      { title: "Rearranjos Estruturais", desc: "Teste para indivíduos com rearranjo cromossômico — identifica material cromossômico extra ou ausente nas biópsias embrionárias." },
    ],
    learnMore: "Saber mais",
    scienceKicker: "Ciência & Tecnologia",
    scienceTitle1: "Inovação em ",
    scienceTitle2: "Sequenciamento (NGS)",
    scienceLead: "Nossa plataforma utiliza algoritmos proprietários e tecnologia de ponta para fornecer resultados com precisão superior a 99,9%. Na TheraSeq, ciência é compromisso com a vida.",
    differentials: [
      { title: "Líder na América Latina", desc: "Tecnologia NGS de ponta com padrões internacionais." },
      { title: "Resultados confiáveis", desc: "Validação científica rigorosa e reprodutibilidade." },
      { title: "Inovação contínua", desc: "Pesquisa proprietária e algoritmos próprios." },
      { title: "Suporte humanizado", desc: "Geneticistas seniores acompanhando cada caso." },
    ],
    patientsKicker: "Atendimento a Pacientes",
    patientsTitle1: "Suporte completo para ",
    patientsTitle2: "cada família",
    patientsLead: "Oferecemos suporte integral para clínicas de reprodução assistida e suas pacientes, desde a logística da biópsia até o aconselhamento genético pós-resultado.",
    patientItems: [
      { t: "Aconselhamento genético", d: "Parceria com geneticistas seniores para suporte antes e após o exame, quando pertinente e indicado." },
      { t: "Logística de biópsia", d: "Cadeia de transporte segura, rastreável e validada." },
      { t: "Relatórios clínicos claros", d: "Resultados acionáveis para decisões clínicas." },
    ],
    patientsCta: "Entre em contato conosco",
    contactKicker: "Fale Conosco",
    contactTitle1: "Vamos construir o futuro da ",
    contactTitle2: "genética reprodutiva",
    contactTitle3: " juntos",
    contactLead: "Dúvidas sobre nossos exames ou interesse em parcerias?{\\n}Nossa equipe técnica está à disposição.",
    contactEmail: "Email",
    contactPhone: "Telefone",
    contactWhats: "WhatsApp",
    contactAddr: "Endereço",
    formTitle: "Envie uma mensagem",
    formName: "Nome completo",
    formEmail: "E-mail profissional",
    formClinic: "Clínica / Instituição",
    formMsg: "Como podemos ajudar?",
    formSend: "Enviar Mensagem",
    formSending: "Enviando...",
    toastSent: "Mensagem enviada! Nossa equipe entrará em contato em breve.",
    footerDesc: "Laboratório de análises genéticas. Avançando a ciência da vida com tecnologia NGS de última geração.",
    footerExams: "Exames",
    footerInst: "Institucional",
    footerCopy: "© 2026 TheraSeq — Divisão de Genética Mater Group. Todos os direitos reservados.",
    footerPriv: "Privacidade",
    footerTerms: "Termos de Uso",
    footerLgpd: "LGPD",
    aboutImgAlt: "Laboratório TheraSeq",
    familyImgAlt: "Família",
  },
  es: {
    nav: { sobre: "Nosotros", testes: "Pruebas PGTseq", ciencia: "Ciencia", pacientes: "Pacientes", contato: "Contacto" },
    heroBadge: "Juno Genetics disponible en LATAM por TheraSeq",
    heroTitle1: "Avanzando la ciencia de ",
    heroTitle2: "formar familias",
    heroDesc: "TheraSeq es un laboratorio de análisis genéticos dedicado a clínicas y laboratorios de salud reproductiva y sus pacientes — con tecnología de secuenciación de última generación (NGS) y el más alto estándar de América Latina, utilizando además una de las únicas plataformas{\\n}con validación analítica y clínica a nivel mundial (Juno Genetics).",
    heroCta1: "Conoce las pruebas PGTseq",
    heroCta2: "Nuestra tecnología",
    statAccuracy: "Precisión analítica",
    statSupport: "Soporte analítico",
    aboutKicker: "Nosotros",
    aboutTitle1: "Progreso en la ",
    aboutTitle2: "ciencia reproductiva",
    aboutP1: "Thera: Arquetipo de la cura, el cuidado y la protección.{\\n}Seq: Lenguaje de la secuenciación y la tecnología{\\n\\n}TheraSeq es el puente entre lo invisible y lo posible.{\\n}Es donde el rigor científico convive con la sensibilidad de quien entiende que cada embrión lleva no solo cromosomas, sino expectativas, historias y futuros enteros.",
    aboutP2: "Más que un nombre, TheraSeq es un propósito: cuidado y ciencia, corazón y código, entrelazados en un camino preciso del embrión a la vida.",
    aboutBullets: [
      "Tecnología NGS propia",
      "Asesoramiento genético especializado",
      "Estándares internacionales de calidad",
      "Alianza con clínicas en toda LATAM",
    ],
    aboutBadgeTitle: "Líder LATAM",
    aboutBadgeSub: "En genética reproductiva",
    testsKicker: "Exámenes y Pruebas",
    testsTitle1: "Pruebas preimplantacionales para ",
    testsTitle2: "decisiones informadas",
    testsLead: "Soluciones avanzadas en PGT para clínicas de reproducción asistida y sus pacientes.",
    testItems: [
      { title: "Aneuploidías", desc: "El método más validado de prueba genética preimplantacional para aneuploidía en pacientes en FIV — exclusivo de TheraSeq." },
      { title: "Enfermedades Monogénicas", desc: "Prueba genética única, personalizada para cada familia, diseñada para detectar alteraciones asociadas a trastornos de un solo gen." },
      { title: "Reordenamientos Estructurales", desc: "Prueba para individuos con reordenamiento cromosómico — identifica material cromosómico extra o ausente en las biopsias embrionarias." },
    ],
    learnMore: "Saber más",
    scienceKicker: "Ciencia y Tecnología",
    scienceTitle1: "Innovación en ",
    scienceTitle2: "Secuenciación (NGS)",
    scienceLead: "Nuestra plataforma utiliza algoritmos propios y tecnología de punta para ofrecer resultados con precisión superior al 99,9%. En TheraSeq, la ciencia es un compromiso con la vida.",
    differentials: [
      { title: "Líder en América Latina", desc: "Tecnología NGS de punta con estándares internacionales." },
      { title: "Resultados confiables", desc: "Validación científica rigurosa y reproducibilidad." },
      { title: "Innovación continua", desc: "Investigación propia y algoritmos propios." },
      { title: "Soporte humanizado", desc: "Genetistas senior acompañando cada caso." },
    ],
    patientsKicker: "Atención a Pacientes",
    patientsTitle1: "Soporte completo para ",
    patientsTitle2: "cada familia",
    patientsLead: "Ofrecemos soporte integral a clínicas de reproducción asistida y sus pacientes, desde la logística de la biopsia hasta el asesoramiento genético posresultado.",
    patientItems: [
      { t: "Asesoramiento genético", d: "Alianza con genetistas senior para soporte antes y después del examen, cuando sea pertinente e indicado." },
      { t: "Logística de biopsia", d: "Cadena de transporte segura, trazable y validada." },
      { t: "Informes clínicos claros", d: "Resultados accionables para decisiones clínicas." },
    ],
    patientsCta: "Ponte en contacto con nosotros",
    contactKicker: "Habla con Nosotros",
    contactTitle1: "Construyamos juntos el futuro de la ",
    contactTitle2: "genética reproductiva",
    contactTitle3: "",
    contactLead: "¿Dudas sobre nuestros exámenes o interés en alianzas?{\\n}Nuestro equipo técnico está a tu disposición.",
    contactEmail: "Email",
    contactPhone: "Teléfono",
    contactWhats: "WhatsApp",
    contactAddr: "Dirección",
    formTitle: "Envía un mensaje",
    formName: "Nombre completo",
    formEmail: "Correo profesional",
    formClinic: "Clínica / Institución",
    formMsg: "¿Cómo podemos ayudar?",
    formSend: "Enviar mensaje",
    formSending: "Enviando...",
    toastSent: "¡Mensaje enviado! Nuestro equipo se pondrá en contacto pronto.",
    footerDesc: "Laboratorio de análisis genéticos. Avanzando la ciencia de la vida con tecnología NGS de última generación.",
    footerExams: "Exámenes",
    footerInst: "Institucional",
    footerCopy: "© 2026 TheraSeq — División de Genética Mater Group. Todos los derechos reservados.",
    footerPriv: "Privacidad",
    footerTerms: "Términos de Uso",
    footerLgpd: "LGPD",
    aboutImgAlt: "Laboratorio TheraSeq",
    familyImgAlt: "Familia",
  },
  en: {
    nav: { sobre: "About", testes: "PGTseq Tests", ciencia: "Science", pacientes: "Patients", contato: "Contact" },
    heroBadge: "Juno Genetics available in LATAM by TheraSeq",
    heroTitle1: "Advancing the science of ",
    heroTitle2: "building families",
    heroDesc: "TheraSeq is a genetic analysis laboratory dedicated to reproductive health clinics, labs and their patients — with next-generation sequencing (NGS) technology and the highest standard in Latin America, using one of the few platforms{\\n}with worldwide analytical and clinical validation (Juno Genetics).",
    heroCta1: "Explore PGTseq tests",
    heroCta2: "Our technology",
    statAccuracy: "Analytical accuracy",
    statSupport: "Analytical support",
    aboutKicker: "About Us",
    aboutTitle1: "Progress in ",
    aboutTitle2: "reproductive science",
    aboutP1: "Thera: Archetype of healing, care and protection.{\\n}Seq: The language of sequencing and technology{\\n\\n}TheraSeq is the bridge between the invisible and the possible.{\\n}It's where scientific rigor meets the sensitivity of those who understand that each embryo carries not only chromosomes, but expectations, stories and entire futures.",
    aboutP2: "More than a name, TheraSeq is a purpose: care and science, heart and code, woven into a precise path from embryo to life.",
    aboutBullets: [
      "Proprietary NGS technology",
      "Specialized genetic counseling",
      "International quality standards",
      "Partnership with clinics across LATAM",
    ],
    aboutBadgeTitle: "LATAM Leader",
    aboutBadgeSub: "In reproductive genetics",
    testsKicker: "Exams & Tests",
    testsTitle1: "Preimplantation tests for ",
    testsTitle2: "informed decisions",
    testsLead: "Advanced PGT solutions for assisted reproduction clinics and their patients.",
    testItems: [
      { title: "Aneuploidies", desc: "The most validated preimplantation genetic test for aneuploidy in IVF patients — exclusive to TheraSeq." },
      { title: "Monogenic Diseases", desc: "A unique genetic test, customized for each family, designed to detect alterations associated with single-gene disorders." },
      { title: "Structural Rearrangements", desc: "Test for individuals with chromosomal rearrangements — identifies extra or missing chromosomal material in embryo biopsies." },
    ],
    learnMore: "Learn more",
    scienceKicker: "Science & Technology",
    scienceTitle1: "Innovation in ",
    scienceTitle2: "Sequencing (NGS)",
    scienceLead: "Our platform uses proprietary algorithms and cutting-edge technology to deliver results with accuracy above 99.9%. At TheraSeq, science is a commitment to life.",
    differentials: [
      { title: "Leader in Latin America", desc: "Cutting-edge NGS technology with international standards." },
      { title: "Reliable results", desc: "Rigorous scientific validation and reproducibility." },
      { title: "Continuous innovation", desc: "Proprietary research and in-house algorithms." },
      { title: "Human-centered support", desc: "Senior geneticists following each case." },
    ],
    patientsKicker: "Patient Care",
    patientsTitle1: "Complete support for ",
    patientsTitle2: "every family",
    patientsLead: "We offer end-to-end support for assisted reproduction clinics and their patients, from biopsy logistics to post-result genetic counseling.",
    patientItems: [
      { t: "Genetic counseling", d: "Partnership with senior geneticists for support before and after the exam, when relevant and indicated." },
      { t: "Biopsy logistics", d: "Safe, traceable and validated transport chain." },
      { t: "Clear clinical reports", d: "Actionable results for clinical decisions." },
    ],
    patientsCta: "Get in touch with us",
    contactKicker: "Talk to Us",
    contactTitle1: "Let's build the future of ",
    contactTitle2: "reproductive genetics",
    contactTitle3: " together",
    contactLead: "Questions about our tests or interested in partnerships?{\\n}Our technical team is at your disposal.",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactWhats: "WhatsApp",
    contactAddr: "Address",
    formTitle: "Send a message",
    formName: "Full name",
    formEmail: "Work email",
    formClinic: "Clinic / Institution",
    formMsg: "How can we help?",
    formSend: "Send Message",
    formSending: "Sending...",
    toastSent: "Message sent! Our team will be in touch soon.",
    footerDesc: "Genetic analysis laboratory. Advancing life science with next-generation NGS technology.",
    footerExams: "Tests",
    footerInst: "Institutional",
    footerCopy: "© 2026 TheraSeq — Mater Group Genetics Division. All rights reserved.",
    footerPriv: "Privacy",
    footerTerms: "Terms of Use",
    footerLgpd: "LGPD",
    aboutImgAlt: "TheraSeq Laboratory",
    familyImgAlt: "Family",
  },
} as const;

const nl = (s: string) => s.replace(/\{\\n\\n\}/g, "\n\n").replace(/\{\\n\}/g, "\n");

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "pt";
    const stored = window.localStorage.getItem("theraseq.lang") as Lang | null;
    return stored && ["pt", "es", "en"].includes(stored) ? stored : "pt";
  });
  useEffect(() => {
    window.localStorage.setItem("theraseq.lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);
  const t = T[lang];
  const currentLang = LANGUAGES.find((l) => l.code === lang)!;

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
      toast.success(t.toastSent);
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 1200);
  };
  const navLinks = [
    { id: "sobre", label: t.nav.sobre },
    { id: "testes", label: t.nav.testes },
    { id: "ciencia", label: t.nav.ciencia },
    { id: "pacientes", label: t.nav.pacientes },
  ];
  const testIcons = [Dna, HeartPulse, Microscope];
  const testTags = ["PGTseq-A", "PGTseq-M", "PGTseq-SR"];
  const tests = t.testItems.map((it, i) => ({ ...it, tag: testTags[i], icon: testIcons[i] }));
  const stats = [
    { value: "99.0%", label: t.statAccuracy },
    { value: "24 H", label: t.statSupport },
  ];
  const diffIcons = [Award, ShieldCheck, Sparkles, Users];
  const differentials = t.differentials.map((d, i) => ({ ...d, icon: diffIcons[i] }));

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
              {t.nav.contato}
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger
                aria-label="Idioma"
                className="inline-flex items-center gap-1.5 rounded-full border border-navy/15 bg-white/70 px-3 py-2 text-sm font-semibold text-navy hover:bg-white transition-base"
              >
                <Globe className="h-4 w-4" />
                {currentLang.short}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[10rem]">
                {LANGUAGES.map((l) => (
                  <DropdownMenuItem
                    key={l.code}
                    onSelect={() => setLang(l.code)}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <span>{l.label}</span>
                    {lang === l.code && <Check className="h-4 w-4 text-teal-deep" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          <div className="lg:hidden flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger
                aria-label="Idioma"
                className="inline-flex items-center gap-1 rounded-full border border-navy/15 bg-white/70 px-2.5 py-2 text-xs font-semibold text-navy"
              >
                <Globe className="h-4 w-4" />
                {currentLang.short}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[10rem]">
                {LANGUAGES.map((l) => (
                  <DropdownMenuItem
                    key={l.code}
                    onSelect={() => setLang(l.code)}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <span>{l.label}</span>
                    {lang === l.code && <Check className="h-4 w-4 text-teal-deep" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              aria-label="Menu"
              className="p-2 rounded-full bg-white/70 text-navy"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
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
              <li>
                <a
                  href="#contato"
                  onClick={(e) => handleNav(e, "contato")}
                  className="block py-2 font-semibold"
                >
                  {t.nav.contato}
                </a>
              </li>
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
          <img
            src={heroDna}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-glow opacity-40 mix-blend-overlay" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-white/60 rounded-full px-4 py-2 mb-6 shadow-soft">
                <Sparkles className="h-4 w-4 text-teal-deep" />
                <span className="text-sm font-semibold text-navy">{t.heroBadge}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.02] mb-6 text-navy">
                {t.heroTitle1}
                <span className="text-gradient">{t.heroTitle2}</span>
              </h1>
              <p className="text-lg md:text-xl text-navy/75 mb-10 max-w-2xl leading-relaxed whitespace-pre-line">
                {nl(t.heroDesc)}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#testes"
                  onClick={(e) => handleNav(e, "testes")}
                  className="inline-flex items-center gap-2 bg-gradient-brand-deep text-white px-7 py-4 rounded-full font-bold shadow-glow hover:scale-105 transition-base"
                >
                  {t.heroCta1} <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#ciencia"
                  onClick={(e) => handleNav(e, "ciencia")}
                  className="inline-flex items-center gap-2 border-2 border-navy/20 bg-white/60 backdrop-blur text-navy px-7 py-4 rounded-full font-bold hover:bg-white transition-base"
                >
                  {t.heroCta2}
                </a>
              </div>
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
              <span className="text-sm font-bold tracking-widest text-gradient uppercase">{t.aboutKicker}</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-navy">
                {t.aboutTitle1}
                <span className="text-gradient">{t.aboutTitle2}</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-5 leading-relaxed whitespace-pre-line">
                {nl(t.aboutP1)}
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t.aboutP2}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {t.aboutBullets.map((item) => (
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
                src={theraGif}
                alt={t.aboutImgAlt}
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
                  <div className="font-bold text-navy">{t.aboutBadgeTitle}</div>
                  <div className="text-xs text-muted-foreground">{t.aboutBadgeSub}</div>
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
              <span className="text-sm font-bold tracking-widest text-gradient uppercase">{t.testsKicker}</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-5 text-navy">
                {t.testsTitle1}
                <span className="text-gradient">{t.testsTitle2}</span>
              </h2>
              <p className="text-lg text-muted-foreground">{t.testsLead}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {tests.map((te, i) => {
                const Icon = te.icon;
                return (
                  <div
                    key={te.tag}
                    className="group relative bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-base hover:-translate-y-2 border border-border/50 overflow-hidden"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-brand rounded-full opacity-10 group-hover:opacity-20 transition-base" />
                    <div className="relative">
                      <div className="inline-flex p-4 rounded-2xl bg-gradient-brand-deep mb-6 shadow-soft">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="text-xs font-bold tracking-widest text-teal-deep mb-2">
                        {te.tag}
                      </div>
                      <h3 className="text-2xl font-bold text-navy mb-3">{te.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">{te.desc}</p>
                      <a
                        href="#contato"
                        onClick={(e) => handleNav(e, "contato")}
                        className="inline-flex items-center gap-2 font-semibold text-gradient hover:gap-3 transition-base"
                      >
                        {t.learnMore} <ArrowRight className="h-4 w-4 text-teal-deep" />
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
                {t.scienceKicker}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6">
                {t.scienceTitle1}
                <span className="bg-gradient-to-r from-lilac to-teal bg-clip-text text-transparent">
                  {t.scienceTitle2}
                </span>
              </h2>
              <p className="text-lg text-white/75 leading-relaxed">{t.scienceLead}</p>
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
                alt={t.familyImgAlt}
                className="relative rounded-3xl shadow-glow w-full"
                loading="lazy"
                width={1024}
                height={768}
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-bold tracking-widest text-gradient uppercase">
                {t.patientsKicker}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-navy">
                {t.patientsTitle1}
                <span className="text-gradient">{t.patientsTitle2}</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{t.patientsLead}</p>
              <div className="space-y-4 mb-8">
                {t.patientItems.map((s) => (
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
                {t.patientsCta} <ArrowRight className="h-5 w-5" />
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
                  <span className="text-sm font-bold tracking-widest text-teal uppercase">{t.contactKicker}</span>
                  <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6">
                    {t.contactTitle1}
                    <span className="bg-gradient-to-r from-lilac to-teal bg-clip-text text-transparent">
                      {t.contactTitle2}
                    </span>
                    {t.contactTitle3}
                  </h2>
                  <p className="text-white/80 mb-10 text-lg whitespace-pre-line">
                    {nl(t.contactLead)}
                  </p>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-white/10 backdrop-blur">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs text-white/60 uppercase tracking-widest">{t.contactEmail}</div>
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
                        <div className="text-xs text-white/60 uppercase tracking-widest">{t.contactPhone}</div>
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
                        <div className="text-xs text-white/60 uppercase tracking-widest">{t.contactWhats}</div>
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
                        <div className="text-xs text-white/60 uppercase tracking-widest">{t.contactAddr}</div>
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
                  <h3 className="text-2xl font-bold text-navy mb-2">{t.formTitle}</h3>
                  <input
                    required
                    type="text"
                    placeholder={t.formName}
                    className="w-full p-4 bg-muted rounded-xl border border-transparent focus:border-primary focus:outline-none transition-base"
                  />
                  <input
                    required
                    type="email"
                    placeholder={t.formEmail}
                    className="w-full p-4 bg-muted rounded-xl border border-transparent focus:border-primary focus:outline-none transition-base"
                  />
                  <input
                    type="text"
                    placeholder={t.formClinic}
                    className="w-full p-4 bg-muted rounded-xl border border-transparent focus:border-primary focus:outline-none transition-base"
                  />
                  <textarea
                    required
                    rows={4}
                    placeholder={t.formMsg}
                    className="w-full p-4 bg-muted rounded-xl border border-transparent focus:border-primary focus:outline-none transition-base resize-none"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-gradient-brand-deep text-white p-4 rounded-xl font-bold shadow-soft hover:shadow-glow hover:scale-[1.02] transition-base disabled:opacity-60"
                  >
                    {submitting ? t.formSending : t.formSend}
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
                {t.footerDesc}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">{t.footerExams}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#testes" className="hover:text-teal transition-base">PGTseq-A</a></li>
                <li><a href="#testes" className="hover:text-teal transition-base">PGTseq-M</a></li>
                <li><a href="#testes" className="hover:text-teal transition-base">PGTseq-SR</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">{t.footerInst}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#sobre" className="hover:text-teal transition-base">{t.nav.sobre}</a></li>
                <li><a href="#ciencia" className="hover:text-teal transition-base">{t.nav.ciencia}</a></li>
                <li><a href="#contato" className="hover:text-teal transition-base">{t.nav.contato}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
            <p>{t.footerCopy}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-teal transition-base">{t.footerPriv}</a>
              <a href="#" className="hover:text-teal transition-base">{t.footerTerms}</a>
              <a href="#" className="hover:text-teal transition-base">{t.footerLgpd}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Index;
