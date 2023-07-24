import { create } from "zustand";

interface UseCatalogFiltersStore {
  sortBy: {
    value: string;
    label: string;
  };
  brand?: { name: string; id: number; chaked: boolean }[];
  type?: { name: string; id: number; chaked: boolean }[];
  price: {
    from: number;
    to: number;
  };
  isReset: boolean;

  resetAllFilters: () => void;
  addSortBy: (sortBy: { value: string; label: string }) => void;
  setPrice: (price: { from: number; to: number }) => void;
  setSortByType: (type: { name: string; id: number; chaked: boolean }) => void;
  setSortByBrand: (brand: {
    name: string;
    id: number;
    chaked: boolean;
  }) => void;
}

const initioalState = {
  sortBy: {
    value: "",
    label: "",
  },
  isReset: false,
  brand: [],
  type: [],
  price: {
    from: 0,
    to: 10000,
  },
};
export const useCatalogFilters = create<UseCatalogFiltersStore>()(
  (set, get) => ({
    ...initioalState,

    resetAllFilters: () =>
      set(() => {
        return { ...initioalState, isReset: true };
      }),

    addSortBy: (sortBy) => set({ sortBy }),
    setPrice: (price) => set({ price: price }),

    setSortByType: (type) =>
      set(() => {
        const types = get().type || [];
        if (type.chaked) {
          set({ type: [...types, type], isReset: false });
        } else {
          const filteredtypes = types.filter((ell) => ell.id !== type.id);
          set({ type: [...filteredtypes], isReset: false });
        }
        return {};
      }),

    setSortByBrand: (brand) =>
      set(() => {
        const brands = get().brand || [];
        if (brand.chaked) {
          return { brand: [...brands, brand], isReset: false };
        } else {
          const filteredBrands = brands.filter((ell) => ell.id !== brand.id);
          return { brand: [...filteredBrands], isReset: false };
        }
      }),
  })
);
