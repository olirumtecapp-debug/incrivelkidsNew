export type GameKind = "pop" | "memory" | "catch" | "paint" | "puzzle" | "race" | "bowling";

export type MiniGame = {
  id: string;
  name: string;
  emoji: string;
  kind: GameKind;
  theme: string;
};

export type World = {
  id: string;
  name: string;
  emoji: string;
  color: string;
  x: number;
  y: number;
  size: number;
  games: MiniGame[];
};

const g = (id: string, name: string, emoji: string, kind: GameKind, theme: string): MiniGame => ({
  id,
  name,
  emoji,
  kind,
  theme,
});

export const WORLDS: World[] = [
  {
    id: "castelo",
    name: "Castelo",
    emoji: "🏰",
    color: "var(--grape)",
    x: 12,
    y: 18,
    size: 1.1,
    games: [
      g("baloes", "Estoure os Balões", "🎈", "pop", "🎈🎈"),
      g("unicornio", "Memória do Unicórnio", "🦄", "memory", "🦄"),
      g("estrelas", "Chuva de Estrelas", "⭐", "catch", "⭐"),
      g("quebra-castelo", "Quebra-Cabeça Real", "🧩", "puzzle", "👑"),
    ],
  },
  {
    id: "circo",
    name: "Circo",
    emoji: "🎪",
    color: "var(--bubblegum)",
    x: 34,
    y: 10,
    size: 1,
    games: [
      g("bolhas", "Estoure as Bolhas", "🫧", "pop", "🫧"),
      g("palhaco", "Memória do Circo", "🤡", "memory", "🎪"),
      g("pipoca", "Pegue a Pipoca", "🍿", "catch", "🍿"),
      g("boliche-circo", "Boliche do Circo", "🎳", "bowling", "🎳"),
    ],
  },
  {
    id: "parque",
    name: "Parque",
    emoji: "🎡",
    color: "var(--turquoise)",
    x: 58,
    y: 16,
    size: 1.05,
    games: [
      g("joaninhas", "Capture Joaninhas", "🐞", "pop", "🐞"),
      g("carrossel", "Memória do Carrossel", "🎠", "memory", "🎠"),
      g("sorvete", "Pegue os Sorvetes", "🍦", "catch", "🍦"),
      g("corrida-carrinho", "Corrida de Carrinho", "🏎", "race", "🏎"),
      g("boliche-parque", "Boliche Maluco", "🎳", "bowling", "🎳"),
    ],
  },
  {
    id: "espaco",
    name: "Centro Espacial",
    emoji: "🚀",
    color: "var(--sky)",
    x: 80,
    y: 12,
    size: 1,
    games: [
      g("estrelinhas", "Toque nas Estrelinhas", "✨", "pop", "✨"),
      g("planetas", "Memória dos Planetas", "🪐", "memory", "🪐"),
      g("meteoros", "Colete Cometas", "☄️", "catch", "☄️"),
      g("corrida-foguete", "Corrida Espacial", "🚀", "race", "🚀"),
      g("quebra-espaco", "Quebra-Cabeça Espacial", "🧩", "puzzle", "🪐"),
    ],
  },
  {
    id: "aquario",
    name: "Aquário",
    emoji: "🐠",
    color: "var(--turquoise)",
    x: 16,
    y: 46,
    size: 1,
    games: [
      g("peixinhos", "Pesque os Peixinhos", "🐠", "pop", "🐠"),
      g("conchas", "Memória do Mar", "🐚", "memory", "🐚"),
      g("bolhinhas", "Pegue as Bolhinhas", "🫧", "catch", "🫧"),
      g("quebra-mar", "Quebra-Cabeça do Mar", "🧩", "puzzle", "🐠"),
    ],
  },
  {
    id: "doces",
    name: "Cidade dos Doces",
    emoji: "🍭",
    color: "var(--bubblegum)",
    x: 40,
    y: 50,
    size: 1.05,
    games: [
      g("caca-doces", "Caça aos Doces", "🍬", "pop", "🍬"),
      g("cupcakes", "Memória dos Cupcakes", "🧁", "memory", "🧁"),
      g("frutas", "Pegue as Frutas", "🍓", "catch", "🍓"),
      g("corrida-doce", "Corrida dos Doces", "🍭", "race", "🍭"),
    ],
  },
  {
    id: "dinos",
    name: "Vale dos Dinos",
    emoji: "🦖",
    color: "var(--grass)",
    x: 64,
    y: 48,
    size: 1,
    games: [
      g("ovos", "Ache os Ovinhos", "🥚", "pop", "🥚"),
      g("dinos-mem", "Memória dos Dinos", "🦕", "memory", "🦕"),
      g("folhas", "Pegue as Folhinhas", "🍃", "catch", "🍃"),
      g("corrida-dino", "Corrida do Dino", "🦖", "race", "🦖"),
    ],
  },
  {
    id: "praia",
    name: "Praia",
    emoji: "🏖",
    color: "var(--sunny)",
    x: 86,
    y: 44,
    size: 1,
    games: [
      g("caranguejos", "Cutuque os Caranguejos", "🦀", "pop", "🦀"),
      g("praia-mem", "Memória da Praia", "🏝", "memory", "🏝"),
      g("cocos", "Pegue os Cocos", "🥥", "catch", "🥥"),
      g("boliche-praia", "Boliche na Areia", "🎳", "bowling", "🎳"),
    ],
  },
  {
    id: "atelie",
    name: "Ateliê",
    emoji: "🎨",
    color: "var(--orange)",
    x: 26,
    y: 76,
    size: 1.05,
    games: [g("pintura", "Pintura Livre", "🖌", "paint", "🎨")],
  },
  {
    id: "teatro",
    name: "Teatro Musical",
    emoji: "🎵",
    color: "var(--grape)",
    x: 50,
    y: 80,
    size: 1,
    games: [
      g("notas", "Toque nas Notinhas", "🎶", "pop", "🎵"),
      g("instrumentos", "Memória Musical", "🥁", "memory", "🥁"),
    ],
  },
  {
    id: "bosque",
    name: "Bosque Encantado",
    emoji: "🌳",
    color: "var(--grass)",
    x: 72,
    y: 78,
    size: 1,
    games: [
      g("borboletas", "Capture Borboletas", "🦋", "pop", "🦋"),
      g("cogumelos", "Memória do Bosque", "🍄", "memory", "🍄"),
      g("bolotas", "Pegue as Bolotas", "🌰", "catch", "🌰"),
      g("quebra-bosque", "Quebra-Cabeça do Bosque", "🧩", "puzzle", "🍄"),
    ],
  },
  {
    id: "acampamento",
    name: "Acampamento",
    emoji: "🏕",
    color: "var(--orange)",
    x: 92,
    y: 74,
    size: 0.95,
    games: [
      g("vagalumes", "Toque nos Vagalumes", "🪰", "pop", "✨"),
      g("marshmallow", "Pegue os Marshmallows", "🍡", "catch", "🍡"),
    ],
  },
];

export const ALL_GAMES = WORLDS.flatMap((w) => w.games.map((game) => ({ ...game, worldId: w.id })));

export function findGame(gameId: string) {
  for (const world of WORLDS) {
    const game = world.games.find((item) => item.id === gameId);
    if (game) return { world, game };
  }
  return null;
}

export const MASCOTS = [
  { emoji: "🐼", name: "Pablo Panda", line: "Trouxe um presente pra você!" },
  { emoji: "🦊", name: "Luna Raposa", line: "Vamos explorar juntos?" },
  { emoji: "🐵", name: "Nico Macaco", line: "Bagunça divertida chegando!" },
  { emoji: "🦁", name: "Leo", line: "Você é muito corajoso!" },
  { emoji: "🐰", name: "Bia", line: "Bora pular de alegria!" },
  { emoji: "🐸", name: "Pepe", line: "Achei um lugar secreto!" },
  { emoji: "🐻", name: "Tito", line: "Tem um baú pra abrir!" },
];

export const STICKERS = [
  "🐶", "😺", "🐰", "🐼", "🦄", "🦖", "🐠", "🦋", "🐞", "🍓", "🍭", "🎁",
  "🎈", "🚗", "🚀", "🏰", "🎠", "🐧", "🦊", "🐻", "🐸", "🦁", "🌈", "⭐",
  "🍦", "🧁", "🎨", "🎵", "🪐", "🐚", "🍄", "🥥",
];
