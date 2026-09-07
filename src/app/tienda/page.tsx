import { ShieldCheck, Truck, Award, Monitor, Printer, Smartphone, Package } from "lucide-react";
import Link from "next/link";

export default function TiendaPage() {
  return (
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

      {/* TPV Section */}
      <div className="mb-12">
        <h2 className="text-center text-xl font-black text-slate-800 uppercase tracking-widest mb-8 flex items-center justify-center gap-4">
          <span className="w-12 h-px bg-slate-300"></span> TPV <span className="w-12 h-px bg-slate-300"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <Link href="/tienda/producto" className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col group hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer">
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
          </Link>

          <Link href="/tienda/producto" className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col group hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer">
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
          </Link>
          
          <Link href="/tienda/producto" className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col group hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer opacity-75">
            <div className="aspect-square bg-slate-50 rounded-md mb-4 flex items-center justify-center relative"><Monitor className="w-20 h-20 text-slate-300" /></div>
            <div className="text-center mb-4"><h4 className="text-2xl font-black text-blue-900">B/. 275.50</h4></div>
            <p className="text-xs font-bold text-sky-600 mb-1 uppercase tracking-wider">BTSPOS</p>
            <h3 className="text-sm font-bold text-slate-800 mb-2 leading-snug">TPV Android Compact 11" | 2GB RAM | 32GB</h3>
          </Link>

          <Link href="/tienda/producto" className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col group hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer opacity-75">
            <div className="aspect-square bg-slate-50 rounded-md mb-4 flex items-center justify-center relative"><Monitor className="w-20 h-20 text-slate-300" /></div>
            <div className="text-center mb-4"><h4 className="text-2xl font-black text-blue-900">B/. 450.00</h4></div>
            <p className="text-xs font-bold text-sky-600 mb-1 uppercase tracking-wider">GENÉRICO</p>
            <h3 className="text-sm font-bold text-slate-800 mb-2 leading-snug">Monitor Táctil Capacitivo 17" USB/VGA</h3>
          </Link>
        </div>
      </div>

      {/* Impresoras & Cajones Section */}
      <div className="grid lg:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-center text-xl font-black text-slate-800 uppercase tracking-widest mb-8 flex items-center justify-center gap-4">
            <span className="w-8 h-px bg-slate-300"></span> IMPRESORAS DE TICKETS <span className="w-8 h-px bg-slate-300"></span>
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/tienda/producto" className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col hover:shadow-lg transition-all text-center">
              <div className="aspect-square bg-slate-50 rounded mb-3 flex items-center justify-center"><Printer className="w-16 h-16 text-slate-300" /></div>
              <h4 className="text-xl font-black text-blue-900 mb-2">B/. 57.81</h4>
              <p className="text-[10px] font-bold text-sky-600 uppercase mb-1">BTSPOS</p>
              <h3 className="text-xs font-bold text-slate-800">Impresora Térmica 80mm | USB + Ethernet</h3>
            </Link>
            <Link href="/tienda/producto" className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col hover:shadow-lg transition-all text-center">
              <div className="aspect-square bg-slate-50 rounded mb-3 flex items-center justify-center"><Printer className="w-16 h-16 text-slate-300" /></div>
              <h4 className="text-xl font-black text-blue-900 mb-2">B/. 69.01</h4>
              <p className="text-[10px] font-bold text-sky-600 uppercase mb-1">BTSPOS</p>
              <h3 className="text-xs font-bold text-slate-800">Impresora Térmica 80mm | USB + Wi-Fi</h3>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-center text-xl font-black text-slate-800 uppercase tracking-widest mb-8 flex items-center justify-center gap-4">
            <span className="w-8 h-px bg-slate-300"></span> CAJONES <span className="w-8 h-px bg-slate-300"></span>
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/tienda/producto" className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col hover:shadow-lg transition-all text-center">
              <div className="aspect-square bg-slate-50 rounded mb-3 flex items-center justify-center"><Package className="w-16 h-16 text-slate-300" /></div>
              <h4 className="text-xl font-black text-blue-900 mb-2">B/. 33.06</h4>
              <p className="text-[10px] font-bold text-sky-600 uppercase mb-1">GEON</p>
              <h3 className="text-xs font-bold text-slate-800">Cajón Portamonedas Negro 33CM | 4 Billetes</h3>
            </Link>
            <Link href="/tienda/producto" className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col hover:shadow-lg transition-all text-center">
              <div className="aspect-square bg-slate-50 rounded mb-3 flex items-center justify-center"><Package className="w-16 h-16 text-slate-300" /></div>
              <h4 className="text-xl font-black text-blue-900 mb-2">B/. 45.00</h4>
              <p className="text-[10px] font-bold text-sky-600 uppercase mb-1">GEON</p>
              <h3 className="text-xs font-bold text-slate-800">Cajón Portamonedas Metálico 41CM Pesado</h3>
            </Link>
          </div>
        </div>
      </div>

      {/* PDA Section */}
      <div className="mb-16">
        <h2 className="text-center text-xl font-black text-slate-800 uppercase tracking-widest mb-8 flex items-center justify-center gap-4">
          <span className="w-12 h-px bg-slate-300"></span> PDA / HANDHELDS <span className="w-12 h-px bg-slate-300"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/tienda/producto" className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col group hover:shadow-xl transition-all">
            <div className="aspect-square bg-slate-50 rounded-md mb-4 flex items-center justify-center"><Smartphone className="w-20 h-20 text-slate-300 group-hover:scale-110 transition-transform" /></div>
            <div className="text-center mb-4"><h4 className="text-2xl font-black text-blue-900">B/. 159.00</h4></div>
            <p className="text-xs font-bold text-sky-600 mb-1 uppercase">BTSPOS</p>
            <h3 className="text-sm font-bold text-slate-800">PDA BTSPOS T606 | 4GB RAM | 64GB | 5.5"</h3>
          </Link>
          <Link href="/tienda/producto" className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col group hover:shadow-xl transition-all">
            <div className="aspect-square bg-slate-50 rounded-md mb-4 flex items-center justify-center"><Smartphone className="w-20 h-20 text-slate-300 group-hover:scale-110 transition-transform" /></div>
            <div className="text-center mb-4"><h4 className="text-2xl font-black text-blue-900">B/. 195.00</h4></div>
            <p className="text-xs font-bold text-sky-600 mb-1 uppercase">SUNMI</p>
            <h3 className="text-sm font-bold text-slate-800">PDA SUNMI V2 PRO | Impresora Integrada</h3>
          </Link>
          <Link href="/tienda/producto" className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col group hover:shadow-xl transition-all">
            <div className="aspect-square bg-slate-50 rounded-md mb-4 flex items-center justify-center"><Smartphone className="w-20 h-20 text-slate-300 group-hover:scale-110 transition-transform" /></div>
            <div className="text-center mb-4"><h4 className="text-2xl font-black text-blue-900">B/. 535.50</h4></div>
            <p className="text-xs font-bold text-sky-600 mb-1 uppercase">ZEBRA</p>
            <h3 className="text-sm font-bold text-slate-800">PDA Escáner Industrial ZEBRA L2S Pro</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
