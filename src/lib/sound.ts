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
