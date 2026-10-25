import { useQuery } from "@tanstack/react-query";

import { fetcher } from "@/lib/fetcher";

type BreedDetail = {
  name: string;
  description: string;
  temperament: string;
  origin: string;
  weight: { metric: string };
  life_span: string;
};

export function useBreedDetailQuery(id: string) {
  return useQuery({
    queryKey: ["breed-detail", id],
    queryFn: ({ signal }) =>
      fetcher<BreedDetail>(`/breeds/${encodeURIComponent(id)}`, { signal }),
  });
}
