import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LivingSky } from "@/components/kids/LivingSky";
import { TopBar } from "@/components/kids/TopBar";
import { useFullscreen, useInstallPrompt } from "@/lib/pwa";
import { playSound } from "@/lib/sound";

export const Route = createFileRoute("/instalar")({
  head: () => ({
    meta: [
      { title: "Instalar e jogar no celular ou PC — Incríveis Jogos Kids" },
      {
        name: "description",
        content:
          "Aprenda a instalar os Incríveis Jogos Kids no celular Android, iPhone, computador ou notebook e jogar em tela cheia.",
      },
      { property: "og:title", content: "Instalar e jogar no celular ou PC — Incríveis Jogos Kids" },
      {
        property: "og:description",
        content: "Instale o app em qualquer aparelho e jogue em tela cheia, grátis.",
      },
    ],
  }),
  component: InstalarPage,
});

function InstalarPage() {
  const { canInstall, installed, install } = useInstallPrompt();
  const { isFullscreen, toggle } = useFullscreen();
  const [address, setAddress] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setAddress(window.location.origin);
  }, []);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      playSound("coin");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden pb-20">
      <LivingSky />
      <TopBar back="/" />

      <main className="relative z-10 mx-auto w-full max-w-3xl px-4 pt-6 sm:px-6">
        <h1 className="font-display text-center text-3xl font-extrabold sm:text-4xl">
          📲 Jogue no celular e no computador
        </h1>
        <p className="mt-2 text-center text-base font-bold text-muted-foreground">
          Os Incríveis Jogos Kids funcionam em smartphone, tablet, PC e notebook — no navegador ou
          instalado como aplicativo.
        </p>

        <section className="toy-card mt-6 p-5">
          <h2 className="font-display text-xl font-extrabold">🖥 Endereço para jogar no computador</h2>
          <p className="mt-1 text-sm font-bold text-muted-foreground">
            Digite este endereço no navegador (Chrome, Edge ou Firefox) do PC ou notebook:
          </p>
          <p className="mt-3 break-all rounded-2xl bg-black/5 p-3 text-center font-mono text-sm font-bold">
            {address || "carregando..."}
          </p>
          <button
            onClick={copyAddress}
            className="toy-card toy-press mt-3 w-full px-5 py-3 font-display font-extrabold hover:scale-105 active:scale-95"
          >
            {copied ? "✅ Endereço copiado!" : "📋 Copiar endereço"}
          </button>
        </section>

        <section className="toy-card mt-4 p-5">
          <h2 className="font-display text-xl font-extrabold">⛶ Tela cheia</h2>
          <p className="mt-1 text-sm font-bold text-muted-foreground">
            Deixe o jogo ocupar a tela toda — ótimo para crianças pequenas. Dá para ativar e
            desativar quando quiser (no PC também funciona com a tecla F11).
          </p>
          <button
            onClick={() => {
              playSound("click");
              void toggle();
            }}
            className="toy-card toy-press mt-3 w-full px-5 py-4 font-display text-lg font-extrabold hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(120deg, var(--turquoise), white)" }}
          >
            {isFullscreen ? "🡼 Desativar tela cheia" : "⛶ Ativar tela cheia"}
          </button>
        </section>

        <section className="toy-card mt-4 p-5">
          <h2 className="font-display text-xl font-extrabold">📥 Instalar o aplicativo</h2>
          {installed ? (
            <p className="mt-2 text-sm font-bold text-muted-foreground">
              ✅ O app já está instalado neste aparelho. É só abrir pelo ícone! 🎠
            </p>
          ) : (
            <>
              <button
                onClick={() => {
                  playSound("click");
                  void install();
                }}
                disabled={!canInstall}
                className="toy-card toy-press mt-3 w-full px-5 py-4 font-display text-lg font-extrabold hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
                style={{ background: "linear-gradient(120deg, var(--bubblegum), white)" }}
              >
                {canInstall ? "📲 Instalar agora" : "📲 Instalação manual (veja abaixo)"}
              </button>
              {!canInstall && (
                <p className="mt-2 text-xs font-bold text-muted-foreground">
                  Se o botão estiver desativado, o seu navegador pede a instalação pelo menu — siga o
                  passo a passo do seu aparelho.
                </p>
              )}
            </>
          )}

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Card
              emoji="🤖"
              title="Android (Chrome)"
              steps={[
                "Abra o jogo no Chrome",
                'Toque no menu ⋮ no canto superior',
                'Escolha "Instalar app" ou "Adicionar à tela inicial"',
                "Confirme — o ícone aparece junto dos outros apps",
              ]}
            />
            <Card
              emoji="🍎"
              title="iPhone e iPad (Safari)"
              steps={[
                "Abra o jogo no Safari",
                "Toque no botão Compartilhar ⬆️",
                'Escolha "Adicionar à Tela de Início"',
                'Toque em "Adicionar"',
              ]}
            />
            <Card
              emoji="💻"
              title="PC / Notebook (Chrome ou Edge)"
              steps={[
                "Abra o endereço acima no navegador",
                "Clique no ícone de instalar 📥 na barra de endereço",
                'Ou vá em ⋮ → "Instalar Incríveis Jogos Kids"',
                "O jogo abre em janela própria, como um programa",
              ]}
            />
            <Card
              emoji="🧭"
              title="Outros navegadores"
              steps={[
                "Firefox e Opera: menu → Adicionar à tela inicial",
                "Sem instalar também funciona: basta salvar o endereço nos favoritos",
                "Use o botão ⛶ para jogar em tela cheia",
              ]}
            />
          </div>
        </section>

        <section className="toy-card mt-4 p-5">
          <h2 className="font-display text-xl font-extrabold">🎮 Como jogar no computador</h2>
          <ul className="mt-2 space-y-1 text-sm font-bold text-muted-foreground">
            <li>🖱 Use o mouse: clicar é o mesmo que tocar na tela.</li>
            <li>⌨️ Nas corridas dá para usar as setas ⬅️ ➡️ do teclado.</li>
            <li>🔊 Ative o som no botão da barra de cima para ouvir as musiquinhas.</li>
            <li>⛶ F11 (ou o botão de tela cheia) deixa a brincadeira em tela inteira.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

function Card({ emoji, title, steps }: { emoji: string; title: string; steps: string[] }) {
  return (
    <div className="rounded-3xl bg-white/70 p-4">
      <p className="font-display text-lg font-extrabold">
        {emoji} {title}
      </p>
      <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm font-bold text-muted-foreground">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
