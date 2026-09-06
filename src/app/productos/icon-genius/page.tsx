import Link from "next/link";
import { Sparkles, Workflow, Bot } from "lucide-react";

export default function IconGenius() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <Sparkles className="w-16 h-16 mx-auto text-purple-400 mb-6" />
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            ICON <span className="text-purple-400">GENIUS</span> & BUILDER
          </h1>
          <p className="text-lg md:text-2xl text-purple-100 mb-10 max-w-4xl mx-auto leading-relaxed">
            Plataforma inteligente de desarrollo asistido con Inteligencia Artificial.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">El futuro de la automatización empresarial</h2>
              <p className="text-slate-600 mb-8 text-lg">
                Nuestra plataforma constructora de flujos permite automatizar procesos analíticos y optimizar la productividad operativa a niveles sin precedentes.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Bot className="w-6 h-6 text-purple-500 shrink-0" />
                  <span className="text-slate-700 font-medium">Asistencia impulsada por IA</span>
                </li>
                <li className="flex gap-3">
                  <Workflow className="w-6 h-6 text-purple-500 shrink-0" />
                  <span className="text-slate-700 font-medium">Constructor de flujos visuales (Builder)</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-100 p-8 rounded-2xl shadow-inner border border-slate-200 text-center flex flex-col items-center justify-center aspect-square relative overflow-hidden">
               <div className="absolute inset-0 bg-purple-900/5 mix-blend-multiply"></div>
               <p className="text-slate-500 font-medium z-10">[ Espacio para Interfaz de ICON GENIUS ]</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
