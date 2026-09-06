import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-2">
          {/* Usamos un texto temporal hasta que el usuario suba el logo real */}
          <span className="text-2xl font-bold tracking-tight text-blue-900">
            GRUPO<span className="text-blue-600">VEV</span>
          </span>
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
