import Link from "next/link";
import { FileText, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function IconposWebInvoice() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-sm font-semibold mb-6 border border-blue-500/30">
            DGI PANAMÁ • Proveedor Autorizado
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            ICONPOS <span className="text-blue-400">WEB INVOICE</span>
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
            Módulo omnicanal de emisión y gestión fiscal electrónica en la nube.
          </p>
        </div>
      </section>

      {/* Características Principales */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Cumplimiento Tributario Impecable</h2>
              <p className="text-slate-600 mb-8 text-lg">
                Generación de CUFE, QR DGI, descarga automática de comprobantes y reportería contable. Homologación tributaria garantizada bajo la normativa vigente en Panamá.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                  <span className="text-slate-700 font-medium">Integración con PAC Autorizado</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                  <span className="text-slate-700 font-medium">Distribución de Folios DGI</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                  <span className="text-slate-700 font-medium">Reportería Contable y Exportación</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col items-center justify-center aspect-square">
              <FileText className="w-16 h-16 text-blue-300 mb-4" />
              <p className="text-slate-500 font-medium">[ Espacio para Dashboard del Facturador ]</p>
              <p className="text-sm text-slate-400 mt-2">Sube la presentación PDF de Web Invoice para detallar esta página</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Digitaliza tu facturación hoy</h2>
          <div className="flex justify-center mt-8">
            <Link href="/contacto" className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 font-medium text-white shadow hover:bg-blue-500 transition-colors">
              Contactar a Ventas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
