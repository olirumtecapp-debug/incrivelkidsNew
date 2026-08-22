import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { c as TopBar, d as playNote, f as playSound, h as useProgress, o as LivingSky, u as playInstrument } from "./TopBar-B1wDN1tI.mjs";
import { a as STICKERS, r as Route$1 } from "./router-B6EatmQW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/jogo._gameId-CUUysagT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function WinScreen({ stars, sticker, onReplay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 rounded-3xl bg-white/70 backdrop-blur-md",
		children: [
			[
				"🎉",
				"✨",
				"🎊",
				"⭐",
				"🎈",
				"🌈"
			].map((emoji, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "absolute text-4xl anim-rise",
				style: {
					left: `${8 + i * 15}%`,
					animationDuration: `${5 + i}s`,
					animationDelay: `-${i * .6}s`
				},
				children: emoji
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "anim-pop text-7xl",
				children: sticker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-extrabold",
				children: "Muito bem! 🎉"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-lg font-bold",
				children: [
					"Você ganhou ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl",
						children: "⭐"
					}),
					" ",
					stars,
					" estrelas e um adesivo novo!"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onReplay,
				className: "toy-card toy-press px-6 py-4 font-display text-xl font-extrabold hover:scale-105 active:scale-95",
				children: "🔁 Jogar de novo"
			})
		]
	});
}
function ScoreBar({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "toy-card flex items-center gap-2 px-4 py-2 font-display text-lg font-extrabold",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: value })]
	});
}
var TARGET$1 = 14;
function PopGame({ emoji, sticker, music = false, onWin }) {
	const [bubbles, setBubbles] = (0, import_react.useState)([]);
	const [score, setScore] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const nextId = (0, import_react.useRef)(0);
	const spawn = (0, import_react.useCallback)(() => {
		setBubbles((current) => {
			const alive = current.filter((bubble) => !bubble.popped);
			if (alive.length > 7) return alive;
			nextId.current += 1;
			return [...alive, {
				id: nextId.current,
				x: 6 + Math.random() * 82,
				y: 8 + Math.random() * 74,
				size: 46 + Math.random() * 44,
				popped: false
			}];
		});
	}, []);
	(0, import_react.useEffect)(() => {
		if (done) return;
		const timer = window.setInterval(spawn, 750);
		spawn();
		return () => window.clearInterval(timer);
	}, [spawn, done]);
	const pop = (id) => {
		setBubbles((current) => current.map((b) => b.id === id ? {
			...b,
			popped: true
		} : b));
		setScore((value) => {
			const next = value + 1;
			if (next >= TARGET$1 && !done) {
				setDone(true);
				playSound("win");
				onWin(10);
			}
			return next;
		});
	};
	const replay = () => {
		setScore(0);
		setBubbles([]);
		setDone(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-[62vh] min-h-[380px] w-full overflow-hidden rounded-3xl border-4 border-white/70 bg-gradient-to-b from-sky/40 to-turquoise/30 shadow-[var(--shadow-soft)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-3 top-3 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
					label: "🫧",
					value: `${score}/${TARGET$1}`
				})
			}),
			bubbles.map((bubble) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onPointerDown: (e) => {
					e.preventDefault();
					if (music) playNote(bubble.id % 8);
					else playSound("pop");
					pop(bubble.id);
				},
				"aria-label": "Estourar",
				className: `absolute anim-pop select-none transition-transform duration-200 active:scale-125 touch-none ${bubble.popped ? "pointer-events-none scale-0 opacity-0" : "anim-float"}`,
				style: {
					left: `${bubble.x}%`,
					top: `${bubble.y}%`,
					fontSize: bubble.size
				},
				children: emoji
			}, bubble.id)),
			done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinScreen, {
				stars: 10,
				sticker,
				onReplay: replay
			})
		]
	});
}
var TARGET = 12;
function CatchGame({ emoji, sticker, onWin }) {
	const [items, setItems] = (0, import_react.useState)([]);
	const [score, setScore] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const nextId = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		if (done) return;
		const timer = window.setInterval(() => {
			nextId.current += 1;
			const id = nextId.current;
			setItems((current) => [...current.slice(-9), {
				id,
				x: 5 + Math.random() * 85,
				emoji,
				duration: 3.4 + Math.random() * 2.2
			}]);
		}, 620);
		return () => window.clearInterval(timer);
	}, [emoji, done]);
	const catchItem = (id) => {
		setItems((current) => current.filter((item) => item.id !== id));
		setScore((value) => {
			const next = value + 1;
			if (next >= TARGET && !done) {
				setDone(true);
				playSound("win");
				onWin(10);
			}
			return next;
		});
	};
	const replay = () => {
		setScore(0);
		setItems([]);
		setDone(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-[62vh] min-h-[380px] w-full overflow-hidden rounded-3xl border-4 border-white/70 bg-gradient-to-b from-sunny/40 to-grass/30 shadow-[var(--shadow-soft)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-3 top-3 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
					label: "🧺",
					value: `${score}/${TARGET}`
				})
			}),
			items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onPointerDown: (e) => {
					e.preventDefault();
					playSound("pop");
					catchItem(item.id);
				},
				"aria-label": "Pegar",
				className: "absolute -top-16 select-none text-6xl active:scale-125 touch-none",
				style: {
					left: `${item.x}%`,
					animation: `fall ${item.duration}s linear forwards`
				},
				children: item.emoji
			}, item.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 right-0 h-10 bg-white/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `@keyframes fall { to { transform: translateY(70vh); } }` }),
			done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinScreen, {
				stars: 10,
				sticker,
				onReplay: replay
			})
		]
	});
}
function buildDeck(pool) {
	const picked = pool.slice(0, 6);
	return [...picked, ...picked].map((emoji, i) => ({
		emoji,
		key: `${emoji}-${i}`,
		sort: Math.random()
	})).sort((a, b) => a.sort - b.sort).map(({ emoji, key }) => ({
		emoji,
		key
	}));
}
function MemoryGame({ pool, sticker, instruments = false, onWin }) {
	const [round, setRound] = (0, import_react.useState)(0);
	const deck = (0, import_react.useMemo)(() => buildDeck(pool), [pool, round]);
	const [flipped, setFlipped] = (0, import_react.useState)([]);
	const [matched, setMatched] = (0, import_react.useState)([]);
	const [locked, setLocked] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	const flip = (card) => {
		if (locked || flipped.includes(card.key) || matched.includes(card.emoji)) return;
		const next = [...flipped, card.key];
		setFlipped(next);
		if (next.length < 2) return;
		const first = deck.find((item) => item.key === next[0]);
		const second = deck.find((item) => item.key === next[1]);
		if (first && second && first.emoji === second.emoji) {
			const nextMatched = [...matched, first.emoji];
			setMatched(nextMatched);
			setFlipped([]);
			if (nextMatched.length === 6) {
				setDone(true);
				playSound("win");
				onWin(12);
			}
			return;
		}
		setLocked(true);
		window.setTimeout(() => {
			setFlipped([]);
			setLocked(false);
		}, 800);
	};
	const replay = () => {
		setFlipped([]);
		setMatched([]);
		setDone(false);
		setRound((value) => value + 1);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full rounded-3xl border-4 border-white/70 bg-gradient-to-b from-bubblegum/30 to-grape/20 p-4 shadow-[var(--shadow-soft)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
					label: "🧠",
					value: `${matched.length}/6 pares`
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-lg grid-cols-4 gap-3",
				children: deck.map((card) => {
					const open = flipped.includes(card.key) || matched.includes(card.emoji);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onPointerDown: (e) => {
							e.preventDefault();
							if (instruments) playInstrument(card.emoji, deck.indexOf(card) % 6);
							else playSound("click");
							flip(card);
						},
						"aria-label": open ? card.emoji : "Carta virada",
						className: `toy-card flex aspect-square items-center justify-center text-4xl transition-transform duration-200 active:scale-95 ${open ? "anim-pop" : "hover:scale-105"}`,
						style: { background: open ? "white" : "var(--gradient-candy)" },
						children: open ? card.emoji : "❔"
					}, card.key);
				})
			}),
			done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinScreen, {
				stars: 12,
				sticker,
				onReplay: replay
			})
		]
	});
}
var COLORS$1 = [
	"#38bdf8",
	"#2dd4bf",
	"#4ade80",
	"#facc15",
	"#fb923c",
	"#f472b6",
	"#a78bfa",
	"#111827"
];
function PaintGame({ onWin }) {
	const canvasRef = (0, import_react.useRef)(null);
	const drawing = (0, import_react.useRef)(false);
	const rewarded = (0, import_react.useRef)(false);
	const [color, setColor] = (0, import_react.useState)(COLORS$1[0]);
	const [size, setSize] = (0, import_react.useState)(14);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const rect = canvas.getBoundingClientRect();
		canvas.width = rect.width * 2;
		canvas.height = rect.height * 2;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		ctx.scale(2, 2);
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(0, 0, rect.width, rect.height);
	}, []);
	const point = (event) => {
		const canvas = canvasRef.current;
		if (!canvas) return null;
		const rect = canvas.getBoundingClientRect();
		return {
			x: event.clientX - rect.left,
			y: event.clientY - rect.top
		};
	};
	const start = (event) => {
		drawing.current = true;
		event.currentTarget.setPointerCapture(event.pointerId);
		move(event);
	};
	const move = (event) => {
		if (!drawing.current) return;
		const ctx = canvasRef.current?.getContext("2d");
		const position = point(event);
		if (!ctx || !position) return;
		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.arc(position.x, position.y, size / 2, 0, Math.PI * 2);
		ctx.fill();
		if (!rewarded.current) {
			rewarded.current = true;
			onWin(8);
		}
	};
	const stop = () => {
		drawing.current = false;
	};
	const clear = () => {
		const canvas = canvasRef.current;
		const ctx = canvas?.getContext("2d");
		if (!canvas || !ctx) return;
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex flex-wrap items-center justify-center gap-2",
			children: [
				COLORS$1.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setColor(item),
					"aria-label": `Cor ${item}`,
					className: `h-12 w-12 rounded-full border-4 transition-transform active:scale-90 ${color === item ? "scale-110 border-white shadow-[var(--shadow-soft)]" : "border-white/60"}`,
					style: { backgroundColor: item }
				}, item)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setSize(size === 14 ? 32 : 14),
					className: "toy-card px-4 py-3 font-display text-base font-extrabold active:scale-95",
					children: size === 14 ? "🖌 Fino" : "🖍 Grosso"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: clear,
					className: "toy-card px-4 py-3 font-display text-base font-extrabold active:scale-95",
					children: "🧽 Limpar"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			onPointerDown: start,
			onPointerMove: move,
			onPointerUp: stop,
			onPointerLeave: stop,
			className: "h-[58vh] min-h-[340px] w-full touch-none rounded-3xl border-4 border-white/80 bg-white shadow-[var(--shadow-soft)]"
		})]
	});
}
var SIZE = 3;
function shuffled() {
	const base = Array.from({ length: 9 }, (_, i) => i);
	for (let i = base.length - 2; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[base[i], base[j]] = [base[j], base[i]];
	}
	return base;
}
function PuzzleGame({ theme, sticker, onWin }) {
	const [tiles, setTiles] = (0, import_react.useState)(() => shuffled());
	const [moves, setMoves] = (0, import_react.useState)(0);
	const [won, setWon] = (0, import_react.useState)(false);
	const emptyIndex = tiles.indexOf(8);
	const solved = (0, import_react.useMemo)(() => tiles.every((tile, index) => tile === index), [tiles]);
	(0, import_react.useEffect)(() => {
		if (solved && moves > 0 && !won) {
			setWon(true);
			playSound("win");
			onWin(12);
		}
	}, [
		solved,
		moves,
		won,
		onWin
	]);
	const move = (0, import_react.useCallback)((index) => {
		if (won) return;
		if (Math.abs(Math.floor(index / SIZE) - Math.floor(emptyIndex / SIZE)) + Math.abs(index % SIZE - emptyIndex % SIZE) !== 1) return;
		setTiles((current) => {
			const next = [...current];
			[next[index], next[emptyIndex]] = [next[emptyIndex], next[index]];
			return next;
		});
		setMoves((m) => m + 1);
		playSound("click");
	}, [emptyIndex, won]);
	const replay = () => {
		setTiles(shuffled());
		setMoves(0);
		setWon(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto mt-6 w-full max-w-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 flex justify-center gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
					label: "🧩",
					value: `${moves} jogadas`
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "toy-card grid aspect-square grid-cols-3 gap-2 p-3",
				children: tiles.map((tile, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => move(index),
					"aria-label": `Peça ${tile + 1}`,
					className: `flex items-center justify-center rounded-2xl text-4xl font-extrabold transition sm:text-5xl ${tile === 8 ? "bg-transparent" : "bg-white/80 shadow-md hover:scale-105 active:scale-95"}`,
					children: [tile === 8 ? "" : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: theme }), tile !== 8 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-1 text-base font-bold text-muted-foreground",
						children: tile + 1
					})]
				}, index))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-center font-bold text-muted-foreground",
				children: "Coloque os números em ordem de 1 a 8!"
			}),
			won && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinScreen, {
				stars: 12,
				sticker,
				onReplay: replay
			})
		]
	});
}
var LANES = 3;
var GOAL$1 = 12;
function RaceGame({ theme, sticker, onWin }) {
	const [lane, setLane] = (0, import_react.useState)(1);
	const [items, setItems] = (0, import_react.useState)([]);
	const [collected, setCollected] = (0, import_react.useState)(0);
	const [lives, setLives] = (0, import_react.useState)(3);
	const [won, setWon] = (0, import_react.useState)(false);
	const idRef = (0, import_react.useRef)(0);
	const laneRef = (0, import_react.useRef)(1);
	laneRef.current = lane;
	const over = won || lives <= 0;
	(0, import_react.useEffect)(() => {
		if (over) return;
		const spawn = window.setInterval(() => {
			idRef.current += 1;
			setItems((current) => [...current, {
				id: idRef.current,
				lane: Math.floor(Math.random() * LANES),
				y: -10,
				kind: Math.random() > .45 ? "coin" : "rock"
			}]);
		}, 750);
		return () => window.clearInterval(spawn);
	}, [over]);
	(0, import_react.useEffect)(() => {
		if (over) return;
		const tick = window.setInterval(() => {
			setItems((current) => {
				const next = [];
				for (const item of current) {
					const y = item.y + 4;
					if (y > 78 && y < 92 && item.lane === laneRef.current) {
						if (item.kind === "coin") {
							playSound("pop");
							setCollected((c) => c + 1);
						} else {
							playSound("wrong");
							setLives((l) => l - 1);
						}
						continue;
					}
					if (y < 110) next.push({
						...item,
						y
					});
				}
				return next;
			});
		}, 60);
		return () => window.clearInterval(tick);
	}, [over]);
	(0, import_react.useEffect)(() => {
		if (collected >= GOAL$1 && !won) {
			setWon(true);
			playSound("win");
			onWin(14);
		}
	}, [
		collected,
		won,
		onWin
	]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "ArrowLeft") setLane((l) => Math.max(0, l - 1));
			if (e.key === "ArrowRight") setLane((l) => Math.min(2, l + 1));
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	const replay = (0, import_react.useCallback)(() => {
		setItems([]);
		setCollected(0);
		setLives(3);
		setWon(false);
		setLane(1);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto mt-6 w-full max-w-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
					label: "🪙",
					value: `${collected}/${GOAL$1}`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
					label: "❤️",
					value: `${Math.max(0, lives)}`
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "toy-card relative h-[420px] overflow-hidden bg-gradient-to-b from-white/70 to-white/30",
				children: [
					[1, 2].map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute top-0 h-full border-l-4 border-dashed border-white/70",
						style: { left: `${line / LANES * 100}%` }
					}, line)),
					items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "absolute text-4xl",
						style: {
							left: `${(item.lane + .5) * (100 / LANES)}%`,
							top: `${item.y}%`,
							transform: "translate(-50%,-50%)"
						},
						children: item.kind === "coin" ? "🪙" : "🪨"
					}, item.id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "absolute bottom-6 text-5xl transition-all duration-150",
						style: {
							left: `${(lane + .5) * (100 / LANES)}%`,
							transform: "translateX(-50%)"
						},
						children: theme
					}),
					lives <= 0 && !won && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-white/70 backdrop-blur-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-6xl",
								children: "😅"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl font-extrabold",
								children: "Quase lá! Tente de novo"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: replay,
								className: "toy-card toy-press px-6 py-4 font-display text-xl font-extrabold",
								children: "🔁 Jogar de novo"
							})
						]
					}),
					won && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinScreen, {
						stars: 14,
						sticker,
						onReplay: replay
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex justify-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setLane((l) => Math.max(0, l - 1)),
					"aria-label": "Ir para a esquerda",
					className: "toy-card toy-press px-8 py-4 text-3xl active:scale-95",
					children: "⬅️"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setLane((l) => Math.min(2, l + 1)),
					"aria-label": "Ir para a direita",
					className: "toy-card toy-press px-8 py-4 text-3xl active:scale-95",
					children: "➡️"
				})]
			})
		]
	});
}
var ROUNDS$7 = 3;
function BowlingGame({ sticker, onWin }) {
	const [aim, setAim] = (0, import_react.useState)(50);
	const [rolling, setRolling] = (0, import_react.useState)(false);
	const [ballY, setBallY] = (0, import_react.useState)(0);
	const [round, setRound] = (0, import_react.useState)(1);
	const [score, setScore] = (0, import_react.useState)(0);
	const [pinsDown, setPinsDown] = (0, import_react.useState)([]);
	const [won, setWon] = (0, import_react.useState)(false);
	const dirRef = (0, import_react.useRef)(1);
	const pins = [
		20,
		35,
		50,
		65,
		80,
		42.5,
		57.5,
		50
	].slice(0, 6);
	(0, import_react.useEffect)(() => {
		if (rolling || won) return;
		const timer = window.setInterval(() => {
			setAim((value) => {
				let next = value + dirRef.current * 2.5;
				if (next > 88) {
					next = 88;
					dirRef.current = -1;
				}
				if (next < 12) {
					next = 12;
					dirRef.current = 1;
				}
				return next;
			});
		}, 40);
		return () => window.clearInterval(timer);
	}, [rolling, won]);
	const roll = (0, import_react.useCallback)(() => {
		if (rolling || won) return;
		setRolling(true);
		playSound("roll");
		let y = 0;
		const timer = window.setInterval(() => {
			y += 6;
			setBallY(y);
			if (y >= 100) {
				window.clearInterval(timer);
				const hit = pins.map((x, i) => ({
					x,
					i
				})).filter(({ x }) => Math.abs(x - aim) < 12).map(({ i }) => i);
				setPinsDown(hit);
				setScore((s) => s + hit.length);
				playSound(hit.length ? "pop" : "wrong");
				window.setTimeout(() => {
					setBallY(0);
					setPinsDown([]);
					setRolling(false);
					setRound((r) => r + 1);
				}, 900);
			}
		}, 30);
	}, [
		aim,
		pins,
		rolling,
		won
	]);
	(0, import_react.useEffect)(() => {
		if (round > ROUNDS$7 && !won) {
			setWon(true);
			playSound("win");
			onWin(10 + score);
		}
	}, [
		round,
		won,
		score,
		onWin
	]);
	const replay = () => {
		setRound(1);
		setScore(0);
		setWon(false);
		setPinsDown([]);
		setBallY(0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto mt-6 w-full max-w-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
					label: "🎳",
					value: `${Math.min(round, ROUNDS$7)}/${ROUNDS$7}`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
					label: "🏆",
					value: `${score} pinos`
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "toy-card relative h-[420px] overflow-hidden bg-gradient-to-b from-white/80 to-white/40",
				children: [
					pins.map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "absolute text-4xl transition-transform duration-300",
						style: {
							left: `${x}%`,
							top: i < 5 ? "12%" : "26%",
							transform: `translateX(-50%) ${pinsDown.includes(i) ? "rotate(80deg) translateY(20px)" : ""}`,
							opacity: pinsDown.includes(i) ? .4 : 1
						},
						children: "🎳"
					}, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "absolute text-4xl",
						style: {
							left: `${aim}%`,
							bottom: `${8 + ballY * .65}%`,
							transform: "translateX(-50%)"
						},
						children: "⚪"
					}),
					!rolling && !won && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute bottom-[14%] h-[60%] w-1 bg-primary/40",
						style: { left: `${aim}%` }
					}),
					won && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinScreen, {
						stars: 10 + score,
						sticker,
						onReplay: replay
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: roll,
				disabled: rolling,
				className: "toy-card toy-press mx-auto mt-4 block px-8 py-4 font-display text-2xl font-extrabold active:scale-95 disabled:opacity-50",
				children: "🎳 Jogar a bola!"
			})
		]
	});
}
var PADS = [
	{
		emoji: "🎹",
		color: "var(--sky)"
	},
	{
		emoji: "🎸",
		color: "var(--bubblegum)"
	},
	{
		emoji: "🥁",
		color: "var(--sunny)"
	},
	{
		emoji: "🎺",
		color: "var(--grass)"
	}
];
var ROUNDS$6 = 5;
function SequenceGame({ sticker, onWin }) {
	const [sequence, setSequence] = (0, import_react.useState)([]);
	const [step, setStep] = (0, import_react.useState)(0);
	const [active, setActive] = (0, import_react.useState)(null);
	const [showing, setShowing] = (0, import_react.useState)(false);
	const [won, setWon] = (0, import_react.useState)(false);
	const [started, setStarted] = (0, import_react.useState)(false);
	const timers = (0, import_react.useRef)([]);
	const clearTimers = () => {
		timers.current.forEach((t) => window.clearTimeout(t));
		timers.current = [];
	};
	const show = (0, import_react.useCallback)((list) => {
		setShowing(true);
		clearTimers();
		list.forEach((pad, i) => {
			timers.current.push(window.setTimeout(() => {
				setActive(pad);
				playInstrument(PADS[pad].emoji, pad + 2);
				timers.current.push(window.setTimeout(() => setActive(null), 400));
			}, 700 * i + 400));
		});
		timers.current.push(window.setTimeout(() => {
			setShowing(false);
			setStep(0);
		}, 700 * list.length + 500));
	}, []);
	const nextRound = (0, import_react.useCallback)((current) => {
		const list = [...current, Math.floor(Math.random() * PADS.length)];
		setSequence(list);
		show(list);
	}, [show]);
	(0, import_react.useEffect)(() => () => clearTimers(), []);
	const press = (pad) => {
		if (showing || won || !started) return;
		playInstrument(PADS[pad].emoji, pad + 2);
		setActive(pad);
		window.setTimeout(() => setActive(null), 220);
		if (sequence[step] !== pad) {
			playSound("wrong");
			setStep(0);
			window.setTimeout(() => show(sequence), 600);
			return;
		}
		const next = step + 1;
		if (next === sequence.length) {
			if (sequence.length >= ROUNDS$6) {
				setWon(true);
				playSound("win");
				onWin(15);
				return;
			}
			window.setTimeout(() => nextRound(sequence), 700);
			return;
		}
		setStep(next);
	};
	const replay = () => {
		clearTimers();
		setWon(false);
		setStep(0);
		setStarted(true);
		nextRound([]);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto mt-4 w-full max-w-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 flex justify-center gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
					label: "🎼",
					value: `${Math.min(sequence.length, ROUNDS$6)}/${ROUNDS$6}`
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "toy-card relative grid grid-cols-2 gap-3 p-3 sm:gap-4 sm:p-4",
				children: [PADS.map((pad, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => press(index),
					"aria-label": `Tocar ${pad.emoji}`,
					className: `flex aspect-square items-center justify-center rounded-3xl text-5xl shadow-md transition-transform sm:text-6xl ${active === index ? "scale-110 brightness-125" : "hover:scale-105 active:scale-95"}`,
					style: { background: `color-mix(in oklab, ${pad.color} 45%, white)` },
					children: pad.emoji
				}, pad.emoji)), won && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinScreen, {
					stars: 15,
					sticker,
					onReplay: replay
				})]
			}),
			!started ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: replay,
				className: "toy-card toy-press mx-auto mt-4 block px-6 py-4 font-display text-xl font-extrabold active:scale-95",
				children: "▶️ Começar a melodia"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-center font-bold text-muted-foreground",
				children: showing ? "Escute a melodia... 🎧" : "Sua vez! Repita a melodia 🎵"
			})
		]
	});
}
var ROUNDS$5 = 5;
function makeRound$5(max) {
	const count = 1 + Math.floor(Math.random() * max);
	const options = /* @__PURE__ */ new Set([count]);
	while (options.size < 3) options.add(1 + Math.floor(Math.random() * max));
	return {
		count,
		options: [...options].sort(() => Math.random() - .5)
	};
}
function CountGame({ emoji, sticker, onWin }) {
	const [round, setRound] = (0, import_react.useState)(1);
	const [data, setData] = (0, import_react.useState)(() => makeRound$5(6));
	const [wrong, setWrong] = (0, import_react.useState)(null);
	const [won, setWon] = (0, import_react.useState)(false);
	const answer = (0, import_react.useCallback)((value) => {
		if (won) return;
		if (value !== data.count) {
			setWrong(value);
			playSound("wrong");
			window.setTimeout(() => setWrong(null), 600);
			return;
		}
		playSound("coin");
		if (round >= ROUNDS$5) {
			setWon(true);
			playSound("win");
			onWin(12);
			return;
		}
		setRound((r) => r + 1);
		setData(makeRound$5(Math.min(9, 5 + round)));
	}, [
		data.count,
		round,
		won,
		onWin
	]);
	const replay = () => {
		setRound(1);
		setWon(false);
		setData(makeRound$5(6));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto mt-4 w-full max-w-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-3 flex justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
				label: "🔢",
				value: `${round}/${ROUNDS$5}`
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "toy-card relative p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center font-display text-xl font-extrabold sm:text-2xl",
					children: "Quantos você vê?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex min-h-40 flex-wrap items-center justify-center gap-2",
					children: Array.from({ length: data.count }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "anim-pop text-5xl sm:text-6xl",
						style: { animationDelay: `${i * 60}ms` },
						children: emoji
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex flex-wrap justify-center gap-3",
					children: data.options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onPointerDown: (e) => {
							e.preventDefault();
							answer(option);
						},
						className: `toy-card toy-press h-16 w-16 font-display text-3xl font-extrabold active:scale-95 sm:h-20 sm:w-20 sm:text-4xl ${wrong === option ? "anim-wiggle ring-4 ring-destructive" : ""}`,
						children: option
					}, option))
				}),
				won && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinScreen, {
					stars: 12,
					sticker,
					onReplay: replay
				})
			]
		})]
	});
}
var HOLES = 9;
var GOAL = 12;
function WhackGame({ emoji, sticker, onWin }) {
	const [active, setActive] = (0, import_react.useState)(null);
	const [hits, setHits] = (0, import_react.useState)(0);
	const [won, setWon] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (won) return;
		const speed = Math.max(520, 1100 - hits * 45);
		const timer = window.setInterval(() => {
			setActive(Math.floor(Math.random() * HOLES));
		}, speed);
		return () => window.clearInterval(timer);
	}, [hits, won]);
	const hit = (0, import_react.useCallback)((index) => {
		if (won || index !== active) return;
		setActive(null);
		playSound("pop");
		setHits((value) => {
			const next = value + 1;
			if (next >= GOAL && !won) {
				setWon(true);
				playSound("win");
				onWin(12);
			}
			return next;
		});
	}, [
		active,
		onWin,
		won
	]);
	const replay = () => {
		setHits(0);
		setWon(false);
		setActive(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto mt-4 w-full max-w-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-3 flex justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
				label: "🎯",
				value: `${Math.min(hits, GOAL)}/${GOAL}`
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "toy-card relative p-3 sm:p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 gap-2 sm:gap-3",
				children: Array.from({ length: HOLES }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onPointerDown: (e) => {
						e.preventDefault();
						hit(index);
					},
					"aria-label": "Buraco",
					className: "flex aspect-square items-center justify-center rounded-3xl bg-black/10 text-4xl transition active:scale-95 sm:text-5xl touch-none",
					children: active === index ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "anim-pop",
						children: emoji
					}) : null
				}, index))
			}), won && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinScreen, {
				stars: 12,
				sticker,
				onReplay: replay
			})]
		})]
	});
}
var ROUNDS$4 = 5;
function makeRound$4(pool, size) {
	const shuffled = [...pool].sort(() => Math.random() - .5);
	const base = shuffled[0] ?? "🐶";
	const odd = shuffled[1] ?? "🐱";
	const oddIndex = Math.floor(Math.random() * size);
	return {
		odd: oddIndex,
		items: Array.from({ length: size }, (_, i) => i === oddIndex ? odd : base)
	};
}
function OddOneGame({ pool, sticker, onWin }) {
	const [round, setRound] = (0, import_react.useState)(1);
	const [data, setData] = (0, import_react.useState)(() => makeRound$4(pool, 4));
	const [wrong, setWrong] = (0, import_react.useState)(null);
	const [won, setWon] = (0, import_react.useState)(false);
	const pick = (0, import_react.useCallback)((index) => {
		if (won) return;
		if (index !== data.odd) {
			setWrong(index);
			playSound("wrong");
			window.setTimeout(() => setWrong(null), 500);
			return;
		}
		playSound("coin");
		if (round >= ROUNDS$4) {
			setWon(true);
			playSound("win");
			onWin(12);
			return;
		}
		setRound((r) => r + 1);
		setData(makeRound$4(pool, Math.min(12, 4 + round * 2)));
	}, [
		data.odd,
		onWin,
		pool,
		round,
		won
	]);
	const replay = () => {
		setRound(1);
		setWon(false);
		setData(makeRound$4(pool, 4));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto mt-4 w-full max-w-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-3 flex justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
				label: "🔍",
				value: `${round}/${ROUNDS$4}`
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "toy-card relative p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center font-display text-xl font-extrabold sm:text-2xl",
					children: "Ache o diferente!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex min-h-40 flex-wrap items-center justify-center gap-2",
					children: data.items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onPointerDown: (e) => {
							e.preventDefault();
							pick(index);
						},
						className: `anim-pop rounded-3xl bg-white/60 p-2 text-4xl transition active:scale-90 sm:text-5xl ${wrong === index ? "anim-shake opacity-60" : "hover:scale-110"}`,
						style: { animationDelay: `${index * 50}ms` },
						"aria-label": "Figura",
						children: item
					}, index))
				}),
				won && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinScreen, {
					stars: 12,
					sticker,
					onReplay: replay
				})
			]
		})]
	});
}
var ROUNDS$3 = 4;
function makeRound$3(count) {
	return Array.from({ length: count }, (_, i) => i + 1).sort(() => Math.random() - .5);
}
function OrderGame({ emoji, sticker, onWin }) {
	const [round, setRound] = (0, import_react.useState)(1);
	const [items, setItems] = (0, import_react.useState)(() => makeRound$3(3));
	const [done, setDone] = (0, import_react.useState)([]);
	const [wrong, setWrong] = (0, import_react.useState)(null);
	const [won, setWon] = (0, import_react.useState)(false);
	const pick = (0, import_react.useCallback)((size) => {
		if (won) return;
		if (size !== done.length + 1) {
			setWrong(size);
			playSound("wrong");
			window.setTimeout(() => setWrong(null), 500);
			return;
		}
		playSound("pop");
		const next = [...done, size];
		if (next.length === items.length) {
			if (round >= ROUNDS$3) {
				setWon(true);
				playSound("win");
				onWin(14);
				return;
			}
			playSound("coin");
			setRound((r) => r + 1);
			setItems(makeRound$3(3 + round));
			setDone([]);
			return;
		}
		setDone(next);
	}, [
		done,
		items.length,
		onWin,
		round,
		won
	]);
	const replay = () => {
		setRound(1);
		setItems(makeRound$3(3));
		setDone([]);
		setWon(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto mt-4 w-full max-w-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-3 flex justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
				label: "📏",
				value: `${round}/${ROUNDS$3}`
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "toy-card relative p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center font-display text-xl font-extrabold sm:text-2xl",
					children: "Toque do menor para o maior!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex min-h-40 flex-wrap items-end justify-center gap-2",
					children: items.map((size) => {
						const cleared = done.includes(size);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onPointerDown: (e) => {
								e.preventDefault();
								pick(size);
							},
							disabled: cleared,
							"aria-label": `Tamanho ${size}`,
							className: `transition active:scale-90 ${cleared ? "opacity-25" : "hover:scale-110"} ${wrong === size ? "anim-shake" : ""}`,
							style: { fontSize: `${1.4 + size * .5}rem` },
							children: emoji
						}, size);
					})
				}),
				won && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinScreen, {
					stars: 14,
					sticker,
					onReplay: replay
				})
			]
		})]
	});
}
var ROUNDS$2 = 6;
var COLORS = [
	{
		name: "Vermelho",
		css: "#ef4444"
	},
	{
		name: "Azul",
		css: "#3b82f6"
	},
	{
		name: "Amarelo",
		css: "#facc15"
	},
	{
		name: "Verde",
		css: "#22c55e"
	},
	{
		name: "Roxo",
		css: "#a855f7"
	},
	{
		name: "Laranja",
		css: "#fb923c"
	},
	{
		name: "Rosa",
		css: "#f472b6"
	},
	{
		name: "Marrom",
		css: "#a16207"
	}
];
function makeRound$2(count) {
	const shuffled = [...COLORS].sort(() => Math.random() - .5).slice(0, count);
	return {
		options: shuffled,
		target: Math.floor(Math.random() * shuffled.length)
	};
}
function ColorGame({ sticker, onWin }) {
	const [round, setRound] = (0, import_react.useState)(1);
	const [data, setData] = (0, import_react.useState)(() => makeRound$2(3));
	const [wrong, setWrong] = (0, import_react.useState)(null);
	const [won, setWon] = (0, import_react.useState)(false);
	const pick = (0, import_react.useCallback)((index) => {
		if (won) return;
		if (index !== data.target) {
			setWrong(index);
			playSound("wrong");
			window.setTimeout(() => setWrong(null), 450);
			return;
		}
		playSound("coin");
		if (round >= ROUNDS$2) {
			setWon(true);
			playSound("win");
			onWin(12);
			return;
		}
		setRound((r) => r + 1);
		setData(makeRound$2(Math.min(6, 3 + Math.floor(round / 2))));
	}, [
		data.target,
		onWin,
		round,
		won
	]);
	const replay = () => {
		setRound(1);
		setWon(false);
		setData(makeRound$2(3));
	};
	const targetColor = data.options[data.target];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto mt-4 w-full max-w-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-3 flex justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
				label: "🎨",
				value: `${round}/${ROUNDS$2}`
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "toy-card relative p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-center font-display text-xl font-extrabold sm:text-2xl",
					children: [
						"Toque no ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: targetColor.css },
							children: targetColor.name
						}),
						"!"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex min-h-40 flex-wrap items-center justify-center gap-3",
					children: data.options.map((color, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onPointerDown: (e) => {
							e.preventDefault();
							pick(index);
						},
						"aria-label": color.name,
						className: `anim-pop size-20 rounded-full border-4 border-white/70 shadow-lg transition active:scale-90 sm:size-24 ${wrong === index ? "anim-shake opacity-60" : "hover:scale-110"}`,
						style: {
							background: color.css,
							animationDelay: `${index * 60}ms`
						}
					}, color.name))
				}),
				won && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinScreen, {
					stars: 12,
					sticker,
					onReplay: replay
				})
			]
		})]
	});
}
var ROUNDS$1 = 6;
var SHAPES = [
	{
		name: "Círculo",
		emoji: "🔵"
	},
	{
		name: "Quadrado",
		emoji: "🟥"
	},
	{
		name: "Triângulo",
		emoji: "🔺"
	},
	{
		name: "Estrela",
		emoji: "⭐"
	},
	{
		name: "Coração",
		emoji: "💚"
	},
	{
		name: "Losango",
		emoji: "🔶"
	}
];
function makeRound$1(count) {
	const shuffled = [...SHAPES].sort(() => Math.random() - .5).slice(0, count);
	return {
		options: shuffled,
		target: Math.floor(Math.random() * shuffled.length)
	};
}
function ShapeGame({ sticker, onWin }) {
	const [round, setRound] = (0, import_react.useState)(1);
	const [data, setData] = (0, import_react.useState)(() => makeRound$1(3));
	const [wrong, setWrong] = (0, import_react.useState)(null);
	const [won, setWon] = (0, import_react.useState)(false);
	const pick = (0, import_react.useCallback)((index) => {
		if (won) return;
		if (index !== data.target) {
			setWrong(index);
			playSound("wrong");
			window.setTimeout(() => setWrong(null), 450);
			return;
		}
		playSound("coin");
		if (round >= ROUNDS$1) {
			setWon(true);
			playSound("win");
			onWin(12);
			return;
		}
		setRound((r) => r + 1);
		setData(makeRound$1(Math.min(6, 3 + Math.floor(round / 2))));
	}, [
		data.target,
		onWin,
		round,
		won
	]);
	const replay = () => {
		setRound(1);
		setWon(false);
		setData(makeRound$1(3));
	};
	const target = data.options[data.target];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto mt-4 w-full max-w-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-3 flex justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
				label: "🔷",
				value: `${round}/${ROUNDS$1}`
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "toy-card relative p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-center font-display text-xl font-extrabold sm:text-2xl",
					children: [
						"Ache o ",
						target.name,
						"!"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex min-h-40 flex-wrap items-center justify-center gap-3",
					children: data.options.map((shape, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onPointerDown: (e) => {
							e.preventDefault();
							pick(index);
						},
						"aria-label": shape.name,
						className: `anim-pop rounded-3xl bg-white/60 p-3 text-5xl transition active:scale-90 sm:text-6xl ${wrong === index ? "anim-shake opacity-60" : "hover:scale-110"}`,
						style: { animationDelay: `${index * 60}ms` },
						children: shape.emoji
					}, shape.name))
				}),
				won && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinScreen, {
					stars: 12,
					sticker,
					onReplay: replay
				})
			]
		})]
	});
}
var ROUNDS = 6;
var PAIRS = [
	[
		"🐶",
		"🦴",
		"O que o cachorro quer?"
	],
	[
		"🐱",
		"🧶",
		"Com o que o gato brinca?"
	],
	[
		"🐝",
		"🌻",
		"Onde a abelha pousa?"
	],
	[
		"🐟",
		"🌊",
		"Onde mora o peixinho?"
	],
	[
		"🐦",
		"🪺",
		"Onde o passarinho dorme?"
	],
	[
		"🚗",
		"🛣",
		"Por onde anda o carro?"
	],
	[
		"🚀",
		"🪐",
		"Para onde vai o foguete?"
	],
	[
		"🧸",
		"🎁",
		"O que vem embrulhado?"
	],
	[
		"🍦",
		"🥶",
		"O sorvete é o quê?"
	],
	[
		"🌧",
		"☂️",
		"O que usar na chuva?"
	],
	[
		"🐄",
		"🥛",
		"O que a vaquinha dá?"
	],
	[
		"🐔",
		"🥚",
		"O que a galinha bota?"
	]
];
function makeRound(count) {
	const shuffled = [...PAIRS].sort(() => Math.random() - .5);
	const chosen = shuffled[0];
	const distractors = shuffled.slice(1, count).map((pair) => pair[1]);
	const options = [chosen[1], ...distractors].sort(() => Math.random() - .5);
	return {
		prompt: chosen[0],
		question: chosen[2],
		answer: chosen[1],
		options
	};
}
function PairsGame({ sticker, onWin }) {
	const [round, setRound] = (0, import_react.useState)(1);
	const [data, setData] = (0, import_react.useState)(() => makeRound(3));
	const [wrong, setWrong] = (0, import_react.useState)(null);
	const [won, setWon] = (0, import_react.useState)(false);
	const pick = (0, import_react.useCallback)((index) => {
		if (won) return;
		if (data.options[index] !== data.answer) {
			setWrong(index);
			playSound("wrong");
			window.setTimeout(() => setWrong(null), 450);
			return;
		}
		playSound("coin");
		if (round >= ROUNDS) {
			setWon(true);
			playSound("win");
			onWin(12);
			return;
		}
		setRound((r) => r + 1);
		setData(makeRound(Math.min(5, 3 + Math.floor(round / 2))));
	}, [
		data.answer,
		data.options,
		onWin,
		round,
		won
	]);
	const replay = () => {
		setRound(1);
		setWon(false);
		setData(makeRound(3));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto mt-4 w-full max-w-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-3 flex justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
				label: "🔗",
				value: `${round}/${ROUNDS}`
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "toy-card relative p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center font-display text-xl font-extrabold sm:text-2xl",
					children: data.question
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 text-center text-6xl anim-float",
					children: data.prompt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex min-h-28 flex-wrap items-center justify-center gap-3",
					children: data.options.map((option, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onPointerDown: (e) => {
							e.preventDefault();
							pick(index);
						},
						"aria-label": "Resposta",
						className: `anim-pop rounded-3xl bg-white/60 p-3 text-4xl transition active:scale-90 sm:text-5xl ${wrong === index ? "anim-shake opacity-60" : "hover:scale-110"}`,
						style: { animationDelay: `${index * 60}ms` },
						children: option
					}, `${option}-${index}`))
				}),
				won && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinScreen, {
					stars: 12,
					sticker,
					onReplay: replay
				})
			]
		})]
	});
}
var MEMORY_POOLS = {
	default: [
		"🐶",
		"😺",
		"🐰",
		"🐼",
		"🦄",
		"🦖"
	],
	aquario: [
		"🐠",
		"🐙",
		"🦀",
		"🐚",
		"🐬",
		"🐳"
	],
	doces: [
		"🍬",
		"🧁",
		"🍭",
		"🍰",
		"🍩",
		"🍪"
	],
	espaco: [
		"🪐",
		"🚀",
		"🌟",
		"🌙",
		"☄️",
		"👽"
	],
	bosque: [
		"🍄",
		"🦋",
		"🐞",
		"🌳",
		"🐿",
		"🌸"
	],
	circo: [
		"🤡",
		"🎪",
		"🎈",
		"🦁",
		"🍿",
		"🎩"
	],
	teatro: [
		"🥁",
		"🎺",
		"🎸",
		"🎹",
		"🎻",
		"🎤"
	],
	praia: [
		"🏝",
		"🐚",
		"⛱",
		"🦀",
		"🩴",
		"🥥"
	],
	dinos: [
		"🦕",
		"🦖",
		"🥚",
		"🌋",
		"🌿",
		"🦴"
	],
	parque: [
		"🎠",
		"🎡",
		"🎢",
		"🍦",
		"🎈",
		"🐞"
	],
	castelo: [
		"🦄",
		"👑",
		"🏰",
		"🧚",
		"🐉",
		"⭐"
	]
};
function GamePage() {
	const { world, game } = Route$1.useLoaderData();
	const { reward } = useProgress();
	const sticker = STICKERS.includes(game.emoji) ? game.emoji : STICKERS[game.name.length % STICKERS.length] ?? "⭐";
	const onWin = (0, import_react.useCallback)((stars) => {
		reward(game.id, stars, sticker, world.id);
	}, [
		game.id,
		reward,
		sticker,
		world.id
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-hidden pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LivingSky, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, { back: `/mundo/${world.id}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative z-10 mx-auto w-full max-w-4xl px-4 pt-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display mb-3 text-center text-2xl font-extrabold sm:text-3xl",
						children: [
							game.emoji,
							" ",
							game.name
						]
					}),
					game.kind === "pop" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopGame, {
						emoji: game.theme,
						sticker,
						music: world.id === "teatro",
						onWin
					}),
					game.kind === "catch" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatchGame, {
						emoji: game.theme,
						sticker,
						onWin
					}),
					game.kind === "memory" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemoryGame, {
						pool: MEMORY_POOLS[world.id] ?? MEMORY_POOLS["default"],
						sticker,
						instruments: world.id === "teatro",
						onWin
					}),
					game.kind === "paint" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaintGame, { onWin }),
					game.kind === "puzzle" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PuzzleGame, {
						theme: game.theme,
						sticker,
						onWin
					}),
					game.kind === "race" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RaceGame, {
						theme: game.emoji,
						sticker,
						onWin
					}),
					game.kind === "bowling" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BowlingGame, {
						sticker,
						onWin
					}),
					game.kind === "sequence" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SequenceGame, {
						sticker,
						onWin
					}),
					game.kind === "count" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountGame, {
						emoji: game.theme,
						sticker,
						onWin
					}),
					game.kind === "whack" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhackGame, {
						emoji: game.theme,
						sticker,
						onWin
					}),
					game.kind === "odd" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OddOneGame, {
						pool: MEMORY_POOLS[world.id] ?? MEMORY_POOLS["default"],
						sticker,
						onWin
					}),
					game.kind === "order" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderGame, {
						emoji: game.theme,
						sticker,
						onWin
					}),
					game.kind === "color" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorGame, {
						sticker,
						onWin
					}),
					game.kind === "shape" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShapeGame, {
						sticker,
						onWin
					}),
					game.kind === "pairs" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PairsGame, {
						sticker,
						onWin
					})
				]
			})
		]
	});
}
//#endregion
export { GamePage as component };
