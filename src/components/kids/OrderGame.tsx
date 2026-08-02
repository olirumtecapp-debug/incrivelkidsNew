import { useCallback, useState } from "react";
import { ScoreBar, WinScreen } from "./GameShell";
import { playSound } from "@/lib/sound";

const ROUNDS = 4;

function makeRound(count: number) {
  const sizes = Array.from({ length: count }, (_, i) => i + 1);
  return sizes.sort(() => Math.random() - 0.5);
}

export function OrderGame({
  emoji,
  sticker,
  onWin,
}: {
  emoji: string;
  sticker: string;
  onWin: (stars: number) => void;
}) {
  const [round, setRound] = useState(1);
  const [items, setItems] = useState(() => makeRound(3));
  const [done, setDone] = useState<number[]>([]);
  const [wrong, setWrong] = useState<number | null>(null);
  const [won, setWon] = useState(false);

  const pick = useCallback(
    (size: number) => {
      if (won) return;
      const expected = done.length + 1;
      if (size !== expected) {
        setWrong(size);
        playSound("wrong");
        window.setTimeout(() => setWrong(null), 500);
        return;
      }
      playSound("pop");
      const next = [...done, size];
      if (next.length === items.length) {
        if (round >= ROUNDS) {
          setWon(true);
          playSound("win");
          onWin(14);
          return;
        }
        playSound("coin");
        setRound((r) => r + 1);
        setItems(makeRound(3 + round));
        setDone([]);
        return;
      }
      setDone(next);
    },
    [done, items.length, onWin, round, won],
  );

  const replay = () => {
    setRound(1);
    setItems(makeRound(3));
    setDone([]);
    setWon(false);
  };

  return (
    <div className="relative mx-auto mt-4 w-full max-w-md">
      <div className="mb-3 flex justify-center">
        <ScoreBar label="📏" value={`${round}/${ROUNDS}`} />
      </div>

      <div className="toy-card relative p-4">
        <p className="text-center font-display text-xl font-extrabold sm:text-2xl">
          Toque do menor para o maior!
        </p>
        <div className="mt-4 flex min-h-40 flex-wrap items-end justify-center gap-2">
          {items.map((size) => {
            const cleared = done.includes(size);
            return (
              <button
                key={size}
                onClick={() => pick(size)}
                disabled={cleared}
                aria-label={`Tamanho ${size}`}
                className={`transition active:scale-90 ${cleared ? "opacity-25" : "hover:scale-110"} ${
                  wrong === size ? "anim-shake" : ""
                }`}
                style={{ fontSize: `${1.4 + size * 0.5}rem` }}
              >
                {emoji}
              </button>
            );
          })}
        </div>
        {won && <WinScreen stars={14} sticker={sticker} onReplay={replay} />}
      </div>
    </div>
  );
}
