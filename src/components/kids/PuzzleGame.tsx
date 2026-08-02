import { useCallback, useEffect, useMemo, useState } from "react";
import { ScoreBar, WinScreen } from "./GameShell";
import { playSound } from "@/lib/sound";

const SIZE = 3;

function shuffled(): number[] {
  const base = Array.from({ length: SIZE * SIZE }, (_, i) => i);
  for (let i = base.length - 2; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [base[i], base[j]] = [base[j]!, base[i]!];
  }
  return base;
}

export function PuzzleGame({
  theme,
  sticker,
  onWin,
}: {
  theme: string;
  sticker: string;
  onWin: (stars: number) => void;
}) {
  const [tiles, setTiles] = useState<number[]>(() => shuffled());
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);

  const emptyIndex = tiles.indexOf(SIZE * SIZE - 1);

  const solved = useMemo(() => tiles.every((tile, index) => tile === index), [tiles]);

  useEffect(() => {
    if (solved && moves > 0 && !won) {
      setWon(true);
      playSound("win");
      onWin(12);
    }
  }, [solved, moves, won, onWin]);

  const move = useCallback(
    (index: number) => {
      if (won) return;
      const dr = Math.abs(Math.floor(index / SIZE) - Math.floor(emptyIndex / SIZE));
      const dc = Math.abs((index % SIZE) - (emptyIndex % SIZE));
      if (dr + dc !== 1) return;
      setTiles((current) => {
        const next = [...current];
        [next[index], next[emptyIndex]] = [next[emptyIndex]!, next[index]!];
        return next;
      });
      setMoves((m) => m + 1);
      playSound("click");
    },
    [emptyIndex, won],
  );

  const replay = () => {
    setTiles(shuffled());
    setMoves(0);
    setWon(false);
  };

  return (
    <div className="relative mx-auto mt-6 w-full max-w-md">
      <div className="mb-3 flex justify-center gap-3">
        <ScoreBar label="🧩" value={`${moves} jogadas`} />
      </div>
      <div className="toy-card grid aspect-square grid-cols-3 gap-2 p-3">
        {tiles.map((tile, index) => (
          <button
            key={index}
            onClick={() => move(index)}
            aria-label={`Peça ${tile + 1}`}
            className={`flex items-center justify-center rounded-2xl text-4xl font-extrabold transition sm:text-5xl ${
              tile === SIZE * SIZE - 1
                ? "bg-transparent"
                : "bg-white/80 shadow-md hover:scale-105 active:scale-95"
            }`}
          >
            {tile === SIZE * SIZE - 1 ? "" : <span>{theme}</span>}
            {tile !== SIZE * SIZE - 1 && (
              <span className="ml-1 text-base font-bold text-muted-foreground">{tile + 1}</span>
            )}
          </button>
        ))}
      </div>
      <p className="mt-3 text-center font-bold text-muted-foreground">
        Coloque os números em ordem de 1 a 8!
      </p>
      {won && <WinScreen stars={12} sticker={sticker} onReplay={replay} />}
    </div>
  );
}
