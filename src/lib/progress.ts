import { useCallback, useEffect, useState } from "react";

export type Progress = {
  stars: number;
  played: string[];
  stickers: string[];
};

const KEY = "incriveis-jogos-kids-v1";
const empty: Progress = { stars: 0, played: [], stickers: [] };

function read(): Progress {
  if (typeof window === "undefined") return empty;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return empty;
    const parsed = JSON.parse(raw) as Partial<Progress>;
    return {
      stars: parsed.stars ?? 0,
      played: parsed.played ?? [],
      stickers: parsed.stickers ?? [],
    };
  } catch {
    return empty;
  }
}

const listeners = new Set<(value: Progress) => void>();

function write(next: Progress) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  }
  listeners.forEach((listener) => listener(next));
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(empty);

  useEffect(() => {
    setProgress(read());
    const listener = (value: Progress) => setProgress(value);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  const reward = useCallback((gameId: string, stars: number, sticker?: string) => {
    const current = read();
    const next: Progress = {
      stars: current.stars + stars,
      played: current.played.includes(gameId) ? current.played : [...current.played, gameId],
      stickers:
        sticker && !current.stickers.includes(sticker)
          ? [...current.stickers, sticker]
          : current.stickers,
    };
    write(next);
    return next;
  }, []);

  const resetAll = useCallback(() => write(empty), []);

  return { progress, reward, resetAll };
}
