import { useEffect, useRef, useState } from "react";

const COLORS = [
  "#38bdf8",
  "#2dd4bf",
  "#4ade80",
  "#facc15",
  "#fb923c",
  "#f472b6",
  "#a78bfa",
  "#111827",
];

export function PaintGame({ onWin }: { onWin: (stars: number) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const rewarded = useRef(false);
  const [color, setColor] = useState(COLORS[0]!);
  const [size, setSize] = useState(14);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(2, 2);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, rect.width, rect.height);
  }, []);

  const point = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };

  const start = (event: React.PointerEvent<HTMLCanvasElement>) => {
    drawing.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    move(event);
  };

  const move = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return;
    const ctx = canvasRef.current?.getContext("2d");
    const position = point(event);
    if (!ctx || !position) return;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(position.x, position.y, size / 2, 0, Math.PI * 2);
    ctx.fill();
    if (!rewarded.current) {
      rewarded.current = true;
      onWin(8);
    }
  };

  const stop = () => {
    drawing.current = false;
  };

  const clear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="w-full">
      <div className="mb-3 flex flex-wrap items-center justify-center gap-2">
        {COLORS.map((item) => (
          <button
            key={item}
            onClick={() => setColor(item)}
            aria-label={`Cor ${item}`}
            className={`h-12 w-12 rounded-full border-4 transition-transform active:scale-90 ${
              color === item ? "scale-110 border-white shadow-[var(--shadow-soft)]" : "border-white/60"
            }`}
            style={{ backgroundColor: item }}
          />
        ))}
        <button
          onClick={() => setSize(size === 14 ? 32 : 14)}
          className="toy-card px-4 py-3 font-display text-base font-extrabold active:scale-95"
        >
          {size === 14 ? "🖌 Fino" : "🖍 Grosso"}
        </button>
        <button
          onClick={clear}
          className="toy-card px-4 py-3 font-display text-base font-extrabold active:scale-95"
        >
          🧽 Limpar
        </button>
      </div>

      <canvas
        ref={canvasRef}
        onPointerDown={start}
        onPointerMove={move}
        onPointerUp={stop}
        onPointerLeave={stop}
        className="h-[58vh] min-h-[340px] w-full touch-none rounded-3xl border-4 border-white/80 bg-white shadow-[var(--shadow-soft)]"
      />
    </div>
  );
}
