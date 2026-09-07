import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart, User, Phone, ShieldCheck, Truck, Wrench, Award, Facebook, Instagram, Twitter, ChevronRight, Monitor, Printer, Smartphone, Package, Info, HelpCircle } from "lucide-react";

export default function TiendaPage() {
  const categories = [
    "TPV", "SOFTWARE", "PDA/TABLET", "PAPEL TÉRMICO", "BALANZAS", "CAJONES", "IMPRESORAS", "KITS POS", "OUTLET"
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* Top Header Store */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Store Logo */}
          <Link href="/tienda" className="flex flex-col items-start leading-none">
            <span className="text-xl font-black text-slate-800 tracking-tighter">LA</span>
            <span className="text-xl font-black text-slate-800 tracking-tighter">CASA</span>
            <div className="flex items-center gap-1">
              <span className="text-xl font-black text-slate-800 tracking-tighter">DEL</span>
              <span className="text-4xl font-black text-blue-900 tracking-tighter ml-1">POS</span>
              <span className="w-2 h-2 bg-sky-500 rounded-full mt-2"></span>
            </div>
          </Link>

          {/* Search Bar */}
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

          {/* Contact & Actions */}
          <div className="flex items-center gap-8">
            <div className="hidden lg:block text-right">
              <p className="text-xl font-black text-blue-900">+507 6001-5427</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">Taller y Soporte L-V</p>
            </div>
            <div className="flex items-center gap-6">
              <button className="flex flex-col items-center text-slate-600 hover:text-blue-900 transition-colors">
                <User className="w-6 h-6 mb-1" />
                <span className="text-[11px] font-bold uppercase">Cuenta</span>
              </button>
              <button className="flex flex-col items-center text-slate-600 hover:text-blue-900 transition-colors relative">
                <div className="absolute -top-1 -right-2 bg-sky-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</div>
                <ShoppingCart className="w-6 h-6 mb-1" />
                <span className="text-[11px] font-bold uppercase">Carrito</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white border-b border-slate-200 hidden md:block shadow-sm relative z-10">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center space-x-8">
            {categories.map((cat) => (
              <li key={cat}>
                <Link href="#" className="text-slate-600 hover:text-blue-900 text-xs font-bold uppercase tracking-wider py-4 block border-b-2 border-transparent hover:border-blue-900 transition-all">
                  {cat}
                </Link>
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

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-8">
        
        {/* Promos Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border-2 border-slate-100 rounded-xl p-6 flex flex-col justify-center shadow-sm relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <Award className="w-32 h-32 text-blue-900" />
            </div>
            <h3 className="text-xl font-black text-slate-800 uppercase leading-tight mb-2">La Casa del POS <br/>está en <span className="text-blue-900">Panamá</span></h3>
            <p className="text-xs text-slate-500 font-bold">Compromiso firme con tu negocio</p>
          </div>
          <div className="bg-blue-900 text-white rounded-xl p-6 flex flex-col justify-center items-center text-center shadow-md relative overflow-hidden">
            <Truck className="absolute -left-4 -bottom-4 w-24 h-24 text-blue-800 opacity-50" />
            <h3 className="text-3xl font-black uppercase tracking-tight relative z-10">Envíos <br/><span className="text-sky-400">Gratis</span></h3>
            <p className="text-xs text-blue-200 mt-2 relative z-10">En compras mayores a B/. 150.00</p>
          </div>
          <div className="bg-sky-600 text-white rounded-xl p-6 flex flex-col justify-center shadow-md relative overflow-hidden">
            <ShieldCheck className="absolute -right-4 -top-4 w-24 h-24 text-sky-500 opacity-50" />
            <p className="text-[10px] font-bold uppercase tracking-widest mb-1 relative z-10">Todos nuestros equipos</p>
            <h3 className="text-xl font-black uppercase leading-tight relative z-10 mb-2">Están adaptados a <br/><span className="text-blue-900 bg-white px-2 py-0.5 rounded italic">Facturación Electrónica</span></h3>
          </div>
        </div>

        {/* Product Grids / Categories */}
        
        {/* TPV Section */}
        <div className="mb-12">
          <h2 className="text-center text-xl font-black text-slate-800 uppercase tracking-widest mb-8 flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-slate-300"></span> TPV <span className="w-12 h-px bg-slate-300"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Product Card 1 */}
            <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col group hover:shadow-xl hover:border-blue-300 transition-all">
              <div className="aspect-square bg-slate-50 rounded-md mb-4 flex items-center justify-center relative overflow-hidden">
                <Monitor className="w-20 h-20 text-slate-300 group-hover:scale-110 transition-transform" />
                <span className="absolute top-2 right-2 text-[10px] font-bold bg-green-100 text-green-700 px-2 py-1 rounded">Stock</span>
              </div>
              <div className="text-center mb-4">
                <p className="text-xs text-slate-400 line-through mb-0.5">B/. 380.00</p>
                <h4 className="text-2xl font-black text-blue-900">B/. 314.05</h4>
                <p className="text-[10px] text-slate-500">(B/. 336.03 ITBMS incl.)</p>
              </div>
              <p className="text-xs font-bold text-sky-600 mb-1 uppercase tracking-wider">BTSPOS</p>
              <h3 className="text-sm font-bold text-slate-800 mb-2 leading-snug">TPV Android BTSPOS 360 | Hexa-Core | 4GB RAM | 64GB | 15"</h3>
              <div className="mt-auto pt-4 flex gap-2">
                <button className="flex-1 bg-blue-900 text-white text-xs font-bold py-2 rounded hover:bg-blue-800 transition-colors">AÑADIR</button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col group hover:shadow-xl hover:border-blue-300 transition-all">
              <div className="aspect-square bg-slate-50 rounded-md mb-4 flex items-center justify-center relative overflow-hidden">
                <Monitor className="w-20 h-20 text-slate-300 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-center mb-4">
                <p className="text-xs text-slate-400 line-through mb-0.5">B/. 420.00</p>
                <h4 className="text-2xl font-black text-blue-900">B/. 385.00</h4>
                <p className="text-[10px] text-slate-500">(B/. 411.95 ITBMS incl.)</p>
              </div>
              <p className="text-xs font-bold text-sky-600 mb-1 uppercase tracking-wider">BTSPOS</p>
              <h3 className="text-sm font-bold text-slate-800 mb-2 leading-snug">TPV Windows BTSPOS Pro | Intel i3 | 8GB RAM | 128GB SSD | 15"</h3>
              <div className="mt-auto pt-4 flex gap-2">
                <button className="flex-1 bg-blue-900 text-white text-xs font-bold py-2 rounded hover:bg-blue-800 transition-colors">AÑADIR</button>
              </div>
            </div>
            
            {/* ... more products can go here, keeping it to 2 for TPV to save space in code, let's add 2 more to complete the row */}
            <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col group hover:shadow-xl hover:border-blue-300 transition-all opacity-75">
              <div className="aspect-square bg-slate-50 rounded-md mb-4 flex items-center justify-center relative"><Monitor className="w-20 h-20 text-slate-300" /></div>
              <div className="text-center mb-4"><h4 className="text-2xl font-black text-blue-900">B/. 275.50</h4></div>
              <p className="text-xs font-bold text-sky-600 mb-1 uppercase tracking-wider">BTSPOS</p>
              <h3 className="text-sm font-bold text-slate-800 mb-2 leading-snug">TPV Android Compact 11" | 2GB RAM | 32GB</h3>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col group hover:shadow-xl hover:border-blue-300 transition-all opacity-75">
              <div className="aspect-square bg-slate-50 rounded-md mb-4 flex items-center justify-center relative"><Monitor className="w-20 h-20 text-slate-300" /></div>
              <div className="text-center mb-4"><h4 className="text-2xl font-black text-blue-900">B/. 450.00</h4></div>
              <p className="text-xs font-bold text-sky-600 mb-1 uppercase tracking-wider">GENÉRICO</p>
              <h3 className="text-sm font-bold text-slate-800 mb-2 leading-snug">Monitor Táctil Capacitivo 17" USB/VGA</h3>
            </div>
          </div>
        </div>

        {/* Impresoras & Cajones Section (Split) */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          
          {/* Impresoras */}
          <div>
            <h2 className="text-center text-xl font-black text-slate-800 uppercase tracking-widest mb-8 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-slate-300"></span> IMPRESORAS DE TICKETS <span className="w-8 h-px bg-slate-300"></span>
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col hover:shadow-lg transition-all text-center">
                <div className="aspect-square bg-slate-50 rounded mb-3 flex items-center justify-center"><Printer className="w-16 h-16 text-slate-300" /></div>
                <h4 className="text-xl font-black text-blue-900 mb-2">B/. 57.81</h4>
                <p className="text-[10px] font-bold text-sky-600 uppercase mb-1">BTSPOS</p>
                <h3 className="text-xs font-bold text-slate-800">Impresora Térmica 80mm | USB + Ethernet</h3>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col hover:shadow-lg transition-all text-center">
                <div className="aspect-square bg-slate-50 rounded mb-3 flex items-center justify-center"><Printer className="w-16 h-16 text-slate-300" /></div>
                <h4 className="text-xl font-black text-blue-900 mb-2">B/. 69.01</h4>
                <p className="text-[10px] font-bold text-sky-600 uppercase mb-1">BTSPOS</p>
                <h3 className="text-xs font-bold text-slate-800">Impresora Térmica 80mm | USB + Wi-Fi</h3>
              </div>
            </div>
          </div>

          {/* Cajones */}
          <div>
            <h2 className="text-center text-xl font-black text-slate-800 uppercase tracking-widest mb-8 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-slate-300"></span> CAJONES <span className="w-8 h-px bg-slate-300"></span>
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col hover:shadow-lg transition-all text-center">
                <div className="aspect-square bg-slate-50 rounded mb-3 flex items-center justify-center"><Package className="w-16 h-16 text-slate-300" /></div>
                <h4 className="text-xl font-black text-blue-900 mb-2">B/. 33.06</h4>
                <p className="text-[10px] font-bold text-sky-600 uppercase mb-1">GEON</p>
                <h3 className="text-xs font-bold text-slate-800">Cajón Portamonedas Negro 33CM | 4 Billetes</h3>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col hover:shadow-lg transition-all text-center">
                <div className="aspect-square bg-slate-50 rounded mb-3 flex items-center justify-center"><Package className="w-16 h-16 text-slate-300" /></div>
                <h4 className="text-xl font-black text-blue-900 mb-2">B/. 45.00</h4>
                <p className="text-[10px] font-bold text-sky-600 uppercase mb-1">GEON</p>
                <h3 className="text-xs font-bold text-slate-800">Cajón Portamonedas Metálico 41CM Pesado</h3>
              </div>
            </div>
          </div>

        </div>

        {/* PDA Section */}
        <div className="mb-16">
          <h2 className="text-center text-xl font-black text-slate-800 uppercase tracking-widest mb-8 flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-slate-300"></span> PDA / HANDHELDS <span className="w-12 h-px bg-slate-300"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col group hover:shadow-xl transition-all">
              <div className="aspect-square bg-slate-50 rounded-md mb-4 flex items-center justify-center"><Smartphone className="w-20 h-20 text-slate-300 group-hover:scale-110 transition-transform" /></div>
              <div className="text-center mb-4"><h4 className="text-2xl font-black text-blue-900">B/. 159.00</h4></div>
              <p className="text-xs font-bold text-sky-600 mb-1 uppercase">BTSPOS</p>
              <h3 className="text-sm font-bold text-slate-800">PDA BTSPOS T606 | 4GB RAM | 64GB | 5.5"</h3>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col group hover:shadow-xl transition-all">
              <div className="aspect-square bg-slate-50 rounded-md mb-4 flex items-center justify-center"><Smartphone className="w-20 h-20 text-slate-300 group-hover:scale-110 transition-transform" /></div>
              <div className="text-center mb-4"><h4 className="text-2xl font-black text-blue-900">B/. 195.00</h4></div>
              <p className="text-xs font-bold text-sky-600 mb-1 uppercase">SUNMI</p>
              <h3 className="text-sm font-bold text-slate-800">PDA SUNMI V2 PRO | Impresora Integrada</h3>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col group hover:shadow-xl transition-all">
              <div className="aspect-square bg-slate-50 rounded-md mb-4 flex items-center justify-center"><Smartphone className="w-20 h-20 text-slate-300 group-hover:scale-110 transition-transform" /></div>
              <div className="text-center mb-4"><h4 className="text-2xl font-black text-blue-900">B/. 535.50</h4></div>
              <p className="text-xs font-bold text-sky-600 mb-1 uppercase">ZEBRA</p>
              <h3 className="text-sm font-bold text-slate-800">PDA Escáner Industrial ZEBRA L2S Pro</h3>
            </div>
          </div>
        </div>

      </div>

      {/* Footer / Info Section */}
      <footer className="bg-[#0A132B] text-slate-300 py-16 border-t-4 border-blue-900">
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
              <li><Link href="#" className="hover:text-sky-400 flex items-center gap-2"><ChevronRight className="w-4 h-4" /> TPV y Pantallas</Link></li>
              <li><Link href="#" className="hover:text-sky-400 flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Impresoras de Tickets</Link></li>
              <li><Link href="#" className="hover:text-sky-400 flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Cajones Portamonedas</Link></li>
              <li><Link href="#" className="hover:text-sky-400 flex items-center gap-2"><ChevronRight className="w-4 h-4" /> PDA e Inventario</Link></li>
              <li><Link href="#" className="hover:text-sky-400 flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Kits Completos (Easy POS)</Link></li>
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
