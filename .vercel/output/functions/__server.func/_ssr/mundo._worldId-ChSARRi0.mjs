import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as TopBar, o as LivingSky } from "./TopBar-B1wDN1tI.mjs";
import { n as Route } from "./router-B6EatmQW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mundo._worldId-ChSARRi0.js
var import_jsx_runtime = require_jsx_runtime();
function WorldPage() {
	const world = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-hidden pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LivingSky, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, { back: "/" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative z-10 mx-auto w-full max-w-5xl px-4 pt-6 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-7xl anim-float drop-shadow-md",
							children: world.emoji
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display mt-2 text-3xl font-extrabold sm:text-4xl",
							children: world.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: "Escolha uma brincadeira!"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: world.games.map((game, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/jogo/$gameId",
						params: { gameId: game.id },
						className: "toy-card toy-press anim-pop flex items-center gap-4 p-5 hover:-translate-y-1 active:scale-95",
						style: {
							animationDelay: `${i * 60}ms`,
							background: `linear-gradient(150deg, color-mix(in oklab, ${world.color} 30%, white), white)`
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-5xl anim-wiggle",
							children: game.emoji
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-extrabold leading-tight",
							children: game.name
						})]
					}, game.id))
				})]
			})
		]
	});
}
//#endregion
export { WorldPage as component };
