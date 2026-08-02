import { useCallback, useEffect, useRef, useState } from "react";
import { ScoreBar, WinScreen } from "./GameShell";
import { playSound } from "@/lib/sound";

const HOLES = 9;
const GOAL = 12;

export function WhackGame({
  emoji,
  sticker,
  onWin,
}: {
  emoji: string;
  sticker: string;
  onWin: (stars: number) => void;
}) {
  const [active, setActive] = useState<number | null>(null);
  const [hits, setHits] = useState(0);
  const [won, setWon] = useState(false);
  

  useEffect(() => {
    if (won) return;
    const speed = Math.max(520, 1100 - hits * 45);
    const timer = window.setInterval(() => {
      setActive(Math.floor(Math.random() * HOLES));
    }, speed);
    return () => window.clearInterval(timer);
  }, [hits, won]);

  const hit = useCallback(
    (index: number) => {
      if (won || index !== active) return;
      setActive(null);
      playSound("pop");
      setHits((value) => {
        const next = value + 1;
        if (next >= GOAL && !won) {
          setWon(true);
          playSound("win");
          onWin(12);
        }
        return next;
      });
    },
    [active, onWin, won],
  );

  const replay = () => {
    setHits(0);
    setWon(false);
    setActive(null);
  };

  return (
    <div className="relative mx-auto mt-4 w-full max-w-md">
      <div className="mb-3 flex justify-center">
        <ScoreBar label="🎯" value={`${Math.min(hits, GOAL)}/${GOAL}`} />
      </div>

      <div className="toy-card relative p-3 sm:p-4">
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {Array.from({ length: HOLES }).map((_, index) => (
            <button
              key={index}
              onPointerDown={(e) => {
                e.preventDefault();
                hit(index);
              }}
              aria-label="Buraco"
              className="flex aspect-square items-center justify-center rounded-3xl bg-black/10 text-4xl transition active:scale-95 sm:text-5xl touch-none"
            >
              {active === index ? <span className="anim-pop">{emoji}</span> : null}
            </button>
          ))}
        </div>
        {won && <WinScreen stars={12} sticker={sticker} onReplay={replay} />}
      </div>
    </div>
  );
}
