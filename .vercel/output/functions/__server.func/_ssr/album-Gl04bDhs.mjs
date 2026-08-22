import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as TopBar, h as useProgress, o as LivingSky } from "./TopBar-B1wDN1tI.mjs";
import { a as STICKERS } from "./router-B6EatmQW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/album-Gl04bDhs.js
var import_jsx_runtime = require_jsx_runtime();
function AlbumPage() {
	const { progress } = useProgress();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-hidden pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LivingSky, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, { back: "/" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative z-10 mx-auto w-full max-w-5xl px-4 pt-6 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-center text-3xl font-extrabold sm:text-4xl",
						children: "📖 Álbum das Descobertas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-center text-muted-foreground",
						children: [
							progress.stickers.length,
							" de ",
							STICKERS.length,
							" adesivos encontrados"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-8",
						children: STICKERS.map((sticker, i) => {
							const found = progress.stickers.includes(sticker);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `toy-card anim-pop flex aspect-square items-center justify-center text-4xl ${found ? "anim-float" : "opacity-40 grayscale"}`,
								style: { animationDelay: `${i * 25}ms` },
								children: found ? sticker : "❓"
							}, sticker + i);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "toy-card toy-press px-6 py-4 font-display text-xl font-extrabold hover:scale-105 active:scale-95",
							children: "🎠 Voltar para a cidade"
						})
					})
				]
			})
		]
	});
}
//#endregion
export { AlbumPage as component };
