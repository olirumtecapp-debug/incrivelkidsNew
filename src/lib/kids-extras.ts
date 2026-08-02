import type { DailyState, Progress } from "./progress";

export type Pet = { id: string; emoji: string; name: string; price: number };

export const PETS: Pet[] = [
  { id: "cachorrinho", emoji: "🐶", name: "Bolinha", price: 20 },
  { id: "gatinho", emoji: "🐱", name: "Miau", price: 20 },
  { id: "coelhinho", emoji: "🐰", name: "Pulinho", price: 35 },
  { id: "pinguim", emoji: "🐧", name: "Frost", price: 35 },
  { id: "dragao", emoji: "🐲", name: "Fogoso", price: 60 },
  { id: "unicornio", emoji: "🦄", name: "Brilhante", price: 80 },
  { id: "dino", emoji: "🦕", name: "Rex", price: 60 },
  { id: "polvo", emoji: "🐙", name: "Tentáculo", price: 45 },
];

export const AVATAR_FACES = ["🐻", "🦊", "🐼", "🐵", "🦁", "🐸", "🐨", "🐯", "🐮", "🐷"];

export const AVATAR_HATS = [
  { id: "none", emoji: "", label: "Sem chapéu" },
  { id: "party", emoji: "🎉", label: "Festa" },
  { id: "crown", emoji: "👑", label: "Coroa" },
  { id: "cap", emoji: "🧢", label: "Boné" },
  { id: "magic", emoji: "🎩", label: "Mágico" },
  { id: "star", emoji: "⭐", label: "Estrela" },
];

export const AVATAR_COLORS = [
  "var(--sky)",
  "var(--turquoise)",
  "var(--grape)",
  "var(--bubblegum)",
  "var(--sunny)",
  "var(--grass)",
  "var(--orange)",
];

export type Mission = {
  id: string;
  emoji: string;
  title: string;
  goal: number;
  reward: number;
  progress: (daily: DailyState) => number;
};

export const DAILY_MISSIONS: Mission[] = [
  {
    id: "jogue3",
    emoji: "🎮",
    title: "Vença 3 minijogos hoje",
    goal: 3,
    reward: 10,
    progress: (d) => d.wins,
  },
  {
    id: "estrelas30",
    emoji: "⭐",
    title: "Ganhe 30 estrelas hoje",
    goal: 30,
    reward: 15,
    progress: (d) => d.stars,
  },
  {
    id: "mundos2",
    emoji: "🗺",
    title: "Visite 2 mundos diferentes",
    goal: 2,
    reward: 10,
    progress: (d) => d.worlds.length,
  },
];

export type Achievement = {
  id: string;
  emoji: string;
  title: string;
  description: string;
  check: (p: Progress) => boolean;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "primeira",
    emoji: "🥇",
    title: "Primeira vitória",
    description: "Vença o seu primeiro minijogo",
    check: (p) => p.totalWins >= 1,
  },
  {
    id: "dez-jogos",
    emoji: "🎯",
    title: "Brincalhão",
    description: "Vença 10 partidas",
    check: (p) => p.totalWins >= 10,
  },
  {
    id: "colecionador",
    emoji: "📖",
    title: "Colecionador",
    description: "Junte 10 adesivos",
    check: (p) => p.stickers.length >= 10,
  },
  {
    id: "cem-estrelas",
    emoji: "🌟",
    title: "Chuva de estrelas",
    description: "Acumule 100 estrelas",
    check: (p) => p.stars >= 100,
  },
  {
    id: "explorador",
    emoji: "🧭",
    title: "Explorador",
    description: "Jogue 8 minijogos diferentes",
    check: (p) => p.played.length >= 8,
  },
  {
    id: "amigo-pets",
    emoji: "🐾",
    title: "Amigo dos bichinhos",
    description: "Adote 3 pets",
    check: (p) => p.pets.length >= 3,
  },
];

export type SeasonEvent = {
  id: string;
  emoji: string;
  title: string;
  message: string;
  color: string;
};

const EVENTS: (SeasonEvent & { match: (d: Date) => boolean })[] = [
  {
    id: "natal",
    emoji: "🎄",
    title: "Festa de Natal",
    message: "O Papai Noel deixou presentes escondidos nos jogos!",
    color: "var(--grass)",
    match: (d) => d.getMonth() === 11,
  },
  {
    id: "halloween",
    emoji: "🎃",
    title: "Semana das Abóboras",
    message: "Fantasminhas divertidos apareceram na cidade!",
    color: "var(--orange)",
    match: (d) => d.getMonth() === 9,
  },
  {
    id: "junina",
    emoji: "🎇",
    title: "Arraiá da Diversão",
    message: "Bandeirinhas, pipoca e muita brincadeira!",
    color: "var(--sunny)",
    match: (d) => d.getMonth() === 5,
  },
  {
    id: "criancas",
    emoji: "🎈",
    title: "Mês das Crianças",
    message: "Estrelas em dobro na alegria de brincar!",
    color: "var(--bubblegum)",
    match: (d) => d.getMonth() === 9,
  },
  {
    id: "verao",
    emoji: "🏖",
    title: "Férias de Verão",
    message: "Hora de brincar na praia e tomar sorvete!",
    color: "var(--turquoise)",
    match: (d) => d.getMonth() === 0 || d.getMonth() === 1,
  },
  {
    id: "primavera",
    emoji: "🌸",
    title: "Festival das Flores",
    message: "Borboletas coloridas voando por toda parte!",
    color: "var(--grape)",
    match: (d) => d.getMonth() >= 8 && d.getMonth() <= 10,
  },
];

export function currentEvent(date = new Date()): SeasonEvent {
  const found = EVENTS.find((e) => e.match(date));
  const fallback: SeasonEvent = {
    id: "diversao",
    emoji: "🌈",
    title: "Semana da Diversão",
    message: "Novos jogos e surpresas esperando por você!",
    color: "var(--sky)",
  };
  if (!found) return fallback;
  const { match: _match, ...rest } = found;
  return rest;
}
