"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Monitor, CreditCard, Smartphone, Building, ShieldCheck, HelpCircle } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

export default function CheckoutPage() {
  const [deliveryMethod, setDeliveryMethod] = useState<"envio" | "retiro">("envio");
  const [paymentMethod, setPaymentMethod] = useState<"tarjeta" | "yappy" | "ach" | "bct">("tarjeta");
  const { items } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-6xl py-8">
        
        <div className="flex flex-col-reverse lg:flex-row gap-12">
          
          {/* Left Column - Checkout Form */}
          <div className="flex-1 lg:max-w-xl">
            
            {/* Express Checkout */}
            <div className="mb-8">
              <h2 className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Pago Exprés</h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-[#002f6c] text-white rounded-md py-3 font-black flex items-center justify-center hover:bg-blue-900 transition-colors">
                  Páguelo Fácil
                </button>
                <button className="bg-[#0038A8] text-white rounded-md py-3 font-black flex items-center justify-center hover:bg-blue-900 transition-colors">
                  YAPPY
                </button>
              </div>
              <div className="flex items-center my-6">
                <div className="flex-1 border-b border-slate-300"></div>
                <span className="px-4 text-slate-400 text-xs font-bold uppercase">O continuar a continuación</span>
                <div className="flex-1 border-b border-slate-300"></div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mb-10">
              <div className="flex justify-between items-end mb-4">
                <h2 className="text-xl font-black text-slate-800">Contacto</h2>
                <Link href="/login" className="text-sm text-blue-600 font-bold hover:underline">Iniciar sesión</Link>
              </div>
              <input 
                type="email" 
                placeholder="Correo electrónico" 
                className="w-full border border-slate-300 rounded p-3 text-sm focus:ring-blue-900 focus:border-blue-900 bg-white mb-3"
              />
              <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                <input type="checkbox" className="rounded text-blue-900 focus:ring-blue-900" defaultChecked />
                Enviarme novedades y ofertas por correo electrónico
              </label>
            </div>

            {/* Delivery Method */}
            <div className="mb-10">
              <h2 className="text-xl font-black text-slate-800 mb-4">Entrega</h2>
              
              {/* Delivery Tabs */}
              <div className="flex bg-slate-200 p-1 rounded-lg mb-6">
                <button 
                  onClick={() => setDeliveryMethod("envio")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md text-sm font-bold transition-colors ${deliveryMethod === "envio" ? "bg-white text-blue-900 shadow-sm" : "text-slate-600 hover:bg-slate-300"}`}
                >
                  <TruckIcon className="w-4 h-4" /> Envío
                </button>
                <button 
                  onClick={() => setDeliveryMethod("retiro")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md text-sm font-bold transition-colors ${deliveryMethod === "retiro" ? "bg-white text-blue-900 shadow-sm" : "text-slate-600 hover:bg-slate-300"}`}
                >
                  <Building className="w-4 h-4" /> Retiro
                </button>
              </div>

              {deliveryMethod === "envio" ? (
                <div className="space-y-4">
                  <select className="w-full border border-slate-300 rounded p-3 text-sm focus:ring-blue-900 focus:border-blue-900 bg-white">
                    <option>Panamá</option>
                  </select>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Nombre" className="border border-slate-300 rounded p-3 text-sm focus:ring-blue-900 focus:border-blue-900 bg-white" />
                    <input type="text" placeholder="Apellidos" className="border border-slate-300 rounded p-3 text-sm focus:ring-blue-900 focus:border-blue-900 bg-white" />
                  </div>
                  <input type="text" placeholder="RUC / Cédula" className="w-full border border-slate-300 rounded p-3 text-sm focus:ring-blue-900 focus:border-blue-900 bg-white" />
                  <input type="text" placeholder="Dirección completa" className="w-full border border-slate-300 rounded p-3 text-sm focus:ring-blue-900 focus:border-blue-900 bg-white" />
                  <input type="text" placeholder="Casa, apartamento, etc. (opcional)" className="w-full border border-slate-300 rounded p-3 text-sm focus:ring-blue-900 focus:border-blue-900 bg-white" />
                  <div className="grid grid-cols-2 gap-4">
                    <select className="border border-slate-300 rounded p-3 text-sm focus:ring-blue-900 focus:border-blue-900 bg-white">
                      <option>Provincia</option>
                      <option>Panamá</option>
                      <option>Panamá Oeste</option>
                      <option>Colón</option>
                      <option>Chiriquí</option>
                    </select>
                    <input type="text" placeholder="Distrito / Corregimiento" className="border border-slate-300 rounded p-3 text-sm focus:ring-blue-900 focus:border-blue-900 bg-white" />
                  </div>
                  <input type="tel" placeholder="Teléfono" className="w-full border border-slate-300 rounded p-3 text-sm focus:ring-blue-900 focus:border-blue-900 bg-white" />
                </div>
              ) : (
                <div className="border border-slate-300 rounded p-4 bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">La Casa del POS (GRUPO VEV, S.A.)</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        Ciudad de Panamá, Panamá<br/>
                        Bodega Principal
                      </p>
                      <p className="text-xs text-green-600 font-bold mt-2 flex items-center gap-1">
                        <ShieldCheck className="w-4 h-4"/> Generalmente listo en 24 horas
                      </p>
                    </div>
                    <span className="text-sm font-bold text-slate-800">GRATIS</span>
                  </div>
                </div>
              )}
            </div>

            {/* Payment Method */}
            <div className="mb-10">
              <h2 className="text-xl font-black text-slate-800 mb-1">Pago</h2>
              <p className="text-xs text-slate-500 mb-4 flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5"/> Todas las transacciones son seguras y están encriptadas.</p>

              <div className="border border-slate-300 rounded-lg bg-white overflow-hidden divide-y divide-slate-200">
                
                {/* Credit Card / Paguelo Facil */}
                <label className={`block p-4 cursor-pointer transition-colors ${paymentMethod === 'tarjeta' ? 'bg-sky-50' : 'hover:bg-slate-50'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="payment" checked={paymentMethod === 'tarjeta'} onChange={() => setPaymentMethod('tarjeta')} className="text-blue-900 focus:ring-blue-900 w-4 h-4" />
                      <span className="font-bold text-slate-800 text-sm">Páguelo Fácil (Tarjeta de Crédito)</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-8 h-5 bg-blue-900 rounded text-[8px] text-white flex items-center justify-center font-bold italic">VISA</div>
                      <div className="w-8 h-5 bg-orange-500 rounded text-[8px] text-white flex items-center justify-center font-bold italic">MC</div>
                    </div>
                  </div>
                  {paymentMethod === 'tarjeta' && (
                    <div className="mt-4 pt-4 border-t border-slate-200 space-y-4">
                      <div className="relative">
                        <CreditCard className="w-5 h-5 absolute right-3 top-3 text-slate-400" />
                        <input type="text" placeholder="Número de tarjeta" className="w-full border border-slate-300 rounded p-3 text-sm focus:ring-blue-900 focus:border-blue-900 bg-white" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="MM / AA" className="border border-slate-300 rounded p-3 text-sm focus:ring-blue-900 focus:border-blue-900 bg-white" />
                        <div className="relative">
                          <HelpCircle className="w-4 h-4 absolute right-3 top-3.5 text-slate-400 cursor-pointer" />
                          <input type="text" placeholder="Código de seguridad" className="w-full border border-slate-300 rounded p-3 text-sm focus:ring-blue-900 focus:border-blue-900 bg-white" />
                        </div>
                      </div>
                      <input type="text" placeholder="Nombre del titular" className="w-full border border-slate-300 rounded p-3 text-sm focus:ring-blue-900 focus:border-blue-900 bg-white" />
                    </div>
                  )}
                </label>

                {/* Yappy */}
                <label className={`block p-4 cursor-pointer transition-colors ${paymentMethod === 'yappy' ? 'bg-sky-50' : 'hover:bg-slate-50'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="payment" checked={paymentMethod === 'yappy'} onChange={() => setPaymentMethod('yappy')} className="text-blue-900 focus:ring-blue-900 w-4 h-4" />
                      <span className="font-bold text-slate-800 text-sm">Yappy Comercial</span>
                    </div>
                    <div className="w-12 h-6 bg-[#0038A8] rounded flex items-center justify-center text-white text-[10px] font-black tracking-wider">YAPPY</div>
                  </div>
                  {paymentMethod === 'yappy' && (
                    <div className="mt-4 pt-4 border-t border-slate-200 text-sm text-slate-600 flex flex-col items-center text-center">
                      <Smartphone className="w-12 h-12 text-blue-900 mb-2" />
                      <p>Al hacer clic en "Finalizar pedido", serás redirigido de forma segura a Yappy para completar tu compra.</p>
                    </div>
                  )}
                </label>

                {/* ACH */}
                <label className={`block p-4 cursor-pointer transition-colors ${paymentMethod === 'ach' ? 'bg-sky-50' : 'hover:bg-slate-50'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="payment" checked={paymentMethod === 'ach'} onChange={() => setPaymentMethod('ach')} className="text-blue-900 focus:ring-blue-900 w-4 h-4" />
                      <span className="font-bold text-slate-800 text-sm">Transferencia Bancaria (ACH)</span>
                    </div>
                  </div>
                  {paymentMethod === 'ach' && (
                    <div className="mt-4 pt-4 border-t border-slate-200 text-sm text-slate-600">
                      <p className="mb-2 font-bold">Datos bancarios:</p>
                      <ul className="list-disc list-inside space-y-1 mb-2">
                        <li>Banco General</li>
                        <li>Cuenta Corriente: 03-XX-XXXX-X</li>
                        <li>A nombre de: GRUPO VEV, S.A.</li>
                      </ul>
                      <p className="text-xs">Tu pedido no será procesado hasta que los fondos se hayan recibido en nuestra cuenta.</p>
                    </div>
                  )}
                </label>

                {/* BCT Bank */}
                <label className={`block p-4 cursor-pointer transition-colors ${paymentMethod === 'bct' ? 'bg-sky-50' : 'hover:bg-slate-50'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="payment" checked={paymentMethod === 'bct'} onChange={() => setPaymentMethod('bct')} className="text-blue-900 focus:ring-blue-900 w-4 h-4" />
                      <span className="font-bold text-slate-800 text-sm">BCT Bank (Link de Pago)</span>
                    </div>
                  </div>
                  {paymentMethod === 'bct' && (
                    <div className="mt-4 pt-4 border-t border-slate-200 text-sm text-slate-600 text-center">
                      Serás redirigido a la pasarela segura de BCT Bank para procesar tu pago.
                    </div>
                  )}
                </label>

              </div>
            </div>

            {/* Submit */}
            <button className="w-full bg-blue-900 text-white font-black text-lg py-4 rounded-md hover:bg-blue-800 transition-colors shadow-lg">
              Finalizar Pedido
            </button>
            <p className="text-center text-[10px] text-slate-400 mt-4">
              Al finalizar, aceptas nuestros términos y políticas de privacidad.
            </p>

          </div>

          {/* Right Column - Order Summary */}
          <div className="flex-1 lg:max-w-md lg:border-l lg:border-slate-200 lg:pl-12 pt-8 lg:pt-0">
            <div className="sticky top-8">
              
              {/* Product List */}
              <div className="space-y-4 mb-6">
                {items.length === 0 ? (
                  <p className="text-sm text-slate-500">Tu carrito está vacío.</p>
                ) : (
                  items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 relative">
                      <div className="relative">
                        <div className="w-16 h-16 bg-white border border-slate-200 rounded-lg flex items-center justify-center p-2">
                          <Monitor className="w-full h-full text-slate-300" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-slate-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold shadow-sm">{item.quantity}</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-slate-800 leading-snug">{item.name}</h4>
                        <p className="text-[10px] text-slate-500 mt-0.5">Precio Ud. B/. {item.price.toFixed(2)}</p>
                      </div>
                      <div className="text-sm font-black text-slate-800">
                        B/. {(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Discount Code */}
              <div className="flex gap-2 py-6 border-t border-slate-200 border-b mb-6">
                <input type="text" placeholder="Código de descuento" className="flex-1 border border-slate-300 rounded p-3 text-sm focus:ring-blue-900 focus:border-blue-900 bg-white" />
                <button className="bg-slate-200 text-slate-500 px-6 py-3 rounded text-sm font-bold hover:bg-slate-300 transition-colors">
                  Aplicar
                </button>
              </div>

              {/* Totals */}
              <div className="space-y-3 text-sm text-slate-600 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-slate-800">B/. {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1">Envíos <HelpCircle className="w-3 h-3 text-slate-400"/></span>
                  <span className="text-xs text-slate-500">
                    {deliveryMethod === "envio" ? "Calculado en el siguiente paso" : "GRATIS (Retiro)"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>ITBMS (7%)</span>
                  <span className="font-bold text-slate-800">B/. {tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-end pt-4 border-t border-slate-200">
                <span className="text-lg font-black text-slate-800">Total</span>
                <div className="text-right">
                  <span className="text-xs text-slate-400 mr-2 uppercase">USD</span>
                  <span className="text-2xl font-black text-blue-900">B/. {total.toFixed(2)}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Temporary internal component icon to avoid import errors
function TruckIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="15" height="10" x="3" y="12" rx="1"/>
      <path d="M3 12h18"/>
      <path d="M18 12V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4"/>
      <circle cx="7.5" cy="18.5" r="1.5"/>
      <circle cx="16.5" cy="18.5" r="1.5"/>
    </svg>
  )
}
