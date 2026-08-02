import { createFileRoute, Link } from "@tanstack/react-router";
import { LivingSky } from "@/components/kids/LivingSky";
import { TopBar } from "@/components/kids/TopBar";
import { STICKERS } from "@/lib/kids-data";
import { useProgress } from "@/lib/progress";

export const Route = createFileRoute("/album")({
  head: () => ({
    meta: [
      { title: "Álbum das Descobertas — Incríveis Jogos Kids" },
      {
        name: "description",
        content: "Colecione adesivos fofos jogando os minijogos do Universo da Diversão.",
      },
      { property: "og:title", content: "Álbum das Descobertas — Incríveis Jogos Kids" },
      { property: "og:description", content: "Veja todos os adesivos que você já desbloqueou." },
    ],
  }),
  component: AlbumPage,
});

function AlbumPage() {
  const { progress } = useProgress();

  return (
    <div className="relative min-h-screen overflow-hidden pb-24">
      <LivingSky />
      <TopBar back="/" />

      <main className="relative z-10 mx-auto w-full max-w-5xl px-4 pt-6 sm:px-6">
        <h1 className="font-display text-center text-3xl font-extrabold sm:text-4xl">
          📖 Álbum das Descobertas
        </h1>
        <p className="mt-1 text-center text-muted-foreground">
          {progress.stickers.length} de {STICKERS.length} adesivos encontrados
        </p>

        <div className="mt-8 grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-8">
          {STICKERS.map((sticker, i) => {
            const found = progress.stickers.includes(sticker);
            return (
              <div
                key={sticker + i}
                className={`toy-card anim-pop flex aspect-square items-center justify-center text-4xl ${
                  found ? "anim-float" : "opacity-40 grayscale"
                }`}
                style={{ animationDelay: `${i * 25}ms` }}
              >
                {found ? sticker : "❓"}
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/"
            className="toy-card toy-press px-6 py-4 font-display text-xl font-extrabold hover:scale-105 active:scale-95"
          >
            🎠 Voltar para a cidade
          </Link>
        </div>
      </main>
    </div>
  );
}
