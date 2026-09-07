import Link from "next/link";
import { LayoutDashboard, ShoppingBag, PackageOpen, Users, Settings, LogOut, Store } from "lucide-react";

export default function AdminTiendaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col min-h-screen">
        <div className="p-6">
          <h2 className="text-xl font-black tracking-tight flex items-center gap-2">
            <Store className="w-6 h-6 text-sky-400" /> LA CASA DEL POS
          </h2>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">CMS Panel</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          <Link href="/admin/tienda" className="flex items-center gap-3 px-3 py-2.5 rounded text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </Link>
          <Link href="/admin/tienda/pedidos" className="flex items-center gap-3 px-3 py-2.5 rounded text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
            <ShoppingBag className="w-5 h-5" /> Pedidos
          </Link>
          <Link href="/admin/tienda/productos" className="flex items-center gap-3 px-3 py-2.5 rounded text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors bg-slate-800">
            <PackageOpen className="w-5 h-5 text-sky-400" /> Catálogo
          </Link>
          <Link href="/admin/tienda/clientes" className="flex items-center gap-3 px-3 py-2.5 rounded text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
            <Users className="w-5 h-5" /> Clientes
          </Link>
          <Link href="/admin/tienda/ajustes" className="flex items-center gap-3 px-3 py-2.5 rounded text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
            <Settings className="w-5 h-5" /> Ajustes
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <Link href="/tienda" className="flex items-center gap-3 px-3 py-2 rounded text-sm font-medium text-slate-400 hover:text-white transition-colors">
            <LogOut className="w-5 h-5" /> Volver a la Tienda
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-end px-6 shadow-sm">
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-slate-700">Administrador</span>
            <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-700 font-black text-xs border border-sky-200">
              AD
            </div>
          </div>
        </header>
        
        <div className="flex-1 overflow-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
