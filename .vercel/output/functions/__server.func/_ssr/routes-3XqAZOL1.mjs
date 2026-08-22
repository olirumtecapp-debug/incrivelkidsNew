import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as TopBar, l as currentEvent, o as LivingSky } from "./TopBar-B1wDN1tI.mjs";
import { i as MASCOTS, o as WORLDS } from "./router-B6EatmQW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-3XqAZOL1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MascotBubble() {
	const [index, setIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const timer = window.setInterval(() => {
			setIndex((value) => (value + 1) % MASCOTS.length);
		}, 5e3);
		return () => window.clearInterval(timer);
	}, []);
	const mascot = MASCOTS[index] ?? MASCOTS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed bottom-4 left-4 z-20 flex items-end gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-6xl anim-float select-none drop-shadow-lg",
			children: mascot.emoji
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "toy-card anim-pop max-w-[16rem] px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-base font-extrabold",
				children: mascot.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: mascot.line
			})]
		}, mascot.name)]
	});
}
function Index() {
	const event = currentEvent();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-hidden pb-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LivingSky, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative z-10 mx-auto w-full max-w-6xl px-4 pt-6 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-center text-3xl font-extrabold drop-shadow-sm sm:text-5xl",
						children: "Bem-vindo à Cidade da Diversão! 🎉"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-center text-base text-muted-foreground sm:text-lg",
						children: "Toque em um lugar para começar a brincar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "toy-card anim-pop mt-6 flex items-center gap-3 p-4",
						style: { background: `linear-gradient(120deg, color-mix(in oklab, ${event.color} 32%, white), white)` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-5xl anim-wiggle",
								children: event.emoji
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg font-extrabold sm:text-xl",
									children: event.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-bold text-muted-foreground",
									children: event.message
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/missoes",
								className: "toy-card toy-press px-4 py-3 font-display font-extrabold hover:scale-105 active:scale-95",
								children: ["🎯 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "Missões"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
						children: WORLDS.map((world, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/mundo/$worldId",
							params: { worldId: world.id },
							className: "toy-card toy-press anim-pop group flex flex-col items-center gap-2 p-5 text-center hover:-translate-y-2 hover:rotate-1 active:scale-95",
							style: {
								animationDelay: `${i * 45}ms`,
								background: `linear-gradient(160deg, color-mix(in oklab, ${world.color} 34%, white), color-mix(in oklab, ${world.color} 12%, white))`
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-6xl anim-float drop-shadow-md sm:text-7xl",
									style: { animationDelay: `${i * .2}s` },
									children: world.emoji
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg font-extrabold leading-tight sm:text-xl",
									children: world.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full bg-white/70 px-3 py-1 text-sm font-bold",
									children: [world.games.length, " jogos"]
								})
							]
						}, world.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "toy-card mt-8 flex flex-col items-center gap-3 p-5 text-center sm:flex-row sm:text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-5xl anim-float",
								children: "📲"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-lg font-extrabold sm:text-xl",
									children: "Jogue no celular, no tablet e no computador!"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-bold text-muted-foreground",
									children: "Dá para instalar como aplicativo no Android, iPhone, PC ou notebook — e jogar em tela cheia, de graça e sem anúncios."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/instalar",
								className: "toy-card toy-press px-5 py-3 font-display font-extrabold hover:scale-105 active:scale-95",
								children: "📥 Instalar / Como jogar"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MascotBubble, {})
		]
	});
}
//#endregion
export { Index as component };
