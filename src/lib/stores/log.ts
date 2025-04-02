import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Log } from "@/lib/types";

type LogState = {
  logs: Log[];
  addLog: (log: Log) => void;
};

export const useLogStore = create<LogState>()(
  persist(
    (set) => ({
      logs: [],

      addLog: (log) =>
        set((state) => ({
          logs: [...state.logs, log],
        })),
    }),
    {
      name: "log-storage",
    },
  ),
);
