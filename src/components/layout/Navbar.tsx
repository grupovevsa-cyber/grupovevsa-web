import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-2">
          {/* Logo SVG Vectorizado (Placeholder estético basado en el PDF) */}
          <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* V abstracta izquierda (Gris) */}
            <path d="M10 5 L20 30 L30 5" stroke="#475569" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M25 5 L35 30 L45 5" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Texto GRUPO VEV */}
            <text x="50" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="900" fill="#0F172A">GRUPO</text>
            <text x="125" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="900" fill="#2563EB">VEV</text>
            <text x="52" y="38" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="600" fill="#475569" letterSpacing="1.5">DESARROLLO E INNOVACIÓN</text>
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
