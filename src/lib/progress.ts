import { useCallback, useEffect, useState } from "react";
import { ACHIEVEMENTS, DAILY_MISSIONS } from "./kids-extras";

export type Avatar = { face: string; hat: string; color: string };

export type DailyState = {
  date: string;
  wins: number;
  stars: number;
  worlds: string[];
  claimed: string[];
};

export type Progress = {
  stars: number;
  coins: number;
  played: string[];
  stickers: string[];
  avatar: Avatar;
  pets: string[];
  activePet: string | null;
  daily: DailyState;
  achievements: string[];
  totalWins: number;
  sound: boolean;
};

const KEY = "incriveis-jogos-kids-v1";

export function today() {
  return new Date().toISOString().slice(0, 10);
}

const empty: Progress = {
  stars: 0,
  coins: 0,
  played: [],
  stickers: [],
  avatar: { face: "🐻", hat: "none", color: "var(--sky)" },
  pets: [],
  activePet: null,
  daily: { date: today(), wins: 0, stars: 0, worlds: [], claimed: [] },
  achievements: [],
  totalWins: 0,
  sound: true,
};

function freshDaily(daily?: Partial<DailyState>): DailyState {
  if (!daily || daily.date !== today()) {
    return { date: today(), wins: 0, stars: 0, worlds: [], claimed: [] };
  }
  return {
    date: daily.date,
    wins: daily.wins ?? 0,
    stars: daily.stars ?? 0,
    worlds: daily.worlds ?? [],
    claimed: daily.claimed ?? [],
  };
}

function read(): Progress {
  if (typeof window === "undefined") return empty;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return empty;
    const p = JSON.parse(raw) as Partial<Progress>;
    return {
      ...empty,
      ...p,
      avatar: { ...empty.avatar, ...(p.avatar ?? {}) },
      played: p.played ?? [],
      stickers: p.stickers ?? [],
      pets: p.pets ?? [],
      achievements: p.achievements ?? [],
      daily: freshDaily(p.daily),
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

function checkAchievements(p: Progress): Progress {
  const unlocked = ACHIEVEMENTS.filter((a) => a.check(p) && !p.achievements.includes(a.id));
  if (!unlocked.length) return p;
  return { ...p, achievements: [...p.achievements, ...unlocked.map((a) => a.id)] };
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

  const update = useCallback((fn: (current: Progress) => Progress) => {
    const next = checkAchievements(fn(read()));
    write(next);
    return next;
  }, []);

  const reward = useCallback(
    (gameId: string, stars: number, sticker?: string, worldId?: string) =>
      update((current) => {
        const daily = freshDaily(current.daily);
        return {
          ...current,
          stars: current.stars + stars,
          coins: current.coins + stars,
          totalWins: current.totalWins + 1,
          played: current.played.includes(gameId) ? current.played : [...current.played, gameId],
          stickers:
            sticker && !current.stickers.includes(sticker)
              ? [...current.stickers, sticker]
              : current.stickers,
          daily: {
            ...daily,
            wins: daily.wins + 1,
            stars: daily.stars + stars,
            worlds:
              worldId && !daily.worlds.includes(worldId) ? [...daily.worlds, worldId] : daily.worlds,
          },
        };
      }),
    [update],
  );

  const claimMission = useCallback(
    (missionId: string) =>
      update((current) => {
        const mission = DAILY_MISSIONS.find((m) => m.id === missionId);
        const daily = freshDaily(current.daily);
        if (!mission || daily.claimed.includes(missionId) || mission.progress(daily) < mission.goal) {
          return current;
        }
        return {
          ...current,
          coins: current.coins + mission.reward,
          stars: current.stars + mission.reward,
          daily: { ...daily, claimed: [...daily.claimed, missionId] },
        };
      }),
    [update],
  );

  const buyPet = useCallback(
    (petId: string, price: number) =>
      update((current) => {
        if (current.pets.includes(petId) || current.coins < price) return current;
        return {
          ...current,
          coins: current.coins - price,
          pets: [...current.pets, petId],
          activePet: current.activePet ?? petId,
        };
      }),
    [update],
  );

  const setActivePet = useCallback(
    (petId: string | null) => update((current) => ({ ...current, activePet: petId })),
    [update],
  );

  const setAvatar = useCallback(
    (patch: Partial<Avatar>) =>
      update((current) => ({ ...current, avatar: { ...current.avatar, ...patch } })),
    [update],
  );

  const toggleSound = useCallback(
    () => update((current) => ({ ...current, sound: !current.sound })),
    [update],
  );

  const resetAll = useCallback(() => write({ ...empty, daily: freshDaily() }), []);

  return {
    progress,
    reward,
    claimMission,
    buyPet,
    setActivePet,
    setAvatar,
    toggleSound,
    resetAll,
  };
}
