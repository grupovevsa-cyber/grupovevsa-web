import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white">
      <div className="container mx-auto flex h-24 md:h-28 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-2">
          {/* Logo Original Restaurado y Optimizado */}
          <Image 
            src="/logo.jpg" 
            alt="Grupo VEV Logo" 
            width={500} 
            height={160} 
            className="h-24 md:h-28 w-auto object-contain mix-blend-multiply contrast-125"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-blue-600">Inicio</Link>
          <Link href="/#servicios" className="transition-colors hover:text-blue-600">Servicios</Link>
          <Link href="/#productos" className="transition-colors hover:text-blue-600">Nuestras Soluciones</Link>
          <Link href="/distribuidores" className="transition-colors hover:text-blue-600">Distribuidores</Link>
          <Link href="/foro" className="transition-colors hover:text-blue-600">Foro</Link>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Espacio reservado para futuros botones como Portal Clientes o Tienda */}
        </div>
      </div>
    </header>
  );
}
