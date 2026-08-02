import { createFileRoute, Link } from "@tanstack/react-router";
import { LivingSky } from "@/components/kids/LivingSky";
import { TopBar } from "@/components/kids/TopBar";
import { useProgress } from "@/lib/progress";
import { AVATAR_COLORS, AVATAR_FACES, AVATAR_HATS, PETS } from "@/lib/kids-extras";
import { playSound } from "@/lib/sound";

export const Route = createFileRoute("/perfil")({
  head: () => ({
    meta: [
      { title: "Meu Avatar e Pets — Incríveis Jogos Kids" },
      {
        name: "description",
        content: "Monte seu avatar, escolha chapéus e adote pets fofinhos com as estrelas conquistadas.",
      },
      { property: "og:title", content: "Meu Avatar e Pets — Incríveis Jogos Kids" },
      { property: "og:description", content: "Personalize seu personagem e adote bichinhos divertidos." },
    ],
  }),
  component: PerfilPage,
});

function PerfilPage() {
  const { progress, setAvatar, buyPet, setActivePet } = useProgress();
  const hat = AVATAR_HATS.find((h) => h.id === progress.avatar.hat);
  const pet = PETS.find((p) => p.id === progress.activePet);

  return (
    <div className="relative min-h-screen overflow-hidden pb-20">
      <LivingSky />
      <TopBar back="/" />

      <main className="relative z-10 mx-auto w-full max-w-4xl px-4 pt-6 sm:px-6">
        <h1 className="font-display text-center text-3xl font-extrabold sm:text-4xl">
          Meu Personagem 🎨
        </h1>

        <div
          className="toy-card mx-auto mt-6 flex w-full max-w-sm flex-col items-center gap-2 p-6"
          style={{
            background: `linear-gradient(160deg, color-mix(in oklab, ${progress.avatar.color} 34%, white), white)`,
          }}
        >
          <div className="relative">
            {hat?.emoji && <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl">{hat.emoji}</span>}
            <span className="text-8xl anim-float">{progress.avatar.face}</span>
          </div>
          {pet && <span className="text-5xl anim-wiggle">{pet.emoji}</span>}
          <span className="rounded-full bg-white/80 px-4 py-1 font-display text-lg font-extrabold">
            🪙 {progress.coins} moedas
          </span>
        </div>

        <Section title="Escolha o rostinho 😊">
          {AVATAR_FACES.map((face) => (
            <Choice
              key={face}
              active={progress.avatar.face === face}
              onClick={() => {
                playSound("click");
                setAvatar({ face });
              }}
              label={`Rosto ${face}`}
            >
              <span className="text-4xl">{face}</span>
            </Choice>
          ))}
        </Section>

        <Section title="Chapéu 🎩">
          {AVATAR_HATS.map((item) => (
            <Choice
              key={item.id}
              active={progress.avatar.hat === item.id}
              onClick={() => {
                playSound("click");
                setAvatar({ hat: item.id });
              }}
              label={item.label}
            >
              <span className="text-4xl">{item.emoji || "🚫"}</span>
            </Choice>
          ))}
        </Section>

        <Section title="Cor favorita 🌈">
          {AVATAR_COLORS.map((color) => (
            <Choice
              key={color}
              active={progress.avatar.color === color}
              onClick={() => {
                playSound("click");
                setAvatar({ color });
              }}
              label="Cor do avatar"
            >
              <span className="block h-10 w-10 rounded-full" style={{ background: color }} />
            </Choice>
          ))}
        </Section>

        <Section title="Adote um pet 🐾">
          {PETS.map((item) => {
            const owned = progress.pets.includes(item.id);
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (owned) {
                    playSound("click");
                    setActivePet(progress.activePet === item.id ? null : item.id);
                  } else if (progress.coins >= item.price) {
                    playSound("coin");
                    buyPet(item.id, item.price);
                  } else {
                    playSound("wrong");
                  }
                }}
                className={`toy-card toy-press flex w-28 flex-col items-center gap-1 p-3 active:scale-95 ${
                  progress.activePet === item.id ? "ring-4 ring-primary" : ""
                }`}
              >
                <span className="text-4xl">{item.emoji}</span>
                <span className="font-display text-sm font-extrabold">{item.name}</span>
                <span className="rounded-full bg-white/80 px-2 py-0.5 text-xs font-bold">
                  {owned
                    ? progress.activePet === item.id
                      ? "Comigo ✅"
                      : "Escolher"
                    : `🪙 ${item.price}`}
                </span>
              </button>
            );
          })}
        </Section>

        <div className="mt-8 flex justify-center gap-3">
          <Link to="/missoes" className="toy-card toy-press px-6 py-4 font-display text-lg font-extrabold">
            🎯 Missões
          </Link>
          <Link to="/album" className="toy-card toy-press px-6 py-4 font-display text-lg font-extrabold">
            📖 Álbum
          </Link>
        </div>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="font-display text-xl font-extrabold sm:text-2xl">{title}</h2>
      <div className="mt-3 flex flex-wrap justify-center gap-3">{children}</div>
    </section>
  );
}

function Choice({
  active,
  onClick,
  label,
  children,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={`toy-card toy-press p-3 active:scale-95 ${active ? "ring-4 ring-primary" : ""}`}
    >
      {children}
    </button>
  );
}
