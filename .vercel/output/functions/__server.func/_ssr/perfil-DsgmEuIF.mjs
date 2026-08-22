import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as TopBar, f as playSound, h as useProgress, i as AVATAR_HATS, n as AVATAR_COLORS, o as LivingSky, r as AVATAR_FACES, s as PETS } from "./TopBar-B1wDN1tI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/perfil-DsgmEuIF.js
var import_jsx_runtime = require_jsx_runtime();
function PerfilPage() {
	const { progress, setAvatar, buyPet, setActivePet } = useProgress();
	const hat = AVATAR_HATS.find((h) => h.id === progress.avatar.hat);
	const pet = PETS.find((p) => p.id === progress.activePet);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-hidden pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LivingSky, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, { back: "/" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative z-10 mx-auto w-full max-w-4xl px-4 pt-6 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-center text-3xl font-extrabold sm:text-4xl",
						children: "Meu Personagem 🎨"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "toy-card mx-auto mt-6 flex w-full max-w-sm flex-col items-center gap-2 p-6",
						style: { background: `linear-gradient(160deg, color-mix(in oklab, ${progress.avatar.color} 34%, white), white)` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [hat?.emoji && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-6 left-1/2 -translate-x-1/2 text-4xl",
									children: hat.emoji
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-8xl anim-float",
									children: progress.avatar.face
								})]
							}),
							pet && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-5xl anim-wiggle",
								children: pet.emoji
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full bg-white/80 px-4 py-1 font-display text-lg font-extrabold",
								children: [
									"🪙 ",
									progress.coins,
									" moedas"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "Escolha o rostinho 😊",
						children: AVATAR_FACES.map((face) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							active: progress.avatar.face === face,
							onClick: () => {
								playSound("click");
								setAvatar({ face });
							},
							label: `Rosto ${face}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-4xl",
								children: face
							})
						}, face))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "Chapéu 🎩",
						children: AVATAR_HATS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							active: progress.avatar.hat === item.id,
							onClick: () => {
								playSound("click");
								setAvatar({ hat: item.id });
							},
							label: item.label,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-4xl",
								children: item.emoji || "🚫"
							})
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "Cor favorita 🌈",
						children: AVATAR_COLORS.map((color) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							active: progress.avatar.color === color,
							onClick: () => {
								playSound("click");
								setAvatar({ color });
							},
							label: "Cor do avatar",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block h-10 w-10 rounded-full",
								style: { background: color }
							})
						}, color))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "Adote um pet 🐾",
						children: PETS.map((item) => {
							const owned = progress.pets.includes(item.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									if (owned) {
										playSound("click");
										setActivePet(progress.activePet === item.id ? null : item.id);
									} else if (progress.coins >= item.price) {
										playSound("coin");
										buyPet(item.id, item.price);
									} else playSound("wrong");
								},
								className: `toy-card toy-press flex w-28 flex-col items-center gap-1 p-3 active:scale-95 ${progress.activePet === item.id ? "ring-4 ring-primary" : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-4xl",
										children: item.emoji
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-sm font-extrabold",
										children: item.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-white/80 px-2 py-0.5 text-xs font-bold",
										children: owned ? progress.activePet === item.id ? "Comigo ✅" : "Escolher" : `🪙 ${item.price}`
									})
								]
							}, item.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/missoes",
							className: "toy-card toy-press px-6 py-4 font-display text-lg font-extrabold",
							children: "🎯 Missões"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/album",
							className: "toy-card toy-press px-6 py-4 font-display text-lg font-extrabold",
							children: "📖 Álbum"
						})]
					})
				]
			})
		]
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl font-extrabold sm:text-2xl",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex flex-wrap justify-center gap-3",
			children
		})]
	});
}
function Choice({ active, onClick, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick,
		"aria-label": label,
		"aria-pressed": active,
		className: `toy-card toy-press p-3 active:scale-95 ${active ? "ring-4 ring-primary" : ""}`,
		children
	});
}
//#endregion
export { PerfilPage as component };
