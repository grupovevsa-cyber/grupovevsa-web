import { Search, Filter, MoreHorizontal, Eye, Truck, CreditCard } from "lucide-react";

export default function AdminPedidosPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-black text-slate-800">Gestión de Pedidos</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <div className="relative w-64">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input type="text" placeholder="Buscar pedido o cliente..." className="w-full pl-9 pr-4 py-2 text-sm border border-slate-300 rounded focus:ring-blue-900 focus:border-blue-900 bg-white" />
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
                <th className="p-4">Pedido ID</th>
                <th className="p-4">Fecha</th>
                <th className="p-4">Cliente</th>
                <th className="p-4">Total</th>
                <th className="p-4">Pago</th>
                <th className="p-4 text-center">Estado</th>
                <th className="p-4 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
              {/* Dummy row 1 */}
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-blue-900">#ORD-0001</td>
                <td className="p-4 text-slate-500 text-xs">07 Sep 2026, 14:30</td>
                <td className="p-4">
                  <p className="font-bold text-slate-800">Juan Pérez</p>
                  <p className="text-[10px] text-slate-500">juan@ejemplo.com</p>
                </td>
                <td className="p-4 font-bold">B/. 1,171.69</td>
                <td className="p-4">
                  <div className="flex items-center gap-1.5 text-xs text-slate-600">
                    <CreditCard className="w-4 h-4" /> Yappy
                  </div>
                </td>
                <td className="p-4 text-center">
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Pendiente</span>
                </td>
                <td className="p-4 text-center">
                  <button className="text-blue-600 hover:text-blue-800 mr-2" title="Ver detalles"><Eye className="w-5 h-5" /></button>
                  <button className="text-slate-400 hover:text-blue-600" title="Más opciones"><MoreHorizontal className="w-5 h-5" /></button>
                </td>
              </tr>
              {/* Dummy row 2 */}
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-blue-900">#ORD-0002</td>
                <td className="p-4 text-slate-500 text-xs">06 Sep 2026, 09:15</td>
                <td className="p-4">
                  <p className="font-bold text-slate-800">Empresa XYZ S.A.</p>
                  <p className="text-[10px] text-slate-500">compras@xyz.com</p>
                </td>
                <td className="p-4 font-bold">B/. 35.37</td>
                <td className="p-4">
                  <div className="flex items-center gap-1.5 text-xs text-slate-600">
                    <CreditCard className="w-4 h-4" /> ACH
                  </div>
                </td>
                <td className="p-4 text-center">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Pagado</span>
                </td>
                <td className="p-4 text-center">
                  <button className="text-blue-600 hover:text-blue-800 mr-2" title="Ver detalles"><Eye className="w-5 h-5" /></button>
                  <button className="text-slate-400 hover:text-blue-600" title="Más opciones"><MoreHorizontal className="w-5 h-5" /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center">
          <span>Mostrando 2 pedidos</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50">Anterior</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50">Siguiente</button>
          </div>
        </div>

      </div>
    </div>
  );
}
