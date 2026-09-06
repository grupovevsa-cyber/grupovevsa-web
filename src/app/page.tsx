import Link from "next/link";
import Image from "next/image";
import { HeroSlider } from "@/components/ui/HeroSlider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Carrusel Dinámico (Sustituye al Hero estático) */}
      <HeroSlider />

      {/* Quiénes Somos & Misión/Visión */}
      <section className="py-20 bg-white" id="nosotros">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">QUIÉNES SOMOS</h2>
            <p className="text-slate-600 text-lg">
              GRUPO VEV, S.A. es una empresa panameña orientada a la excelencia en servicios empresariales, desarrollo de software, integración tecnológica y ejecución de sistemas especiales para obras comerciales, corporativas y civiles.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Nuestra Misión</h3>
              <p className="text-slate-600">
                Proveer soluciones integrales de alto valor en desarrollo tecnológico, infraestructura crítica y consultoría estratégica que optimicen la productividad, confiabilidad y rentabilidad de nuestros clientes.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Nuestra Visión</h3>
              <p className="text-slate-600">
                Consolidarnos como un referente corporativo y tecnológico de confianza a nivel nacional e internacional, reconocidos por nuestra capacidad técnica y ecosistema de software propio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Software Propietario (Productos) */}
      <section className="py-20 bg-slate-50" id="productos">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">SOFTWARE PROPIETARIO</h2>
            <p className="text-slate-600">Plataformas desarrolladas in-house con tecnología escalable en la nube.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* ICONPOS WEBCONECT */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col transition hover:shadow-md">
              <h3 className="text-lg font-bold text-blue-900 mb-2">ICONPOS WEBCONECT</h3>
              <p className="text-sm text-slate-600 mb-4 flex-grow">
                Plataforma centralizada de interconexión y sincronización de puntos de venta, transacciones multisede y monitoreo cloud en tiempo real.
              </p>
              <Link href="/productos/iconpos" className="text-blue-600 font-medium text-sm hover:underline mt-auto">Ver detalles →</Link>
            </div>

            {/* ICONPOS WEB INVOICE */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 ring-1 ring-blue-500/20 flex flex-col transition hover:shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">DGI PANAMÁ</div>
              <h3 className="text-lg font-bold text-blue-900 mb-2 mt-2">ICONPOS WEB INVOICE</h3>
              <p className="text-sm text-slate-600 mb-4 flex-grow">
                Módulo omnicanal de emisión fiscal. Generación de CUFE, QR DGI, descarga automática de comprobantes y reportería contable.
              </p>
              <Link href="/productos/iconpos-web-invoice" className="text-blue-600 font-medium text-sm hover:underline mt-auto">Ir al facturador →</Link>
            </div>

            {/* ICON SUPPORT */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col transition hover:shadow-md">
              <h3 className="text-lg font-bold text-blue-900 mb-2">ICON SUPPORT</h3>
              <p className="text-sm text-slate-600 mb-4 flex-grow">
                Plataforma web de soporte técnico con tickets de servicio, trazabilidad QR, geolocalización y firmas digitales.
              </p>
              <Link href="/productos/icon-support" className="text-blue-600 font-medium text-sm hover:underline mt-auto">Ver detalles →</Link>
            </div>

            {/* ICON GENIUS */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col transition hover:shadow-md">
              <h3 className="text-lg font-bold text-blue-900 mb-2">ICON GENIUS & BUILDER</h3>
              <p className="text-sm text-slate-600 mb-4 flex-grow">
                Plataforma inteligente de desarrollo asistido con IA. Constructora de flujos de automatización operativa.
              </p>
              <Link href="/productos/icon-genius" className="text-blue-600 font-medium text-sm hover:underline mt-auto">Ver detalles →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Especializados */}
      <section className="py-20 bg-white" id="servicios">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">SISTEMAS Y SERVICIOS INTEGRALES</h2>
            <p className="text-slate-600">Portafolio integral de obras, soluciones técnicas y desarrollo a medida.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Desarrollo a la Medida</h3>
              <p className="text-slate-600 text-sm">
                Ingeniería de software adaptada a requerimientos únicos. Aplicaciones web y microservicios escalables. Integraciones a ERPs legacy y bases de datos.
              </p>
            </div>
            <div>
              <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Sistemas Especiales</h3>
              <p className="text-slate-600 text-sm">
                Diseño y ejecución de infraestructura de red, centros de datos, videovigilancia CCTV, cableado estructurado y calidad de energía (UPS).
              </p>
            </div>
            <div>
              <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Equipos Informáticos (Venta)</h3>
              <p className="text-slate-600 text-sm">
                Cómputo corporativo, impresoras fiscales DGI, periféricos de TPV, servidores y licenciamiento con garantía directa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
