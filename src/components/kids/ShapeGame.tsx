import { useCallback, useState } from "react";
import { ScoreBar, WinScreen } from "./GameShell";
import { playSound } from "@/lib/sound";

const ROUNDS = 6;

const SHAPES = [
  { name: "Círculo", emoji: "🔵" },
  { name: "Quadrado", emoji: "🟥" },
  { name: "Triângulo", emoji: "🔺" },
  { name: "Estrela", emoji: "⭐" },
  { name: "Coração", emoji: "💚" },
  { name: "Losango", emoji: "🔶" },
];

function makeRound(count: number) {
  const shuffled = [...SHAPES].sort(() => Math.random() - 0.5).slice(0, count);
  return { options: shuffled, target: Math.floor(Math.random() * shuffled.length) };
}

export function ShapeGame({
  sticker,
  onWin,
}: {
  sticker: string;
  onWin: (stars: number) => void;
}) {
  const [round, setRound] = useState(1);
  const [data, setData] = useState(() => makeRound(3));
  const [wrong, setWrong] = useState<number | null>(null);
  const [won, setWon] = useState(false);

  const pick = useCallback(
    (index: number) => {
      if (won) return;
      if (index !== data.target) {
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
      setData(makeRound(Math.min(6, 3 + Math.floor(round / 2))));
    },
    [data.target, onWin, round, won],
  );

  const replay = () => {
    setRound(1);
    setWon(false);
    setData(makeRound(3));
  };

  const target = data.options[data.target]!;

  return (
    <div className="relative mx-auto mt-4 w-full max-w-md">
      <div className="mb-3 flex justify-center">
        <ScoreBar label="🔷" value={`${round}/${ROUNDS}`} />
      </div>

      <div className="toy-card relative p-4">
        <p className="text-center font-display text-xl font-extrabold sm:text-2xl">
          Ache o {target.name}!
        </p>
        <div className="mt-4 flex min-h-40 flex-wrap items-center justify-center gap-3">
          {data.options.map((shape, index) => (
            <button
              key={shape.name}
              onClick={() => pick(index)}
              aria-label={shape.name}
              className={`anim-pop rounded-3xl bg-white/60 p-3 text-5xl transition active:scale-90 sm:text-6xl ${
                wrong === index ? "anim-shake opacity-60" : "hover:scale-110"
              }`}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {shape.emoji}
            </button>
          ))}
        </div>
        {won && <WinScreen stars={12} sticker={sticker} onReplay={replay} />}
      </div>
    </div>
  );
}
