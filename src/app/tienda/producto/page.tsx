"use client";

import { Monitor, Info, CreditCard, ShoppingCart, Link as LinkIcon, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "@/store/useCartStore";

export default function ProductoPage() {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: "prod_geon_h3_1",
      name: "QUIOSCO WINDOWS GEON H3 | J6412 | 8GB RAM | 128GB | 21,5\"",
      price: 1095.04,
      quantity: qty,
      image: "",
      slug: "geon-h3-win"
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Breadcrumbs */}
      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-8 flex gap-2">
        <Link href="/tienda" className="hover:text-blue-900 transition-colors">INICIO</Link> 
        <span>&gt;</span>
        <Link href="/tienda/categoria" className="hover:text-blue-900 transition-colors">QUIOSCO WINDOWS</Link>
        <span>&gt;</span>
        <span className="text-slate-600 truncate">QUIOSCO WINDOWS GEON H3...</span>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-8 mb-12 shadow-sm">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Product Images (Left) */}
          <div className="flex flex-col gap-6">
            <div className="aspect-[3/4] bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center p-8 relative">
              <Monitor className="w-full h-full text-slate-200" />
              <div className="absolute top-4 right-4 bg-white p-2 rounded shadow-sm border border-slate-100 flex gap-2">
                <div className="w-8 h-8 bg-sky-100 text-sky-600 font-black text-xs flex items-center justify-center rounded">GEON</div>
                <div className="w-8 h-8 bg-blue-100 text-blue-600 font-black text-xs flex items-center justify-center rounded">WIN</div>
              </div>
              <div className="absolute left-4 bottom-4 flex flex-col gap-2">
                <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center border border-slate-100"><CreditCard className="w-6 h-6 text-slate-600" /></div>
                <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center border border-slate-100"><Info className="w-6 h-6 text-slate-600" /></div>
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className={`w-20 h-20 shrink-0 bg-white border ${i===1 ? 'border-blue-900' : 'border-slate-200'} rounded flex items-center justify-center cursor-pointer hover:border-blue-500`}>
                  <Monitor className="w-8 h-8 text-slate-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info (Right) */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-black text-slate-800 leading-tight mb-6">
              QUIOSCO WINDOWS GEON H3 | J6412 | 8GB RAM | 128GB | 21,5" | PIE SOBREMESA Y SUELO
            </h1>
            
            <div className="flex justify-between items-end mb-8 pb-8 border-b border-slate-100">
              <div>
                <label className="text-[11px] font-bold text-sky-600 uppercase tracking-wider mb-2 block">CANTIDAD</label>
                <select 
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                  className="border border-slate-300 rounded px-4 py-2 text-sm bg-slate-50 focus:ring-blue-900 focus:border-blue-900 w-24"
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div>
              <div className="text-right">
                <h2 className="text-4xl font-black text-blue-900">B/. 1,095.04</h2>
                <p className="text-xs text-slate-500 font-medium">(B/. 1,171.69 ITBMS incl.)</p>
              </div>
            </div>

            <button 
              onClick={handleAddToCart}
              disabled={added}
              className={`w-full font-bold py-4 rounded transition-all flex items-center justify-center gap-2 mb-8 shadow-lg ${added ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-blue-900 hover:bg-blue-800 text-white'}`}
            >
              {added ? <><CheckCircle className="w-5 h-5"/> ¡AÑADIDO AL CARRITO!</> : 'AÑADIR AL CARRITO'}
            </button>

            <div className="mb-8">
              <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mr-4">Compartir esto:</span>
              <div className="inline-flex gap-2">
                <button className="w-8 h-8 bg-[#3b5998] text-white rounded-full flex items-center justify-center"><Facebook className="w-4 h-4" /></button>
                <button className="w-8 h-8 bg-[#1da1f2] text-white rounded-full flex items-center justify-center"><Twitter className="w-4 h-4" /></button>
                <button className="w-8 h-8 bg-slate-200 text-slate-600 rounded-full flex items-center justify-center"><LinkIcon className="w-4 h-4" /></button>
              </div>
            </div>

            {/* Accordion / Info Box */}
            <div className="border border-slate-200 rounded text-sm divide-y divide-slate-100">
              <div className="p-4 bg-sky-50 flex justify-between items-center text-sky-800 font-bold">
                <div className="flex items-center gap-2"><CreditCard className="w-5 h-5"/> Financia tu compra</div>
                <span className="text-xs">+ info</span>
              </div>
              <div className="p-4 font-bold text-slate-700 flex justify-between cursor-pointer hover:bg-slate-50">PEDIR PRESUPUESTO <span>+</span></div>
              <div className="p-4 font-bold text-slate-700 flex justify-between cursor-pointer hover:bg-slate-50">CONDICIONES DE DEVOLUCIÓN <span>+</span></div>
              <div className="p-4 font-bold text-slate-700 flex justify-between cursor-pointer hover:bg-slate-50">ENTREGA EN 24/48 HORAS <span>+</span></div>
              <div className="p-4 font-bold text-slate-700 flex justify-between cursor-pointer hover:bg-slate-50">ENVÍA UNA CONSULTA <span>+</span></div>
              <div className="p-4 font-bold text-slate-700 flex justify-between cursor-pointer hover:bg-slate-50">MEJORAMOS TU PRECIO <span>+</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Details & Tabs Section */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-4">DETALLES</h3>
        <p className="text-sm text-slate-600 mb-8 max-w-3xl leading-relaxed">
          Quiosco Geon H3 de 21.5" Moderniza tu punto de atención con el Quiosco Geon H3, un terminal de autoservicio 
          con pantalla táctil de 21.5", procesador Intel Quad-Core y sistema Windows 11, ideal para pagos rápidos... <span className="text-blue-600 underline cursor-pointer">Leer más</span>
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap border-b border-slate-200 mb-8 bg-slate-50 rounded-t overflow-hidden">
          <button className="px-6 py-4 bg-blue-800 text-white font-bold text-xs uppercase tracking-wider">CARACTERÍSTICAS</button>
          <button className="px-6 py-4 text-slate-600 font-bold text-xs uppercase tracking-wider hover:bg-slate-100">FICHA TÉCNICA</button>
          <button className="px-6 py-4 text-slate-600 font-bold text-xs uppercase tracking-wider hover:bg-slate-100">DESCARGAS</button>
          <button className="px-6 py-4 text-slate-600 font-bold text-xs uppercase tracking-wider hover:bg-slate-100">FORMAS DE PAGO</button>
          <button className="px-6 py-4 text-slate-600 font-bold text-xs uppercase tracking-wider hover:bg-slate-100">ENVÍO</button>
          <button className="px-6 py-4 text-slate-600 font-bold text-xs uppercase tracking-wider hover:bg-slate-100">PREGUNTA AL EXPERTO</button>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl">
          <h4 className="text-lg font-black text-slate-800 mb-4">Quiosco Geon H3 de 21.5"</h4>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            Moderniza tu punto de atención con el <strong>Quiosco Geon H3</strong>, un terminal de autoservicio con <strong>pantalla táctil de 21.5"</strong>, 
            procesador Intel Quad-Core y <strong>sistema Windows 11</strong>, ideal para pagos rápidos, impresión de tickets y lectura de tarjetas mediante NFC. 
            Diseñado para negocios que buscan <strong>eficiencia, conectividad y una experiencia de usuario fluida</strong>, el Geon H3 es perfecto para entornos 
            de alta rotación como restaurantes, tiendas, farmacias o estaciones de transporte.
          </p>
          <ul className="space-y-2 text-sm text-slate-800 font-bold mb-6">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-800 rounded-full"></div> Fácil de integrar</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-800 rounded-full"></div> Conectividad total</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-800 rounded-full"></div> Impresora térmica incluida</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-800 rounded-full"></div> Versatilidad para múltiples sectores</li>
          </ul>
          <p className="text-sm text-slate-600">Convierte cualquier espacio en un punto de autoservicio moderno, seguro y eficaz.</p>
        </div>
      </div>

    </div>
  );
}
