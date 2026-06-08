import { Facebook, Instagram, Youtube, MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";

export function PortalFooter() {
  return (
    <footer className="bg-brand-deep text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <Logo variant="light" size="lg" />
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            O portal de notícias mais lido da Serra Catarinense. Informação rápida, confiável e em tempo real para Lages e região.
          </p>
          <div className="flex gap-2 mt-4">
            <a href="#" className="grid place-items-center h-9 w-9 rounded-md bg-white/10 hover:bg-white/20"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="grid place-items-center h-9 w-9 rounded-md bg-white/10 hover:bg-white/20"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="grid place-items-center h-9 w-9 rounded-md bg-white/10 hover:bg-white/20"><Youtube className="h-4 w-4" /></a>
            <a href="#" className="grid place-items-center h-9 w-9 rounded-md bg-[#25D366]"><MessageCircle className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="display text-sm font-black mb-3 text-accent-yellow">EDITORIAS</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {["Lages", "Polícia", "Política", "Estaduais", "Brasil", "Esportes", "Vídeos"].map((c) => (
              <li key={c}><a href="#" className="hover:text-accent-yellow">{c}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="display text-sm font-black mb-3 text-accent-yellow">INSTITUCIONAL</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#">Sobre o portal</a></li>
            <li><a href="#">Anuncie aqui</a></li>
            <li><a href="#">Você Repórter</a></li>
            <li><a href="#">Política de privacidade</a></li>
            <li><a href="#">Expediente</a></li>
            <li><a href="#">Fale conosco</a></li>
          </ul>
        </div>
        <div>
          <h4 className="display text-sm font-black mb-3 text-accent-yellow">CONTATO</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" /> Av. Marechal Floriano, 1234<br/>Centro · Lages/SC</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5" /> (49) 3000-0000</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5" /> redacao@biguataon.com.br</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-white/60 flex flex-wrap justify-between gap-2">
          <span>© 2026 Biguá Tá On · Todos os direitos reservados</span>
          <span>Proposta de reforma — versão demonstrativa</span>
        </div>
      </div>
    </footer>
  );
}
