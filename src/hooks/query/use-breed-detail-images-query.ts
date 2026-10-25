import { useQuery } from "@tanstack/react-query";

import { fetcher } from "@/lib/utils";

type BreedDetailImage = {
  id: string;
  url: string;
  breeds?: { id: string; name: string }[];
};

export function useBreedDetailImagesQuery(id: string) {
  return useQuery({
    queryKey: ["breed-detail-images", id],
    queryFn: ({ signal }) => {
      const params = new URLSearchParams({
        has_breeds: "1",
        breed_ids: id,
        limit: "5",
      });

      return fetcher<BreedDetailImage[]>(`/images/search?${params}`, {
        signal,
      });
    },
  });
}
