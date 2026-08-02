import { createFileRoute, Link } from "@tanstack/react-router";
import { LivingSky } from "@/components/kids/LivingSky";
import { TopBar } from "@/components/kids/TopBar";
import { MascotBubble } from "@/components/kids/MascotBubble";
import { WORLDS } from "@/lib/kids-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Incríveis Jogos Kids — Universo da Diversão" },
      {
        name: "description",
        content:
          "Uma cidade mágica com dezenas de minijogos gratuitos para crianças de 3 a 8 anos: balões, memória, pintura e muito mais.",
      },
      { property: "og:title", content: "Incríveis Jogos Kids — Universo da Diversão" },
      {
        property: "og:description",
        content: "Entre na cidade animada e brinque com dezenas de minijogos infantis grátis.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden pb-28">
      <LivingSky />
      <TopBar />

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-6 sm:px-6">
        <h1 className="font-display text-center text-3xl font-extrabold drop-shadow-sm sm:text-5xl">
          Bem-vindo à Cidade da Diversão! 🎉
        </h1>
        <p className="mt-2 text-center text-base text-muted-foreground sm:text-lg">
          Toque em um lugar para começar a brincar
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {WORLDS.map((world, i) => (
            <Link
              key={world.id}
              to="/mundo/$worldId"
              params={{ worldId: world.id }}
              className="toy-card toy-press anim-pop group flex flex-col items-center gap-2 p-5 text-center hover:-translate-y-2 hover:rotate-1 active:scale-95"
              style={{
                animationDelay: `${i * 45}ms`,
                background: `linear-gradient(160deg, color-mix(in oklab, ${world.color} 34%, white), color-mix(in oklab, ${world.color} 12%, white))`,
              }}
            >
              <span
                className="text-6xl anim-float drop-shadow-md sm:text-7xl"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {world.emoji}
              </span>
              <span className="font-display text-lg font-extrabold leading-tight sm:text-xl">
                {world.name}
              </span>
              <span className="rounded-full bg-white/70 px-3 py-1 text-sm font-bold">
                {world.games.length} jogos
              </span>
            </Link>
          ))}
        </div>
      </main>

      <MascotBubble />
    </div>
  );
}
