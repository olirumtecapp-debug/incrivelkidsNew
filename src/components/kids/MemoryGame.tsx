import { playSound } from "@/lib/sound";
import { useMemo, useState } from "react";
import { ScoreBar, WinScreen } from "./GameShell";

type Card = { key: string; emoji: string };

function buildDeck(pool: string[]): Card[] {
  const picked = pool.slice(0, 6);
  const doubled = [...picked, ...picked];
  return doubled
    .map((emoji, i) => ({ emoji, key: `${emoji}-${i}`, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ emoji, key }) => ({ emoji, key }));
}

export function MemoryGame({
  pool,
  sticker,
  onWin,
}: {
  pool: string[];
  sticker: string;
  onWin: (stars: number) => void;
}) {
  const [round, setRound] = useState(0);
  const deck = useMemo(() => buildDeck(pool), [pool, round]);
  const [flipped, setFlipped] = useState<string[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [locked, setLocked] = useState(false);
  const [done, setDone] = useState(false);

  const flip = (card: Card) => {
    if (locked || flipped.includes(card.key) || matched.includes(card.emoji)) return;
    const next = [...flipped, card.key];
    setFlipped(next);
    if (next.length < 2) return;

    const first = deck.find((item) => item.key === next[0]);
    const second = deck.find((item) => item.key === next[1]);
    if (first && second && first.emoji === second.emoji) {
      const nextMatched = [...matched, first.emoji];
      setMatched(nextMatched);
      setFlipped([]);
      if (nextMatched.length === 6) {
        setDone(true);
        playSound("win");
        onWin(12);
      }
      return;
    }
    setLocked(true);
    window.setTimeout(() => {
      setFlipped([]);
      setLocked(false);
    }, 800);
  };

  const replay = () => {
    setFlipped([]);
    setMatched([]);
    setDone(false);
    setRound((value) => value + 1);
  };

  return (
    <div className="relative w-full rounded-3xl border-4 border-white/70 bg-gradient-to-b from-bubblegum/30 to-grape/20 p-4 shadow-[var(--shadow-soft)]">
      <div className="mb-3 flex justify-center">
        <ScoreBar label="🧠" value={`${matched.length}/6 pares`} />
      </div>

      <div className="mx-auto grid max-w-lg grid-cols-4 gap-3">
        {deck.map((card) => {
          const open = flipped.includes(card.key) || matched.includes(card.emoji);
          return (
            <button
              key={card.key}
              onClick={() => { playSound("click"); flip(card); }}
              aria-label={open ? card.emoji : "Carta virada"}
              className={`toy-card flex aspect-square items-center justify-center text-4xl transition-transform duration-200 active:scale-95 ${
                open ? "anim-pop" : "hover:scale-105"
              }`}
              style={{ background: open ? "white" : "var(--gradient-candy)" }}
            >
              {open ? card.emoji : "❔"}
            </button>
          );
        })}
      </div>

      {done && <WinScreen stars={12} sticker={sticker} onReplay={replay} />}
    </div>
  );
}
