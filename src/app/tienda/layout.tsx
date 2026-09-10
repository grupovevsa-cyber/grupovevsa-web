import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart, User, ShieldCheck, Truck, Wrench, Award, ChevronRight, Info, HelpCircle } from "lucide-react";
import CartButton from "@/components/tienda/CartButton";

export default function TiendaLayout({ children }: { children: React.ReactNode }) {
  const megaCategories = [
    {
      name: "TPV",
      megaMenu: [
        { title: "PANTALLAS TPV", links: ["Ver todos los TPV", "TPV Android", "TPV Windows", "Monitores de cocina", "Accesorios TPV"] },
        { title: "PACK TPV", links: ["Ver todos los packs", "Hostelería", "Comercio / Retail", "Foodtruck"] },
        { title: "MARCAS DESTACADAS", links: ["BTSPOS", "SUNMI", "GEON"] },
        { title: "PERIFÉRICOS", links: ["Visores", "Lectores de huella", "Lectores / Escáner"] }
      ]
    },
    {
      name: "SOFTWARE",
      megaMenu: [
        { title: "SISTEMAS", links: ["ICONPOS WEB INVOICE", "ICONPOS WEB CONECT", "ICON SUPPORT", "ICON GENIUS"] },
        { title: "KITS (Pack TPV + Software)", links: ["Ver todos los KIT", "KIT Retail", "KIT Hostelería"] }
      ]
    },
    {
      name: "PDA/TABLET",
      megaMenu: [
        { title: "TABLET", links: ["Ver todas las Tablets", "Accesorios Tablet"] },
        { title: "MARCAS DESTACADAS", links: ["BTSPOS", "SUNMI", "ZEBRA"] },
        { title: "PDA", links: ["Sin impresora", "Con impresora", "Accesorios PDA"] }
      ]
    },
    {
      name: "PAPEL TÉRMICO",
      megaMenu: [
        { title: "ROLLOS PARA IMPRESORAS", links: ["80x80mm", "80x60mm", "112x50mm"] },
        { title: "ROLLOS PARA DATÁFONOS Y BALANZAS", links: ["57x55mm", "57x40mm", "57x35mm"] }
      ]
    },
    {
      name: "BALANZAS",
      megaMenu: [
        { title: "TIPO DE BALANZAS", links: ["Control por Peso", "Comercial", "Peso-Precio-Importe", "Monocélula", "Balanza-PC"] },
        { title: "MARCAS DESTACADAS", links: ["DIBAL", "Baxtran"] }
      ]
    },
    {
      name: "CAJONES",
      megaMenu: [
        { title: "CAJÓN AUTOMÁTICO", links: ["Horizontal", "Vertical"] },
        { title: "CAJÓN INTELIGENTE", links: ["Ver todos los cajones inteligentes", "Ingresadora de efectivo", "Financiación a medida"] },
        { title: "CAJÓN MANUAL", links: ["Ver todos los cajones manuales"] }
      ]
    },
    { name: "IMPRESORAS" },
    {
      name: "QUIOSCOS",
      megaMenu: [
        { title: "QUIOSCOS WINDOWS", links: ["Ver todos los quioscos"] },
        { title: "MARCAS DESTACADAS", links: ["GEON", "SUNMI"] },
        { title: "QUIOSCOS ANDROID", links: ["Ver todos los quioscos"] }
      ]
    },
    {
      name: "+ PRODUCTOS",
      megaMenu: [
        { title: "MONÉTICA", links: ["Detector de billetes", "Contador de billetes", "Contador de monedas", "Balanza contadora"] },
        { title: "ATENCIÓN Y CONTROL", links: ["Escaner de Documentos", "Control de presencia"] }
      ]
    },
    {
      name: "REDES / SEGURIDAD",
      megaMenu: [
        { title: "EQUIPOS", links: ["Cámaras de Seguridad", "Routers", "Control de Accesos"] },
        { title: "INFRAESTRUCTURA", links: ["Gabinetes de Red", "Cables", "Accesorios y Conectores"] },
        { title: "SOPORTE", links: ["Servicios Técnicos de Red"] }
      ]
    },
    {
      name: "ENERGÍA",
      megaMenu: [
        { title: "RESPALDO Y UPS", links: ["Batería UPS y Respaldos", "Sistemas Portables (EcoFlow)"] },
        { title: "ENERGÍA RENOVABLE", links: ["Paneles Solares", "Baterías para Solar", "Inversores de Corriente", "Energía Eólica y Turbinas"] },
        { title: "SOPORTE ELÉCTRICO", links: ["Servicios Técnicos Ing. Eléctricos"] }
      ]
    },
    { name: "KITS POS" },
    { name: "OUTLET" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      {/* Top Header Store */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/tienda" className="flex flex-col items-start leading-none">
            <span className="text-xl font-black text-slate-800 tracking-tighter">LA</span>
            <span className="text-xl font-black text-slate-800 tracking-tighter">CASA</span>
            <div className="flex items-center gap-1">
              <span className="text-xl font-black text-slate-800 tracking-tighter">DEL</span>
              <span className="text-4xl font-black text-blue-900 tracking-tighter ml-1">POS</span>
              <span className="w-2 h-2 bg-sky-500 rounded-full mt-2"></span>
            </div>
          </Link>
          <div className="flex-1 w-full max-w-2xl flex mx-4">
            <input 
              type="text" 
              placeholder="¿Qué estás buscando?" 
              className="w-full border border-slate-300 rounded-l-md px-4 py-2.5 text-sm focus:outline-none focus:border-blue-900"
            />
            <button className="bg-blue-900 hover:bg-blue-800 transition-colors text-white px-8 py-2.5 rounded-r-md text-sm font-bold tracking-wide">
              BUSCAR
            </button>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden lg:block text-right">
              <p className="text-xl font-black text-blue-900">+507 6001-5427</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">Taller y Soporte L-V</p>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/login" className="flex flex-col items-center justify-center text-slate-500 hover:text-blue-900 transition-colors">
                <User className="w-6 h-6 mb-1" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Cuenta</span>
              </Link>
              
              <CartButton />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white border-b border-slate-200 hidden md:block shadow-sm relative z-50">
        <div className="container mx-auto px-4 relative">
          <ul className="flex flex-wrap items-center justify-center gap-x-8">
            {megaCategories.map((cat, i) => (
              <li key={i} className="group">
                <Link href={`/tienda/categoria`} className="text-slate-600 hover:text-blue-900 text-[11px] font-bold uppercase tracking-wider py-4 block border-b-2 border-transparent group-hover:border-blue-900 transition-all">
                  {cat.name}
                </Link>
                
                {cat.megaMenu && (
                  <div className="absolute left-0 top-[100%] w-full bg-white shadow-[0_10px_20px_rgb(0,0,0,0.05)] border-t border-slate-200 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 p-8 rounded-b-xl z-50">
                    <div className="flex flex-wrap items-start justify-start gap-12 max-w-5xl mx-auto">
                      {cat.megaMenu.map((column, colIdx) => (
                        <div key={colIdx} className="flex-1 min-w-[200px]">
                          <h4 className="text-[11px] font-black uppercase text-slate-800 tracking-widest border-b-[3px] border-slate-800 pb-2 mb-4">{column.title}</h4>
                          <ul className="space-y-3">
                            {column.links.map((link, linkIdx) => (
                              <li key={linkIdx}>
                                <Link href="/tienda/categoria" className="text-[13px] font-medium text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1.5">
                                  <ChevronRight className="w-3.5 h-3.5 opacity-0 -ml-5 transition-all group-hover:opacity-100 group-hover:ml-0 text-blue-600" />
                                  {link}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Trust Banners */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="container mx-auto px-4 py-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="flex items-center gap-3 bg-white p-2.5 rounded shadow-sm">
              <ShieldCheck className="w-6 h-6 text-sky-500 shrink-0" />
              <p><strong className="text-slate-800">GARANTÍA LOCAL</strong> - Respaldo directo en Panamá.</p>
            </div>
            <div className="flex items-center gap-3 bg-white p-2.5 rounded shadow-sm">
              <Truck className="w-6 h-6 text-sky-500 shrink-0" />
              <p><strong className="text-slate-800">ENTREGA RÁPIDA</strong> - Envíos a todo el territorio nacional.</p>
            </div>
            <div className="flex items-center gap-3 bg-white p-2.5 rounded shadow-sm">
              <Wrench className="w-6 h-6 text-sky-500 shrink-0" />
              <p><strong className="text-slate-800">TALLER DE SERVICIOS</strong> - Mantenimiento y repuestos.</p>
            </div>
            <div className="flex items-center gap-3 bg-white p-2.5 rounded shadow-sm">
              <Award className="w-6 h-6 text-sky-500 shrink-0" />
              <p><strong className="text-slate-800">DISTRIBUIDOR OFICIAL</strong> - Marca BTSPOS exclusiva.</p>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1">
        {children}
      </main>

      {/* Footer / Info Section */}
      <footer className="bg-[#0A132B] text-slate-300 py-16 border-t-4 border-blue-900 mt-auto">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div>
            <div className="flex flex-col items-start leading-none mb-6">
              <span className="text-xl font-black text-white tracking-tighter">LA</span>
              <span className="text-xl font-black text-white tracking-tighter">CASA</span>
              <div className="flex items-center gap-1">
                <span className="text-xl font-black text-white tracking-tighter">DEL</span>
                <span className="text-4xl font-black text-sky-400 tracking-tighter ml-1">POS</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              La tienda oficial para tu punto de venta. Equipos certificados, taller de servicios y soporte técnico. 
              <br/><br/>
              Una empresa bajo la sociedad de <strong>GRUPO VEV, S.A.</strong>
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Categorías</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/tienda/categoria" className="hover:text-sky-400 flex items-center gap-2"><ChevronRight className="w-4 h-4" /> TPV y Pantallas</Link></li>
              <li><Link href="/tienda/categoria" className="hover:text-sky-400 flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Impresoras de Tickets</Link></li>
              <li><Link href="/tienda/categoria" className="hover:text-sky-400 flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Cajones Portamonedas</Link></li>
              <li><Link href="/tienda/categoria" className="hover:text-sky-400 flex items-center gap-2"><ChevronRight className="w-4 h-4" /> PDA e Inventario</Link></li>
              <li><Link href="/tienda/categoria" className="hover:text-sky-400 flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Kits Completos (Easy POS)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Información</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-sky-400 flex items-center gap-2"><Info className="w-4 h-4" /> Quiénes Somos</Link></li>
              <li><Link href="#" className="hover:text-sky-400 flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Taller y Garantía BTSPOS</Link></li>
              <li><Link href="#" className="hover:text-sky-400 flex items-center gap-2"><Truck className="w-4 h-4" /> Políticas de Envío</Link></li>
              <li><Link href="#" className="hover:text-sky-400 flex items-center gap-2"><HelpCircle className="w-4 h-4" /> Centro de Ayuda</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Acceso Tienda</h4>
            <p className="text-sm mb-4">¿Eres administrador? Gestiona el catálogo de artículos, pedidos y configuraciones.</p>
            <Link href="/admin/tienda" className="inline-flex items-center justify-center bg-blue-900 text-white border border-blue-700 px-6 py-2.5 rounded hover:bg-blue-800 transition-colors text-sm font-bold w-full">
              Panel de Tienda Online
            </Link>
          </div>

        </div>
        
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
          &copy; {new Date().getFullYear()} LA CASA DEL POS - GRUPO VEV, S.A. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
