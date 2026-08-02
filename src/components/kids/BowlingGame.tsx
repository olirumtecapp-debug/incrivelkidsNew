import { useCallback, useEffect, useRef, useState } from "react";
import { ScoreBar, WinScreen } from "./GameShell";
import { playSound } from "@/lib/sound";

const ROUNDS = 3;

export function BowlingGame({ sticker, onWin }: { sticker: string; onWin: (stars: number) => void }) {
  const [aim, setAim] = useState(50);
  const [rolling, setRolling] = useState(false);
  const [ballY, setBallY] = useState(0);
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [pinsDown, setPinsDown] = useState<number[]>([]);
  const [won, setWon] = useState(false);
  const dirRef = useRef(1);

  const pins = [20, 35, 50, 65, 80, 42.5, 57.5, 50].slice(0, 6);

  useEffect(() => {
    if (rolling || won) return;
    const timer = window.setInterval(() => {
      setAim((value) => {
        let next = value + dirRef.current * 2.5;
        if (next > 88) {
          next = 88;
          dirRef.current = -1;
        }
        if (next < 12) {
          next = 12;
          dirRef.current = 1;
        }
        return next;
      });
    }, 40);
    return () => window.clearInterval(timer);
  }, [rolling, won]);

  const roll = useCallback(() => {
    if (rolling || won) return;
    setRolling(true);
    playSound("roll");
    let y = 0;
    const timer = window.setInterval(() => {
      y += 6;
      setBallY(y);
      if (y >= 100) {
        window.clearInterval(timer);
        const hit = pins
          .map((x, i) => ({ x, i }))
          .filter(({ x }) => Math.abs(x - aim) < 12)
          .map(({ i }) => i);
        setPinsDown(hit);
        setScore((s) => s + hit.length);
        playSound(hit.length ? "pop" : "wrong");
        window.setTimeout(() => {
          setBallY(0);
          setPinsDown([]);
          setRolling(false);
          setRound((r) => r + 1);
        }, 900);
      }
    }, 30);
  }, [aim, pins, rolling, won]);

  useEffect(() => {
    if (round > ROUNDS && !won) {
      setWon(true);
      playSound("win");
      onWin(10 + score);
    }
  }, [round, won, score, onWin]);

  const replay = () => {
    setRound(1);
    setScore(0);
    setWon(false);
    setPinsDown([]);
    setBallY(0);
  };

  return (
    <div className="relative mx-auto mt-6 w-full max-w-md">
      <div className="mb-3 flex justify-center gap-3">
        <ScoreBar label="🎳" value={`${Math.min(round, ROUNDS)}/${ROUNDS}`} />
        <ScoreBar label="🏆" value={`${score} pinos`} />
      </div>

      <div className="toy-card relative h-[420px] overflow-hidden bg-gradient-to-b from-white/80 to-white/40">
        {pins.map((x, i) => (
          <span
            key={i}
            aria-hidden
            className="absolute text-4xl transition-transform duration-300"
            style={{
              left: `${x}%`,
              top: i < 5 ? "12%" : "26%",
              transform: `translateX(-50%) ${pinsDown.includes(i) ? "rotate(80deg) translateY(20px)" : ""}`,
              opacity: pinsDown.includes(i) ? 0.4 : 1,
            }}
          >
            🎳
          </span>
        ))}

        <span
          aria-hidden
          className="absolute text-4xl"
          style={{
            left: `${aim}%`,
            bottom: `${8 + ballY * 0.65}%`,
            transform: "translateX(-50%)",
          }}
        >
          ⚪
        </span>

        {!rolling && !won && (
          <div
            aria-hidden
            className="absolute bottom-[14%] h-[60%] w-1 bg-primary/40"
            style={{ left: `${aim}%` }}
          />
        )}

        {won && <WinScreen stars={10 + score} sticker={sticker} onReplay={replay} />}
      </div>

      <button
        onClick={roll}
        disabled={rolling}
        className="toy-card toy-press mx-auto mt-4 block px-8 py-4 font-display text-2xl font-extrabold active:scale-95 disabled:opacity-50"
      >
        🎳 Jogar a bola!
      </button>
    </div>
  );
}
