import React from 'react'
import { Layout, Cpu } from "lucide-react"
import SectionTitle from "./SectionTitle"

const Servicios = () => {
  const servicios = [
    {
      title: "APLICACIONES WEB",
      icon: <Cpu className="text-green-500" size={32} />,
      items: [
        "Desarrollo de aplicaciones dinámicas y adaptativas.",
        "Orientadas a la Gestión Comercial y Empresarial escalable.",
        "Acceso desde cualquier lugar con conexión a internet.",
        "Compatibles con Servidores Locales o Web.",
        "Desarrollo de aplicaciones totalmente a medida."
      ]
    },
    {
      title: "DISEÑO WEB",
      icon: <Layout className="text-violet-500" size={32} />,
      items: [
        "Sitios web totalmente responsivos para PC, Tablets y Celulares.",
        "Compatibilidad total con Chrome, Firefox, Edge y Opera.",
        "Desarrollo de Sitios Web Autogestionables.",
        "Independencia total para cambiar imágenes, textos y enlaces.",
        "Diseños personalizados alineados a tu marca."
      ]
    }
  ]

  return (
    <section id="servicios" className="scroll-mt-16 py-12 bg-background">
      <div className="w-full px-6 md:px-16">
        
        <SectionTitle 
          subtitulo="SOLUCIONES INFORMÁTICAS INTEGRALES ENFOCADAS EN LOS COMPONENTES DE SOFTWARE DE TU EMPRESA"
          tituloPrincipal="NUESTROS"
          palabraResaltada="SERVICIOS"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          {servicios.map((servicio, index) => (
            <div 
              key={index} 
              className="group p-4 rounded-3xl bg-card border border-border hover:border-violet-500/50 transition-all duration-500 shadow-sm hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                {servicio.icon}
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-secondary">
                  {servicio.icon}
                </div>
                <h4 className="text-xl font-black tracking-tighter uppercase text-foreground">
                  {servicio.title}
                </h4>
              </div>

              <div className="space-y-2">
                {servicio.items.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    <p className="text-lg text-muted-foreground font-medium leading-relaxed tracking-tight">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-border to-transparent group-hover:via-violet-500/50 transition-all" />
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 border border-dashed border-border rounded-3xl text-center">
          <p className="text-lg font-medium tracking-tight text-muted-foreground">
            Todos nuestros servicios corresponden al <span className="text-violet-500 font-bold">Sector Informático</span> de alta gama.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Servicios