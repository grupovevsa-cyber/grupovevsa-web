import Link from "next/link";
import { LifeBuoy, MapPin, QrCode, PenTool } from "lucide-react";

export default function IconSupport() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 to-teal-900 text-white py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <LifeBuoy className="w-16 h-16 mx-auto text-teal-400 mb-6" />
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            ICON <span className="text-teal-400">SUPPORT</span>
          </h1>
          <p className="text-lg md:text-2xl text-teal-100 mb-10 max-w-4xl mx-auto leading-relaxed">
            Plataforma web de soporte técnico y gestión de incidencias.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-center">
              <PenTool className="w-10 h-10 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Tickets de Servicio</h3>
              <p className="text-slate-600 text-sm">Creación y seguimiento de incidencias con historial de soporte detallado.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-center">
              <QrCode className="w-10 h-10 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Trazabilidad QR & Geo</h3>
              <p className="text-slate-600 text-sm">Escaneo de equipos y geolocalización de técnicos en campo.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl text-center">
              <MapPin className="w-10 h-10 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Firmas Digitales</h3>
              <p className="text-slate-600 text-sm">Generación de actas y aprobación de servicios mediante firma digital in situ.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
