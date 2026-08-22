import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as DAILY_MISSIONS, c as TopBar, f as playSound, h as useProgress, l as currentEvent, o as LivingSky, t as ACHIEVEMENTS } from "./TopBar-B1wDN1tI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/missoes-Df9RX0lr.js
var import_jsx_runtime = require_jsx_runtime();
function MissoesPage() {
	const { progress, claimMission } = useProgress();
	const event = currentEvent();
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
						children: "Missões do Dia 🎯"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "toy-card mt-5 flex items-center gap-3 p-4",
						style: { background: `linear-gradient(120deg, color-mix(in oklab, ${event.color} 30%, white), white)` },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-5xl anim-wiggle",
							children: event.emoji
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg font-extrabold",
							children: event.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-bold text-muted-foreground",
							children: event.message
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-3",
						children: DAILY_MISSIONS.map((mission) => {
							const value = Math.min(mission.progress(progress.daily), mission.goal);
							const done = value >= mission.goal;
							const claimed = progress.daily.claimed.includes(mission.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "toy-card flex items-center gap-3 p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-4xl",
										children: mission.emoji
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-display text-lg font-extrabold leading-tight",
												children: mission.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-2 h-3 w-full overflow-hidden rounded-full bg-white/80",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-full rounded-full bg-primary transition-all",
													style: { width: `${value / mission.goal * 100}%` }
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 text-sm font-bold text-muted-foreground",
												children: [
													value,
													"/",
													mission.goal,
													" • prêmio 🪙 ",
													mission.reward
												]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										disabled: !done || claimed,
										onClick: () => {
											playSound("coin");
											claimMission(mission.id);
										},
										className: "toy-card toy-press px-4 py-3 font-display font-extrabold disabled:opacity-50",
										children: claimed ? "✅" : "🎁"
									})
								]
							}, mission.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-10 font-display text-2xl font-extrabold",
						children: "Conquistas 🏆"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3",
						children: ACHIEVEMENTS.map((achievement) => {
							const unlocked = progress.achievements.includes(achievement.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `toy-card flex flex-col items-center gap-1 p-4 text-center ${unlocked ? "" : "opacity-50 grayscale"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-4xl",
										children: unlocked ? achievement.emoji : "🔒"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-base font-extrabold leading-tight",
										children: achievement.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold text-muted-foreground",
										children: achievement.description
									})
								]
							}, achievement.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/perfil",
							className: "toy-card toy-press px-6 py-4 font-display text-lg font-extrabold",
							children: "🎨 Meu avatar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "toy-card toy-press px-6 py-4 font-display text-lg font-extrabold",
							children: "🏙 Cidade"
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { MissoesPage as component };
