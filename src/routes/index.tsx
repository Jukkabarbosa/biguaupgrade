import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Zap, ArrowRight, Smartphone, Monitor, LayoutDashboard, Megaphone, MessageCircle,
  TrendingUp, Users, Eye, Check, X, Sparkles, Radio, Send, BarChart3, Globe,
  ShieldCheck, Rocket, Clock, Star, Building2,
} from "lucide-react";
import { news, categoryColors } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Biguá Tá On 2.0 — Proposta de modernização do portal" },
      { name: "description", content: "Uma nova fase para o portal de notícias mais lido da Serra Catarinense: mais moderno, mais rápido, mais comercial." },
    ],
  }),
  component: Pitch,
});

function Pitch() {
  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-accent-yellow grid place-items-center"><Zap className="h-5 w-5 text-ink" fill="currentColor" strokeWidth={0} /></div>
            <div>
              <div className="display font-black italic text-lg leading-none">BIGUÁ 2.0</div>
              <div className="text-[9px] font-bold text-muted-foreground tracking-widest mt-0.5">PROPOSTA DE REFORMA</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <a href="#antes-depois" className="hover:text-brand">Antes & Depois</a>
            <a href="#previews" className="hover:text-brand">Previews</a>
            <a href="#beneficios" className="hover:text-brand">Benefícios</a>
            <a href="#planos" className="hover:text-brand">Planos</a>
          </nav>
          <a href="#contato" className="h-10 px-4 rounded-md bg-gradient-brand text-white font-bold text-sm inline-flex items-center gap-2 shadow-brand">
            Falar com o time <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent-yellow/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold mb-6">
              <span className="pulse-dot text-accent-yellow">PROPOSTA EXCLUSIVA</span>
              <span className="opacity-80">· para Biguá Tá On</span>
            </div>
            <h1 className="display text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] text-balance">
              Biguá Tá On <span className="text-accent-yellow">2.0</span><br/>
              Um novo portal para uma nova fase.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
              Mais moderno, mais rápido, mais fácil de publicar e <strong className="text-accent-yellow">muito mais atrativo para anunciantes</strong> da Serra Catarinense.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/portal" className="h-12 px-6 rounded-md bg-accent-yellow text-ink font-black text-sm inline-flex items-center gap-2 hover:brightness-110 shadow-brand">
                <Monitor className="h-4 w-4" /> Ver o novo portal
              </Link>
              <Link to="/mobile" className="h-12 px-6 rounded-md bg-white/10 border border-white/30 font-bold text-sm inline-flex items-center gap-2 hover:bg-white/20">
                <Smartphone className="h-4 w-4" /> Versão mobile
              </Link>
              <Link to="/admin" className="h-12 px-6 rounded-md bg-white/10 border border-white/30 font-bold text-sm inline-flex items-center gap-2 hover:bg-white/20">
                <LayoutDashboard className="h-4 w-4" /> Painel admin
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[["3x", "mais rápido"], ["+47%", "no mobile"], ["+R$", "anunciantes"]].map(([v, l]) => (
                <div key={l}>
                  <div className="display text-2xl md:text-3xl font-black text-accent-yellow">{v}</div>
                  <div className="text-xs text-white/70">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating preview mockup */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Desktop */}
              <div className="bg-ink rounded-xl p-2 shadow-elevated rotate-2">
                <div className="flex gap-1.5 px-2 py-1.5">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                </div>
                <div className="rounded-lg overflow-hidden bg-background">
                  <div className="bg-gradient-hero text-white px-3 py-2 flex items-center gap-1.5">
                    <div className="h-4 w-4 rounded bg-accent-yellow" />
                    <span className="display font-black italic text-xs">BIGUÁ</span>
                  </div>
                  <div className="bg-urgent text-white text-[8px] font-bold px-3 py-1">⚡ PLANTÃO · PF cumpre mandados em Lages</div>
                  <div className="p-3 grid grid-cols-3 gap-2">
                    <div className="col-span-2 relative aspect-[4/3] rounded overflow-hidden">
                      <img src={news[0].image} alt="" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-1.5 left-1.5 right-1.5">
                        <span className="text-[7px] bg-urgent text-white px-1 rounded font-black">URGENTE</span>
                        <div className="text-white text-[9px] font-black mt-0.5 leading-tight line-clamp-2">{news[0].title}</div>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {news.slice(1, 4).map((n) => (
                        <div key={n.id} className="bg-muted rounded p-1.5">
                          <div className="aspect-video bg-card rounded overflow-hidden"><img src={n.image} alt="" className="w-full h-full object-cover" /></div>
                          <div className="text-[7px] font-bold mt-1 line-clamp-2 text-ink">{n.title}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone floating */}
              <div className="absolute -bottom-12 -left-8 w-44 bg-ink rounded-[2rem] p-2 shadow-elevated -rotate-6 border-4 border-ink">
                <div className="rounded-[1.5rem] overflow-hidden bg-background">
                  <div className="bg-gradient-hero text-white px-3 pt-3 pb-2">
                    <div className="flex items-center justify-between">
                      <div className="h-4 w-4 rounded bg-accent-yellow" />
                      <span className="display font-black italic text-xs">BIGUÁ</span>
                      <div className="h-4 w-4 rounded-full bg-[#25D366]" />
                    </div>
                    <div className="flex gap-1.5 mt-2 overflow-hidden">
                      {["UR","LA","PO","PL"].map((s, i) => (
                        <div key={i} className="h-8 w-8 rounded-full p-0.5 shrink-0" style={{ background: "linear-gradient(135deg, var(--urgent), var(--accent-yellow))" }}>
                          <div className="h-full w-full rounded-full bg-background grid place-items-center text-[7px] font-black text-brand">{s}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-2 space-y-2">
                    <div className="aspect-[4/3] rounded overflow-hidden relative">
                      <img src={news[0].image} alt="" className="w-full h-full object-cover" />
                      <div className="absolute bottom-1 left-1 right-1">
                        <span className="text-[7px] bg-urgent text-white px-1 rounded font-black">URGENTE</span>
                      </div>
                    </div>
                    {news.slice(1, 3).map((n) => (
                      <div key={n.id} className="flex gap-1.5">
                        <div className="h-8 w-10 rounded overflow-hidden shrink-0"><img src={n.image} alt="" className="w-full h-full object-cover" /></div>
                        <div className="text-[7px] font-bold line-clamp-2 text-ink">{n.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANTES & DEPOIS */}
      <section id="antes-depois" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block text-xs font-black tracking-widest text-brand bg-brand/10 px-3 py-1 rounded-full mb-3">A TRANSFORMAÇÃO</div>
            <h2 className="display text-3xl md:text-5xl font-black text-balance">Do portal tradicional ao portal premium</h2>
            <p className="mt-4 text-muted-foreground">Mesma identidade, mesma alma jornalística. Outro patamar de experiência, audiência e faturamento.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* ANTES */}
            <div className="rounded-2xl border-2 border-border bg-card overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 bg-muted">
                <span className="display font-black text-sm flex items-center gap-2"><X className="h-4 w-4 text-urgent" /> HOJE</span>
                <span className="text-[10px] font-bold text-muted-foreground tracking-widest">VERSÃO ATUAL</span>
              </div>
              <div className="bg-[#1d4ed8] p-4 flex items-center justify-center h-32">
                <div className="text-center">
                  <div className="text-white text-3xl font-black italic">BIGUÁ</div>
                  <div className="inline-block text-[10px] bg-yellow-400 text-black px-1.5 font-black mt-1">TA ON</div>
                </div>
              </div>
              <div className="p-5 space-y-2.5 text-sm">
                {[
                  "Layout datado, baixa hierarquia visual",
                  "Mobile pouco otimizado",
                  "Anúncios mal posicionados (perdem valor)",
                  "Publicar matéria demora e cansa a equipe",
                  "Sem canal de WhatsApp / Você Repórter",
                  "Sem painel de métricas para anunciantes",
                ].map((t) => (
                  <div key={t} className="flex gap-2 items-start"><X className="h-4 w-4 text-urgent shrink-0 mt-0.5" /><span className="text-muted-foreground">{t}</span></div>
                ))}
              </div>
            </div>

            {/* DEPOIS */}
            <div className="rounded-2xl border-2 border-brand bg-card overflow-hidden shadow-brand relative">
              <div className="absolute -top-3 left-5 px-3 py-1 rounded-full bg-accent-yellow text-ink text-[10px] font-black tracking-widest">✨ PROPOSTA</div>
              <div className="flex items-center justify-between px-5 py-3 bg-gradient-brand text-white">
                <span className="display font-black text-sm flex items-center gap-2"><Check className="h-4 w-4 text-accent-yellow" /> DEPOIS</span>
                <span className="text-[10px] font-bold tracking-widest opacity-80">BIGUÁ 2.0</span>
              </div>
              <div className="bg-gradient-hero p-4 h-32 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, var(--accent-yellow) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <div className="relative flex items-center gap-2">
                  <div className="h-10 w-10 rounded bg-accent-yellow grid place-items-center"><Zap className="h-6 w-6 text-ink" fill="currentColor" strokeWidth={0} /></div>
                  <div>
                    <div className="display font-black italic text-white text-2xl leading-none">BIGUÁ</div>
                    <div className="inline-block text-[10px] bg-accent-yellow text-ink px-1.5 font-black mt-0.5 tracking-widest">TÁ ON</div>
                  </div>
                </div>
              </div>
              <div className="p-5 space-y-2.5 text-sm">
                {[
                  "Visual editorial moderno, manchetes que vendem",
                  "100% mobile-first, parece um aplicativo",
                  "Espaços publicitários nativos e valorizados",
                  "Painel admin: publica em 1 minuto",
                  "WhatsApp, Você Repórter e Plantão integrados",
                  "Dashboard de métricas para vender publicidade",
                ].map((t) => (
                  <div key={t} className="flex gap-2 items-start"><Check className="h-4 w-4 text-brand shrink-0 mt-0.5" /><span className="font-medium">{t}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREVIEWS */}
      <section id="previews" className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block text-xs font-black tracking-widest text-brand bg-brand/10 px-3 py-1 rounded-full mb-3">CLIQUE PARA NAVEGAR</div>
            <h2 className="display text-3xl md:text-5xl font-black text-balance">Tudo isso já está funcionando agora</h2>
            <p className="mt-4 text-muted-foreground">Clique em qualquer preview para abrir e navegar de verdade. Não é mockup estático.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { to: "/portal", icon: Monitor, title: "Portal Desktop", desc: "Hero editorial, sidebar inteligente, blocos por editoria, espaços publicitários valorizados.", color: "var(--brand)" },
              { to: "/mobile", icon: Smartphone, title: "Versão Mobile", desc: "Stories de editoria, feed estilo app, menu inferior fixo, botão flutuante Você Repórter.", color: "oklch(0.55 0.18 145)" },
              { to: "/admin", icon: LayoutDashboard, title: "Painel Admin", desc: "Métricas em tempo real, gestão de matérias, anúncios e envios de leitor em um só lugar.", color: "var(--accent-yellow)" },
            ].map((p) => (
              <Link key={p.to} to={p.to} className="group block bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-elevated transition-all hover:-translate-y-1">
                <div className="h-44 bg-gradient-hero relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                  <p.icon className="h-20 w-20 text-white/90 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                </div>
                <div className="p-5">
                  <h3 className="display font-black text-lg">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5">{p.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-brand mt-3 group-hover:gap-2 transition-all">
                    Abrir preview <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="beneficios" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-block text-xs font-black tracking-widest text-brand bg-brand/10 px-3 py-1 rounded-full mb-3">PARA O PORTAL</div>
              <h2 className="display text-3xl md:text-4xl font-black text-balance">Mais audiência, mais permanência, mais credibilidade.</h2>
              <p className="mt-4 text-muted-foreground">A reforma não é só estética. É uma nova estrutura de produto pensada para transformar audiência em crescimento e faturamento.</p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: TrendingUp, t: "Tempo de permanência", d: "Layouts que prendem o leitor: relacionadas, mais lidas e cards de continuidade." },
                  { icon: Smartphone, t: "Experiência mobile premium", d: "Stories, feed contínuo e menu inferior — sensação de aplicativo." },
                  { icon: MessageCircle, t: "Distribuição via WhatsApp", d: "Plantão Biguá no zap aumenta audiência e fideliza leitores." },
                  { icon: Rocket, t: "Publicação em 1 minuto", d: "Editor visual no painel: a equipe ganha tempo para apurar mais." },
                ].map((b) => (
                  <div key={b.t} className="flex gap-4">
                    <div className="h-10 w-10 rounded-lg bg-brand/10 text-brand grid place-items-center shrink-0"><b.icon className="h-5 w-5" /></div>
                    <div>
                      <h4 className="font-bold">{b.t}</h4>
                      <p className="text-sm text-muted-foreground">{b.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="inline-block text-xs font-black tracking-widest text-accent-foreground bg-accent-yellow px-3 py-1 rounded-full mb-3">PARA ANUNCIANTES</div>
              <h2 className="display text-3xl md:text-4xl font-black text-balance">Espaços que parecem caros — porque vendem mais.</h2>
              <p className="mt-4 text-muted-foreground">Cada centímetro do novo portal foi pensado para valorizar o anunciante local da Serra Catarinense.</p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { icon: Megaphone, t: "Banners nativos", d: "Topo, lateral, entre matérias e rodapé" },
                  { icon: Sparkles, t: "Matérias patrocinadas", d: "Conteúdo de marca integrado" },
                  { icon: Building2, t: "Guia comercial", d: "Vitrine local de empresas parceiras" },
                  { icon: BarChart3, t: "Relatórios", d: "Impressões, cliques e CTR mensal" },
                  { icon: Send, t: "Destaque social", d: "Post integrado com Instagram/Facebook" },
                  { icon: ShieldCheck, t: "Pacotes mensais", d: "Receita recorrente previsível" },
                ].map((b) => (
                  <div key={b.t} className="p-4 rounded-xl bg-card border border-border shadow-card hover:border-brand transition-colors">
                    <b.icon className="h-5 w-5 text-brand mb-2" />
                    <div className="font-bold text-sm">{b.t}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{b.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOVIDADES */}
      <section className="py-20 md:py-28 bg-ink text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent-yellow/10 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block text-xs font-black tracking-widest text-accent-yellow bg-white/10 px-3 py-1 rounded-full mb-3">NOVIDADES EXCLUSIVAS</div>
            <h2 className="display text-3xl md:text-5xl font-black text-balance">Recursos que nenhum portal da Serra tem</h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: Radio, t: "Plantão Biguá", d: "Faixa de notícias em tempo real, sempre no topo" },
              { icon: MessageCircle, t: "Biguá no WhatsApp", d: "Grupo VIP de leitores fiéis" },
              { icon: Send, t: "Você Repórter", d: "Leitor envia pauta direto pelo celular" },
              { icon: TrendingUp, t: "Mais lidas da semana", d: "Ranking automatizado por views" },
              { icon: Building2, t: "Guia Comercial", d: "Vitrine de empresas locais" },
              { icon: BarChart3, t: "Dashboard interno", d: "Métricas para a redação e comercial" },
              { icon: Globe, t: "Pronto para SEO", d: "Indexação rápida no Google News" },
              { icon: Sparkles, t: "Modo escuro", d: "Conforto de leitura à noite" },
            ].map((f) => (
              <div key={f.t} className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                <f.icon className="h-6 w-6 text-accent-yellow mb-3" />
                <div className="display font-black">{f.t}</div>
                <p className="text-xs text-white/70 mt-1">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block text-xs font-black tracking-widest text-brand bg-brand/10 px-3 py-1 rounded-full mb-3">PACOTES SUGERIDOS</div>
            <h2 className="display text-3xl md:text-5xl font-black text-balance">Pacotes prontos para vender publicidade</h2>
            <p className="mt-4 text-muted-foreground">Sugestão de tabela comercial já incluída na proposta — pronta para apresentar ao mercado de Lages.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Start", price: "R$ 297", desc: "Pequenos negócios locais", features: ["Banner lateral rotativo", "1 post no Instagram do portal", "Relatório mensal de impressões"], highlight: false },
              { name: "Destaque", price: "R$ 697", desc: "Mais vendido para PMEs", features: ["Banner topo e lateral", "2 posts integrados", "1 matéria patrocinada/mês", "Destaque no Guia Comercial", "Relatório quinzenal"], highlight: true },
              { name: "Premium", price: "R$ 1.497", desc: "Marcas regionais", features: ["Todos os espaços rotativos", "4 matérias patrocinadas/mês", "Vídeo destaque", "Plantão patrocinado", "Disparo WhatsApp", "Gerente de conta"], highlight: false },
            ].map((p) => (
              <div key={p.name} className={`rounded-2xl p-6 border-2 ${p.highlight ? "border-brand bg-gradient-to-br from-brand to-brand-deep text-white shadow-brand scale-105" : "border-border bg-card"}`}>
                {p.highlight && <div className="inline-block text-[10px] font-black tracking-widest bg-accent-yellow text-ink px-2 py-1 rounded-full mb-3">⭐ MAIS VENDIDO</div>}
                <div className="display text-2xl font-black">{p.name}</div>
                <div className={`text-sm ${p.highlight ? "text-white/70" : "text-muted-foreground"}`}>{p.desc}</div>
                <div className="display text-4xl font-black mt-4">{p.price}<span className={`text-sm font-normal ${p.highlight ? "text-white/70" : "text-muted-foreground"}`}>/mês</span></div>
                <ul className="mt-5 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm">
                      <Check className={`h-4 w-4 shrink-0 mt-0.5 ${p.highlight ? "text-accent-yellow" : "text-brand"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full mt-6 h-11 rounded-md font-bold text-sm ${p.highlight ? "bg-accent-yellow text-ink" : "bg-foreground text-background hover:opacity-90"}`}>
                  Quero esse plano
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contato" className="py-20 md:py-28 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-accent-yellow/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-urgent/30 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <Sparkles className="h-12 w-12 text-accent-yellow mx-auto mb-4" />
          <h2 className="display text-3xl md:text-5xl lg:text-6xl font-black text-balance leading-tight">
            Essa reforma não é apenas visual.<br/>
            <span className="text-accent-yellow">É uma nova fase da comunicação na Serra.</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Audiência, credibilidade e faturamento crescem juntos quando o portal está à altura da marca Biguá Tá On.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <a href="#" className="h-14 px-8 rounded-md bg-[#25D366] text-white font-black text-base inline-flex items-center gap-2 shadow-brand hover:brightness-110">
              <MessageCircle className="h-5 w-5" /> Vamos conversar no WhatsApp
            </a>
            <Link to="/portal" className="h-14 px-8 rounded-md bg-white/10 border border-white/30 font-bold text-base inline-flex items-center gap-2 hover:bg-white/20">
              <Eye className="h-5 w-5" /> Ver o novo portal
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-white/60">
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Entrega em 30 dias</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Migração sem perda de conteúdo</span>
            <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> Treinamento da equipe incluído</span>
          </div>
        </div>
      </section>

      <footer className="bg-ink text-white/60 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs">
          <p>Proposta comercial · Biguá Tá On 2.0 · Apresentação demonstrativa</p>
          <p className="mt-1 opacity-70">Conteúdo fictício baseado em fatos reais da Serra Catarinense.</p>
        </div>
      </footer>
    </div>
  );
}
