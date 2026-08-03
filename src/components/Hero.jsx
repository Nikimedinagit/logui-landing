import React from "react";
import {
  BriefcaseBusiness,
  ChevronDown,
  Code2,
  Globe2,
  Layout,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen flex items-center justify-center overflow-hidden pt-8"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,var(--color-violet-500)_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.06]" />
      <div className="absolute -left-[10%] top-[15%] -z-10 h-[450px] w-[450px] rounded-full bg-green-500/25 blur-[130px] animate-pulse" />
      <div className="absolute -right-[10%] bottom-[15%] -z-10 h-[450px] w-[450px] rounded-full bg-violet-500/25 blur-[130px] animate-pulse" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[100px]" />

      <div className="w-full px-6 md:px-16 flex flex-col md:flex-row items-center gap-6 relative z-10">
        <div className="flex-1 text-center md:text-left space-y-4">
          <h2 className="text-violet-500 font-bold tracking-[0.4em] text-xs md:text-sm uppercase">
            Potencia Tecnológica
          </h2>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
            DESARROLLO <br />
            DE{" "}
            <span className="bg-gradient-to-r from-green-500 to-violet-500 bg-clip-text text-transparent">
              SOFTWARE
            </span>
          </h1>
          <p className="text-foreground/70 text-sm md:text-lg max-w-[550px] font-medium uppercase tracking-widest leading-relaxed">
            Soluciones inteligentes para tu negocio
            <br className="hidden md:block" />
            con el sello de{" "}
            <span className="text-green-500 font-bold">Logui Soft</span>.
          </p>

          <div className="pt-4 flex justify-center md:justify-start">
            <button
              onClick={() =>
                document
                  .getElementById("gestion")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center gap-3 text-[13px] font-bold tracking-[0.3em] uppercase text-foreground hover:text-green-500 transition-colors"
            >
              <span className="relative">
                VER MÁS
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-violet-500 group-hover:bg-green-500 transition-colors"></span>
              </span>
              <ChevronDown className="w-4 h-4 animate-bounce text-violet-500 group-hover:text-green-500" />
            </button>
          </div>
        </div>

        <div className="hidden md:flex flex-1 translate-x-4 justify-center items-center relative">
          <div className="absolute w-[430px] h-[430px] rounded-full border border-transparent border-t-violet-500/50 border-r-green-500/30 animate-spin [animation-duration:18s]">
            <span className="absolute right-8 top-8 h-2 w-2 rounded-full bg-green-500 shadow-[0_0_14px_var(--color-green-500)]" />
          </div>
          <div className="absolute w-[350px] h-[350px] rounded-full border border-transparent border-b-green-500/40 border-l-violet-500/30 animate-spin [animation-duration:12s] [animation-direction:reverse]">
            <span className="absolute bottom-5 left-16 h-1.5 w-1.5 rounded-full bg-violet-500 shadow-[0_0_12px_var(--color-violet-500)]" />
          </div>
          <div className="absolute w-72 h-72 md:w-[430px] md:h-[430px] bg-gradient-to-tr from-green-500/30 to-violet-500/30 rounded-full blur-3xl" />

          <div className="absolute left-0 top-[22%] z-20 flex items-center gap-2 rounded-full border border-green-500/20 bg-background/70 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-green-500 shadow-lg shadow-green-500/10 backdrop-blur-md">
            <Code2 className="h-4 w-4" />
            SOFTWARE A MEDIDA
          </div>

          <div className="absolute right-[2%] top-[6%] z-20 hidden items-center gap-2 rounded-full border border-violet-500/20 bg-background/70 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-violet-500 shadow-lg shadow-violet-500/10 backdrop-blur-md lg:flex animate-float">
            <Globe2 className="h-4 w-4" />
            APLICACIONES WEB
          </div>

          <div className="absolute bottom-[4%] left-[2%] z-20 hidden items-center gap-2 rounded-full border border-green-500/20 bg-background/70 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-green-500 shadow-lg shadow-green-500/10 backdrop-blur-md lg:flex animate-float [animation-delay:-2.5s]">
            <BriefcaseBusiness className="h-4 w-4" />
            GESTIÓN EMPRESARIAL
          </div>

          <div className="absolute right-0 bottom-[18%] z-20 flex items-center gap-2 rounded-full border border-violet-500/20 bg-background/70 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-violet-500 shadow-lg shadow-violet-500/10 backdrop-blur-md">
            <Layout className="h-4 w-4" />
            DISEÑO WEB
          </div>

          <div className="relative w-[440px] h-[440px] flex items-center justify-center">
            <img
              src="/muñequito.webp"
              className="w-full h-auto object-contain animate-float animate-energy transition-all duration-700"
              alt="Mascota Logui"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
