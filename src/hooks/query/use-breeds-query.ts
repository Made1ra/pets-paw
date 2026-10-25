import { useQuery } from "@tanstack/react-query";

import { fetcher } from "@/lib/utils";

type BreedOption = { id: string; name: string };

export function useBreedsQuery() {
  return useQuery({
    queryKey: ["breeds"],
    queryFn: ({ signal }) => fetcher<BreedOption[]>("/breeds", { signal }),
  });
}
