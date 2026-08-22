import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { L as notFound, _ as Link, f as createRouter, g as createRootRouteWithContext, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { i as __exportAll } from "./server-DjzykUrx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kids-data-DKY75or5.js
var g = (id, name, emoji, kind, theme) => ({
	id,
	name,
	emoji,
	kind,
	theme
});
var WORLDS = [
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
			g("paint-castelo", "Pintura do Castelo", "🖌", "paint", "🏰"),
			g("corrida-castelo", "Corrida dos Cavaleiros", "🐴", "race", "🐴"),
			g("boliche-castelo", "Boliche do Rei", "🎳", "bowling", "🎳"),
			g("cor-castelo", "Cores do Reino", "🎨", "color", "🎨"),
			g("forma-castelo", "Formas do Castelo", "🔷", "shape", "🔷"),
			g("pares-castelo", "Pares Encantados", "🔗", "pairs", "🔗")
		]
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
			g("paint-circo", "Pintura do Palhaço", "🖌", "paint", "🤡"),
			g("corrida-circo", "Corrida no Picadeiro", "🎪", "race", "🎪"),
			g("melodia-circo", "Siga a Música do Circo", "🎼", "sequence", "🎼"),
			g("cor-circo", "Cores do Circo", "🎨", "color", "🎨"),
			g("forma-circo", "Formas Malabares", "🔷", "shape", "🔷"),
			g("pares-circo", "Pares do Circo", "🔗", "pairs", "🔗")
		]
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
			g("paint-parque", "Pintura no Parque", "🖌", "paint", "🎡"),
			g("quebra-parque", "Quebra-Cabeça do Parque", "🧩", "puzzle", "🎡"),
			g("melodia-parque", "Melodia do Carrossel", "🎼", "sequence", "🎼"),
			g("cor-parque", "Cores do Parque", "🎨", "color", "🎨"),
			g("forma-parque", "Formas do Parquinho", "🔷", "shape", "🔷"),
			g("pares-parque", "Pares do Parque", "🔗", "pairs", "🔗")
		]
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
			g("paint-espaco", "Pintura Estelar", "🖌", "paint", "🚀"),
			g("boliche-espaco", "Boliche Lunar", "🎳", "bowling", "🎳"),
			g("cor-espaco", "Cores dos Planetas", "🎨", "color", "🎨"),
			g("forma-espaco", "Formas Espaciais", "🔷", "shape", "🔷"),
			g("pares-espaco", "Pares do Espaço", "🔗", "pairs", "🔗")
		]
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
			g("paint-aquario", "Pintura do Fundo do Mar", "🖌", "paint", "🐠"),
			g("corrida-aquario", "Corrida do Golfinho", "🐬", "race", "🐬"),
			g("melodia-aquario", "Melodia das Ondas", "🎼", "sequence", "🎼"),
			g("cor-aquario", "Cores do Mar", "🎨", "color", "🎨"),
			g("forma-aquario", "Formas do Aquário", "🔷", "shape", "🔷"),
			g("pares-aquario", "Pares do Mar", "🔗", "pairs", "🔗")
		]
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
			g("paint-doces", "Pintura de Confeitaria", "🖌", "paint", "🧁"),
			g("boliche-doces", "Boliche de Pirulitos", "🎳", "bowling", "🎳"),
			g("melodia-doces", "Melodia Docinha", "🎼", "sequence", "🎼"),
			g("cor-doces", "Cores dos Doces", "🎨", "color", "🎨"),
			g("forma-doces", "Formas dos Biscoitos", "🔷", "shape", "🔷"),
			g("pares-doces", "Pares Doces", "🔗", "pairs", "🔗")
		]
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
			g("paint-dinos", "Pintura do Dino", "🖌", "paint", "🦖"),
			g("melodia-dinos", "Rugidos em Sequência", "🎼", "sequence", "🎼"),
			g("cor-dinos", "Cores dos Dinos", "🎨", "color", "🎨"),
			g("forma-dinos", "Formas Pré-Históricas", "🔷", "shape", "🔷"),
			g("pares-dinos", "Pares dos Dinos", "🔗", "pairs", "🔗")
		]
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
			g("paint-praia", "Pintura na Areia", "🖌", "paint", "🏖"),
			g("quebra-praia", "Quebra-Cabeça da Praia", "🧩", "puzzle", "🏖"),
			g("melodia-praia", "Melodia das Ondas do Mar", "🎼", "sequence", "🎼"),
			g("cor-praia", "Cores da Praia", "🎨", "color", "🎨"),
			g("forma-praia", "Formas de Areia", "🔷", "shape", "🔷"),
			g("pares-praia", "Pares da Praia", "🔗", "pairs", "🔗")
		]
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
			g("memoria-atelie", "Memória das Cores", "🎭", "memory", "🎨"),
			g("pegue-tintas", "Pegue os Pincéis", "🖌", "catch", "🖌"),
			g("corrida-atelie", "Corrida das Tintas", "🎨", "race", "🎨"),
			g("boliche-atelie", "Boliche de Tintas", "🎳", "bowling", "🎳"),
			g("cor-atelie", "Ache a Cor Certa", "🎨", "color", "🎨"),
			g("forma-atelie", "Formas Coloridas", "🔷", "shape", "🔷"),
			g("pares-atelie", "Pares do Ateliê", "🔗", "pairs", "🔗")
		]
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
			g("paint-teatro", "Pintura do Palco", "🖌", "paint", "🎵"),
			g("corrida-teatro", "Corrida dos Bailarinos", "🩰", "race", "🩰"),
			g("boliche-teatro", "Boliche do Palco", "🎳", "bowling", "🎳"),
			g("cor-teatro", "Cores do Palco", "🎨", "color", "🎨"),
			g("forma-teatro", "Formas Musicais", "🔷", "shape", "🔷"),
			g("pares-teatro", "Pares Musicais", "🔗", "pairs", "🔗")
		]
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
			g("paint-bosque", "Pintura do Bosque", "🖌", "paint", "🌳"),
			g("corrida-bosque", "Corrida na Trilha", "🐇", "race", "🐇"),
			g("boliche-bosque", "Boliche das Bolotas", "🎳", "bowling", "🎳"),
			g("melodia-bosque", "Melodia dos Passarinhos", "🎼", "sequence", "🎼"),
			g("cor-bosque", "Cores da Floresta", "🎨", "color", "🎨"),
			g("forma-bosque", "Formas do Bosque", "🔷", "shape", "🔷"),
			g("pares-bosque", "Pares do Bosque", "🔗", "pairs", "🔗")
		]
	},
	{
		id: "acampamento",
		name: "Acampamento",
		emoji: "🏕",
		color: "var(--orange)",
		x: 92,
		y: 74,
		size: .95,
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
			g("paint-acampamento", "Pintura da Barraca", "🖌", "paint", "🏕"),
			g("corrida-acampamento", "Corrida da Trilha", "🥾", "race", "🥾"),
			g("cor-acampamento", "Cores da Fogueira", "🎨", "color", "🎨"),
			g("forma-acampamento", "Formas da Barraca", "🔷", "shape", "🔷"),
			g("pares-acampamento", "Pares do Acampamento", "🔗", "pairs", "🔗")
		]
	}
];
WORLDS.flatMap((w) => w.games.map((game) => ({
	...game,
	worldId: w.id
})));
function findGame(gameId) {
	for (const world of WORLDS) {
		const game = world.games.find((item) => item.id === gameId);
		if (game) return {
			world,
			game
		};
	}
	return null;
}
var MASCOTS = [
	{
		emoji: "🐼",
		name: "Pablo Panda",
		line: "Trouxe um presente pra você!"
	},
	{
		emoji: "🦊",
		name: "Luna Raposa",
		line: "Vamos explorar juntos?"
	},
	{
		emoji: "🐵",
		name: "Nico Macaco",
		line: "Bagunça divertida chegando!"
	},
	{
		emoji: "🦁",
		name: "Leo",
		line: "Você é muito corajoso!"
	},
	{
		emoji: "🐰",
		name: "Bia",
		line: "Bora pular de alegria!"
	},
	{
		emoji: "🐸",
		name: "Pepe",
		line: "Achei um lugar secreto!"
	},
	{
		emoji: "🐻",
		name: "Tito",
		line: "Tem um baú pra abrir!"
	}
];
var STICKERS = [
	"🐶",
	"😺",
	"🐰",
	"🐼",
	"🦄",
	"🦖",
	"🐠",
	"🦋",
	"🐞",
	"🍓",
	"🍭",
	"🎁",
	"🎈",
	"🚗",
	"🚀",
	"🏰",
	"🎠",
	"🐧",
	"🦊",
	"🐻",
	"🐸",
	"🦁",
	"🌈",
	"⭐",
	"🍦",
	"🧁",
	"🎨",
	"🎵",
	"🪐",
	"🐚",
	"🍄",
	"🥥"
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-B6EatmQW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-D5-vucuC.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Lovable App" },
			{
				name: "description",
				content: "Lovable Generated Project"
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "Lovable App"
			},
			{
				property: "og:description",
				content: "Lovable Generated Project"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			},
			{
				name: "theme-color",
				content: "#7cd3f5"
			},
			{
				name: "mobile-web-app-capable",
				content: "yes"
			},
			{
				name: "apple-mobile-web-app-capable",
				content: "yes"
			},
			{
				name: "apple-mobile-web-app-title",
				content: "Jogos Kids"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;800&family=Nunito:wght@600;800&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/app-icon.png",
				type: "image/png"
			},
			{
				rel: "apple-touch-icon",
				href: "/app-icon.png"
			},
			{
				rel: "manifest",
				href: "/manifest.webmanifest"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pt-BR",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$6 = () => import("./routes-3XqAZOL1.mjs");
var Route$6 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Incríveis Jogos Kids — Universo da Diversão" },
		{
			name: "description",
			content: "Uma cidade mágica com dezenas de minijogos gratuitos para crianças de 3 a 8 anos: balões, memória, pintura e muito mais."
		},
		{
			property: "og:title",
			content: "Incríveis Jogos Kids — Universo da Diversão"
		},
		{
			property: "og:description",
			content: "Entre na cidade animada e brinque com dezenas de minijogos infantis grátis."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./album-Gl04bDhs.mjs");
var Route$5 = createFileRoute("/album")({
	head: () => ({ meta: [
		{ title: "Álbum das Descobertas — Incríveis Jogos Kids" },
		{
			name: "description",
			content: "Colecione adesivos fofos jogando os minijogos do Universo da Diversão."
		},
		{
			property: "og:title",
			content: "Álbum das Descobertas — Incríveis Jogos Kids"
		},
		{
			property: "og:description",
			content: "Veja todos os adesivos que você já desbloqueou."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./instalar-BwNcxiA0.mjs");
var Route$4 = createFileRoute("/instalar")({
	head: () => ({ meta: [
		{ title: "Instalar e jogar no celular ou PC — Incríveis Jogos Kids" },
		{
			name: "description",
			content: "Aprenda a instalar os Incríveis Jogos Kids no celular Android, iPhone, computador ou notebook e jogar em tela cheia."
		},
		{
			property: "og:title",
			content: "Instalar e jogar no celular ou PC — Incríveis Jogos Kids"
		},
		{
			property: "og:description",
			content: "Instale o app em qualquer aparelho e jogue em tela cheia, grátis."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./missoes-Df9RX0lr.mjs");
var Route$3 = createFileRoute("/missoes")({
	head: () => ({ meta: [
		{ title: "Missões e Conquistas — Incríveis Jogos Kids" },
		{
			name: "description",
			content: "Cumpra missões diárias, ganhe moedas e desbloqueie conquistas coloridas brincando todo dia."
		},
		{
			property: "og:title",
			content: "Missões e Conquistas — Incríveis Jogos Kids"
		},
		{
			property: "og:description",
			content: "Missões diárias e conquistas para brincar todos os dias."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./perfil-DsgmEuIF.mjs");
var Route$2 = createFileRoute("/perfil")({
	head: () => ({ meta: [
		{ title: "Meu Avatar e Pets — Incríveis Jogos Kids" },
		{
			name: "description",
			content: "Monte seu avatar, escolha chapéus e adote pets fofinhos com as estrelas conquistadas."
		},
		{
			property: "og:title",
			content: "Meu Avatar e Pets — Incríveis Jogos Kids"
		},
		{
			property: "og:description",
			content: "Personalize seu personagem e adote bichinhos divertidos."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./jogo._gameId-CUUysagT.mjs");
var Route$1 = createFileRoute("/jogo/$gameId")({
	loader: ({ params }) => {
		const found = findGame(params.gameId);
		if (!found) throw notFound();
		return found;
	},
	head: ({ loaderData }) => ({ meta: [
		{ title: `${loaderData?.game.name ?? "Jogo"} — Incríveis Jogos Kids` },
		{
			name: "description",
			content: `Brinque de ${loaderData?.game.name ?? "minijogo"} e ganhe estrelas e adesivos no Universo da Diversão.`
		},
		{
			property: "og:title",
			content: `${loaderData?.game.name ?? "Jogo"} — Incríveis Jogos Kids`
		},
		{
			property: "og:description",
			content: "Minijogo infantil gratuito, simples e divertido."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./mundo._worldId-ChSARRi0.mjs");
var Route = createFileRoute("/mundo/$worldId")({
	loader: ({ params }) => {
		const world = WORLDS.find((item) => item.id === params.worldId);
		if (!world) throw notFound();
		return world;
	},
	head: ({ loaderData }) => ({ meta: [
		{ title: `${loaderData?.name ?? "Mundo"} — Incríveis Jogos Kids` },
		{
			name: "description",
			content: `Minijogos divertidos do mundo ${loaderData?.name ?? ""} para crianças de 3 a 8 anos.`
		},
		{
			property: "og:title",
			content: `${loaderData?.name ?? "Mundo"} — Incríveis Jogos Kids`
		},
		{
			property: "og:description",
			content: "Escolha um minijogo e ganhe estrelas e adesivos."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AlbumRoute: Route$5.update({
		id: "/album",
		path: "/album",
		getParentRoute: () => Route$7
	}),
	InstalarRoute: Route$4.update({
		id: "/instalar",
		path: "/instalar",
		getParentRoute: () => Route$7
	}),
	MissoesRoute: Route$3.update({
		id: "/missoes",
		path: "/missoes",
		getParentRoute: () => Route$7
	}),
	PerfilRoute: Route$2.update({
		id: "/perfil",
		path: "/perfil",
		getParentRoute: () => Route$7
	}),
	JogoGameIdRoute: Route$1.update({
		id: "/jogo/$gameId",
		path: "/jogo/$gameId",
		getParentRoute: () => Route$7
	}),
	MundoWorldIdRoute: Route.update({
		id: "/mundo/$worldId",
		path: "/mundo/$worldId",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { STICKERS as a, MASCOTS as i, Route as n, WORLDS as o, Route$1 as r, router_exports as t };
