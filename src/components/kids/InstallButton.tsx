import { Link } from "@tanstack/react-router";
import { useInstallPrompt } from "@/lib/pwa";
import { playSound } from "@/lib/sound";

export function InstallButton() {
  const { canInstall, installed, install } = useInstallPrompt();

  if (installed) return null;

  if (canInstall) {
    return (
      <button
        onClick={() => {
          playSound("click");
          void install();
        }}
        aria-label="Instalar o aplicativo"
        className="toy-card toy-press flex items-center gap-2 px-3 py-3 text-lg font-extrabold hover:scale-105 active:scale-95"
      >
        <span className="text-2xl">📲</span>
        <span className="hidden font-display lg:inline">Instalar</span>
      </button>
    );
  }

  return (
    <Link
      to="/instalar"
      aria-label="Como instalar e jogar"
      className="toy-card toy-press flex items-center gap-2 px-3 py-3 text-lg font-extrabold hover:scale-105 active:scale-95"
    >
      <span className="text-2xl">📲</span>
    </Link>
  );
}
