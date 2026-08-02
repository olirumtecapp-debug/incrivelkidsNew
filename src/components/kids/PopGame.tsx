import { playNote, playSound } from "@/lib/sound";
import { useCallback, useEffect, useRef, useState } from "react";
import { ScoreBar, WinScreen } from "./GameShell";

type Bubble = { id: number; x: number; y: number; size: number; popped: boolean };

const TARGET = 14;

export function PopGame({
  emoji,
  sticker,
  music = false,
  onWin,
}: {
  emoji: string;
  sticker: string;
  music?: boolean;
  onWin: (stars: number) => void;
}) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const nextId = useRef(0);

  const spawn = useCallback(() => {
    setBubbles((current) => {
      const alive = current.filter((bubble) => !bubble.popped);
      if (alive.length > 7) return alive;
      nextId.current += 1;
      return [
        ...alive,
        {
          id: nextId.current,
          x: 6 + Math.random() * 82,
          y: 8 + Math.random() * 74,
          size: 46 + Math.random() * 44,
          popped: false,
        },
      ];
    });
  }, []);

  useEffect(() => {
    if (done) return;
    const timer = window.setInterval(spawn, 750);
    spawn();
    return () => window.clearInterval(timer);
  }, [spawn, done]);

  const pop = (id: number) => {
    setBubbles((current) => current.map((b) => (b.id === id ? { ...b, popped: true } : b)));
    setScore((value) => {
      const next = value + 1;
      if (next >= TARGET && !done) {
        setDone(true);
        playSound("win");
        onWin(10);
      }
      return next;
    });
  };

  const replay = () => {
    setScore(0);
    setBubbles([]);
    setDone(false);
  };

  return (
    <div className="relative h-[62vh] min-h-[380px] w-full overflow-hidden rounded-3xl border-4 border-white/70 bg-gradient-to-b from-sky/40 to-turquoise/30 shadow-[var(--shadow-soft)]">
      <div className="absolute left-3 top-3 z-10">
        <ScoreBar label="🫧" value={`${score}/${TARGET}`} />
      </div>

      {bubbles.map((bubble) => (
        <button
          key={bubble.id}
          onPointerDown={(e) => {
            e.preventDefault();
            if (music) playNote(bubble.id % 8);
            else playSound("pop");
            pop(bubble.id);
          }}
          aria-label="Estourar"
          className={`absolute anim-pop select-none transition-transform duration-200 active:scale-125 touch-none ${
            bubble.popped ? "pointer-events-none scale-0 opacity-0" : "anim-float"
          }`}
          style={{ left: `${bubble.x}%`, top: `${bubble.y}%`, fontSize: bubble.size }}
        >
          {emoji}
        </button>
      ))}

      {done && <WinScreen stars={10} sticker={sticker} onReplay={replay} />}
    </div>
  );
}
