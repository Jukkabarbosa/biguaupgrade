import newsPolice from "@/assets/news-police.jpg";
import newsLages from "@/assets/news-lages.jpg";
import newsSports from "@/assets/news-sports.jpg";
import newsPolitics from "@/assets/news-politics.jpg";
import newsFestival from "@/assets/news-festival.jpg";
import newsFire from "@/assets/news-fire.jpg";
import newsAccident from "@/assets/news-accident.jpg";

export const images = { newsPolice, newsLages, newsSports, newsPolitics, newsFestival, newsFire, newsAccident };

export type Category = "Lages" | "Polícia" | "Política" | "Estaduais" | "Brasil" | "Esportes";

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: Category;
  image: string;
  time: string;
  author: string;
  badge?: "URGENTE" | "AO VIVO" | "EXCLUSIVO" | "MAIS LIDA";
  views: number;
}

export const news: NewsItem[] = [
  {
    id: "1",
    title: "Lages é alvo de operação da Polícia Federal contra esquema que movimentou R$ 86 milhões",
    excerpt: "A Polícia Federal deflagrou na manhã desta terça-feira a Operação Sem Estoque, com mandados cumpridos em Lages, Florianópolis e São Paulo.",
    category: "Polícia", image: newsPolice, time: "há 17 minutos", author: "Redação Biguá",
    badge: "URGENTE", views: 12450,
  },
  {
    id: "2",
    title: "Festa do Pinhão reúne mais de 80 mil pessoas no segundo final de semana em Lages",
    excerpt: "Maior festa cultural da Serra Catarinense bate recorde de público com shows nacionais e gastronomia típica.",
    category: "Lages", image: newsFestival, time: "há 2 horas", author: "Carla Menezes",
    badge: "MAIS LIDA", views: 8932,
  },
  {
    id: "3",
    title: "Acidente na BR-282 deixa três mortos em Rancho Queimado",
    excerpt: "Colisão frontal entre carro e caminhão aconteceu na madrugada deste domingo. Pista ficou interditada por 6 horas.",
    category: "Polícia", image: newsAccident, time: "há 4 horas", author: "Bruno Carvalho", views: 6210,
  },
  {
    id: "4",
    title: "Câmara avança no debate sobre fim da escala 6x1 e redução para 40 horas semanais",
    excerpt: "Comissão especial define relator e marca primeiras audiências públicas para próxima semana em Brasília.",
    category: "Brasil", image: newsPolitics, time: "há 5 horas", author: "Agência Biguá", views: 4870,
  },
  {
    id: "5",
    title: "Lucas Neves viabiliza novo caminhão de combate a incêndios para Bombeiros de Lages",
    excerpt: "Veículo zero quilômetro custou R$ 1,8 milhão e será incorporado à frota ainda neste mês.",
    category: "Política", image: newsFire, time: "há 8 horas", author: "Redação Biguá", views: 3120,
  },
  {
    id: "6",
    title: "Internacional vence o Avaí por 2 a 1 e respira na luta contra o rebaixamento",
    excerpt: "Partida válida pela 34ª rodada do Brasileirão foi disputada no Beira-Rio com mais de 40 mil torcedores.",
    category: "Esportes", image: newsSports, time: "há 12 horas", author: "Diego Ramos", views: 5640,
  },
  {
    id: "7",
    title: "Defesa tenta reverter prisão preventiva de vice-prefeito de Lages após decisão judicial",
    excerpt: "Advogados protocolaram habeas corpus no TJSC nesta segunda-feira. Audiência de custódia foi mantida.",
    category: "Lages", image: newsLages, time: "há 1 dia", author: "Marina Oliveira", views: 9870,
  },
  {
    id: "8",
    title: "Aeronave que saiu de São Paulo sai da pista após pouso em Santa Catarina",
    excerpt: "Não houve feridos. Aeroporto ficou fechado por 3 horas para retirada do bimotor.",
    category: "Estaduais", image: newsLages, time: "há 1 dia", author: "Agência Biguá", views: 4210,
  },
];

export const categoryColors: Record<Category, string> = {
  "Lages": "oklch(0.42 0.24 262)",
  "Polícia": "oklch(0.55 0.22 25)",
  "Política": "oklch(0.45 0.18 220)",
  "Estaduais": "oklch(0.55 0.18 145)",
  "Brasil": "oklch(0.6 0.18 80)",
  "Esportes": "oklch(0.5 0.22 180)",
};
