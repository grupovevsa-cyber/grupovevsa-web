import { Building2, Globe, Mail, MapPin, Phone, Star, User } from "lucide-react";

export default function DistribuidoresPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header Section */}
      <section className="bg-[#1C2331] text-white py-16 text-center">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <Globe className="w-12 h-12 text-sky-400 mb-4" />
          <h1 className="text-4xl font-bold mb-4">Distribuidores</h1>
          <p className="text-slate-300 text-lg">Presencia en Latinoamérica</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* CTA Box */}
          <div className="bg-white rounded-[20px] p-6 shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-6 border-l-[6px] border-blue-900">
            <div>
              <h3 className="text-[17px] font-bold text-[#1C2331] mb-1">¿Deseas formar parte de nuestra red?</h3>
              <p className="text-slate-500 text-[15px]">Hazte un distribuidor autorizado y únete a nuestro equipo.</p>
            </div>
            <a href="mailto:contacto@grupovev.com" className="bg-blue-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors shrink-0">
              Enviar correo a contacto
            </a>
          </div>

          {/* Leyenda de Niveles */}
          <div className="bg-white rounded-[20px] p-6 shadow-sm mb-12 text-sm">
            <p className="text-slate-500 mb-4 font-medium">Nivel de experiencia basado en los años como distribuidor autorizado y las licencias activas.</p>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <div className="flex text-blue-900">
                  <Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span>Distribuidor Élite</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-blue-900">
                  <Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 text-slate-300" />
                </div>
                <span>Distribuidor Premium</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-blue-900">
                  <Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 text-slate-300" /><Star className="w-3.5 h-3.5 text-slate-300" />
                </div>
                <span>Distribuidor Avanzado</span>
              </div>
            </div>
          </div>

          {/* Resultados */}
          <p className="text-sm text-slate-500 mb-6 font-medium">2 distribuidores encontrados</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Tarjeta 1: ABBA INNOVATION S.A. */}
            <div className="bg-white rounded-[20px] border border-slate-100 p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-900 shrink-0 border border-blue-100">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-[17px] font-bold text-[#1C2331] leading-tight mb-1">ABBA INNOVATION S.A.</h2>
                  <div className="flex items-center gap-1.5 text-sm text-slate-600 mb-1">
                    <span className="text-base leading-none">🇵🇦</span> <span className="text-blue-900 font-medium">Panamá</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex text-blue-900">
                      <Star className="w-[14px] h-[14px] fill-current" /><Star className="w-[14px] h-[14px] fill-current" /><Star className="w-[14px] h-[14px] fill-current" /><Star className="w-[14px] h-[14px] fill-current" /><Star className="w-[14px] h-[14px] fill-current" />
                    </div>
                    <span className="text-xs text-slate-500">Distribuidor Élite</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3.5 text-[13px]">
                <div className="flex items-start gap-2.5">
                  <User className="w-[18px] h-[18px] text-blue-900 shrink-0" strokeWidth={2.5} />
                  <p className="text-slate-600"><strong className="text-slate-800 font-bold">Representante:</strong> Ing. Alejandro Barranco Experto en Hosteleria</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-[18px] h-[18px] text-blue-900 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-slate-600 leading-relaxed"><strong className="text-slate-800 font-bold">Dirección:</strong> No suministrada</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-[18px] h-[18px] text-blue-900 shrink-0" strokeWidth={2.5} />
                  <p className="text-slate-600"><strong className="text-slate-800 font-bold">Teléfono:</strong> +6893-1186</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Mail className="w-[18px] h-[18px] text-blue-900 shrink-0" strokeWidth={2.5} />
                  <p className="text-slate-600"><strong className="text-slate-800 font-bold">Correo:</strong> abarranco@abbainnovation.com</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Globe className="w-[18px] h-[18px] text-blue-900 shrink-0" strokeWidth={2.5} />
                  <p className="text-slate-600"><strong className="text-slate-800 font-bold">Sitio web:</strong> <a href="http://www.abba-innovation.net" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">www.abba-innovation.net</a></p>
                </div>
              </div>
            </div>
            
            {/* Tarjeta 2: Premium Solution S.A */}
            <div className="bg-white rounded-[20px] border border-slate-100 p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-900 shrink-0 border border-blue-100">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-[17px] font-bold text-[#1C2331] leading-tight mb-1">Premium Solution S.A</h2>
                  <div className="flex items-center gap-1.5 text-sm text-slate-600 mb-1">
                    <span className="text-base leading-none">🇵🇦</span> <span className="text-blue-900 font-medium">Panamá</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex text-blue-900">
                      <Star className="w-[14px] h-[14px] fill-current" /><Star className="w-[14px] h-[14px] fill-current" /><Star className="w-[14px] h-[14px] fill-current" /><Star className="w-[14px] h-[14px] fill-current" /><Star className="w-[14px] h-[14px] fill-current" />
                    </div>
                    <span className="text-xs text-slate-500">Distribuidor Élite</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3.5 text-[13px]">
                <div className="flex items-start gap-2.5">
                  <User className="w-[18px] h-[18px] text-blue-900 shrink-0" strokeWidth={2.5} />
                  <p className="text-slate-600"><strong className="text-slate-800 font-bold">Representante:</strong> Karim E. Lasso Torres</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-[18px] h-[18px] text-blue-900 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-slate-600 leading-relaxed"><strong className="text-slate-800 font-bold">Dirección:</strong> Urb. El Carmen, Avenida Manuel Espinosa Batista, Edif. Centrum Tower Piso N°3 oficina 1, Ciudad Panamá.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-[18px] h-[18px] text-blue-900 shrink-0" strokeWidth={2.5} />
                  <p className="text-slate-600"><strong className="text-slate-800 font-bold">Teléfono:</strong> 2034956, 2034957, 68163355</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Mail className="w-[18px] h-[18px] text-blue-900 shrink-0" strokeWidth={2.5} />
                  <p className="text-slate-600"><strong className="text-slate-800 font-bold">Correo:</strong> klasso@premium-solutions.net</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Globe className="w-[18px] h-[18px] text-blue-900 shrink-0" strokeWidth={2.5} />
                  <p className="text-slate-600"><strong className="text-slate-800 font-bold">Sitio web:</strong> <a href="https://premium-solutions.net/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">www.premium-solutions.net</a></p>
                </div>
              </div>
            </div>

          </div>

          {/* Alianzas Estratégicas */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#1C2331] mb-3">Alianzas Estratégicas Internacionales</h2>
              <p className="text-slate-600 text-lg">Trabajamos junto a líderes tecnológicos para brindar soluciones robustas en toda la región.</p>
            </div>
            
            <div className="bg-white rounded-[20px] border border-blue-100 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-lg transition-shadow max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-900 to-sky-600 flex items-center justify-center text-white shrink-0 shadow-lg">
                  <Globe className="w-10 h-10" />
                </div>
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1C2331] mb-2">ICONSOFTLAT</h3>
                    <div className="flex items-center justify-center md:justify-start gap-1.5 text-sm text-slate-500 mb-2">
                      <MapPin className="w-4 h-4 text-sky-600" />
                      <span className="font-medium text-slate-600">Región de Latinoamérica</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    <strong className="text-blue-900">Servicios:</strong> Cloud · Software a medida · Multiplataforma y PAC (Proveedores autorizados de DGI Panamá, y otros países según requerimiento fiscal y facturación electrónica). Integraciones de medios de pagos en línea.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 pt-5 border-t border-slate-100 justify-center md:justify-start">
                    <a href="mailto:support@iconsoftlat.com" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                      <Mail className="w-5 h-5 text-blue-900" />
                      <span className="font-medium">support@iconsoftlat.com</span>
                    </a>
                    <a href="https://iconsoftlat.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                      <Globe className="w-5 h-5 text-blue-900" />
                      <span className="font-medium">www.iconsoftlat.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
