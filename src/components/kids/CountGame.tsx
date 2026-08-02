import { useCallback, useState } from "react";
import { ScoreBar, WinScreen } from "./GameShell";
import { playSound } from "@/lib/sound";

const ROUNDS = 5;

function makeRound(max: number) {
  const count = 1 + Math.floor(Math.random() * max);
  const options = new Set<number>([count]);
  while (options.size < 3) {
    options.add(1 + Math.floor(Math.random() * max));
  }
  return { count, options: [...options].sort(() => Math.random() - 0.5) };
}

export function CountGame({
  emoji,
  sticker,
  onWin,
}: {
  emoji: string;
  sticker: string;
  onWin: (stars: number) => void;
}) {
  const [round, setRound] = useState(1);
  const [data, setData] = useState(() => makeRound(6));
  const [wrong, setWrong] = useState<number | null>(null);
  const [won, setWon] = useState(false);

  const answer = useCallback(
    (value: number) => {
      if (won) return;
      if (value !== data.count) {
        setWrong(value);
        playSound("wrong");
        window.setTimeout(() => setWrong(null), 600);
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
      setData(makeRound(Math.min(9, 5 + round)));
    },
    [data.count, round, won, onWin],
  );

  const replay = () => {
    setRound(1);
    setWon(false);
    setData(makeRound(6));
  };

  return (
    <div className="relative mx-auto mt-4 w-full max-w-md">
      <div className="mb-3 flex justify-center">
        <ScoreBar label="🔢" value={`${round}/${ROUNDS}`} />
      </div>

      <div className="toy-card relative p-4">
        <p className="text-center font-display text-xl font-extrabold sm:text-2xl">
          Quantos você vê?
        </p>
        <div className="mt-4 flex min-h-40 flex-wrap items-center justify-center gap-2">
          {Array.from({ length: data.count }).map((_, i) => (
            <span key={i} className="anim-pop text-5xl sm:text-6xl" style={{ animationDelay: `${i * 60}ms` }}>
              {emoji}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {data.options.map((option) => (
            <button
              key={option}
              onClick={() => answer(option)}
              className={`toy-card toy-press h-16 w-16 font-display text-3xl font-extrabold active:scale-95 sm:h-20 sm:w-20 sm:text-4xl ${
                wrong === option ? "anim-wiggle ring-4 ring-destructive" : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {won && <WinScreen stars={12} sticker={sticker} onReplay={replay} />}
      </div>
    </div>
  );
}
