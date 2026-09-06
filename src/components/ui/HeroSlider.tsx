"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";

const slides = [
  {
    id: 0,
    title: "Desarrollo e Innovación Integral",
    subtitle: "Soluciones integrales de alto valor en desarrollo tecnológico, infraestructura crítica y consultoría estratégica que optimizan la productividad de nuestros clientes.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    primaryAction: { text: "Nuestros Servicios", link: "#servicios" },
    secondaryAction: { text: "Ver Software", link: "#productos" }
  },
  {
    id: 1,
    title: "Desarrollos Propios",
    subtitle: "Ecosistema de software a la medida: ICONPOS, WEB INVOICE, SUPPORT y GENIUS.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
    primaryAction: { text: "Explorar Ecosistema", link: "#productos" },
    secondaryAction: null
  },
  {
    id: 2,
    title: "Sistemas Especiales",
    subtitle: "Infraestructura corporativa, redes, centros de datos, calidad de energía y videovigilancia de alta seguridad.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop",
    primaryAction: { text: "Saber Más", link: "#servicios" },
    secondaryAction: null
  },
  {
    id: 3,
    title: "Venta de Equipos",
    subtitle: "Hardware corporativo de primer nivel: TPV táctiles, servidores, impresoras fiscales DGI y periféricos.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
    primaryAction: { text: "Ir a la Tienda", link: "/tienda" },
    secondaryAction: null
  },
  {
    id: 4,
    title: "Herramientas de Inteligencia Artificial",
    subtitle: "Automatización inteligente, digitalización de procesos operativos y análisis predictivo en tiempo real.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
    primaryAction: { text: "Conoce ICON GENIUS", link: "/productos/icon-genius" },
    secondaryAction: null
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // Cambia cada 6 segundos
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-[600px] md:h-[700px] w-full overflow-hidden bg-slate-900 group">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[10000ms] ease-linear transform scale-105"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              ...(index === currentSlide && { transform: 'scale(1)' }) // Efecto Ken Burns ligero
            }}
          ></div>
          
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-3xl transform transition-all duration-700 translate-y-0 opacity-100" style={{ transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)', opacity: index === currentSlide ? 1 : 0 }}>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight drop-shadow-xl">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl text-slate-200 mb-8 leading-relaxed drop-shadow-md">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  {slide.primaryAction && (
                    <Link href={slide.primaryAction.link} className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 font-medium text-white shadow hover:bg-blue-500 transition-colors">
                      {slide.primaryAction.text}
                    </Link>
                  )}
                  {slide.secondaryAction && (
                    <Link href={slide.secondaryAction.link} className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 bg-black/20 backdrop-blur-sm px-8 font-medium text-white transition-colors hover:bg-white/20">
                      {slide.secondaryAction.text}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Manual Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-blue-500 w-8" : "bg-white/50 hover:bg-white"}`}
            aria-label={`Ir a la diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
