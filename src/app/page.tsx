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

      {/* Nuestras Soluciones (Productos) */}
      <section className="py-24 bg-slate-50" id="productos">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Nuestras <span className="text-blue-600">Soluciones</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Ofrecemos herramientas modulares que transforman la gestión empresarial, se adaptan a tus procesos y llevan tu negocio al siguiente nivel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* ICONPOS WEBCONECT */}
            <div className="bg-white px-6 py-10 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col items-center text-center group">
              {/* App Icon */}
              <div className="w-24 h-24 mb-6 rounded-[26px] bg-gradient-to-br from-teal-600 to-teal-800 shadow-lg shadow-teal-700/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-black text-xl leading-tight tracking-tight drop-shadow-md">ICON<br/>POS</span>
              </div>
              <h3 className="text-lg font-bold text-teal-800 mb-4 h-14 flex items-center justify-center">ICONPOS WEBCONECT</h3>
              <div className="w-12 h-1 bg-slate-200 rounded-full mb-6"></div>
              <p className="text-sm text-slate-500 mb-8 flex-grow leading-relaxed">
                Plataforma centralizada de interconexión y sincronización de puntos de venta, transacciones multisede y monitoreo cloud en tiempo real.
              </p>
              <Link href="/productos/iconpos" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-teal-600 group-hover:text-white transition-colors" title="Ver detalles">
                <span className="font-bold text-xl leading-none ml-0.5">›</span>
              </Link>
            </div>

            {/* ICONPOS WEB INVOICE */}
            <div className="bg-white px-6 py-10 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col items-center text-center group relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 mx-auto w-32 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-b-lg drop-shadow-sm">DGI PANAMÁ</div>
              {/* App Icon */}
              <div className="w-24 h-24 mb-6 mt-4 rounded-[26px] bg-gradient-to-br from-blue-600 to-indigo-800 shadow-lg shadow-blue-700/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-black text-xl leading-tight tracking-tight drop-shadow-md">WEB<br/>INV</span>
              </div>
              <h3 className="text-lg font-bold text-blue-800 mb-4 h-14 flex items-center justify-center">ICONPOS WEB INVOICE</h3>
              <div className="w-12 h-1 bg-slate-200 rounded-full mb-6"></div>
              <p className="text-sm text-slate-500 mb-8 flex-grow leading-relaxed">
                Módulo omnicanal de emisión fiscal. Generación de CUFE, QR DGI, descarga automática de comprobantes y reportería contable.
              </p>
              <Link href="/productos/iconpos-web-invoice" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors" title="Ir al facturador">
                <span className="font-bold text-xl leading-none ml-0.5">›</span>
              </Link>
            </div>

            {/* ICON SUPPORT */}
            <div className="bg-white px-6 py-10 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col items-center text-center group">
              {/* App Icon */}
              <div className="w-24 h-24 mb-6 rounded-[26px] bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-700/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-black text-xl leading-tight tracking-tight drop-shadow-md">ICON<br/>SUP</span>
              </div>
              <h3 className="text-lg font-bold text-emerald-800 mb-4 h-14 flex items-center justify-center">ICON SUPPORT</h3>
              <div className="w-12 h-1 bg-slate-200 rounded-full mb-6"></div>
              <p className="text-sm text-slate-500 mb-8 flex-grow leading-relaxed">
                Plataforma web de soporte técnico con tickets de servicio, trazabilidad QR, geolocalización y firmas digitales.
              </p>
              <Link href="/productos/icon-support" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors" title="Ver detalles">
                <span className="font-bold text-xl leading-none ml-0.5">›</span>
              </Link>
            </div>

            {/* ICON GENIUS */}
            <div className="bg-white px-6 py-10 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col items-center text-center group">
              {/* App Icon */}
              <div className="w-24 h-24 mb-6 rounded-[26px] bg-gradient-to-br from-rose-600 to-rose-800 shadow-lg shadow-rose-700/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-black text-xl leading-tight tracking-tight drop-shadow-md">ICON<br/>GEN</span>
              </div>
              <h3 className="text-lg font-bold text-rose-800 mb-4 h-14 flex items-center justify-center">ICON GENIUS & BUILDER</h3>
              <div className="w-12 h-1 bg-slate-200 rounded-full mb-6"></div>
              <p className="text-sm text-slate-500 mb-8 flex-grow leading-relaxed">
                Plataforma inteligente de desarrollo asistido con IA. Constructora de flujos de automatización operativa.
              </p>
              <Link href="/productos/icon-genius" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-rose-600 group-hover:text-white transition-colors" title="Ver detalles">
                <span className="font-bold text-xl leading-none ml-0.5">›</span>
              </Link>
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
