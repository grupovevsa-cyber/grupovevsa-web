import { Plus, Search, Filter, MoreHorizontal, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export default function AdminProductosPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-black text-slate-800">Catálogo de Productos</h1>
        <Link href="/admin/tienda/productos/nuevo" className="bg-blue-900 text-white px-4 py-2 rounded font-bold text-sm flex items-center gap-2 hover:bg-blue-800 transition-colors">
          <Plus className="w-4 h-4" /> Nuevo Producto
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <div className="relative w-64">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input type="text" placeholder="Buscar producto..." className="w-full pl-9 pr-4 py-2 text-sm border border-slate-300 rounded focus:ring-blue-900 focus:border-blue-900 bg-white" />
          </div>
          <button className="flex items-center gap-2 text-sm font-bold text-slate-600 bg-white border border-slate-300 px-4 py-2 rounded hover:bg-slate-50">
            <Filter className="w-4 h-4" /> Filtrar
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] uppercase tracking-wider text-slate-500 font-bold">
                <th className="p-4 w-12 text-center"><input type="checkbox" className="rounded text-blue-900" /></th>
                <th className="p-4">Producto</th>
                <th className="p-4">Categoría</th>
                <th className="p-4 text-right">Precio</th>
                <th className="p-4 text-center">Stock</th>
                <th className="p-4 text-center">Estado</th>
                <th className="p-4 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
              {/* Dummy row 1 */}
              <tr className="hover:bg-slate-50">
                <td className="p-4 text-center"><input type="checkbox" className="rounded text-blue-900" /></td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded border border-slate-200 flex items-center justify-center"><ImageIcon className="w-5 h-5 text-slate-300" /></div>
                    <div>
                      <p className="font-bold text-slate-800">QUIOSCO Windows GEON H3</p>
                      <p className="text-[10px] text-slate-500">SKU: GEON-H3-WIN</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">Quioscos</td>
                <td className="p-4 text-right font-bold">B/. 1,095.04</td>
                <td className="p-4 text-center"><span className="text-green-600 font-bold">12</span></td>
                <td className="p-4 text-center">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Activo</span>
                </td>
                <td className="p-4 text-center">
                  <button className="text-slate-400 hover:text-blue-600"><MoreHorizontal className="w-5 h-5" /></button>
                </td>
              </tr>
              {/* Dummy row 2 */}
              <tr className="hover:bg-slate-50">
                <td className="p-4 text-center"><input type="checkbox" className="rounded text-blue-900" /></td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded border border-slate-200 flex items-center justify-center"><ImageIcon className="w-5 h-5 text-slate-300" /></div>
                    <div>
                      <p className="font-bold text-slate-800">Cajón Portamonedas Negro 33CM</p>
                      <p className="text-[10px] text-slate-500">SKU: CAJON-33</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">Cajones</td>
                <td className="p-4 text-right font-bold">B/. 33.06</td>
                <td className="p-4 text-center"><span className="text-orange-500 font-bold">3</span></td>
                <td className="p-4 text-center">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Activo</span>
                </td>
                <td className="p-4 text-center">
                  <button className="text-slate-400 hover:text-blue-600"><MoreHorizontal className="w-5 h-5" /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center">
          <span>Mostrando 2 productos</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50">Anterior</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50">Siguiente</button>
          </div>
        </div>

      </div>
    </div>
  );
}
