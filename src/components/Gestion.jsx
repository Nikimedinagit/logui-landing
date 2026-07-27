import React, { useState, useEffect } from "react";
import { CheckCircle2, X, ArrowRight, ExternalLink } from "lucide-react";
import SectionTitle from "./SectionTitle";

const Gestion = () => {
  const [selectedModule, setSelectedModule] = useState(null);

  const handleNavigation = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  useEffect(() => {
    if (selectedModule) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [selectedModule]);

  const modulos = [
    {
      id: "punto-venta",
      title: "LOGUI PUNTO VENTA",
      desc: "Agilice su trabajo diario de venta.",
      image: "/gestion/punto-de-venta.jpg",
      path: "https://www.loguigestion.com/",
      color: "from-green-500",
      longDesc:
        "Un software simple, económico y completo para pequeños comercios, con el cual podrá agilizar su trabajo diario de venta.",
      info: [
        "Gestión de Clientes y Cuenta Corriente.",
        "Registro de Ventas y Devoluciones con diversos medios de cobro.",
        "Facturación Electrónica.",
        "Carga de Movimientos de dinero en Efectivo, Tarjeta, en múltiples Cajas.",
        "Consultas y Cierres de caja.",
        "Gestión de Pedidos de Delivery.",
        "Control de Gastos con diversos medios de pago.",
        "Gestión de Proveedores y su Cuenta Corriente.",
        "Control de Stock de Productos, con actualización de Precios de forma ágil.",
        "Generación del Listado de IVA Ventas Digital, sumando exportación al Régimen de Compra Ventas.",
        "Múltiples resultados de Venta.",
      ],
    },
    {
      id: "gestion",
      title: "LOGUI GESTIÓN",
      desc: "Software ágil y eficiente para su empresa.",
      image: "/gestion/gestion.jpg",
      path: "https://www.loguigestion.com/",
      color: "from-violet-600",
      longDesc:
        "Un software simple, económico, ágil y eficiente, con todas las características necesarias para elevar de nivel su comercio o empresa.",
      info: [
        "Carga de Clientes y Proveedores con sus respectivas Cuentas Corrientes.",
        "Registro de Ventas y Devoluciones con diversos medios de cobro.",
        "Permite las Ventas con Planes de Financiación propias con seguimientos de cuotas.",
        "Facturación Electrónica.",
        "Carga de Movimientos de dinero en Efectivo, Tarjeta, Bonos y Cheques de Terceros en múltiples Cajas.",
        "Consultas y Cierres de caja.",
        "Seguimiento de Cuentas Bancarias incluyendo Cheques Propios, Débitos y Créditos.",
        "Cashflow financiero.",
        "Registro de Facturas de compras, Gastos con diversos medios de pago",
        "Control de Stock de Productos, Actualización de precios de Costos y de Venta.",
        "Registración de costos en moneda extranjera y gastos fijos asociados al precio final del producto.",
        "Importación y Actualización de Productos mediante Excel.",
        "Generación del Listado de IVA Ventas y Compras Digital, sumando exportación al Régimen de Compra Ventas.",
        "Múltiples resultados de Venta y Compra.",
      ],
    },
    {
      id: "store-food",
      title: "LOGUI STORE & FOOD",
      desc: "Completo para su emprendimiento gastronómico.",
      image: "/gestion/store-food.jpg",
      path: "https://www.loguigestion.com/",
      color: "from-violet-500",
      longDesc:
        "Un software completo para su emprendimiento gastronómico, con todas las funcionalidades del Logui Store más lo necesario para agilizar y simplificar sus controles y manejos diarios.",
      info: [
        "Gestión de Pedidos por Mesas, con reservas, aperturas y cierres, permitiendo la organización del salón, mozos y pedidos de cocina.",
        "Carga de Productos Compuestos según la elaboración de los productos ofrecidos en la carta, permitiéndole determinar los Costos de cada elaboración.",
        "Manejo de Pedidos para Delivery.",
        "Carta Digital.",
        "Facturación Electrónica.",
        "Carga de Clientes y Proveedores con sus respectivas Cuentas Corrientes.",
        "Registro de Ventas y Devoluciones con diversos medios de cobro.",
        "Carga de Movimientos de dinero en Efectivo, Tarjeta, Bonos y Cheques de Terceros en múltiples Cajas.",
        "Consultas y Cierres de caja.",
        "Seguimiento de Cuentas Bancarias incluyendo Cheques Propios, Débitos y Créditos.",
        "Registro de Facturas de compras, Gastos con diversos medios de pago",
        "Control de Stock de Productos, Actualización de precios de Costos y de Venta.",
        "Generación del Listado de IVA Ventas y Compras Digital, sumando exportación al Régimen de Compra Ventas.",
        "Múltiples resultados de Venta y Compra.",
      ],
    },
    {
      id: "tiendas",
      title: "LOGUI TIENDAS",
      desc: "Control por talles y colores.",
      image: "/gestion/tiendas.jpg",
      path: "https://www.loguigestion.com/",
      color: "from-green-500",
      longDesc:
        "Un software completo para su emprendimiento comercial orientado a tiendas, con todas las funcionalidades del Logui Store más lo necesario para el correcto seguimiento y control de sus productos.",
      info: [
        "Manejo Productos o Prendas, Control de Stock, por Talles y Colores.",
        "Generación de Códigos de Barra y carga de Imágenes por producto.",
        "Carga de Clientes y Proveedores con sus respectivas Cuentas Corrientes.",
        "Registro de Ventas y Devoluciones con diversos medios de cobro.",
        "Permite las Ventas con Planes de Financiación propias con seguimientos de cuotas.",
        "Facturación Electrónica.",
        "Carga de Movimientos de dinero en Efectivo, Tarjeta, Bonos y Cheques de Terceros en múltiples Cajas.",
        "Consultas y Cierres de caja.",
        "Seguimiento de Cuentas Bancarias incluyendo Cheques Propios, Débitos y Créditos.",
        "Cashflow financiero.",
        "Registro de Facturas de compras, Gastos con diversos medios de pago",
        "Control de Stock de Productos, Actualización de precios de Costos y de Venta.",
        "Registración de costos en moneda extranjera y gastos fijos asociados al precio final del producto.",
        "Importación y Actualización de Productos mediante Excel.",
        "Generación del Listado de IVA Ventas y Compras Digital, sumando exportación al Régimen de Compra Ventas.",
        "Múltiples resultados de Venta y Compra.",
      ],
    },
    {
      id: "ferreteria",
      title: "LOGUI FERRETERÍA",
      desc: "Optimice el trabajo en su ferretería.",
      image: "/gestion/ferreteria.jpg",
      path: "https://www.loguigestion.com/",
      color: "from-green-500",
      longDesc:
        "Sistema desarrollado para optimizar y facilitar el trabajo en su ferretería. Ágil, sencillo y simple de usar.",
      info: [
        "Carga de Clientes y Proveedores con sus respectivas Cuentas Corrientes.",
        "Registro de Ventas y Devoluciones con diversos medios de cobro.",
        "Podrá realizar Presupuestos o Notas de Entrega.",
        "Permite las Ventas con Planes de Financiación propias con seguimientos de cuotas.",
        "Facturación Electrónica.",
        "Manejo de Reservas de Productos con entregas parciales y totales.",
        "Carga de Movimientos de dinero en Efectivo, Tarjeta, Bonos y Cheques de Terceros en múltiples Cajas.",
        "Consultas y Cierres de caja.",
        "Seguimiento de Cuentas Bancarias incluyendo Cheques Propios, Débitos y Créditos.",
        "Cashflow financiero.",
        "Registro de Facturas de compras, Gastos con diversos medios de pago",
        "Control de Stock de Productos, Actualización de precios de Costos y de Venta.",
        "Registración de costos en moneda extranjera y gastos fijos asociados al precio final del producto.",
        "Importación y Actualización de Productos mediante Excel con el código de proveedor.",
        "Generación del Listado de IVA Ventas y Compras Digital, sumando exportación al Régimen de Compra Ventas.",
        "Múltiples resultados de Venta y Compra.",
      ],
    },
    {
      id: "distribucion",
      title: "LOGUI DISTRIBUCIÓN",
      desc: "Administre pedidos de forma eficaz.",
      image: "/gestion/distribucion.jpg",
      path: "https://www.loguigestion.com/",
      color: "from-violet-500",
      longDesc:
        "Genere y administre los pedidos de sus clientes y la gestión de su empresa de forma eficaz y eficiente con este software.",
      info: [
        "Permitirá generar Pedidos desde el dispositivo móvil, diferenciados por Vendedores y Zonas.",
        "Carta de Carga de Pedidos.",
        "Seguimiento de los Pedidos, Actualización y confirmación de acuerdo al stock disponible para los despachos.",
        "Facturación Electrónica de Pedidos de forma ágil.",
        "Carga de Clientes y Proveedores con sus respectivas Cuentas Corrientes.",
        "Registro de Ventas y Devoluciones con diversos medios de cobro.",
        "Carga de Movimientos de dinero en Efectivo, Tarjeta, Bonos y Cheques de Terceros en múltiples Cajas.",
        "Consultas y Cierres de caja.",
        "Seguimiento de Cuentas Bancarias incluyendo Cheques Propios, Débitos y Créditos.",
        "Registro de Facturas de compras, Gastos con diversos medios de pago",
        "Control de Stock de Productos, Actualización de precios de Costos y de Venta.",
        "Registración de costos en moneda extranjera y gastos fijos asociados al precio final del producto.",
        "Importación y Actualización de Productos mediante Excel.",
        "Generación del Listado de IVA Ventas y Compras Digital, sumando exportación al Régimen de Compra Ventas.",
        "Múltiples resultados de Venta y Compra.",
      ],
    },
    {
      id: "super",
      title: "LOGUI SUPER",
      desc: "Potente y ágil para minimercados.",
      image: "/gestion/super.jpg",
      path: "https://www.loguigestion.com/",
      color: "from-violet-500",
      longDesc:
        "Software para supermercados, minimercados y despensas. Un software potente, ágil y simple que le permitirá gestionar su mercado de manera rápida y eficiente.",
      info: [
        "Carga de Clientes y Proveedores con sus respectivas Cuentas Corrientes.",
        "Rapidez en las Ventas por Código de Barra o Código de Producto con diversos medios de cobro.",
        "Permite la Conexión con Balanzas especiales para el rápido cálculo del Precio del Producto.",
        "Facturación Electrónica.",
        "Limita el Acceso al Sistema por Tipo de Usuarios para un Control más estricto.",
        "Carga de Movimientos de dinero en Efectivo, Tarjeta, Bonos y Cheques de Terceros en múltiples Cajas.",
        "Consultas y Cierres de caja.",
        "Seguimiento de Cuentas Bancarias incluyendo Cheques Propios, Débitos y Créditos.",
        "Cashflow financiero.",
        "Registro de Facturas de compras, Gastos con diversos medios de pago",
        "Control de Stock de Productos, Actualización de precios de Costos y de Venta.",
        "Importación y Actualización de Productos mediante Excel.",
        "Generación del Listado de IVA Ventas y Compras Digital, sumando exportación al Régimen de Compra Ventas.",
        "Múltiples resultados de Venta y Compra.",
      ],
    },
    {
      id: "mayorista",
      title: "LOGUI MAYORISTA",
      desc: "Manejo óptimo de información administrativa.",
      image: "/gestion/mayorista.jpg",
      path: "https://www.loguigestion.com/",
      color: "from-violet-500",
      longDesc:
        "El Software más simple y completo para manejar de forma óptima la información administrativa de su organización, empresas o comercios.",
      info: [
        "Carga de Clientes y Proveedores con sus respectivas Cuentas Corrientes.",
        "Registro de Ventas y Devoluciones con diversos medios de cobro.",
        "Facturación Electrónica.",
        "Permite las Ventas con Planes de Financiación propias con seguimientos de cuotas.",
        "Carga de Movimientos de dinero en Efectivo, Tarjeta, Bonos y Cheques de Terceros en múltiples Cajas.",
        "Consultas y Cierres de caja.",
        "Seguimiento de Cuentas Bancarias incluyendo Cheques Propios, Débitos y Créditos.",
        "Cashflow financiero.",
        "Registro de Facturas de compras, Gastos con diversos medios de pago",
        "Control de Stock de Productos, Actualización de precios de Costos y hasta 3 precios de Venta.",
        "Registración de costos en moneda extranjera y gastos fijos asociados al precio final del producto.",
        "Importación y Actualización de Productos mediante Excel.",
        "Generación del Listado de IVA Ventas y Compras Digital, sumando exportación al Régimen de Compra Ventas.",
        "Múltiples resultados de Venta y Compra.",
      ],
    },
    {
      id: "agro",
      title: "LOGUI AGRO",
      desc: "Soluciones para actividades agropecuarias.",
      image: "/gestion/agro.jpg",
      path: "http://www.loguiagro.com/",
      color: "from-green-500",
      longDesc:
        "Este software le permitirá organizar correctamente su empresa y actividades agropecuaria, agilizando los controles y organización.",
      info: [
        "Podrá marcar en un mapa los Campos y Lotes con los que Trabaja.",
        "Realizar el seguimiento de las Actividades Planificadas con vinculación directa.",
        "Cargar sus Herramientas y Vehículos de Trabajo y registrar los Mantenimientos.",
        "Control de Stock por múltiples depósitos.",
        "Asignar las Tareas a realizar por su Propio Personal o a Empresa Tercerizada.",
        "Gestión de Insumos utilizados en cada Trabajo.",
        "Emitir informes de Resultados Económicos por Lotes, Campos o Campañas.",
        "Control de Consumo de Combustible en vehículos y maquinarias.",
      ],
    },
    {
      id: "tareas",
      title: "MIS TAREAS",
      desc: "Organización de tareas y equipo.",
      image: "/gestion/tareas.jpg",
      path: "http://gestion.mistareasapp.com/",
      color: "from-green-500",
      longDesc:
        "El Software más simple y completo para manejar de forma óptima información administrativa de su organización.",
      info: [
        "Carga de Tareas agrupadas por Carpetas o Servicios.",
        "Tareas asignadas a diversos Usuarios con asignación de permisos.",
        "Control de Tareas Pendientes.",
        "Agenda de Tareas o Actividades por Empresa o por Usuarios.",
        "Estadísticas de Tipos de Tareas realizadas.",
        "Carga de Clientes y Proveedores con sus respectivas Cuentas Corrientes.",
        "Carga de Movimientos de dinero en Efectivo, Tarjeta, Bonos y Cheques.",
        "Facturación Electrónica.",
        "Registro Gastos con diversos medios de pago.",
        "Generación del Listado de IVA Ventas Digital.",
      ],
    },
  ];

  return (
    <section
      id="gestion"
      className="scroll-mt-16 py-12 bg-background transition-colors duration-300"
    >
      <div className="w-full px-6 md:px-16">
        <div className="mb-8">
          <SectionTitle
            subtitulo="SOFTWARE PROFESIONAL PARA EL CONTROL INTEGRAL DE TU EMPRESA Y NEGOCIO"
            tituloPrincipal="LOGUI"
            palabraResaltada="GESTIÓN"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6">
          {modulos.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedModule(item)}
              className="group relative bg-card hover:bg-accent border border-border p-4 rounded-2xl cursor-pointer transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden flex flex-col justify-between min-h-[160px]"
            >
              <img
                src={item.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-card/95 via-card/90 to-card/70 transition-opacity duration-300 group-hover:opacity-85" />

              <div
                className={`absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-br ${item.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`}
              />

              <div className="relative z-10">
                <h4 className="text-lg font-black tracking-tighter text-foreground group-hover:text-primary transition-colors uppercase mb-2">
                  {item.title}
                </h4>
                <p className="text-lg text-muted-foreground tracking-tight font-medium leading-snug line-clamp-2">
                  {item.desc}
                </p>
              </div>

              <div className="relative z-10 mt-4 flex items-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-3 py-1.5 text-[12px] font-bold tracking-widest text-white shadow-md shadow-violet-500/20 transition-all group-hover:bg-green-500 group-hover:shadow-green-500/20">
                  SABER MÁS
                  <ArrowRight
                    size={13}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedModule && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center sm:p-4">
          <div
            className="absolute inset-0 bg-background/40 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setSelectedModule(null)}
          />

          <div className="relative w-full max-w-3xl bg-card border border-border sm:rounded-3xl shadow-2xl h-[85vh] sm:h-auto sm:max-h-[90vh] flex flex-col animate-in slide-in-from-bottom duration-500">
            <div className="w-12 h-1.5 bg-muted rounded-full mx-auto mb-2 opacity-50" />

            <button
              onClick={() => setSelectedModule(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-accent/50 hover:bg-accent text-foreground transition-colors z-10 cursor-pointer"
            >
              <X size={20} />
            </button>

            <div className="px-4 pt-2 mb-2">
              <h3 className="text-2xl md:text-2xl font-black uppercase tracking-tighter text-foreground">
                {selectedModule.title}
              </h3>
              <p className="text-base text-violet-500 font-bold tracking-widest mt-1">
                Detalles del módulo
              </p>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4 scrollbar-thin scrollbar-thumb-violet-500/20 scrollbar-track-transparent">
              <div className="p-4 bg-accent/30 rounded-2xl border border-border/50">
                <p className="text-base text-muted-foreground font-medium leading-relaxed tracking-tight">
                  "{selectedModule.longDesc}"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedModule.info.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 items-center p-2 bg-background border border-border/40 rounded-xl"
                  >
                    <CheckCircle2 className="text-green-500 shrink-0 w-4 h-4" />
                    <p className="text-base text-foreground/80 tracking-tight font-medium">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-border flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleNavigation(selectedModule.path)}
                className="flex-1 py-3 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Ir al Sistema <ExternalLink size={14} />
              </button>
              <button
                onClick={() => setSelectedModule(null)}
                className="px-8 py-3 bg-secondary text-secondary-foreground text-xs font-bold tracking-widest uppercase rounded-xl hover:bg-accent transition-all cursor-pointer"
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #8b5cf6;
          border-radius: 20px;
        }
      `}</style>
    </section>
  );
};

export default Gestion;
