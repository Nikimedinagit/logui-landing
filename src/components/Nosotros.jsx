import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

const equipo = [
  {
    nombre: "FERNANDO AUDIZIO",
    cargo: "Ingeniero en Sistemas",
    img: "EquipoLoguiSoft-Fernando.png",
  },
  {
    nombre: "NICOLÁS ANGÜINO",
    cargo: "Técnico Superior en Desarrollo de Software",
    img: "EquipoLoguiSoft-Nico.png",
  },
  {
    nombre: "LEONEL MARTINO",
    cargo: "Técnico Superior en Desarrollo de Software",
    img: "EquipoLoguiSoft-Leo.png",
  },
  {
    nombre: "MAURO LENARDÓN",
    cargo: "Ventas y Soporte Técnico",
    img: "EquipoLoguiSoft-Mauro.png",
  },
  {
    nombre: "ALEJANDRO FENOGLIO",
    cargo: "Técnico Superior en Desarrollo de Software",
    img: "EquipoLoguiSoft-Ale.png",
  },
  {
    nombre: "SOFÍA GROSSO",
    cargo: "Técnica Superior en Marketing Digital",
    img: "EquipoLoguiSoft-Sofi.png",
  },
];

const Nosotros = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const persona = equipo[currentIndex];

  const nextSlide = () =>
    setCurrentIndex((currentIndex + 1) % equipo.length);

  const prevSlide = () =>
    setCurrentIndex((currentIndex - 1 + equipo.length) % equipo.length);

  return (
    <section
      id="nosotros"
      className="scroll-mt-16 overflow-hidden bg-background py-12"
    >
      <div className="w-full px-6 md:px-16">
        <SectionTitle
          subtitulo="EL EQUIPO ESTRATÉGICO DETRÁS DE CADA SOLUCIÓN TECNOLÓGICA"
          tituloPrincipal="SOBRE"
          palabraResaltada="NOSOTROS"
        />

        <div className="mt-4 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <div className="space-y-6 text-lg font-medium leading-relaxed tracking-tight text-muted-foreground">
              <p>
                Somos un equipo de profesionales informáticos apasionados y
                dedicados, con más de diez años de experiencia en el desarrollo
                de software y la gestión empresarial. A lo largo de nuestra
                trayectoria, hemos tenido el privilegio de colaborar con
                diversas empresas, ayudándolas a aprovechar al máximo las
                tecnologías de la información para mejorar su eficiencia y
                alcanzar sus objetivos.
              </p>

              <p>
                Creemos firmemente en la importancia de trabajar en estrecha
                colaboración con nuestros clientes, entendiendo sus necesidades
                y metas para ofrecer soluciones de informatización que realmente
                marquen la diferencia.
              </p>
            </div>

            <h3 className="text-3xl font-black uppercase leading-[0.9] tracking-tighter text-foreground md:text-4xl">
              CON NUESTRA EXPERIENCIA Y
              <span className="text-violet-500 italic"> COMPROMISO</span>, TE
              AYUDAMOS A{" "}
              <span className="text-green-500 italic">EVOLUCIONAR.</span>
            </h3>

            <p className="border-l-4 border-violet-500 pl-4 text-lg font-bold uppercase tracking-tighter text-foreground">
              Juntos, transformamos los desafíos en oportunidades,
              proporcionando herramientas tecnológicas que apoyan y fortalecen
              tu negocio.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[430px] lg:col-span-5">
            <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/20">
              <div className="relative h-[360px] overflow-hidden bg-muted md:h-[440px]">
                <img
                  key={persona.img}
                  src={`/equipo/${persona.img}`}
                  alt={persona.nombre}
                  className="h-full w-full -translate-y-3 scale-[1.08] animate-in fade-in object-cover object-top duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-4">
                  <h4 className="text-2xl font-bold uppercase leading-tight tracking-tighter text-white">
                    {persona.nombre}
                  </h4>
                  <p className="mt-1 text-lg font-bold text-green-400">
                    {persona.cargo}
                  </p>
                </div>
              </div>
            </article>

            <div className="mt-5 flex items-center justify-between">
              <button
                onClick={prevSlide}
                aria-label="Integrante anterior"
                className="rounded-full border border-border bg-card p-3 transition-all hover:border-green-500 hover:text-green-500 active:scale-95"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {equipo.map((item, index) => (
                  <button
                    key={item.nombre}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Ver a ${item.nombre}`}
                    className={`h-1.5 rounded-full transition-all ${
                      currentIndex === index
                        ? "w-8 bg-green-500"
                        : "w-2.5 bg-border"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                aria-label="Integrante siguiente"
                className="rounded-full border border-border bg-card p-3 transition-all hover:border-green-500 hover:text-green-500 active:scale-95"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
