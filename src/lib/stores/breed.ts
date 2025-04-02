import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Breed } from "@/lib/types";

type BreedState = {
  breeds: Breed[];
  addBreed: (breed: Breed) => void;
  removeBreed: (id: string) => void;
};

export const useBreedStore = create<BreedState>()(
  persist(
    (set) => ({
      breeds: [],

      addBreed: (breed) =>
        set((state) => ({
          breeds: state.breeds.includes(breed)
            ? state.breeds
            : [...state.breeds, breed],
        })),

      removeBreed: (id) =>
        set((state) => ({
          breeds: state.breeds.filter(
            (breed) => breed.reference_image_id !== id,
          ),
        })),
    }),
    {
      name: "breed-storage",
    },
  ),
);
