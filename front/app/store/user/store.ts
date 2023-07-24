import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UseCatalogFiltersStore {
  user: {
    email: string;
    id: number;
    token: string;
    roles: [
      {
        id: number;
        value: string;
      }
    ];
  } | null;
  setUser: (user: {
    email: string;
    id: number;
    token: string;
    roles: [
      {
        id: number;
        value: string;
      }
    ];
  }) => void;
  logOut: () => void;
}

const initioalState = { user: null };
export const useUser = create<UseCatalogFiltersStore>()(
  persist(
    (set, get) => ({
      ...initioalState,
      setUser: (user) => {
        set({ user });
      },

      logOut: () => {
        set({ user: null });
      },
    }),
    {
      name: "user",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
