let ctx: AudioContext | null = null;
let enabled = true;

export function setSoundEnabled(value: boolean) {
  enabled = value;
}

function getCtx() {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    ctx = new Ctor();
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function tone(freq: number, start: number, duration: number, type: OscillatorType = "sine", gain = 0.12) {
  const audio = getCtx();
  if (!audio) return;
  const osc = audio.createOscillator();
  const vol = audio.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, audio.currentTime + start);
  vol.gain.setValueAtTime(0.0001, audio.currentTime + start);
  vol.gain.exponentialRampToValueAtTime(gain, audio.currentTime + start + 0.02);
  vol.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + start + duration);
  osc.connect(vol).connect(audio.destination);
  osc.start(audio.currentTime + start);
  osc.stop(audio.currentTime + start + duration + 0.05);
}

export type SoundName = "pop" | "click" | "win" | "coin" | "wrong" | "roll";

export function playSound(name: SoundName) {
  if (!enabled) return;
  switch (name) {
    case "pop":
      tone(660, 0, 0.12, "triangle");
      tone(990, 0.05, 0.12, "triangle", 0.08);
      break;
    case "click":
      tone(520, 0, 0.08, "square", 0.07);
      break;
    case "coin":
      tone(880, 0, 0.1, "square", 0.08);
      tone(1320, 0.08, 0.14, "square", 0.07);
      break;
    case "wrong":
      tone(200, 0, 0.18, "sawtooth", 0.06);
      break;
    case "roll":
      tone(160, 0, 0.35, "sawtooth", 0.05);
      break;
    case "win":
      [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.12, 0.28, "triangle", 0.11));
      break;
  }
}

// --- Música: notas e instrumentos ---

const SCALE = [261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 493.88, 523.25];

export function noteFreq(index: number) {
  return SCALE[((index % SCALE.length) + SCALE.length) % SCALE.length]!;
}

/** Toca uma nota da escala de Dó (índice 0..7) com timbre suave de sino. */
export function playNote(index: number, duration = 0.55) {
  if (!enabled) return;
  const freq = noteFreq(index);
  tone(freq, 0, duration, "triangle", 0.13);
  tone(freq * 2, 0, duration * 0.6, "sine", 0.05);
}

export type Instrument =
  | "piano"
  | "guitarra"
  | "violino"
  | "tambor"
  | "trompete"
  | "microfone"
  | "flauta"
  | "sino"
  | "maracas";

const INSTRUMENT_BY_EMOJI: Record<string, Instrument> = {
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
  "🎶": "piano",
};

function noise(duration: number, gain = 0.09) {
  const audio = getCtx();
  if (!audio) return;
  const frames = Math.floor(audio.sampleRate * duration);
  const buffer = audio.createBuffer(1, frames, audio.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < frames; i++) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / frames);
  }
  const src = audio.createBufferSource();
  const vol = audio.createGain();
  vol.gain.value = gain;
  src.buffer = buffer;
  src.connect(vol).connect(audio.destination);
  src.start();
}

/** Toca o som característico de um instrumento (a partir do emoji dele). */
export function playInstrument(emoji: string, noteIndex = 0) {
  if (!enabled) return;
  const instrument = INSTRUMENT_BY_EMOJI[emoji];
  const base = noteFreq(noteIndex);
  switch (instrument) {
    case "piano":
      tone(base, 0, 0.7, "triangle", 0.14);
      tone(base * 2, 0, 0.35, "sine", 0.05);
      break;
    case "guitarra":
      tone(base / 2, 0, 0.8, "sawtooth", 0.09);
      tone(base, 0.01, 0.7, "sawtooth", 0.06);
      break;
    case "violino":
      tone(base, 0, 1.1, "sawtooth", 0.07);
      tone(base * 1.005, 0.02, 1.0, "sine", 0.05);
      break;
    case "tambor":
      tone(110, 0, 0.28, "sine", 0.2);
      tone(70, 0.02, 0.35, "sine", 0.16);
      noise(0.12, 0.05);
      break;
    case "trompete":
      tone(base, 0, 0.6, "square", 0.09);
      tone(base * 1.5, 0.03, 0.45, "sawtooth", 0.05);
      break;
    case "microfone":
      tone(base, 0, 0.5, "sine", 0.13);
      tone(base * 1.26, 0.18, 0.45, "sine", 0.1);
      break;
    case "flauta":
      tone(base * 2, 0, 0.6, "sine", 0.13);
      break;
    case "sino":
      tone(base * 3, 0, 1.0, "sine", 0.1);
      tone(base * 4.2, 0, 0.7, "sine", 0.05);
      break;
    case "maracas":
      noise(0.18, 0.07);
      break;
    default:
      playNote(noteIndex);
  }
}
