import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/TopBar-B1wDN1tI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function build(emojis, count, seedOffset) {
	return Array.from({ length: count }, (_, i) => {
		const seed = (i + seedOffset) * 9301;
		const rnd = (n) => seed * (n + 3) % 97 / 97;
		return {
			left: Math.round(rnd(1) * 92),
			delay: Math.round(rnd(2) * 18),
			duration: 16 + Math.round(rnd(3) * 22),
			scale: .7 + rnd(4) * .9,
			emoji: emojis[i % emojis.length] ?? "☁️"
		};
	});
}
function LivingSky() {
	const clouds = (0, import_react.useMemo)(() => build([
		"☁️",
		"⛅",
		"☁️"
	], 6, 1), []);
	const balloons = (0, import_react.useMemo)(() => build([
		"🎈",
		"🪁",
		"🎈",
		"🦋",
		"🐦"
	], 9, 7), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute right-6 top-6 text-6xl anim-sparkle",
				children: "☀️"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-1/3 top-10 text-5xl opacity-70 anim-float",
				children: "🌈"
			}),
			clouds.map((cloud, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute anim-drift select-none opacity-80",
				style: {
					top: `${6 + i * 9}%`,
					fontSize: `${2.4 * cloud.scale}rem`,
					animationDuration: `${cloud.duration * 2.2}s`,
					animationDelay: `-${cloud.delay}s`
				},
				children: cloud.emoji
			}, `c-${i}`)),
			balloons.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute bottom-0 anim-rise select-none",
				style: {
					left: `${item.left}%`,
					fontSize: `${1.8 * item.scale}rem`,
					animationDuration: `${item.duration}s`,
					animationDelay: `-${item.delay}s`
				},
				children: item.emoji
			}, `b-${i}`))
		]
	});
}
var PETS = [
	{
		id: "cachorrinho",
		emoji: "🐶",
		name: "Bolinha",
		price: 20
	},
	{
		id: "gatinho",
		emoji: "🐱",
		name: "Miau",
		price: 20
	},
	{
		id: "coelhinho",
		emoji: "🐰",
		name: "Pulinho",
		price: 35
	},
	{
		id: "pinguim",
		emoji: "🐧",
		name: "Frost",
		price: 35
	},
	{
		id: "dragao",
		emoji: "🐲",
		name: "Fogoso",
		price: 60
	},
	{
		id: "unicornio",
		emoji: "🦄",
		name: "Brilhante",
		price: 80
	},
	{
		id: "dino",
		emoji: "🦕",
		name: "Rex",
		price: 60
	},
	{
		id: "polvo",
		emoji: "🐙",
		name: "Tentáculo",
		price: 45
	}
];
var AVATAR_FACES = [
	"🐻",
	"🦊",
	"🐼",
	"🐵",
	"🦁",
	"🐸",
	"🐨",
	"🐯",
	"🐮",
	"🐷"
];
var AVATAR_HATS = [
	{
		id: "none",
		emoji: "",
		label: "Sem chapéu"
	},
	{
		id: "party",
		emoji: "🎉",
		label: "Festa"
	},
	{
		id: "crown",
		emoji: "👑",
		label: "Coroa"
	},
	{
		id: "cap",
		emoji: "🧢",
		label: "Boné"
	},
	{
		id: "magic",
		emoji: "🎩",
		label: "Mágico"
	},
	{
		id: "star",
		emoji: "⭐",
		label: "Estrela"
	}
];
var AVATAR_COLORS = [
	"var(--sky)",
	"var(--turquoise)",
	"var(--grape)",
	"var(--bubblegum)",
	"var(--sunny)",
	"var(--grass)",
	"var(--orange)"
];
var DAILY_MISSIONS = [
	{
		id: "jogue3",
		emoji: "🎮",
		title: "Vença 3 minijogos hoje",
		goal: 3,
		reward: 10,
		progress: (d) => d.wins
	},
	{
		id: "estrelas30",
		emoji: "⭐",
		title: "Ganhe 30 estrelas hoje",
		goal: 30,
		reward: 15,
		progress: (d) => d.stars
	},
	{
		id: "mundos2",
		emoji: "🗺",
		title: "Visite 2 mundos diferentes",
		goal: 2,
		reward: 10,
		progress: (d) => d.worlds.length
	}
];
var ACHIEVEMENTS = [
	{
		id: "primeira",
		emoji: "🥇",
		title: "Primeira vitória",
		description: "Vença o seu primeiro minijogo",
		check: (p) => p.totalWins >= 1
	},
	{
		id: "dez-jogos",
		emoji: "🎯",
		title: "Brincalhão",
		description: "Vença 10 partidas",
		check: (p) => p.totalWins >= 10
	},
	{
		id: "colecionador",
		emoji: "📖",
		title: "Colecionador",
		description: "Junte 10 adesivos",
		check: (p) => p.stickers.length >= 10
	},
	{
		id: "cem-estrelas",
		emoji: "🌟",
		title: "Chuva de estrelas",
		description: "Acumule 100 estrelas",
		check: (p) => p.stars >= 100
	},
	{
		id: "explorador",
		emoji: "🧭",
		title: "Explorador",
		description: "Jogue 8 minijogos diferentes",
		check: (p) => p.played.length >= 8
	},
	{
		id: "amigo-pets",
		emoji: "🐾",
		title: "Amigo dos bichinhos",
		description: "Adote 3 pets",
		check: (p) => p.pets.length >= 3
	}
];
var EVENTS = [
	{
		id: "natal",
		emoji: "🎄",
		title: "Festa de Natal",
		message: "O Papai Noel deixou presentes escondidos nos jogos!",
		color: "var(--grass)",
		match: (d) => d.getMonth() === 11
	},
	{
		id: "halloween",
		emoji: "🎃",
		title: "Semana das Abóboras",
		message: "Fantasminhas divertidos apareceram na cidade!",
		color: "var(--orange)",
		match: (d) => d.getMonth() === 9
	},
	{
		id: "junina",
		emoji: "🎇",
		title: "Arraiá da Diversão",
		message: "Bandeirinhas, pipoca e muita brincadeira!",
		color: "var(--sunny)",
		match: (d) => d.getMonth() === 5
	},
	{
		id: "criancas",
		emoji: "🎈",
		title: "Mês das Crianças",
		message: "Estrelas em dobro na alegria de brincar!",
		color: "var(--bubblegum)",
		match: (d) => d.getMonth() === 9
	},
	{
		id: "verao",
		emoji: "🏖",
		title: "Férias de Verão",
		message: "Hora de brincar na praia e tomar sorvete!",
		color: "var(--turquoise)",
		match: (d) => d.getMonth() === 0 || d.getMonth() === 1
	},
	{
		id: "primavera",
		emoji: "🌸",
		title: "Festival das Flores",
		message: "Borboletas coloridas voando por toda parte!",
		color: "var(--grape)",
		match: (d) => d.getMonth() >= 8 && d.getMonth() <= 10
	}
];
function currentEvent(date = /* @__PURE__ */ new Date()) {
	const found = EVENTS.find((e) => e.match(date));
	const fallback = {
		id: "diversao",
		emoji: "🌈",
		title: "Semana da Diversão",
		message: "Novos jogos e surpresas esperando por você!",
		color: "var(--sky)"
	};
	if (!found) return fallback;
	const { match: _match, ...rest } = found;
	return rest;
}
var KEY = "incriveis-jogos-kids-v1";
function today() {
	return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
var empty = {
	stars: 0,
	coins: 0,
	played: [],
	stickers: [],
	avatar: {
		face: "🐻",
		hat: "none",
		color: "var(--sky)"
	},
	pets: [],
	activePet: null,
	daily: {
		date: today(),
		wins: 0,
		stars: 0,
		worlds: [],
		claimed: []
	},
	achievements: [],
	totalWins: 0,
	sound: true
};
function freshDaily(daily) {
	if (!daily || daily.date !== today()) return {
		date: today(),
		wins: 0,
		stars: 0,
		worlds: [],
		claimed: []
	};
	return {
		date: daily.date,
		wins: daily.wins ?? 0,
		stars: daily.stars ?? 0,
		worlds: daily.worlds ?? [],
		claimed: daily.claimed ?? []
	};
}
function read() {
	if (typeof window === "undefined") return empty;
	try {
		const raw = window.localStorage.getItem(KEY);
		if (!raw) return empty;
		const p = JSON.parse(raw);
		return {
			...empty,
			...p,
			avatar: {
				...empty.avatar,
				...p.avatar ?? {}
			},
			played: p.played ?? [],
			stickers: p.stickers ?? [],
			pets: p.pets ?? [],
			achievements: p.achievements ?? [],
			daily: freshDaily(p.daily)
		};
	} catch {
		return empty;
	}
}
var listeners = /* @__PURE__ */ new Set();
function write(next) {
	if (typeof window !== "undefined") window.localStorage.setItem(KEY, JSON.stringify(next));
	listeners.forEach((listener) => listener(next));
}
function checkAchievements(p) {
	const unlocked = ACHIEVEMENTS.filter((a) => a.check(p) && !p.achievements.includes(a.id));
	if (!unlocked.length) return p;
	return {
		...p,
		achievements: [...p.achievements, ...unlocked.map((a) => a.id)]
	};
}
function useProgress() {
	const [progress, setProgress] = (0, import_react.useState)(empty);
	(0, import_react.useEffect)(() => {
		setProgress(read());
		const listener = (value) => setProgress(value);
		listeners.add(listener);
		return () => {
			listeners.delete(listener);
		};
	}, []);
	const update = (0, import_react.useCallback)((fn) => {
		const next = checkAchievements(fn(read()));
		write(next);
		return next;
	}, []);
	return {
		progress,
		reward: (0, import_react.useCallback)((gameId, stars, sticker, worldId) => update((current) => {
			const daily = freshDaily(current.daily);
			return {
				...current,
				stars: current.stars + stars,
				coins: current.coins + stars,
				totalWins: current.totalWins + 1,
				played: current.played.includes(gameId) ? current.played : [...current.played, gameId],
				stickers: sticker && !current.stickers.includes(sticker) ? [...current.stickers, sticker] : current.stickers,
				daily: {
					...daily,
					wins: daily.wins + 1,
					stars: daily.stars + stars,
					worlds: worldId && !daily.worlds.includes(worldId) ? [...daily.worlds, worldId] : daily.worlds
				}
			};
		}), [update]),
		claimMission: (0, import_react.useCallback)((missionId) => update((current) => {
			const mission = DAILY_MISSIONS.find((m) => m.id === missionId);
			const daily = freshDaily(current.daily);
			if (!mission || daily.claimed.includes(missionId) || mission.progress(daily) < mission.goal) return current;
			return {
				...current,
				coins: current.coins + mission.reward,
				stars: current.stars + mission.reward,
				daily: {
					...daily,
					claimed: [...daily.claimed, missionId]
				}
			};
		}), [update]),
		buyPet: (0, import_react.useCallback)((petId, price) => update((current) => {
			if (current.pets.includes(petId) || current.coins < price) return current;
			return {
				...current,
				coins: current.coins - price,
				pets: [...current.pets, petId],
				activePet: current.activePet ?? petId
			};
		}), [update]),
		setActivePet: (0, import_react.useCallback)((petId) => update((current) => ({
			...current,
			activePet: petId
		})), [update]),
		setAvatar: (0, import_react.useCallback)((patch) => update((current) => ({
			...current,
			avatar: {
				...current.avatar,
				...patch
			}
		})), [update]),
		toggleSound: (0, import_react.useCallback)(() => update((current) => ({
			...current,
			sound: !current.sound
		})), [update]),
		resetAll: (0, import_react.useCallback)(() => write({
			...empty,
			daily: freshDaily()
		}), [])
	};
}
var ctx = null;
var enabled = true;
function setSoundEnabled(value) {
	enabled = value;
}
function getCtx() {
	if (typeof window === "undefined") return null;
	if (!ctx) {
		const Ctor = window.AudioContext ?? window.webkitAudioContext;
		if (!Ctor) return null;
		ctx = new Ctor();
	}
	if (ctx.state === "suspended") ctx.resume();
	return ctx;
}
function tone(freq, start, duration, type = "sine", gain = .12) {
	const audio = getCtx();
	if (!audio) return;
	const osc = audio.createOscillator();
	const vol = audio.createGain();
	osc.type = type;
	osc.frequency.setValueAtTime(freq, audio.currentTime + start);
	vol.gain.setValueAtTime(1e-4, audio.currentTime + start);
	vol.gain.exponentialRampToValueAtTime(gain, audio.currentTime + start + .02);
	vol.gain.exponentialRampToValueAtTime(1e-4, audio.currentTime + start + duration);
	osc.connect(vol).connect(audio.destination);
	osc.start(audio.currentTime + start);
	osc.stop(audio.currentTime + start + duration + .05);
}
function playSound(name) {
	if (!enabled) return;
	switch (name) {
		case "pop":
			tone(660, 0, .12, "triangle");
			tone(990, .05, .12, "triangle", .08);
			break;
		case "click":
			tone(520, 0, .08, "square", .07);
			break;
		case "coin":
			tone(880, 0, .1, "square", .08);
			tone(1320, .08, .14, "square", .07);
			break;
		case "wrong":
			tone(200, 0, .18, "sawtooth", .06);
			break;
		case "roll":
			tone(160, 0, .35, "sawtooth", .05);
			break;
		case "win": [
			523,
			659,
			784,
			1047
		].forEach((f, i) => tone(f, i * .12, .28, "triangle", .11));
	}
}
var SCALE = [
	261.63,
	293.66,
	329.63,
	349.23,
	392,
	440,
	493.88,
	523.25
];
function noteFreq(index) {
	return SCALE[(index % SCALE.length + SCALE.length) % SCALE.length];
}
/** Toca uma nota da escala de Dó (índice 0..7) com timbre suave de sino. */
function playNote(index, duration = .55) {
	if (!enabled) return;
	const freq = noteFreq(index);
	tone(freq, 0, duration, "triangle", .13);
	tone(freq * 2, 0, duration * .6, "sine", .05);
}
var INSTRUMENT_BY_EMOJI = {
	"🎹": "piano",
	"🎸": "guitarra",
	"🎻": "violino",
	"🥁": "tambor",
	"🎺": "trompete",
	"🎤": "microfone",
	"🪈": "flauta",
	"🔔": "sino",
	"🪇": "maracas",
	"🎵": "piano",
	"🎶": "piano"
};
function noise(duration, gain = .09) {
	const audio = getCtx();
	if (!audio) return;
	const frames = Math.floor(audio.sampleRate * duration);
	const buffer = audio.createBuffer(1, frames, audio.sampleRate);
	const data = buffer.getChannelData(0);
	for (let i = 0; i < frames; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / frames);
	const src = audio.createBufferSource();
	const vol = audio.createGain();
	vol.gain.value = gain;
	src.buffer = buffer;
	src.connect(vol).connect(audio.destination);
	src.start();
}
/** Toca o som característico de um instrumento (a partir do emoji dele). */
function playInstrument(emoji, noteIndex = 0) {
	if (!enabled) return;
	const instrument = INSTRUMENT_BY_EMOJI[emoji];
	const base = noteFreq(noteIndex);
	switch (instrument) {
		case "piano":
			tone(base, 0, .7, "triangle", .14);
			tone(base * 2, 0, .35, "sine", .05);
			break;
		case "guitarra":
			tone(base / 2, 0, .8, "sawtooth", .09);
			tone(base, .01, .7, "sawtooth", .06);
			break;
		case "violino":
			tone(base, 0, 1.1, "sawtooth", .07);
			tone(base * 1.005, .02, 1, "sine", .05);
			break;
		case "tambor":
			tone(110, 0, .28, "sine", .2);
			tone(70, .02, .35, "sine", .16);
			noise(.12, .05);
			break;
		case "trompete":
			tone(base, 0, .6, "square", .09);
			tone(base * 1.5, .03, .45, "sawtooth", .05);
			break;
		case "microfone":
			tone(base, 0, .5, "sine", .13);
			tone(base * 1.26, .18, .45, "sine", .1);
			break;
		case "flauta":
			tone(base * 2, 0, .6, "sine", .13);
			break;
		case "sino":
			tone(base * 3, 0, 1, "sine", .1);
			tone(base * 4.2, 0, .7, "sine", .05);
			break;
		case "maracas":
			noise(.18, .07);
			break;
		default: playNote(noteIndex);
	}
}
function useInstallPrompt() {
	const [deferred, setDeferred] = (0, import_react.useState)(null);
	const [installed, setInstalled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onPrompt = (event) => {
			event.preventDefault();
			setDeferred(event);
		};
		const onInstalled = () => {
			setInstalled(true);
			setDeferred(null);
		};
		window.addEventListener("beforeinstallprompt", onPrompt);
		window.addEventListener("appinstalled", onInstalled);
		if (window.matchMedia("(display-mode: standalone)").matches) setInstalled(true);
		return () => {
			window.removeEventListener("beforeinstallprompt", onPrompt);
			window.removeEventListener("appinstalled", onInstalled);
		};
	}, []);
	const install = (0, import_react.useCallback)(async () => {
		if (!deferred) return false;
		await deferred.prompt();
		const choice = await deferred.userChoice;
		if (choice.outcome === "accepted") setInstalled(true);
		setDeferred(null);
		return choice.outcome === "accepted";
	}, [deferred]);
	return {
		canInstall: !!deferred,
		installed,
		install
	};
}
function useFullscreen() {
	const [isFullscreen, setIsFullscreen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onChange = () => setIsFullscreen(!!document.fullscreenElement);
		document.addEventListener("fullscreenchange", onChange);
		return () => document.removeEventListener("fullscreenchange", onChange);
	}, []);
	return {
		isFullscreen,
		toggle: (0, import_react.useCallback)(async () => {
			try {
				if (document.fullscreenElement) await document.exitFullscreen();
				else await document.documentElement.requestFullscreen();
			} catch {}
		}, [])
	};
}
function useHydrated() {
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setHydrated(true), []);
	return hydrated;
}
function FullscreenButton() {
	const hydrated = useHydrated();
	const { isFullscreen, toggle } = useFullscreen();
	if (!hydrated || typeof document === "undefined" || !document.documentElement.requestFullscreen) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: () => {
			playSound("click");
			toggle();
		},
		"aria-label": isFullscreen ? "Sair da tela cheia" : "Jogar em tela cheia",
		"aria-pressed": isFullscreen,
		className: "toy-card toy-press flex items-center px-3 py-2 text-base font-extrabold hover:scale-105 active:scale-95 sm:px-3 sm:py-3 sm:text-lg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-2xl",
			children: isFullscreen ? "🡼" : "⛶"
		})
	});
}
function InstallButton() {
	return null;
}
function SupportButton() {
	return null;
}
function TopBar({ back }) {
	const { progress, toggleSound } = useProgress();
	(0, import_react.useEffect)(() => {
		setSoundEnabled(progress.sound);
	}, [progress.sound]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "relative z-10 mx-auto w-full max-w-6xl px-4 pt-4 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:flex-wrap sm:justify-between",
			children: [back ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: back,
				className: "toy-card toy-press flex items-center gap-2 px-4 py-3 text-lg font-bold hover:scale-105 active:scale-95",
				"aria-label": "Voltar",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-2xl shrink-0",
					children: "⬅️"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate hidden sm:inline",
					children: "Voltar"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "flex min-w-0 items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-4xl anim-wiggle shrink-0",
					children: "🎠"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-display min-w-0 truncate text-xl leading-5 font-extrabold sm:text-2xl",
					children: ["Incríveis Jogos", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block truncate text-sm text-muted-foreground sm:text-base",
						children: "Universo da Diversão"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-end gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "toy-card flex items-center gap-2 px-3 py-2 text-base font-extrabold sm:px-3 sm:py-3 sm:text-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl anim-sparkle sm:text-2xl",
							children: "⭐"
						}), progress.stars]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "toy-card hidden items-center gap-2 px-3 py-3 text-lg font-extrabold sm:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl",
							children: "🪙"
						}), progress.coins]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/missoes",
						"aria-label": "Missões e conquistas",
						className: "toy-card toy-press flex items-center gap-2 px-3 py-2 text-base font-extrabold hover:scale-105 active:scale-95 sm:px-3 sm:py-3 sm:text-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl sm:text-2xl",
							children: "🎯"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/perfil",
						"aria-label": "Meu avatar e pets",
						className: "toy-card toy-press flex items-center gap-2 px-3 py-2 text-base font-extrabold hover:scale-105 active:scale-95 sm:px-3 sm:py-3 sm:text-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl sm:text-2xl",
							children: progress.avatar.face
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/album",
						"aria-label": "Álbum de adesivos",
						className: "toy-card toy-press flex items-center gap-2 px-3 py-2 text-base font-extrabold hover:scale-105 active:scale-95 sm:px-3 sm:py-3 sm:text-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl sm:text-2xl",
							children: "📖"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							playSound("click");
							toggleSound();
						},
						"aria-label": progress.sound ? "Desligar sons" : "Ligar sons",
						"aria-pressed": progress.sound,
						className: "toy-card toy-press flex items-center px-3 py-2 text-base font-extrabold hover:scale-105 active:scale-95 sm:px-3 sm:py-3 sm:text-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl sm:text-2xl",
							children: progress.sound ? "🔊" : "🔇"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FullscreenButton, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallButton, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportButton, {})
				]
			})]
		})
	});
}
//#endregion
export { DAILY_MISSIONS as a, TopBar as c, playNote as d, playSound as f, useProgress as h, AVATAR_HATS as i, currentEvent as l, useInstallPrompt as m, AVATAR_COLORS as n, LivingSky as o, useFullscreen as p, AVATAR_FACES as r, PETS as s, ACHIEVEMENTS as t, playInstrument as u };
