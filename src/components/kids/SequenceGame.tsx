import { useCallback, useEffect, useRef, useState } from "react";
import { ScoreBar, WinScreen } from "./GameShell";
import { playInstrument, playSound } from "@/lib/sound";

const PADS = [
  { emoji: "🎹", color: "var(--sky)" },
  { emoji: "🎸", color: "var(--bubblegum)" },
  { emoji: "🥁", color: "var(--sunny)" },
  { emoji: "🎺", color: "var(--grass)" },
];

const ROUNDS = 5;

export function SequenceGame({ sticker, onWin }: { sticker: string; onWin: (stars: number) => void }) {
  const [sequence, setSequence] = useState<number[]>([]);
  const [step, setStep] = useState(0);
  const [active, setActive] = useState<number | null>(null);
  const [showing, setShowing] = useState(false);
  const [won, setWon] = useState(false);
  const [started, setStarted] = useState(false);
  const timers = useRef<number[]>([]);

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  const show = useCallback((list: number[]) => {
    setShowing(true);
    clearTimers();
    list.forEach((pad, i) => {
      timers.current.push(
        window.setTimeout(() => {
          setActive(pad);
          playInstrument(PADS[pad]!.emoji, pad + 2);
          timers.current.push(window.setTimeout(() => setActive(null), 400));
        }, 700 * i + 400),
      );
    });
    timers.current.push(
      window.setTimeout(() => {
        setShowing(false);
        setStep(0);
      }, 700 * list.length + 500),
    );
  }, []);

  const nextRound = useCallback(
    (current: number[]) => {
      const list = [...current, Math.floor(Math.random() * PADS.length)];
      setSequence(list);
      show(list);
    },
    [show],
  );

  useEffect(() => () => clearTimers(), []);

  const press = (pad: number) => {
    if (showing || won || !started) return;
    playInstrument(PADS[pad]!.emoji, pad + 2);
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
      if (sequence.length >= ROUNDS) {
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

  return (
    <div className="relative mx-auto mt-4 w-full max-w-md">
      <div className="mb-3 flex justify-center gap-2">
        <ScoreBar label="🎼" value={`${Math.min(sequence.length, ROUNDS)}/${ROUNDS}`} />
      </div>

      <div className="toy-card relative grid grid-cols-2 gap-3 p-3 sm:gap-4 sm:p-4">
        {PADS.map((pad, index) => (
          <button
            key={pad.emoji}
            onClick={() => press(index)}
            aria-label={`Tocar ${pad.emoji}`}
            className={`flex aspect-square items-center justify-center rounded-3xl text-5xl shadow-md transition-transform sm:text-6xl ${
              active === index ? "scale-110 brightness-125" : "hover:scale-105 active:scale-95"
            }`}
            style={{ background: `color-mix(in oklab, ${pad.color} 45%, white)` }}
          >
            {pad.emoji}
          </button>
        ))}
        {won && <WinScreen stars={15} sticker={sticker} onReplay={replay} />}
      </div>

      {!started ? (
        <button
          onClick={replay}
          className="toy-card toy-press mx-auto mt-4 block px-6 py-4 font-display text-xl font-extrabold active:scale-95"
        >
          ▶️ Começar a melodia
        </button>
      ) : (
        <p className="mt-3 text-center font-bold text-muted-foreground">
          {showing ? "Escute a melodia... 🎧" : "Sua vez! Repita a melodia 🎵"}
        </p>
      )}
    </div>
  );
}
