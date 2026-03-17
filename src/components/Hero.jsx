import React from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8"
    >
      <div className="absolute -left-[10%] top-[20%] w-[400px] h-[400px] bg-green-500/15 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute -right-[10%] bottom-[20%] w-[400px] h-[400px] bg-violet-500/15 blur-[120px] rounded-full -z-10 animate-pulse" />

      <div className="w-full px-6 md:px-16 flex flex-col md:flex-row items-center gap-12 relative z-10">
        
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-violet-500 font-bold tracking-[0.4em] text-xs md:text-sm uppercase">
            Potencia Tecnológica
          </h2>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
            DESARROLLO <br />
            DE{" "}
            <span className="bg-gradient-to-r from-green-500 to-violet-500 bg-clip-text text-transparent">
              SOFTWARE
            </span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-lg max-w-[550px] font-medium uppercase tracking-widest leading-relaxed">
            Soluciones inteligentes para tu negocio
            <br className="hidden md:block" />
            con el sello de <span className="text-green-500">Logui Soft</span>.
          </p>

          <div className="pt-4 flex justify-center md:justify-start">
            <button
              onClick={() =>
                document
                  .getElementById("gestion")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] uppercase hover:text-green-500 transition-all"
            >
              <span className="relative">
                VER MÁS
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-violet-500 group-hover:bg-green-500 transition-colors"></span>
              </span>
              <ChevronDown className="w-4 h-4 animate-bounce text-violet-500 group-hover:text-green-500" />
            </button>
          </div>
        </div>

        <div className="hidden md:flex flex-1 justify-center items-center relative">
          <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tr from-green-500/20 to-violet-500/20 rounded-full blur-3xl" />

          <div className="relative w-72 h-72 md:w-[500px] md:h-[500px] flex items-center justify-center">
            <img
              src="/muñequito.png"
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