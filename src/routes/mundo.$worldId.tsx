import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { LivingSky } from "@/components/kids/LivingSky";
import { TopBar } from "@/components/kids/TopBar";
import { WORLDS, type MiniGame } from "@/lib/kids-data";

export const Route = createFileRoute("/mundo/$worldId")({
  loader: ({ params }) => {
    const world = WORLDS.find((item) => item.id === params.worldId);
    if (!world) throw notFound();
    return world;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Mundo"} — Incríveis Jogos Kids` },
      {
        name: "description",
        content: `Minijogos divertidos do mundo ${loaderData?.name ?? ""} para crianças de 3 a 8 anos.`,
      },
      { property: "og:title", content: `${loaderData?.name ?? "Mundo"} — Incríveis Jogos Kids` },
      { property: "og:description", content: "Escolha um minijogo e ganhe estrelas e adesivos." },
    ],
  }),
  component: WorldPage,
});

function WorldPage() {
  const world = Route.useLoaderData();

  return (
    <div className="relative min-h-screen overflow-hidden pb-24">
      <LivingSky />
      <TopBar back="/" />

      <main className="relative z-10 mx-auto w-full max-w-5xl px-4 pt-6 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <span className="text-7xl anim-float drop-shadow-md">{world.emoji}</span>
          <h1 className="font-display mt-2 text-3xl font-extrabold sm:text-4xl">{world.name}</h1>
          <p className="text-muted-foreground">Escolha uma brincadeira!</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(world.games as MiniGame[]).map((game, i) => (
            <Link
              key={game.id}
              to="/jogo/$gameId"
              params={{ gameId: game.id }}
              className="toy-card toy-press anim-pop flex items-center gap-4 p-5 hover:-translate-y-1 active:scale-95"
              style={{
                animationDelay: `${i * 60}ms`,
                background: `linear-gradient(150deg, color-mix(in oklab, ${world.color} 30%, white), white)`,
              }}
            >
              <span className="text-5xl anim-wiggle">{game.emoji}</span>
              <span className="font-display text-lg font-extrabold leading-tight">{game.name}</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
