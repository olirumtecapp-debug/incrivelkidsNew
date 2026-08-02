import { useCallback, useState } from "react";
import { ScoreBar, WinScreen } from "./GameShell";
import { playSound } from "@/lib/sound";

const ROUNDS = 6;

const PAIRS: Array<[string, string, string]> = [
  ["🐶", "🦴", "O que o cachorro quer?"],
  ["🐱", "🧶", "Com o que o gato brinca?"],
  ["🐝", "🌻", "Onde a abelha pousa?"],
  ["🐟", "🌊", "Onde mora o peixinho?"],
  ["🐦", "🪺", "Onde o passarinho dorme?"],
  ["🚗", "🛣", "Por onde anda o carro?"],
  ["🚀", "🪐", "Para onde vai o foguete?"],
  ["🧸", "🎁", "O que vem embrulhado?"],
  ["🍦", "🥶", "O sorvete é o quê?"],
  ["🌧", "☂️", "O que usar na chuva?"],
  ["🐄", "🥛", "O que a vaquinha dá?"],
  ["🐔", "🥚", "O que a galinha bota?"],
];

function makeRound(count: number) {
  const shuffled = [...PAIRS].sort(() => Math.random() - 0.5);
  const chosen = shuffled[0]!;
  const distractors = shuffled.slice(1, count).map((pair) => pair[1]);
  const options = [chosen[1], ...distractors].sort(() => Math.random() - 0.5);
  return {
    prompt: chosen[0],
    question: chosen[2],
    answer: chosen[1],
    options,
  };
}

export function PairsGame({
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
      if (data.options[index] !== data.answer) {
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
      setData(makeRound(Math.min(5, 3 + Math.floor(round / 2))));
    },
    [data.answer, data.options, onWin, round, won],
  );

  const replay = () => {
    setRound(1);
    setWon(false);
    setData(makeRound(3));
  };

  return (
    <div className="relative mx-auto mt-4 w-full max-w-md">
      <div className="mb-3 flex justify-center">
        <ScoreBar label="🔗" value={`${round}/${ROUNDS}`} />
      </div>

      <div className="toy-card relative p-4">
        <p className="text-center font-display text-xl font-extrabold sm:text-2xl">
          {data.question}
        </p>
        <div className="mt-2 text-center text-6xl anim-float">{data.prompt}</div>
        <div className="mt-4 flex min-h-28 flex-wrap items-center justify-center gap-3">
          {data.options.map((option, index) => (
            <button
              key={`${option}-${index}`}
              onPointerDown={(e) => {
                e.preventDefault();
                pick(index);
              }}
              aria-label="Resposta"
              className={`anim-pop rounded-3xl bg-white/60 p-3 text-4xl transition active:scale-90 sm:text-5xl ${
                wrong === index ? "anim-shake opacity-60" : "hover:scale-110"
              }`}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {option}
            </button>
          ))}
        </div>
        {won && <WinScreen stars={12} sticker={sticker} onReplay={replay} />}
      </div>
    </div>
  );
}
