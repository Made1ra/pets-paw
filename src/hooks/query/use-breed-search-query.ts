import { useQuery } from "@tanstack/react-query";

import { fetcher } from "@/lib/fetcher";

export type BreedSearchResult = {
  id: string;
  name: string;
  image?: { url: string };
};

export function useBreedSearchQuery(term: string) {
  return useQuery({
    queryKey: ["breed-search", term],
    queryFn: ({ signal }) => {
      const params = new URLSearchParams({ q: term });

      return fetcher<BreedSearchResult[]>(`/breeds/search?${params}`, {
        signal,
      });
    },
    enabled: term.length > 0,
  });
}
