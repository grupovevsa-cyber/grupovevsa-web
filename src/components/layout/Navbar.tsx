import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
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
