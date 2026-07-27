import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const Contacto = () => {
  const redesSociales = [
    {
      icono: <Instagram size={20} />,
      url: "https://www.instagram.com/loguisoft",
      hoverColor: "hover:bg-violet-500",
    },
    {
      icono: <Linkedin size={20} />,
      url: "https://www.linkedin.com/company/logui-soft/posts/?feedView=all",
      hoverColor: "hover:bg-violet-600",
    },
    {
      icono: <Facebook size={20} />,
      url: "https://www.facebook.com/loguisoft",
      hoverColor: "hover:bg-green-500",
    },
    {
      icono: <Youtube size={20} />,
      url: "https://www.youtube.com/channel/UCsTBsNbnEIiphWfcSmWA0jA/videos?view=0&sort=da",
      hoverColor: "hover:bg-green-600",
    },
  ];

  return (
    <section id="contacto" className="scroll-mt-16 py-12 bg-background">
      <div className="w-full px-6 md:px-16">
        <SectionTitle
          subtitulo="ESTAMOS A UN CLIC DE DISTANCIA"
          tituloPrincipal="PUNTOS DE"
          palabraResaltada="CONTACTO"
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-muted-foreground text-lg font-medium leading-relaxed max-w-md">
                Puedes comunicarte con nosotros acercándote a nuestra oficina,
                por correo, teléfono o a través de nuestras redes sociales.
                Estamos listos para potenciar tu negocio.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-xl bg-violet-500 text-white border border-violet-600 shadow-sm transition-all duration-300 group-hover:scale-110">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-foreground font-bold text-lg leading-tight">
                    Bv. Sarmiento 279
                  </p>
                  <p className="text-muted-foreground text-xs font-bold uppercase">
                    Morteros, Córdoba
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-xl bg-green-500 text-white border border-green-600 shadow-sm transition-all duration-300 group-hover:scale-110">
                  <Mail size={24} />
                </div>
                <div>
                  <a
                    href="mailto:loguisoft@gmail.com"
                    className="text-foreground font-bold text-lg hover:text-green-500 transition-colors"
                  >
                    loguisoft@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-xl bg-violet-500 text-white border border-violet-600 shadow-sm transition-all duration-300 group-hover:scale-110">
                  <Phone size={24} />
                </div>
                <div>
                  <a
                    href="tel:+543562504057"
                    className="text-foreground font-bold text-lg hover:text-violet-500 transition-colors"
                  >
                    +54 3562 504057
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a
                href="https://wa.me/543562504057"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500 text-white hover:bg-green-600 transition-all font-bold text-base uppercase tracking-widest shadow-lg shadow-green-500/20 active:scale-95"
              >
                <MessageSquare size={18} /> WhatsApp
              </a>

              <div className="flex gap-3">
                {redesSociales.map((red, idx) => (
                  <a
                    key={idx}
                    href={red.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl bg-card border border-border text-foreground transition-all duration-300 ${red.hoverColor} hover:text-white hover:scale-110 active:scale-90`}
                  >
                    {red.icono}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 h-[350px] md:h-[350px] w-full relative group">
            <div className="absolute inset-0 bg-violet-500/5 rounded-[2.5rem] rotate-1 scale-105 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-border bg-card shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.7214691459226!2d-62.0044555!3d-30.7120614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943403a391f37bef%3A0x6bd9efc0c0e06de2!2sBv.%20Sarmiento%20279%2C%20Morteros%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1710000000000!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
