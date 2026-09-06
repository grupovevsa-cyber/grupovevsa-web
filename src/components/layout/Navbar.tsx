import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-2">
          {/* Logo Oficial Vectorizado (SVG) para máxima nitidez y sin fondo blanco */}
          <svg viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-16 md:h-20 w-auto drop-shadow-md">
            <defs>
              <linearGradient id="gradLeft" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
              <linearGradient id="gradRight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>

            {/* Elemento 3D Izquierdo (V Gris) */}
            <path d="M 40 25 L 80 25 L 140 100 L 100 100 Z" fill="url(#gradLeft)" opacity="0.95" />
            <path d="M 40 25 L 20 50 L 55 25 Z" fill="#94a3b8" />
            
            {/* Elemento 3D Derecho (V Celeste) */}
            <path d="M 125 110 L 195 25 L 235 25 L 165 110 Z" fill="url(#gradRight)" opacity="0.95" />
            <path d="M 235 25 L 260 50 L 210 25 Z" fill="#0891b2" />

            {/* Texto Principal */}
            <text x="0" y="80" fontFamily="Arial, sans-serif" fontSize="56" fontWeight="900" fill="#0f172a" letterSpacing="-2.5">GRUPO</text>
            <text x="210" y="80" fontFamily="Arial, sans-serif" fontSize="56" fontWeight="900" fill="#1e3a8a" letterSpacing="-2.5">VEV</text>

            {/* Subtítulo */}
            <text x="90" y="112" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="#64748b" letterSpacing="4.5">DESARROLLO E INNOVACIÓN</text>
          </svg>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-blue-600">Inicio</Link>
          <Link href="#servicios" className="transition-colors hover:text-blue-600">Servicios</Link>
          <Link href="#productos" className="transition-colors hover:text-blue-600">Software Propio</Link>
          <Link href="/foro" className="transition-colors hover:text-blue-600">Foro de Soporte</Link>
          <Link href="/tienda" className="transition-colors hover:text-blue-600">Tienda</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link 
            href="/admin" 
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-950"
          >
            Portal Clientes
          </Link>
        </div>
      </div>
    </header>
  );
}
