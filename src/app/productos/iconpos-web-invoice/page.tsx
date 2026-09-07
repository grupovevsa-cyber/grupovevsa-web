import Image from "next/image";
import Link from "next/link";
import { Receipt, FileDigit, BrainCircuit, LineChart, ShieldCheck, QrCode, Cloud, MonitorSmartphone, Search, LayoutDashboard } from "lucide-react";

export default function IconposWebInvoicePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Header */}
      <section className="bg-[#0A132B] pt-24 pb-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Cloud className="w-64 h-64 text-sky-400" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#081024] flex flex-col items-center justify-center shadow-lg border border-slate-700/50">
              <span className="text-white text-[7px] font-black leading-none tracking-widest mt-1 opacity-90">ICONPOS</span>
              <Cloud className="w-6 h-6 text-sky-400 my-0.5" strokeWidth={2.5} />
              <span className="text-sky-400 text-[9px] font-black leading-none drop-shadow-sm mb-1">WEB</span>
            </div>
            <span className="text-sky-400 font-bold tracking-widest text-sm uppercase">Módulo Omnicanal Fiscal</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                Emisión Fiscal <br/> 
                <span className="text-sky-400">Automatizada y en la Nube</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Sistema SAAS certificado para la generación de CUFE, QR DGI, control de inventario y descarga automática de comprobantes. Todo centralizado para el cumplimiento fiscal (DGI) en tiempo real.
              </p>
              <div className="flex gap-4">
                <Link href="/contacto" className="inline-flex h-12 items-center justify-center rounded-lg bg-sky-500 px-8 font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400 transition-colors">
                  Solicitar Demostración
                </Link>
              </div>
            </div>
            
            {/* Hero Image Mockup */}
            <div className="relative mx-auto border-slate-800 bg-slate-800 border-[8px] rounded-xl h-[300px] sm:h-[400px] w-full max-w-2xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="rounded overflow-hidden w-full h-full bg-white relative">
                <Image 
                  src="/images/iconpos-web-invoice/Inicio de SItema SAAS -iconpos web invoice- online.jpg" 
                  alt="Inicio ICONPOS WEB INVOICE SAAS" 
                  fill 
                  className="object-cover object-left-top" 
                />
              </div>
              <div className="absolute -bottom-[16px] -inset-x-8 h-[16px] bg-slate-700 rounded-b-xl shadow-lg flex justify-center items-start">
                 <div className="w-24 h-2 bg-slate-800 rounded-b-md"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facturación Fiscal y CUFE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-4">Emisión de Facturas y Notas de Crédito</h2>
            <p className="text-slate-600 text-lg">
              Cumplimiento total con los requerimientos de la DGI Panamá. Timbrado electrónico transparente y sin complicaciones.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Monitor Mockup */}
            <div className="relative mx-auto border-gray-900 bg-gray-900 border-[10px] rounded-2xl h-[300px] sm:h-[400px] w-full max-w-2xl shadow-xl">
              <div className="rounded-lg overflow-hidden w-full h-full bg-slate-100 relative">
                <Image 
                  src="/images/iconpos-web-invoice/crear factura iconpos web invoice.jpg" 
                  alt="Pantalla de Facturación" 
                  fill 
                  className="object-cover object-top" 
                />
              </div>
            </div>
            
            <div>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-600 shrink-0 mt-1">
                    <Receipt className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Facturación Inteligente</h3>
                    <p className="text-slate-600">Creación de facturas B2B, B2C, gubernamentales y de exportación. Cálculo exacto de ITBMS, ISC y retenciones aplicables.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="bg-sky-50 p-3 rounded-lg text-sky-600 shrink-0 mt-1">
                    <QrCode className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Generación de CUFE y QR</h3>
                    <p className="text-slate-600">Al timbrar, el sistema genera inmediatamente el Código Único de Facturación Electrónica (CUFE) y el código QR oficial de la DGI.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="bg-indigo-50 p-3 rounded-lg text-indigo-600 shrink-0 mt-1">
                    <FileDigit className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Notas de Crédito y Débito</h3>
                    <p className="text-slate-600">Referencia a facturas originales fácilmente para realizar anulaciones o ajustes según las regulaciones fiscales.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inteligencia Artificial y OCR */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1">
              <span className="text-indigo-600 font-bold tracking-widest text-[11px] uppercase mb-2 block">Carga Automatizada</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-6">Lectura OCR e Inteligencia Artificial</h2>
              <p className="text-slate-600 text-lg mb-8">
                Elimina el ingreso manual de compras y gastos. ICONPOS WEB INVOICE utiliza IA para leer documentos y precargar los datos instantáneamente al inventario y contabilidad.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-colors">
                  <BrainCircuit className="w-8 h-8 text-indigo-500 mb-3" />
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Carga de Facturas</h4>
                  <p className="text-xs text-slate-500">Sube PDF o fotos, la IA detecta RUC, proveedor, totales y desglose automáticamente.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-colors">
                  <Search className="w-8 h-8 text-indigo-500 mb-3" />
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Catálogo de Productos</h4>
                  <p className="text-xs text-slate-500">Actualización masiva y creación de artículos de forma asistida desde documentos escaneados.</p>
                </div>
              </div>
            </div>

            {/* AI Mockups */}
            <div className="order-1 lg:order-2 grid gap-6">
              <div className="relative border-slate-200 bg-white border rounded-xl h-[220px] w-full shadow-lg overflow-hidden transform translate-x-4 lg:translate-x-8 hover:-translate-y-2 transition-transform">
                <Image 
                  src="/images/iconpos-web-invoice/carga factura compra con IA LECTOR OCR iconpos web invoice.jpg" 
                  alt="Carga de Facturas con OCR e IA" 
                  fill 
                  className="object-cover object-top" 
                />
              </div>
              <div className="relative border-slate-200 bg-white border rounded-xl h-[220px] w-full shadow-lg overflow-hidden transform -translate-x-4 lg:-translate-x-8 hover:-translate-y-2 transition-transform">
                <Image 
                  src="/images/iconpos-web-invoice/carga productos con IA iconpos web invoice.jpg" 
                  alt="Carga de Productos con IA" 
                  fill 
                  className="object-cover object-top" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Panel Administrativo & Dashboard */}
      <section className="py-24 bg-[#0A132B] text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight mb-4">Dashboard Gerencial y Control Operativo</h2>
            <p className="text-slate-400 text-lg">Visualiza la salud financiera de tu empresa desde cualquier dispositivo con internet.</p>
          </div>
          
          <div className="relative mx-auto mb-16 border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[250px] sm:h-[400px] md:h-[500px] max-w-5xl shadow-2xl hover:shadow-cyan-900/20 transition-shadow">
            <div className="rounded-sm overflow-hidden w-full h-full bg-slate-900 relative">
              <Image 
                src="/images/iconpos-web-invoice/dashboard iconpos web invoice.png" 
                alt="Dashboard ICONPOS WEB INVOICE" 
                fill 
                className="object-cover object-top" 
              />
            </div>
            <div className="absolute -bottom-[16px] -inset-x-8 h-[16px] bg-slate-700 rounded-b-xl shadow-lg flex justify-center items-start">
               <div className="w-24 h-2 bg-slate-900 rounded-b-md"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            <div className="p-8 bg-[#101C3D] border border-blue-900/50 rounded-2xl">
              <LayoutDashboard className="w-10 h-10 text-sky-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Métricas en Vivo</h3>
              <p className="text-slate-400 text-sm">
                Ventas del día, semana o mes, facturas emitidas, cuentas por cobrar y estatus de transmisión DGI al instante.
              </p>
            </div>
            <div className="p-8 bg-[#101C3D] border border-blue-900/50 rounded-2xl">
              <MonitorSmartphone className="w-10 h-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Accesibilidad Cloud</h3>
              <p className="text-slate-400 text-sm">
                Entra desde PC, Mac, Tablet o Smartphone sin instalaciones complicadas. Tu contabilidad viaja contigo.
              </p>
            </div>
            <div className="p-8 bg-[#101C3D] border border-blue-900/50 rounded-2xl">
              <ShieldCheck className="w-10 h-10 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Respaldo y Seguridad</h3>
              <p className="text-slate-400 text-sm">
                Copias de seguridad automáticas en la nube y retención de comprobantes por el periodo que exige la ley.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo Punto de Venta Retail/Restaurante */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1 relative mx-auto border-gray-300 bg-white border-[14px] rounded-[2.5rem] h-[550px] w-[280px] shadow-2xl md:rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
               <div className="h-[46px] w-[3px] bg-gray-300 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
               <div className="h-[46px] w-[3px] bg-gray-300 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
               <div className="h-[64px] w-[3px] bg-gray-300 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
               <div className="rounded-[1.5rem] overflow-hidden w-full h-full bg-slate-100 relative">
                  <Image 
                    src="/images/iconpos-web-invoice/tpv retail pantalla de ventas- iconpos web invoice.jpg" 
                    alt="TPV Retail" 
                    fill 
                    className="object-cover object-left" 
                  />
               </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-sky-500 font-bold tracking-widest text-[11px] uppercase mb-2 block">Integración Puntos de Venta</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-6">Conexión con TPV Retail y Restaurantes</h2>
              <p className="text-slate-600 text-lg mb-8">
                El módulo de Web Invoice se integra perfectamente con las estaciones de punto de venta (TPV). Factura de forma rápida y emite comprobantes fiscales electrónicos en comercios minoristas y hostelería.
              </p>
              
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">✓</div>
                  <span className="text-slate-700"><strong>Retail Avanzado:</strong> Escaneo de código de barras, control de caja ciega y múltiples medios de pago.</span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">✓</div>
                  <span className="text-slate-700"><strong>Restaurantes (F&B):</strong> Envío de comandas, control de mesas, división de cuentas e ITBMS discriminado.</span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">✓</div>
                  <span className="text-slate-700"><strong>Control de Inventario:</strong> Descarga instantánea de existencias (recetas e insumos) al concretar una venta.</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-sky-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <Cloud className="w-16 h-16 text-sky-200 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Emite tu primera factura en minutos</h2>
          <p className="text-sky-100 mb-8 text-lg">Pásate a la facturación electrónica con ICONPOS WEB INVOICE. Cero dolores de cabeza, 100% de cumplimiento fiscal DGI.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 font-bold text-sky-700 shadow hover:bg-slate-50 transition-colors">
              Hablar con un Experto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
