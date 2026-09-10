import { Search, Filter, Mail, Phone, ExternalLink } from "lucide-react";

export default function AdminClientesPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-black text-slate-800">Directorio de Clientes</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <div className="relative w-64">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input type="text" placeholder="Buscar por nombre o correo..." className="w-full pl-9 pr-4 py-2 text-sm border border-slate-300 rounded focus:ring-blue-900 focus:border-blue-900 bg-white" />
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
                <th className="p-4">Cliente</th>
                <th className="p-4">Contacto</th>
                <th className="p-4">Ubicación</th>
                <th className="p-4 text-center">Pedidos</th>
                <th className="p-4 text-right">Total Gastado</th>
                <th className="p-4 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
              {/* Dummy row 1 */}
              <tr className="hover:bg-slate-50">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold border border-blue-200">
                      JP
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">Juan Pérez</p>
                      <p className="text-[10px] text-slate-500">Registrado: 07 Sep 2026</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="space-y-1">
                    <p className="flex items-center gap-1.5 text-xs text-slate-600"><Mail className="w-3.5 h-3.5" /> juan@ejemplo.com</p>
                    <p className="flex items-center gap-1.5 text-xs text-slate-600"><Phone className="w-3.5 h-3.5" /> +507 6000-0000</p>
                  </div>
                </td>
                <td className="p-4 text-xs text-slate-600">Panamá, Panamá</td>
                <td className="p-4 text-center font-bold">1</td>
                <td className="p-4 text-right font-bold text-blue-900">B/. 1,171.69</td>
                <td className="p-4 text-center">
                  <button className="text-slate-400 hover:text-blue-600"><ExternalLink className="w-5 h-5" /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center">
          <span>Mostrando 1 cliente</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50">Anterior</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50">Siguiente</button>
          </div>
        </div>

      </div>
    </div>
  );
}
