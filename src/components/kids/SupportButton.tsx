import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { playSound } from "@/lib/sound";

const PIX_CODE =
  "00020101021126580014br.gov.bcb.pix0136ccc2fd5a-cc51-4626-ac9b-8010315042f55204000053039865802BR5924MURILO FERREIRA DA SILVA6009SAO PAULO622905251KYF6GJBG4K0TVYH7QKHP9TSD63042519";

export function SupportButton() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2500);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PIX_CODE);
    } catch {
      const area = document.createElement("textarea");
      area.value = PIX_CODE;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    playSound("coin");
    setCopied(true);
  };

  return (
    <>
      <button
        onClick={() => {
          playSound("click");
          setOpen(true);
        }}
        aria-label="Apoiar o projeto"
        className="toy-card toy-press flex items-center px-3 py-3 text-lg font-extrabold hover:scale-105 active:scale-95"
      >
        <span className="text-2xl anim-pulse-heart">❤️</span>
      </button>

      {open && typeof document !== "undefined" && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-3 backdrop-blur-sm sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label="Apoiar o projeto"
          onClick={() => setOpen(false)}
        >
          <div
            className="toy-card anim-pop w-full max-w-md p-5 text-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="text-5xl anim-pulse-heart">❤️</div>
            <h2 className="font-display mt-2 text-2xl font-extrabold">Apoie o projeto</h2>
            <p className="mt-2 text-sm font-bold text-muted-foreground">
              Os Incríveis Jogos Kids são gratuitos e sem anúncios. Se as crianças se divertiram,
              você pode ajudar com qualquer valor via Pix. 💛
            </p>

            <div className="mt-4 rounded-3xl bg-white/70 p-4 text-left">
              <p className="text-sm font-extrabold">Banco C6</p>
              <p className="text-sm font-bold text-muted-foreground">
                Favorecido: Murilo Ferreira da Silva
              </p>
              <p className="mt-3 text-xs font-extrabold uppercase tracking-wide text-muted-foreground">
                Pix copia e cola
              </p>
              <p className="mt-1 max-h-20 overflow-hidden break-all rounded-2xl bg-black/5 p-2 font-mono text-[10px] leading-3">
                {PIX_CODE}
              </p>
            </div>

            <button
              onClick={copy}
              className="toy-card toy-press mt-4 w-full px-5 py-4 font-display text-lg font-extrabold hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(120deg, var(--bubblegum), white)" }}
            >
              {copied ? "✅ Código Pix copiado!" : "📋 Copiar código Pix"}
            </button>
            {copied && (
              <p className="anim-pop mt-2 text-sm font-extrabold">
                Pix copia e cola copiado! Banco C6 — Murilo Ferreira da Silva
              </p>
            )}

            <button
              onClick={() => setOpen(false)}
              className="mt-4 w-full rounded-3xl px-5 py-3 font-display font-extrabold text-muted-foreground hover:bg-black/5"
            >
              Fechar
            </button>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
