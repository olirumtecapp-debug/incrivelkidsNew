import { useEffect, useState } from "react";

export function WinScreen({
  stars,
  sticker,
  onReplay,
}: {
  stars: number;
  sticker: string;
  onReplay: () => void;
}) {
  const confetti = ["🎉", "✨", "🎊", "⭐", "🎈", "🌈"];
  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 rounded-3xl bg-white/70 backdrop-blur-md">
      {confetti.map((emoji, i) => (
        <span
          key={i}
          aria-hidden
          className="absolute text-4xl anim-rise"
          style={{
            left: `${8 + i * 15}%`,
            animationDuration: `${5 + i}s`,
            animationDelay: `-${i * 0.6}s`,
          }}
        >
          {emoji}
        </span>
      ))}
      <div className="anim-pop text-7xl">{sticker}</div>
      <h2 className="font-display text-3xl font-extrabold">Muito bem! 🎉</h2>
      <p className="text-lg font-bold">
        Você ganhou <span className="text-2xl">⭐</span> {stars} estrelas e um adesivo novo!
      </p>
      <button
        onClick={onReplay}
        className="toy-card toy-press px-6 py-4 font-display text-xl font-extrabold hover:scale-105 active:scale-95"
      >
        🔁 Jogar de novo
      </button>
    </div>
  );
}

export function useCountdown(seconds: number, active: boolean) {
  const [left, setLeft] = useState(seconds);

  useEffect(() => {
    if (!active) {
      setLeft(seconds);
      return;
    }
    const timer = window.setInterval(() => {
      setLeft((value) => (value <= 1 ? 0 : value - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [active, seconds]);

  return left;
}

export function ScoreBar({ label, value }: { label: string; value: string }) {
  return (
    <div className="toy-card flex items-center gap-2 px-4 py-2 font-display text-lg font-extrabold">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
