import React from "react";
import SectionTitle from "./SectionTitle";

const Clientes = () => {
  const fila1Original = [
    "AcerosMorteros.png",
    "AgroDiseño.png",
    "AlexRobles.jpeg",
    "Angonoa.png",
    "BrisaMas.png",
    "BRUNA_ADRIAN.png",
    "Buzzi.jpeg",
    "Caglieris.jpeg",
    "Carli1.jpeg",
    "CasaYsola.jpeg",
    "CMYCP.png",
    "Coletto.png",
    "CorralonGUEMES.jpg",
    "CovenCar.png",
    "DeepHouse.png",
    "DistribuidoraBiglia.png",
    "ElCorrecaminos.png",
    "Elegante1.jpeg",
    "ElPaloLogoNegro.png",
    "EntreCopas.jpeg",
    "Frola.png",
    "LaCantinaDel9.png",
    "LaConfianza.png",
    "LaCueva1.jpeg",
    "LaIdeal.png",
    "Lapacor.png",
    "Mediterranea.png",
    "MetaDeportiva.jpeg",
    "MetalWar1.png",
    "MImportaciones.jpeg",
    "MundoGoma.png",
    "MyT.jpg",
    "Pinceladas.png",
    "PintureriaGiaveno.jpg",
    "RAM.jpg",
    "Rodar.png",
    "RRAlineado.png",
    "suardi_agropecuaria.png",
    "TelSuar.png",
    "TiendaClub.png",
    "VetDemarco.png",
    "VeterinariosAsociados.png",
    "VetPietroni.png",
  ];

  const fila2Original = [
    "25Store.png",
    "ACSystem.png",
    "Aza.png",
    "Balmor.png",
    "Bertolotti.png",
    "Boscarol.jpeg",
    "CasaLito.png",
    "claroMorteros-Porteña.jpeg",
    "ClubC.png",
    "CorralonAvenida.jpeg",
    "DespensaMarcela.png",
    "Dicsa.png",
    "DistribuidoraSur.jpeg",
    "FerreteriaHome.png",
    "FerreteriaViano.jpg",
    "GlobalExpress.jpeg",
    "Grafica_Bonetto.png",
    "INNOVA.png",
    "Julio_Aberturas.png",
    "LaDolce1.jpeg",
    "LaFerreteria.png",
    "LaIdealDeportes.png",
    "LANDI.jpeg",
    "logo_kokopelli_1.png",
    "logoAxionMorteros.jpg",
    "LOGOEMES.R.L.png",
    "LogoRT1.png",
    "logovet2020.png",
    "MinimercadoHuguito.jpg",
    "MorterosTecnoStore1.png",
    "MrPollo.jpeg",
    "MyODistribuciones.jpeg",
    "OleoHidraulica.png",
    "Polo.jpg",
    "PRODAS.jpg",
    "PROVIALMORTEROS.png",
    "Quassollo-1.png",
    "SantaMaria.jpg",
    "SyS.jpeg",
    "Tauro.png",
    "TiendaAventura.png",
    "TodoAgua.jpeg",
    "varsovia.png",
    "Zoppetto.jpg",
  ];

  const fila1 = [...fila1Original, ...fila1Original];
  const fila2 = [...fila2Original, ...fila2Original];

  const renderLogo = (archivo, carpeta) => (
    <div className="flex items-center justify-center w-32 md:w-48 shrink-0 transition-all duration-500">
      <img
        src={`/${carpeta}/${archivo}`}
        alt="Cliente"
        className={`
        max-w-full h-auto max-h-16 md:max-h-20 object-contain 
        grayscale opacity-50 
        transition-all duration-700 cursor-pointer 
        
        hover:grayscale-0 hover:opacity-100 hover:scale-110 hover:invert-0
        
        dark:invert dark:brightness-200 
        
        dark:hover:invert-0 dark:hover:brightness-100
      `}
        loading="lazy"
      />
    </div>
  );

  return (
    <section
      id="clientes"
      className="scroll-mt-16 py-12 bg-background overflow-hidden"
    >
      <div className="w-full px-6 md:px-16">
        <SectionTitle
          subtitulo="EMPRESAS QUE POTENCIAN SU GESTIÓN CON NUESTROS COMPONENTES DE SOFTWARE"
          tituloPrincipal="NUESTROS"
          palabraResaltada="CLIENTES"
        />

        <div className="relative mt-12 [mask-image:linear-gradient(to_right,transparent,black_30%,black_90%,transparent)] flex flex-col gap-16 md:gap-24">
          <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused] gap-16 md:gap-24 items-center">
            {fila1.map((archivo, index) => (
              <React.Fragment key={`f1-${index}`}>
                {renderLogo(archivo, "clientes")}
              </React.Fragment>
            ))}
          </div>

          <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused] gap-16 md:gap-24 items-center">
            {fila2.map((archivo, index) => (
              <React.Fragment key={`f2-${index}`}>
                {renderLogo(archivo, "clientes2")}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 100s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 100s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Clientes;
