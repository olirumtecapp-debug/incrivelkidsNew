import { useFullscreen, useHydrated } from "@/lib/pwa";
import { playSound } from "@/lib/sound";

export function FullscreenButton() {
  const hydrated = useHydrated();
  const { isFullscreen, toggle } = useFullscreen();

  if (!hydrated || typeof document === "undefined" || !document.documentElement.requestFullscreen) {
    return null;
  }

  return (
    <button
      onClick={() => {
        playSound("click");
        void toggle();
      }}
      aria-label={isFullscreen ? "Sair da tela cheia" : "Jogar em tela cheia"}
      aria-pressed={isFullscreen}
      className="toy-card toy-press flex items-center px-3 py-2 text-base font-extrabold hover:scale-105 active:scale-95 sm:px-3 sm:py-3 sm:text-lg"
    >
      <span className="text-2xl">{isFullscreen ? "🡼" : "⛶"}</span>
    </button>
  );
}
