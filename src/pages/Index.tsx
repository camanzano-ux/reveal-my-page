import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";

interface NavLink {
  id: string;
  label: string;
}

const navLinks: NavLink[] = [
  { id: "hero", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "services", label: "Serviços" },
  { id: "family", label: "Família" },
  { id: "contact", label: "Contato" },
];

export default function Index(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-white/95 shadow-md backdrop-blur" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#hero" className="text-xl font-bold text-slate-900">
            TheraHealth
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={#${l.id}}
                className="text-sm font-medium text-slate-700 hover:text-slate-900"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <Button className="hidden md:inline-flex" asChild>
            <a href="#contact">Agendar consulta</a>
          </Button>

          <button
            type="button"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            className="rounded-md p-2 md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={closeMenu}
                  className="text-base font-medium text-slate-700 hover:text-slate-900"
                >
                  {l.label}
                </a>
              ))}
              <Button asChild className="w-full">
                <a href="#contact" onClick={closeMenu}>
                  Agendar consulta
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      <section id="hero" className="relative pt-24 md:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Cuidado emocional para toda a família
            </h1>
            <p className="max-w-lg text-lg text-slate-600">
              Terapia individual, de casal e familiar com uma equipe
              especializada dedicada ao seu bem-estar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#contact">Comece agora</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#about">Conheça nosso trabalho</a>
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/hero-banner.jpg"
              alt="Banner principal mostrando um ambiente acolhedor de terapia"
              className="h-auto w-full object-cover"
              width={1200}
              height={800}
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Nossa abordagem
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Combinamos ciência moderna e acolhimento humano para promover
              transformação duradoura.
            </p>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <img
                src="/thera.gif"
                alt="Animação ilustrando o processo terapêutico"
                className="h-auto w-full rounded-2xl shadow-lg"
                width={600}
                height={400}
                loading="lazy"
              />
            </div>
            <div className="order-1 space-y-5 lg:order-2">
              <h3 className="text-2xl font-semibold text-slate-900">
                Terapia baseada em evidências
              </h3>
              <p className="text-slate-600">
                Utilizamos técnicas validadas cientificamente para ajudar você a
                desenvolver recursos emocionais, melhorar relacionamentos e
                superar desafios.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  Avaliação inicial completa e personalizada
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  Plano terapêutico colaborativo
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  Acompanhamento contínuo de resultados
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Serviços
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Escolha o acompanhamento que faz sentido para o seu momento.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Terapia Individual",
                description:
                  "Espaço seguro para explorar emoções, pensamentos e comportamentos com um terapeuta especializado.",
              },
              {
                title: "Terapia de Casal",
                description:
                  "Fortaleça a comunicação, a intimidade e a resolução de conflitos no seu relacionamento.",
              },
              {
                title: "Terapia Familiar",
                description:
                  "Acolhimento para famílias que desejam melhorar vínculos e enfrentar desafios juntas.",
              },
            ].map((service) => (
              <Card key={service.title} className="h-full">
                <CardContent className="flex flex-col gap-4 p-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="flex-1 text-slate-600">{service.description}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#contact">Saiba mais</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="family" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-5">
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Para toda a família
              </h2>
              <p className="text-slate-600">
                Acreditamos que a saúde mental se constrói em rede. Por isso,
                oferecemos atendimentos que respeitam a dinâmica de cada
                família, promovendo escuta, empatia e mudança.
              </p>
              <Button size="lg" asChild>
                <a href="#contact">Marcar atendimento familiar</a>
              </Button>
            </div>
            <div>
              <img
                src="/family.jpg"
                alt="Família feliz sentada junta em um ambiente acolhedor"
                className="h-auto w-full rounded-2xl shadow-lg"
                width={800}
                height={600}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Entre em contato
          </h2>
          <p className="mt-4 text-slate-600">
            Estamos prontos para ajudar. Envie uma mensagem ou ligue para
            agendar sua primeira consulta.
          </p>

          <div className="mt-10 grid gap-6 text-left md:grid-cols-3">
            <div className="flex items-start gap-3">
              <Phone className="mt-1 text-emerald-600" size={20} />
              <div>
                <p className="font-semibold text-slate-900">Telefone</p>
                <p className="text-slate-600">(11) 99999-9999</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-1 text-emerald-600" size={20} />
              <div>
                <p className="font-semibold text-slate-900">E-mail</p>
                <p className="text-slate-600">contato@therahealth.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 text-emerald-600" size={20} />
              <div>
                <p className="font-semibold text-slate-900">Endereço</p>
                <p className="text-slate-600">Rua Exemplo, 123 - São Paulo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} TheraHealth. Todos os direitos
            reservados.
          </p>
          <nav className="flex gap-6">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="text-sm text-slate-500 hover:text-slate-900"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
