import { createFileRoute, Link } from "@tanstack/react-router";
import { news, categoryColors } from "@/lib/mock-data";
import { Menu, Search, Bell, Home, List, Video, Send, Compass, MessageCircle, Share2, Bookmark, Heart, Clock, ChevronLeft, Zap } from "lucide-react";

export const Route = createFileRoute("/mobile")({
  head: () => ({ meta: [{ title: "Biguá Tá On — Mobile" }] }),
  component: Mobile,
});

const STORIES = [
  { label: "Urgente", color: "var(--urgent)" },
  { label: "Lages", color: "var(--brand)" },
  { label: "Polícia", color: "oklch(0.55 0.22 25)" },
  { label: "Política", color: "oklch(0.45 0.18 220)" },
  { label: "Esportes", color: "oklch(0.5 0.22 180)" },
  { label: "Vídeos", color: "oklch(0.5 0.2 300)" },
  { label: "Brasil", color: "oklch(0.6 0.18 80)" },
];

function Mobile() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Phone frame for desktop preview */}
      <div className="max-w-md mx-auto bg-background min-h-screen relative shadow-elevated">
        <Link to="/" className="hidden md:flex absolute -left-32 top-6 items-center gap-1 text-sm text-muted-foreground hover:text-brand">
          <ChevronLeft className="h-4 w-4" /> Voltar
        </Link>

        {/* Header */}
        <header className="sticky top-0 z-40 bg-gradient-hero text-white">
          <div className="px-4 h-14 flex items-center justify-between">
            <button><Menu className="h-5 w-5" /></button>
            <div className="flex items-center gap-1.5">
              <div className="h-6 w-6 rounded bg-accent-yellow grid place-items-center"><Zap className="h-3.5 w-3.5 text-ink" fill="currentColor" strokeWidth={0} /></div>
              <span className="display font-black italic text-lg">BIGUÁ</span>
              <span className="text-[9px] font-black bg-accent-yellow text-ink px-1 rounded-sm">TÁ ON</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="h-9 w-9 grid place-items-center"><Search className="h-4 w-4" /></button>
              <a href="#" className="h-9 w-9 grid place-items-center rounded-full bg-[#25D366]"><MessageCircle className="h-4 w-4" /></a>
            </div>
          </div>
          {/* Stories */}
          <div className="px-4 pb-3 flex gap-3 overflow-x-auto scrollbar-hide">
            {STORIES.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1 shrink-0">
                <div className="h-14 w-14 rounded-full p-0.5" style={{ background: `linear-gradient(135deg, ${s.color}, var(--accent-yellow))` }}>
                  <div className="h-full w-full rounded-full bg-background grid place-items-center text-[10px] font-bold" style={{ color: s.color }}>
                    {s.label.slice(0, 2).toUpperCase()}
                  </div>
                </div>
                <span className="text-[10px] font-semibold">{s.label}</span>
              </div>
            ))}
          </div>
        </header>

        {/* Plantão */}
        <div className="bg-urgent text-white text-xs font-bold px-4 py-1.5 flex items-center gap-2 overflow-hidden">
          <span className="pulse-dot text-accent-yellow shrink-0">PLANTÃO</span>
          <span className="truncate">PF cumpre mandados em Lages contra esquema de R$ 86 milhões</span>
        </div>

        {/* Main hero card */}
        <article className="m-4 rounded-2xl overflow-hidden shadow-elevated bg-card">
          <div className="relative">
            <img src={news[0].image} alt="" className="w-full h-56 object-cover" width={800} height={500} />
            <div className="absolute top-3 left-3 flex gap-1.5">
              <span className="text-[10px] font-black px-2 py-1 rounded bg-urgent text-white tracking-wider">⚡ URGENTE</span>
              <span className="text-[10px] font-black px-2 py-1 rounded text-white tracking-wider" style={{ background: categoryColors[news[0].category] }}>{news[0].category.toUpperCase()}</span>
            </div>
          </div>
          <div className="p-4">
            <h2 className="display font-black text-lg leading-tight">{news[0].title}</h2>
            <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {news[0].time}</span>
              <div className="flex gap-2">
                <button className="h-8 w-8 grid place-items-center rounded-full bg-muted"><Heart className="h-3.5 w-3.5" /></button>
                <button className="h-8 w-8 grid place-items-center rounded-full bg-muted"><Bookmark className="h-3.5 w-3.5" /></button>
                <button className="h-8 w-8 grid place-items-center rounded-full bg-[#25D366] text-white"><Share2 className="h-3.5 w-3.5" /></button>
              </div>
            </div>
          </div>
        </article>

        {/* Feed */}
        <div className="px-4 space-y-3 pb-28">
          <h3 className="display font-black text-sm flex items-center gap-2 mt-4"><span className="w-1 h-5 bg-brand rounded-sm" /> ÚLTIMAS DO BIGUÁ</h3>
          {news.slice(1, 6).map((n) => (
            <article key={n.id} className="bg-card rounded-xl overflow-hidden shadow-card border border-border flex gap-3 cursor-pointer">
              <img src={n.image} alt="" className="w-24 h-24 object-cover shrink-0" loading="lazy" width={200} height={200} />
              <div className="flex-1 py-2 pr-3 min-w-0">
                <span className="text-[9px] font-black px-1.5 py-0.5 rounded text-white tracking-wider" style={{ background: categoryColors[n.category] }}>{n.category.toUpperCase()}</span>
                <h4 className="font-bold text-sm leading-tight mt-1.5 line-clamp-3">{n.title}</h4>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-[10px] text-muted-foreground">{n.time}</span>
                  <button className="h-6 w-6 grid place-items-center rounded-full bg-[#25D366]/10 text-[#25D366]"><Share2 className="h-3 w-3" /></button>
                </div>
              </div>
            </article>
          ))}

          {/* Native ad */}
          <div className="rounded-xl border border-dashed border-border bg-gradient-to-br from-accent-yellow/20 to-muted p-4">
            <span className="text-[9px] font-bold tracking-widest text-muted-foreground">PATROCINADO</span>
            <p className="display font-black text-base mt-1">Anuncie sua empresa no Biguá Tá On</p>
            <p className="text-xs text-muted-foreground mt-1">Mais de 250 mil leitores únicos por mês na Serra Catarinense.</p>
            <button className="mt-2 h-8 px-3 rounded-md bg-brand text-white text-xs font-bold">Quero anunciar</button>
          </div>
        </div>

        {/* Floating Você Repórter */}
        <a href="#" className="fixed bottom-24 right-4 md:right-auto md:left-1/2 md:translate-x-32 z-40 h-14 w-14 rounded-full bg-accent-yellow text-ink shadow-elevated grid place-items-center">
          <Send className="h-5 w-5" />
        </a>

        {/* Bottom nav */}
        <nav className="fixed bottom-0 left-0 right-0 md:left-1/2 md:-translate-x-1/2 md:max-w-md z-40 bg-background border-t border-border h-16 grid grid-cols-5">
          {[
            { icon: Home, label: "Início", active: true },
            { icon: List, label: "Últimas" },
            { icon: Video, label: "Vídeos" },
            { icon: Send, label: "Enviar" },
            { icon: Compass, label: "Buscar" },
          ].map((it) => (
            <button key={it.label} className={`flex flex-col items-center justify-center gap-0.5 ${it.active ? "text-brand" : "text-muted-foreground"}`}>
              <it.icon className="h-5 w-5" />
              <span className="text-[10px] font-semibold">{it.label}</span>
              {it.active && <span className="absolute top-0 w-8 h-0.5 bg-brand rounded-b-sm" />}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
