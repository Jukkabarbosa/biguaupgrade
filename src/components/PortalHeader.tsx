import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Search, Facebook, Instagram, Youtube, MessageCircle, X, Megaphone, Send } from "lucide-react";
import { Logo } from "./Logo";

const CATEGORIES = [
  { name: "Início", path: "/portal" },
  { name: "Lages", path: "/portal" },
  { name: "Polícia", path: "/portal" },
  { name: "Política", path: "/portal" },
  { name: "Estaduais", path: "/portal" },
  { name: "Brasil", path: "/portal" },
  { name: "Esportes", path: "/portal" },
  { name: "Vídeos", path: "/portal" },
  { name: "Você Repórter", path: "/portal" },
];

export function PortalHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      {/* Top bar */}
      <div className="bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <Logo size="md" variant="light" />
          <div className="hidden md:flex items-center gap-2 text-xs">
            <span className="opacity-80">Terça, 26 de Maio · Lages 18°C</span>
          </div>
          <div className="flex items-center gap-1.5">
            <a className="hidden sm:grid place-items-center h-8 w-8 rounded-md hover:bg-white/10" href="#"><Facebook className="h-4 w-4" /></a>
            <a className="hidden sm:grid place-items-center h-8 w-8 rounded-md hover:bg-white/10" href="#"><Instagram className="h-4 w-4" /></a>
            <a className="hidden sm:grid place-items-center h-8 w-8 rounded-md hover:bg-white/10" href="#"><Youtube className="h-4 w-4" /></a>
            <a className="grid place-items-center h-8 w-8 rounded-md bg-[#25D366] hover:opacity-90" href="#"><MessageCircle className="h-4 w-4" /></a>
            <a className="hidden md:inline-flex items-center gap-1.5 ml-2 h-8 px-3 rounded-md bg-accent-yellow text-ink font-bold text-xs hover:brightness-110" href="#">
              <Megaphone className="h-3.5 w-3.5" /> Anuncie aqui
            </a>
            <a className="hidden lg:inline-flex items-center gap-1.5 h-8 px-3 rounded-md border border-white/30 text-xs font-semibold hover:bg-white/10" href="#">
              <Send className="h-3.5 w-3.5" /> Você Repórter
            </a>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-between gap-4">
        <button className="md:hidden p-2 -ml-2" onClick={() => setOpen(true)}>
          <Menu className="h-5 w-5" />
        </button>
        <nav className="hidden md:flex items-center gap-1 overflow-x-auto">
          {CATEGORIES.map((c) => (
            <Link key={c.name} to={c.path} className="px-3 py-2 text-sm font-semibold text-ink-soft hover:text-brand whitespace-nowrap relative group">
              {c.name}
              <span className="absolute left-3 right-3 bottom-1 h-0.5 bg-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 h-9 px-3 rounded-full bg-muted text-sm w-56">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input placeholder="Buscar notícias..." className="bg-transparent outline-none text-sm flex-1 placeholder:text-muted-foreground" />
          </div>
          <button className="sm:hidden p-2"><Search className="h-5 w-5" /></button>
        </div>
      </div>

      {/* Breaking ticker */}
      <div className="bg-urgent text-white text-xs font-bold overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 h-8 flex items-center gap-3">
          <span className="pulse-dot text-accent-yellow bg-ink/30 px-2 py-0.5 rounded-sm tracking-wider shrink-0">PLANTÃO BIGUÁ</span>
          <div className="flex-1 overflow-hidden">
            <div className="ticker">
              <span className="mx-6">PF cumpre mandados em Lages contra esquema de R$ 86 milhões</span>·
              <span className="mx-6">Festa do Pinhão bate recorde de público no segundo final de semana</span>·
              <span className="mx-6">Câmara avança no debate sobre fim da escala 6x1</span>·
              <span className="mx-6">Internacional vence Avaí por 2 a 1 e respira no Brasileirão</span>·
              <span className="mx-6">PF cumpre mandados em Lages contra esquema de R$ 86 milhões</span>·
              <span className="mx-6">Festa do Pinhão bate recorde de público no segundo final de semana</span>·
              <span className="mx-6">Câmara avança no debate sobre fim da escala 6x1</span>·
              <span className="mx-6">Internacional vence Avaí por 2 a 1 e respira no Brasileirão</span>·
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <aside className="absolute top-0 left-0 bottom-0 w-72 bg-background shadow-elevated p-5 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <Logo size="md" variant="dark" />
              <button onClick={() => setOpen(false)}><X className="h-5 w-5" /></button>
            </div>
            <nav className="flex flex-col gap-1">
              {CATEGORIES.map((c) => (
                <Link key={c.name} to={c.path} onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-md text-sm font-semibold hover:bg-muted">
                  {c.name}
                </Link>
              ))}
            </nav>
            <a href="#" className="mt-6 inline-flex items-center justify-center gap-2 h-11 rounded-md bg-accent-yellow text-ink font-bold">
              <Megaphone className="h-4 w-4" /> Anuncie aqui
            </a>
          </aside>
        </div>
      )}
    </header>
  );
}
