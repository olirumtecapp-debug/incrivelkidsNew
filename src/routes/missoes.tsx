import { createFileRoute, Link } from "@tanstack/react-router";
import { LivingSky } from "@/components/kids/LivingSky";
import { TopBar } from "@/components/kids/TopBar";
import { useProgress } from "@/lib/progress";
import { ACHIEVEMENTS, DAILY_MISSIONS, currentEvent } from "@/lib/kids-extras";
import { playSound } from "@/lib/sound";

export const Route = createFileRoute("/missoes")({
  head: () => ({
    meta: [
      { title: "Missões e Conquistas — Incríveis Jogos Kids" },
      {
        name: "description",
        content: "Cumpra missões diárias, ganhe moedas e desbloqueie conquistas coloridas brincando todo dia.",
      },
      { property: "og:title", content: "Missões e Conquistas — Incríveis Jogos Kids" },
      { property: "og:description", content: "Missões diárias e conquistas para brincar todos os dias." },
    ],
  }),
  component: MissoesPage,
});

function MissoesPage() {
  const { progress, claimMission } = useProgress();
  const event = currentEvent();

  return (
    <div className="relative min-h-screen overflow-hidden pb-20">
      <LivingSky />
      <TopBar back="/" />

      <main className="relative z-10 mx-auto w-full max-w-3xl px-4 pt-6 sm:px-6">
        <h1 className="font-display text-center text-3xl font-extrabold sm:text-4xl">
          Missões do Dia 🎯
        </h1>

        <div
          className="toy-card mt-5 flex items-center gap-3 p-4"
          style={{ background: `linear-gradient(120deg, color-mix(in oklab, ${event.color} 30%, white), white)` }}
        >
          <span className="text-5xl anim-wiggle">{event.emoji}</span>
          <div>
            <p className="font-display text-lg font-extrabold">{event.title}</p>
            <p className="text-sm font-bold text-muted-foreground">{event.message}</p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {DAILY_MISSIONS.map((mission) => {
            const value = Math.min(mission.progress(progress.daily), mission.goal);
            const done = value >= mission.goal;
            const claimed = progress.daily.claimed.includes(mission.id);
            return (
              <div key={mission.id} className="toy-card flex items-center gap-3 p-4">
                <span className="text-4xl">{mission.emoji}</span>
                <div className="flex-1">
                  <p className="font-display text-lg font-extrabold leading-tight">{mission.title}</p>
                  <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-white/80">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${(value / mission.goal) * 100}%` }}
                    />
                  </div>
                  <p className="mt-1 text-sm font-bold text-muted-foreground">
                    {value}/{mission.goal} • prêmio 🪙 {mission.reward}
                  </p>
                </div>
                <button
                  disabled={!done || claimed}
                  onClick={() => {
                    playSound("coin");
                    claimMission(mission.id);
                  }}
                  className="toy-card toy-press px-4 py-3 font-display font-extrabold disabled:opacity-50"
                >
                  {claimed ? "✅" : "🎁"}
                </button>
              </div>
            );
          })}
        </div>

        <h2 className="mt-10 font-display text-2xl font-extrabold">Conquistas 🏆</h2>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {ACHIEVEMENTS.map((achievement) => {
            const unlocked = progress.achievements.includes(achievement.id);
            return (
              <div
                key={achievement.id}
                className={`toy-card flex flex-col items-center gap-1 p-4 text-center ${
                  unlocked ? "" : "opacity-50 grayscale"
                }`}
              >
                <span className="text-4xl">{unlocked ? achievement.emoji : "🔒"}</span>
                <p className="font-display text-base font-extrabold leading-tight">{achievement.title}</p>
                <p className="text-xs font-bold text-muted-foreground">{achievement.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <Link to="/perfil" className="toy-card toy-press px-6 py-4 font-display text-lg font-extrabold">
            🎨 Meu avatar
          </Link>
          <Link to="/" className="toy-card toy-press px-6 py-4 font-display text-lg font-extrabold">
            🏙 Cidade
          </Link>
        </div>
      </main>
    </div>
  );
}
