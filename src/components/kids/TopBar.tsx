import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { useProgress } from "@/lib/progress";
import { playSound, setSoundEnabled } from "@/lib/sound";

export function TopBar({ back }: { back?: string }) {
  const { progress, toggleSound } = useProgress();

  useEffect(() => {
    setSoundEnabled(progress.sound);
  }, [progress.sound]);

  return (
    <header className="relative z-10 mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 pt-4 sm:px-6">
      {back ? (
        <a
          href={back}
          className="toy-card toy-press flex items-center gap-2 px-4 py-3 text-lg font-bold hover:scale-105 active:scale-95"
          aria-label="Voltar"
        >
          <span className="text-2xl">⬅️</span>
          <span className="hidden sm:inline">Voltar</span>
        </a>
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
        <div className="toy-card flex items-center gap-2 px-3 py-3 text-lg font-extrabold">
          <span className="text-2xl anim-sparkle">⭐</span>
          {progress.stars}
        </div>
        <div className="toy-card hidden items-center gap-2 px-3 py-3 text-lg font-extrabold sm:flex">
          <span className="text-2xl">🪙</span>
          {progress.coins}
        </div>
        <Link
          to="/missoes"
          aria-label="Missões e conquistas"
          className="toy-card toy-press flex items-center gap-2 px-3 py-3 text-lg font-extrabold hover:scale-105 active:scale-95"
        >
          <span className="text-2xl">🎯</span>
        </Link>
        <Link
          to="/perfil"
          aria-label="Meu avatar e pets"
          className="toy-card toy-press flex items-center gap-2 px-3 py-3 text-lg font-extrabold hover:scale-105 active:scale-95"
        >
          <span className="text-2xl">{progress.avatar.face}</span>
        </Link>
        <Link
          to="/album"
          aria-label="Álbum de adesivos"
          className="toy-card toy-press flex items-center gap-2 px-3 py-3 text-lg font-extrabold hover:scale-105 active:scale-95"
        >
          <span className="text-2xl">📖</span>
        </Link>
        <button
          onClick={() => {
            playSound("click");
            toggleSound();
          }}
          aria-label={progress.sound ? "Desligar sons" : "Ligar sons"}
          aria-pressed={progress.sound}
          className="toy-card toy-press flex items-center px-3 py-3 text-lg font-extrabold hover:scale-105 active:scale-95"
        >
          <span className="text-2xl">{progress.sound ? "🔊" : "🔇"}</span>
        </button>
      </div>
    </header>
  );
}
