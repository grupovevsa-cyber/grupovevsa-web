import { ArrowLeft, Upload, Save } from "lucide-react";
import Link from "next/link";

export default function NuevoProductoPage() {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/tienda/productos" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-900 shadow-sm transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-black text-slate-800">Añadir Producto</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 border-b pb-2">Información Básica</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">Nombre del producto</label>
                <input type="text" className="w-full border border-slate-300 rounded p-3 text-sm focus:ring-blue-900 focus:border-blue-900" placeholder="Ej. Quiosco Windows GEON H3" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">Descripción corta / Detalles</label>
                <textarea rows={4} className="w-full border border-slate-300 rounded p-3 text-sm focus:ring-blue-900 focus:border-blue-900" placeholder="Descripción que aparecerá en la página del producto..."></textarea>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 border-b pb-2">Multimedia</h3>
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 transition-colors">
              <Upload className="w-8 h-8 text-slate-400 mb-2" />
              <p className="text-sm font-bold text-blue-600">Haz clic para subir imágenes</p>
              <p className="text-xs text-slate-500 mt-1">PNG, JPG, WEBP hasta 5MB</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 border-b pb-2">Precio e Inventario</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">Precio (USD)</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-slate-400 font-bold text-sm">$</span>
                  <input type="number" className="w-full border border-slate-300 rounded p-3 pl-8 text-sm focus:ring-blue-900 focus:border-blue-900" placeholder="0.00" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">Stock</label>
                <input type="number" className="w-full border border-slate-300 rounded p-3 text-sm focus:ring-blue-900 focus:border-blue-900" placeholder="0" />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-bold text-slate-500 mb-1">SKU (Código de barra / Identificador)</label>
                <input type="text" className="w-full border border-slate-300 rounded p-3 text-sm focus:ring-blue-900 focus:border-blue-900" placeholder="Ej. GEON-H3-WIN" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 border-b pb-2">Organización</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">Estado</label>
                <select className="w-full border border-slate-300 rounded p-3 text-sm focus:ring-blue-900 focus:border-blue-900 bg-white">
                  <option>Activo</option>
                  <option>Borrador</option>
                  <option>Oculto</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">Categoría</label>
                <select className="w-full border border-slate-300 rounded p-3 text-sm focus:ring-blue-900 focus:border-blue-900 bg-white">
                  <option>Seleccionar...</option>
                  <option>Quioscos</option>
                  <option>Cajones</option>
                  <option>Impresoras</option>
                </select>
              </div>
            </div>
          </div>

          <button className="w-full bg-blue-900 text-white font-bold py-3.5 rounded-lg hover:bg-blue-800 transition-colors shadow-lg flex items-center justify-center gap-2">
            <Save className="w-5 h-5" /> Guardar Producto
          </button>
        </div>
      </div>
    </div>
  );
}
