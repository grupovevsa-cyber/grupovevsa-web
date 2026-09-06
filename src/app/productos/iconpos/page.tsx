import Link from "next/link";
import { CheckCircle2, Cloud, FileText, BrainCircuit, BarChart3, ShieldCheck, Printer, LayoutDashboard } from "lucide-react";

export default function IconposWebConnect() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-sm font-semibold mb-6 border border-blue-500/30">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            Release 2026 • Soporte Multi-sucursal
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            ICONPOS <span className="text-blue-400">WEB CONECT</span> <span className="text-2xl text-blue-300 font-light align-top">V1.0</span>
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
            SISTEMA INTEGRAL DE PUNTO DE VENTA WEB & GESTIÓN GASTRONÓMICA CLOUD
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-left mt-12">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <Cloud className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">100% Cloud Progresivo</h3>
              <p className="text-sm text-blue-100">Operación ágil en terminales táctiles, tablets de salonero y PC con cero instalaciones locales.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <FileText className="w-8 h-8 text-rose-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">Facturación DGI Panamá</h3>
              <p className="text-sm text-blue-100">Integración nativa con PAC Digifact, emisión de comprobantes fiscales, CUFE y QR en milisegundos.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <BrainCircuit className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">Inteligencia Artificial</h3>
              <p className="text-sm text-blue-100">Digitalización inteligente de menús y cartas mediante fotos, PDF o planillas Excel/CSV.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <BarChart3 className="w-8 h-8 text-amber-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">Control Financiero Total</h3>
              <p className="text-sm text-blue-100">Arqueos X y Cierres Z blindados, analítica gerencial en vivo y sincronización ICG FrontRest.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo TPV (Front-End) */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">MÓDULO TPV • FRONT-END</h2>
            <p className="text-slate-600 text-lg">Control visual de salones, comandeo táctil y gestión rápida de liquidación.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Control Visual de Salones y Estado de Mesas</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900">Semáforo Operativo Inteligente:</span>
                    <p className="text-slate-600 text-sm">Codificación cromática (Verde: Libre, Rojo: Ocupada) mostrando saldo acumulado y tiempo.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900">Ambientes y Áreas Zonificadas:</span>
                    <p className="text-slate-600 text-sm">Navegación ultra fluida entre zonas (Salón, Terrazas, VIP).</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900">Métricas de Ocupación en Vivo:</span>
                    <p className="text-slate-600 text-sm">Conteo instantáneo de disponibilidad en la barra superior permanente.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-slate-200 rounded-xl aspect-video border border-slate-300 shadow-inner flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-blue-900/5 mix-blend-multiply"></div>
               <p className="text-slate-500 font-medium z-10">[ Espacio para Captura: Vista de Mesas ]</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-slate-200 rounded-xl aspect-video border border-slate-300 shadow-inner flex items-center justify-center order-2 md:order-1 relative overflow-hidden">
               <div className="absolute inset-0 bg-blue-900/5 mix-blend-multiply"></div>
               <p className="text-slate-500 font-medium z-10">[ Espacio para Captura: Comandeo y Modificadores ]</p>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Toma Rápida de Pedidos y Producción</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900">Gestión de Modificadores:</span>
                    <p className="text-slate-600 text-sm">Términos de cocción, guarniciones y adicionales con costo automático en 2 clics.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900">Comunicación con Cocina & KDS:</span>
                    <p className="text-slate-600 text-sm">Envío de alertas dietéticas ("Sin gluten", "Marchas postres") directo a la pantalla de cocina.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900">División de Cuentas Ágil:</span>
                    <p className="text-slate-600 text-sm">Fraccionamiento de mesa, sugerencia de propinas e ITBMS calculado rigurosamente.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo Backoffice */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">MÓDULO BACKOFFICE • EMPRESARIAL</h2>
            <p className="text-slate-600 text-lg">Analítica, Inteligencia Artificial y Control Fiscal en un solo lugar.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 bg-blue-50 border border-blue-100 rounded-2xl">
              <LayoutDashboard className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Dashboard y Analítica</h3>
              <p className="text-slate-600 text-sm mb-4">
                KPIs financieros en vivo, mix de pagos (Visa, Yappy, Efectivo), y ranking de personal/platos más vendidos.
              </p>
              <ul className="text-sm space-y-2 text-slate-700">
                <li>• Ventas Netas y Brutas al instante.</li>
                <li>• Control exhaustivo de stock y mermas.</li>
                <li>• Exportación PDF/Excel.</li>
              </ul>
            </div>

            <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-2xl">
              <BrainCircuit className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Inteligencia Artificial</h3>
              <p className="text-slate-600 text-sm mb-4">
                Digitalización de cartas y menús subiendo fotos o PDFs. El algoritmo extrae nombres, secciones y precios automáticamente.
              </p>
              <ul className="text-sm space-y-2 text-slate-700">
                <li>• Arrastre directo de cartas.</li>
                <li>• Ahorro de cientos de horas operativas.</li>
                <li>• Gestión maestra desde un solo lugar.</li>
              </ul>
            </div>

            <div className="p-8 bg-rose-50 border border-rose-100 rounded-2xl">
              <ShieldCheck className="w-10 h-10 text-rose-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Seguridad y Fiscal (DGI)</h3>
              <p className="text-slate-600 text-sm mb-4">
                Auditoría en vivo, reintentos y trazabilidad ante la DGI. Cero contingencias fiscales con retención offline.
              </p>
              <ul className="text-sm space-y-2 text-slate-700">
                <li>• PAC Digifact / Serie Fiscal DGI.</li>
                <li>• Ruteo de impresión automática.</li>
                <li>• Arqueos Cierre X y Z blindados.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Lleva tu restaurante al siguiente nivel</h2>
          <p className="text-slate-400 mb-8 text-lg">Solución integral llave en mano con soporte técnico y evolución continua por GRUPO VEV, S.A.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 font-medium text-white shadow hover:bg-blue-500 transition-colors">
              Solicitar Demostración
            </Link>
            <Link href="/tienda" className="inline-flex h-12 items-center justify-center rounded-md border border-slate-700 bg-slate-800 px-8 font-medium text-white transition-colors hover:bg-slate-700">
              Ver Equipos Compatibles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
