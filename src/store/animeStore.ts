import { create } from 'zustand';

interface AnimeStore {
  favorites: any[];
  addFavorite: (anime: any) => void;
}

export const useAnimeStore = create<AnimeStore>((set) => ({
  favorites: [],
  addFavorite: (anime) =>
    set((state) => ({
      favorites: [...state.favorites, anime]
    }))
}));