import { PortalHeader } from "@/components/PortalHeader";
import { PortalFooter } from "@/components/PortalFooter";
import { news, categoryColors, type Category } from "@/lib/mock-data";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Eye, ArrowRight, TrendingUp, Cloud, MessageCircle, Mail, Radio, Activity, Users, Newspaper } from "lucide-react";

export const Route = createFileRoute("/portal")({
  head: () => ({
    meta: [
      { title: "Biguá Tá On — Portal de notícias da Serra Catarinense" },
      { name: "description", content: "As principais notícias de Lages e região em tempo real." },
    ],
  }),
  component: Portal,
});

function Badge({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      className="inline-block text-[10px] font-black tracking-widest px-2 py-1 rounded-sm text-white"
      style={{ background: color ?? "var(--brand)" }}
    >
      {children}
    </span>
  );
}

function CategoryTag({ cat }: { cat: Category }) {
  return <Badge color={categoryColors[cat]}>{cat.toUpperCase()}</Badge>;
}

function AdBanner({ label = "PUBLICIDADE", height = "h-32" }: { label?: string; height?: string }) {
  return (
    <div className={`relative ${height} rounded-xl overflow-hidden border border-dashed border-border bg-gradient-to-br from-muted to-accent flex items-center justify-center`}>
      <span className="absolute top-2 left-3 text-[10px] tracking-widest text-muted-foreground font-bold">{label}</span>
      <div className="text-center px-4">
        <p className="display text-lg md:text-2xl font-black text-brand">SEU ANÚNCIO AQUI</p>
        <p className="text-xs text-muted-foreground mt-1">Espaço premium · 728x90 · CTR médio 3,2%</p>
      </div>
    </div>
  );
}

function Portal() {
  const main = news[0];
  const secondary = news.slice(1, 5);
  const sidebar = news.slice(2, 7);

  return (
    <div className="min-h-screen bg-background">
      <PortalHeader />

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { icon: Newspaper, label: "Publicadas hoje", value: "47" },
            { icon: Eye, label: "Views no mês", value: "1.2M" },
            { icon: Users, label: "Online agora", value: "2.847" },
            { icon: Activity, label: "Categoria top", value: "Polícia" },
          ].map((s) => (
            <div key={s.label} className="bg-card rounded-xl p-3 shadow-card border border-border flex items-center gap-3">
              <div className="h-9 w-9 rounded-md bg-brand/10 text-brand grid place-items-center">
                <s.icon className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
                <div className="display text-base font-black">{s.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Top ad */}
        <div className="mb-8"><AdBanner /></div>

        {/* HERO */}
        <section className="grid lg:grid-cols-3 gap-6 mb-12">
          <article className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-elevated group cursor-pointer">
            <img src={main.image} alt="" className="w-full h-[420px] md:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700" width={1280} height={832} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="absolute bottom-0 p-6 md:p-8 text-white">
              <div className="flex items-center gap-2 mb-3">
                {main.badge && <Badge color="var(--urgent)">⚡ {main.badge}</Badge>}
                <CategoryTag cat={main.category} />
                <span className="text-xs opacity-80 flex items-center gap-1"><Clock className="h-3 w-3" /> {main.time}</span>
              </div>
              <h1 className="display text-2xl md:text-4xl lg:text-5xl font-black text-balance leading-tight">
                {main.title}
              </h1>
              <p className="mt-3 text-sm md:text-base opacity-90 max-w-3xl">{main.excerpt}</p>
              <div className="mt-4 flex items-center gap-4 text-xs opacity-80">
                <span>Por {main.author}</span>
                <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> {main.views.toLocaleString("pt-BR")} leituras</span>
              </div>
            </div>
          </article>

          <div className="space-y-4">
            {secondary.map((n) => (
              <article key={n.id} className="bg-card rounded-xl overflow-hidden shadow-card border border-border hover:shadow-elevated transition-shadow cursor-pointer flex gap-3">
                <img src={n.image} alt="" className="w-28 h-full object-cover shrink-0" width={400} height={400} loading="lazy" />
                <div className="py-3 pr-3 flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CategoryTag cat={n.category} />
                    {n.badge && <Badge color="var(--urgent)">{n.badge}</Badge>}
                  </div>
                  <h3 className="font-bold text-sm leading-snug line-clamp-3">{n.title}</h3>
                  <div className="text-[11px] text-muted-foreground mt-1.5 flex items-center gap-1"><Clock className="h-3 w-3" /> {n.time}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Two-column main */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          <div className="space-y-12">
            {(["Polícia", "Política", "Esportes", "Lages"] as Category[]).map((cat) => {
              const items = news.filter((n) => n.category === cat).concat(news).slice(0, 3);
              return (
                <section key={cat}>
                  <header className="flex items-end justify-between mb-5 pb-3 border-b-2 border-ink">
                    <h2 className="display text-2xl font-black flex items-center gap-3">
                      <span className="w-1.5 h-7 rounded-sm" style={{ background: categoryColors[cat] }} />
                      {cat.toUpperCase()}
                    </h2>
                    <a href="#" className="text-xs font-bold text-brand flex items-center gap-1 hover:gap-2 transition-all">
                      Ver todas <ArrowRight className="h-3 w-3" />
                    </a>
                  </header>
                  <div className="grid sm:grid-cols-3 gap-5">
                    {items.map((n) => (
                      <article key={n.id + cat} className="group cursor-pointer">
                        <div className="aspect-[4/3] overflow-hidden rounded-xl mb-3 bg-muted">
                          <img src={n.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={400} height={300} />
                        </div>
                        <CategoryTag cat={n.category} />
                        <h3 className="display font-black text-base leading-tight mt-2 group-hover:text-brand transition-colors">{n.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">{n.excerpt}</p>
                        <div className="text-[11px] text-muted-foreground mt-2 flex items-center gap-2">
                          <span>{n.author}</span>·<span>{n.time}</span>
                        </div>
                      </article>
                    ))}
                  </div>
                  {cat === "Política" && <div className="mt-8"><AdBanner label="ANÚNCIO ENTRE MATÉRIAS" /></div>}
                </section>
              );
            })}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-card rounded-xl shadow-card border border-border overflow-hidden">
              <div className="bg-gradient-brand text-white px-4 py-3 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <h3 className="display font-black text-sm">MAIS LIDAS DA SEMANA</h3>
              </div>
              <ol className="p-4 space-y-3">
                {sidebar.map((n, i) => (
                  <li key={n.id} className="flex gap-3 group cursor-pointer">
                    <span className="display text-3xl font-black text-brand/30 leading-none">{i + 1}</span>
                    <div>
                      <h4 className="text-sm font-semibold leading-snug group-hover:text-brand">{n.title}</h4>
                      <div className="text-[11px] text-muted-foreground mt-1">{n.views.toLocaleString("pt-BR")} leituras</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white rounded-xl p-5 shadow-card">
              <MessageCircle className="h-7 w-7 mb-2" />
              <h3 className="display font-black text-lg">BIGUÁ NO WHATSAPP</h3>
              <p className="text-sm opacity-90 mt-1">Receba as notícias direto no seu zap. Grupo exclusivo, sem spam.</p>
              <button className="mt-3 w-full h-10 rounded-md bg-white text-[#128C7E] font-bold text-sm">Entrar no grupo</button>
            </div>

            <AdBanner label="PATROCINADOR" height="h-72" />

            <div className="bg-card rounded-xl shadow-card border border-border p-5">
              <div className="flex items-center gap-2 mb-2"><Cloud className="h-4 w-4 text-brand" /><h3 className="display font-black text-sm">TEMPO EM LAGES</h3></div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="display text-5xl font-black">18°</div>
                  <div className="text-sm text-muted-foreground">Parcialmente nublado</div>
                </div>
                <div className="text-right text-xs text-muted-foreground">
                  <div>Máx 22° · Mín 12°</div>
                  <div>Umidade 78%</div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl shadow-card border border-border p-5">
              <div className="flex items-center gap-2 mb-3"><Radio className="h-4 w-4 text-urgent pulse-dot" /><h3 className="display font-black text-sm">ENQUETE DA SEMANA</h3></div>
              <p className="text-sm font-semibold mb-3">Você apoia o fim da escala 6x1?</p>
              <div className="space-y-2 text-sm">
                {[["Sim, 100%", 68], ["Sim, com ajustes", 22], ["Não", 10]].map(([label, pct]) => (
                  <div key={label as string}>
                    <div className="flex justify-between text-xs mb-1"><span>{label}</span><span className="font-bold">{pct}%</span></div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden"><div className="h-full bg-brand" style={{ width: `${pct}%` }} /></div>
                  </div>
                ))}
              </div>
              <div className="text-[11px] text-muted-foreground mt-3">3.247 votos</div>
            </div>

            <div className="bg-ink text-white rounded-xl p-5">
              <Mail className="h-6 w-6 text-accent-yellow mb-2" />
              <h3 className="display font-black text-lg">NEWSLETTER</h3>
              <p className="text-sm opacity-80 mt-1">As principais notícias toda manhã no seu e-mail.</p>
              <input placeholder="seu@email.com" className="mt-3 w-full h-10 rounded-md bg-white/10 px-3 text-sm placeholder:text-white/50 outline-none" />
              <button className="mt-2 w-full h-10 rounded-md bg-accent-yellow text-ink font-bold text-sm">Quero receber</button>
            </div>
          </aside>
        </div>
      </main>

      <PortalFooter />
    </div>
  );
}
