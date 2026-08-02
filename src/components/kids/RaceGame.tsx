import { useCallback, useEffect, useRef, useState } from "react";
import { ScoreBar, WinScreen } from "./GameShell";
import { playSound } from "@/lib/sound";

type Obstacle = { id: number; lane: number; y: number; kind: "rock" | "coin" };

const LANES = 3;
const GOAL = 12;

export function RaceGame({
  theme,
  sticker,
  onWin,
}: {
  theme: string;
  sticker: string;
  onWin: (stars: number) => void;
}) {
  const [lane, setLane] = useState(1);
  const [items, setItems] = useState<Obstacle[]>([]);
  const [collected, setCollected] = useState(0);
  const [lives, setLives] = useState(3);
  const [won, setWon] = useState(false);
  const idRef = useRef(0);
  const laneRef = useRef(1);
  laneRef.current = lane;

  const over = won || lives <= 0;

  useEffect(() => {
    if (over) return;
    const spawn = window.setInterval(() => {
      idRef.current += 1;
      setItems((current) => [
        ...current,
        {
          id: idRef.current,
          lane: Math.floor(Math.random() * LANES),
          y: -10,
          kind: Math.random() > 0.45 ? "coin" : "rock",
        },
      ]);
    }, 750);
    return () => window.clearInterval(spawn);
  }, [over]);

  useEffect(() => {
    if (over) return;
    const tick = window.setInterval(() => {
      setItems((current) => {
        const next: Obstacle[] = [];
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
          if (y < 110) next.push({ ...item, y });
        }
        return next;
      });
    }, 60);
    return () => window.clearInterval(tick);
  }, [over]);

  useEffect(() => {
    if (collected >= GOAL && !won) {
      setWon(true);
      playSound("win");
      onWin(14);
    }
  }, [collected, won, onWin]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setLane((l) => Math.max(0, l - 1));
      if (e.key === "ArrowRight") setLane((l) => Math.min(LANES - 1, l + 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const replay = useCallback(() => {
    setItems([]);
    setCollected(0);
    setLives(3);
    setWon(false);
    setLane(1);
  }, []);

  return (
    <div className="relative mx-auto mt-6 w-full max-w-md">
      <div className="mb-3 flex justify-center gap-3">
        <ScoreBar label="🪙" value={`${collected}/${GOAL}`} />
        <ScoreBar label="❤️" value={`${Math.max(0, lives)}`} />
      </div>

      <div className="toy-card relative h-[420px] overflow-hidden bg-gradient-to-b from-white/70 to-white/30">
        {[1, 2].map((line) => (
          <div
            key={line}
            aria-hidden
            className="absolute top-0 h-full border-l-4 border-dashed border-white/70"
            style={{ left: `${(line / LANES) * 100}%` }}
          />
        ))}
        {items.map((item) => (
          <span
            key={item.id}
            aria-hidden
            className="absolute text-4xl"
            style={{
              left: `${(item.lane + 0.5) * (100 / LANES)}%`,
              top: `${item.y}%`,
              transform: "translate(-50%,-50%)",
            }}
          >
            {item.kind === "coin" ? "🪙" : "🪨"}
          </span>
        ))}
        <span
          aria-hidden
          className="absolute bottom-6 text-5xl transition-all duration-150"
          style={{ left: `${(lane + 0.5) * (100 / LANES)}%`, transform: "translateX(-50%)" }}
        >
          {theme}
        </span>

        {lives <= 0 && !won && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-white/70 backdrop-blur-md">
            <span className="text-6xl">😅</span>
            <p className="font-display text-2xl font-extrabold">Quase lá! Tente de novo</p>
            <button
              onClick={replay}
              className="toy-card toy-press px-6 py-4 font-display text-xl font-extrabold"
            >
              🔁 Jogar de novo
            </button>
          </div>
        )}
        {won && <WinScreen stars={14} sticker={sticker} onReplay={replay} />}
      </div>

      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={() => setLane((l) => Math.max(0, l - 1))}
          aria-label="Ir para a esquerda"
          className="toy-card toy-press px-8 py-4 text-3xl active:scale-95"
        >
          ⬅️
        </button>
        <button
          onClick={() => setLane((l) => Math.min(LANES - 1, l + 1))}
          aria-label="Ir para a direita"
          className="toy-card toy-press px-8 py-4 text-3xl active:scale-95"
        >
          ➡️
        </button>
      </div>
    </div>
  );
}
