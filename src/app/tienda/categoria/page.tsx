import { Monitor, Filter, LayoutGrid, List } from "lucide-react";
import Link from "next/link";

export default function CategoriaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6 flex gap-2">
        <Link href="/tienda" className="hover:text-blue-900 transition-colors">INICIO</Link> 
        <span>&gt;</span>
        <span className="text-slate-600">QUIOSCO WINDOWS</span>
      </div>

      <div className="bg-white p-6 border-b border-slate-200 mb-8 rounded-lg shadow-sm">
        <h1 className="text-2xl font-black text-slate-800 uppercase tracking-tight mb-2">QUIOSCO WINDOWS</h1>
        <p className="text-sm text-blue-600 font-medium">Quioscos... <span className="underline cursor-pointer">Leer más</span></p>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        
        {/* Sidebar Filters */}
        <div className="md:col-span-3 space-y-8">
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 border-b pb-2 flex justify-between">
              Ordenar por
            </h4>
            <select className="w-full text-sm border-slate-300 rounded p-2 focus:ring-blue-900 focus:border-blue-900 bg-slate-50">
              <option>Precio: menor a mayor</option>
              <option>Precio: mayor a menor</option>
              <option>Destacados</option>
            </select>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 border-b pb-2">Rango de precio</h4>
            <div className="flex gap-2 items-center mb-4">
              <input type="text" value="1325" className="w-full text-sm border-slate-300 rounded p-2 text-center bg-slate-50" readOnly/>
              <span className="text-slate-400">-</span>
              <input type="text" value="14399" className="w-full text-sm border-slate-300 rounded p-2 text-center bg-slate-50" readOnly/>
            </div>
            {/* Fake Slider */}
            <div className="w-full h-1 bg-slate-200 rounded relative mb-2">
              <div className="absolute left-1/4 right-0 h-1 bg-slate-600 rounded"></div>
              <div className="absolute left-1/4 -top-1.5 w-4 h-4 bg-slate-600 rounded-full border-2 border-white shadow"></div>
              <div className="absolute right-0 -top-1.5 w-4 h-4 bg-slate-600 rounded-full border-2 border-white shadow"></div>
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 font-medium">
              <span>B/. 1,325.00</span>
              <span>B/. 14,399.00</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 border-b pb-2">Pulgadas</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-blue-900"><input type="checkbox" className="rounded text-blue-900 focus:ring-blue-900" /> 21.5" (3)</label>
              <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-blue-900"><input type="checkbox" className="rounded text-blue-900 focus:ring-blue-900" /> 27" (1)</label>
              <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-blue-900"><input type="checkbox" className="rounded text-blue-900 focus:ring-blue-900" /> 32" (6)</label>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 border-b pb-2">RAM (GB)</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-blue-900"><input type="checkbox" className="rounded text-blue-900 focus:ring-blue-900" /> 4 (5)</label>
              <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-blue-900"><input type="checkbox" className="rounded text-blue-900 focus:ring-blue-900" /> 8 (5)</label>
            </div>
          </div>
        </div>

        {/* Main Product Grid */}
        <div className="md:col-span-9">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between bg-white p-4 border border-slate-200 rounded-lg mb-6">
            <div className="relative w-full max-w-xs mb-4 md:mb-0">
              <Filter className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input type="text" placeholder="Buscar productos" className="w-full pl-9 pr-4 py-2 text-sm border-slate-300 rounded focus:ring-blue-900 focus:border-blue-900 bg-slate-50" />
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <span>Ver más</span>
                <select className="border-none bg-transparent font-bold cursor-pointer"><option>12</option></select>
              </div>
              <div className="flex items-center gap-2 border-l pl-6 border-slate-300">
                <LayoutGrid className="w-4 h-4 cursor-pointer text-slate-800" />
                <List className="w-4 h-4 cursor-pointer text-slate-400" />
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col group hover:shadow-xl hover:border-blue-300 transition-all">
              <div className="aspect-[4/5] bg-white border border-slate-100 rounded-md mb-4 flex items-center justify-center relative overflow-hidden">
                <Monitor className="w-32 h-32 text-slate-200 group-hover:scale-110 transition-transform" />
                <div className="absolute top-2 right-2 text-sky-500 font-bold bg-sky-50 rounded p-1">W11</div>
              </div>
              <div className="text-center mb-4">
                <p className="text-xs text-slate-400 line-through mb-0.5">B/. 1,325.00</p>
                <h4 className="text-2xl font-black text-blue-900">B/. 1,095.04</h4>
                <p className="text-[10px] text-slate-500">(B/. 1,171.69 ITBMS incl.)</p>
              </div>
              <p className="text-[10px] font-bold text-sky-600 mb-1 uppercase tracking-wider text-center">GEON</p>
              <h3 className="text-[13px] font-bold text-slate-800 mb-4 leading-snug text-center hover:text-blue-600 cursor-pointer">
                <Link href="/tienda/producto">QUIOSCO Windows GEON H3 | J6412 | 8GB RAM | 128GB | 21.5" | Pie sobremesa y suelo</Link>
              </h3>
              <div className="mt-auto flex gap-2">
                <Link href="/tienda/producto" className="flex-1 bg-blue-900 text-white text-xs font-bold py-2.5 rounded hover:bg-blue-800 transition-colors text-center">AÑADIR AL CARRITO</Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col group hover:shadow-xl hover:border-blue-300 transition-all">
              <div className="aspect-[4/5] bg-white border border-slate-100 rounded-md mb-4 flex items-center justify-center relative overflow-hidden">
                <Monitor className="w-32 h-32 text-slate-200 group-hover:scale-110 transition-transform" />
                <div className="absolute top-2 right-2 text-sky-500 font-bold bg-sky-50 rounded p-1">W11</div>
              </div>
              <div className="text-center mb-4">
                <p className="text-xs text-slate-400 line-through mb-0.5">B/. 1,365.00</p>
                <h4 className="text-2xl font-black text-blue-900">B/. 1,128.10</h4>
                <p className="text-[10px] text-slate-500">(B/. 1,207.06 ITBMS incl.)</p>
              </div>
              <p className="text-[10px] font-bold text-sky-600 mb-1 uppercase tracking-wider text-center">GEON</p>
              <h3 className="text-[13px] font-bold text-slate-800 mb-4 leading-snug text-center hover:text-blue-600 cursor-pointer">
                <Link href="/tienda/producto">QUIOSCO Windows GEON Q1 | J6412 | 8GB RAM | 128GB | 27"</Link>
              </h3>
              <div className="mt-auto flex gap-2">
                <Link href="/tienda/producto" className="flex-1 bg-blue-900 text-white text-xs font-bold py-2.5 rounded hover:bg-blue-800 transition-colors text-center">AÑADIR AL CARRITO</Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col group hover:shadow-xl hover:border-blue-300 transition-all">
              <div className="aspect-[4/5] bg-white border border-slate-100 rounded-md mb-4 flex items-center justify-center relative overflow-hidden">
                <Monitor className="w-32 h-32 text-slate-200 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-center mb-4">
                <p className="text-xs text-slate-400 line-through mb-0.5">B/. 1,603.25</p>
                <h4 className="text-2xl font-black text-blue-900">B/. 1,325.00</h4>
                <p className="text-[10px] text-slate-500">(B/. 1,417.75 ITBMS incl.)</p>
              </div>
              <p className="text-[10px] font-bold text-sky-600 mb-1 uppercase tracking-wider text-center">T-QUIOSK</p>
              <h3 className="text-[13px] font-bold text-slate-800 mb-4 leading-snug text-center hover:text-blue-600 cursor-pointer">
                <Link href="/tienda/producto">QUIOSCO Windows Cashdro TQ-1 | Intel Core i5 | 8GB RAM | 128GB | 21.5"</Link>
              </h3>
              <div className="mt-auto flex gap-2">
                <Link href="/tienda/producto" className="flex-1 bg-blue-900 text-white text-xs font-bold py-2.5 rounded hover:bg-blue-800 transition-colors text-center">AÑADIR AL CARRITO</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
