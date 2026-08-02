export type GameKind = "pop" | "memory" | "catch" | "paint" | "puzzle" | "race" | "bowling" | "sequence" | "count" | "whack" | "odd" | "order";

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
      g("melodia-castelo", "Siga a Melodia Real", "🎼", "sequence", "🎼"),
      g("conte-coroas", "Conte as Coroas", "👑", "count", "👑"),
      g("toca-castelo", "Toca-Toca do Dragão", "🐉", "whack", "🐉"),
      g("diferente-castelo", "Ache a Coroa Diferente", "👑", "odd", "👑"),
      g("ordem-castelo", "Torres em Ordem", "🏰", "order", "🏰"),
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
      g("quebra-circo", "Quebra-Cabeça do Circo", "🧩", "puzzle", "🎪"),
      g("conte-baloes", "Conte os Balões", "🎈", "count", "🎈"),
      g("toca-circo", "Toca-Toca do Palhaço", "🤡", "whack", "🤡"),
      g("diferente-circo", "Ache o Diferente do Circo", "🎪", "odd", "🎪"),
      g("ordem-circo", "Balões em Ordem", "🎈", "order", "🎈"),
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
      g("conte-sorvetes", "Conte os Sorvetes", "🍦", "count", "🍦"),
      g("toca-parque", "Toca-Toca do Parque", "🐿", "whack", "🐿"),
      g("diferente-parque", "Ache o Sorvete Diferente", "🍦", "odd", "🍦"),
      g("ordem-parque", "Rodas em Ordem", "🎡", "order", "🎡"),
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
      g("melodia-espaco", "Sinais do Espaço", "🎼", "sequence", "🎼"),
      g("conte-planetas", "Conte os Planetas", "🪐", "count", "🪐"),
      g("toca-espaco", "Toca-Toca Alienígena", "👽", "whack", "👽"),
      g("diferente-espaco", "Ache o Planeta Diferente", "🪐", "odd", "🪐"),
      g("ordem-espaco", "Foguetes em Ordem", "🚀", "order", "🚀"),
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
      g("conte-peixes", "Conte os Peixinhos", "🐠", "count", "🐠"),
      g("boliche-mar", "Boliche Submarino", "🎳", "bowling", "🎳"),
      g("toca-aquario", "Toca-Toca do Polvo", "🐙", "whack", "🐙"),
      g("diferente-aquario", "Ache o Peixe Diferente", "🐠", "odd", "🐠"),
      g("ordem-aquario", "Peixes em Ordem", "🐟", "order", "🐟"),
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
      g("conte-doces", "Conte os Docinhos", "🍬", "count", "🍬"),
      g("quebra-doces", "Quebra-Cabeça Doce", "🧩", "puzzle", "🧁"),
      g("toca-doces", "Toca-Toca dos Doces", "🍬", "whack", "🍬"),
      g("diferente-doces", "Ache o Doce Diferente", "🍭", "odd", "🍭"),
      g("ordem-doces", "Cupcakes em Ordem", "🧁", "order", "🧁"),
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
      g("conte-ovos", "Conte os Ovinhos", "🥚", "count", "🥚"),
      g("toca-dinos", "Toca-Toca do Dino", "🦖", "whack", "🦖"),
      g("diferente-dinos", "Ache o Dino Diferente", "🦕", "odd", "🦕"),
      g("ordem-dinos", "Dinos em Ordem", "🦕", "order", "🦕"),
      g("boliche-dinos", "Boliche dos Ossos", "🎳", "bowling", "🎳"),
      g("quebra-dinos", "Quebra-Cabeça Dino", "🧩", "puzzle", "🦖"),
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
      g("corrida-praia", "Corrida na Praia", "🏄", "race", "🏄"),
      g("conte-conchas", "Conte as Conchas", "🐚", "count", "🐚"),
      g("toca-praia", "Toca-Toca do Caranguejo", "🦀", "whack", "🦀"),
      g("diferente-praia", "Ache a Concha Diferente", "🐚", "odd", "🐚"),
      g("ordem-praia", "Castelos em Ordem", "🏖", "order", "🏖"),
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
    games: [
      g("pintura", "Pintura Livre", "🖌", "paint", "🎨"),
      g("conte-cores", "Conte os Pincéis", "🖍", "count", "🖍"),
      g("quebra-arte", "Quebra-Cabeça da Arte", "🧩", "puzzle", "🎨"),
      g("toca-atelie", "Toca-Toca das Tintas", "🎨", "whack", "🎨"),
      g("diferente-atelie", "Ache a Cor Diferente", "🖍", "odd", "🖍"),
      g("ordem-atelie", "Pincéis em Ordem", "🖌", "order", "🖌"),
      g("melodia-atelie", "Siga as Cores", "🎼", "sequence", "🎼"),
      g("baloes-tinta", "Estoure as Tintas", "🎈", "pop", "🎨"),
    ],
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
      g("melodia", "Siga a Melodia", "🎼", "sequence", "🎼"),
      g("conte-notas", "Conte as Notinhas", "🎵", "count", "🎵"),
      g("toca-teatro", "Toca-Toca dos Instrumentos", "🎺", "whack", "🎺"),
      g("diferente-teatro", "Ache a Nota Diferente", "🎵", "odd", "🎵"),
      g("ordem-teatro", "Notas em Ordem", "🎶", "order", "🎶"),
      g("quebra-teatro", "Quebra-Cabeça Musical", "🧩", "puzzle", "🎵"),
      g("pegue-notas", "Pegue as Notinhas", "🎼", "catch", "🎵"),
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
      g("conte-cogumelos", "Conte os Cogumelos", "🍄", "count", "🍄"),
      g("toca-bosque", "Toca-Toca do Esquilo", "🐿", "whack", "🐿"),
      g("diferente-bosque", "Ache o Cogumelo Diferente", "🍄", "odd", "🍄"),
      g("ordem-bosque", "Árvores em Ordem", "🌳", "order", "🌳"),
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
      g("melodia-fogueira", "Melodia da Fogueira", "🎼", "sequence", "🎼"),
      g("conte-estrelas", "Conte as Estrelas", "⭐", "count", "⭐"),
      g("boliche-acampamento", "Boliche do Acampamento", "🎳", "bowling", "🎳"),
      g("toca-acampamento", "Toca-Toca dos Vagalumes", "✨", "whack", "✨"),
      g("diferente-acampamento", "Ache a Barraca Diferente", "⛺", "odd", "⛺"),
      g("ordem-acampamento", "Fogueiras em Ordem", "🔥", "order", "🔥"),
      g("quebra-acampamento", "Quebra-Cabeça da Trilha", "🧩", "puzzle", "🏕"),
      g("memoria-acampamento", "Memória do Acampamento", "⛺", "memory", "⛺"),
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
