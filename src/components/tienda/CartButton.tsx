"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { useEffect, useState } from "react";

export default function CartButton() {
  const items = useCartStore((state) => state.items);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link href="/tienda/cart" className="flex flex-col items-center justify-center text-slate-500 hover:text-blue-900 transition-colors relative">
      <ShoppingCart className="w-6 h-6 mb-1" />
      <span className="text-[10px] font-bold uppercase tracking-wider">Carrito</span>
      {mounted && itemCount > 0 && (
        <span className="absolute -top-1 -right-2 bg-sky-500 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
