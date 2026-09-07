import { Globe, Building2, User, MapPin, Phone, Mail, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DistribuidoresPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header Dark */}
      <section className="bg-[#1C2331] text-white py-16 text-center">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <Globe className="w-12 h-12 text-orange-500 mb-4" />
          <h1 className="text-4xl font-bold mb-3">Distribuidores</h1>
          <p className="text-slate-300">Selecciona tu país y encuentra un distribuidor cerca de ti.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Banner de Contacto CTA */}
          <div className="bg-white border-l-4 border-orange-500 p-6 rounded-lg shadow-[0_2px_10px_rgb(0,0,0,0.04)] flex flex-col md:flex-row items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-800">¿Deseas formar parte de nuestra red?</h3>
              <p className="text-slate-600">Hazte un distribuidor autorizado y únete a nuestro equipo.</p>
            </div>
            <a href="mailto:contacto@grupovev.com" className="mt-4 md:mt-0 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-md font-semibold transition-colors">
              Enviar correo a contacto
            </a>
          </div>

          {/* Filtros de País (Visual) */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <button className="flex flex-col items-center justify-center w-24 h-24 rounded-xl border border-orange-200 bg-orange-50 text-orange-600 font-medium hover:bg-orange-100 transition-colors">
              <Globe className="w-6 h-6 mb-2 text-slate-700" />
              <span className="text-xs text-slate-800">Todos</span>
            </button>
            <button className="flex flex-col items-center justify-center w-24 h-24 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 font-medium transition-colors shadow-sm">
              <span className="text-3xl mb-1 leading-none">🇵🇦</span>
              <span className="text-xs text-slate-800">Panamá</span>
            </button>
            <button className="flex flex-col items-center justify-center w-24 h-24 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 font-medium transition-colors shadow-sm">
              <span className="text-3xl mb-1 leading-none">🇨🇴</span>
              <span className="text-xs text-slate-800">Colombia</span>
            </button>
            <button className="flex flex-col items-center justify-center w-24 h-24 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 font-medium transition-colors shadow-sm text-center">
              <span className="text-3xl mb-1 leading-none">🇩🇴</span>
              <span className="text-[10px] text-slate-800 leading-tight">República<br/>Dominicana</span>
            </button>
            <button className="flex flex-col items-center justify-center w-24 h-24 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 font-medium transition-colors shadow-sm">
              <span className="text-3xl mb-1 leading-none">🇪🇨</span>
              <span className="text-xs text-slate-800">Ecuador</span>
            </button>
            <button className="flex flex-col items-center justify-center w-24 h-24 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 font-medium transition-colors shadow-sm">
              <span className="text-3xl mb-1 leading-none">🇻🇪</span>
              <span className="text-xs text-slate-800">Venezuela</span>
            </button>
          </div>

          {/* Leyenda de Estrellas */}
          <div className="bg-slate-50/50 border border-slate-200 rounded-xl p-5 mb-8 text-xs text-slate-500 shadow-sm">
            <p className="mb-3 font-semibold text-slate-600">Nivel de experiencia basado en los años como distribuidor autorizado y las licencias activas.</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                <div className="flex text-orange-500">
                  <Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span>Distribuidor Élite</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-orange-500">
                  <Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 text-slate-300" />
                </div>
                <span>Distribuidor Premium</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-orange-500">
                  <Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 text-slate-300" /><Star className="w-3.5 h-3.5 text-slate-300" />
                </div>
                <span>Distribuidor Avanzado</span>
              </div>
            </div>
          </div>

          {/* Resultados */}
          <p className="text-sm text-slate-500 mb-6 font-medium">2 distribuidores encontrados</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Tarjeta 1: Premium Solution S.A */}
            <div className="bg-white rounded-[20px] border border-slate-100 p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 border border-orange-100">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-[17px] font-bold text-[#1C2331] leading-tight mb-1">Premium Solution S.A</h2>
                  <div className="flex items-center gap-1.5 text-sm text-slate-600 mb-1">
                    <span className="text-base leading-none">🇵🇦</span> <span className="text-orange-500 font-medium">Panamá</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex text-orange-500">
                      <Star className="w-[14px] h-[14px] fill-current" /><Star className="w-[14px] h-[14px] fill-current" /><Star className="w-[14px] h-[14px] fill-current" /><Star className="w-[14px] h-[14px] fill-current" /><Star className="w-[14px] h-[14px] fill-current" />
                    </div>
                    <span className="text-xs text-slate-500">Distribuidor Élite</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3.5 text-[13px]">
                <div className="flex items-start gap-2.5">
                  <User className="w-[18px] h-[18px] text-orange-500 shrink-0" strokeWidth={2.5} />
                  <p className="text-slate-600"><strong className="text-slate-800 font-bold">Representante:</strong> Karim E. Lasso Torres</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-[18px] h-[18px] text-orange-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-slate-600 leading-relaxed"><strong className="text-slate-800 font-bold">Dirección:</strong> Urb. El Carmen, Avenida Manuel Espinosa Batista, Edif. Centrum Tower Piso N°3 oficina 1, Ciudad Panamá.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-[18px] h-[18px] text-orange-500 shrink-0" strokeWidth={2.5} />
                  <p className="text-slate-600"><strong className="text-slate-800 font-bold">Teléfono:</strong> 2034956, 2034957, 68163355</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Mail className="w-[18px] h-[18px] text-orange-500 shrink-0" strokeWidth={2.5} />
                  <p className="text-slate-600"><strong className="text-slate-800 font-bold">Correo:</strong> klasso@premium-solutions.net</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Globe className="w-[18px] h-[18px] text-orange-500 shrink-0" strokeWidth={2.5} />
                  <p className="text-slate-600"><strong className="text-slate-800 font-bold">Sitio web:</strong> No suministrado</p>
                </div>
              </div>
            </div>

            {/* Tarjeta 2: ABBA INNOVATION S.A. */}
            <div className="bg-white rounded-[20px] border border-slate-100 p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 border border-orange-100">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-[17px] font-bold text-[#1C2331] leading-tight mb-1">ABBA INNOVATION S.A.</h2>
                  <div className="flex items-center gap-1.5 text-sm text-slate-600 mb-1">
                    <span className="text-base leading-none">🇵🇦</span> <span className="text-orange-500 font-medium">Panamá</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex text-orange-500">
                      <Star className="w-[14px] h-[14px] fill-current" /><Star className="w-[14px] h-[14px] fill-current" /><Star className="w-[14px] h-[14px] fill-current" /><Star className="w-[14px] h-[14px] fill-current" /><Star className="w-[14px] h-[14px] fill-current" />
                    </div>
                    <span className="text-xs text-slate-500">Distribuidor Élite</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3.5 text-[13px]">
                <div className="flex items-start gap-2.5">
                  <User className="w-[18px] h-[18px] text-orange-500 shrink-0" strokeWidth={2.5} />
                  <p className="text-slate-600"><strong className="text-slate-800 font-bold">Representante:</strong> Ing. Alejandro Barranco Experto en Hosteleria</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-[18px] h-[18px] text-orange-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-slate-600 leading-relaxed"><strong className="text-slate-800 font-bold">Dirección:</strong> No suministrada</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-[18px] h-[18px] text-orange-500 shrink-0" strokeWidth={2.5} />
                  <p className="text-slate-600"><strong className="text-slate-800 font-bold">Teléfono:</strong> +6893-1186</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Mail className="w-[18px] h-[18px] text-orange-500 shrink-0" strokeWidth={2.5} />
                  <p className="text-slate-600"><strong className="text-slate-800 font-bold">Correo:</strong> abarranco@abbainnovation.com</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Globe className="w-[18px] h-[18px] text-orange-500 shrink-0" strokeWidth={2.5} />
                  <p className="text-slate-600"><strong className="text-slate-800 font-bold">Sitio web:</strong> <a href="http://www.abba-innovation.net" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">www.abba-innovation.net</a></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
