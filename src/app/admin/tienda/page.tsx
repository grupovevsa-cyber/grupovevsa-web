import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";

export default function AdminTiendaDashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-black text-slate-800 mb-8">Resumen General</h1>
      
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-bold text-slate-500 mb-1">Ventas Hoy</p>
              <h3 className="text-2xl font-black text-slate-800">B/. 0.00</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600"><DollarSign className="w-5 h-5"/></div>
          </div>
          <p className="text-xs text-green-600 font-bold flex items-center gap-1"><TrendingUp className="w-3 h-3"/> +0% vs ayer</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-bold text-slate-500 mb-1">Pedidos Nuevos</p>
              <h3 className="text-2xl font-black text-slate-800">0</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600"><ShoppingCart className="w-5 h-5"/></div>
          </div>
          <p className="text-xs text-slate-400 font-medium">Últimas 24 horas</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-bold text-slate-500 mb-1">Clientes</p>
              <h3 className="text-2xl font-black text-slate-800">0</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600"><Users className="w-5 h-5"/></div>
          </div>
          <p className="text-xs text-slate-400 font-medium">Registrados en tienda</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-bold text-slate-500 mb-1">Tasa de Conversión</p>
              <h3 className="text-2xl font-black text-slate-800">0.0%</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600"><TrendingUp className="w-5 h-5"/></div>
          </div>
          <p className="text-xs text-slate-400 font-medium">Basado en visitas de hoy</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="p-6 border-b border-slate-200 flex justify-between items-center">
            <h3 className="font-bold text-slate-800">Últimos Pedidos</h3>
            <button className="text-sm font-bold text-blue-600 hover:underline">Ver todos</button>
          </div>
          <div className="p-6 text-center text-slate-500 text-sm">
            No hay pedidos recientes.
          </div>
        </div>
        
        {/* Low Stock */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="p-6 border-b border-slate-200">
            <h3 className="font-bold text-slate-800">Alertas de Stock</h3>
          </div>
          <div className="p-6 text-center text-slate-500 text-sm">
            Todo tu inventario está en niveles óptimos.
          </div>
        </div>
      </div>
    </div>
  );
}
