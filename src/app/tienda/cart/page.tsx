import Link from "next/link";
import { Monitor, X } from "lucide-react";

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 max-w-5xl py-12 min-h-[60vh]">
      <div className="flex justify-between items-end mb-8">
        <h1 className="text-3xl font-black text-slate-800">Tu carro</h1>
        <Link href="/tienda" className="text-sm font-bold text-blue-600 hover:underline">
          Continuar comprando
        </Link>
      </div>

      {/* Cart Headers */}
      <div className="hidden md:grid grid-cols-12 gap-4 border-b border-slate-200 pb-4 mb-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        <div className="col-span-7">PRODUCTO</div>
        <div className="col-span-2 text-center">CANTIDAD</div>
        <div className="col-span-3 text-right">TOTAL</div>
      </div>

      {/* Cart Item */}
      <div className="grid md:grid-cols-12 gap-4 items-center border-b border-slate-100 pb-6 mb-6">
        <div className="col-span-12 md:col-span-7 flex gap-6">
          <div className="w-24 h-24 shrink-0 bg-white border border-slate-200 rounded-lg flex items-center justify-center p-2 relative">
            <Monitor className="w-full h-full text-slate-300" />
            <button className="absolute -top-2 -right-2 bg-white rounded-full p-0.5 shadow border border-slate-200 text-slate-400 hover:text-red-500 transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-800 leading-snug hover:text-blue-600 cursor-pointer mb-2">
              <Link href="/tienda/producto">QUIOSCO Windows GEON H3 | J6412 | 8GB RAM | 128GB | 21,5" | Pie sobremesa y suelo</Link>
            </h3>
            <p className="text-xs text-slate-500 font-medium mb-1">Precio Unitario: B/. 1,095.04</p>
            <p className="text-[10px] text-slate-400">Impuestos (ITBMS 7%) no incluidos en precio unitario</p>
          </div>
        </div>
        
        <div className="col-span-6 md:col-span-2 flex justify-start md:justify-center">
          <div className="flex border border-slate-300 rounded">
            <button className="px-3 py-1 text-slate-500 hover:bg-slate-100 font-bold">-</button>
            <input type="text" value="1" readOnly className="w-10 text-center text-sm font-bold text-slate-800 border-x border-slate-300 bg-slate-50" />
            <button className="px-3 py-1 text-slate-500 hover:bg-slate-100 font-bold">+</button>
          </div>
        </div>

        <div className="col-span-6 md:col-span-3 text-right">
          <span className="text-lg font-black text-slate-800">B/. 1,095.04</span>
        </div>
      </div>

      {/* Cart Footer */}
      <div className="flex flex-col items-end pt-4">
        <div className="flex justify-between w-full max-w-sm mb-4">
          <span className="text-slate-600 font-medium text-lg">Subtotal</span>
          <span className="text-2xl font-black text-slate-800">B/. 1,095.04</span>
        </div>
        
        <p className="text-xs text-slate-500 mb-2">Los gastos de envío y los impuestos se calculan al finalizar la compra.</p>
        <p className="text-xs text-slate-500 mb-8">Se emitirá la factura electrónica DGI en un plazo de 24 a 48 horas hábiles.</p>
        
        <Link href="/tienda/checkout" className="w-full max-w-sm bg-blue-900 text-white font-black text-center py-4 rounded hover:bg-blue-800 transition-colors shadow-lg">
          FINALIZAR COMPRA
        </Link>
      </div>

    </div>
  );
}
