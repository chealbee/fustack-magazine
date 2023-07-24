import { create } from "zustand";

interface UseAdminStore {
  types: { name: string; id: number }[];
  brands: { name: string; id: number }[];

  setTypes: (types: { name: string; id: number }[]) => void;
  setBrands: (types: { name: string; id: number }[]) => void;
}

export const useAdmin = create<UseAdminStore>()((set, get) => ({
  brands: [],
  types: [],

  setTypes: (types) => {
    set({ types: types });
  },

  setBrands: (brands) => {
    set({ brands: brands });
  },
}));
