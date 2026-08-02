import { createFileRoute, notFound } from "@tanstack/react-router";
import { useCallback } from "react";
import { LivingSky } from "@/components/kids/LivingSky";
import { TopBar } from "@/components/kids/TopBar";
import { PopGame } from "@/components/kids/PopGame";
import { CatchGame } from "@/components/kids/CatchGame";
import { MemoryGame } from "@/components/kids/MemoryGame";
import { PaintGame } from "@/components/kids/PaintGame";
import { findGame, STICKERS, type MiniGame, type World } from "@/lib/kids-data";
import { useProgress } from "@/lib/progress";

const MEMORY_POOLS: Record<string, string[]> = {
  default: ["🐶", "😺", "🐰", "🐼", "🦄", "🦖"],
  aquario: ["🐠", "🐙", "🦀", "🐚", "🐬", "🐳"],
  doces: ["🍬", "🧁", "🍭", "🍰", "🍩", "🍪"],
  espaco: ["🪐", "🚀", "🌟", "🌙", "☄️", "👽"],
  bosque: ["🍄", "🦋", "🐞", "🌳", "🐿", "🌸"],
  circo: ["🤡", "🎪", "🎈", "🦁", "🍿", "🎩"],
  teatro: ["🥁", "🎺", "🎸", "🎹", "🎻", "🎤"],
  praia: ["🏝", "🐚", "⛱", "🦀", "🩴", "🥥"],
  dinos: ["🦕", "🦖", "🥚", "🌋", "🌿", "🦴"],
  parque: ["🎠", "🎡", "🎢", "🍦", "🎈", "🐞"],
  castelo: ["🦄", "👑", "🏰", "🧚", "🐉", "⭐"],
};

export const Route = createFileRoute("/jogo/$gameId")({
  loader: ({ params }) => {
    const found = findGame(params.gameId);
    if (!found) throw notFound();
    return found;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.game.name ?? "Jogo"} — Incríveis Jogos Kids` },
      {
        name: "description",
        content: `Brinque de ${loaderData?.game.name ?? "minijogo"} e ganhe estrelas e adesivos no Universo da Diversão.`,
      },
      { property: "og:title", content: `${loaderData?.game.name ?? "Jogo"} — Incríveis Jogos Kids` },
      { property: "og:description", content: "Minijogo infantil gratuito, simples e divertido." },
    ],
  }),
  component: GamePage,
});

function GamePage() {
  const { world, game } = Route.useLoaderData() as { world: World; game: MiniGame };
  const { reward } = useProgress();

  const sticker =
    STICKERS.includes(game.emoji) ? game.emoji : (STICKERS[game.name.length % STICKERS.length] ?? "⭐");

  const onWin = useCallback(
    (stars: number) => {
      reward(game.id, stars, sticker);
    },
    [game.id, reward, sticker],
  );

  return (
    <div className="relative min-h-screen overflow-hidden pb-16">
      <LivingSky />
      <TopBar back={`/mundo/${world.id}`} />

      <main className="relative z-10 mx-auto w-full max-w-4xl px-4 pt-4 sm:px-6">
        <h1 className="font-display mb-3 text-center text-2xl font-extrabold sm:text-3xl">
          {game.emoji} {game.name}
        </h1>

        {game.kind === "pop" && (
          <PopGame emoji={game.theme} sticker={sticker} onWin={onWin} />
        )}
        {game.kind === "catch" && (
          <CatchGame emoji={game.theme} sticker={sticker} onWin={onWin} />
        )}
        {game.kind === "memory" && (
          <MemoryGame
            pool={MEMORY_POOLS[world.id] ?? MEMORY_POOLS["default"]!}
            sticker={sticker}
            onWin={onWin}
          />
        )}
        {game.kind === "paint" && <PaintGame onWin={onWin} />}
      </main>
    </div>
  );
}
