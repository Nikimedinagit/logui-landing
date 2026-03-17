import React, { useState } from "react";
import {
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const Nosotros = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const equipo = [
    {
      nombre: "FERNANDO AUDIZIO",
      img: "EquipoLoguiSoft-Fernando.jpeg",
      redes: [
        {
          icono: <Linkedin size={20} />,
          url: "https://www.linkedin.com/in/fernando-audizio-7b415714?originalSubdomain=ar",
        },
        {
          icono: <Instagram size={20} />,
          url: "https://www.instagram.com/fernandoestebanaudizio/",
        },
        {
          icono: <Facebook size={20} />,
          url: "https://www.facebook.com/fernandoesteban.audizio?fref=ts",
        },
      ],
    },
    {
      nombre: "NICOLÁS ANGUIÑO",
      img: "EquipoLoguiSoft-Nico.jpeg",
      redes: [
        {
          icono: <Instagram size={20} />,
          url: "https://www.instagram.com/nicoanguino/",
        },
        {
          icono: <Facebook size={20} />,
          url: "https://www.facebook.com/nico.anguino",
        },
      ],
    },
    {
      nombre: "LEONEL MARTINO",
      img: "EquipoLoguiSoft-Leo.jpeg",
      redes: [
        {
          icono: <Linkedin size={20} />,
          url: "https://www.linkedin.com/in/leonel-martino-3868a9221/?originalSubdomain=ar",
        },
        {
          icono: <Instagram size={20} />,
          url: "https://www.instagram.com/leonel.martinoo/",
        },
        { icono: <Twitter size={20} />, url: "https://x.com/laucha155" },
      ],
    },
    {
      nombre: "MAURO LENARDÓN",
      img: "EquipoLoguiSoft-Mauro.jpeg",
      redes: [
        {
          icono: <Instagram size={20} />,
          url: "https://www.instagram.com/_mauro.lenardon/",
        },
        {
          icono: <Facebook size={20} />,
          url: "https://www.facebook.com/mauro.lenardon",
        },
      ],
    },
    {
      nombre: "ALEJANDRO FENOFLIO",
      img: "EquipoLoguiSoft-Ale.jpeg",
      redes: [
        {
          icono: <Linkedin size={20} />,
          url: "https://www.linkedin.com/in/alejandro-hugo-fenoglio-a8872b240/",
        },
        {
          icono: <Instagram size={20} />,
          url: "https://www.instagram.com/fenoglioale/?hl=es",
        },
        {
          icono: <Facebook size={20} />,
          url: "https://www.facebook.com/ale10.fenoglio/?locale=es_LA",
        },
      ],
    },
  ];

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === equipo.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? equipo.length - 1 : prev - 1));

  return (
    <section
      id="nosotros"
      className="scroll-mt-16 py-12 bg-background overflow-hidden"
    >
      <div className="w-full px-6 md:px-16">
        <SectionTitle
          subtitulo="EL EQUIPO ESTRATÉGICO DETRÁS DE CADA SOLUCIÓN TECNOLÓGICA"
          tituloPrincipal="SOBRE"
          palabraResaltada="NOSOTROS"
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div className="space-y-8 text-muted-foreground text-base font-medium leading-relaxed tracking-tight">
              <div className="space-y-6">
                <p>
                  Somos un equipo de profesionales informáticos apasionados y
                  dedicados, con más de diez años de experiencia en el
                  desarrollo de software y la gestión empresarial. A lo largo de
                  nuestra trayectoria, hemos tenido el privilegio de colaborar
                  con diversas empresas, ayudándolas a aprovechar al máximo las
                  tecnologías de la información para mejorar su eficiencia y
                  alcanzar sus objetivos.
                </p>

                <p>
                  Creemos firmemente en la importancia de trabajar en estrecha
                  colaboración con nuestros clientes, entendiendo sus
                  necesidades y metas para ofrecer soluciones de informatización
                  que realmente marquen la diferencia.
                </p>
              </div>

              <div>
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.85] text-foreground">
                  CON NUESTRA EXPERIENCIA Y <br />
                  <span className="text-violet-500 italic">COMPROMISO</span>, TE
                  AYUDAMOS <br />A{" "}
                  <span className="text-green-500 italic text-4xl md:text-6xl">
                    EVOLUCIONAR.
                  </span>
                </h3>
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <p className="text-foreground font-black border-l-4 border-violet-500 pl-4 uppercase tracking-tighter text-base">
                Juntos, transformamos los desafíos en oportunidades,
                proporcionando herramientas tecnológicas que apoyan y fortalecen
                tu negocio.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="relative w-full overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-2xl shadow-black/60">
              <div
                className="flex transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {equipo.map((persona, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="w-full h-[500px] md:h-[600px] overflow-hidden grayscale hover:grayscale-0 active:grayscale-0 transition-all duration-700 relative touch-auto">
                      <img
                        src={`/equipo/${persona.img}`}
                        alt={persona.nombre}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />

                      <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col items-center md:items-start">
                        <h4 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-tight mb-6 drop-shadow-2xl">
                          {persona.nombre}
                        </h4>
                        <div className="flex gap-4">
                          {persona.redes.map((red, rIdx) => (
                            <a
                              key={rIdx}
                              href={red.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 rounded-xl bg-foreground/10 backdrop-blur-md border border-foreground/20 text-white hover:bg-green-500 hover:border-green-500 transition-all duration-300"
                            >
                              {red.icono}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end gap-6">
              <button
                onClick={prevSlide}
                className="p-4 rounded-full border border-border bg-card hover:border-green-500 hover:text-green-500 transition-all active:scale-95 shadow-lg"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex gap-2">
                {equipo.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      currentIndex === idx
                        ? "w-10 bg-green-500"
                        : "w-3 bg-border"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-4 rounded-full border border-border bg-card hover:border-green-500 hover:text-green-500 transition-all active:scale-95 shadow-lg"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
