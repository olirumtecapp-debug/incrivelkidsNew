import { useMemo } from "react";

type Item = { left: number; delay: number; duration: number; scale: number; emoji: string };

function build(emojis: string[], count: number, seedOffset: number): Item[] {
  return Array.from({ length: count }, (_, i) => {
    const seed = (i + seedOffset) * 9301;
    const rnd = (n: number) => ((seed * (n + 3)) % 97) / 97;
    return {
      left: Math.round(rnd(1) * 92),
      delay: Math.round(rnd(2) * 18),
      duration: 16 + Math.round(rnd(3) * 22),
      scale: 0.7 + rnd(4) * 0.9,
      emoji: emojis[i % emojis.length],
    };
  });
}

export function LivingSky() {
  const clouds = useMemo(() => build(["☁️", "⛅", "☁️"], 6, 1), []);
  const balloons = useMemo(() => build(["🎈", "🪁", "🎈", "🦋", "🐦"], 9, 7), []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute right-6 top-6 text-6xl anim-sparkle">☀️</div>
      <div className="absolute left-1/3 top-10 text-5xl opacity-70 anim-float">🌈</div>
      {clouds.map((cloud, i) => (
        <span
          key={`c-${i}`}
          className="absolute anim-drift select-none opacity-80"
          style={{
            top: `${6 + i * 9}%`,
            fontSize: `${2.4 * cloud.scale}rem`,
            animationDuration: `${cloud.duration * 2.2}s`,
            animationDelay: `-${cloud.delay}s`,
          }}
        >
          {cloud.emoji}
        </span>
      ))}
      {balloons.map((item, i) => (
        <span
          key={`b-${i}`}
          className="absolute bottom-0 anim-rise select-none"
          style={{
            left: `${item.left}%`,
            fontSize: `${1.8 * item.scale}rem`,
            animationDuration: `${item.duration}s`,
            animationDelay: `-${item.delay}s`,
          }}
        >
          {item.emoji}
        </span>
      ))}
    </div>
  );
}
