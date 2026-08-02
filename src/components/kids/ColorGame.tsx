import { useCallback, useState } from "react";
import { ScoreBar, WinScreen } from "./GameShell";
import { playSound } from "@/lib/sound";

const ROUNDS = 6;

const COLORS = [
  { name: "Vermelho", css: "#ef4444" },
  { name: "Azul", css: "#3b82f6" },
  { name: "Amarelo", css: "#facc15" },
  { name: "Verde", css: "#22c55e" },
  { name: "Roxo", css: "#a855f7" },
  { name: "Laranja", css: "#fb923c" },
  { name: "Rosa", css: "#f472b6" },
  { name: "Marrom", css: "#a16207" },
];

function makeRound(count: number) {
  const shuffled = [...COLORS].sort(() => Math.random() - 0.5).slice(0, count);
  const target = Math.floor(Math.random() * shuffled.length);
  return { options: shuffled, target };
}

export function ColorGame({
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

  const targetColor = data.options[data.target]!;

  return (
    <div className="relative mx-auto mt-4 w-full max-w-md">
      <div className="mb-3 flex justify-center">
        <ScoreBar label="🎨" value={`${round}/${ROUNDS}`} />
      </div>

      <div className="toy-card relative p-4">
        <p className="text-center font-display text-xl font-extrabold sm:text-2xl">
          Toque no <span style={{ color: targetColor.css }}>{targetColor.name}</span>!
        </p>
        <div className="mt-4 flex min-h-40 flex-wrap items-center justify-center gap-3">
          {data.options.map((color, index) => (
            <button
              key={color.name}
              onClick={() => pick(index)}
              aria-label={color.name}
              className={`anim-pop size-20 rounded-full border-4 border-white/70 shadow-lg transition active:scale-90 sm:size-24 ${
                wrong === index ? "anim-shake opacity-60" : "hover:scale-110"
              }`}
              style={{ background: color.css, animationDelay: `${index * 60}ms` }}
            />
          ))}
        </div>
        {won && <WinScreen stars={12} sticker={sticker} onReplay={replay} />}
      </div>
    </div>
  );
}
