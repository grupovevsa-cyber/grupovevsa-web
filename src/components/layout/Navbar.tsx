import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-2">
          {/* Logo Oficial Vectorizado (SVG de Alta Fidelidad) */}
          <svg viewBox="0 0 650 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-20 md:h-24 w-auto drop-shadow-sm transition-transform hover:scale-105 duration-300">
            <defs>
              <linearGradient id="silver1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
              <linearGradient id="blue1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>
              <linearGradient id="teal1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="silver2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
            </defs>

            <g transform="translate(10, 20)">
              {/* Cintas (Ribbons) abstractas de fondo */}
              {/* 1. Caída izquierda plata */}
              <path d="M 40 20 Q 80 20 150 100 L 100 100 Q 50 40 10 30 Z" fill="url(#silver1)" opacity="0.9" />
              {/* 2. Bucle inferior azul oscuro */}
              <path d="M 150 100 Q 190 160 240 50 L 200 50 Q 160 110 100 100 Z" fill="url(#blue1)" opacity="0.95" />
              {/* 3. Pico central celeste */}
              <path d="M 240 50 Q 280 -10 340 20 L 290 40 Q 260 10 200 50 Z" fill="url(#teal1)" opacity="0.95" />
              {/* 4. Caída derecha plata */}
              <path d="M 340 20 Q 370 40 410 100 L 360 100 Q 330 60 290 40 Z" fill="url(#silver2)" opacity="0.9" />
              {/* 5. Ascenso final celeste */}
              <path d="M 410 100 Q 440 150 490 60 L 450 60 Q 420 110 360 100 Z" fill="url(#teal1)" opacity="0.95" />

              {/* Texto Principal Extendida (Simulando Eurostile/Microgramma) */}
              <text x="0" y="95" fontFamily="Arial Black, Impact, sans-serif" fontSize="80" fontWeight="900" fill="#0f172a" transform="scale(1.15, 1)" letterSpacing="-2">GRUPO</text>
              <text x="325" y="95" fontFamily="Arial Black, Impact, sans-serif" fontSize="80" fontWeight="900" fill="#1e3a8a" transform="scale(1.15, 1)" letterSpacing="-2">VEV</text>

              {/* Subtítulo */}
              <text x="175" y="130" fontFamily="Arial, Helvetica, sans-serif" fontSize="18" fontWeight="700" fill="#475569" letterSpacing="3.5">DESARROLLO E INNOVACIÓN</text>
            </g>
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
