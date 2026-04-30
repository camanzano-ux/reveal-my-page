import { useEffect, useState } from "react";
import { toast } from "sonner";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Obrigado! Sua mensagem foi enviada com sucesso para a equipe TheraSeq.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 1500);
  };

  const navLinks = [
    { id: "home", label: "Início" },
    { id: "testes", label: "Testes PGTseq" },
    { id: "ciencia", label: "Ciência" },
    { id: "medico", label: "Área Médica" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 bg-background transition-all ${
          scrolled ? "py-2 shadow-[var(--shadow-header)] bg-background/95 backdrop-blur" : "py-5 shadow-[var(--shadow-header)]"
        }`}
      >
        <div className="container mx-auto px-5 flex justify-between items-center">
          <a href="#home" onClick={(e) => handleNav(e, "home")} className="text-2xl text-navy">
            <strong className="font-bold">Thera</strong>
            <span className="font-normal text-teal">Seq</span>
          </a>
          <nav className="hidden md:block">
            <ul className="flex gap-8 items-center">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => handleNav(e, l.id)}
                    className="text-navy font-semibold text-sm hover:text-teal transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contato"
                  onClick={(e) => handleNav(e, "contato")}
                  className="bg-navy text-primary-foreground px-5 py-2.5 rounded font-semibold text-sm hover:bg-teal transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
          <button
            aria-label="Menu"
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-navy" />
            <span className="w-6 h-0.5 bg-navy" />
            <span className="w-6 h-0.5 bg-navy" />
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden bg-background border-t border-border">
            <ul className="flex flex-col p-5 gap-4">
              {[...navLinks, { id: "contato", label: "Contato" }].map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => handleNav(e, l.id)}
                    className="text-navy font-semibold"
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
        {/* Hero */}
        <section
          id="home"
          className="pt-44 pb-24 text-primary-foreground"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="container mx-auto px-5">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                Avançando a Ciência da Vida através da Genética
              </h1>
              <p className="text-lg opacity-90 mb-8">
                A TheraSeq combina tecnologia de sequenciamento de última geração (NGS) com
                suporte clínico especializado para transformar o futuro da medicina reprodutiva.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#testes"
                  onClick={(e) => handleNav(e, "testes")}
                  className="bg-background text-navy px-7 py-3.5 rounded font-bold hover:opacity-90 transition"
                >
                  Nossos Exames
                </a>
                <a
                  href="#ciencia"
                  onClick={(e) => handleNav(e, "ciencia")}
                  className="border-2 border-background text-primary-foreground px-7 py-3 rounded font-bold hover:bg-background hover:text-navy transition"
                >
                  Conheça a Tecnologia
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PGTseq */}
        <section id="testes" className="py-24 bg-light-gray">
          <div className="container mx-auto px-5">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Portfólio PGTseq™</h2>
              <p className="text-muted-foreground">
                Soluções avançadas em Teste Genético Pré-implantacional para clínicas e pacientes.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "PGT-A",
                  bold: "Aneuploidias:",
                  text: "Rastreamento cromossômico completo para aumentar as taxas de sucesso da fertilização in vitro e reduzir riscos de aborto.",
                },
                {
                  title: "PGT-M",
                  bold: "Doenças Monogênicas:",
                  text: "Testes personalizados para casais com risco conhecido de transmitir condições genéticas específicas.",
                },
                {
                  title: "PGT-SR",
                  bold: "Rearranjos Estruturais:",
                  text: "Identificação de desequilíbrios cromossômicos em portadores de translocações ou inversões.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-card p-10 rounded-lg shadow-[var(--shadow-card)] hover:-translate-y-2 transition-transform"
                >
                  <h3 className="text-teal text-xl font-bold mb-4">{c.title}</h3>
                  <p>
                    <strong className="text-navy">{c.bold}</strong> {c.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Science */}
        <section id="ciencia" className="py-24 bg-navy text-primary-foreground">
          <div className="container mx-auto px-5 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Inovação em Sequenciamento (NGS)</h2>
            <p className="text-lg opacity-90 mb-6">
              Nossa plataforma utiliza algoritmos proprietários e tecnologia de ponta para fornecer
              resultados com precisão superior a 99,9%. Na TheraSeq, a ciência não é apenas um
              processo, é o nosso compromisso com a vida.
            </p>
            <ul className="space-y-3">
              {[
                "Resolução ultra-alta para detecção de mosaicismo.",
                "Relatórios clínicos claros e acionáveis.",
                "Suporte direto de geneticistas seniores.",
              ].map((f) => (
                <li key={f} className="flex gap-3 items-start">
                  <span className="text-periwinkle mt-1">●</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Medical */}
        <section id="medico" className="py-24 bg-light-gray">
          <div className="container mx-auto px-5">
            <div className="bg-card p-12 rounded-lg shadow-[var(--shadow-card)] text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-navy mb-4">Suporte Clínico e Parcerias</h2>
              <p className="text-muted-foreground mb-6">
                Oferecemos suporte integral para clínicas de reprodução assistida, desde a logística
                de biópsia até o aconselhamento genético pós-resultado.
              </p>
              <a
                href="#contato"
                onClick={(e) => handleNav(e, "contato")}
                className="inline-block bg-navy text-primary-foreground px-7 py-3.5 rounded font-bold hover:bg-teal transition"
              >
                Portal do Médico
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contato" className="py-24">
          <div className="container mx-auto px-5">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Fale Conosco</h2>
                <p className="text-muted-foreground mb-6">
                  Dúvidas sobre exames ou parcerias? Nossa equipe técnica está à disposição.
                </p>
                <p className="mb-2"><strong className="text-navy">Email:</strong> contato@theraseq.com.br</p>
                <p><strong className="text-navy">Telefone:</strong> (11) 4000-0000</p>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Nome Completo"
                  required
                  className="p-4 border border-border rounded focus:outline-none focus:border-teal"
                />
                <input
                  type="email"
                  placeholder="E-mail Profissional"
                  required
                  className="p-4 border border-border rounded focus:outline-none focus:border-teal"
                />
                <textarea
                  placeholder="Como podemos ajudar?"
                  rows={5}
                  required
                  className="p-4 border border-border rounded focus:outline-none focus:border-teal"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-navy text-primary-foreground p-4 font-bold rounded hover:bg-teal transition disabled:opacity-60"
                >
                  {submitting ? "Enviando..." : "Enviar Mensagem"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy text-primary-foreground py-8">
        <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-80">
            © 2026 TheraSeq - Divisão de Genética Mater Group. Todos os direitos reservados.
          </p>
          <nav className="flex gap-6 text-sm">
            <a href="#" className="hover:text-periwinkle transition">Privacidade</a>
            <a href="#" className="hover:text-periwinkle transition">Termos de Uso</a>
            <a href="#" className="hover:text-periwinkle transition">LGPD</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
