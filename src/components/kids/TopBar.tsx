import { Link } from "@tanstack/react-router";
import { useProgress } from "@/lib/progress";

export function TopBar({ back }: { back?: string }) {
  const { progress } = useProgress();

  return (
    <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 pt-4 sm:px-6">
      {back ? (
        <Link
          to={back}
          className="toy-card toy-press flex items-center gap-2 px-4 py-3 text-lg font-bold hover:scale-105 active:scale-95"
          aria-label="Voltar"
        >
          <span className="text-2xl">⬅️</span>
          <span className="hidden sm:inline">Voltar</span>
        </Link>
      ) : (
        <Link to="/" className="flex items-center gap-2">
          <span className="text-4xl anim-wiggle">🎠</span>
          <span className="font-display text-xl leading-5 font-extrabold sm:text-2xl">
            Incríveis Jogos
            <span className="block text-sm text-muted-foreground sm:text-base">Universo da Diversão</span>
          </span>
        </Link>
      )}

      <div className="flex items-center gap-2">
        <div className="toy-card flex items-center gap-2 px-4 py-3 text-lg font-extrabold">
          <span className="text-2xl anim-sparkle">⭐</span>
          {progress.stars}
        </div>
        <Link
          to="/album"
          className="toy-card toy-press flex items-center gap-2 px-4 py-3 text-lg font-extrabold hover:scale-105 active:scale-95"
        >
          <span className="text-2xl">📖</span>
          <span className="hidden sm:inline">Álbum</span>
        </Link>
      </div>
    </header>
  );
}
