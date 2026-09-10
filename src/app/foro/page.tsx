import { MessageSquare, Eye, Clock, TrendingUp, Search, User, ChevronRight } from "lucide-react";
import Link from "next/link";

const FORUM_TOPICS = [
  {
    id: 1,
    title: "Grok de xAI lanza nueva actualizacin hoy: Qu hay de nuevo?",
    excerpt: "Hoy se revelaron las nuevas capacidades de Grok. Al parecer, el sarcasmo y el humor en tiempo real con datos de X han mejorado exponencialmente, adems de grandes mejoras en razonamiento lgico...",
    category: "Inteligencia Artificial",
    author: "AdminVEV",
    replies: 42,
    views: 1205,
    timeAgo: "Hace 2 horas",
    tags: ["Grok", "xAI", "Noticias"]
  },
  {
    id: 2,
    title: "Claude 3.5 Sonnet vs ChatGPT-4o: Comparativa en programacin y anlisis de datos",
    excerpt: "Analizamos a fondo los dos grandes gigantes actuales. Claude (Anthropic) parece tomar la delantera en generacin de cdigo complejo, pero ChatGPT sigue dominando en versatilidad y voz...",
    category: "Debate IA",
    author: "TechDev",
    replies: 89,
    views: 3400,
    timeAgo: "Hace 5 horas",
    tags: ["Claude", "ChatGPT", "Programacin"]
  },
  {
    id: 3,
    title: "Mercado de Criptomonedas: Bitcoin rompe resistencias histricas esta maana",
    excerpt: "El ecosistema cripto amaneci en verde hoy. Las ballenas institucionales estn moviendo fuertes volmenes hacia Bitcoin y Ethereum, arrastrando a las altcoins a un nuevo ciclo alcista...",
    category: "Criptomonedas",
    author: "CryptoTrader",
    replies: 156,
    views: 8900,
    timeAgo: "Hace 8 horas",
    tags: ["Bitcoin", "Criptomonedas", "Mercado"]
  },
  {
    id: 4,
    title: "Google Gemini expande su integracin en Workspace para empresas",
    excerpt: "Las nuevas herramientas de Google Gemini estn cambiando cmo se redactan documentos en Docs y correos en Gmail. La IA ahora puede analizar hasta 2 millones de tokens de contexto...",
    category: "Ecosistema Google",
    author: "AdminVEV",
    replies: 23,
    views: 512,
    timeAgo: "Hace 12 horas",
    tags: ["Gemini", "Google Workspace"]
  },
  {
    id: 5,
    title: "Es seguro invertir en Criptomonedas en 2026? Gua para principiantes",
    excerpt: "Con la nueva regulacin MiCA en Europa y la aprobacin de ms ETFs en Estados Unidos, el panorama para invertir en criptomonedas ha cambiado radicalmente para el usuario comn...",
    category: "Criptomonedas",
    author: "FinanzasVEV",
    replies: 112,
    views: 4500,
    timeAgo: "Ayer",
    tags: ["Inversiones", "Criptomonedas", "Educacin"]
  }
];

export default function ForoPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Cabecera del Foro */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Comunidad y Noticias</h1>
            <p className="text-slate-600">Entrate de lo ltimo en Inteligencia Artificial, Criptomonedas y Tecnologa.</p>
          </div>
          <div className="relative w-full md:w-72">
            <input 
              type="text" 
              placeholder="Buscar discusiones..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Columna Principal - Lista de Tpicos */}
          <div className="lg:col-span-3 space-y-4">
            {FORUM_TOPICS.map((topic) => (
              <div key={topic.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        {topic.category}
                      </span>
                      <span className="text-slate-400 text-sm flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {topic.timeAgo}
                      </span>
                    </div>
                    <Link href={`/foro/${topic.id}`} className="hover:text-blue-600">
                      <h2 className="text-xl font-bold text-slate-900 mb-2">{topic.title}</h2>
                    </Link>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {topic.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-slate-500 font-medium">
                        <User className="w-4 h-4" /> {topic.author}
                      </div>
                      <div className="flex items-center gap-2">
                        {topic.tags.map(tag => (
                          <span key={tag} className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">#{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Estadsticas del Tpico */}
                  <div className="hidden sm:flex flex-col items-end gap-2 min-w-[100px] border-l border-slate-100 pl-4">
                    <div className="flex items-center gap-1 text-slate-600">
                      <MessageSquare className="w-4 h-4" />
                      <span className="font-semibold">{topic.replies}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                      <Eye className="w-4 h-4" />
                      <span>{topic.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <button className="w-full py-3 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 font-medium transition-colors">
              Cargar ms noticias
            </button>
          </div>

          {/* Columna Lateral - Widgets */}
          <div className="space-y-6">
            
            {/* Widget: Botn Crear Tpico */}
            <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
              + Nuevo Tpico
            </button>

            {/* Widget: Tendencias */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Tendencias
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between group cursor-pointer">
                  <span className="text-slate-600 group-hover:text-blue-600 text-sm font-medium">#GrokAI</span>
                  <span className="text-slate-400 text-xs">2.4k posts</span>
                </li>
                <li className="flex items-center justify-between group cursor-pointer">
                  <span className="text-slate-600 group-hover:text-blue-600 text-sm font-medium">#Bitcoin</span>
                  <span className="text-slate-400 text-xs">1.8k posts</span>
                </li>
                <li className="flex items-center justify-between group cursor-pointer">
                  <span className="text-slate-600 group-hover:text-blue-600 text-sm font-medium">#ChatGPT4o</span>
                  <span className="text-slate-400 text-xs">950 posts</span>
                </li>
                <li className="flex items-center justify-between group cursor-pointer">
                  <span className="text-slate-600 group-hover:text-blue-600 text-sm font-medium">#Claude3</span>
                  <span className="text-slate-400 text-xs">820 posts</span>
                </li>
              </ul>
            </div>

            {/* Widget: Categoras Populares */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Categoras</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg text-slate-600 hover:text-blue-600 transition-colors">
                    <span className="text-sm font-medium">Inteligencia Artificial</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg text-slate-600 hover:text-blue-600 transition-colors">
                    <span className="text-sm font-medium">Criptomonedas</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg text-slate-600 hover:text-blue-600 transition-colors">
                    <span className="text-sm font-medium">Soporte Tcnico</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg text-slate-600 hover:text-blue-600 transition-colors">
                    <span className="text-sm font-medium">Anuncios VEV</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
