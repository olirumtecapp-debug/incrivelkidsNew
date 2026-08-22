import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { c as TopBar, f as playSound, m as useInstallPrompt, o as LivingSky, p as useFullscreen } from "./TopBar-B1wDN1tI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/instalar-BwNcxiA0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function InstalarPage() {
	const { canInstall, installed, install } = useInstallPrompt();
	const { isFullscreen, toggle } = useFullscreen();
	const [address, setAddress] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setAddress(window.location.origin);
	}, []);
	const copyAddress = async () => {
		try {
			await navigator.clipboard.writeText(address);
			playSound("coin");
			setCopied(true);
			window.setTimeout(() => setCopied(false), 2500);
		} catch {}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-hidden pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LivingSky, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, { back: "/" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative z-10 mx-auto w-full max-w-3xl px-4 pt-6 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-center text-3xl font-extrabold sm:text-4xl",
						children: "📲 Jogue no celular e no computador"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-center text-base font-bold text-muted-foreground",
						children: "Os Incríveis Jogos Kids funcionam em smartphone, tablet, PC e notebook — no navegador ou instalado como aplicativo."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "toy-card mt-6 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl font-extrabold",
								children: "🖥 Endereço para jogar no computador"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm font-bold text-muted-foreground",
								children: "Digite este endereço no navegador (Chrome, Edge ou Firefox) do PC ou notebook:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 break-all rounded-2xl bg-black/5 p-3 text-center font-mono text-sm font-bold",
								children: address || "carregando..."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: copyAddress,
								className: "toy-card toy-press mt-3 w-full px-5 py-3 font-display font-extrabold hover:scale-105 active:scale-95",
								children: copied ? "✅ Endereço copiado!" : "📋 Copiar endereço"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "toy-card mt-4 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl font-extrabold",
								children: "⛶ Tela cheia"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm font-bold text-muted-foreground",
								children: "Deixe o jogo ocupar a tela toda — ótimo para crianças pequenas. Dá para ativar e desativar quando quiser (no PC também funciona com a tecla F11)."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									playSound("click");
									toggle();
								},
								className: "toy-card toy-press mt-3 w-full px-5 py-4 font-display text-lg font-extrabold hover:scale-105 active:scale-95",
								style: { background: "linear-gradient(120deg, var(--turquoise), white)" },
								children: isFullscreen ? "🡼 Desativar tela cheia" : "⛶ Ativar tela cheia"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "toy-card mt-4 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl font-extrabold",
								children: "📥 Instalar o aplicativo"
							}),
							installed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm font-bold text-muted-foreground",
								children: "✅ O app já está instalado neste aparelho. É só abrir pelo ícone! 🎠"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									playSound("click");
									install();
								},
								disabled: !canInstall,
								className: "toy-card toy-press mt-3 w-full px-5 py-4 font-display text-lg font-extrabold hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100",
								style: { background: "linear-gradient(120deg, var(--bubblegum), white)" },
								children: canInstall ? "📲 Instalar agora" : "📲 Instalação manual (veja abaixo)"
							}), !canInstall && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs font-bold text-muted-foreground",
								children: "Se o botão estiver desativado, o seu navegador pede a instalação pelo menu — siga o passo a passo do seu aparelho."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 grid gap-3 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
										emoji: "🤖",
										title: "Android (Chrome)",
										steps: [
											"Abra o jogo no Chrome",
											"Toque no menu ⋮ no canto superior",
											"Escolha \"Instalar app\" ou \"Adicionar à tela inicial\"",
											"Confirme — o ícone aparece junto dos outros apps"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
										emoji: "🍎",
										title: "iPhone e iPad (Safari)",
										steps: [
											"Abra o jogo no Safari",
											"Toque no botão Compartilhar ⬆️",
											"Escolha \"Adicionar à Tela de Início\"",
											"Toque em \"Adicionar\""
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
										emoji: "💻",
										title: "PC / Notebook (Chrome ou Edge)",
										steps: [
											"Abra o endereço acima no navegador",
											"Clique no ícone de instalar 📥 na barra de endereço",
											"Ou vá em ⋮ → \"Instalar Incríveis Jogos Kids\"",
											"O jogo abre em janela própria, como um programa"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
										emoji: "🧭",
										title: "Outros navegadores",
										steps: [
											"Firefox e Opera: menu → Adicionar à tela inicial",
											"Sem instalar também funciona: basta salvar o endereço nos favoritos",
											"Use o botão ⛶ para jogar em tela cheia"
										]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "toy-card mt-4 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-extrabold",
							children: "🎮 Como jogar no computador"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-2 space-y-1 text-sm font-bold text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "🖱 Use o mouse: clicar é o mesmo que tocar na tela." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "⌨️ Nas corridas dá para usar as setas ⬅️ ➡️ do teclado." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "🔊 Ative o som no botão da barra de cima para ouvir as musiquinhas." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "⛶ F11 (ou o botão de tela cheia) deixa a brincadeira em tela inteira." })
							]
						})]
					})
				]
			})
		]
	});
}
function Card({ emoji, title, steps }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl bg-white/70 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-display text-lg font-extrabold",
			children: [
				emoji,
				" ",
				title
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-2 list-decimal space-y-1 pl-5 text-sm font-bold text-muted-foreground",
			children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: step }, step))
		})]
	});
}
//#endregion
export { InstalarPage as component };
