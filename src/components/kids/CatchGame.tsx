import { useEffect, useRef, useState } from "react";
import { ScoreBar, WinScreen } from "./GameShell";

type Falling = { id: number; x: number; emoji: string; duration: number };

const TARGET = 12;

export function CatchGame({
  emoji,
  sticker,
  onWin,
}: {
  emoji: string;
  sticker: string;
  onWin: (stars: number) => void;
}) {
  const [items, setItems] = useState<Falling[]>([]);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const nextId = useRef(0);

  useEffect(() => {
    if (done) return;
    const timer = window.setInterval(() => {
      nextId.current += 1;
      const id = nextId.current;
      setItems((current) => [
        ...current.slice(-9),
        { id, x: 5 + Math.random() * 85, emoji, duration: 3.4 + Math.random() * 2.2 },
      ]);
    }, 620);
    return () => window.clearInterval(timer);
  }, [emoji, done]);

  const catchItem = (id: number) => {
    setItems((current) => current.filter((item) => item.id !== id));
    setScore((value) => {
      const next = value + 1;
      if (next >= TARGET) {
        setDone(true);
        onWin(10);
      }
      return next;
    });
  };

  const replay = () => {
    setScore(0);
    setItems([]);
    setDone(false);
  };

  return (
    <div className="relative h-[62vh] min-h-[380px] w-full overflow-hidden rounded-3xl border-4 border-white/70 bg-gradient-to-b from-sunny/40 to-grass/30 shadow-[var(--shadow-soft)]">
      <div className="absolute left-3 top-3 z-10">
        <ScoreBar label="🧺" value={`${score}/${TARGET}`} />
      </div>

      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => catchItem(item.id)}
          aria-label="Pegar"
          className="absolute -top-16 select-none text-5xl active:scale-125"
          style={{
            left: `${item.x}%`,
            animation: `fall ${item.duration}s linear forwards`,
          }}
        >
          {item.emoji}
        </button>
      ))}

      <div className="absolute bottom-0 left-0 right-0 h-10 bg-white/40" />
      <style>{`@keyframes fall { to { transform: translateY(70vh); } }`}</style>

      {done && <WinScreen stars={10} sticker={sticker} onReplay={replay} />}
    </div>
  );
}
