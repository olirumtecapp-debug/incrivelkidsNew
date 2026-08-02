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
        className="toy-card toy-press flex items-center px-3 py-2 text-base font-extrabold hover:scale-105 active:scale-95 sm:px-3 sm:py-3 sm:text-lg"
      >
        <span className="text-xl sm:text-2xl">📲</span>
        <span className="hidden font-display lg:inline">Instalar</span>
      </button>
    );
  }

  return (
    <Link
      to="/instalar"
      aria-label="Como instalar e jogar"
      className="toy-card toy-press flex items-center px-3 py-2 text-base font-extrabold hover:scale-105 active:scale-95 sm:px-3 sm:py-3 sm:text-lg"
    >
      <span className="text-xl sm:text-2xl">📲</span>
    </Link>
  );
}
