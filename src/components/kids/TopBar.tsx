import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { useProgress } from "@/lib/progress";
import { playSound, setSoundEnabled } from "@/lib/sound";
import { FullscreenButton } from "./FullscreenButton";
import { InstallButton } from "./InstallButton";
import { SupportButton } from "./SupportButton";

export function TopBar({ back }: { back?: string }) {
  const { progress, toggleSound } = useProgress();

  useEffect(() => {
    setSoundEnabled(progress.sound);
  }, [progress.sound]);

  return (
    <header className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-4 sm:px-6">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:flex-wrap sm:justify-between">
        {back ? (
          <a
            href={back}
            className="toy-card toy-press flex items-center gap-2 px-4 py-3 text-lg font-bold hover:scale-105 active:scale-95"
            aria-label="Voltar"
          >
            <span className="text-2xl shrink-0">⬅️</span>
            <span className="truncate hidden sm:inline">Voltar</span>
          </a>
        ) : (
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <span className="text-4xl anim-wiggle shrink-0">🎠</span>
            <span className="font-display min-w-0 truncate text-xl leading-5 font-extrabold sm:text-2xl">
              Incríveis Jogos
              <span className="block truncate text-sm text-muted-foreground sm:text-base">Universo da Diversão</span>
            </span>
          </Link>
        )}

        <div className="flex flex-wrap items-center justify-end gap-2">
          <div className="toy-card flex items-center gap-2 px-3 py-2 text-base font-extrabold sm:px-3 sm:py-3 sm:text-lg">
            <span className="text-xl anim-sparkle sm:text-2xl">⭐</span>
            {progress.stars}
          </div>
          <div className="toy-card hidden items-center gap-2 px-3 py-3 text-lg font-extrabold sm:flex">
            <span className="text-2xl">🪙</span>
            {progress.coins}
          </div>
          <Link
            to="/missoes"
            aria-label="Missões e conquistas"
            className="toy-card toy-press flex items-center gap-2 px-3 py-2 text-base font-extrabold hover:scale-105 active:scale-95 sm:px-3 sm:py-3 sm:text-lg"
          >
            <span className="text-xl sm:text-2xl">🎯</span>
          </Link>
          <Link
            to="/perfil"
            aria-label="Meu avatar e pets"
            className="toy-card toy-press flex items-center gap-2 px-3 py-2 text-base font-extrabold hover:scale-105 active:scale-95 sm:px-3 sm:py-3 sm:text-lg"
          >
            <span className="text-xl sm:text-2xl">{progress.avatar.face}</span>
          </Link>
          <Link
            to="/album"
            aria-label="Álbum de adesivos"
            className="toy-card toy-press flex items-center gap-2 px-3 py-2 text-base font-extrabold hover:scale-105 active:scale-95 sm:px-3 sm:py-3 sm:text-lg"
          >
            <span className="text-xl sm:text-2xl">📖</span>
          </Link>
          <button
            onClick={() => {
              playSound("click");
              toggleSound();
            }}
            aria-label={progress.sound ? "Desligar sons" : "Ligar sons"}
            aria-pressed={progress.sound}
            className="toy-card toy-press flex items-center px-3 py-2 text-base font-extrabold hover:scale-105 active:scale-95 sm:px-3 sm:py-3 sm:text-lg"
          >
            <span className="text-xl sm:text-2xl">{progress.sound ? "🔊" : "🔇"}</span>
          </button>
          <FullscreenButton />
          <InstallButton />
          <SupportButton />
        </div>
      </div>
    </header>
  );
}
