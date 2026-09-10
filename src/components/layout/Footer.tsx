import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold tracking-tight text-white">
              GRUPO<span className="text-blue-500">VEV</span>
            </span>
            <p className="mt-4 text-sm">
              Desarrollo e Innovación Integral. <br/>
              RUC: 155773714-2-2025 DV04
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Productos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/productos/iconpos" className="hover:text-white transition-colors">ICONPOS WEBCONECT</Link></li>
              <li><Link href="/productos/iconpos-web-invoice" className="hover:text-white transition-colors">ICONPOS WEB INVOICE</Link></li>
              <li><Link href="/productos/icon-support" className="hover:text-white transition-colors">ICON SUPPORT</Link></li>
              <li><Link href="/productos/icon-genius" className="hover:text-white transition-colors">ICON GENIUS</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/nosotros" className="hover:text-white transition-colors">Quiénes Somos</Link></li>
              <li><Link href="/tienda" className="hover:text-white transition-colors">Tienda (Equipos)</Link></li>
              <li><Link href="/foro" className="hover:text-white transition-colors">Foro de Soporte</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://wa.me/50760015427" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  WhatsApp: +507 6001-5427
                </a>
              </li>
              <li>
                <a href="mailto:info@grupovev.com" className="hover:text-blue-400 transition-colors">
                  Email: info@grupovev.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/grupovevsa" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                  Instagram: @grupovevsa
                </a>
              </li>
              <li className="mt-4 text-xs text-slate-400">
                San Francisco, Edif. Gran Plaza, Piso 2, Ofic. 2B. <br/>
                Ciudad de Panamá, Panamá.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} GRUPO VEV, S.A. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
