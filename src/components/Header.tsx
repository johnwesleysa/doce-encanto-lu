
import React from "react";

const menuItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Doces", href: "#produtos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Galeria", href: "#galeria" },
];

export const Header = () => (
  <header className="sticky top-0 w-full z-40 bg-white/80 backdrop-blur border-b border-[#f8d5c3] shadow-sm">
    <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
      <span className="text-2xl font-playfair text-[#c49a6c] font-bold tracking-tight">Delícias da Lu</span>
      <nav className="hidden sm:flex gap-4">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-[#c49a6c] font-medium hover:text-[#ab805a] transition-colors px-3 py-2 rounded"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="sm:inline-flex bg-[#c49a6c] hover:bg-[#ab805a] text-white px-4 py-2 rounded-full text-sm font-medium shadow"
      >
        Fazer Encomenda
      </a>
    </div>
    {/* Menu mobile simples - aparece apenas em telas pequenas */}
    <nav className="flex sm:hidden gap-2 justify-center py-2">
      {menuItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-[#c49a6c] font-medium hover:text-[#ab805a] transition-colors px-2"
        >
          {item.label}
        </a>
      ))}
    </nav>
  </header>
