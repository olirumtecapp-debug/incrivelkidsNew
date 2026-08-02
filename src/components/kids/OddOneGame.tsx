import { useCallback, useState } from "react";
import { ScoreBar, WinScreen } from "./GameShell";
import { playSound } from "@/lib/sound";

const ROUNDS = 5;

function makeRound(pool: string[], size: number) {
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const base = shuffled[0] ?? "🐶";
  const odd = shuffled[1] ?? "🐱";
  const oddIndex = Math.floor(Math.random() * size);
  return {
    odd: oddIndex,
    items: Array.from({ length: size }, (_, i) => (i === oddIndex ? odd : base)),
  };
}

export function OddOneGame({
  pool,
  sticker,
  onWin,
}: {
  pool: string[];
  sticker: string;
  onWin: (stars: number) => void;
}) {
  const [round, setRound] = useState(1);
  const [data, setData] = useState(() => makeRound(pool, 4));
  const [wrong, setWrong] = useState<number | null>(null);
  const [won, setWon] = useState(false);

  const pick = useCallback(
    (index: number) => {
      if (won) return;
      if (index !== data.odd) {
        setWrong(index);
        playSound("wrong");
        window.setTimeout(() => setWrong(null), 500);
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
      setData(makeRound(pool, Math.min(12, 4 + round * 2)));
    },
    [data.odd, onWin, pool, round, won],
  );

  const replay = () => {
    setRound(1);
    setWon(false);
    setData(makeRound(pool, 4));
  };

  return (
    <div className="relative mx-auto mt-4 w-full max-w-md">
      <div className="mb-3 flex justify-center">
        <ScoreBar label="🔍" value={`${round}/${ROUNDS}`} />
      </div>

      <div className="toy-card relative p-4">
        <p className="text-center font-display text-xl font-extrabold sm:text-2xl">
          Ache o diferente!
        </p>
        <div className="mt-4 flex min-h-40 flex-wrap items-center justify-center gap-2">
          {data.items.map((item, index) => (
            <button
              key={index}
              onPointerDown={(e) => {
                e.preventDefault();
                pick(index);
              }}
              className={`anim-pop rounded-3xl bg-white/60 p-2 text-4xl transition active:scale-90 sm:text-5xl ${
                wrong === index ? "anim-shake opacity-60" : "hover:scale-110"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
              aria-label="Figura"
            >
              {item}
            </button>
          ))}
        </div>
        {won && <WinScreen stars={12} sticker={sticker} onReplay={replay} />}
      </div>
    </div>
  );
}
