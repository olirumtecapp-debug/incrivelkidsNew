import { useEffect, useState } from "react";
import { MASCOTS } from "@/lib/kids-data";

export function MascotBubble() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % MASCOTS.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const mascot = MASCOTS[index] ?? MASCOTS[0]!;

  return (
    <div className="pointer-events-none fixed bottom-4 left-4 z-20 flex items-end gap-2">
      <div className="text-6xl anim-float select-none drop-shadow-lg">{mascot.emoji}</div>
      <div key={mascot.name} className="toy-card anim-pop max-w-[16rem] px-4 py-3">
        <p className="font-display text-base font-extrabold">{mascot.name}</p>
        <p className="text-sm text-muted-foreground">{mascot.line}</p>
      </div>
    </div>
  );
}
