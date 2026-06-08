import { createFileRoute, Link } from "@tanstack/react-router";
import { news } from "@/lib/mock-data";
import {
  LayoutDashboard, Newspaper, Megaphone, Users, Video, Tag, MessageSquare,
  Settings, Search, Bell, Plus, TrendingUp, Eye, FileText, Clock,
  ChevronLeft, Zap, ExternalLink, MoreVertical,
} from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Painel · Biguá Tá On" }] }),
  component: Admin,
});

const SIDEBAR = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Newspaper, label: "Notícias", badge: "47" },
  { icon: Tag, label: "Categorias" },
  { icon: Megaphone, label: "Anúncios", badge: "12" },
  { icon: MessageSquare, label: "Você Repórter", badge: "8" },
  { icon: Video, label: "Vídeos" },
  { icon: Users, label: "Usuários" },
  { icon: Settings, label: "Comercial" },
];

function Admin() {
  return (
    <div className="min-h-screen bg-surface flex">
      {/* Sidebar */}
      <aside className="w-60 bg-brand-deep text-white flex flex-col shrink-0 sticky top-0 h-screen">
        <div className="h-16 px-5 flex items-center gap-2 border-b border-white/10">
          <div className="h-7 w-7 rounded bg-accent-yellow grid place-items-center"><Zap className="h-4 w-4 text-ink" fill="currentColor" strokeWidth={0} /></div>
          <div>
            <div className="display font-black italic text-base leading-none">BIGUÁ</div>
            <div className="text-[9px] font-bold text-accent-yellow tracking-widest mt-0.5">PAINEL ADMIN</div>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-0.5">
          {SIDEBAR.map((it) => (
            <button key={it.label} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${it.active ? "bg-accent-yellow text-ink" : "text-white/80 hover:bg-white/10"}`}>
              <it.icon className="h-4 w-4" />
              <span className="flex-1 text-left">{it.label}</span>
              {it.badge && <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${it.active ? "bg-ink text-accent-yellow" : "bg-urgent text-white"}`}>{it.badge}</span>}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-white/10">
          <Link to="/portal" className="flex items-center gap-2 text-xs text-white/70 hover:text-accent-yellow">
            <ExternalLink className="h-3.5 w-3.5" /> Ver site público
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0">
        {/* Topbar */}
        <header className="sticky top-0 z-30 h-16 bg-card border-b border-border px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-brand">
            <ChevronLeft className="h-3.5 w-3.5" /> Apresentação
          </Link>
          <div className="hidden md:flex items-center gap-2 h-10 w-96 px-3 rounded-lg bg-muted">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input placeholder="Buscar matérias, anúncios, usuários..." className="bg-transparent outline-none text-sm flex-1 placeholder:text-muted-foreground" />
            <kbd className="text-[10px] bg-background px-1.5 py-0.5 rounded border border-border">⌘K</kbd>
          </div>
          <div className="flex items-center gap-2">
            <button className="h-9 px-3 rounded-md bg-accent-yellow text-ink font-bold text-xs flex items-center gap-1.5">
              <Plus className="h-3.5 w-3.5" /> Notícia rápida
            </button>
            <button className="h-9 px-3 rounded-md bg-brand text-white font-bold text-xs flex items-center gap-1.5">
              <Plus className="h-3.5 w-3.5" /> Anúncio
            </button>
            <button className="h-9 w-9 grid place-items-center rounded-md hover:bg-muted relative">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-urgent rounded-full" />
            </button>
            <div className="h-9 w-9 rounded-full bg-gradient-brand grid place-items-center text-white text-xs font-black">JR</div>
          </div>
        </header>

        <main className="p-6 space-y-6">
          <div>
            <h1 className="display text-2xl font-black">Bom dia, Equipe Biguá 👋</h1>
            <p className="text-sm text-muted-foreground">Resumo de hoje · Terça, 26 de Maio</p>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Publicadas hoje", value: "47", delta: "+12%", icon: FileText, color: "var(--brand)" },
              { label: "Visualizações hoje", value: "84.2K", delta: "+23%", icon: Eye, color: "oklch(0.55 0.18 145)" },
              { label: "Views do mês", value: "1.24M", delta: "+8%", icon: TrendingUp, color: "var(--accent-yellow)" },
              { label: "Anunciantes ativos", value: "12", delta: "+3", icon: Megaphone, color: "var(--urgent)" },
            ].map((k) => (
              <div key={k.label} className="bg-card rounded-xl p-4 shadow-card border border-border">
                <div className="flex items-start justify-between">
                  <div className="h-9 w-9 rounded-md grid place-items-center" style={{ background: `color-mix(in oklab, ${k.color} 15%, transparent)`, color: k.color }}>
                    <k.icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold text-green-600">{k.delta}</span>
                </div>
                <div className="display text-3xl font-black mt-3">{k.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{k.label}</div>
              </div>
            ))}
          </div>

          {/* Chart + Categories */}
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 bg-card rounded-xl p-5 shadow-card border border-border">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="display font-black text-base">Acessos · últimos 7 dias</h3>
                  <p className="text-xs text-muted-foreground">Visualizações de página únicas</p>
                </div>
                <select className="text-xs h-8 px-2 rounded-md border border-border bg-background">
                  <option>Últimos 7 dias</option>
                </select>
              </div>
              <div className="h-48 flex items-end gap-2">
                {[42, 58, 51, 67, 73, 89, 84].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full rounded-t-md bg-gradient-to-t from-brand to-brand-glow relative group" style={{ height: `${h}%` }}>
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100">{h}K</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground">{["Qua","Qui","Sex","Sáb","Dom","Seg","Ter"][i]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl p-5 shadow-card border border-border">
              <h3 className="display font-black text-base mb-4">Top categorias</h3>
              <div className="space-y-3">
                {[["Polícia", 34], ["Lages", 28], ["Política", 18], ["Esportes", 12], ["Brasil", 8]].map(([cat, pct]) => (
                  <div key={cat as string}>
                    <div className="flex justify-between text-xs mb-1.5"><span className="font-semibold">{cat}</span><span className="text-muted-foreground">{pct}%</span></div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden"><div className="h-full bg-gradient-brand" style={{ width: `${pct}%` }} /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent news table + Você Repórter */}
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 bg-card rounded-xl shadow-card border border-border overflow-hidden">
              <div className="px-5 py-4 flex items-center justify-between border-b border-border">
                <h3 className="display font-black text-base">Últimas publicações</h3>
                <button className="text-xs font-bold text-brand">Ver todas</button>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-muted text-xs">
                  <tr>
                    <th className="text-left px-5 py-2.5 font-semibold">Título</th>
                    <th className="text-left px-3 py-2.5 font-semibold">Autor</th>
                    <th className="text-left px-3 py-2.5 font-semibold">Views</th>
                    <th className="text-left px-3 py-2.5 font-semibold">Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {news.slice(0, 5).map((n) => (
                    <tr key={n.id} className="border-t border-border hover:bg-muted/50">
                      <td className="px-5 py-3">
                        <div className="flex gap-2 items-center">
                          <img src={n.image} className="h-9 w-9 rounded object-cover shrink-0" alt="" loading="lazy" width={36} height={36}/>
                          <div className="min-w-0">
                            <div className="font-semibold text-xs line-clamp-1">{n.title}</div>
                            <div className="text-[10px] text-muted-foreground">{n.category} · {n.time}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-3 text-xs">{n.author}</td>
                      <td className="px-3 py-3 text-xs font-bold">{n.views.toLocaleString("pt-BR")}</td>
                      <td className="px-3 py-3"><span className="text-[10px] font-bold px-2 py-1 rounded-full bg-green-100 text-green-700">PUBLICADO</span></td>
                      <td className="px-3 py-3"><button><MoreVertical className="h-4 w-4 text-muted-foreground" /></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-4">
              <div className="bg-card rounded-xl shadow-card border border-border p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="display font-black text-base">Você Repórter</h3>
                  <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-urgent text-white">8 NOVOS</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Maria S.", area: "Bairro Coral", desc: "Vazamento de água há 3 dias", time: "agora" },
                    { name: "João P.", area: "Centro", desc: "Acidente na rua Marechal", time: "12 min" },
                    { name: "Ana L.", area: "Conta Dinheiro", desc: "Festa junina do bairro", time: "1h" },
                  ].map((r, i) => (
                    <div key={i} className="flex gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
                      <div className="h-8 w-8 rounded-full bg-gradient-brand text-white text-[10px] font-black grid place-items-center shrink-0">{r.name.split(" ").map(p => p[0]).join("")}</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold">{r.name} <span className="text-muted-foreground font-normal">· {r.area}</span></div>
                        <div className="text-xs text-muted-foreground line-clamp-1">{r.desc}</div>
                        <div className="text-[10px] text-muted-foreground mt-0.5 flex items-center gap-1"><Clock className="h-2.5 w-2.5" />{r.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-3 h-9 rounded-md border border-border text-xs font-bold hover:bg-muted">Revisar envios</button>
              </div>

              <div className="bg-gradient-brand text-white rounded-xl p-5">
                <Megaphone className="h-6 w-6 text-accent-yellow mb-2" />
                <h3 className="display font-black">Espaços publicitários disponíveis</h3>
                <p className="text-xs opacity-80 mt-1">3 slots premium não preenchidos.</p>
                <div className="display text-3xl font-black mt-2">R$ 4.800 <span className="text-sm opacity-70">/mês não vendido</span></div>
                <button className="mt-3 h-9 px-3 rounded-md bg-accent-yellow text-ink font-bold text-xs">Ver disponibilidade</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
